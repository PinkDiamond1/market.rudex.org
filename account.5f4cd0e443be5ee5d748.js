(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 2497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(565);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(709);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1263);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(566);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2325);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(744);
/* harmony import */ var _AccountAssets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2498);
/* harmony import */ var _AccountAssetCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2501);
/* harmony import */ var _AccountAssetUpdate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2502);
/* harmony import */ var _AccountMembership__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2507);
/* harmony import */ var _AccountVesting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2509);
/* harmony import */ var _AccountPermissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2510);
/* harmony import */ var _AccountSignedMessages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2518);
/* harmony import */ var _AccountWhitelist__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2521);
/* harmony import */ var _AccountVoting__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2522);
/* harmony import */ var _AccountOverview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2525);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// import AccountLeftPanel from "./AccountLeftPanel";








/* Nested routes */











var AccountPage = function (_React$Component) {
    _inherits(AccountPage, _React$Component);

    function AccountPage() {
        _classCallCheck(this, AccountPage);

        return _possibleConstructorReturn(this, (AccountPage.__proto__ || Object.getPrototypeOf(AccountPage)).apply(this, arguments));
    }

    _createClass(AccountPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.account) {
                actions_AccountActions__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentAccount.defer(this.props.account.get("name"));

                // Fetch possible fee assets here to avoid async issues later (will resolve assets)
                common_account_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getPossibleFees(this.props.account, "transfer");
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.account) {
                var npName = np.account.get("name");
                var currentName = this.props.account && this.props.account.get("name");

                if (!this.props.account || npName !== currentName) {
                    // Update the current account in order to access the header right menu options
                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentAccount.defer(npName);
                    // Fetch possible fee assets here to avoid async issues later (will resolve assets)
                    common_account_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getPossibleFees(np.account, "transfer");
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                myActiveAccounts = _props.myActiveAccounts,
                searchAccounts = _props.searchAccounts,
                settings = _props.settings,
                wallet_locked = _props.wallet_locked,
                account = _props.account,
                hiddenAssets = _props.hiddenAssets;


            if (!account) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_10__["default"], null);
            }
            var account_name = this.props.account.get("name");
            var isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].isMyAccount(account);

            var passOnProps = {
                account_name: account_name,
                myActiveAccounts: myActiveAccounts,
                searchAccounts: searchAccounts,
                settings: settings,
                wallet_locked: wallet_locked,
                account: account,
                isMyAccount: isMyAccount,
                hiddenAssets: hiddenAssets,
                contained: true,
                balances: account.get("balances", Object(immutable__WEBPACK_IMPORTED_MODULE_9__["List"])()).toList(),
                orders: account.get("orders", Object(immutable__WEBPACK_IMPORTED_MODULE_9__["List"])()).toList(),
                viewSettings: this.props.viewSettings,
                proxy: account.getIn(["options", "voting_account"]),
                history: this.props.history
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"],
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name,
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountOverview__WEBPACK_IMPORTED_MODULE_21__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Redirect"], {
                            from: "/account/" + account_name + "/overview",
                            to: "/account/" + account_name
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/assets",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountAssets__WEBPACK_IMPORTED_MODULE_12__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/create-asset",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountAssetCreate__WEBPACK_IMPORTED_MODULE_13__["AccountAssetCreate"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/update-asset/:asset",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountAssetUpdate__WEBPACK_IMPORTED_MODULE_14__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/member-stats",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountMembership__WEBPACK_IMPORTED_MODULE_15__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/vesting",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountVesting__WEBPACK_IMPORTED_MODULE_16__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/permissions",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPermissions__WEBPACK_IMPORTED_MODULE_17__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/voting",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountVoting__WEBPACK_IMPORTED_MODULE_20__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/whitelist",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountWhitelist__WEBPACK_IMPORTED_MODULE_19__["default"], passOnProps);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
                            path: "/account/" + account_name + "/signedmessages",
                            exact: true,
                            render: function render() {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountSignedMessages__WEBPACK_IMPORTED_MODULE_18__["default"], passOnProps);
                            }
                        })
                    )
                )
            );
        }
    }]);

    return AccountPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountPage.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired
};

AccountPage = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(AccountPage, {
    show_loader: true
});

var AccountPageStoreWrapper = function (_React$Component2) {
    _inherits(AccountPageStoreWrapper, _React$Component2);

    function AccountPageStoreWrapper() {
        _classCallCheck(this, AccountPageStoreWrapper);

        return _possibleConstructorReturn(this, (AccountPageStoreWrapper.__proto__ || Object.getPrototypeOf(AccountPageStoreWrapper)).apply(this, arguments));
    }

    _createClass(AccountPageStoreWrapper, [{
        key: "render",
        value: function render() {
            var account_name = this.props.match.params.account_name;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountPage, _extends({}, this.props, { account: account_name }));
        }
    }]);

    return AccountPageStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(AccountPageStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            myActiveAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts,
            searchAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().searchAccounts,
            settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings,
            hiddenAssets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().hiddenAssets,
            wallet_locked: stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().locked,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(744);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1286);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1285);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(565);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(865);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1013);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(588);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(567);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(879);
/* harmony import */ var _Modal_IssueModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2499);
/* harmony import */ var _Modal_ReserveAssetModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2500);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1030);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1218);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2478);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var AccountAssets = function (_React$Component) {
    _inherits(AccountAssets, _React$Component);

    function AccountAssets(props) {
        _classCallCheck(this, AccountAssets);

        var _this = _possibleConstructorReturn(this, (AccountAssets.__proto__ || Object.getPrototypeOf(AccountAssets)).call(this, props));

        _this.state = {
            create: {
                symbol: "",
                name: "",
                description: "",
                max_supply: 1000000000000000,
                precision: 4
            },
            issue: {
                amount: 0,
                to: "",
                to_id: "",
                asset_id: "",
                symbol: ""
            },
            errors: {
                symbol: null
            },
            isValid: false,
            searchTerm: ""
        };

        _this._searchAccounts = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._searchAccounts, 150);
        return _this;
    }

    _createClass(AccountAssets, [{
        key: "_checkAssets",
        value: function _checkAssets(assets, force) {
            if (this.props.account.get("assets").size) return;
            var lastAsset = assets.sort(function (a, b) {
                if (a.symbol > b.symbol) {
                    return 1;
                } else if (a.symbol < b.symbol) {
                    return -1;
                } else {
                    return 0;
                }
            }).last();

            if (assets.size === 0 || force) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__["default"].getAssetList.defer("A", 100);
                this.setState({ assetsFetched: 100 });
            } else if (assets.size >= this.state.assetsFetched) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__["default"].getAssetList.defer(lastAsset.symbol, 100);
                this.setState({ assetsFetched: this.state.assetsFetched + 99 });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this._checkAssets(nextProps.assets);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkAssets(this.props.assets, true);
        }
    }, {
        key: "_onIssueInput",
        value: function _onIssueInput(value, e) {
            var key = e.target.id;
            var issue = this.state.issue;


            if (key === "to") {
                this._searchAccounts(e.target.value);
                issue.to = e.target.value;
                var account = this.props.searchAccounts.findEntry(function (name) {
                    return name === e.target.value;
                });

                issue.to_id = account ? account[0] : null;
            } else {
                issue[value] = e.target.value;
            }

            this.setState({ issue: issue });
        }
    }, {
        key: "_searchAccounts",
        value: function _searchAccounts(searchTerm) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__["default"].accountSearch(searchTerm);
        }
    }, {
        key: "_reserveButtonClick",
        value: function _reserveButtonClick(assetId, e) {
            e.preventDefault();
            this.setState({ reserve: assetId });
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10___default.a.publish("reserve_asset", "open");
        }
    }, {
        key: "_issueButtonClick",
        value: function _issueButtonClick(asset_id, symbol, e) {
            e.preventDefault();
            var issue = this.state.issue;

            issue.asset_id = asset_id;
            issue.symbol = symbol;
            this.setState({ issue: issue });
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10___default.a.publish("issue_asset", "open");
        }
    }, {
        key: "_editButtonClick",
        value: function _editButtonClick(symbol, account_name, e) {
            e.preventDefault();
            this.props.history.push("/account/" + account_name + "/update-asset/" + symbol);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                account = _props.account,
                account_name = _props.account_name,
                assets = _props.assets,
                assetsList = _props.assetsList;


            var accountExists = true;
            if (!account) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "circle" });
            } else if (account.notFound) {
                accountExists = false;
            }
            if (!accountExists) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            component: "h5",
                            content: "account.errors.not_found",
                            name: account_name
                        })
                    )
                );
            }

            if (assetsList.length) {
                assets = assets.clear();
                assetsList.forEach(function (a) {
                    if (a) assets = assets.set(a.get("id"), a.toJS());
                });
            }
            var myAssets = assets.filter(function (asset) {
                return asset.issuer === account.get("id");
            }).sort(function (a, b) {
                return parseInt(a.id.substring(4, a.id.length), 10) - parseInt(b.id.substring(4, b.id.length), 10);
            }).map(function (asset) {
                var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_17__["default"].parseDescription(asset.options.description);
                var desc = description.short_name ? description.short_name : description.main;

                if (desc.length > 100) {
                    desc = desc.substr(0, 100) + "...";
                }

                var dynamicObject = _this2.props.getDynamicObject(asset.dynamic_asset_data_id);

                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "tr",
                    { key: asset.symbol },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                            { to: "/asset/" + asset.symbol },
                            asset.symbol
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        { style: { maxWidth: "250px" } },
                        desc
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        dynamicObject ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            amount: parseInt(dynamicObject.get("current_supply"), 10),
                            asset: asset.id
                        }) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            amount: parseInt(asset.options.max_supply, 10),
                            asset: asset.id
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        !asset.bitasset_data_id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "button",
                            {
                                onClick: _this2._issueButtonClick.bind(_this2, asset.id, asset.symbol),
                                className: "button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.trxTypes.asset_issue" })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        !asset.bitasset_data_id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "button",
                            {
                                onClick: _this2._reserveButtonClick.bind(_this2, asset.id),
                                className: "button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.trxTypes.asset_reserve" })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "button",
                            {
                                onClick: _this2._editButtonClick.bind(_this2, asset.symbol, account_name),
                                className: "button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.trxTypes.asset_update" })
                        )
                    )
                );
            }).toArray();

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_20__["Tabs"],
                            {
                                segmented: false,
                                setting: "issuedAssetsTab",
                                className: "account-tabs",
                                tabsClass: "account-overview bordered-header content-block",
                                contentClass: "padding"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_20__["Tab"],
                                { title: "account.user_issued_assets.issued_assets" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "content-block" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "table",
                                        { className: "table dashboard-table table-hover" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "thead",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "tr",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.user_issued_assets.symbol" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    "th",
                                                    { style: { maxWidth: "200px" } },
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.user_issued_assets.description" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                    component: "th",
                                                    content: "markets.supply"
                                                }),
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.user_issued_assets.max_supply" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        colSpan: "3"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.perm.action" })
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "tbody",
                                            null,
                                            myAssets
                                        )
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "content-block" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                                        {
                                            to: "/account/" + account_name + "/create-asset/"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "button",
                                            { className: "button" },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.trxTypes.asset_create" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_8__["default"],
                        { id: "issue_asset", overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_IssueModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                asset_to_issue: this.state.issue.asset_id,
                                onClose: function onClose() {
                                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10___default.a.publish("issue_asset", "close");
                                }
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_8__["default"],
                        { id: "reserve_asset", overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_ReserveAssetModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                assetId: this.state.reserve,
                                account: account,
                                onClose: function onClose() {
                                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_10___default.a.publish("reserve_asset", "close");
                                }
                            })
                        )
                    )
                )
            );
        }
    }]);

    return AccountAssets;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AccountAssets.defaultProps = {
    symbol: "",
    name: "",
    description: "",
    max_supply: 0,
    precision: 0
};
AccountAssets.propTypes = {
    symbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};


AccountAssets = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_19__["default"])(AccountAssets, {
    propNames: ["assetsList"],
    asList: true,
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_16__["connect"])(AccountAssets, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps(props) {
        var assets = Object(immutable__WEBPACK_IMPORTED_MODULE_18__["Map"])(),
            assetsList = Object(immutable__WEBPACK_IMPORTED_MODULE_18__["List"])();
        if (props.account.get("assets", []).size) {
            props.account.get("assets", []).forEach(function (id) {
                assetsList = assetsList.push(id);
            });
        } else {
            assets = stores_AssetStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().assets;
        }
        return { assets: assets, assetsList: assetsList };
    }
}));

/***/ }),

/***/ 2499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var api_ApplicationApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(586);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1221);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1012);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(588);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var IssueModal = function (_React$Component) {
    _inherits(IssueModal, _React$Component);

    function IssueModal(props) {
        _classCallCheck(this, IssueModal);

        var _this = _possibleConstructorReturn(this, (IssueModal.__proto__ || Object.getPrototypeOf(IssueModal)).call(this, props));

        _this.state = {
            amount: props.amount,
            to: props.to,
            to_id: null,
            memo: ""
        };
        return _this;
    }

    _createClass(IssueModal, [{
        key: "onAmountChanged",
        value: function onAmountChanged(_ref) {
            var amount = _ref.amount;

            this.setState({ amount: amount });
        }
    }, {
        key: "onToAccountChanged",
        value: function onToAccountChanged(to) {
            var state = to ? { to: to.get("name"), to_id: to.get("id") } : { to_id: null };
            this.setState(state);
        }
    }, {
        key: "onToChanged",
        value: function onToChanged(to) {
            this.setState({ to: to, to_id: null });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var asset_to_issue = this.props.asset_to_issue;

            var precision = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(asset_to_issue.get("precision"));
            var amount = this.state.amount.toString().replace(/,/g, "");
            amount *= precision;

            api_ApplicationApi__WEBPACK_IMPORTED_MODULE_6__["default"].issue_asset(this.state.to_id, asset_to_issue.get("issuer"), asset_to_issue.get("id"), amount, this.state.memo ? new Buffer(this.state.memo, "utf-8") : this.state.memo).catch(function (err) {
                console.log("issue error caught here:", err);
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_9__["default"].addNotification({
                    message: "Failed to issue the asset, probably due to an invalid amount being issued", //: ${this.state.wallet_public_name}
                    level: "error",
                    autoDismiss: 10
                });
            });

            this.setState({
                amount: 0,
                to: "",
                to_id: null,
                memo: ""
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            var asset_to_issue = this.props.asset_to_issue.get("id");
            var tabIndex = 1;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container ", style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            label: "modal.issue.to",
                            accountName: this.state.to,
                            onAccountChanged: this.onToAccountChanged.bind(this),
                            onChange: this.onToChanged.bind(this),
                            account: this.state.to,
                            tabIndex: tabIndex++
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            label: "modal.issue.amount",
                            amount: this.state.amount,
                            onChange: this.onAmountChanged.bind(this),
                            asset: asset_to_issue,
                            assets: [asset_to_issue],
                            tabIndex: tabIndex++
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                component: "span",
                                content: "transfer.memo"
                            }),
                            " ",
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "transfer.optional" }),
                            ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                            rows: "3",
                            value: this.state.memo,
                            tabIndex: tabIndex++,
                            onChange: this.onMemoChanged.bind(this)
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block button-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                type: "submit",
                                className: "button primary",
                                onClick: this.onSubmit.bind(this, this.state.to, this.state.amount),
                                disabled: !this.state.to_id || !this.state.amount,
                                tabIndex: tabIndex++
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("modal.issue.submit")
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button primary hollow",
                                onClick: this.props.onClose,
                                tabIndex: tabIndex++
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("cancel")
                        )
                    )
                )
            );
        }
    }]);

    return IssueModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

IssueModal.propTypes = {
    asset_to_issue: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(IssueModal));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1012);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1286);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ReserveAssetModal = function (_React$Component) {
    _inherits(ReserveAssetModal, _React$Component);

    function ReserveAssetModal(props) {
        _classCallCheck(this, ReserveAssetModal);

        var _this = _possibleConstructorReturn(this, (ReserveAssetModal.__proto__ || Object.getPrototypeOf(ReserveAssetModal)).call(this, props));

        _this.state = {
            amount: 0
        };
        return _this;
    }

    _createClass(ReserveAssetModal, [{
        key: "onAmountChanged",
        value: function onAmountChanged(_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            this.setState({ amount: amount, asset: asset });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].get_asset_precision(this.state.asset.get("precision"));
            var amount = this.state.amount.replace(/,/g, "");
            amount *= precision;
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].reserveAsset(amount, this.props.assetId, this.props.account.get("id"));
            this.props.onClose();
        }
    }, {
        key: "render",
        value: function render() {
            var assetId = this.props.assetId;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { component: "h3", content: "modal.reserve.title" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container ", style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            label: "modal.reserve.amount",
                            amount: this.state.amount,
                            onChange: this.onAmountChanged.bind(this),
                            asset: assetId,
                            assets: [assetId],
                            display_balance: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                balance: this.props.account.getIn(["balances", assetId])
                            }),
                            tabIndex: 1
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block button-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "submit",
                            className: "button success",
                            onClick: this.onSubmit.bind(this),
                            value: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("modal.reserve.submit"),
                            tabIndex: 2
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "button",
                                onClick: this.props.onClose,
                                tabIndex: 3
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("cancel")
                        )
                    )
                )
            );
        }
    }]);

    return ReserveAssetModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReserveAssetModal);

/***/ }),

/***/ 2501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAssetCreate", function() { return AccountAssetCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitAssetOptions", function() { return BitAssetOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1286);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1051);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1013);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(895);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2416);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1287);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1030);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2478);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1012);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1031);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(chain_asset_constants__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(581);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var GRAPHENE_MAX_SHARE_SUPPLY = new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_MAX_SHARE_SUPPLY);

var BitAssetOptions = function (_React$Component) {
    _inherits(BitAssetOptions, _React$Component);

    function BitAssetOptions(props) {
        _classCallCheck(this, BitAssetOptions);

        var _this = _possibleConstructorReturn(this, (BitAssetOptions.__proto__ || Object.getPrototypeOf(BitAssetOptions)).call(this, props));

        _this.state = {
            backingAsset: props.backingAsset.get("symbol"),
            error: null
        };
        return _this;
    }

    _createClass(BitAssetOptions, [{
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
                if (asset.get("id") === "1.3.0" || asset.get("bitasset_data_id") && !asset.getIn(["bitasset", "is_prediction_market"])) {
                    if (this.props.isPredictionMarket && asset.get("precision") !== parseInt(this.props.assetPrecision, 10)) {
                        this.setState({
                            error: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.error_precision", { asset: this.props.assetSymbol })
                        });
                    } else {
                        this.props.onUpdate("short_backing_asset", asset.get("id"));
                    }
                } else {
                    this.setState({
                        error: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.error_invalid")
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var bitasset_opts = this.props.bitasset_opts;
            var error = this.state.error;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12 grid-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.feed_lifetime_sec" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "number",
                        value: bitasset_opts.feed_lifetime_sec / 60,
                        onChange: this.props.onUpdate.bind(this, "feed_lifetime_sec")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.minimum_feeds" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "number",
                        value: bitasset_opts.minimum_feeds,
                        onChange: this.props.onUpdate.bind(this, "minimum_feeds")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.force_settlement_delay_sec" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "number",
                        value: bitasset_opts.force_settlement_delay_sec / 60,
                        onChange: this.props.onUpdate.bind(this, "force_settlement_delay_sec")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.force_settlement_offset_percent" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "number",
                        value: bitasset_opts.force_settlement_offset_percent / chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_1_PERCENT,
                        onChange: this.props.onUpdate.bind(this, "force_settlement_offset_percent")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.maximum_force_settlement_volume" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "number",
                        value: bitasset_opts.maximum_force_settlement_volume / chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_1_PERCENT,
                        onChange: this.props.onUpdate.bind(this, "maximum_force_settlement_volume")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        label: "account.user_issued_assets.backing",
                        onChange: this._onInputBackingAsset.bind(this),
                        asset: this.state.backingAsset,
                        assetInput: this.state.backingAsset,
                        tabIndex: 1,
                        style: { width: "100%", paddingRight: "10px" },
                        onFound: this._onFoundBackingAsset.bind(this)
                    }),
                    error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block has-error" },
                        error
                    ) : null
                )
            );
        }
    }]);

    return BitAssetOptions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BitAssetOptions.propTypes = {
    backingAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    isUpdate: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.bool
};
BitAssetOptions.defaultProps = {
    isUpdate: false
};

BitAssetOptions = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_10__["default"])(BitAssetOptions);

var AccountAssetCreate = function (_React$Component2) {
    _inherits(AccountAssetCreate, _React$Component2);

    function AccountAssetCreate(props) {
        _classCallCheck(this, AccountAssetCreate);

        var _this2 = _possibleConstructorReturn(this, (AccountAssetCreate.__proto__ || Object.getPrototypeOf(AccountAssetCreate)).call(this, props));

        _this2.state = _this2.resetState(props);
        return _this2;
    }

    _createClass(AccountAssetCreate, [{
        key: "resetState",
        value: function resetState(props) {
            // let asset = props.asset.toJS();
            var isBitAsset = false;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(4);
            var corePrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(props.core.get("precision"));

            var _getPermissions2 = this._getPermissions({
                isBitAsset: isBitAsset
            }),
                flagBooleans = _getPermissions2.flagBooleans,
                permissionBooleans = _getPermissions2.permissionBooleans;

            // let flags = assetUtils.getFlags(flagBooleans);
            // let permissions = assetUtils.getPermissions(permissionBooleans, isBitAsset);
            // console.log("all permissions:", permissionBooleans, permissions)

            var coreRateBaseAssetName = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset("1.3.0").get("symbol");

            return {
                update: {
                    symbol: "",
                    precision: 4,
                    max_supply: 100000,
                    max_market_fee: 0,
                    market_fee_percent: 0,
                    description: { main: "" }
                },
                errors: {
                    max_supply: null
                },
                isValid: true,
                flagBooleans: flagBooleans,
                permissionBooleans: permissionBooleans,
                isBitAsset: isBitAsset,
                is_prediction_market: false,
                core_exchange_rate: {
                    quote: {
                        asset_id: null,
                        amount: 1
                    },
                    base: {
                        asset_id: "1.3.0",
                        amount: 1
                    }
                },
                bitasset_opts: {
                    feed_lifetime_sec: 60 * 60 * 24,
                    minimum_feeds: 7,
                    force_settlement_delay_sec: 60 * 60 * 24,
                    force_settlement_offset_percent: 1 * chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_1_PERCENT,
                    maximum_force_settlement_volume: 20 * chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_1_PERCENT,
                    short_backing_asset: "1.3.0"
                },
                marketInput: ""
            };
        }
    }, {
        key: "_getPermissions",
        value: function _getPermissions(state) {
            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getFlagBooleans(0, state.isBitAsset);
            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getFlagBooleans("all", state.isBitAsset);

            return {
                flagBooleans: flagBooleans,
                permissionBooleans: permissionBooleans
            };
        }
    }, {
        key: "_createAsset",
        value: function _createAsset(e) {
            e.preventDefault();
            var _state = this.state,
                update = _state.update,
                flagBooleans = _state.flagBooleans,
                permissionBooleans = _state.permissionBooleans,
                core_exchange_rate = _state.core_exchange_rate,
                isBitAsset = _state.isBitAsset,
                is_prediction_market = _state.is_prediction_market,
                bitasset_opts = _state.bitasset_opts;
            var account = this.props.account;


            var flags = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getFlags(flagBooleans, isBitAsset);
            var permissions = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getPermissions(permissionBooleans, isBitAsset);

            if (this.state.marketInput !== update.description.market) {
                update.description.market = "";
            }
            var description = JSON.stringify(update.description);

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].createAsset(account.get("id"), update, flags, permissions, core_exchange_rate, isBitAsset, is_prediction_market, bitasset_opts, description).then(function (result) {
                console.log("... AssetActions.createAsset(account_id, update)", account.get("id"), update, flags, permissions);
            });
        }
    }, {
        key: "_hasChanged",
        value: function _hasChanged() {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(this.state, this.resetState(this.props));
        }
    }, {
        key: "_reset",
        value: function _reset(e) {
            e.preventDefault();

            this.setState(this.resetState(this.props));
        }
    }, {
        key: "_forcePositive",
        value: function _forcePositive(number) {
            return parseFloat(number) < 0 ? "0" : number;
        }
    }, {
        key: "_onUpdateDescription",
        value: function _onUpdateDescription(value, e) {
            var update = this.state.update;

            var updateState = true;

            switch (value) {
                case "condition":
                    if (e.target.value.length > 60) {
                        updateState = false;
                        return;
                    }
                    update.description[value] = e.target.value;
                    break;

                case "short_name":
                    if (e.target.value.length > 32) {
                        updateState = false;
                        return;
                    }
                    update.description[value] = e.target.value;
                    break;

                case "market":
                    update.description[value] = e;
                    break;

                case "visible":
                    update.description[value] = !update.description[value];
                    break;

                default:
                    update.description[value] = e.target.value;
                    break;
            }

            if (updateState) {
                this.forceUpdate();
                this._validateEditFields(update);
            }
        }
    }, {
        key: "onChangeBitAssetOpts",
        value: function onChangeBitAssetOpts(value, e) {
            var bitasset_opts = this.state.bitasset_opts;


            switch (value) {
                case "force_settlement_offset_percent":
                case "maximum_force_settlement_volume":
                    bitasset_opts[value] = parseFloat(e.target.value) * chain_asset_constants__WEBPACK_IMPORTED_MODULE_16___default.a.GRAPHENE_1_PERCENT;
                    break;
                case "minimum_feeds":
                    bitasset_opts[value] = parseInt(e.target.value, 10);
                    break;
                case "feed_lifetime_sec":
                case "force_settlement_delay_sec":
                    console.log(e.target.value, parseInt(parseFloat(e.target.value) * 60, 10));
                    bitasset_opts[value] = parseInt(parseFloat(e.target.value) * 60, 10);
                    break;

                case "short_backing_asset":
                    bitasset_opts[value] = e;
                    break;

                default:
                    bitasset_opts[value] = e.target.value;
                    break;
            }

            this.forceUpdate();
        }
    }, {
        key: "_onUpdateInput",
        value: function _onUpdateInput(value, e) {
            var _state2 = this.state,
                update = _state2.update,
                errors = _state2.errors;

            var updateState = true;
            var shouldRestoreCursor = false;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.state.update.precision);
            var target = e.target;
            var caret = target.selectionStart;
            var inputValue = target.value;

            switch (value) {
                case "market_fee_percent":
                    update[value] = this._forcePositive(target.value);
                    break;

                case "max_market_fee":
                    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(inputValue).times(precision).gt(GRAPHENE_MAX_SHARE_SUPPLY)) {
                        errors.max_market_fee = "The number you tried to enter is too large";
                        return this.setState({ errors: errors });
                    }
                    target.value = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(target.value, this.state.update.precision);
                    update[value] = target.value;
                    break;

                case "precision":
                    // Enforce positive number
                    update[value] = this._forcePositive(target.value);
                    break;

                case "max_supply":
                    shouldRestoreCursor = true;

                    var regexp_numeral = new RegExp(/[[:digit:]]/);

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

                    target.value = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(target.value, this.state.update.precision);
                    update[value] = target.value;

                    // if ((new big(target.value)).times(Math.pow(10, precision).gt(GRAPHENE_MAX_SHARE_SUPPLY)) {
                    //     return this.setState({
                    //         update,
                    //         errors: {max_supply: "The number you tried to enter is too large"
                    //     }});
                    // }
                    break;

                case "symbol":
                    shouldRestoreCursor = true;
                    // Enforce uppercase
                    var symbol = target.value.toUpperCase();
                    // Enforce characters
                    var regexp = new RegExp("^[.A-Z0-9]+$");
                    if (symbol !== "" && !regexp.test(symbol)) {
                        break;
                    }
                    bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(symbol);
                    update[value] = this._forcePositive(symbol);
                    break;

                default:
                    update[value] = target.value;
                    break;
            }

            if (updateState) {
                this.setState({ update: update }, function () {
                    if (shouldRestoreCursor) {
                        var selectionStart = caret - (inputValue.length - update[value].length);
                        target.setSelectionRange(selectionStart, selectionStart);
                    }
                });
                this._validateEditFields(update);
            }
        }
    }, {
        key: "_validateEditFields",
        value: function _validateEditFields(new_state) {
            var errors = {
                max_supply: null
            };

            errors.symbol = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainValidation"].is_valid_symbol_error(new_state.symbol);
            var existingAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(new_state.symbol);
            if (existingAsset) {
                errors.symbol = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.exists");
            }

            try {
                errors.max_supply = new_state.max_supply <= 0 ? counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.max_positive") : new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(new_state.max_supply).times(Math.pow(10, new_state.precision)).gt(GRAPHENE_MAX_SHARE_SUPPLY) ? counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.too_large") : null;
            } catch (err) {
                console.log("err:", err);
                errors.max_supply = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.user_issued_assets.too_large");
            }

            var isValid = !errors.symbol && !errors.max_supply;

            this.setState({ isValid: isValid, errors: errors });
        }
    }, {
        key: "_onFlagChange",
        value: function _onFlagChange(key) {
            var booleans = this.state.flagBooleans;
            booleans[key] = !booleans[key];
            this.setState({
                flagBooleans: booleans
            });
        }
    }, {
        key: "_onPermissionChange",
        value: function _onPermissionChange(key) {
            var booleans = this.state.permissionBooleans;
            booleans[key] = !booleans[key];
            this.setState({
                permissionBooleans: booleans
            });
        }
    }, {
        key: "_onInputCoreAsset",
        value: function _onInputCoreAsset(type, asset) {
            if (type === "quote") {
                this.setState({
                    quoteAssetInput: asset
                });
            } else if (type === "base") {
                this.setState({
                    baseAssetInput: asset
                });
            }
        }
    }, {
        key: "_onFoundCoreAsset",
        value: function _onFoundCoreAsset(type, asset) {
            if (asset) {
                var core_rate = this.state.core_exchange_rate;
                core_rate[type].asset_id = asset.get("id");

                this.setState({
                    core_exchange_rate: core_rate
                });

                this._validateEditFields({
                    max_supply: this.state.max_supply,
                    core_exchange_rate: core_rate
                });
            }
        }
    }, {
        key: "_onInputMarket",
        value: function _onInputMarket(asset) {
            this.setState({
                marketInput: asset
            });
        }
    }, {
        key: "_onFoundMarketAsset",
        value: function _onFoundMarketAsset(asset) {
            if (asset) {
                this._onUpdateDescription("market", asset.get("symbol"));
            }
        }
    }, {
        key: "_onCoreRateChange",
        value: function _onCoreRateChange(type, e) {
            var amount = void 0,
                asset = void 0;
            if (type === "quote") {
                amount = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(e.target.value, this.state.update.precision);
                asset = null;
            } else {
                if (!e || !("amount" in e)) {
                    return;
                }
                amount = e.amount == "" ? "0" : common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(e.amount.toString().replace(/,/g, ""), this.props.core.get("precision"));
                asset = e.asset.get("id");
            }

            var core_exchange_rate = this.state.core_exchange_rate;

            core_exchange_rate[type] = {
                amount: amount,
                asset_id: asset
            };
            this.forceUpdate();
        }
    }, {
        key: "_onToggleBitAsset",
        value: function _onToggleBitAsset() {
            var update = this.state.update;

            this.state.isBitAsset = !this.state.isBitAsset;
            if (!this.state.isBitAsset) {
                this.state.is_prediction_market = false;
            }

            var _getPermissions3 = this._getPermissions(this.state),
                flagBooleans = _getPermissions3.flagBooleans,
                permissionBooleans = _getPermissions3.permissionBooleans;

            this.state.flagBooleans = flagBooleans;
            this.state.permissionBooleans = permissionBooleans;

            this.forceUpdate();
        }
    }, {
        key: "_onTogglePM",
        value: function _onTogglePM() {
            this.state.is_prediction_market = !this.state.is_prediction_market;
            this.state.update.precision = this.props.core.get("precision");
            this.state.core_exchange_rate.base.asset_id = this.props.core.get("id");
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                globalObject = _props.globalObject,
                core = _props.core;
            var _state3 = this.state,
                errors = _state3.errors,
                isValid = _state3.isValid,
                update = _state3.update,
                flagBooleans = _state3.flagBooleans,
                permissionBooleans = _state3.permissionBooleans,
                core_exchange_rate = _state3.core_exchange_rate,
                is_prediction_market = _state3.is_prediction_market,
                isBitAsset = _state3.isBitAsset,
                bitasset_opts = _state3.bitasset_opts;

            // Estimate the asset creation fee from the symbol character length

            var symbolLength = update.symbol.length,
                createFee = "N/A";

            if (symbolLength === 3) {
                createFee = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    amount: Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["estimateFee"])("asset_create", ["symbol3"], globalObject),
                    asset: "1.3.0"
                });
            } else if (symbolLength === 4) {
                createFee = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    amount: Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["estimateFee"])("asset_create", ["symbol4"], globalObject),
                    asset: "1.3.0"
                });
            } else if (symbolLength > 4) {
                createFee = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    amount: Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["estimateFee"])("asset_create", ["long_symbol"], globalObject),
                    asset: "1.3.0"
                });
            }

            // Loop over flags
            var flags = [];
            var getFlag = function getFlag(key, onClick, isChecked) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { key: "table_" + key, className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none", width: "80%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "account.user_issued_assets." + key
                                }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "switch",
                                        style: { marginBottom: "10px" },
                                        onClick: onClick
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: isChecked
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                )
                            )
                        )
                    )
                );
            };
            for (var key in permissionBooleans) {
                if (permissionBooleans[key] && key !== "charge_market_fee") {
                    flags.push(getFlag(key, this._onFlagChange.bind(this, key), flagBooleans[key]));
                }
            }

            flags.push(getFlag("visible", this._onUpdateDescription.bind(this, "visible"), update.description.visible ? false : update.description.visible === false ? true : false));

            // Loop over permissions
            var permissions = [];
            for (var _key in permissionBooleans) {
                permissions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { key: "table_" + _key, className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none", width: "80%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "account.user_issued_assets." + _key
                                }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "switch",
                                        style: { marginBottom: "10px" },
                                        onClick: this._onPermissionChange.bind(this, _key)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: permissionBooleans[_key],
                                        onChange: function onChange() {}
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                )
                            )
                        )
                    )
                ));
            }

            var confirmButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this._reset.bind(this),
                        value: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.perm.reset")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.reset" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", { disabled: !isValid }),
                        onClick: this._createAsset.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "header.create_asset" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tabs-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "header.create_asset" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tabs"],
                            {
                                setting: "createAssetTab",
                                className: "account-tabs",
                                tabsClass: "account-overview no-padding bordered-header content-block",
                                contentClass: "grid-block shrink small-vertical medium-horizontal padding",
                                segmented: false,
                                actionButtons: confirmButtons
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tab"],
                                { title: "account.user_issued_assets.primary" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.symbol" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "text",
                                            value: update.symbol,
                                            onChange: this._onUpdateInput.bind(this, "symbol")
                                        })
                                    ),
                                    errors.symbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        errors.symbol
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.max_supply" }),
                                        " ",
                                        update.symbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            "(",
                                            update.symbol,
                                            ")"
                                        ) : null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "text",
                                            value: update.max_supply,
                                            onChange: this._onUpdateInput.bind(this, "max_supply")
                                        })
                                    ),
                                    errors.max_supply ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        errors.max_supply
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.decimals" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            min: "0",
                                            max: "8",
                                            step: "1",
                                            type: "range",
                                            value: update.precision,
                                            onChange: this._onUpdateInput.bind(this, "precision")
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        update.precision
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            style: { marginBottom: 10 },
                                            className: "txtlabel cancel"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.precision_warning" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "table",
                                        {
                                            className: "table",
                                            style: { width: "inherit" }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tbody",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tr",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    { style: { border: "none" } },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                                        content: "account.user_issued_assets.mpa"
                                                    }),
                                                    ":"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    { style: { border: "none" } },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "div",
                                                        {
                                                            className: "switch",
                                                            style: {
                                                                marginBottom: "10px"
                                                            },
                                                            onClick: this._onToggleBitAsset.bind(this)
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                            type: "checkbox",
                                                            checked: isBitAsset
                                                        }),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "table",
                                        {
                                            className: "table",
                                            style: { width: "inherit" }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tbody",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tr",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    {
                                                        style: { border: "none" }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                                        content: "account.user_issued_assets.pm"
                                                    }),
                                                    ":"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    {
                                                        style: { border: "none" }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "div",
                                                        {
                                                            className: "switch",
                                                            style: {
                                                                marginBottom: "10px"
                                                            },
                                                            onClick: this._onTogglePM.bind(this)
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                            type: "checkbox",
                                                            checked: is_prediction_market
                                                        }),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                                    )
                                                )
                                            )
                                        )
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "h3",
                                        content: "account.user_issued_assets.core_exchange_rate"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "grid-block no-margin" },
                                            errors.quote_asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.quote_asset
                                            ) : null,
                                            errors.base_asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.base_asset
                                            ) : null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        className: "amount-selector",
                                                        style: {
                                                            width: "100%",
                                                            paddingRight: "10px"
                                                        }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                                        component: "label",
                                                        content: "account.user_issued_assets.quote"
                                                    }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "div",
                                                        { className: "inline-label" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                            type: "text",
                                                            placeholder: "0.0",
                                                            onChange: this._onCoreRateChange.bind(this, "quote"),
                                                            value: core_exchange_rate.quote.amount
                                                        })
                                                    )
                                                )
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                    label: "account.user_issued_assets.base",
                                                    amount: core_exchange_rate.base.amount,
                                                    onChange: this._onCoreRateChange.bind(this, "base"),
                                                    asset: core_exchange_rate.base.asset_id,
                                                    assets: [core_exchange_rate.base.asset_id],
                                                    placeholder: "0.0",
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingLeft: "10px"
                                                    }
                                                })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "h5",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.price" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    null,
                                                    ":",
                                                    " ",
                                                    common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(core_exchange_rate.quote.amount * common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(update.precision), {
                                                        precision: update.precision
                                                    }, core_exchange_rate.base.amount * common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(core), core), 2 + (parseInt(update.precision, 10) || 8))
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    null,
                                                    " ",
                                                    update.symbol,
                                                    "/",
                                                    core.get("symbol")
                                                )
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "account.user_issued_assets.cer_warning_1",
                                            component: "label",
                                            className: "has-error"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "account.user_issued_assets.cer_warning_2",
                                            component: "p"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        createFee
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tab"],
                                { title: "account.user_issued_assets.description" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "label",
                                        content: "account.user_issued_assets.description"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                                            style: { height: "7rem" },
                                            rows: "1",
                                            value: update.description.main,
                                            onChange: this._onUpdateDescription.bind(this, "main")
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "label",
                                        content: "account.user_issued_assets.short"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "text",
                                            rows: "1",
                                            value: update.description.short_name,
                                            onChange: this._onUpdateDescription.bind(this, "short_name")
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "label",
                                        content: "account.user_issued_assets.market"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        label: "account.user_issued_assets.name",
                                        onChange: this._onInputMarket.bind(this),
                                        asset: this.state.marketInput,
                                        assetInput: this.state.marketInput,
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        },
                                        onFound: this._onFoundMarketAsset.bind(this)
                                    }),
                                    is_prediction_market ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.condition"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "label",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "text",
                                                rows: "1",
                                                value: update.description.condition,
                                                onChange: this._onUpdateDescription.bind(this, "condition")
                                            })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.expiry"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "label",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "date",
                                                value: update.description.expiry,
                                                onChange: this._onUpdateDescription.bind(this, "expiry")
                                            })
                                        )
                                    ) : null
                                )
                            ),
                            isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tab"],
                                { title: "account.user_issued_assets.bitasset_opts" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BitAssetOptions, {
                                    bitasset_opts: bitasset_opts,
                                    onUpdate: this.onChangeBitAssetOpts.bind(this),
                                    backingAsset: bitasset_opts.short_backing_asset,
                                    assetPrecision: update.precision,
                                    assetSymbol: update.symbol,
                                    isPredictionMarket: is_prediction_market
                                })
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tab"],
                                { title: "account.permissions" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { maxWidth: 800 } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            path: "components/AccountAssetCreate",
                                            section: "permissions"
                                        })
                                    ),
                                    permissions
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_14__["Tab"],
                                { title: "account.user_issued_assets.flags" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { maxWidth: 800 } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            path: "components/AccountAssetCreate",
                                            section: "flags"
                                        })
                                    ),
                                    permissionBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.market_fee"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "table",
                                            { className: "table" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tbody",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "tr",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.charge_market_fee" }),
                                                        ":"
                                                    ),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "switch",
                                                                style: {
                                                                    marginBottom: "10px"
                                                                },
                                                                onClick: this._onFlagChange.bind(this, "charge_market_fee")
                                                            },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                                type: "checkbox",
                                                                checked: flagBooleans.charge_market_fee
                                                            }),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                                                    disabled: !flagBooleans.charge_market_fee
                                                })
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "label",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.market_fee" }),
                                                " ",
                                                "(%)",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                    type: "number",
                                                    value: update.market_fee_percent,
                                                    onChange: this._onUpdateInput.bind(this, "market_fee_percent")
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "label",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.max_market_fee" }),
                                                " ",
                                                "(",
                                                update.symbol,
                                                ")",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                    type: "number",
                                                    value: update.max_market_fee,
                                                    onChange: this._onUpdateInput.bind(this, "max_market_fee")
                                                })
                                            ),
                                            errors.max_market_fee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.max_market_fee
                                            ) : null
                                        )
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "h3",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.flags" })
                                    ),
                                    flags
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountAssetCreate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountAssetCreate.propTypes = {
    core: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainObject.isRequired
};
AccountAssetCreate.defaultProps = {
    globalObject: "2.0.0",
    core: "1.3.0"
};


AccountAssetCreate = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_10__["default"])(AccountAssetCreate);



/***/ }),

/***/ 2502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1286);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1051);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1013);
/* harmony import */ var _Utility_FormattedFee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2503);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(895);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1218);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1012);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1334);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1221);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2416);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1287);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1030);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2478);
/* harmony import */ var _AccountAssetCreate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2501);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1031);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(chain_asset_constants__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _AssetWhitelist__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2504);
/* harmony import */ var _AssetFeedProducers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2505);
/* harmony import */ var components_Modal_BaseModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _FundFeePool__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2506);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(744);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }































var GRAPHENE_MAX_SHARE_SUPPLY = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(chain_asset_constants__WEBPACK_IMPORTED_MODULE_21___default.a.GRAPHENE_MAX_SHARE_SUPPLY);

var AccountAssetUpdate = function (_React$Component) {
    _inherits(AccountAssetUpdate, _React$Component);

    function AccountAssetUpdate(props) {
        _classCallCheck(this, AccountAssetUpdate);

        var _this = _possibleConstructorReturn(this, (AccountAssetUpdate.__proto__ || Object.getPrototypeOf(AccountAssetUpdate)).call(this, props));

        _this.state = _this.resetState(props);
        return _this;
    }

    _createClass(AccountAssetUpdate, [{
        key: "_openConfirm",
        value: function _openConfirm() {
            this.refs.confirm_modal.show();
        }
    }, {
        key: "_cancelConfirm",
        value: function _cancelConfirm() {
            this.refs.confirm_modal.onClose();
        }
    }, {
        key: "resetState",
        value: function resetState(props) {
            var asset = props.asset.toJS();
            var isBitAsset = asset.bitasset_data_id !== undefined;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(asset.precision);
            var corePrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(props.core.get("precision"));

            var max_market_fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(asset.options.max_market_fee).div(precision).toString();
            var max_supply = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(asset.options.max_supply).div(precision).toString();
            var core_exchange_rate = asset.options.core_exchange_rate;
            core_exchange_rate.quote.amount = core_exchange_rate.quote.asset_id === asset.id ? new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(core_exchange_rate.quote.amount).div(precision).toString() : new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(core_exchange_rate.quote.amount).div(corePrecision).toString();

            core_exchange_rate.base.amount = core_exchange_rate.base.asset_id === asset.id ? new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(core_exchange_rate.base.amount).div(precision).toString() : new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(core_exchange_rate.base.amount).div(corePrecision).toString();

            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].getFlagBooleans(asset.options.flags, isBitAsset);
            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].getFlagBooleans(asset.options.issuer_permissions, isBitAsset);
            asset.options.market_fee_percent /= 100;

            var coreRateQuoteAssetName = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(core_exchange_rate.quote.asset_id).get("symbol");
            var coreRateBaseAssetName = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(core_exchange_rate.base.asset_id).get("symbol");

            return {
                update: {
                    max_supply: max_supply,
                    max_market_fee: max_market_fee,
                    market_fee_percent: asset.options.market_fee_percent,
                    description: common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].parseDescription(asset.options.description)
                },
                core_exchange_rate: core_exchange_rate,
                issuer: asset.issuer,
                new_issuer_account_id: null,
                issuer_account_name: null,
                new_funder_account: props.account.get("id"),
                asset_to_update: asset.id,
                errors: {
                    max_supply: null
                },
                new_authority_id: null,
                authority_name: null,
                isValid: true,
                flagBooleans: flagBooleans,
                permissionBooleans: permissionBooleans,
                isBitAsset: isBitAsset,
                coreRateQuoteAssetName: coreRateQuoteAssetName,
                quoteAssetInput: coreRateQuoteAssetName,
                coreRateBaseAssetName: coreRateBaseAssetName,
                baseAssetInput: coreRateBaseAssetName,
                claimFeesAmount: 0,
                bitasset_opts: isBitAsset ? asset.bitasset.options : null,
                original_bitasset_opts: isBitAsset ? props.asset.getIn(["bitasset", "options"]).toJS() : null,
                marketInput: "",
                whitelist_authorities: props.asset.getIn(["options", "whitelist_authorities"]),
                blacklist_authorities: props.asset.getIn(["options", "blacklist_authorities"]),
                whitelist_markets: props.asset.getIn(["options", "whitelist_markets"]),
                blacklist_markets: props.asset.getIn(["options", "blacklist_markets"]),
                maxFeedProducers: props.globalObject.getIn(["parameters", "maximum_asset_feed_publishers"]),
                feedProducers: isBitAsset ? props.asset.getIn(["bitasset", "feeds"], []).map(function (a) {
                    return a.first();
                }) : null,
                originalFeedProducers: isBitAsset ? props.asset.getIn(["bitasset", "feeds"], []).map(function (a) {
                    return a.first();
                }) : null
            };
        }

        // Using JSON.stringify for (fast?) comparsion, could be improved, but seems enough here as the order is fixed

    }, {
        key: "assetChanged",
        value: function assetChanged() {
            var s = this.state;
            var p = this.resetState(this.props);
            return JSON.stringify(s.update) !== JSON.stringify(p.update) || JSON.stringify(s.core_exchange_rate) !== JSON.stringify(p.core_exchange_rate) || s.new_issuer_account_id !== null && s.new_issuer_account_id !== s.issuer || JSON.stringify(s.flagBooleans) !== JSON.stringify(p.flagBooleans) || JSON.stringify(s.permissionBooleans) !== JSON.stringify(p.permissionBooleans) || JSON.stringify(s.whitelist_authorities) !== JSON.stringify(p.whitelist_authorities) || JSON.stringify(s.blacklist_authorities) !== JSON.stringify(p.blacklist_authorities) || JSON.stringify(s.whitelist_markets) !== JSON.stringify(p.whitelist_markets) || JSON.stringify(s.blacklist_markets) !== JSON.stringify(p.blacklist_markets);
        }

        // Return tab ID on change

    }, {
        key: "tabChanged",
        value: function tabChanged(tabId) {
            var tabsChanged = this.tabsChanged();
            return tabsChanged[tabId] ? tabsChanged[tabId] : false;
        }
    }, {
        key: "tabsChanged",
        value: function tabsChanged() {
            var s = this.state;
            var p = this.resetState(this.props);

            var tabUpdateIndex = [];

            if (s.update.max_supply !== p.update.max_supply || s.core_exchange_rate.base.amount !== p.core_exchange_rate.base.amount || s.core_exchange_rate.quote.amount !== p.core_exchange_rate.quote.amount) tabUpdateIndex["0"] = true;

            if (JSON.stringify(s.whitelist_authorities) !== JSON.stringify(p.whitelist_authorities) || JSON.stringify(s.blacklist_authorities) !== JSON.stringify(p.blacklist_authorities) || JSON.stringify(s.whitelist_markets) !== JSON.stringify(p.whitelist_markets) || JSON.stringify(s.blacklist_markets) !== JSON.stringify(p.blacklist_markets)) tabUpdateIndex["1"] = true;

            if (s.update.description.main !== p.update.description.main || s.update.description.short_name !== p.update.description.short_name || s.update.description.market !== p.update.description.market) tabUpdateIndex["2"] = true;

            if (JSON.stringify(s.bitasset_opts) !== JSON.stringify(p.original_bitasset_opts)) tabUpdateIndex["3"] = true;

            if (s.new_issuer_account_id !== null && s.new_issuer_account_id !== s.issuer) tabUpdateIndex["4"] = true;

            if (JSON.stringify(s.permissionBooleans) !== JSON.stringify(p.permissionBooleans)) tabUpdateIndex["5"] = true;

            if (JSON.stringify(s.flagBooleans) !== JSON.stringify(p.flagBooleans) || s.update.market_fee_percent !== p.update.market_fee_percent || s.update.max_market_fee !== p.update.max_market_fee) tabUpdateIndex["6"] = true;

            // Tab 7 == Fee Pool

            if (JSON.stringify(s.feedProducers) !== JSON.stringify(p.originalFeedProducers)) tabUpdateIndex["8"] = true;

            return tabUpdateIndex;
        }
    }, {
        key: "pageChanged",
        value: function pageChanged() {
            var _state = this.state,
                isBitAsset = _state.isBitAsset,
                bitasset_opts = _state.bitasset_opts,
                original_bitasset_opts = _state.original_bitasset_opts,
                feedProducers = _state.feedProducers,
                originalFeedProducers = _state.originalFeedProducers;

            return this.assetChanged() || isBitAsset && (JSON.stringify(bitasset_opts) !== JSON.stringify(original_bitasset_opts) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(feedProducers.toJS(), originalFeedProducers.toJS()));
        }
    }, {
        key: "_updateAsset",
        value: function _updateAsset(e) {
            var _this2 = this;

            e.preventDefault();

            // Close confirm_modal if it's open
            this.refs.confirm_modal.onClose();

            var _state2 = this.state,
                update = _state2.update,
                issuer = _state2.issuer,
                new_issuer_account_id = _state2.new_issuer_account_id,
                core_exchange_rate = _state2.core_exchange_rate,
                flagBooleans = _state2.flagBooleans,
                permissionBooleans = _state2.permissionBooleans,
                isBitAsset = _state2.isBitAsset,
                bitasset_opts = _state2.bitasset_opts,
                original_bitasset_opts = _state2.original_bitasset_opts,
                feedProducers = _state2.feedProducers,
                originalFeedProducers = _state2.originalFeedProducers;


            var flags = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].getFlags(flagBooleans);

            // Handle incorrect flag from genesis
            if (this.props.asset.getIn(["options", "flags"]) & 128 && !(this.props.asset.getIn(["options", "issuer_permissions"]) & 128)) {
                flags += 128;
            }
            var permissions = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].getPermissions(permissionBooleans, isBitAsset);

            if (this.state.marketInput !== update.description.market) {
                update.description.market = "";
            }
            var description = JSON.stringify(update.description);

            var auths = {
                whitelist_authorities: this.state.whitelist_authorities,
                blacklist_authorities: this.state.blacklist_authorities,
                whitelist_markets: this.state.whitelist_markets,
                blacklist_markets: this.state.blacklist_markets
            };

            var feedProducersJS = isBitAsset ? feedProducers.toJS() : null;
            var originalFeedProducersJS = isBitAsset ? originalFeedProducers.toJS() : null;

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].updateAsset(issuer, new_issuer_account_id, update, core_exchange_rate, this.props.asset, flags, permissions, isBitAsset, bitasset_opts, original_bitasset_opts, description, auths, feedProducersJS, originalFeedProducersJS, this.assetChanged()).then(function () {
                console.log("... AssetActions.updateAsset(account_id, update)", issuer, new_issuer_account_id, _this2.props.asset.get("id"), update);
                setTimeout(function () {
                    bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(_this2.props.asset.get("id"));
                    _this2.setState(_this2.resetState(_this2.props));
                }, 3000);
            });
        }
    }, {
        key: "_reset",
        value: function _reset(e) {
            e.preventDefault();

            this.setState(this.resetState(this.props));
        }
    }, {
        key: "_forcePositive",
        value: function _forcePositive(number) {
            return parseFloat(number) < 0 ? "0" : number;
        }
    }, {
        key: "_onUpdateDescription",
        value: function _onUpdateDescription(value, e) {
            var update = this.state.update;

            var updateState = true;

            switch (value) {
                case "condition":
                    if (e.target.value.length > 60) {
                        updateState = false;
                        return;
                    }
                    update.description[value] = e.target.value;
                    break;

                case "short_name":
                    if (e.target.value.length > 32) {
                        updateState = false;
                        return;
                    }
                    update.description[value] = e.target.value;
                    break;

                case "market":
                    update.description[value] = e;
                    break;

                case "visible":
                    update.description[value] = !update.description[value];
                    break;

                default:
                    update.description[value] = e.target.value;
                    break;
            }

            if (updateState) {
                this.forceUpdate();
                this._validateEditFields(update);
            }
        }
    }, {
        key: "onChangeBitAssetOpts",
        value: function onChangeBitAssetOpts(value, e) {
            var bitasset_opts = this.state.bitasset_opts;


            switch (value) {
                case "force_settlement_offset_percent":
                case "maximum_force_settlement_volume":
                    bitasset_opts[value] = parseFloat(e.target.value) * chain_asset_constants__WEBPACK_IMPORTED_MODULE_21___default.a.GRAPHENE_1_PERCENT;
                    break;

                case "feed_lifetime_sec":
                case "force_settlement_delay_sec":
                    console.log(e.target.value, parseInt(parseFloat(e.target.value) * 60, 10));
                    bitasset_opts[value] = parseInt(parseFloat(e.target.value) * 60, 10);
                    break;

                case "short_backing_asset":
                    bitasset_opts[value] = e;
                    break;

                default:
                    bitasset_opts[value] = parseInt(e.target.value, 10);
                    break;
            }

            this.forceUpdate();
        }
    }, {
        key: "_onUpdateInput",
        value: function _onUpdateInput(value, e) {
            var update = this.state.update;

            var updateState = true;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.asset.get("precision"));

            switch (value) {
                case "market_fee_percent":
                    update[value] = this._forcePositive(e.target.value);
                    break;

                case "max_market_fee":
                    var marketFee = e.amount.replace(/,/g, "");
                    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(marketFee).times(precision).gt(GRAPHENE_MAX_SHARE_SUPPLY)) {
                        updateState = false;
                        return this.setState({
                            errors: {
                                max_market_fee: "The number you tried to enter is too large"
                            }
                        });
                    }
                    update[value] = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(marketFee, this.props.asset.get("precision"));
                    break;

                case "max_supply":
                    var maxSupply = e.amount.replace(/,/g, "");
                    // try {
                    //     if ((new big(maxSupply)).times(Math.pow(10, precision)).gt(GRAPHENE_MAX_SHARE_SUPPLY)) {
                    //         updateState = false;
                    //         return this.setState({errors: {max_supply: "The number you tried to enter is too large"}});
                    //     }
                    update[value] = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(maxSupply, this.props.asset.get("precision"));
                    // } catch(e) {}
                    break;

                default:
                    update[value] = e.target.value;
                    break;
            }

            if (updateState) {
                this.setState({ update: update });
                this._validateEditFields(update);
            }
        }
    }, {
        key: "_validateEditFields",
        value: function _validateEditFields(new_state) {
            var cer = new_state.core_exchange_rate;
            var feedProducers = new_state.feedProducers ? new_state.feedProducers : this.state.feedProducers;
            var flagBooleans = this.state.flagBooleans;
            var _props = this.props,
                asset = _props.asset,
                core = _props.core;


            var errors = {
                max_supply: null,
                quote_asset: null,
                base_asset: null,
                max_feed_producer: null,
                conflict_producer: null,
                invalid_market_pair: null
            };

            var p = this.props.asset.get("precision");
            try {
                errors.max_supply = new_state.max_supply <= 0 ? counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.max_positive") : new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(parseInt(new_state.max_supply, 10)).times(Math.pow(10, p)).gt(GRAPHENE_MAX_SHARE_SUPPLY) ? counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.too_large") : null;
            } catch (err) {
                console.log("err:", err);
                errors.max_supply = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.too_large");
            }

            if (cer) {
                if (cer.quote.asset_id !== asset.get("id") && cer.base.asset_id !== asset.get("id")) {
                    errors.quote_asset = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.need_asset", { name: asset.get("symbol") });
                }

                if (cer.quote.asset_id !== core.get("id") && cer.base.asset_id !== core.get("id")) {
                    errors.base_asset = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.need_asset", { name: core.get("symbol") });
                }
            }
            if (feedProducers) {
                if (feedProducers.size > this.state.maxFeedProducers) {
                    errors.max_feed_producer = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.too_many_feed", { max: this.state.maxFeedProducers });
                }
            }
            if (flagBooleans.committee_fed_asset && flagBooleans.witness_fed_asset) {
                errors.conflict_producer = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.conflict_feed");
            }

            if (this.state.marketInput == this.props.asset.get("symbol")) {
                errors.invalid_market_pair = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.user_issued_assets.invalid_market_pair");
            }

            var isValid = !errors.invalid_market_pair && !errors.max_supply && !errors.base_asset && !errors.quote_asset && !errors.max_feed_producer && !errors.conflict_producer;

            this.setState({ isValid: isValid, errors: errors });
        }
    }, {
        key: "_onCoreRateChange",
        value: function _onCoreRateChange(type, amount) {
            amount.amount = amount.amount == "" ? "0" : amount.amount.replace(/,/g, "");

            amount.amount = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(amount.amount, amount.asset.get("precision"));

            var core_exchange_rate = this.state.core_exchange_rate;

            core_exchange_rate[type] = {
                amount: amount.amount,
                asset_id: amount.asset.get("id")
            };
            this.forceUpdate();
        }
    }, {
        key: "onAccountChanged",
        value: function onAccountChanged(key, account) {
            this.setState(_defineProperty({}, key, account ? account.get("id") : null));
        }
    }, {
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(key, name) {
            this.setState(_defineProperty({}, key, name));
        }
    }, {
        key: "_onInputCoreAsset",
        value: function _onInputCoreAsset(type, asset) {
            if (type === "quote") {
                this.setState({
                    quoteAssetInput: asset
                });
            } else if (type === "base") {
                this.setState({
                    baseAssetInput: asset
                });
            }
        }
    }, {
        key: "_onFoundCoreAsset",
        value: function _onFoundCoreAsset(type, asset) {
            if (asset) {
                var core_rate = this.state.core_exchange_rate;
                core_rate[type].asset_id = asset.get("id");

                this.setState({
                    core_exchange_rate: core_rate
                });

                this._validateEditFields({
                    max_supply: this.state.max_supply,
                    core_exchange_rate: core_rate
                });
            }
        }
    }, {
        key: "_onInputMarket",
        value: function _onInputMarket(asset) {
            this.setState({
                marketInput: asset
            });
        }
    }, {
        key: "_onFoundMarketAsset",
        value: function _onFoundMarketAsset(asset) {
            if (asset) {
                this._onUpdateDescription("market", asset.get("symbol"));
            }
        }
    }, {
        key: "_onFlagChange",
        value: function _onFlagChange(key) {
            var booleans = this.state.flagBooleans;
            booleans[key] = !booleans[key];
            this.setState({
                flagBooleans: booleans
            });
            this._validateEditFields({});
        }
    }, {
        key: "_onPermissionChange",
        value: function _onPermissionChange(key) {
            var booleans = this.state.permissionBooleans;
            booleans[key] = !booleans[key];
            this.setState({
                permissionBooleans: booleans
            });
        }
    }, {
        key: "_onClaimInput",
        value: function _onClaimInput(asset) {
            this.setState({
                claimFeesAmount: asset.amount
            });
        }
    }, {
        key: "_onClaimFees",
        value: function _onClaimFees() {
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].claimPoolFees(this.props.account.get("id"), this.props.asset, this.state.claimFeesAmount.replace(/,/g, ""));
        }
    }, {
        key: "onChangeList",
        value: function onChangeList(key) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "add";
            var id = arguments[2];

            var current = this.state[key];
            if (action === "add" && !current.includes(id)) {
                current = current.push(id);
            } else if (action === "remove" && current.includes(id)) {
                current = current.remove(current.indexOf(id));
            }
            this.setState(_defineProperty({}, key, current));
        }
    }, {
        key: "onChangeFeedProducerList",
        value: function onChangeFeedProducerList() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "add";
            var id = arguments[1];

            var current = this.state.feedProducers;
            if (action === "add" && !current.includes(id)) {
                current = current.push(id);
            } else if (action === "remove" && current.includes(id)) {
                current = current.remove(current.indexOf(id));
            }
            this.setState({ feedProducers: current });
            this._validateEditFields({ feedProducers: current });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                account = _props2.account,
                asset = _props2.asset,
                core = _props2.core;
            var _state3 = this.state,
                errors = _state3.errors,
                isValid = _state3.isValid,
                update = _state3.update,
                core_exchange_rate = _state3.core_exchange_rate,
                flagBooleans = _state3.flagBooleans,
                permissionBooleans = _state3.permissionBooleans,
                claimFeesAmount = _state3.claimFeesAmount,
                isBitAsset = _state3.isBitAsset,
                bitasset_opts = _state3.bitasset_opts;

            // Estimate the asset update fee

            var symbol = asset.get("symbol");
            var updateFee = "N/A";

            updateFee = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedFee__WEBPACK_IMPORTED_MODULE_8__["default"], { opType: "asset_update" });

            var cr_quote_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(core_exchange_rate.quote.asset_id);
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(cr_quote_asset.get("precision"));
            var cr_base_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(core_exchange_rate.base.asset_id);
            var basePrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(cr_base_asset.get("precision"));

            var cr_quote_amount = parseFloat(core_exchange_rate.quote.amount) * precision;
            var cr_base_amount = parseFloat(core_exchange_rate.base.amount) * basePrecision;
            var originalPermissions = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].getFlagBooleans(asset.getIn(["options", "issuer_permissions"]), asset.get("bitasset") !== undefined);
            // Loop over flags
            var flags = [];
            var getFlag = function getFlag(key, onClick, isChecked) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { key: "table_" + key, className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none", width: "80%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "account.user_issued_assets." + key
                                }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { border: "none" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "switch",
                                        style: { marginBottom: "10px" },
                                        onClick: onClick
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: isChecked
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                )
                            )
                        )
                    )
                );
            };

            for (var key in originalPermissions) {
                if (originalPermissions[key] && key !== "charge_market_fee") {
                    flags.push(getFlag(key, this._onFlagChange.bind(this, key), flagBooleans[key]));
                }
            }

            flags.push(getFlag("visible", this._onUpdateDescription.bind(this, "visible"), update.description.visible ? false : update.description.visible === false ? true : false));

            // Loop over permissions
            var permissions = [];
            for (var _key in originalPermissions) {
                if (true) {
                    permissions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        { key: "table_" + _key, className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { border: "none", width: "80%" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        content: "account.user_issued_assets." + _key
                                    }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { border: "none" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: "switch",
                                            style: { marginBottom: "10px" },
                                            onClick: this._onPermissionChange.bind(this, _key)
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "checkbox",
                                            checked: permissionBooleans[_key],
                                            onChange: function onChange() {}
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                    )
                                )
                            )
                        )
                    ));
                }
            }

            var tabsChangedCount = 0;
            this.tabsChanged().forEach(function () {
                tabsChangedCount++;
            });

            var confirmButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", {
                            disabled: !isValid || !this.pageChanged()
                        }),
                        style: { width: "9rem" },
                        onClick: tabsChangedCount > 1 ? this._openConfirm.bind(this) : this._updateAsset.bind(this)
                    },
                    tabsChangedCount > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.save_all" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.save" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button primary hollow", {
                            disabled: !this.pageChanged()
                        }),
                        onClick: this._reset.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.reset" })
                )
            );

            var dynamicObject = this.props.getDynamicObject(asset.get("dynamic_asset_data_id"));
            var unclaimedBalance = dynamicObject ? dynamicObject.get("accumulated_fees") : 0;
            var validClaim = claimFeesAmount > 0 && common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(asset.get("precision")) * claimFeesAmount <= unclaimedBalance;

            var unclaimedBalanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    amount: unclaimedBalance,
                    asset: asset.get("id")
                })
            );

            var cerValid = false;

            if ((cr_quote_asset.get("id") === "1.3.0" || cr_base_asset.get("id") === "1.3.0") && (cr_quote_asset.get("id") === asset.get("id") || cr_base_asset.get("id") === asset.get("id"))) {
                cerValid = true;
            }

            var isPredictionMarketAsset = asset.getIn(["bitasset", "is_prediction_market"]);

            var asset_description = common_asset_utils__WEBPACK_IMPORTED_MODULE_18__["default"].parseDescription(this.props.asset.toJS().options.description);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tabs-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "header.update_asset" }),
                                ":",
                                " ",
                                symbol
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tabs"],
                            {
                                setting: "updateAssetTab",
                                className: "account-tabs",
                                tabsClass: "account-overview bordered-header content-block",
                                contentClass: "grid-block padding-top shrink small-vertical medium-horizontal",
                                segmented: false,
                                actionButtons: confirmButtons,
                                onChangeTab: function onChangeTab(i) {
                                    _this3.setState({ activeTab: i });
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.primary",
                                    updatedTab: this.tabChanged(0)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.precision" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            ": ",
                                            asset.get("precision")
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                            label: "account.user_issued_assets.max_supply",
                                            amount: update.max_supply,
                                            onChange: this._onUpdateInput.bind(this, "max_supply"),
                                            asset: asset.get("id"),
                                            assets: [asset.get("id")],
                                            placeholder: "0.0",
                                            tabIndex: 1
                                        })
                                    ),
                                    errors.max_supply ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        errors.max_supply
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "h3",
                                        content: "account.user_issued_assets.core_exchange_rate"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "grid-block no-margin" },
                                            cerValid ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                    label: "account.user_issued_assets.quote_name",
                                                    onChange: this._onInputCoreAsset.bind(this, "quote"),
                                                    asset: this.state.quoteAssetInput,
                                                    assetInput: this.state.quoteAssetInput,
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingRight: "10px"
                                                    },
                                                    onFound: this._onFoundCoreAsset.bind(this, "quote")
                                                })
                                            ),
                                            cerValid ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                    label: "account.user_issued_assets.base_name",
                                                    onChange: this._onInputCoreAsset.bind(this, "base"),
                                                    asset: this.state.baseAssetInput,
                                                    assetInput: this.state.baseAssetInput,
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingLeft: "10px"
                                                    },
                                                    onFound: this._onFoundCoreAsset.bind(this, "base")
                                                })
                                            ),
                                            errors.quote_asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.quote_asset
                                            ) : null,
                                            errors.base_asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.base_asset
                                            ) : null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    label: "account.user_issued_assets.quote",
                                                    amount: core_exchange_rate.quote.amount,
                                                    onChange: this._onCoreRateChange.bind(this, "quote"),
                                                    asset: core_exchange_rate.quote.asset_id,
                                                    assets: [core_exchange_rate.quote.asset_id],
                                                    placeholder: "0.0",
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingRight: "10px"
                                                    }
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block no-margin small-12 medium-6" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    label: "account.user_issued_assets.base",
                                                    amount: core_exchange_rate.base.amount,
                                                    onChange: this._onCoreRateChange.bind(this, "base"),
                                                    asset: core_exchange_rate.base.asset_id,
                                                    assets: [core_exchange_rate.base.asset_id],
                                                    placeholder: "0.0",
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingLeft: "10px"
                                                    }
                                                })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "h5",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.price" }),
                                                ":",
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    style: { fontWeight: "bold" },
                                                    quote_amount: cr_quote_amount,
                                                    quote_asset: core_exchange_rate.quote.asset_id,
                                                    base_asset: core_exchange_rate.base.asset_id,
                                                    base_amount: cr_base_amount
                                                })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "account.user_issued_assets.cer_warning_1",
                                            component: "label",
                                            className: "has-error"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "account.user_issued_assets.cer_warning_2",
                                            component: "p"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.whitelist.title",
                                    updatedTab: this.tabChanged(1)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _AssetWhitelist__WEBPACK_IMPORTED_MODULE_22__["default"],
                                    {
                                        whiteListEnabled: flagBooleans["white_list"],
                                        whitelist_authorities: this.state.whitelist_authorities,
                                        blacklist_authorities: this.state.blacklist_authorities,
                                        whitelist_markets: this.state.whitelist_markets,
                                        blacklist_markets: this.state.blacklist_markets,
                                        new_authority_id: this.state.new_authority_id,
                                        authority_name: this.state.authority_name,
                                        onAccountNameChanged: this.onAccountNameChanged.bind(this),
                                        onAccountChanged: this.onAccountChanged.bind(this),
                                        onChangeList: this.onChangeList.bind(this)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.description",
                                    updatedTab: this.tabChanged(2)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                                            style: { height: "7rem" },
                                            rows: "1",
                                            value: update.description.main || "",
                                            onChange: this._onUpdateDescription.bind(this, "main")
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "h3",
                                        content: "account.user_issued_assets.short"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "text",
                                            rows: "1",
                                            value: update.description.short_name || "",
                                            onChange: this._onUpdateDescription.bind(this, "short_name")
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "h3",
                                        content: "account.user_issued_assets.market"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                        label: "account.user_issued_assets.name",
                                        onChange: this._onInputMarket.bind(this),
                                        placeholder: asset_description.market,
                                        asset: this.state.marketInput,
                                        assetInput: this.state.marketInput,
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px",
                                            paddingBottom: "20px"
                                        },
                                        onFound: this._onFoundMarketAsset.bind(this)
                                    }),
                                    errors.invalid_market_pair ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        errors.invalid_market_pair
                                    ) : null,
                                    isPredictionMarketAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.condition"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "label",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "text",
                                                rows: "1",
                                                value: update.description.condition,
                                                onChange: this._onUpdateDescription.bind(this, "condition")
                                            })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.expiry"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "label",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "date",
                                                value: update.description.expiry,
                                                onChange: this._onUpdateDescription.bind(this, "expiry")
                                            })
                                        )
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ),
                            isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.bitasset_opts",
                                    updatedTab: this.tabChanged(3)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountAssetCreate__WEBPACK_IMPORTED_MODULE_20__["BitAssetOptions"], {
                                        bitasset_opts: bitasset_opts,
                                        onUpdate: this.onChangeBitAssetOpts.bind(this),
                                        backingAsset: bitasset_opts.short_backing_asset,
                                        assetPrecision: asset.get("precision"),
                                        assetSymbol: asset.get("symbol")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.update_owner",
                                    updatedTab: this.tabChanged(4)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { paddingBottom: "1rem" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                            label: "account.user_issued_assets.current_issuer",
                                            accountName: account.get("name"),
                                            account: account.get("name"),
                                            error: null,
                                            tabIndex: 1,
                                            disabled: true
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        label: "account.user_issued_assets.new_issuer",
                                        accountName: this.state.issuer_account_name,
                                        onChange: this.onAccountNameChanged.bind(this, "issuer_account_name"),
                                        onAccountChanged: this.onAccountChanged.bind(this, "new_issuer_account_id"),
                                        account: this.state.issuer_account_name,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: true
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.permissions",
                                    updatedTab: this.tabChanged(5)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        path: "components/AccountAssetCreate",
                                        section: "permissions"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.perm_warning" })
                                    ),
                                    permissions,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.flags",
                                    updatedTab: this.tabChanged(6)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        path: "components/AccountAssetCreate",
                                        section: "flags"
                                    }),
                                    originalPermissions["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "h3",
                                            content: "account.user_issued_assets.market_fee"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "table",
                                            { className: "table" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tbody",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "tr",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.charge_market_fee" }),
                                                        ":"
                                                    ),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "switch",
                                                                style: {
                                                                    marginBottom: "10px"
                                                                },
                                                                onClick: this._onFlagChange.bind(this, "charge_market_fee")
                                                            },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                                type: "checkbox",
                                                                onChange: function onChange() {},
                                                                checked: flagBooleans.charge_market_fee
                                                            }),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                                                    disabled: !flagBooleans.charge_market_fee
                                                })
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "label",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.market_fee" }),
                                                " ",
                                                "(%)",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                    type: "number",
                                                    value: update.market_fee_percent,
                                                    onChange: this._onUpdateInput.bind(this, "market_fee_percent")
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "label",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    label: "account.user_issued_assets.max_market_fee",
                                                    amount: update.max_market_fee,
                                                    onChange: this._onUpdateInput.bind(this, "max_market_fee"),
                                                    asset: asset.get("id"),
                                                    assets: [asset.get("id")],
                                                    placeholder: "0.0",
                                                    tabIndex: 1
                                                })
                                            ),
                                            errors.max_market_fee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { className: "grid-content has-error" },
                                                errors.max_market_fee
                                            ) : null
                                        )
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "h3",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.flags" })
                                    ),
                                    flags,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.approx_fee" }),
                                        ":",
                                        " ",
                                        updateFee
                                    ),
                                    errors.conflict_producer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "grid-content has-error" },
                                        errors.conflict_producer
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                { title: "explorer.asset.fee_pool.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "small-12 large-8 large-offset-2 grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FundFeePool__WEBPACK_IMPORTED_MODULE_26__["default"], {
                                        asset: asset.get("symbol"),
                                        funderAccountName: this.props.account.get("name")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "h3",
                                        content: "transaction.trxTypes.asset_claim_fees"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        component: "p",
                                        content: "explorer.asset.fee_pool.claim_text",
                                        asset: asset.get("symbol")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { paddingBottom: "1rem" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.fee_pool.unclaimed_issuer_income" }),
                                        ":\xA0",
                                        dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            amount: dynamicObject.get("accumulated_fees"),
                                            asset: asset.get("id")
                                        }) : null
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                        label: "transfer.amount",
                                        display_balance: unclaimedBalanceText,
                                        amount: claimFeesAmount,
                                        onChange: this._onClaimInput.bind(this),
                                        asset: asset.get("id"),
                                        assets: [asset.get("id")],
                                        placeholder: "0.0",
                                        tabIndex: 1,
                                        style: { width: "100%", paddingTop: 16 }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { paddingTop: "1rem" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "button",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", {
                                                    disabled: !validClaim
                                                }),
                                                onClick: this._onClaimFees.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.fee_pool.claim_fees" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "button",
                                            {
                                                className: "button outline",
                                                onClick: this._reset.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.reset" })
                                        )
                                    )
                                )
                            ),
                            isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_19__["Tab"],
                                {
                                    title: "account.user_issued_assets.feed_producers",
                                    updatedTab: this.tabChanged(8)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetFeedProducers__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    asset: this.props.asset,
                                    account: this.props.account,
                                    witnessFed: flagBooleans["witness_fed_asset"],
                                    committeeFed: flagBooleans["committee_fed_asset"],
                                    producers: this.state.feedProducers,
                                    onChangeList: this.onChangeFeedProducerList.bind(this)
                                }),
                                errors.max_feed_producer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "p",
                                    {
                                        className: "grid-content has-error large-8 large-offset-2",
                                        style: { marginTop: "20px" }
                                    },
                                    errors.max_feed_producer
                                ) : null
                            ) : null
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmModal, _extends({
                    modalId: "asset_update_modal",
                    ref: "confirm_modal",
                    tabsChanged: this.tabsChanged(),
                    _cancelConfirm: this._cancelConfirm.bind(this),
                    _updateAsset: this._updateAsset.bind(this)
                }, this.props))
            );
        }
    }]);

    return AccountAssetUpdate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountAssetUpdate.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__["default"].ChainObject.isRequired
};
AccountAssetUpdate.defaultProps = {
    globalObject: "2.0.0"
};

AccountAssetUpdate = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__["default"])(AccountAssetUpdate);
AccountAssetUpdate = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_12__["default"])(AccountAssetUpdate, {
    propNames: ["asset", "core"],
    defaultProps: {
        core: "1.3.0"
    },
    withDynamic: true
});

var ConfirmModal = function (_React$Component2) {
    _inherits(ConfirmModal, _React$Component2);

    function ConfirmModal() {
        _classCallCheck(this, ConfirmModal);

        var _this4 = _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).call(this));

        _this4.state = { open: false };
        return _this4;
    }

    _createClass(ConfirmModal, [{
        key: "show",
        value: function show() {
            var _this5 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_25___default.a.publish(_this5.props.modalId, "open");
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
            var tabsChanged = this.props.tabsChanged;


            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                components_Modal_BaseModal__WEBPACK_IMPORTED_MODULE_24__["default"],
                {
                    id: this.props.modalId,
                    overlay: true,
                    modalHeader: "account.confirm_asset_modal.header",
                    noLogo: true
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    content: "account.confirm_asset_modal.are_you_sure",
                    component: "div",
                    style: { paddingBottom: "1rem" }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        null,
                        tabsChanged["0"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.primary" })
                        ) : null,
                        tabsChanged["1"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.whitelist.title" })
                        ) : null,
                        tabsChanged["2"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.description" })
                        ) : null,
                        tabsChanged["3"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.bitasset_opts" })
                        ) : null,
                        tabsChanged["4"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.update_owner" })
                        ) : null,
                        tabsChanged["5"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.permissions" })
                        ) : null,
                        tabsChanged["6"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.flags" })
                        ) : null,
                        tabsChanged["8"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.user_issued_assets.feed_producers" })
                        ) : null
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button primary",
                            onClick: this.props._updateAsset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "global.confirm" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button primary hollow",
                            onClick: this.props._cancelConfirm.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "global.cancel" })
                    )
                )
            );
        }
    }]);

    return ConfirmModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AssetUpdateWrapper = function (_React$Component3) {
    _inherits(AssetUpdateWrapper, _React$Component3);

    function AssetUpdateWrapper() {
        _classCallCheck(this, AssetUpdateWrapper);

        return _possibleConstructorReturn(this, (AssetUpdateWrapper.__proto__ || Object.getPrototypeOf(AssetUpdateWrapper)).apply(this, arguments));
    }

    _createClass(AssetUpdateWrapper, [{
        key: "render",
        value: function render() {
            var asset = this.props.match.params.asset;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountAssetUpdate, _extends({ asset: asset }, this.props));
        }
    }]);

    return AssetUpdateWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_27__["withRouter"])(AssetUpdateWrapper));

/***/ }),

/***/ 2504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1332);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1333);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1221);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2416);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var AssetWhitelist = function (_React$Component) {
    _inherits(AssetWhitelist, _React$Component);

    function AssetWhitelist(props) {
        _classCallCheck(this, AssetWhitelist);

        var _this = _possibleConstructorReturn(this, (AssetWhitelist.__proto__ || Object.getPrototypeOf(AssetWhitelist)).call(this));

        _this.state = {
            listType: props.assetWhiteListType,
            accountTable: props.assetWhiteListType.indexOf("market") === -1,
            listTypes: ["whitelist_authorities", "blacklist_authorities", "whitelist_markets", "blacklist_markets"],
            assetInput: null,
            asset_id: null
        };
        return _this;
    }

    _createClass(AssetWhitelist, [{
        key: "renderAccountTables",
        value: function renderAccountTables() {
            var _this2 = this;

            var listType = this.state.listType;


            if (!this.props.whiteListEnabled) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    className: "txtlabel cancel",
                    component: "p",
                    content: "explorer.asset.whitelist.enable_flag"
                })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table dashboard-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.account.title" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.perm.remove_text" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props[listType].map(function (a) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: a },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_1__["default"], { account: a })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        className: "clickable",
                                        onClick: _this2.props.onChangeList.bind(_this2, listType, "remove", a)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: "cross-circle",
                                        title: "icons.cross_circle.remove",
                                        className: "icon-14px"
                                    })
                                )
                            );
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        label: "account.whitelist." + listType,
                        accountName: this.props.authority_name,
                        account: this.props.authority_name,
                        onChange: this.props.onAccountNameChanged.bind(this, "authority_name"),
                        onAccountChanged: this.props.onAccountChanged.bind(this, "new_authority_id"),
                        error: null,
                        tabIndex: 1,
                        action_label: "account.perm.confirm_add",
                        onAction: this.props.onChangeList.bind(this, listType, "add", this.props.new_authority_id)
                    })
                )
            );
        }
    }, {
        key: "_onAssetChange",
        value: function _onAssetChange(asset) {
            this.setState({
                assetInput: asset
            });
        }
    }, {
        key: "_onAssetFound",
        value: function _onAssetFound(asset) {
            this.setState({
                asset_id: asset ? asset.get("id") : null
            });
        }
    }, {
        key: "renderMarketTable",
        value: function renderMarketTable() {
            var _this3 = this;

            var listType = this.state.listType;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table dashboard-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.asset.title" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.perm.remove_text" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props[listType].map(function (a) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: a },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_2__["default"], { asset: a })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        className: "clickable",
                                        onClick: _this3.props.onChangeList.bind(_this3, listType, "remove", a)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: "cross-circle",
                                        title: "icons.cross_circle.remove",
                                        className: "icon-14px"
                                    })
                                )
                            );
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        label: "explorer.asset.whitelist." + listType,
                        onChange: this._onAssetChange.bind(this),
                        asset: this.state.assetInput,
                        assetInput: this.state.assetInput,
                        tabIndex: 1,
                        style: { width: "100%" },
                        onFound: this._onAssetFound.bind(this),
                        action_label: "account.perm.confirm_add",
                        onAction: this.props.onChangeList.bind(this, listType, "add", this.state.asset_id)
                    })
                )
            );
        }
    }, {
        key: "_onSwitchType",
        value: function _onSwitchType(type) {
            this.setState({
                listType: type,
                accountTable: type.indexOf("market") === -1
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                assetWhiteListType: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var accountTable = this.state.accountTable;

            var activeIndex = this.state.listTypes.indexOf(this.state.listType);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12 large-8 large-offset-2 grid-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "header-selector",
                            style: { paddingBottom: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "selector" },
                            this.state.listTypes.map(function (type, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        key: type,
                                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("inline-block", {
                                            inactive: activeIndex !== index
                                        }),
                                        onClick: _this4._onSwitchType.bind(_this4, type)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                        content: "explorer.asset.whitelist." + type
                                    })
                                );
                            })
                        )
                    ),
                    accountTable ? this.renderAccountTables() : this.renderMarketTable(),
                    this.props.children
                )
            );
        }
    }]);

    return AssetWhitelist;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_8__["connect"])(AssetWhitelist, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
    },
    getProps: function getProps() {
        return {
            assetWhiteListType: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("assetWhiteListType", "whitelist_authorities")
        };
    }
}));

/***/ }),

/***/ 2505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1286);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1221);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1332);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(802);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var AccountFeedProducers = function (_React$Component) {
    _inherits(AccountFeedProducers, _React$Component);

    function AccountFeedProducers(props) {
        _classCallCheck(this, AccountFeedProducers);

        var _this = _possibleConstructorReturn(this, (AccountFeedProducers.__proto__ || Object.getPrototypeOf(AccountFeedProducers)).call(this, props));

        _this.state = {
            producer_name: null
        };
        return _this;
    }

    _createClass(AccountFeedProducers, [{
        key: "onAccountChanged",
        value: function onAccountChanged(account) {
            this.setState({
                new_producer_id: account ? account.get("id") : null
            });
        }
    }, {
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(name) {
            this.setState({
                producer_name: name
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                witnessFed = _props.witnessFed,
                committeeFed = _props.committeeFed;


            if (witnessFed || committeeFed) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content small-12 large-8 large-offset-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "p",
                        content: "account.user_issued_assets.feed_not_allowed_1",
                        className: "has-error"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "p",
                        content: "account.user_issued_assets.feed_not_allowed_2"
                    })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content small-12 large-8 large-offset-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table dashboard-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "left" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.account.title" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.perm.remove_text" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props.producers.map(function (a, i) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: a },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "left" } },
                                    "#",
                                    i + 1
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "left" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: a })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        className: "clickable",
                                        onClick: _this2.props.onChangeList.bind(_this2, "remove", a)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        name: "cross-circle",
                                        title: "icons.cross_circle.remove",
                                        className: "icon-14px"
                                    })
                                )
                            );
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        label: "account.user_issued_assets.add_feed",
                        accountName: this.state.producer_name,
                        account: this.state.producer_name,
                        onChange: this.onAccountNameChanged.bind(this),
                        onAccountChanged: this.onAccountChanged.bind(this),
                        error: null,
                        tabIndex: 1,
                        action_label: "account.perm.confirm_add",
                        onAction: this.props.onChangeList.bind(this, "add", this.state.new_producer_id)
                    })
                )
            );
        }
    }]);

    return AccountFeedProducers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountFeedProducers);

/***/ }),

/***/ 2507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2508);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(565);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1381);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1051);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(566);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2478);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(569);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var FeeHelp = function (_React$Component) {
    _inherits(FeeHelp, _React$Component);

    function FeeHelp() {
        _classCallCheck(this, FeeHelp);

        return _possibleConstructorReturn(this, (FeeHelp.__proto__ || Object.getPrototypeOf(FeeHelp)).apply(this, arguments));
    }

    _createClass(FeeHelp, [{
        key: "render",
        value: function render() {
            var dprops = this.props.dprops;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, this.props, {
                path: "components/AccountMembership",
                section: "fee-division",
                nextMaintenanceTime: {
                    time: dprops.get("next_maintenance_time")
                }
            }));
        }
    }]);

    return FeeHelp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeeHelp.propTypes = {
    dprops: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired
};
FeeHelp.defaultProps = {
    dprops: "2.1.0"
};

FeeHelp = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(FeeHelp);

var AccountMembership = function (_React$Component2) {
    _inherits(AccountMembership, _React$Component2);

    function AccountMembership() {
        _classCallCheck(this, AccountMembership);

        return _possibleConstructorReturn(this, (AccountMembership.__proto__ || Object.getPrototypeOf(AccountMembership)).apply(this, arguments));
    }

    _createClass(AccountMembership, [{
        key: "upgradeAccount",
        value: function upgradeAccount(id, lifetime, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__["default"].upgradeAccount(id, lifetime);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            common_account_utils__WEBPACK_IMPORTED_MODULE_10__["default"].getFinalFeeAsset(this.props.account, "account_upgrade");
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                gprops = _props.gprops,
                core_asset = _props.core_asset;


            var account = this.props.account.toJS();

            var ltr = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(account.lifetime_referrer, false);
            if (ltr) account.lifetime_referrer_name = ltr.get("name");
            var ref = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(account.referrer, false);
            if (ref) account.referrer_name = ref.get("name");
            var reg = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(account.registrar, false);
            if (reg) account.registrar_name = reg.get("name");

            var account_name = account.name;

            var network_fee = account.network_fee_percentage / 100;
            var lifetime_fee = account.lifetime_referrer_fee_percentage / 100;
            var referrer_total_fee = 100 - network_fee - lifetime_fee;
            var referrer_fee = referrer_total_fee * account.referrer_rewards_percentage / 10000;
            var registrar_fee = 100 - referrer_fee - lifetime_fee - network_fee;

            var lifetime_cost = gprops.getIn(["parameters", "current_fees", "parameters", 8, 1, "membership_lifetime_fee"]) * gprops.getIn(["parameters", "current_fees", "scale"]) / 10000;

            var member_status = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccountMemberStatus(this.props.account);
            var membership = "account.member." + member_status;
            var expiration = null;
            if (member_status === "annual") expiration = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "(",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.expires" }),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: account.membership_expiration_date }),
                ")"
            );
            var expiration_date = account.membership_expiration_date;
            if (expiration_date === "1969-12-31T23:59:59") expiration_date = "Never";else if (expiration_date === "1970-01-01T00:00:00") expiration_date = "N/A";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tabs"],
                            {
                                segmented: false,
                                setting: "membershipTab",
                                className: "account-tabs",
                                tabsClass: "account-overview bordered-header content-block",
                                contentClass: "padding"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tab"],
                                { title: "account.member.membership" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "h3",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: membership }),
                                    " ",
                                    expiration
                                ),
                                member_status === "lifetime" ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "large-6 medium-8" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            path: "components/AccountMembership",
                                            section: "lifetime",
                                            feesCashback: 100 - network_fee,
                                            price: {
                                                amount: lifetime_cost,
                                                asset: core_asset
                                            }
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: "button no-margin",
                                                onClick: this.upgradeAccount.bind(this, account.id, true)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.upgrade_lifetime" })
                                        ),
                                        " ",
                                        "\xA0 \xA0",
                                         true ? null : undefined
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "content-block no-margin" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "no-margin grid-block vertical large-horizontal" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "no-margin grid-block large-5" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-content" },
                                                member_status === "lifetime" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "h4",
                                                        null,
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.referral_link" })
                                                    ),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                                        content: "account.member.referral_text",
                                                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_12__["getWalletName"])()
                                                    }),
                                                    ":",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "h5",
                                                        null,
                                                        Object(branding__WEBPACK_IMPORTED_MODULE_12__["getWalletURL"])() + ("/?r=" + account.name)
                                                    )
                                                ) : null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "h4",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.fee_allocation" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "table",
                                                    { className: "table key-value-table" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "tbody",
                                                        null,
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "tr",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.network_percentage" })
                                                            ),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                network_fee,
                                                                "%"
                                                            )
                                                        ),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "tr",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.lifetime_referrer" }),
                                                                " ",
                                                                "\xA0 (",
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                                                    {
                                                                        to: "account/" + account.lifetime_referrer_name
                                                                    },
                                                                    account.lifetime_referrer_name
                                                                ),
                                                                ")"
                                                            ),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                lifetime_fee,
                                                                "%"
                                                            )
                                                        ),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "tr",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.registrar" }),
                                                                " ",
                                                                "\xA0 (",
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                                                    {
                                                                        to: "account/" + account.registrar_name
                                                                    },
                                                                    account.registrar_name
                                                                ),
                                                                ")"
                                                            ),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                registrar_fee,
                                                                "%"
                                                            )
                                                        ),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "tr",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.referrer" }),
                                                                " ",
                                                                "\xA0 (",
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                                                    {
                                                                        to: "account/" + account.referrer_name
                                                                    },
                                                                    account.referrer_name
                                                                ),
                                                                ")"
                                                            ),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                referrer_fee,
                                                                "%"
                                                            )
                                                        ),
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "tr",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.membership_expiration" }),
                                                                " "
                                                            ),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                                "td",
                                                                null,
                                                                expiration_date
                                                            )
                                                        )
                                                    )
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "h4",
                                                    {
                                                        style: { paddingTop: "1rem" }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.member.fees_cashback" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "table",
                                                    { className: "table key-value-table" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Statistics__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                        stat_object: account.statistics
                                                    })
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "grid-block large-7" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-content" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeeHelp, {
                                                    account: account_name,
                                                    networkFee: network_fee,
                                                    referrerFee: referrer_fee,
                                                    registrarFee: registrar_fee,
                                                    lifetimeFee: lifetime_fee,
                                                    referrerTotalFee: referrer_total_fee,
                                                    maintenanceInterval: gprops.getIn(["parameters", "maintenance_interval"]),
                                                    vestingThreshold: {
                                                        amount: gprops.getIn(["parameters", "cashback_vesting_threshold"]),
                                                        asset: core_asset
                                                    },
                                                    vestingPeriod: gprops.getIn(["parameters", "cashback_vesting_period_seconds"]) / 60 / 60 / 24
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountMembership;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountMembership.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    gprops: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired,
    core_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired
};
AccountMembership.defaultProps = {
    gprops: "2.0.0",
    core_asset: "1.3.0"
};

AccountMembership = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(AccountMembership);

/* harmony default export */ __webpack_exports__["default"] = (AccountMembership);

/***/ }),

/***/ 2508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1013);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Statistics = function (_React$Component) {
    _inherits(Statistics, _React$Component);

    function Statistics() {
        _classCallCheck(this, Statistics);

        return _possibleConstructorReturn(this, (Statistics.__proto__ || Object.getPrototypeOf(Statistics)).apply(this, arguments));
    }

    _createClass(Statistics, [{
        key: "render",
        value: function render() {
            var stat_object = this.props.stat_object.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tbody",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.fees_paid" }),
                        " "
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            amount: parseFloat(stat_object.lifetime_fees_paid),
                            asset: "1.3.0"
                        })
                    )
                )
            );
        }
    }]);

    return Statistics;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Statistics.propTypes = {
    stat_object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(Statistics));

/***/ }),

/***/ 2509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1013);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(741);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(485);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var VestingBalance = function (_React$Component) {
    _inherits(VestingBalance, _React$Component);

    function VestingBalance() {
        _classCallCheck(this, VestingBalance);

        return _possibleConstructorReturn(this, (VestingBalance.__proto__ || Object.getPrototypeOf(VestingBalance)).apply(this, arguments));
    }

    _createClass(VestingBalance, [{
        key: "_onClaim",
        value: function _onClaim(claimAll, e) {
            var _this2 = this;

            e.preventDefault();
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_5__["default"].claimVestingBalance(this.props.account.id, this.props.vb, claimAll).then(function () {
                typeof _this2.props.handleChanged == "function" && _this2.props.handleChanged();
            });
        }
    }, {
        key: "render",
        value: function render() {
            var vb = this.props.vb;

            if (!this.props.vb) {
                return null;
            }

            var cvbAsset = void 0,
                vestingPeriod = void 0,
                earned = void 0,
                secondsPerDay = 60 * 60 * 24,
                availablePercent = void 0,
                balance = void 0;
            if (vb) {
                balance = vb.balance.amount;
                cvbAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(vb.balance.asset_id);
                earned = vb.policy[1].coin_seconds_earned;
                vestingPeriod = vb.policy[1].vesting_seconds;
                availablePercent = vestingPeriod === 0 ? 1 : earned / (vestingPeriod * balance);
            }

            if (!cvbAsset) {
                return null;
            }

            if (!balance) {
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    component: "h5",
                    content: "account.vesting.balance_number",
                    id: vb.id
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table key-value-table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.cashback" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    amount: vb.balance.amount,
                                    asset: vb.balance.asset_id
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.earned" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_amount(earned / secondsPerDay, cvbAsset), 0),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.coindays" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.required" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_amount(vb.balance.amount * vestingPeriod / secondsPerDay, cvbAsset), 0),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.coindays" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.remaining" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(vestingPeriod * (1 - availablePercent) / secondsPerDay || 0, 2),
                                "\xA0days"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.available" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(availablePercent * 100, 2),
                                "% /",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    amount: availablePercent * vb.balance.amount,
                                    asset: cvbAsset.get("id")
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { colSpan: "2", style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        onClick: this._onClaim.bind(this, false),
                                        className: "button"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.member.claim" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return VestingBalance;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AccountVesting = function (_React$Component2) {
    _inherits(AccountVesting, _React$Component2);

    function AccountVesting() {
        _classCallCheck(this, AccountVesting);

        var _this3 = _possibleConstructorReturn(this, (AccountVesting.__proto__ || Object.getPrototypeOf(AccountVesting)).call(this));

        _this3.state = {
            vbs: null
        };
        return _this3;
    }

    _createClass(AccountVesting, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.retrieveVestingBalances.call(this, this.props.account.get("id"));
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps) {
            var newId = nextProps.account.get("id");
            var oldId = this.props.account.get("id");

            if (newId !== oldId) {
                this.retrieveVestingBalances.call(this, newId);
            }
        }
    }, {
        key: "retrieveVestingBalances",
        value: function retrieveVestingBalances(accountId) {
            var _this4 = this;

            accountId = accountId || this.props.account.get("id");
            bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_6__["Apis"].instance().db_api().exec("get_vesting_balances", [accountId]).then(function (vbs) {
                _this4.setState({ vbs: vbs });
            }).catch(function (err) {
                console.log("error:", err);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var vbs = this.state.vbs;

            if (!vbs || !this.props.account || !this.props.account.get("vesting_balances")) {
                return null;
            }

            var account = this.props.account.toJS();

            var balances = vbs.map(function (vb) {
                if (vb.balance.amount) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VestingBalance, {
                        key: vb.id,
                        vb: vb,
                        account: account,
                        handleChanged: _this5.retrieveVestingBalances.bind(_this5)
                    });
                }
            }).filter(function (a) {
                return !!a;
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__["Tabs"],
                            {
                                segmented: false,
                                setting: "vestingTab",
                                className: "account-tabs",
                                tabsClass: "account-overview bordered-header content-block",
                                contentClass: "padding"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__["Tab"],
                                { title: "account.vesting.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "account.vesting.explain",
                                    component: "p"
                                }),
                                !balances.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "h4",
                                    { style: { paddingTop: "1rem" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                        content: "account.vesting.no_balances"
                                    })
                                ) : balances
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountVesting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountVesting.VestingBalance = VestingBalance;
/* harmony default export */ __webpack_exports__["default"] = (AccountVesting);

/***/ }),

/***/ 2510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(566);
/* harmony import */ var api_ApplicationApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(586);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(416);
/* harmony import */ var _AccountPermissionsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2511);
/* harmony import */ var _AccountPermissionsMigrate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2515);
/* harmony import */ var _Forms_PubKeyInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2516);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2478);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1051);
/* harmony import */ var _RecentTransactions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2517);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(588);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var AccountPermissions = function (_React$Component) {
    _inherits(AccountPermissions, _React$Component);

    function AccountPermissions(props) {
        _classCallCheck(this, AccountPermissions);

        var _this = _possibleConstructorReturn(this, (AccountPermissions.__proto__ || Object.getPrototypeOf(AccountPermissions)).call(this, props));

        _this.state = {};
        _this.onPublish = _this.onPublish.bind(_this);
        _this.onReset = _this.onReset.bind(_this);
        return _this;
    }

    _createClass(AccountPermissions, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.updateAccountData(this.props.account);
            common_account_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getFinalFeeAsset(this.props.account, "account_update");
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.account !== this.props.account) this.updateAccountData(nextProps.account);
        }
    }, {
        key: "permissionsFromImmutableObj",
        value: function permissionsFromImmutableObj(auths) {
            var threshold = auths.get("weight_threshold");
            var account_auths = auths.get("account_auths");
            var key_auths = auths.get("key_auths");
            var address_auths = auths.get("address_auths");

            var accounts = account_auths.map(function (a) {
                return a.get(0);
            });
            var keys = key_auths.map(function (a) {
                return a.get(0);
            });
            var addresses = address_auths.map(function (a) {
                return a.get(0);
            });

            var weights = account_auths.reduce(function (res, a) {
                res[a.get(0)] = a.get(1);
                return res;
            }, {});
            weights = key_auths.reduce(function (res, a) {
                res[a.get(0)] = a.get(1);
                return res;
            }, weights);
            weights = address_auths.reduce(function (res, a) {
                res[a.get(0)] = a.get(1);
                return res;
            }, weights);

            return { threshold: threshold, accounts: accounts, keys: keys, addresses: addresses, weights: weights };
        }
    }, {
        key: "permissionsToJson",
        value: function permissionsToJson(threshold, accounts, keys, addresses, weights) {
            var res = { weight_threshold: threshold };
            res["account_auths"] = accounts.sort(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].sortID).map(function (a) {
                return [a, weights[a]];
            }).toJS();
            res["key_auths"] = keys.sort(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].sortID).map(function (a) {
                return [a, weights[a]];
            }).toJS();
            res["address_auths"] = addresses.sort(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].sortID).map(function (a) {
                return [a, weights[a]];
            }).toJS();
            return res;
        }
    }, {
        key: "updateAccountData",
        value: function updateAccountData(account) {
            var active = this.permissionsFromImmutableObj(account.get("active"));
            var owner = this.permissionsFromImmutableObj(account.get("owner"));
            var memo_key = account.get("options").get("memo_key");
            var state = {
                active_accounts: active.accounts,
                active_keys: active.keys,
                active_addresses: active.addresses,
                owner_accounts: owner.accounts,
                owner_keys: owner.keys,
                owner_addresses: owner.addresses,
                active_weights: active.weights,
                owner_weights: owner.weights,
                active_threshold: active.threshold,
                owner_threshold: owner.threshold,
                memo_key: memo_key,
                prev_active_accounts: active.accounts,
                prev_active_keys: active.keys,
                prev_active_addresses: active.addresses,
                prev_owner_accounts: owner.accounts,
                prev_owner_keys: owner.keys,
                prev_owner_addresses: owner.addresses,
                prev_active_weights: active.weights,
                prev_owner_weights: owner.weights,
                prev_active_threshold: active.threshold,
                prev_owner_threshold: owner.threshold,
                prev_memo_key: memo_key
            };
            this.setState(state);
        }
    }, {
        key: "isChanged",
        value: function isChanged() {
            var s = this.state;
            return s.active_accounts !== s.prev_active_accounts || s.active_keys !== s.prev_active_keys || s.active_addresses !== s.prev_active_addresses || s.owner_accounts !== s.prev_owner_accounts || s.owner_keys !== s.prev_owner_keys || s.owner_addresses !== s.prev_owner_addresses || s.active_threshold !== s.prev_active_threshold || s.owner_threshold !== s.prev_owner_threshold || s.memo_key !== s.prev_memo_key;
        }
    }, {
        key: "didChange",
        value: function didChange(type) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

            if (type === "memo") {
                return s.memo_key !== s.prev_memo_key;
            }
            var didChange = false;
            ["_keys", "_active_addresses", "_accounts", "_threshold"].forEach(function (key) {
                var current = type + key;
                if (s[current] !== s["prev_" + current]) {
                    didChange = true;
                }
            });
            return didChange;
        }
    }, {
        key: "onPublish",
        value: function onPublish() {
            var s = this.state;
            var updated_account = this.props.account.toJS();

            // Set fee asset
            updated_account.fee = {
                amount: 0,
                asset_id: common_account_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getFinalFeeAsset(updated_account.id, "account_update")
            };

            var updateObject = {
                account: updated_account.id
            };

            if (this.didChange("active")) {
                updateObject.active = this.permissionsToJson(s.active_threshold, s.active_accounts, s.active_keys, s.active_addresses, s.active_weights);
            }
            if (this.didChange("owner")) {
                updateObject.owner = this.permissionsToJson(s.owner_threshold, s.owner_accounts, s.owner_keys, s.owner_addresses, s.owner_weights);
            }
            if (this.didChange("owner") && s.owner_keys.size === 0 && s.owner_addresses.size === 0 && s.owner_accounts.size === 1 && s.owner_accounts.first() === updated_account.id) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_14__["default"].addNotification({
                    message: "Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",
                    level: "error",
                    autoDismiss: 10
                });
            }
            if (s.memo_key && this.didChange("memo") && this.isValidPubKey(s.memo_key)) {
                updateObject.new_options = this.props.account.get("options").toJS();
                updateObject.new_options.memo_key = s.memo_key;
            }

            // console.log("-- AccountPermissions.onPublish -->", updateObject, s.memo_key);
            api_ApplicationApi__WEBPACK_IMPORTED_MODULE_6__["default"].updateAccount(updateObject);
        }
    }, {
        key: "isValidPubKey",
        value: function isValidPubKey(value) {
            return !!bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["PublicKey"].fromPublicKeyString(value);
        }
    }, {
        key: "onReset",
        value: function onReset() {
            var s = this.state;
            this.setState({
                active_accounts: s.prev_active_accounts,
                active_keys: s.prev_active_keys,
                active_addresses: s.prev_active_addresses,
                owner_accounts: s.prev_owner_accounts,
                owner_keys: s.prev_owner_keys,
                owner_addresses: s.prev_owner_addresses,
                active_weights: s.prev_active_weights,
                owner_weights: s.prev_owner_weights,
                active_threshold: s.prev_active_threshold,
                owner_threshold: s.prev_owner_threshold,
                memo_key: s.prev_memo_key
            });
        }
    }, {
        key: "onAddItem",
        value: function onAddItem(collection, item_value, weight) {
            var state = {};
            var list = collection + (common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].is_object_id(item_value) ? "_accounts" : "_keys");
            state[list] = this.state[list].push(item_value);
            this.state[collection + "_weights"][item_value] = weight;
            this.setState(state);
        }
    }, {
        key: "onRemoveItem",
        value: function onRemoveItem(collection, item_value, listSuffix) {
            console.log("onRemoveItem", collection, item_value, listSuffix);
            var state = {};
            var list = collection + listSuffix;

            state[list] = this.state[list].filter(function (i) {
                return i !== item_value;
            });
            this.setState(state);
        }
    }, {
        key: "onThresholdChanged",
        value: function onThresholdChanged(var_name, event) {
            var value = parseInt(event.target.value.trim());
            var state = {};
            state[var_name] = value;
            this.setState(state);
        }
    }, {
        key: "validateAccount",
        value: function validateAccount(collection, account) {
            return null;
        }
    }, {
        key: "sumUpWeights",
        value: function sumUpWeights(accounts, keys, addresses, weights) {
            var sum = accounts.reduce(function (sum, a) {
                return sum + weights[a];
            }, 0);
            sum = keys.reduce(function (sum, a) {
                return sum + weights[a];
            }, sum);
            return addresses.reduce(function (sum, a) {
                return sum + weights[a];
            }, sum);
        }
    }, {
        key: "onMemoKeyChanged",
        value: function onMemoKeyChanged(memo_key) {
            this.setState({ memo_key: memo_key });
        }
    }, {
        key: "onSetPasswordKeys",
        value: function onSetPasswordKeys(keys) {
            var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["active", "owner", "memo"];

            var newState = {};

            roles.forEach(function (role) {
                newState["password_" + role] = keys[role];
            });

            this.setState(newState);
        }
    }, {
        key: "render",
        value: function render() {
            var error1 = void 0,
                error2 = void 0;

            var _state = this.state,
                active_accounts = _state.active_accounts,
                active_keys = _state.active_keys,
                active_addresses = _state.active_addresses,
                active_weights = _state.active_weights;
            var _state2 = this.state,
                owner_accounts = _state2.owner_accounts,
                owner_keys = _state2.owner_keys,
                owner_addresses = _state2.owner_addresses,
                owner_weights = _state2.owner_weights;


            var threshold = this.state.active_threshold > 0 ? this.state.active_threshold : 0;
            var weights_total = this.sumUpWeights(active_accounts, active_keys, active_addresses, active_weights);
            if (this.didChange("active") && weights_total < threshold) error1 = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("account.perm.warning1", {
                weights_total: weights_total,
                threshold: threshold
            });

            threshold = this.state.owner_threshold > 0 ? this.state.owner_threshold : 0;
            weights_total = this.sumUpWeights(owner_accounts, owner_keys, owner_addresses, owner_weights);
            if (this.didChange("owner") && weights_total < threshold) error2 = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("account.perm.warning2", {
                weights_total: weights_total,
                threshold: threshold
            });

            var publish_buttons_class = "button" + (!(error1 || error2) && this.isChanged() && this.isValidPubKey(this.state.memo_key) ? "" : " disabled");
            var reset_buttons_class = "button" + (this.isChanged() ? "" : " disabled");

            var accountsList = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set();
            accountsList = accountsList.add(this.props.account.get("id"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tabs"],
                            {
                                defaultActiveTab: 1,
                                segmented: false,
                                setting: "permissionsTab",
                                className: "account-tabs",
                                tabsClass: "account-overview bordered-header content-block",
                                contentClass: "padding",
                                actionButtons: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "action-buttons" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "button",
                                        {
                                            className: reset_buttons_class,
                                            onClick: this.onReset,
                                            tabIndex: 8
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "button",
                                        {
                                            className: publish_buttons_class,
                                            onClick: this.onPublish,
                                            tabIndex: 9
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.publish" })
                                    )
                                )
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tab"],
                                { title: "account.perm.active" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__["default"], { path: "components/AccountPermActive" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "form",
                                    { className: "threshold" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "horizontal" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.threshold" }),
                                        " ",
                                        "\xA0 \xA0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "number",
                                            placeholder: "0",
                                            size: "5",
                                            value: this.state.active_threshold,
                                            onChange: this.onThresholdChanged.bind(this, "active_threshold"),
                                            autoComplete: "off",
                                            tabIndex: 1
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPermissionsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    label: "account.perm.add_permission_label",
                                    accounts: active_accounts,
                                    keys: active_keys,
                                    weights: active_weights,
                                    addresses: active_addresses,
                                    validateAccount: this.validateAccount.bind(this, "active"),
                                    onAddItem: this.onAddItem.bind(this, "active"),
                                    onRemoveItem: this.onRemoveItem.bind(this, "active"),
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("account.perm.account_name_or_key"),
                                    tabIndex: 2
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                error1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "content-block has-error" },
                                    error1
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tab"],
                                { title: "account.perm.owner" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__["default"], { path: "components/AccountPermOwner" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "form",
                                    { className: "threshold" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "horizontal" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.threshold" }),
                                        " ",
                                        "\xA0 \xA0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "number",
                                            placeholder: "0",
                                            size: "5",
                                            value: this.state.owner_threshold,
                                            onChange: this.onThresholdChanged.bind(this, "owner_threshold"),
                                            autoComplete: "off",
                                            tabIndex: 4
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPermissionsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    label: "account.perm.add_permission_label",
                                    accounts: owner_accounts,
                                    keys: owner_keys,
                                    weights: owner_weights,
                                    addresses: owner_addresses,
                                    validateAccount: this.validateAccount.bind(this, "owner"),
                                    onAddItem: this.onAddItem.bind(this, "owner"),
                                    onRemoveItem: this.onRemoveItem.bind(this, "owner"),
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("account.perm.account_name_or_key"),
                                    tabIndex: 5
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                error2 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "content-block has-error" },
                                    error2
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tab"],
                                { title: "account.perm.memo_key" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    style: { maxWidth: "800px" },
                                    path: "components/AccountPermMemo"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_PubKeyInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    ref: "memo_key",
                                    value: this.state.memo_key,
                                    label: "account.perm.memo_public_key",
                                    placeholder: "Public Key",
                                    onChange: this.onMemoKeyChanged.bind(this),
                                    tabIndex: 7
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_11__["Tab"],
                                { title: "account.perm.password_model" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPermissionsMigrate__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    active: this.state.password_active,
                                    owner: this.state.password_owner,
                                    memo: this.state.password_memo,
                                    onSetPasswordKeys: this.onSetPasswordKeys.bind(this),
                                    account: this.props.account,
                                    activeKeys: this.state.active_keys,
                                    ownerKeys: this.state.owner_keys,
                                    memoKey: this.state.memo_key,
                                    onAddActive: this.onAddItem.bind(this, "active"),
                                    onRemoveActive: this.onRemoveItem.bind(this, "active"),
                                    onAddOwner: this.onAddItem.bind(this, "owner"),
                                    onRemoveOwner: this.onRemoveItem.bind(this, "owner"),
                                    onSetMemo: this.onMemoKeyChanged.bind(this)
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tab-content", style: { padding: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "divider" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RecentTransactions__WEBPACK_IMPORTED_MODULE_13__["RecentTransactions"], {
                                accountsList: accountsList,
                                limit: 25,
                                compactView: false,
                                filter: "account_update",
                                style: { paddingBottom: "2rem" }
                            })
                        )
                    )
                )
            );
        }
    }]);

    return AccountPermissions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountPermissions);

/***/ }),

/***/ 2511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var _AccountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1221);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AccountImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1222);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(802);
/* harmony import */ var components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2512);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var stores_AddressIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(707);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(702);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var AccountPermissionRow = function (_React$Component) {
    _inherits(AccountPermissionRow, _React$Component);

    function AccountPermissionRow() {
        _classCallCheck(this, AccountPermissionRow);

        return _possibleConstructorReturn(this, (AccountPermissionRow.__proto__ || Object.getPrototypeOf(AccountPermissionRow)).apply(this, arguments));
    }

    _createClass(AccountPermissionRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "_lookUpPubKeyForAddress",
        value: function _lookUpPubKeyForAddress(address) {
            var addresses = stores_AddressIndex__WEBPACK_IMPORTED_MODULE_11__["default"].getState().addresses;
            var pubkey = addresses.get(address);
            return pubkey;
        }
    }, {
        key: "render",
        value: function render() {
            var name = void 0,
                item_id = void 0,
                name_or_key = void 0;
            var suffix = "_accounts";
            var pubKey = this.props.pubkey;

            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().keys;

            var has_private = false;

            if (this.props.account) {
                name = this.props.account.get("name");
                item_id = this.props.account.get("id");
                name_or_key = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/account/" + name + "/permissions" },
                    name
                );
            } else if (pubKey) {
                name = item_id = pubKey;
                name_or_key = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_8__["default"],
                    { pubkey: pubKey },
                    pubKey
                );
                suffix = "_keys";
                has_private = keys.has(pubKey);
            } else if (this.props.address) {
                pubKey = this._lookUpPubKeyForAddress(this.props.address);
                item_id = this.props.address;
                name_or_key = !pubKey ? this.props.address : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_8__["default"],
                    { pubkey: pubKey },
                    pubKey
                );
                suffix = "_addresses";
                has_private = keys.has(pubKey);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: name },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    this.props.account ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        size: { height: 30, width: 30 },
                        account: name
                    }) : pubKey ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "account-image" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_8__["default"],
                            { pubkey: pubKey },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "key", title: "icons.key", size: "4x" })
                        )
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: (has_private ? "my-key" : "") + " pub-key" },
                    name_or_key
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    this.props.weights[item_id]
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button",
                            onClick: this.props.onRemoveItem.bind(this, item_id, suffix)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.votes.remove_witness" })
                    )
                )
            );
        }
    }]);

    return AccountPermissionRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountPermissionRow.propTypes = {
    account: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
    pubkey: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,
    address: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,
    onRemoveItem: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,
    weights: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object
};

var AccountPermissionsList = function (_React$Component2) {
    _inherits(AccountPermissionsList, _React$Component2);

    function AccountPermissionsList(props) {
        _classCallCheck(this, AccountPermissionsList);

        var _this2 = _possibleConstructorReturn(this, (AccountPermissionsList.__proto__ || Object.getPrototypeOf(AccountPermissionsList)).call(this, props));

        _this2.state = {
            selected_item: null,
            item_name_input: "",
            weight_input: "",
            error: null
        };
        _this2.onItemChange = _this2.onItemChange.bind(_this2);
        _this2.onItemAccountChange = _this2.onItemAccountChange.bind(_this2);
        _this2.onAddItem = _this2.onAddItem.bind(_this2);
        return _this2;
    }

    _createClass(AccountPermissionsList, [{
        key: "onItemChange",
        value: function onItemChange(item_name_input) {
            this.setState({ item_name_input: item_name_input });
        }
    }, {
        key: "onItemAccountChange",
        value: function onItemAccountChange(selected_item) {
            var _this3 = this;

            this.setState({ selected_item: selected_item, error: null });
            if (selected_item && this.props.validateAccount) {
                var res = this.props.validateAccount(selected_item);
                if (res === null) return;
                if (typeof res === "string") this.setState({ error: res });else res.then(function (error) {
                    return _this3.setState({ error: error });
                });
            }
        }
    }, {
        key: "onWeightChanged",
        value: function onWeightChanged(event) {
            var value = event.target.value.trim();
            this.setState({ weight_input: parseInt(value) });
        }
    }, {
        key: "onAddItem",
        value: function onAddItem(item) {
            if (!item) return;
            var next_state = {
                selected_item: null,
                item_name_input: "",
                weight_input: "",
                error: null
            };
            this.setState(next_state);
            var item_value = typeof item === "string" ? item : item.get("id");
            this.props.onAddItem(item_value, this.state.weight_input);
        }
    }, {
        key: "onWeightKeyDown",
        value: function onWeightKeyDown(event) {
            if (event.keyCode === 13 && this.state.weight_input && this.state.selected_item) this.onAddItem(this.state.selected_item);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var key = 0;
            var account_rows = this.props.accounts.filter(function (i) {
                if (!i) return false;
                //if (this.state.item_name_input) return i.get("name").indexOf(this.state.item_name_input) !== -1;
                return true;
            }).sort(function (a, b) {
                if (a.get("name") > b.get("name")) return 1;else if (a.get("name") < b.get("name")) return -1;
                return 0;
            }).map(function (i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountPermissionRow, {
                    key: key++,
                    account: i,
                    weights: _this4.props.weights,
                    onRemoveItem: _this4.props.onRemoveItem
                });
            });

            var key_rows = this.props.keys.map(function (k) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountPermissionRow, {
                    key: key++,
                    pubkey: k,
                    weights: _this4.props.weights,
                    onRemoveItem: _this4.props.onRemoveItem
                });
            });

            var address_rows = this.props.addresses.map(function (k) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountPermissionRow, {
                    key: key++,
                    address: k,
                    weights: _this4.props.weights,
                    onRemoveItem: _this4.props.onRemoveItem
                });
            });

            var error = this.state.error;
            if (!error && this.state.selected_item && this.props.accounts.indexOf(this.state.selected_item) !== -1) error = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.perm.warning3");
            if (!error && this.state.item_name_input && this.props.keys.indexOf(this.state.item_name_input) !== -1) error = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.perm.warning4");

            var cw = ["10%", "70%", "30%", "10%"];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _AccountSelector__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                        label: this.props.label,
                        error: error,
                        placeholder: this.props.placeholder,
                        account: this.state.item_name_input,
                        accountName: this.state.item_name_input,
                        onChange: this.onItemChange,
                        onAccountChanged: this.onItemAccountChange,
                        onAction: this.onAddItem,
                        action_label: "account.votes.add_witness",
                        tabIndex: this.props.tabIndex,
                        allowPubKey: true,
                        disableActionButton: !this.state.weight_input,
                        allowUppercase: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        value: this.state.weight_input,
                        onChange: this.onWeightChanged.bind(this),
                        className: "weight-input",
                        type: "number",
                        autoComplete: "off",
                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.perm.weight"),
                        onKeyDown: this.onWeightKeyDown.bind(this),
                        tabIndex: this.props.tabIndex + 1
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "thead",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { width: cw[0] } }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { width: cw[1] } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.acct_or_key" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { width: cw[2] } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.weight" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { width: cw[3] } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.action" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            account_rows,
                            key_rows,
                            address_rows
                        )
                    )
                )
            );
        }
    }]);

    return AccountPermissionsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountPermissionsList.propTypes = {
    accounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainObjectsList,
    onAddItem: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,
    onRemoveItem: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,
    validateAccount: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
    label: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired, // a translation key for the label,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string, // the placeholder text to be displayed when there is no user_input
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number, // tabindex property to be passed to input tag
    weights: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object // weights: hash of {account id -> weight}
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(AccountPermissionsList, { autosubscribe: false }));

/***/ }),

/***/ 2512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(587);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var _Modal_QrcodeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2513);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PrivateKeyView = function (_Component) {
    _inherits(PrivateKeyView, _Component);

    function PrivateKeyView() {
        _classCallCheck(this, PrivateKeyView);

        var _this = _possibleConstructorReturn(this, (PrivateKeyView.__proto__ || Object.getPrototypeOf(PrivateKeyView)).call(this));

        _this.state = _this._getInitialState();
        return _this;
    }

    _createClass(PrivateKeyView, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return { wif: null };
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setState(this._getInitialState());
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var modalId = "key_view_modal" + this.props.pubkey;
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.subscribe(modalId, function (name, msg) {
                if (name !== modalId) return;
                if (msg === "close") _this2.reset();
            });
        }
    }, {
        key: "render",
        value: function render() {
            var modalId = "key_view_modal" + this.props.pubkey;
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;

            var has_private = keys.has(this.props.pubkey);
            if (!has_private) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                this.props.children
            );
            var key = keys.get(this.props.pubkey);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    { onClick: this.onOpen.bind(this) },
                    this.props.children
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_1__["default"],
                    {
                        ref: modalId,
                        id: modalId,
                        overlay: true,
                        overlayClose: false
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.key_viewer" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.public" })
                                ),
                                this.props.pubkey
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block grid-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.private" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    this.state.wif ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "p",
                                            { style: { fontWeight: 600 } },
                                            this.state.wif
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "button-group" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.onHide.bind(this)
                                                },
                                                "hide"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "clickable",
                                                    onClick: this.showQrCode.bind(this)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                                    style: { height: 50 },
                                                    src: __webpack_require__(2514)
                                                })
                                            )
                                        )
                                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: "button",
                                                onClick: this.onShow.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.show" })
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block grid-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.brain" })
                                ),
                                key.brainkey_sequence == null ? "Non-deterministic" : key.brainkey_sequence
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            key.import_account_names && key.import_account_names.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block grid-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.from" })
                                ),
                                key.import_account_names.join(", "),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: this.onClose.bind(this),
                                className: " button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "transfer.close" })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_QrcodeModal__WEBPACK_IMPORTED_MODULE_7__["default"], { ref: "qrmodal", keyValue: this.state.wif })
            );
        }
    }, {
        key: "onOpen",
        value: function onOpen() {
            var modalId = "key_view_modal" + this.props.pubkey;
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(modalId, "open");
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.reset();
            var modalId = "key_view_modal" + this.props.pubkey;
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(modalId, "close");
        }
    }, {
        key: "onShow",
        value: function onShow() {
            var _this3 = this;

            actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__["default"].unlock().then(function () {
                var private_key = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getPrivateKey(_this3.props.pubkey);
                _this3.setState({ wif: private_key.toWif() });
            }).catch(function () {});
        }
    }, {
        key: "onHide",
        value: function onHide() {
            this.setState({ wif: null });
        }
    }, {
        key: "showQrCode",
        value: function showQrCode() {
            this.refs.qrmodal.show();
        }
    }]);

    return PrivateKeyView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PrivateKeyView.propTypes = {
    pubkey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PrivateKeyView);

/***/ }),

/***/ 2513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1248);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var QrcodeModal = function (_React$Component) {
    _inherits(QrcodeModal, _React$Component);

    function QrcodeModal(props) {
        _classCallCheck(this, QrcodeModal);

        var _this = _possibleConstructorReturn(this, (QrcodeModal.__proto__ || Object.getPrototypeOf(QrcodeModal)).call(this, props));

        _this.state = _this._getInitialState();
        _this.onPasswordEnter = _this.onPasswordEnter.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onCancel = _this.onCancel.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }

    _createClass(QrcodeModal, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return {
                isShowQrcode: false,
                keyString: null
            };
        }
    }, {
        key: "show",
        value: function show() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(this.props.modalId, "open");
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(this.props.modalId, "close");
            this.onClose();
        }
    }, {
        key: "onClose",
        value: function onClose() {
            if (this.refs.password_input) this.refs.password_input.value = "";
            this.setState(this._getInitialState());
        }
    }, {
        key: "onPasswordEnter",
        value: function onPasswordEnter(e) {
            e.preventDefault();
            var pwd = this.refs.password_input.value;
            var key = this.props.keyValue;
            if (pwd != null && pwd != "") {
                if (key !== undefined && key != null && key != "") {
                    var pwd_aes = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["Aes"].fromSeed(pwd);
                    var qrkey = pwd_aes.encryptToHex(key);
                    this.setState({ isShowQrcode: true, keyString: qrkey });
                }
            } else {
                //notify.error("You'd better enter a password to encrypt the qr code");
                this.setState({ isShowQrcode: true, keyString: key });
            }
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
            if (e.keyCode === 13) this.onPasswordEnter(e);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var pos = null;
            if (this.state.isShowQrcode) pos = { textAlign: "center" };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _BaseModal__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    onClose: this.onClose,
                    id: this.props.modalId,
                    ref: "modal",
                    overlay: true,
                    overlayClose: false
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "text-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { margin: "1.5rem 0" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            component: "h4",
                            content: "modal.qrcode.title"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            className: "full-width",
                            style: { margin: "0 3.5rem" },
                            onSubmit: this.onPasswordEnter,
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "form-group" },
                            this.state.isShowQrcode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "section",
                                { style: pos },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            background: "#fff",
                                            padding: ".75rem",
                                            display: "inline-block"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                        size: 256,
                                        value: this.state.keyString
                                    })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "section",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        unsafe: true,
                                        content: "modal.qrcode.input_message"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    name: "password",
                                    type: "text",
                                    onFocus: function onFocus() {
                                        _this2.refs.password_input.setAttribute("type", "password");
                                    },
                                    ref: "password_input",
                                    autoComplete: "off",
                                    onKeyDown: this.onKeyDown
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: pos },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "button-group" },
                                this.state.isShowQrcode == false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        "data-place": "bottom",
                                        "data-html": true,
                                        onClick: this.onPasswordEnter
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "modal.ok" })
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button primary hollow",
                                        "data-place": "bottom",
                                        "data-html": true,
                                        onClick: this.onCancel
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "cancel" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return QrcodeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

QrcodeModal.propTypes = {
    modalId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    keyValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
QrcodeModal.defaultProps = {
    modalId: "qr_code_password_modal"
};
/* harmony default export */ __webpack_exports__["default"] = (QrcodeModal);

/***/ }),

/***/ 2514:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoLBzEKr7oFDgAAIABJREFUeNq9fXmYXVWV71p773PuvVUVSAL2o40KmjCEgiSEVFUSAiRR6U9Bwan9tPG1OPLk2bQTaQd89rOfooJD80RBUfTz4RPnVpx9bZuEzIHMAaICraIiZKjpnrP3Xuv9se5dtetU1U1SiveP+m5uztln77XXtH9rOPjWt751y5YtzrkQQpZlIQRjjDGGiOB4PsxsjIkxjoyMbNmyhZkBABHlf4nIGNPX19fT0+O9995v2rQpvRcR5Rr5rrfLP/VKItq7d+/VV19tjAGAPM9DCMyc5/ncuXM//elPy4179ux54xvfWK/XiUjWJU/pPH9rbQgBAJQC8mhmjjEODAy4bdu2rV+/Xn6NMSKizDud4rF8ZHSZ9+joaKPRkAGNMTJUWZbbt2+31nrv0ykKlWUE/V1ukQ2T+cgFiHjo0KFt27Z57+VHWaG1ttlsxhittcw8ODh4zz336MR0qDzP06dPJJbuUIxRZyKTQUSnU0nvkWUfF7F09BBCvV6X7/J4mXGe50RUYVjdGyGZ8pE8XcmnXxDRGNNsNnVVwgsxRiGZ/g4AzjkdWTfsWJZQobLOygh10l2Vx0/jY4yR+SFiCCHGGGMU6lRIL49LJ2etFUKkgsnM3nsdR4aSnRDKKhWMMYcOHdIHOefku0wmxigD6uZN/MjTZUD5yO7qjiKikbHkV6GiPIOP8yO3K6Gdc9Zaa22WZTKPPM9VlFSCAMB7X6vVdELOOUTMsuzss88GgCzLZBxZSQhBuIOIGo1GX1+fEDHGuG/fvnSzRT7yPO/v75cZeu/Lspxq/rorIQQZcGhoSMbUa5xMSNSkiqtz7njFUJlfNbGKmLU2xijKoiKGwtf6Vy8wxsyYMUNuF8WvnJvnuQw4OjqqkiKqUDZG9kDYVigrukz5cdL5V5hOGPbIkSOqsIwxTqiYXic8fLwKPtWFKkcVXSCLnHhL5Ue5RamWqggiKopCZVnkS9aZZZkaKL1ApqG0Vqp1sIk6iOyfEFekzaRaUK47qpXt8CRlHNFBkyopXbyqM/lF1bPcqOJQUXYiLHLlyMiIXiwjqJirdVYpUbJ2mLxogImMYoyx1o55E8LM6YZ3/lRYWr/rbug/RdlX3BGdligXdVxE8RHR5z73uSzLRIUtWLBAx1yxYoWMFkK47777ZObOOSWrem3yFO+9PnfTpk1TLUc0IyL29fWJUkpdxTGd9WR/KhZduS/lLN18nZ+QTHZVLIA6bsqbqon0u4wwUa6Pa7YVsRhTUE82pYSh1PmUL7KZ+stE56uyYDFBYmGFHMIv6iLIIMKGcv00dIgq8qn0tXmyiSXP1s1XaRKFolqywho6b71S6SJKXSRUr1RJ9N6L1P/pM6/ok78EsVQp1Go18R7UysinKAphhJRwHZhU2WdkZOSee+7Rwc8991xx65xzqQE9Xsue0qhy41+Is1Kekm0XfklVe2V++r8VudBxurq61MtBxO7ubvmvoiimYc0nEjT1Qv5yOit1GlSRy+anB2YlxMSjiRybU59DbbeMmVrbPM//FJ3VaeP/AtZQ6aKnqFSFjx1Tk4Oh+Maqs9QRVYMoBqurq0tdBIWV5OxSYcNjF8aUtSscOh3OEke8glV1dvZSRKEyJ/HgJ4rh4sWLVWDVeiLixo0bL7zwQgWFjooaHaOyT7EzdWv/DJyVrqGCQx0LZx0jJ2ZZpkBNyon1el3tpvpcuiXq7oqva4xRZK0zSKfjpMeMytLctGUq3fOjmjD5e1SyKjuo5lY8T72qoihkPQpsioJT5i3LUqFBEWE5Y3c+xumYuhzxQo6JWFORQDlf/JqjqlL1sPTGzqdZuSyEMDw8rFCvc857L6c84ZQU85LP8PCwzFncfbUSWZbJJIWCHbZW2HNwcFDuTV25oxBrKlGfqKo6L16vd86NjIyIgBzVKgHAvn37lIsXLFhw3333idz19vYqgdJTt2xeyshyLBUaiR+7bNmyzuuStYQQJp4ipslZFZC+8+J1wQpadRZbPdwdOXJE/ICyLOv1uopJrVar6GAhop6H1O+VQ1Ke54pVTHXoUz4VwU/PBn8GnSVzOkadVbn3qFYpna5Em1J0xXsvroOqcEVBlNbiOsjBSHScTniqOYjjVoHX/wwefIoWHIvzUkEpjxpkkxkL1i7+p/hZcrsKsnq2qd8r85Fly152dXUp4NFhtxRfVdFzzvX09Iy7aNWqVRUf51j2v4PY1mo1USiKdqrzIu7iRGcvBf51AuJnyTg7duww7U05d+ECHwMzx+jvWb9WWXvhwoXq9G7atCm1/ROduOP9OOdWrlxpFEVVn2UaQcP0uFAURQhBxEcRD3WanHNydlMWSO1UigurBy+IqJDXWtvV1WWNsKrLs7oAEhKMkaiSkr5er6e70gGAPyoTyLBG5D/d2GnDygrIOucErdYQVqpKxLTL3og2ybJMNHSK0lRg28xlFcsrke0KDi6EE93UbDbTcOT0FpXiqO7gwYOpEtGNnUZ0R2ght3vv5QGyAPHuxN9RJkoJquqvBeA6J0sV859lWRliltWIwuGDh2IIzrksy2yWi2ir/hZTIGMKb+oJtHJKOy4FTUQHDx5EsRdijysw5vESS7ZdpViEQiiVenf6T+9jltlEhNl7v2XLNg2JHzlyRDDlPM8HBpYZA0VR1GrCYgxgjhw58sAD+/M8HxkZmT179rx583Q/hFjNZlMMgrLk9EJ83vs8z1E34c8FLaaHNRWZtWvXilopy/Lss8+eMWMGMWaZQ4RI0RobyYsmwraBVn4RP4sBKEZrkSmgMQCGGQGRYgwh1Gq19GAEAAww2hxt1BsMDAAISEyIaACnvTpMcV6Vwc5AwhRjRZFE2duhoaG77rrrK1/5yo9//FOhYJ7nzWZTNtkYc/6S/he84AVXXXXVnDl/TUwx+sxlPvjcTVi2RGuADTBD/MC//Mt3v/tdtBbBRobcZUVRCP+q64uIz7v0+b29vZdffrkGe2KMeZbj8ftJY6Sg9kfPENOI3UsAfLQ5yOx//ZuHXvqyK4wFQDAWJoYPWs9Gi8YBmKXLl+27fz9xHC1GiKOi7OlMZH7eF8z+da/9rwiABowBMGMpLhoebqk/BOMsILzs5X978PAhYg4UI09vaa0pQX9/fyUW3dnVcpD1zj+HmQP5yJL9wUwcikPM5fXvfg8AIIKoUYO5WpM0+IqIFiCzDsCYrAts7Y3//R+bkT1zJCbmZrPJHJkjM4fQoplnH0bpmte8yBpwCHUE42am3tP4g5cxxunfO7/81cDsmYk9M0dPzEzMgWMZCiYW1mPmtWvX6vIlXjmW69DV1aVjKyLRwcmOEJ/ylKeIQjFowAAAMZHN6osXLLpv195arVEUo8ZZFo8HuK+v77nPfa44FkT005/+dOvWrcEXIQZrbfRNNO7WT/7vdT9fu337VrRQFr5eqwFA2Szyes1aJAKG4ME3cnFKoF53ZTNQCJVjnSIctSwrysIAGgNE8MpXvGJ4tPmqv7/SGEYAY0WviQ/sUjdAbhe6a+5U67N69eo07iQOZGcxXr58ufctWaHofTnCsTnv1DkZQmZzAAcGAeHZz7nke9//sdj+iSy9e/ful7/8ZQjQlVsEQLSu1nPK0+cG5sBclG3fMqjoRM+eA1991eUtcUP42C13qrRKBEywmo0bN77rnWsa9byWOxk8r3Wjaxx4+NEg1xPHGCNTYBYeUydGUxKNMcuXLx+XKXTxxRdXDpCdw/fG4cBA39hK2DM3L1x+ngWo2xqCA3A9M078fz/79xDZB05dapmNOCtl8MzxoV/sP23OUxyAFRG3XQMrVgbmIjIJlYmZAlPwvvBccuDXXvl8RMzrNQDz/o/ekaq2siyTjYkc/Esuv6yROVEJYGqrLrnMMweKvmzG6Ik5EkdiVWUhhB07dqjTd84551SJlToUqZqf9AMIS5f2hxA4cvSByb/33W/PDCBA7moA2V8/9dQ/PPZ4SVGmImvQAfWfgTlGT36E/fAFSxZ059aiQ5ODyT904ycCs2+rqhhK0V+jNMKB33L1y1sQALr/8dEvCKumzCsIJ1Ng9hzL8xeeU3c2z3MAB7b26BMj8mhmT8whMkVm4jVr1ogMLlq0SBIpJqp5I7iPeqFCXXUjJkmgMJYIrLFgCDk++utff+ADNwYCBihDnDV79oO/+MXsk2cDBQAyCIq3qFLIsoyIENgYgy6LxOvu2XjKKacAB6ASmNasecfhI8MRUDSnsVZcOIcOAgyPDAmDi24ty1JObEVRiKoVVCsSMQEgfu72z8YQfVkCEMS4cdN2knMikdgFNABI9XpdDkZyxkyTvMZBNJXjzsSI7ngElWtZ3mwOAxNmeO2116I1AIBZDgg/X7eOgYjJWRNjCUBi/iSpTASwZd0BY2QAZ/MGZNnP/uM/LEJN3NJI1113nbMABoghBAJs62PD9Sw3yBQiAGdWWKaFdggs04I6rItEALBg8aIsw66aQyAAuu++vRSF+Gn0hCrhyDQ3cYxYgsaKQVFCdggfGbBEUK/XAPmJxx77+rf+LQRicBzDG6+55oyz5jXqGSISk7Nj2QmyJImzt3wWZmMtAxBgCPTUpz/tmmvewBGAIyDeftttPjAxMIJ1jhlBrAZiCMG0Y9tEAZIkWM2xISIGtM6R9wBw3sJziyI4BAQYGhpBCwRs2qgpM8vpQ1hECDIpu4zL9tYg+5g3NG5EAADKOQwPA3oosls+doOzmQMACGC6P3zTTQbZcHSMljPgVjJuZX9agwNCJARCJrTO2Ox97/ufooktRIT4ma98N+NmACAA5BIRS4hgAZwNDE5svzUa5kmZAhENAHNhsgawa8e7awYoy2xgYITIDAwWAGgMfUfEtWvXimwpviSfgYEBk+Z5p7lbim2l6fNEBD64Wj1yBAvf+Ma3yuAZwLr88he/pOasBQQAppbgdDozoT7RGjQA0N3dGOg7p21q8Gt3fQXQUtsXijE6cHJUtBaNzYCNgr+CzAjPtpL/mAw0KBwBsHv27rSmzraIkC1c0OuEzuLKIqABAGw0GgJMpjCWhiattY1Gw3TOGUwLH9LsfotZeeSJfff/J4DJrI2RX//611oDDGPIkSxzyjMXMBhmljkBANh6dvnllwG0VMnPf/pDQOsQkAkArLEGAAgQDUUoyxLQMKPiPCoHLbgVgSIb2/PQLzY0R2qem4EMYL6s/zxhv/ZSQU7Waapqmgc85gZIHnyadZfmRlWSbzT3sCQGgK2bN4h3xIyA+UUrlqfPOJYjavpQ0ZLPee5qC0RM1uUwOvy7Px7G1iYjAEQKLdgaENEaY9OET0gqMmQTEBGweNd17wcogDOwpndJ/zPmzERg4DaR2uqoLEtNPtdjX5oHD62TaJIKkSauVMJzLeeewToHjLt3b/XRABIRnXzas7rqxjAARTkTHhUIkSsMCpIFzAjMZ83vtQAGTYzBONjzwC8BwLQ4lJxxgC2eyPOcoo+hFEnUmpukIMIgFnd+8Utf/9b32QABQ6x9+MMfRAAD7GxOkcVgyapvuOGGI0eOiL2W+C4R7dmzp+o6TBqkmYqznEUwBhB//9uHIxhAQOBnnXGmITCYhnCOGh0Yz30GmV02Y5YFcJkBRi5H//N3f7TQZl4iHtttKotRAGqM54U0wEMB3v+B66989Zvy7oYnAAyve8ObL1k5EKMHMAAGUBSsEMsIz8oZQ1hMY5fqUTupLKhAo2kIU3V8i6xEzTIA46O/fUigOiSeefJJDICgUU8wRm7sAIABMyGKr2AZLYABcCd2ZwebEYyzBIOj5RiohMjAwGAzY42NFOs1e+D+PRs2bBDtLvF9Y8wDDzywfv36Oz7/mZGRwEhDw7Wsy/3N6hd/4uPvdQwkW8ggVqUSixa4TbPn06CJMcZphcZUWSVCKVV1BiCr5QAwNHwYwIADDnDCzBPboSpqsQwfBUFEAAALEAGIARAtAEbPM2ee8NhvHofMGoJmIcQitA6BI4QMIcYYKRoAX8Q7brv1i5++MVXGCvk7BMQcnOE4/L73fmrNmqstBPCMmSGGGME5YAaDQj3UkK2WmSGiFOGNBQk3bdpUyTHTUGiadaaAHKIJcRTIFUgAkEOtsIBNZGgVaJVlCQiMR1HzRIJ7QaCIgMxABNYZ9l5QHwvQ3d0NzEyi4AwCC4GFKXIECM0xuQMGBEAbAgGYgFnXjJPf8Y63HRp8Ys2aq1sbaBHBGITMtUZsiWSbP2KMa9eubTQaAi4sWLAg9Q1dyodpKYB+EaRYAf/ABMQQY6PelWeuLIYB4fDBx8VyhxD1/IHGMMcpFZcBQAg+uiwPxMaARYLgDw0NGWsgxgDQ090FKA4mMIPFdpCRyVosI4PJiYpWhIVaxX/W2RDC7JNOueVTn3zpS64QkSnKop7XiL2BrAN8rABMxUMQp9epA0VEgmSlxX1iUNWsil9Syyw4+9Snneb9RgCT1+HXDz1EDIjWOIHiRMF3ygFBBCJyWQZgrAEfPLN3GR8ZIXYZoPEMp845JfEzEIABwGUZgwkRnIUVq56zesUCIBZ1s3nzxu/823djCM7CE4899qq/e8mtn/6bH/7ge2iplteCB5dR55wBEUD5m6Y0id/r9u3b9/jjj0sYbuHChYr8CSsJjbZv3y5kbsX+iQHo6afNM0CAObP/5YP7GYEiW4vel3luseWg89ReFgmGaQzECIjsHD70wO4SgMXuYXb6M0+NAA4MACFihOioVaDCjMZlqy953vve8XpisihcjAD0T29/x003fdyY6Ev695/85LLnv+TuH36dCGwGDNzBQpdlaa096aSTFi5cWKvVarWaJj5ba8844wwYGBiQpBxNXVU8q1JqpIGGpQN9HMPPfvLtOkLN1MEAQPejfzwyOFpGJgHORQ16X0wVAgjkiYJAXEVJzDE0H//eN28Xmwim5mb8VWAuSIA5z8yeS/Z8zWuvQLQADkz2z5/4QmQKFFtoH8fm6CCTv/3WWxCh0egGcADuIx/5lA9MXPpYHjU2IV5bBeAVspju7m6tkqnIoFaXpmIMBh0wIPf1r2AGZAQEC/R/7/pavZ5xy3UBHB+Cn0wMbTvVC2wmpSnuhz/4KYJFZGvw/P5llluBDwhtFARbyfFoDDCHEBDQokgQee9r9a4Y6TVveP11b/9vzdHCGAIM7/yndz36+8eK6NFkHUJeGlFPk7xUwROREUqpX5omM8pfyYfSMltgOShxV8/ss8+cE5kBwUC87bO3h7YuTAORU7ukaE1G0QMSAEQmzBqf/9ydLZc9lle++iqITZZjEfIYjYENMHAEpkZeK4tCwZksqwEYBgPgPvi/bjj9WXMyZwAxxKFLL73U2a4OyU7GGFXZac556naZFNZQVJOINm/evGHDhu3bt+/fv3/+/PlLliy54IILLrjgAjDGMABiUfrXv/Yq1zqN8L4dO3bu3BMpapFN56wVjiCQFmLL+H79K18tPAASMhHTi150udBRWFRdWSICJrmrKJridreML4APZJ0LkdE1vvntL3sfgCyg371n1+dvv4v46GkNlRyp9HAOK1eurKTJT5U/1U57dsuXXcTEVI6ODj0uoAxCDpift2TZaGDPXDI3y1Fmz1SkiH4K8HtmHyWUVzI3mctTTp5lAWytDuguu+IlxOwDE7OPgUjUhw+R3/yaKyS2g2Cu//jnp9Q9xMzxTa9+KQJ0AQD0mKzn9yPEHCn6EIKEKUIIzJFjmQY+UsU9DoPvnLFXqaQxxlhniEPwEV1W757xxte92jlAiIh479atH7vpY+JC5Vk9RgY06tBWKgYsgDMIAL4sgfEt//APTzxxkBFiGcCYG264QfgJAZyxiPa4UxMQIDRv/tyXZtVhBFzdlBT4NVe+MpIhcNbaGALqQaV97hcdouJVHbQzZ4kuS2kMCEv6+9pb533zsEMwCNZmYnq+ffcPPHNJHChOzAQQW0NEzLE5Oszkmcsv3XE7ihZDB1h71WveEJgLX5IYuJHRFmMdD2cFZt8cJC6/8KmbAEzNALguQPez9ZuGi0DMRDQyPMgchec1yzCFWyqfKZNnent7TzjhBAAYHh7etWvX4OAgEfX09Cw679zzzjuvLCjLDRDYrHb33d+89NIXxeidyVyeXX7pZV+88/+88hV/K9HqNP1M82iZGZhqeQYAN97w4Xe/+3rB9YBh5sl/ddttt8o2C4xTq4SFj5W1CGs9GIdedfU//uvNt2zb+6scRjy6573gikOP/zYCOMRGVxcwhwiI8PvfPfrII49o0a0IxIwZM/TE04mzlJtE649Fh7iITMQcvMh2ydxc8/Y316zJTSvDwbr6ylXP/ePjh6mt6dJcD2Gu0Bx+cN/uhb1n1Z1FgFqtkde6AbI9+x8OzJ4pchniaKQilL4dBD0OziKOgZmpJOZf7d3mnHFyejeNa697z6gfm5oor+uuu64SrM/zvK+v71h1lmSjaQ5Eq6gFDBBTAOPAOUfMAPaGj3z0yitfGYmNAWOAol+/fu3JJ8164QuvuOOOO/bu3avyX5bltm3bbr755sV9S86Yf87+Bw+UgVxWKwpflsWO3bvnn/mMUAYjRDcO2NjMwXQyHI0FKinDWD79rEVv+PuXm8zmBkxmPvGRDz388MMhsgDbEkA84YQTpGuLwqST9GLpwFlqAdPshxhKJiZiYiaOkUNbyMuP3/ghZzF3rYvzei3FSzUzU8+G2mnGufzU0+bdf+Bhzxxa8WcmotHRUXXNp8FZTMJcftQHLg/Va5mcb11WO7N3gSTtUMv2xfe+970aoNX46bJly46Js9atW7dx48atW7fu2rUrRaZ++eAvt2zeKuSNFBHQOgcMwHzt296ye/fOufOe6YwFgFAWEsJJGyuNtY6QI6Zk70R++OGHvvHNr/sA1kKkVpSlXq8TME2Lr4ACgbEERXR1W3LW/dlb/pXRNDITfHH/vn233voZAAgMzhmg2EZNgkKhk9SwXXTRRWnFiLBJ6tNPzM1dvHhxNdMs+e598cMffv/Zz17lsrGYQBo91EolQepdO+wAprZwyfKDR0Ylkab0LW5q+WLEZTHKXL7uqldiCzzM3vfBj3Vws6g1pUAUIhXM/vzFCwABrRHn8A9/fCxITgbT9ddfr417dMlLly4dZw0llATjuzBV+kRVMt3T+ra0ME6QL+fcRRdddMkllwDAj370o02btuzdu/dXv/qVbECWZX19ffPmzbvkkuc8bc6cvr7z9+y5HwEYyFnYsXXLSSed9PVvfO2Flz7POQmAsLU2xBIYszxnCmvWvPMNV18TyQSwzzj1tCkZi4mIMtuqPkdwAHT33Xf/6pHfGGPKshwDFRA0mT5FDSY5fqxevVrjiJwYL72n0g3GGDMwMDA6OjppcmVZtjJevC/ky/g0oNZR3ntfFEWMPobm2992bWunEa3NrKsDuDddc20rH4hJNl98Lopehm3BFfHoaY9ERBTaU/I+tn13ij4GsezE/J73vKdSjiGZaOM46/TTTy/LsizLQ4cOaaMFa+3555+f6uO0r1xfX1+atq6+Rft03gq3yAPUOAjaoxPK8xyAKPJHbrxx1apVV7zgCmKG6CNEALjlkzd/5zvfXrfhnlNOOcUaEwEsQKDoTAYERIwWECgz1LlWq51G3soMLssyz+ut2ESSuCy/CAKqNZ+T5HxMzMxTVyh1jlImkhiHlJ2k7pj6vul3oZE+Qsdsd7OKMTRjaP7u1w8/8+lPdQAAJs/r7WiVu+NLX24GDsyRA3FszYJa/OLDaAeeknnKE4W52kmqraVpXQIzizWs1D1VdJZJs9W1wEP7e02sDxJmEQw6TWLS4J0mH4zlaCTYhvZTkZBtWQZjMzTuv8x56i8ffvhlL3sxAJVlExGNtYjw6iv/7tkrV40MNSlEBCPujXKEs3nn8pgELLIxcrNZwvgmZzp/TQZJeapaIy0+p1bITkz+rhT0TKzLa38n76Mo+HaHMFspINDKV+ccUEtIGZAgxDJkzt1511fvbKeMSa2A4M4hkHNS6KNWxYUg+MmUcUmKMTLJ1nrvXZbV2qUWmpmkG6k1bFoRqsDWGLH27t176NAh6X2SBlNTcCflrBjjzJkzzzrrrEr9u8Y7tNpEVpi2+xrnkSAyE7bIx1leR5A8Wi91T1LThczAxlkDDKJjrMUQAxA45yjClHgEs7HWoB13OIVxRZ5CR1msODRZlp1wwglz586Vy6SV3thnxYoVlRLKzmH3tO/ZpEV8abOLFJnRDJyJI0xsulkRJfmrmJx+0lsWLVokmiiEsH79eu13IEm0or/Wrl2rK01T8yu52JyAEKkRb0XKFLpKY6udC75Vso5a+at5pGkNvmq09MexfBXTSj4QXFz+aiwvxZG0DHliHwi5sdFoqFEWPZvGBCskU99dvcj0MqOPl3KhSnX1pA3ZpJxQmeio9f/GGNGmaVHOuCBIkjymRiDPc8mZ0h5uabqdaBblYqnVShvhaRfX9GCr9bWpAtWOcJC0VEnT/nRrnWbL5Hm+cOHCPM8nPxYlOksD1/rXGLNu3bpJr1+wYIH0H5LOKJroUunPptO48MILpZPf8PDw3r17hR0ajcb8+fMhaYIiBvcPf/jDAw88UOmgV5bljBkzlixZIlpv3rx5WgIp/qBo7jzPL7zwQlHkRVFIbFRbwAkTSPdNGX/WrFlw8cUXKwnFJ2o7JpN/JtZKaBvaSXVWmlMum59WCFWYJc0L27Fjh2h6AEhP/22glUMIO3fuVEkcGBiooOZSd98+sXpm3rBhg4r5qlWrNEFfa6oBYMmSJfqgLVu2QLuP3sDAgEvL1CZqzUlDIAp4KlMctbMsjG/5WommaN2xyLgQd2hoqFUhNN7mpJMcHBxMu1bD+P47mnKQ9mtRB2h4eFi742nerPpPojFED4gf09XVZVJ9UelEMOlHSVOWpZ5yOseXlLHTnnyqNer1ujKL+ofSE6WS0pkGPmTDFKSW85NSTTZGRpPEhVRWVNgSAAAGi0lEQVS1yZakiQpSWSzcJDXxyg0y51aJHkzR9Xnz5s2TOg3qEBCRSEfnGuGNGzcK73R3d/f29tbrdc2U0y8iHTLU3r17Dx48mOf5gQMHFi1aJC1v58yZs23bNslFkLvEYtx3333aXvXgwYP33nuvKCaxntKjW4UmhLBnzx7t9TM0NLR9+3ahzoEDBxYsWCAe9Zw5c/bv3z8yMkJEBw4cSBMwjyluOJV8pQqis5+lajVt+aDaJC201z07//zzVQdt27atcvKYWJwFEzrJVqrd0hbiFdu6ZMkSndvmzZtTjaR/V65c+aR3ZktFQ/suaIRNjFpqYVVsU+9EEKEErgDtuZyufFyoPTlpac/o1JdMp6fz0RYOk4rLk04sFRwFDlPnKFWRaSWU5mJUWqqkFaQV9VrJG06746V5oROLBaW6P6W4NDefWBvypDdIlP0UG7d79+7BwUEhRH9/vxhBY4xgZ7KSjRs3lmWZZdnhw4d37tzZbDadcw8++OCiRYvErT106ND999+vO5G+EkA3YNasWWeccUZ6NhJH9IknntBO6GkV3GOPPbZz586yLEdGRn7729+ec845YgdGRkZ27dp1rBHpP11nTVQTlWcp6qR8pFVReq+g/vLZs2dPxTvT1Cj5kue5WB61sCJZMcatW7dW/I+Kk2GM6e/vV8fw3nvv/YvqrNSGqkylCLfYbFUx9Xq9LMvKqz4UBdGMfrXo6TlJdFZZllo1m7qBFcgl9QEkRCjgkiLsIQSJJP7ldFbaLjhtJ5civymckEY6lRCNRkOP1uJApOiuSLoM7pyTwkP1wjTRTKDdiWcGOepqtCLtjT6h88CTr7PUIe7r64N208IdO3boOxCWLl1aMfnMPGPGjHPPPVfuFQUkpJk5c+a5557b3d2drk3eYbF//37xRYeHh7dv3y4EmjVr1llnnSUSeuKJJy5evFiUetq7SFOQnXNnn3228mDV5V61alXlKCN71QHYUt83zWaahi5Ta6UnuLTwbPny5fK7nhYrXyr/u23btkoqmvxzYGBgqsSYdD4TowREpGdJa+3FF19slC6VFxp0AB4qR7zOPf86q7NKiV5abyt4gPayVQBW0xP1bKSYn0JMqX+nAYEOQGYlg3Ri6+AWF2uHz/TSChqXeuG686p0p9eaSsOUqcKKMcqCBbQTH0KWKm6X9tiC9ksr5AAg/6Xd7tJWd5U1T7T4+r3SAFqvh3ZHfTdp93RjzJIlS9SOVPpcyv2HDx/WDmHH+64sADjzzDNnzpwpHVd37twpYddZs2bJgrMsO3LkyO7du8W0dXd3L1y4UN9YsmvXrjzPRSbkJOi9P3DggAaZ6vX6GWec0dXVVRTF/PnzhXnT0odJ+asiWIg4e/Zs8QGzLDv99NNh1apVAjNpJ2JFi1KRTk9zFQ1yLH7WpDiXfqnA+SmviaD19/crLrZu3brJOwElH4n3pXwkkXoh/URgLlXWqQKVu8Yw+PSFHCkgN/H1JtWmne3I4DTelZWCpemrwFIUVFEzsffp4UPP3np4qlgefbGUOCLSKgzajfZSEVGhmQhwV5xVKZ7J0hCpJn9PVdOlb4CqFPpMz6uotHytsJvIuD5C27Zqs0AxNbVaTb6oNdBGi5LMJ+GSSY97KXUq3Z+FyzSwhIhOnFcR6fvvv//gwYOaV5MqyIluhEYiBCOfBhqhYTsdSpWr6J1FixYVRYGIc+fO3b59u0z1kUcekdoaY8zQ0NCePXtEzc2ePXvu3LnyEr/TTjtN8C9jTE9PT29vr1BheHh49+7dijHos5xzixYtSskkNB0dHd2+fbsQoaenB1avXj2pppg2xqDsnQKbaRbJRAgfxveOlL9Lly5VGRckMs0Ok3u3bt2qYpXmJQgmJQOed955qnTknRcw4S0olYwzVVvy3j+5bOnSpW7iy7umfaypvJFv0hdPTBVPrUTCK+9tCO0+WaqY5H9Tf3iqF+mJ3ql0R0yNTxpDqQAS6VSzLHOpIKgfMO2mrjLjZrMp8HGqCwTxkP44aRxfGgGmTo22OSmKQpD1sX4S1koSWnp4lKH0eo1Oaj9Z8dfSh6YaXU3ZxFWri9cC4yR7WWHfNCB4XMTSd44NDg6KWpUR+vv7G40GEY2MjKRd4NRLFt0k75xTQF2aTmqudXd394oVK4QEvb296ql3dXUtX75cFLz+Lnj/8uXLRX/19vZqw4aenp5ly5al4ShZsrSrm9g2uVarLVu2TDasv7///wMCmdZm6AM8jAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 2515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Forms_PasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1384);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var AccountPermissionsMigrate = function (_React$Component) {
    _inherits(AccountPermissionsMigrate, _React$Component);

    function AccountPermissionsMigrate() {
        _classCallCheck(this, AccountPermissionsMigrate);

        var _this = _possibleConstructorReturn(this, (AccountPermissionsMigrate.__proto__ || Object.getPrototypeOf(AccountPermissionsMigrate)).call(this));

        _this.state = {
            validPassword: false,
            pass: null,
            generatedPassword: "P" + bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["key"].get_random_key().toWif().toString()
        };
        return _this;
    }

    _createClass(AccountPermissionsMigrate, [{
        key: "onSubmit",
        value: function onSubmit() {}
    }, {
        key: "onPasswordChange",
        value: function onPasswordChange(e) {
            var valid = e.valid;

            var name = this.props.account.get("name");

            var active = !valid ? null : stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__["default"].generateKeyFromPassword(name, "active", e.value).pubKey;
            var owner = !valid ? null : stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__["default"].generateKeyFromPassword(name, "owner", e.value).pubKey;
            var memo = !valid ? null : stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__["default"].generateKeyFromPassword(name, "memo", e.value).pubKey;
            this.setState({ validPassword: e.valid, pass: e.value });
            this.props.onSetPasswordKeys({ active: active, owner: owner, memo: memo });
        }
    }, {
        key: "checkKeyUse",
        value: function checkKeyUse(key, role) {
            if (!key) return false;
            if (role === "memo") {
                return key === this.props.memoKey;
            } else {
                return this.props[role + "Keys"].reduce(function (a, b) {
                    return b === key || a;
                }, false);
            }
        }
    }, {
        key: "_onUseKey",
        value: function _onUseKey(role) {
            var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (remove) {
                this.props[role === "active" ? "onRemoveActive" : "onRemoveOwner"](this.props[role], "_keys");
            } else if (this.props[role]) {
                var weights = {
                    active: this.props.account.getIn(["active", "weight_threshold"]),
                    owner: this.props.account.getIn(["owner", "weight_threshold"])
                };
                console.log("key", this.props[role], "weights", weights, "weight of role:", weights[role]);
                this.props[role === "active" ? "onAddActive" : role === "owner" ? "onAddOwner" : "onSetMemo"](this.props[role], weights[role]);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var activeInUse = this.checkKeyUse(this.props.active && this.props.active, "active");
            var ownerInUse = this.checkKeyUse(this.props.owner && this.props.owner, "owner");
            var memoInUse = this.checkKeyUse(this.props.memo && this.props.memo, "memo");

            var useText = counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("account.perm.use_text");
            var removeText = counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("account.perm.remove_text");

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    { style: { maxWidth: "800px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.password_model_1" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    { style: { maxWidth: "800px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.password_model_1" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    { style: { maxWidth: "800px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { unsafe: true, content: "wallet.password_model_2" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "divider" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    {
                        style: { maxWidth: "40rem" },
                        onSubmit: this.onSubmit.bind(this),
                        noValidate: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.generated" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        this.state.generatedPassword
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { style: { fontWeight: "bold" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.password_model_2" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_PasswordInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        ref: "password",
                        confirmation: true,
                        onChange: this.onPasswordChange.bind(this),
                        noLabel: true,
                        passwordLength: 12,
                        checkStrength: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { className: activeInUse ? "in-use" : "" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.new_active" }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.props.active
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "text-right" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this._onUseKey.bind(this, "active", activeInUse)
                                    },
                                    activeInUse ? removeText : useText
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { className: ownerInUse ? "in-use" : "" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.new_owner" }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.props.owner
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "text-right" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this._onUseKey.bind(this, "owner", ownerInUse)
                                    },
                                    ownerInUse ? removeText : useText
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { className: memoInUse ? "in-use" : "" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.new_memo" }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.props.memo
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "text-right" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        style: {
                                            visibility: memoInUse ? "hidden" : ""
                                        },
                                        onClick: this._onUseKey.bind(this, "memo", memoInUse)
                                    },
                                    useText
                                )
                            )
                        )
                    )
                ),
                memoInUse ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    {
                        style: { maxWidth: "800px", paddingTop: 10 },
                        className: "has-error"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.memo_warning" })
                ) : null
            );
        }
    }]);

    return AccountPermissionsMigrate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountPermissionsMigrate);

/***/ }),

/***/ 2516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2512);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(802);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 * @brief Allows the user to enter a public key
 */

var PubKeyInput = function (_React$Component) {
    _inherits(PubKeyInput, _React$Component);

    function PubKeyInput(props) {
        _classCallCheck(this, PubKeyInput);

        return _possibleConstructorReturn(this, (PubKeyInput.__proto__ || Object.getPrototypeOf(PubKeyInput)).call(this, props));
    }

    _createClass(PubKeyInput, [{
        key: "isValidPubKey",
        value: function isValidPubKey(value) {
            return !!bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["PublicKey"].fromPublicKeyString(value);
        }
    }, {
        key: "onInputChanged",
        value: function onInputChanged(event) {
            var value = event.target.value.trim();
            this.props.onChange(value);
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
            if (event.keyCode === 13) this.onAction(event);
        }
    }, {
        key: "onAction",
        value: function onAction(event) {
            event.preventDefault();
            if (this.props.onAction && this.state.valid && !this.props.disableActionButton) {
                this.props.onAction(event);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var error = this.props.error;
            if (!error && this.props.value && !this.isValidPubKey(this.props.value)) error = "Not a valid public key";
            var action_class = classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                disabled: error || this.props.disableActionButton
            });
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var has_private = this.isValidPubKey(this.props.value) && keys.has(this.props.value);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "pubkey-input no-overflow" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-area" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "header-area" },
                        !error && this.props.value && this.isValidPubKey(this.props.value) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "right-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.valid_pub" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            className: "left-label",
                            component: "label",
                            content: this.props.label
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "input-area" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "account-image" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    components_PrivateKeyView__WEBPACK_IMPORTED_MODULE_3__["default"],
                                    { pubkey: this.props.value },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        name: "key",
                                        title: "icons.key",
                                        size: "4x"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "text",
                                className: has_private ? "my-key" : "",
                                value: this.props.value,
                                placeholder: this.props.placeholder || counterpart.translate("account.public_key"),
                                ref: "user_input",
                                onChange: this.onInputChanged.bind(this),
                                onKeyDown: this.onKeyDown.bind(this),
                                tabIndex: this.props.tabIndex
                            }),
                            this.props.onAction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: action_class,
                                    onClick: this.onAction.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: this.props.action_label
                                })
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "error-area has-error" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            error
                        )
                    )
                )
            );
        }
    }]);

    return PubKeyInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PubKeyInput.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired, // a translation key for the label
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, // current value
    error: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, // the error message override
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, // the placeholder text to be displayed when there is no user_input
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, // a method to be called any time user input changes
    onAction: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, // a method called when Add button is clicked
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, // tabindex property to be passed to input tag
    disableActionButton: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool // use it if you need to disable action button
};

/* harmony default export */ __webpack_exports__["default"] = (PubKeyInput);

/***/ }),

/***/ 2518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Forms_PubKeyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2516);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2478);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2519);
/* harmony import */ var _Account_SignedMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2520);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/** This component gives a user interface for signing and verifying messages with the bitShares memo key.
 *  It consists of two tabs:
 *    - Sign message tab (code prefix: tabSM)
 *    - Verify message tab (code prefix: tabVM)
 *
 *  See SignedMessageAction for details on message format.
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

var AccountSignedMessages = function (_React$Component) {
    _inherits(AccountSignedMessages, _React$Component);

    function AccountSignedMessages(props) {
        _classCallCheck(this, AccountSignedMessages);

        // initialize state (do not use setState method!)
        var _this = _possibleConstructorReturn(this, (AccountSignedMessages.__proto__ || Object.getPrototypeOf(AccountSignedMessages)).call(this, props));

        _this.state = {
            tabsm_memo_key: _this.props.account.get("options").get("memo_key"),
            tabsm_popup: "",
            tabsm_message_text: "",
            tabsm_message_signed: "",
            tabvm_popup: "",
            tabvm_message_signed: "",
            tabvm_verified: null,
            tabvm_message_signed_and_verified: null,
            tabvm_flag_verifyonchange: false
        };
        return _this;
    }

    /**
     * Event when user pushes sign button. Memo message and meta will be signed and displayed
     * in the bottom textarea
     *
     * @param event
     */


    _createClass(AccountSignedMessages, [{
        key: "_tabSMSignAction",
        value: function _tabSMSignAction(event) {
            var _this2 = this;

            event.preventDefault();

            try {
                // validate keys are still the same. Better: make public memokey field uneditable
                var storedKey = this.props.account.get("options").get("memo_key");
                if (this.state.tabsm_memo_key !== storedKey) {
                    throw Error(counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.keymismatch"));
                }

                // there should be a message entered
                if (this.state.tabsm_message_text) {
                    this._tabSMPopMessage(counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.signing"), 0);
                    _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_7__["default"].signMessage(this.props.account, this.state.tabsm_message_text).then(function (res) {
                        _this2.setState({
                            tabsm_message_signed: res,
                            tabsm_popup: "" // clear loading message
                        });
                    }).catch(function (err) {
                        _this2._tabSMPopMessage(err.message);
                        _this2.setState({
                            tabsm_message_signed: null
                        });
                    });
                }
            } catch (err) {
                this._tabSMPopMessage(err.message);
                this.setState({
                    tabsm_message_signed: null
                });
            }
        }
    }, {
        key: "_tabSMHandleChange",
        value: function _tabSMHandleChange(event) {
            // event for textarea
            this.setState({ tabsm_message_text: event.target.value });
        }
    }, {
        key: "_tabSMHandleChangeKey",
        value: function _tabSMHandleChangeKey(value) {
            // event for textfield of public key
            this.setState({ tabsm_memo_key: value });
        }
    }, {
        key: "_tabSMCopyToClipBoard",
        value: function _tabSMCopyToClipBoard(event) {
            // event when user clicks into the signed message textarea
            if (event.target.value !== "") {
                event.target.focus();
                event.target.select();

                try {
                    var successful = document.execCommand("copy");
                    this._tabSMPopMessage(successful ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.copysuccessful") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.copyunsuccessful"));
                } catch (err) {
                    this._tabSMPopMessage(counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.copyunsuccessful"));
                }
            }
        }

        /**
         * Displays an information to the user that disappears over time
         *
         * @param message
         * @param timeout
         */

    }, {
        key: "_tabSMPopMessage",
        value: function _tabSMPopMessage(message) {
            var _this3 = this;

            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

            this.setState({
                tabsm_popup: message
            });

            if (message !== "" && timeout > 0) {
                setTimeout(function () {
                    _this3.setState({
                        tabsm_popup: ""
                    });
                }, timeout);
            }
        }

        /**
         * Event when the user tries to verify a message, either manual through the button or onChange of the textarea.
         * The message is parsed and verified, the user gets the message restated in the bottom part of the site
         *
         * @param event
         */

    }, {
        key: "_tabVMAction",
        value: function _tabVMAction(event) {
            var _this4 = this;

            event.preventDefault();

            // reset to unverified state
            this.setState({
                tabvm_message_signed_and_verified: null,
                tabvm_verified: false
            });

            // attempt verifying
            if (this.state.tabvm_message_signed) {
                this._tabVMPopMessage(counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.verifying"), 0);

                setTimeout(function () {
                    // do not block gui
                    try {
                        var message_signed_and_verified = _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_7__["default"].verifyMemo(_this4.state.tabvm_message_signed);
                        _this4.setState({
                            tabvm_message_signed_and_verified: message_signed_and_verified,
                            tabvm_verified: true,
                            tabvm_popup: "" // clear verifying message
                        });
                    } catch (err) {
                        _this4._tabVMPopMessage(err.message);
                        _this4.setState({
                            tabvm_message_signed_and_verified: null,
                            tabvm_verified: false
                        });
                    }
                }, 0);
            }
        }
    }, {
        key: "_tabVMHandleChange",
        value: function _tabVMHandleChange(event) {
            // onchange event of the input textarea
            this.setState({
                tabvm_message_signed: event.target.value,
                tabvm_verified: false,
                tabvm_message_signed_and_verified: null
            });
            if (this.state.tabvm_flag_verifyonchange) {
                this._tabVMAction(event);
            }
        }

        /**
         * Displays an information to the user that disappears over time
         *
         * @param message
         * @param timeout
         */

    }, {
        key: "_tabVMPopMessage",
        value: function _tabVMPopMessage(message) {
            var _this5 = this;

            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

            this.setState({
                tabvm_popup: message
            });

            if (message !== "" && timeout > 0) {
                setTimeout(function () {
                    _this5.setState({
                        tabvm_popup: ""
                    });
                }, timeout);
            }
        }
    }, {
        key: "_tabVMToggleVerifyOnChange",
        value: function _tabVMToggleVerifyOnChange() {
            // event when the user enables / disables verifying while typing
            this.setState({
                tabvm_flag_verifyonchange: !this.state.tabvm_flag_verifyonchange
            });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"],
                            {
                                className: "account-tabs",
                                tabsClass: "account-overview no-padding bordered-header content-block",
                                setting: "accountSignedMessagesTab",
                                contentClass: "grid-content shrink small-vertical medium-horizontal padding",
                                segmented: false
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tab"],
                                { title: "account.signedmessages.signmessage" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content",
                                        style: { overflowX: "hidden" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "content-block no-margin" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "h3",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.signedmessages.signmessage" })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_PubKeyInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        ref: "memo_key",
                                        value: this.state.tabsm_memo_key,
                                        label: "account.perm.memo_public_key",
                                        placeholder: "Public Key",
                                        tabIndex: 7,
                                        onChange: this._tabSMHandleChangeKey.bind(this),
                                        disableActionButton: true
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                                        rows: "10",
                                        value: this.state.tabsm_message_text,
                                        onChange: this._tabSMHandleChange.bind(this),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.entermessage")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "button",
                                            {
                                                className: "button",
                                                onClick: this._tabSMSignAction.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.signedmessages.sign" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { style: { color: "gray" } },
                                            this.state.tabsm_popup
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                                        rows: "14",
                                        value: this.state.tabsm_message_signed,
                                        style: { editable: false },
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.automaticcreation"),
                                        onClick: this._tabSMCopyToClipBoard.bind(this)
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tab"],
                                { title: "account.signedmessages.verifymessage" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content",
                                        style: { overflowX: "hidden" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "content-block no-margin" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "h3",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.signedmessages.verifymessage" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    float: "right",
                                                    marginTop: "0.1em",
                                                    marginBottom: "0.5em"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "table",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "tr",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        null,
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "label",
                                                            null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.signedmessages.verifyonchange" })
                                                        )
                                                    ),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "td",
                                                        null,
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "switch",
                                                                onClick: this._tabVMToggleVerifyOnChange.bind(this)
                                                            },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                                type: "checkbox",
                                                                checked: this.state.tabvm_flag_verifyonchange,
                                                                value: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.verifyonchange")
                                                            }),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null)
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                                        rows: "10",
                                        value: this.state.tabvm_message_signed,
                                        onChange: this._tabVMHandleChange.bind(this),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("account.signedmessages.entermessage")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "button",
                                            {
                                                className: "button",
                                                onClick: this._tabVMAction.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.signedmessages.verify" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "text",
                                            { style: { color: "gray" } },
                                            this.state.tabvm_popup
                                        ),
                                        this.state.tabvm_verified !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { style: { float: "right" } },
                                            "Message is:",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        backgroundColor: this.state.tabvm_verified ? "green" : "red"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "label",
                                                    null,
                                                    this.state.tabvm_verified ? "verified" : "not verified"
                                                )
                                            )
                                        ),
                                        (this.state.tabvm_verified && this.state.tabvm_message_signed_and_verified !== null || this.state.tabvm_flag_verifyonchange) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_SignedMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                message: this.state.tabvm_message_signed
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountSignedMessages;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountSignedMessages.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

AccountSignedMessages = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountSignedMessages);

/* harmony default export */ __webpack_exports__["default"] = (AccountSignedMessages);

/***/ }),

/***/ 2519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(587);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var MSG_HEAD = "-----BEGIN BITSHARES SIGNED MESSAGE-----";
var MSG_META = "-----BEGIN META-----";
var MSG_SIGNATURE = "-----BEGIN SIGNATURE-----";
var MSG_FOOT = "-----END BITSHARES SIGNED MESSAGE-----";
var MSG_SENDER = "account";
var MSG_PUBLICKEY = "memokey";
var MSG_BLOCK = "block";
var MSG_DATE = "timestamp";

/** This action provides following functionalities:
 *    - Sign a message
 *    - Verify a given message
 *
 *  The message format that is underlying is as follows:
 *  -----BEGIN BITSHARES SIGNED MESSAGE-----
 *  <message from the account>
 *  -----BEGIN META-----
 *  account=<account name>
 *  memokey=<account memo public key>
 *  block=<last irreversible block>
 *  timestamp=<current time>
 *  -----BEGIN SIGNATURE-----
 *  <signature>
 *  -----END BITSHARES SIGNED MESSAGE-----
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

var SignedMessageAction = function () {
    function SignedMessageAction() {
        _classCallCheck(this, SignedMessageAction);
    }

    _createClass(SignedMessageAction, [{
        key: "parseMessage",

        /**
         * Parses the given raw string to a processing friendly dictionary
         *
         * @param message Message as raw string, properly formatted with head/meta/signature/footer
         *
         * @returns {*} parsed message as dictionary with the following fields:
         *              content : User message of the message
         *              meta : Dictionary with the meta data
         *                      account : Account name of the signer
         *                      key : Memo public key of the signer
         *                      block : Current last irreversible block of the bitShares blockchain
         *                      timestamp : Time the message was signed in UTC format
         *              signed : Seperate string that contains all data that will be signed (content + meta)
         *              signature : Signature of the signed data
         */
        value: function parseMessage(message) {
            var messageContent = void 0,
                messageMeta = void 0,
                messageSignature = void 0,
                messageSignedContent = void 0;
            try {
                // cut the sections
                messageContent = message.split(MSG_HEAD)[1]; // everything before the head is ignored
                messageMeta = messageContent.split(MSG_META);
                messageContent = messageMeta[0].replace(/^\n|\n$/g, "");
                messageSignature = messageMeta[1].split(MSG_SIGNATURE);
                messageMeta = messageSignature[0].trim();
                messageSignature = messageSignature[1].split(MSG_FOOT)[0].trim(); // everything after footer is ignored

                // how the signed content it built is crucial, consider encapsulating
                messageSignedContent = messageContent + "\n" + messageMeta;
            } catch (err) {
                throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.invalidformat"));
            }

            var messageMetaAccount = void 0,
                messageMetaKey = void 0,
                messageMetaBlock = void 0,
                messageMetaTimestamp = void 0;
            if (messageMeta) {
                try {
                    // process meta
                    // ... sender
                    messageMetaAccount = messageMeta.split(MSG_SENDER + "=");
                    messageMetaAccount = messageMetaAccount[1].split("\n")[0].trim();

                    // ... and its public key
                    messageMetaKey = messageMeta.split(MSG_PUBLICKEY + "=");
                    messageMetaKey = messageMetaKey[1].split("\n")[0].trim();

                    // ... block number
                    messageMetaBlock = messageMeta.split(MSG_BLOCK + "=");
                    messageMetaBlock = messageMetaBlock[1].split("\n")[0].trim();

                    // ... time stamp
                    messageMetaTimestamp = messageMeta.split(MSG_DATE + "=");
                    messageMetaTimestamp = messageMetaTimestamp[1].split("\n")[0].trim();
                } catch (err) {
                    throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.invalidformat"));
                }
            }

            return {
                content: messageContent,
                meta: {
                    account: messageMetaAccount,
                    key: messageMetaKey,
                    block: messageMetaBlock,
                    timestamp: messageMetaTimestamp
                },
                signed: messageSignedContent,
                signature: messageSignature
            };
        }

        /**
         * The given string message is parsed and then its signature verified. A positive verification return the parsed
         * message, anything else throws an exeption.
         *
         * @param message Message as raw string, properly formatted with head/meta/signature/footer, or already parsed message
         *
         * @returns parsed message, see parseMessage
         */

    }, {
        key: "verifyMemo",
        value: function verifyMemo(message) {
            var message_signed = void 0;
            if (typeof message === "string" || message instanceof String) {
                message_signed = this.parseMessage(message);
            } else {
                // assume its a dictionary
                message_signed = message;
            }

            // validate account and key
            var storedAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccount(message_signed.meta.account);
            if (storedAccount == null) {
                throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.invaliduser"));
            }

            // verify message signed
            var verified = false;
            try {
                verified = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["Signature"].fromHex(message_signed.signature).verifyBuffer(message_signed.signed, bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["PublicKey"].fromPublicKeyString(message_signed.meta.key));
            } catch (err) {
                // wrap message that could be raised from Signature
                throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.errorverifying"));
            }
            if (!verified) {
                throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.invalidsignature"));
            }
            return message_signed;
        }

        /**
         * Given an account and the message text
         * @param account Account that writes the message
         * @param messageText String text of the message
         * @returns {Promise}
         */

    }, {
        key: "signMessage",
        value: function signMessage(account, messageText) {
            return new Promise(function (resolve, reject) {
                // make sure wallet is unlocked (we need private key)
                actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__["default"].unlock().then(function () {
                    try {
                        // obtain all necessary keys
                        var memo_from_public = account.get("options").get("memo_key");
                        // The 1s are base58 for all zeros (null)
                        if (/111111111111111111111/.test(memo_from_public)) {
                            memo_from_public = null;
                        }
                        var memo_from_privkey = void 0;
                        if (messageText && memo_from_public) {
                            memo_from_privkey = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getPrivateKey(memo_from_public);
                            if (!memo_from_privkey) {
                                throw new Error(counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("account.signedmessages.invalidkey"));
                            }
                        }
                        // get other meta data
                        var irr_block = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject("2.1.0").get("last_irreversible_block_num");
                        var now = new Date();

                        var meta = MSG_SENDER + "=" + account.get("name") + "\n" + MSG_PUBLICKEY + "=" + memo_from_public + "\n" + MSG_BLOCK + "=" + irr_block + "\n" + MSG_DATE + "=" + now.toUTCString();

                        var messageContentToBeSigned = messageText + "\n" + meta;

                        setTimeout(function () {
                            // do not block gui
                            try {
                                var memo_signature = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["Signature"].signBuffer(messageContentToBeSigned, memo_from_privkey, memo_from_public);
                                var memo_formatted = MSG_HEAD + "\n" + messageText + "\n" + MSG_META + "\n" + meta + "\n" + MSG_SIGNATURE + "\n" + memo_signature.toHex() + "\n" + MSG_FOOT;
                                resolve(memo_formatted);
                            } catch (err) {
                                reject(err);
                            }
                        }, 0);
                    } catch (err) {
                        reject(err);
                    }
                }).catch(function (res) {
                    reject(res);
                });
            });
        }
    }]);

    return SignedMessageAction;
}();

/* harmony default export */ __webpack_exports__["default"] = (alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(SignedMessageAction));

/***/ }),

/***/ 2520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2519);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/** This component allows to display and verify a signed message
 *
 *  See SignedMessageAction for details on message format.
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

var SignedMessage = function (_React$Component) {
    _inherits(SignedMessage, _React$Component);

    function SignedMessage(props) {
        _classCallCheck(this, SignedMessage);

        var _this = _possibleConstructorReturn(this, (SignedMessage.__proto__ || Object.getPrototypeOf(SignedMessage)).call(this, props));

        _this.state = {
            message: _this.props.message,
            messageParsed: null,
            showRawMessage: false,
            //
            noVerification: _this.props.noVerification,
            //
            verified: null,
            //
            notification: null
        };
        return _this;
    }
    // static propTypes = {
    //     signedMessage: PropTypes.string.isRequired
    //    noVerification
    // };

    _createClass(SignedMessage, [{
        key: "_verifyMessage",
        value: function _verifyMessage(signedMessage) {
            var _this2 = this;

            this.setState({
                message: signedMessage,
                messageParsed: null,
                verified: null
            });
            var messageParsed = null;
            try {
                messageParsed = _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_4__["default"].parseMessage(signedMessage);
                this.setState({
                    verified: null,
                    messageParsed: messageParsed
                });

                if (!this.state.noVerification) {
                    this.setState({
                        verified: null,
                        notification: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("account.signedmessages.verifying")
                    });
                    setTimeout(function () {
                        // do not block gui
                        try {
                            _actions_SignedMessageAction__WEBPACK_IMPORTED_MODULE_4__["default"].verifyMemo(messageParsed);
                            _this2.setState({
                                verified: true,
                                notification: "" // clear popup
                            });
                        } catch (err) {
                            _this2._warning(err.message);
                            _this2.setState({
                                verified: false
                            });
                        }
                    }, 0);
                }
            } catch (err) {
                this._warning(err.message);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._verifyMessage(this.state.message);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var signedMessage = nextProps.message;
            if (signedMessage != undefined && signedMessage != null && signedMessage == this.state.message) {
                // already done
                return;
            }
            this._verifyMessage(signedMessage);
        }
    }, {
        key: "_warning",
        value: function _warning(message) {
            this.setState({
                notification: message
            });
        }
    }, {
        key: "_toggleRawMessage",
        value: function _toggleRawMessage() {
            this.setState({
                showRawMessage: !this.state.showRawMessage
            });
        }
    }, {
        key: "render",
        value: function render() {
            var legendMessage = void 0;
            var borderColor = void 0;
            if (this.state.messageParsed != null) {
                if (this.state.verified == null) {
                    borderColor = "#FFF";
                    legendMessage = "Unverified message from " + this.state.messageParsed.meta.account;
                } else if (this.state.verified) {
                    borderColor = "#FFF";
                    legendMessage = "Verified message from " + this.state.messageParsed.meta.account;
                } else {
                    borderColor = "#F00";
                    legendMessage = "Refuted message, indicated sender " + this.state.messageParsed.meta.account;
                }
            }
            var messageGiven = this.props.message != null && this.props.message != "";
            var notificationGiven = this.state.notification && this.state.notification != "";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { color: "gray", margin: "10px 10px" } },
                this.state.messageParsed != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "fieldset",
                    { style: { borderColor: borderColor } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "legend",
                        { style: { color: "white", weight: "bold" } },
                        legendMessage
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "pre",
                        {
                            style: {
                                position: "relative",
                                width: "100%",
                                display: "table"
                            }
                        },
                        this.state.messageParsed.content,
                        notificationGiven && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    textAlign: "center",
                                    display: "table-cell",
                                    verticalAlign: "middle",
                                    position: "absolute",
                                    width: "calc(100% - 30px)",
                                    height: "calc(100% + 15px)",
                                    top: "0px",
                                    right: "30px",
                                    backgroundColor: "rgba(50,50,50,0.5)"
                                },
                                id: "overlay"
                            },
                            this.state.notification
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                fontSize: "small",
                                float: "right"
                            }
                        },
                        "Signed on ",
                        this.state.messageParsed.meta.timestamp,
                        " ",
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button",
                                type: "button",
                                style: {
                                    fontSize: "small",
                                    float: "right",
                                    padding: "0px 0px",
                                    background: "#777"
                                },
                                onClick: this._toggleRawMessage.bind(this)
                            },
                            "\uD83D\uDD0D"
                        )
                    ),
                    this.state.showRawMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    this.state.showRawMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    this.state.showRawMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                overflow: "auto",
                                width: "calc(100%)",
                                maxWidth: "1000px"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "pre",
                            null,
                            this.state.message
                        )
                    )
                ),
                messageGiven && this.state.messageParsed == null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "fieldset",
                    { style: { borderColor: "#F00" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "legend",
                        {
                            style: { color: "red", weight: "bold" },
                            className: "error"
                        },
                        "Error while parsing message, please check syntax from message below"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "pre",
                        null,
                        this.props.message
                    )
                )
            );
        }
    }]);

    return SignedMessage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SignedMessage.defaultProps = {
    noVerification: false
};


/* harmony default export */ __webpack_exports__["default"] = (SignedMessage);

/***/ }),

/***/ 2521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2478);
/* harmony import */ var chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1335);
/* harmony import */ var chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1221);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1332);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(585);
/* harmony import */ var stores_WalletDb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(589);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var AccountRow = function (_React$Component) {
    _inherits(AccountRow, _React$Component);

    function AccountRow() {
        _classCallCheck(this, AccountRow);

        return _possibleConstructorReturn(this, (AccountRow.__proto__ || Object.getPrototypeOf(AccountRow)).apply(this, arguments));
    }

    _createClass(AccountRow, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                onRemove = _props.onRemove;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    this.props.index
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    account.get("id")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_8__["default"], { account: account.get("id") })
                ),
                onRemove ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            onClick: onRemove.bind(this, account.get("id")),
                            className: "button outline"
                        },
                        "Remove"
                    )
                ) : null
            );
        }
    }]);

    return AccountRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountRow.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired
};
AccountRow.defaultProps = {
    tempComponent: "tr"
};

AccountRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountRow);

var AccountList = function (_React$Component2) {
    _inherits(AccountList, _React$Component2);

    function AccountList() {
        _classCallCheck(this, AccountList);

        return _possibleConstructorReturn(this, (AccountList.__proto__ || Object.getPrototypeOf(AccountList)).apply(this, arguments));
    }

    _createClass(AccountList, [{
        key: "_onRemove",
        value: function _onRemove(listing, account, e) {
            if (account) {
                var currentState = this.props.getCurrentState(account);
                var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_9__["default"].new_transaction();
                tr.add_type_operation("account_whitelist", {
                    fee: {
                        amount: 0,
                        asset_id: "1.3.0"
                    },
                    authorizing_account: this.props.account.get("id"),
                    account_to_list: account,
                    new_listing: currentState - chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default.a.account_listing[listing]
                });
                stores_WalletDb_js__WEBPACK_IMPORTED_MODULE_10__["default"].process_transaction(tr, null, true);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                removeButton = _props2.removeButton,
                white = _props2.white,
                list = _props2.list;


            var rows = list.map(function (account, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountRow, {
                    key: account,
                    onRemove: removeButton ? _this3._onRemove.bind(_this3, white ? "white_listed" : "black_listed") : null,
                    account: account,
                    index: index + 1
                });
            }).toArray();

            var showHeaders = true;
            if (!rows.length) {
                showHeaders = false;
                rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: "empty" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { padding: "1rem 0" },
                            colSpan: removeButton ? 4 : 3
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            content: this.props.emptyText,
                            account: this.props.account.get("name")
                        })
                    )
                ));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                { className: "table compact dashboard-table" },
                showHeaders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            "#"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.id" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.name" })
                        ),
                        removeButton ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null) : null
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    rows
                )
            );
        }
    }]);

    return AccountList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AccountWhitelist = function (_React$Component3) {
    _inherits(AccountWhitelist, _React$Component3);

    function AccountWhitelist() {
        _classCallCheck(this, AccountWhitelist);

        var _this4 = _possibleConstructorReturn(this, (AccountWhitelist.__proto__ || Object.getPrototypeOf(AccountWhitelist)).call(this));

        _this4.state = {
            accountName: "",
            accountToList: null
        };
        return _this4;
    }

    _createClass(AccountWhitelist, [{
        key: "_getCurrentState",
        value: function _getCurrentState(id) {
            var account = this.props.account;

            var white = account.get("whitelisted_accounts") || immutable__WEBPACK_IMPORTED_MODULE_4___default.a.List();
            var black = account.get("blacklisted_accounts") || immutable__WEBPACK_IMPORTED_MODULE_4___default.a.List();
            var current = chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default.a.account_listing.no_listing;

            if (white.includes(id)) {
                current += chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default.a.account_listing.white_listed;
            }

            if (black.includes(id)) {
                current += chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default.a.account_listing.black_listed;
            }

            return current;
        }
    }, {
        key: "_onAdd",
        value: function _onAdd(listing, e) {
            var accountToList = this.state.accountToList;
            var account = this.props.account;


            var currentState = this._getCurrentState(accountToList);

            if (accountToList) {
                var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_9__["default"].new_transaction();
                tr.add_type_operation("account_whitelist", {
                    fee: {
                        amount: 0,
                        asset_id: "1.3.0"
                    },
                    authorizing_account: account.get("id"),
                    account_to_list: accountToList,
                    new_listing: currentState + chain_account_constants_js__WEBPACK_IMPORTED_MODULE_2___default.a.account_listing[listing]
                });
                stores_WalletDb_js__WEBPACK_IMPORTED_MODULE_10__["default"].process_transaction(tr, null, true);
            }
        }
    }, {
        key: "_onAccountFound",
        value: function _onAccountFound(account) {
            console.log("accountFound:", account);
            this.setState({
                accountName: account ? account.get("name") : null,
                accountToList: account ? account.get("id") : null
            });
        }
    }, {
        key: "_onAccountChanged",
        value: function _onAccountChanged(account) {
            console.log("account changed:", account);
            this.setState({
                accountName: account,
                accountToList: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;
            var accountName = this.state.accountName;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
                            {
                                className: "account-tabs",
                                tabsClass: "account-overview no-padding bordered-header content-block",
                                setting: "whitelistTab",
                                contentClass: "grid-content shrink small-vertical medium-horizontal no-padding",
                                segmented: false
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                                { title: "account.whitelist.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingBottom: "1rem" },
                                        className: "small-12"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountList, {
                                            emptyText: "account.whitelist.empty",
                                            account: account,
                                            getCurrentState: this._getCurrentState.bind(this),
                                            list: account.get("whitelisted_accounts") || immutable__WEBPACK_IMPORTED_MODULE_4___default.a.List(),
                                            removeButton: true,
                                            white: true
                                        })
                                    ),
                                    !account.get("whitelisted_accounts") ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "has-error" },
                                        "Please note, whitelisting is not working yet due to unresolved backend issue."
                                    ) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { padding: "2rem 0" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            label: "account.whitelist.add",
                                            accountName: accountName,
                                            onAccountChanged: this._onAccountFound.bind(this),
                                            onChange: this._onAccountChanged.bind(this),
                                            account: accountName,
                                            tabIndex: 2,
                                            onAction: this._onAdd.bind(this, "white_listed"),
                                            action_label: "account.perm.confirm_add",
                                            white: false,
                                            typeahead: true
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                                { title: "account.whitelist.black" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingBottom: "1rem" },
                                        className: "small-12"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountList, {
                                            emptyText: "account.whitelist.empty_black",
                                            account: account,
                                            getCurrentState: this._getCurrentState.bind(this),
                                            list: account.get("blacklisted_accounts"),
                                            removeButton: true
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { padding: "2rem 1rem" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            label: "account.whitelist.add_black",
                                            accountName: accountName,
                                            onAccountChanged: this._onAccountFound.bind(this),
                                            onChange: this._onAccountChanged.bind(this),
                                            account: accountName,
                                            tabIndex: 2,
                                            onAction: this._onAdd.bind(this, "black_listed"),
                                            action_label: "account.perm.confirm_add",
                                            typeahead: true
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                                { title: "account.whitelist.white_by" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingBottom: "1rem" },
                                        className: "small-12"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountList, {
                                            emptyText: "account.whitelist.empty_white_by",
                                            account: account,
                                            list: account.get("whitelisting_accounts")
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                                { title: "account.whitelist.black_by" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingBottom: "1rem" },
                                        className: "small-12"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountList, {
                                            emptyText: "account.whitelist.empty_black_by",
                                            account: account,
                                            list: account.get("blacklisting_accounts")
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountWhitelist;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountWhitelist);

/***/ }),

/***/ 2522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(566);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var _WorkerApproval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2523);
/* harmony import */ var _VotingAccountsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2524);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2478);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(895);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(744);
/* harmony import */ var api_ApplicationApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(586);
/* harmony import */ var _AccountSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1221);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(802);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1217);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2401);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1013);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(709);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var AccountVoting = function (_React$Component) {
    _inherits(AccountVoting, _React$Component);

    function AccountVoting(props) {
        _classCallCheck(this, AccountVoting);

        var _this = _possibleConstructorReturn(this, (AccountVoting.__proto__ || Object.getPrototypeOf(AccountVoting)).call(this, props));

        var proxyId = props.proxy.get("id");
        var proxyName = props.proxy.get("name");
        _this.state = {
            proxy_account_id: proxyId === "1.2.5" ? "" : proxyId, //"1.2.16",
            prev_proxy_account_id: proxyId === "1.2.5" ? "" : proxyId,
            current_proxy_input: proxyId === "1.2.5" ? "" : proxyName,
            witnesses: null,
            committee: null,
            vote_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(),
            proxy_vote_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(),
            lastBudgetObject: props.initialBudget.get("id"),
            workerTableIndex: props.viewSettings.get("workerTableIndex", 1),
            all_witnesses: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
            all_committee: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List()
        };
        _this.onProxyAccountFound = _this.onProxyAccountFound.bind(_this);
        _this.onPublish = _this.onPublish.bind(_this);
        _this.onReset = _this.onReset.bind(_this);
        _this._getVoteObjects = _this._getVoteObjects.bind(_this);
        return _this;
    }

    _createClass(AccountVoting, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            common_account_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getFinalFeeAsset(this.props.account, "account_update");
            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].fetchAllWorkers();
            this.getBudgetObject();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateAccountData(this.props);
            this._getVoteObjects();
            this._getVoteObjects("committee");
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.account !== this.props.account) {
                var proxyId = np.proxy.get("id");
                var newState = {
                    proxy_account_id: proxyId === "1.2.5" ? "" : proxyId
                };
                this.setState({ prev_proxy_account_id: newState.proxy_account_id });
                this.updateAccountData(np, newState);
            }
            this.getBudgetObject();
        }
    }, {
        key: "updateAccountData",
        value: function updateAccountData(_ref) {
            var _this2 = this;

            var account = _ref.account;
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
            var proxy_account_id = state.proxy_account_id;

            var proxy = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccount(proxy_account_id);
            var options = account.get("options");
            var proxyOptions = proxy ? proxy.get("options") : null;
            // let proxy_account_id = proxy ? proxy.get("id") : "1.2.5";
            var current_proxy_input = proxy ? proxy.get("name") : "";
            if (proxy_account_id === "1.2.5") {
                proxy_account_id = "";
                current_proxy_input = "";
            }

            var votes = options.get("votes");
            var vote_ids = votes.toArray();
            var vids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(vote_ids);
            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObjectsByVoteIds(vote_ids);

            var proxyPromise = null,
                proxy_vids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set([]);
            var hasProxy = proxy_account_id !== "1.2.5";
            if (hasProxy && proxyOptions) {
                var proxy_votes = proxyOptions.get("votes");
                var proxy_vote_ids = proxy_votes.toArray();
                proxy_vids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(proxy_vote_ids);
                bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObjectsByVoteIds(proxy_vote_ids);

                proxyPromise = Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObjectByVoteID, proxy_vote_ids, 10000);
            }

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObjectByVoteID, vote_ids, 10000), proxyPromise]).then(function (res) {
                var _res = _slicedToArray(res, 2),
                    vote_objs = _res[0],
                    proxy_vote_objs = _res[1];

                function sortVoteObjects(objects) {
                    var witnesses = new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();
                    var committee = new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();
                    var workers = new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set();
                    objects.forEach(function (obj) {
                        var account_id = obj.get("committee_member_account");
                        if (account_id) {
                            committee = committee.push(account_id);
                        } else if (account_id = obj.get("worker_account")) {
                            // console.log( "worker: ", obj );
                            //     workers = workers.add(obj.get("id"));
                        } else if (account_id = obj.get("witness_account")) {
                            witnesses = witnesses.push(account_id);
                        }
                    });

                    return { witnesses: witnesses, committee: committee, workers: workers };
                }

                var _sortVoteObjects = sortVoteObjects(vote_objs),
                    witnesses = _sortVoteObjects.witnesses,
                    committee = _sortVoteObjects.committee,
                    workers = _sortVoteObjects.workers;

                var _sortVoteObjects2 = sortVoteObjects(proxy_vote_objs || []),
                    proxy_witnesses = _sortVoteObjects2.witnesses,
                    proxy_committee = _sortVoteObjects2.committee,
                    proxy_workers = _sortVoteObjects2.workers;

                var state = {
                    proxy_account_id: proxy_account_id,
                    current_proxy_input: current_proxy_input,
                    witnesses: witnesses,
                    committee: committee,
                    workers: workers,
                    proxy_witnesses: proxy_witnesses,
                    proxy_committee: proxy_committee,
                    proxy_workers: proxy_workers,
                    vote_ids: vids,
                    proxy_vote_ids: proxy_vids,
                    prev_witnesses: witnesses,
                    prev_committee: committee,
                    prev_workers: workers,
                    prev_vote_ids: vids
                };
                _this2.setState(state);
            });
        }
    }, {
        key: "isChanged",
        value: function isChanged() {
            var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            return s.proxy_account_id !== s.prev_proxy_account_id || s.witnesses !== s.prev_witnesses || s.committee !== s.prev_committee || !immutable__WEBPACK_IMPORTED_MODULE_1___default.a.is(s.vote_ids, s.prev_vote_ids);
        }
    }, {
        key: "_getVoteObjects",
        value: function _getVoteObjects() {
            var _this3 = this;

            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "witnesses";
            var vote_ids = arguments[1];

            var current = this.state["all_" + type];
            var isWitness = type === "witnesses";
            var lastIdx = void 0;
            if (!vote_ids) {
                vote_ids = [];
                var active = this.props.globalObject.get(isWitness ? "active_witnesses" : "active_committee_members").sort(function (a, b) {
                    return parseInt(a.split(".")[2], 10) - parseInt(b.split(".")[2], 10);
                });
                var lastActive = active.last() || "1." + (isWitness ? "6" : "5") + ".1";
                lastIdx = parseInt(lastActive.split(".")[2], 10);
                for (var i = 1; i <= lastIdx + 10; i++) {
                    vote_ids.push("1." + (isWitness ? "6" : "5") + "." + i);
                }
            } else {
                lastIdx = parseInt(vote_ids[vote_ids.length - 1].split(".")[2], 10);
            }
            Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject, vote_ids, 5000, {}).then(function (vote_objs) {
                _this3.state["all_" + type] = current.concat(immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(vote_objs.filter(function (a) {
                    return !!a;
                }).map(function (a) {
                    return a.get(isWitness ? "witness_account" : "committee_member_account");
                })));
                if (!!vote_objs[vote_objs.length - 1]) {
                    // there are more valid vote objs, fetch 10 more
                    vote_ids = [];
                    for (var i = lastIdx + 11; i <= lastIdx + 20; i++) {
                        vote_ids.push("1." + (isWitness ? "6" : "5") + "." + i);
                    }
                    return _this3._getVoteObjects(type, vote_ids);
                }
                _this3.forceUpdate();
            });
        }
    }, {
        key: "onPublish",
        value: function onPublish() {
            var _this4 = this;

            var updated_account = this.props.account.toJS();
            var updateObject = { account: updated_account.id };
            var new_options = { memo_key: updated_account.options.memo_key };
            // updated_account.new_options = updated_account.options;
            var new_proxy_id = this.state.proxy_account_id;
            new_options.voting_account = new_proxy_id ? new_proxy_id : "1.2.5";
            new_options.num_witness = this.state.witnesses.size;
            new_options.num_committee = this.state.committee.size;

            updateObject.new_options = new_options;
            // Set fee asset
            updateObject.fee = {
                amount: 0,
                asset_id: common_account_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getFinalFeeAsset(updated_account.id, "account_update")
            };

            // Remove votes for expired workers
            var vote_ids = this.state.vote_ids;

            var workers = this._getWorkerArray();
            var now = new Date();

            function removeVote(list, vote) {
                if (list.includes(vote)) {
                    list = list.delete(vote);
                }
                return list;
            }

            workers.forEach(function (worker) {
                if (worker) {
                    if (new Date(worker.get("work_end_date")) <= now) {
                        vote_ids = removeVote(vote_ids, worker.get("vote_for"));
                    }

                    // TEMP Remove vote_against since they're no longer used
                    vote_ids = removeVote(vote_ids, worker.get("vote_against"));
                }
            });

            // Submit votes
            Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getWitnessById, this.state.witnesses.toArray(), 4000).then(function (res) {
                var witnesses_vote_ids = res.map(function (o) {
                    return o.get("vote_id");
                });
                return Promise.all([Promise.resolve(witnesses_vote_ids), Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getCommitteeMemberById, _this4.state.committee.toArray(), 4000)]);
            }).then(function (res) {
                updateObject.new_options.votes = res[0].concat(res[1].map(function (o) {
                    return o.get("vote_id");
                })).concat(vote_ids.filter(function (id) {
                    return id.split(":")[0] === "2";
                }).toArray()).sort(function (a, b) {
                    var a_split = a.split(":");
                    var b_split = b.split(":");

                    return parseInt(a_split[1], 10) - parseInt(b_split[1], 10);
                });
                api_ApplicationApi__WEBPACK_IMPORTED_MODULE_12__["default"].updateAccount(updateObject);
            });
        }
    }, {
        key: "onReset",
        value: function onReset() {
            var _this5 = this;

            var s = this.state;
            if (this.refs.voting_proxy && this.refs.voting_proxy.refs.bound_component) this.refs.voting_proxy.refs.bound_component.onResetProxy();
            this.setState({
                proxy_account_id: s.prev_proxy_account_id,
                current_proxy_input: s.prev_proxy_input,
                witnesses: s.prev_witnesses,
                committee: s.prev_committee,
                workers: s.prev_workers,
                vote_ids: s.prev_vote_ids
            }, function () {
                _this5.updateAccountData(_this5.props);
            });
        }
    }, {
        key: "onAddItem",
        value: function onAddItem(collection, item_id) {
            var state = {};
            state[collection] = this.state[collection].push(item_id);
            this.setState(state);
        }
    }, {
        key: "onRemoveItem",
        value: function onRemoveItem(collection, item_id) {
            var state = {};
            state[collection] = this.state[collection].filter(function (i) {
                return i !== item_id;
            });
            this.setState(state);
        }
    }, {
        key: "onChangeVotes",
        value: function onChangeVotes(addVotes, removeVotes) {
            var state = {};
            state.vote_ids = this.state.vote_ids;
            if (addVotes.length) {
                addVotes.forEach(function (vote) {
                    state.vote_ids = state.vote_ids.add(vote);
                });
            }
            if (removeVotes) {
                removeVotes.forEach(function (vote) {
                    state.vote_ids = state.vote_ids.delete(vote);
                });
            }

            this.setState(state);
        }
    }, {
        key: "validateAccount",
        value: function validateAccount(collection, account) {
            if (!account) return null;
            if (collection === "witnesses") {
                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getWitnessById, [account.get("id")], 3000).then(function (res) {
                    return res[0] ? null : "Not a witness";
                });
            }
            if (collection === "committee") {
                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getCommitteeMemberById, [account.get("id")], 3000).then(function (res) {
                    return res[0] ? null : "Not a committee member";
                });
            }
            return null;
        }
    }, {
        key: "onProxyChange",
        value: function onProxyChange(current_proxy_input) {
            var proxyAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccount(current_proxy_input);
            if (!proxyAccount || proxyAccount && proxyAccount.get("id") !== this.state.proxy_account_id) {
                this.setState({
                    proxy_account_id: "",
                    proxy_witnesses: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(),
                    proxy_committee: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set(),
                    proxy_workers: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set()
                });
            }
            this.setState({ current_proxy_input: current_proxy_input });
        }
    }, {
        key: "onProxyAccountFound",
        value: function onProxyAccountFound(proxy_account) {
            var _this6 = this;

            this.setState({
                proxy_account_id: proxy_account ? proxy_account.get("id") : ""
            }, function () {
                _this6.updateAccountData(_this6.props);
            });
        }
    }, {
        key: "onClearProxy",
        value: function onClearProxy() {
            this.setState({
                proxy_account_id: ""
            });
        }
    }, {
        key: "_getTotalVotes",
        value: function _getTotalVotes(worker) {
            return parseInt(worker.get("total_votes_for"), 10) - parseInt(worker.get("total_votes_against"), 10);
        }
    }, {
        key: "getBudgetObject",
        value: function getBudgetObject() {
            var _this7 = this;

            var lastBudgetObject = this.state.lastBudgetObject;

            var budgetObject = void 0;
            budgetObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(lastBudgetObject);
            var idIndex = parseInt(lastBudgetObject.split(".")[2], 10);
            if (budgetObject) {
                var timestamp = budgetObject.get("time");
                if (!/Z$/.test(timestamp)) {
                    timestamp += "Z";
                }
                var now = new Date();

                /* Use the last valid budget object to estimate the current budget object id.
                ** Budget objects are created once per hour
                */
                var currentID = idIndex + Math.floor((now - new Date(timestamp).getTime()) / 1000 / 60 / 60) - 1;
                if (idIndex >= currentID) return;
                var newID = "2.13." + Math.max(idIndex, currentID);
                var newIDInt = parseInt(newID.split(".")[2], 10);
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject, [newID], undefined, {}).then(function (res) {
                    var _res2 = _slicedToArray(res, 1),
                        lbo = _res2[0];

                    if (lbo === null) {
                        // The object does not exist, the id was too high
                        _this7.setState({ lastBudgetObject: "2.13." + (newIDInt - 1) }, _this7.getBudgetObject);
                    } else {
                        stores_SettingsStore__WEBPACK_IMPORTED_MODULE_19__["default"].setLastBudgetObject(newID);

                        _this7.setState({ lastBudgetObject: newID });
                    }
                });
            } else {
                // The object does not exist, decrement the ID
                var _newID = "2.13." + (idIndex - 1);
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject, [_newID], undefined, {}).then(function (res) {
                    var _res3 = _slicedToArray(res, 1),
                        lbo = _res3[0];

                    if (lbo === null) {
                        // The object does not exist, the id was too high
                        _this7.setState({ lastBudgetObject: "2.13." + (idIndex - 2) }, _this7.getBudgetObject);
                    } else {
                        stores_SettingsStore__WEBPACK_IMPORTED_MODULE_19__["default"].setLastBudgetObject(_newID);
                        _this7.setState({ lastBudgetObject: _newID });
                    }
                });
            }
        }
    }, {
        key: "_getWorkerArray",
        value: function _getWorkerArray() {
            var workerArray = [];

            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].workers.forEach(function (workerId) {
                var worker = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(workerId, false, false);
                if (worker) workerArray.push(worker);
            });

            return workerArray;
        }
    }, {
        key: "_setWorkerTableIndex",
        value: function _setWorkerTableIndex(index) {
            this.setState({
                workerTableIndex: index
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            var workerTableIndex = this.state.workerTableIndex;

            var preferredUnit = this.props.settings.get("unit") || "1.3.0";
            var hasProxy = !!this.state.proxy_account_id; // this.props.account.getIn(["options", "voting_account"]) !== "1.2.5";
            var publish_buttons_class = classnames__WEBPACK_IMPORTED_MODULE_7___default()("button", {
                disabled: !this.isChanged()
            });
            var globalObject = this.props.globalObject;

            var budgetObject = void 0;
            if (this.state.lastBudgetObject) {
                budgetObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(this.state.lastBudgetObject);
            }

            var totalBudget = 0;
            // let unusedBudget = 0;
            var workerBudget = globalObject ? parseInt(globalObject.getIn(["parameters", "worker_budget_per_day"]), 10) : 0;

            if (budgetObject) {
                workerBudget = Math.min(24 * budgetObject.getIn(["record", "worker_budget"]), workerBudget);
                totalBudget = Math.min(24 * budgetObject.getIn(["record", "worker_budget"]), workerBudget);
            }

            var now = new Date();
            var workerArray = this._getWorkerArray();

            var voteThreshold = 0;
            var workers = workerArray.filter(function (a) {
                if (!a) {
                    return false;
                }

                return new Date(a.get("work_end_date") + "Z") > now && new Date(a.get("work_begin_date") + "Z") <= now;
            }).sort(function (a, b) {
                return _this8._getTotalVotes(b) - _this8._getTotalVotes(a);
            }).map(function (worker, index) {
                var dailyPay = parseInt(worker.get("daily_pay"), 10);
                workerBudget = workerBudget - dailyPay;
                var votes = worker.get("total_votes_for") - worker.get("total_votes_against");
                if (workerBudget <= 0 && !voteThreshold) {
                    voteThreshold = votes;
                }

                if (voteThreshold && votes < voteThreshold) return null;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkerApproval__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    preferredUnit: preferredUnit,
                    rest: workerBudget + dailyPay,
                    rank: index + 1,
                    key: worker.get("id"),
                    worker: worker.get("id"),
                    vote_ids: _this8.state[hasProxy ? "proxy_vote_ids" : "vote_ids"],
                    onChangeVotes: _this8.onChangeVotes.bind(_this8),
                    proxy: hasProxy,
                    voteThreshold: voteThreshold
                });
            }).filter(function (a) {
                return !!a;
            });

            // unusedBudget = Math.max(0, workerBudget);

            var newWorkers = workerArray.filter(function (a) {
                if (!a) {
                    return false;
                }

                var votes = a.get("total_votes_for") - a.get("total_votes_against");
                return new Date(a.get("work_end_date") + "Z") > now && votes < voteThreshold || new Date(a.get("work_begin_date") + "Z") > now;
            }).sort(function (a, b) {
                return _this8._getTotalVotes(b) - _this8._getTotalVotes(a);
            }).map(function (worker, index) {
                // let dailyPay = parseInt(worker.get("daily_pay"), 10);
                // workerBudget = workerBudget - dailyPay;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkerApproval__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    preferredUnit: preferredUnit,
                    rest: 0,
                    rank: index + 1,
                    key: worker.get("id"),
                    worker: worker.get("id"),
                    vote_ids: _this8.state[hasProxy ? "proxy_vote_ids" : "vote_ids"],
                    onChangeVotes: _this8.onChangeVotes.bind(_this8),
                    proxy: hasProxy,
                    voteThreshold: voteThreshold
                });
            });

            var expiredWorkers = workerArray.filter(function (a) {
                if (!a) {
                    return false;
                }

                return new Date(a.get("work_end_date")) <= now;
            }).sort(function (a, b) {
                return _this8._getTotalVotes(b) - _this8._getTotalVotes(a);
            }).map(function (worker, index) {
                // let dailyPay = parseInt(worker.get("daily_pay"), 10);
                // workerBudget = workerBudget - dailyPay;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkerApproval__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    preferredUnit: preferredUnit,
                    rest: 0,
                    rank: index + 1,
                    key: worker.get("id"),
                    worker: worker.get("id"),
                    vote_ids: _this8.state[hasProxy ? "proxy_vote_ids" : "vote_ids"],
                    onChangeVotes: _this8.onChangeVotes.bind(_this8),
                    proxy: hasProxy,
                    voteThreshold: voteThreshold
                });
            });

            var actionButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(publish_buttons_class, {
                            success: this.isChanged()
                        }),
                        onClick: this.onPublish,
                        tabIndex: 4
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.publish" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button " + publish_buttons_class,
                        onClick: this.onReset,
                        tabIndex: 8
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                )
            );

            var proxyInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _AccountSelector__WEBPACK_IMPORTED_MODULE_13__["default"],
                {
                    style: { width: "50%", maxWidth: 250, marginBottom: 10 },
                    account: this.state.current_proxy_input,
                    accountName: this.state.current_proxy_input,
                    onChange: this.onProxyChange.bind(this),
                    onAccountChanged: this.onProxyAccountFound,
                    tabIndex: 1,
                    placeholder: "Proxy not set",
                    hideImage: true
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    {
                        style: {
                            paddingLeft: 5,
                            position: "relative",
                            top: -1,
                            display: hasProxy ? "" : "none"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], { name: "locked", title: "icons.locked.action", size: "1x" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    {
                        style: {
                            paddingLeft: 5,
                            position: "relative",
                            top: 9,
                            display: !hasProxy ? "" : "none"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"],
                        { to: "/help/voting" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            name: "question-circle",
                            title: "icons.question_circle",
                            size: "1x"
                        })
                    )
                )
            );

            var showExpired = workerTableIndex === 2;

            var saveText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "inline-block",
                    style: {
                        float: "right",
                        visibility: this.isChanged() ? "visible" : "hidden",
                        color: "red",
                        padding: "0.85rem",
                        fontSize: "0.9rem"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.save_finish" })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_8__["Tabs"],
                            {
                                setting: "votingTab",
                                className: "account-tabs",
                                defaultActiveTab: 1,
                                segmented: false,
                                actionButtons: saveText,
                                tabsClass: "account-overview no-padding bordered-header content-block"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"],
                                { title: "explorer.witnesses.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("content-block") },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "header-selector" },
                                        proxyInput,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    float: "right",
                                                    marginTop: "-2.5rem"
                                                }
                                            },
                                            actionButtons
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VotingAccountsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        type: "witness",
                                        label: "account.votes.add_witness_label",
                                        items: this.state.all_witnesses,
                                        validateAccount: this.validateAccount.bind(this, "witnesses"),
                                        onAddItem: this.onAddItem.bind(this, "witnesses"),
                                        onRemoveItem: this.onRemoveItem.bind(this, "witnesses"),
                                        tabIndex: hasProxy ? -1 : 2,
                                        supported: this.state[hasProxy ? "proxy_witnesses" : "witnesses"],
                                        withSelector: false,
                                        active: globalObject.get("active_witnesses"),
                                        proxy: this.state.proxy_account_id
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"],
                                { title: "explorer.committee_members.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("content-block") },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "header-selector" },
                                        proxyInput,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    float: "right",
                                                    marginTop: "-2.5rem"
                                                }
                                            },
                                            actionButtons
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VotingAccountsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        type: "committee",
                                        label: "account.votes.add_committee_label",
                                        items: this.state.all_committee,
                                        validateAccount: this.validateAccount.bind(this, "committee"),
                                        onAddItem: this.onAddItem.bind(this, "committee"),
                                        onRemoveItem: this.onRemoveItem.bind(this, "committee"),
                                        tabIndex: hasProxy ? -1 : 3,
                                        supported: this.state[hasProxy ? "proxy_committee" : "committee"],
                                        withSelector: false,
                                        active: globalObject.get("active_committee_members"),
                                        proxy: this.state.proxy_account_id
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"],
                                { title: "account.votes.workers_short" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "header-selector" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { float: "right" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"],
                                            { to: "/create-worker" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "button" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.create_worker" })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "selector" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                style: { paddingLeft: 10 },
                                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("inline-block", {
                                                    inactive: workerTableIndex !== 0
                                                }),
                                                onClick: this._setWorkerTableIndex.bind(this, 0)
                                            },
                                            counterpart__WEBPACK_IMPORTED_MODULE_16___default.a.translate("account.votes.new", { count: newWorkers.length })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("inline-block", {
                                                    inactive: workerTableIndex !== 1
                                                }),
                                                onClick: this._setWorkerTableIndex.bind(this, 1)
                                            },
                                            counterpart__WEBPACK_IMPORTED_MODULE_16___default.a.translate("account.votes.active", { count: workers.length })
                                        ),
                                        expiredWorkers.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("inline-block", { inactive: !showExpired }),
                                                onClick: !showExpired ? this._setWorkerTableIndex.bind(this, 2) : function () {}
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.expired" })
                                        ) : null
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { style: { marginTop: "2rem" } },
                                        proxyInput,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    float: "right",
                                                    marginTop: "-2.5rem"
                                                }
                                            },
                                            actionButtons
                                        )
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table dashboard-table table-hover" },
                                    workerTableIndex === 2 ? null : workerTableIndex === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    colSpan: "3",
                                                    style: { textAlign: "left" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.threshold" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                                    decimalOffset: 5,
                                                    hide_asset: true,
                                                    amount: voteThreshold,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { colSpan: "3" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
                                                style: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                }
                                            })
                                        )
                                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    colSpan: "4",
                                                    style: { textAlign: "left" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.total_budget" }),
                                                " ",
                                                "(",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                    name: preferredUnit
                                                }),
                                                ")"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
                                                colSpan: "2",
                                                className: "hide-column-small"
                                            }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" }
                                                },
                                                globalObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_17__["EquivalentValueComponent"], {
                                                    hide_asset: true,
                                                    fromAsset: "1.3.0",
                                                    toAsset: preferredUnit,
                                                    amount: totalBudget
                                                }) : null
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "hide-column-small" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
                                                style: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                }
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            workerTableIndex === 2 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.line" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                { style: { textAlign: "center" } },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.id" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                { style: { textAlign: "left" } },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.description" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" },
                                                    className: "hide-column-small"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.total_votes" })
                                            ),
                                            workerTableIndex === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.missing" })
                                            ) : null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.workers.period" })
                                            ),
                                            workerTableIndex === 2 || workerTableIndex === 0 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" },
                                                    className: "hide-column-small"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.funding" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" },
                                                    className: "hide-column-small"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.daily_pay" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingTop: 5,
                                                            fontSize: "0.8rem"
                                                        }
                                                    },
                                                    "(",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                        name: preferredUnit
                                                    }),
                                                    ")"
                                                )
                                            ),
                                            workerTableIndex === 2 || workerTableIndex === 0 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.witnesses.budget" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            paddingTop: 5,
                                                            fontSize: "0.8rem"
                                                        }
                                                    },
                                                    "(",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                        name: preferredUnit
                                                    }),
                                                    ")"
                                                )
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.toggle" })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        workerTableIndex === 0 ? newWorkers : workerTableIndex === 1 ? workers : expiredWorkers
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountVoting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountVoting.propTypes = {
    initialBudget: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__["default"].ChainObject.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__["default"].ChainObject.isRequired,
    proxy: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__["default"].ChainAccount.isRequired
};
AccountVoting.defaultProps = {
    globalObject: "2.0.0"
};

AccountVoting = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountVoting);

var BudgetObjectWrapper = function BudgetObjectWrapper(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountVoting, _extends({}, props, {
        initialBudget: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_19__["default"].getLastBudgetObject()
    }));
};

/* harmony default export */ __webpack_exports__["default"] = (BudgetObjectWrapper);

/***/ }),

/***/ 2523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1013);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1332);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2401);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(802);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var WorkerApproval = function (_React$Component) {
    _inherits(WorkerApproval, _React$Component);

    function WorkerApproval(props) {
        _classCallCheck(this, WorkerApproval);

        return _possibleConstructorReturn(this, (WorkerApproval.__proto__ || Object.getPrototypeOf(WorkerApproval)).call(this, props));
    }

    _createClass(WorkerApproval, [{
        key: "onApprove",
        value: function onApprove() {
            var addVotes = [],
                removeVotes = [];

            if (this.props.vote_ids.has(this.props.worker.get("vote_against"))) {
                removeVotes.push(this.props.worker.get("vote_against"));
            }

            if (!this.props.vote_ids.has(this.props.worker.get("vote_for"))) {
                addVotes.push(this.props.worker.get("vote_for"));
            }

            this.props.onChangeVotes(addVotes, removeVotes);
        }
    }, {
        key: "onReject",
        value: function onReject() {
            var addVotes = [],
                removeVotes = [];

            if (this.props.vote_ids.has(this.props.worker.get("vote_against"))) {
                removeVotes.push(this.props.worker.get("vote_against"));
            }

            if (this.props.vote_ids.has(this.props.worker.get("vote_for"))) {
                removeVotes.push(this.props.worker.get("vote_for"));
            }

            this.props.onChangeVotes(addVotes, removeVotes);
        }
    }, {
        key: "render",
        value: function render() {
            var rank = this.props.rank;

            var worker = this.props.worker.toJS();
            var total_votes = worker.total_votes_for - worker.total_votes_against;
            var approvalState = this.props.vote_ids.has(worker.vote_for) ? true : this.props.vote_ids.has(worker.vote_against) ? false : null;

            var fundedPercent = 0;

            if (worker.daily_pay < this.props.rest) {
                fundedPercent = 100;
            } else if (this.props.rest > 0) {
                fundedPercent = this.props.rest / worker.daily_pay * 100;
            }

            var startDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(worker.work_begin_date + "Z"), { type: "date", format: "short_custom" });
            var endDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(worker.work_end_date + "Z"), { type: "date", format: "short_custom" });

            var now = new Date();
            var isExpired = new Date(worker.work_end_date + "Z") <= now;
            var hasStarted = new Date(worker.work_begin_date + "Z") <= now;
            var isProposed = !isExpired && total_votes < this.props.voteThreshold || !hasStarted;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: approvalState ? "" : "unsupported" },
                isExpired ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: {
                            textAlign: "right",
                            paddingRight: 10,
                            paddingLeft: 0
                        }
                    },
                    rank
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "worker-id", style: { textAlign: "left" } },
                    worker.id
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "worker-name", style: { textAlign: "left" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "inline-block",
                            style: { paddingRight: 5, position: "relative", top: -1 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                style: {
                                    visibility: worker.url && worker.url.indexOf(".") !== -1 ? "visible" : "hidden"
                                },
                                href: worker.url,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], { name: "share", title: "icons.share" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            "data-tip": worker.name,
                            className: "inline-block tooltip"
                        },
                        worker.name,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__["default"], { account: worker.worker_account })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" }, className: "hide-column-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        amount: total_votes,
                        asset: "1.3.0",
                        decimalOffset: 5,
                        hide_asset: true
                    })
                ),
                !isProposed ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        amount: Math.max(0, this.props.voteThreshold - total_votes),
                        asset: "1.3.0",
                        hide_asset: true,
                        decimalOffset: 5
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    startDate,
                    " - ",
                    endDate
                ),
                isExpired || isProposed ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: { textAlign: "right" },
                        className: "hide-column-small"
                    },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(fundedPercent, 2),
                    "%"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" }, className: "hide-column-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_7__["EquivalentValueComponent"], {
                        hide_asset: true,
                        fromAsset: "1.3.0",
                        toAsset: this.props.preferredUnit,
                        amount: worker.daily_pay
                    })
                ),
                isExpired || isProposed ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    this.props.rest <= 0 ? "0.00" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_7__["EquivalentValueComponent"], {
                        hide_asset: true,
                        fromAsset: "1.3.0",
                        toAsset: this.props.preferredUnit,
                        amount: this.props.rest
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        className: "clickable",
                        onClick: this.props.proxy ? function () {} : this[approvalState ? "onReject" : "onApprove"].bind(this)
                    },
                    !this.props.proxy ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        name: approvalState ? "checkmark-circle" : "minus-circle",
                        title: approvalState ? "icons.checkmark_circle.approved" : "icons.minus_circle.disapproved"
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], { name: "locked", title: "icons.locked.action" })
                )
            );
        }
    }]);

    return WorkerApproval;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WorkerApproval.propTypes = {
    worker: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    onAddVote: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func, /// called with vote id to add
    onRemoveVote: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func, /// called with vote id to remove
    vote_ids: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object /// Set of items currently being voted for
};
WorkerApproval.defaultProps = {
    tempComponent: "tr"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(WorkerApproval));

/***/ }),

/***/ 2524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1221);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1013);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1332);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













function getWitnessOrCommittee(type, acct) {
    var url = "",
        votes = 0,
        account = void 0;
    if (type === "witness") {
        account = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getWitnessById(acct.get("id"));
    } else if (type === "committee") {
        account = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getCommitteeMemberById(acct.get("id"));
    }

    url = account ? account.get("url") : url;
    votes = account ? account.get("total_votes") : votes;
    return {
        url: url,
        votes: votes,
        id: account.get("id")
    };
}

var AccountItemRow = function (_React$Component) {
    _inherits(AccountItemRow, _React$Component);

    function AccountItemRow() {
        _classCallCheck(this, AccountItemRow);

        return _possibleConstructorReturn(this, (AccountItemRow.__proto__ || Object.getPrototypeOf(AccountItemRow)).apply(this, arguments));
    }

    _createClass(AccountItemRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.account !== this.props.account || nextProps.action !== this.props.action || nextProps.isActive !== this.props.isActive || nextProps.idx !== this.props.idx || nextProps.proxy !== this.props.proxy;
        }
    }, {
        key: "onAction",
        value: function onAction(item_id) {
            this.props.onAction(item_id);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                type = _props.type,
                action = _props.action,
                isActive = _props.isActive;

            var item_id = account.get("id");

            var _getWitnessOrCommitte = getWitnessOrCommittee(type, account),
                url = _getWitnessOrCommitte.url,
                votes = _getWitnessOrCommitte.votes;

            var link = url && url.length > 0 && url.indexOf("http") === -1 ? "http://" + url : url;
            var isSupported = action === "remove";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: isSupported ? "" : "unsupported" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    this.props.idx + 1
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "left" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_8__["default"], { account: account.get("id") })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    link && link.indexOf(".") !== -1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "share", title: "icons.share" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: votes,
                        asset: "1.3.0",
                        decimalOffset: 5,
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        content: "account.votes." + (isActive ? "active_short" : "inactive")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        content: "settings." + (isSupported ? "yes" : "no")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        className: this.props.proxy ? "" : "clickable",
                        onClick: this.props.proxy ? function () {} : this.onAction.bind(this, item_id)
                    },
                    !this.props.proxy ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        name: isSupported ? "checkmark-circle" : "minus-circle",
                        title: isSupported ? "icons.checkmark_circle.yes" : "icons.minus_circle.no"
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "locked", title: "icons.locked.action" })
                )
            );
        }
    }]);

    return AccountItemRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountItemRow.propTypes = {
    account: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
    onAction: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};

var VotingAccountsList = function (_React$Component2) {
    _inherits(VotingAccountsList, _React$Component2);

    function VotingAccountsList(props) {
        _classCallCheck(this, VotingAccountsList);

        var _this2 = _possibleConstructorReturn(this, (VotingAccountsList.__proto__ || Object.getPrototypeOf(VotingAccountsList)).call(this, props));

        _this2.state = {
            selected_item: null,
            item_name_input: "",
            error: null
        };
        _this2.onItemChange = _this2.onItemChange.bind(_this2);
        _this2.onItemAccountChange = _this2.onItemAccountChange.bind(_this2);
        _this2.onAddItem = _this2.onAddItem.bind(_this2);
        return _this2;
    }

    _createClass(VotingAccountsList, [{
        key: "onItemChange",
        value: function onItemChange(item_name_input) {
            this.setState({ item_name_input: item_name_input });
        }
    }, {
        key: "onItemAccountChange",
        value: function onItemAccountChange(selected_item) {
            var _this3 = this;

            this.setState({ selected_item: selected_item, error: null });
            if (selected_item && this.props.validateAccount) {
                var res = this.props.validateAccount(selected_item);
                if (res === null) return;
                if (typeof res === "string") this.setState({ error: res });else res.then(function (error) {
                    return _this3.setState({ error: error });
                });
            }
        }
    }, {
        key: "onAddItem",
        value: function onAddItem(item) {
            if (!item) return;
            var next_state = {
                selected_item: null,
                item_name_input: "",
                error: null
            };
            this.setState(next_state);
            this.props.onAddItem(item.get("id"));
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            if (!this.props.items) return null;

            var item_rows = this.props.items.filter(function (i) {
                if (!i) return false;
                //if (this.state.item_name_input) return i.get("name").indexOf(this.state.item_name_input) !== -1;
                return true;
            }).sort(function (a, b) {
                var _getWitnessOrCommitte2 = getWitnessOrCommittee(_this4.props.type, a),
                    a_votes = _getWitnessOrCommitte2.votes;

                var _getWitnessOrCommitte3 = getWitnessOrCommittee(_this4.props.type, b),
                    b_votes = _getWitnessOrCommitte3.votes;

                if (a_votes !== b_votes) {
                    return parseInt(b_votes, 10) - parseInt(a_votes, 10);
                } else if (a.get("name") > b.get("name")) {
                    return 1;
                } else if (a.get("name") < b.get("name")) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(function (i, idx) {
                var action = _this4.props.supported && _this4.props.supported.includes(i.get("id")) ? "remove" : "add";
                var isActive = _this4.props.active.includes(getWitnessOrCommittee(_this4.props.type, i).id);
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountItemRow, {
                    idx: idx,
                    key: i.get("name"),
                    account: i,
                    type: _this4.props.type,
                    onAction: action === "add" ? _this4.props.onAddItem : _this4.props.onRemoveItem,
                    isSelected: _this4.props.items.indexOf(i) !== -1,
                    action: action,
                    isActive: isActive,
                    proxy: _this4.props.proxy
                });
            });

            var error = this.state.error;
            if (!error && this.state.selected_item && this.props.items.indexOf(this.state.selected_item) !== -1) {
                error = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("account.votes.already");
            }

            var cw = ["10%", "20%", "40%", "20%", "10%"];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                this.props.withSelector ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    style: { maxWidth: "600px" },
                    label: this.props.label,
                    error: error,
                    placeholder: this.props.placeholder,
                    account: this.state.item_name_input,
                    accountName: this.state.item_name_input,
                    onChange: this.onItemChange,
                    onAccountChanged: this.onItemAccountChange,
                    onAction: this.onAddItem,
                    action_label: "account.votes.add_witness",
                    tabIndex: this.props.tabIndex
                }) : null,
                this.props.title && item_rows.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h4",
                    null,
                    this.props.title
                ) : null,
                item_rows.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table dashboard-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                "#"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    style: { textAlign: "left", maxWidth: cw[1] }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.name" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { maxWidth: cw[2] } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.about" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { maxWidth: cw[3] } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.votes" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { maxWidth: cw[4] } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.status.title" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { maxWidth: cw[0] } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.supported" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { maxWidth: cw[5] } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.votes.toggle" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        item_rows
                    )
                ) : null
            );
        }
    }]);

    return VotingAccountsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

VotingAccountsList.propTypes = {
    items: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainObjectsList,
    onAddItem: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
    onRemoveItem: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
    validateAccount: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
    label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, // a translation key for the label,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, // the placeholder text to be displayed when there is no user_input
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, // tabindex property to be passed to input tag
    action: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    withSelector: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
VotingAccountsList.defaultProps = {
    action: "remove",
    withSelector: true,
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(VotingAccountsList));

/***/ }),

/***/ 2525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1264);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1217);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2415);
/* harmony import */ var _MarginPositions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2526);
/* harmony import */ var _RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2517);
/* harmony import */ var components_Account_Proposals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2527);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(416);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(567);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2478);
/* harmony import */ var _AccountOrders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2532);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1338);
/* harmony import */ var common_accountHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2533);
/* harmony import */ var _BalanceWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1288);
/* harmony import */ var _AccountTreemap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2534);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1218);
/* harmony import */ var _AccountPortfolioList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2537);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
























var AccountOverview = function (_React$Component) {
    _inherits(AccountOverview, _React$Component);

    function AccountOverview(props) {
        _classCallCheck(this, AccountOverview);

        var _this = _possibleConstructorReturn(this, (AccountOverview.__proto__ || Object.getPrototypeOf(AccountOverview)).call(this));

        _this.state = {
            sortKey: props.viewSettings.get("portfolioSort", "totalValue"),
            sortDirection: props.viewSettings.get("portfolioSortDirection", true), // alphabetical A -> B, numbers high to low
            shownAssets: props.viewSettings.get("shownAssets", "active"),
            alwaysShowAssets: ["BTS"
            // "USD",
            // "CNY",
            // "OPEN.BTC",
            // "OPEN.USDT",
            // "OPEN.ETH",
            // "OPEN.MAID",
            // "OPEN.STEEM",
            // "OPEN.DASH"
            ]
        };

        _this._handleFilterInput = _this._handleFilterInput.bind(_this);
        return _this;
    }

    _createClass(AccountOverview, [{
        key: "_handleFilterInput",
        value: function _handleFilterInput(e) {
            e.preventDefault();
            this.setState({
                filterValue: e.target.value
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkMarginStatus();
        }
    }, {
        key: "_checkMarginStatus",
        value: function _checkMarginStatus() {
            var _this2 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            Object(common_accountHelper__WEBPACK_IMPORTED_MODULE_16__["checkMarginStatus"])(props.account).then(function (status) {
                var globalMarginStatus = null;
                for (var asset in status) {
                    globalMarginStatus = status[asset].statusClass || globalMarginStatus;
                }
                _this2.setState({ globalMarginStatus: globalMarginStatus });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.account !== this.props.account) {
                this._checkMarginStatus(np);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextProps.balances, this.props.balances) || nextProps.account !== this.props.account || nextProps.settings !== this.props.settings || nextProps.hiddenAssets !== this.props.hiddenAssets || !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextState, this.state) || this.state.filterValue !== nextState.filterValue;
        }
    }, {
        key: "_changeShownAssets",
        value: function _changeShownAssets() {
            var shownAssets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "active";

            this.setState({
                shownAssets: shownAssets
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                shownAssets: shownAssets
            });
        }
    }, {
        key: "_toggleSortOrder",
        value: function _toggleSortOrder(key) {
            if (this.state.sortKey === key) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                    portfolioSortDirection: !this.state.sortDirection
                });
                this.setState({
                    sortDirection: !this.state.sortDirection
                });
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                    portfolioSort: key
                });
                this.setState({
                    sortDirection: false,
                    sortKey: key
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                account = _props.account,
                hiddenAssets = _props.hiddenAssets,
                settings = _props.settings,
                orders = _props.orders;
            var shownAssets = this.state.shownAssets;


            if (!account) {
                return null;
            }

            var preferredUnit = settings.get("unit") || this.props.core_asset.get("symbol");

            var call_orders = [],
                collateral = {},
                debt = {};

            if (account.toJS && account.has("call_orders")) call_orders = account.get("call_orders").toJS();
            var includedBalances = void 0,
                hiddenBalances = void 0;
            var account_balances = account.get("balances");
            var includedBalancesList = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
                hiddenBalancesList = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();
            call_orders.forEach(function (callID) {
                var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject(callID);
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

            if (account_balances) {
                // Filter out balance objects that have 0 balance or are not included in open orders
                account_balances = account_balances.filter(function (a, index) {
                    var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject(a);
                    if (balanceObject && !balanceObject.get("balance") && !orders[index]) {
                        return false;
                    } else {
                        return true;
                    }
                });

                // Separate balances into hidden and included
                account_balances.forEach(function (a, asset_type) {
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getAsset(asset_type);

                    var assetName = "";
                    var filter = "";

                    if (_this3.state.filterValue) {
                        filter = _this3.state.filterValue ? String(_this3.state.filterValue).toLowerCase() : "";
                        assetName = asset.get("symbol").toLowerCase();

                        var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].replaceName(asset),
                            isBitAsset = _utils$replaceName.isBitAsset;

                        if (isBitAsset) {
                            assetName = "bit" + assetName;
                        }
                    }

                    if (hiddenAssets.includes(asset_type) && assetName.includes(filter)) {
                        hiddenBalancesList = hiddenBalancesList.push(a);
                    } else if (assetName.includes(filter)) {
                        includedBalancesList = includedBalancesList.push(a);
                    }
                });

                var included = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPortfolioList__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    balanceList: includedBalancesList,
                    optionalAssets: !this.state.filterValue ? this.state.alwaysShowAssets : null,
                    visible: true,
                    preferredUnit: preferredUnit,
                    coreSymbol: this.props.core_asset.get("symbol"),
                    hiddenAssets: hiddenAssets,
                    orders: orders,
                    account: this.props.account,
                    sortKey: this.state.sortKey,
                    sortDirection: this.state.sortDirection,
                    isMyAccount: this.props.isMyAccount,
                    balances: this.props.balances
                });

                includedBalances = included;

                var hidden = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPortfolioList__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    balanceList: hiddenBalancesList,
                    optionalAssets: !this.state.filterValue ? this.state.alwaysShowAsset : null,
                    visible: false,
                    preferredUnit: preferredUnit,
                    coreSymbol: this.props.core_asset.get("symbol"),
                    settings: settings,
                    hiddenAssets: hiddenAssets,
                    orders: orders,
                    account: this.props.account,
                    sortKey: this.state.sortKey,
                    sortDirection: this.state.sortDirection,
                    isMyAccount: this.props.isMyAccount,
                    balances: this.props.balances
                });

                hiddenBalances = hidden;
            }

            var portfolioHiddenAssetsBalance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], { noTip: true, balances: hiddenBalancesList, hide_asset: true });

            var portfolioActiveAssetsBalance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
                noTip: true,
                balances: includedBalancesList,
                hide_asset: true
            });
            var ordersValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
                noTip: true,
                balances: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
                openOrders: orders,
                hide_asset: true
            });
            var marginValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
                noTip: true,
                balances: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
                debt: debt,
                collateral: collateral,
                hide_asset: true
            });
            var debtValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
                noTip: true,
                balances: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
                debt: debt,
                hide_asset: true
            });
            var collateralValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
                noTip: true,
                balances: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(),
                collateral: collateral,
                hide_asset: true
            });

            var totalValueText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_15__["default"], {
                noLink: true,
                string: "account.total",
                keys: [{ type: "asset", value: preferredUnit, arg: "asset" }]
            });

            var includedPortfolioBalance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: "portfolio", className: "total-value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: "2", style: { textAlign: "left" } },
                    totalValueText
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    portfolioActiveAssetsBalance
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { colSpan: "9" })
            );

            var hiddenPortfolioBalance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: "portfolio", className: "total-value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: "2", style: { textAlign: "left" } },
                    totalValueText
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    portfolioHiddenAssetsBalance
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { colSpan: "9" })
            );

            var showAssetPercent = settings.get("showAssetPercent", false);

            // add unicode non-breaking space as subtext to Activity Tab to ensure that all titles are aligned
            // horizontally
            var hiddenSubText = "\xA0";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content app-tables no-padding", ref: "appTables" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tabs-container generic-bordered-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tabs"],
                            {
                                defaultActiveTab: 0,
                                segmented: false,
                                setting: "overviewTab",
                                className: "account-tabs",
                                tabsClass: "account-overview no-padding bordered-header content-block"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tab"],
                                {
                                    title: "account.portfolio",
                                    subText: portfolioActiveAssetsBalance
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "header-selector" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "filter inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "text",
                                            placeholder: "Filter",
                                            onChange: this._handleFilterInput
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "selector inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("inline-block", {
                                                    inactive: shownAssets != "active"
                                                }),
                                                onClick: shownAssets != "active" ? this._changeShownAssets.bind(this, "active") : function () {}
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.hide_hidden" })
                                        ),
                                        hiddenBalancesList.size ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("inline-block", {
                                                    inactive: shownAssets != "hidden"
                                                }),
                                                onClick: shownAssets != "hidden" ? this._changeShownAssets.bind(this, "hidden") : function () {}
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.show_hidden" })
                                        ) : null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_14___default()("inline-block", {
                                                    inactive: shownAssets != "visual"
                                                }),
                                                onClick: shownAssets != "visual" ? this._changeShownAssets.bind(this, "visual") : function () {}
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.show_visual" })
                                        )
                                    )
                                ),
                                shownAssets != "visual" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table dashboard-table table-hover" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: { textAlign: "left" },
                                                    className: "clickable",
                                                    onClick: this._toggleSortOrder.bind(this, "alphabetic")
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                                    component: "span",
                                                    content: "account.asset"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    onClick: this._toggleSortOrder.bind(this, "qty"),
                                                    className: "clickable",
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.qty" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    onClick: this._toggleSortOrder.bind(this, "priceValue"),
                                                    className: "column-hide-small clickable",
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.price" }),
                                                " ",
                                                "(",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    name: preferredUnit,
                                                    noTip: true
                                                }),
                                                ")"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    onClick: this._toggleSortOrder.bind(this, "changeValue"),
                                                    className: "column-hide-small clickable",
                                                    style: { textAlign: "right" }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.hour_24_short" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    onClick: this._toggleSortOrder.bind(this, "totalValue"),
                                                    style: { textAlign: "right" },
                                                    className: "column-hide-small clickable"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                    noLink: true,
                                                    string: "account.eq_value_header",
                                                    keys: [{
                                                        type: "asset",
                                                        value: preferredUnit,
                                                        arg: "asset"
                                                    }],
                                                    noTip: true
                                                })
                                            ),
                                            showAssetPercent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                {
                                                    style: {
                                                        textAlign: "right"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                                    component: "span",
                                                    content: "account.percent"
                                                })
                                            ) : null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "header.payments" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.buy" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.deposit.submit" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.withdraw.submit" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.trade" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.borrow_short" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.settle" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                { className: "column-hide-small" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                                    content: shownAssets == "active" ? "exchange.hide" : "account.perm.show"
                                                })
                                            )
                                        )
                                    ),
                                    shownAssets == "hidden" && hiddenBalancesList.size ? hiddenBalances : includedBalances,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        shownAssets == "hidden" && hiddenBalancesList.size ? hiddenPortfolioBalance : includedPortfolioBalance
                                    )
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountTreemap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                    balanceObjects: includedBalancesList
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tab"],
                                {
                                    title: "account.open_orders",
                                    subText: ordersValue
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _AccountOrders__WEBPACK_IMPORTED_MODULE_13__["default"],
                                    this.props,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "total-value" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    colSpan: "7",
                                                    style: { textAlign: "right" }
                                                },
                                                totalValueText
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    colSpan: "2",
                                                    style: { textAlign: "left" }
                                                },
                                                ordersValue
                                            ),
                                            this.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null) : null
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tab"],
                                {
                                    title: "account.collaterals",
                                    subText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: this.state.globalMarginStatus
                                        },
                                        marginValue
                                    )
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "content-block" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "generic-bordered-box" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            _MarginPositions__WEBPACK_IMPORTED_MODULE_6__["default"],
                                            {
                                                preferredUnit: preferredUnit,
                                                className: "dashboard-table",
                                                callOrders: call_orders,
                                                account: account
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tr",
                                                { className: "total-value" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    null,
                                                    totalValueText
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    null,
                                                    debtValue
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    { className: "column-hide-medium" },
                                                    collateralValue
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "td",
                                                    null,
                                                    marginValue
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-small" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { colSpan: "3" })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tab"],
                                {
                                    title: "account.activity",
                                    subText: hiddenSubText
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__["RecentTransactions"], {
                                    accountsList: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.fromJS([account.get("id")]),
                                    compactView: false,
                                    showMore: true,
                                    fullHeight: true,
                                    limit: 15,
                                    showFilters: true,
                                    dashboard: true
                                })
                            ),
                            account.get("proposals") && account.get("proposals").size ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_12__["Tab"],
                                {
                                    title: "explorer.proposals.title",
                                    subText: String(account.get("proposals") ? account.get("proposals").size : 0)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Account_Proposals__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    className: "dashboard-table",
                                    account: account.get("id")
                                })
                            ) : null
                        )
                    )
                )
            );
        }
    }]);

    return AccountOverview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountOverview = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_19__["default"])(AccountOverview, { propNames: ["core_asset"] });

var AccountOverviewWrapper = function (_React$Component2) {
    _inherits(AccountOverviewWrapper, _React$Component2);

    function AccountOverviewWrapper() {
        _classCallCheck(this, AccountOverviewWrapper);

        return _possibleConstructorReturn(this, (AccountOverviewWrapper.__proto__ || Object.getPrototypeOf(AccountOverviewWrapper)).apply(this, arguments));
    }

    _createClass(AccountOverviewWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BalanceWrapper__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, this.props, { wrap: AccountOverview }));
        }
    }]);

    return AccountOverviewWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountOverviewWrapper);

/***/ }),

/***/ 2526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1013);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1334);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2415);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1217);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2464);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(585);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(416);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(802);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1264);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(744);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1338);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var alignRight = { textAlign: "right" };
var alignLeft = { textAlign: "left" };
/**
 *  Given a collateral position object (call order) and account,
 *  display it in a pretty way
 *
 *  Expects property, 'object' which should be a call order id
 *  and another property called 'account' which should be an
 *  account.
 */

var MarginPosition = function (_React$Component) {
    _inherits(MarginPosition, _React$Component);

    function MarginPosition() {
        _classCallCheck(this, MarginPosition);

        return _possibleConstructorReturn(this, (MarginPosition.__proto__ || Object.getPrototypeOf(MarginPosition)).apply(this, arguments));
    }

    _createClass(MarginPosition, [{
        key: "_onUpdatePosition",
        value: function _onUpdatePosition(e) {
            e.preventDefault();
            var ref = "cp_modal_" + this.props.object.getIn(["call_price", "quote", "asset_id"]);
            this.refs[ref].show();
        }
    }, {
        key: "_onClosePosition",
        value: function _onClosePosition(e) {
            e.preventDefault();
            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_9__["default"].new_transaction();

            tr.add_type_operation("call_order_update", {
                fee: {
                    amount: 0,
                    asset_id: 0
                },
                funding_account: this.props.object.get("borrower"),
                delta_collateral: {
                    amount: -this.props.object.get("collateral"),
                    asset_id: this.props.object.getIn(["call_price", "base", "asset_id"])
                },
                delta_debt: {
                    amount: -this.props.object.get("debt"),
                    asset_id: this.props.object.getIn(["call_price", "quote", "asset_id"])
                }
            });

            stores_WalletDb__WEBPACK_IMPORTED_MODULE_11__["default"].process_transaction(tr, null, true);
        }

        // how many units of the debt asset the borrower has
        // in his/her wallet. This has nothing to do with
        // how many of the asset the borrower has borrowed.

    }, {
        key: "_getBalance",
        value: function _getBalance() {
            var account = this.props.account;
            // the debt asset id which we want to display
            var row_asset_id = this.props.object.getIn(["call_price", "quote", "asset_id"]);

            var account_balances = account.get("balances");

            var balance = 0;

            // really this iteration should be called once, and
            // each asset_id matched once with its balance

            // for every debt the account has, we iterate
            // through every balance the user has
            if (account_balances) {
                account_balances.forEach(function (a, asset_type) {
                    if (asset_type == row_asset_id) {
                        var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(a);

                        // get the balance
                        balance = balanceObject.get("balance");
                    }
                });
            }

            // it's possible that the account doesn't hold
            // any of the asset here
            return balance;
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_price(this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.collateralAsset, this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.debtAsset);
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio() {
            var co = this.props.object.toJS();
            var c = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_amount(co.collateral, this.props.collateralAsset);
            var d = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_amount(co.debt, this.props.debtAsset);
            return c / (d / this._getFeedPrice());
        }
    }, {
        key: "_getMR",
        value: function _getMR() {
            return this.props.debtAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "_getStatusClass",
        value: function _getStatusClass() {
            var cr = this._getCollateralRatio();
            var mr = this._getMR();

            if (isNaN(cr)) return null;
            if (cr < mr) {
                return "danger";
            } else if (cr < mr + 0.5) {
                return "warning";
            } else {
                return "";
            }
        }
    }, {
        key: "_getCRTip",
        value: function _getCRTip() {
            var statusClass = this._getStatusClass();
            var mr = this._getMR();
            if (!statusClass || statusClass === "") return null;

            if (statusClass === "danger") {
                return counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.cr_danger", { mr: mr });
            } else if (statusClass === "warning") {
                return counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.cr_warning", { mr: mr });
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                debtAsset = _props.debtAsset,
                collateralAsset = _props.collateralAsset,
                object = _props.object;

            var co = object.toJS();
            var cr = this._getCollateralRatio();
            var d = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_amount(co.debt, this.props.debtAsset);
            var balance = this._getBalance();

            var statusClass = this._getStatusClass();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: "margin-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignLeft },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        replaceNoneToBts: false,
                        maxWidth: 30,
                        name: debtAsset.get("symbol")
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"],
                        { to: "/asset/" + debtAsset.get("symbol") },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__["default"], { noTip: true, name: debtAsset.get("symbol") })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        amount: balance,
                        asset: co.call_price.quote.asset_id,
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        amount: co.debt,
                        asset: co.call_price.quote.asset_id,
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight, className: "column-hide-medium" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        decimalOffset: 5,
                        amount: co.collateral,
                        asset: co.call_price.base.asset_id
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        "data-place": "bottom",
                        "data-tip": this._getCRTip(),
                        className: "center-content " + statusClass
                    },
                    common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(cr, 2)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_16__["default"], {
                        noTip: true,
                        balances: Object(immutable__WEBPACK_IMPORTED_MODULE_17__["List"])(),
                        debt: _defineProperty({}, debtAsset.get("id"), co.debt),
                        collateral: _defineProperty({}, collateralAsset.get("id"), parseInt(co.collateral, 10)),
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight, className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        base_amount: co.call_price.base.amount,
                        base_asset: co.call_price.base.asset_id,
                        quote_amount: co.call_price.quote.amount,
                        quote_asset: co.call_price.quote.asset_id,
                        hide_symbols: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight, className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        base_amount: debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]),
                        base_asset: co.call_price.quote.asset_id,
                        quote_amount: debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]),
                        quote_asset: co.call_price.base.asset_id,
                        hide_symbols: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        className: "center-content column-hide-small",
                        style: alignLeft
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        base_amount: co.call_price.base.amount,
                        base_asset: co.call_price.base.asset_id,
                        quote_amount: co.call_price.quote.amount,
                        quote_asset: co.call_price.quote.asset_id,
                        hide_value: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            "data-place": "left",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.update_position"),
                            style: { paddingBottom: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._onUpdatePosition.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                name: "adjust",
                                title: "icons.adjust",
                                className: "icon-14px rotate90"
                            })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            "data-place": "left",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.close_position", { amount: d, asset: debtAsset.get("symbol") }),
                            style: { paddingBottom: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._onClosePosition.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                name: "cross-circle",
                                title: "icons.cross_circle.close_position",
                                className: "icon-14px"
                            })
                        )
                    ),
                    debtAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        ref: "cp_modal_" + co.call_price.quote.asset_id,
                        modalId: "cp_modal_" + co.call_price.quote.asset_id,
                        quote_asset: co.call_price.quote.asset_id,
                        backing_asset: debtAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: this.props.account
                    }) : null
                )
            );
        }
    }]);

    return MarginPosition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPosition.propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired
};
MarginPosition.defaultProps = {
    tempComponent: "tr"
};

MarginPosition = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MarginPosition);

var MarginPositionWrapper = function (_React$Component2) {
    _inherits(MarginPositionWrapper, _React$Component2);

    function MarginPositionWrapper() {
        _classCallCheck(this, MarginPositionWrapper);

        return _possibleConstructorReturn(this, (MarginPositionWrapper.__proto__ || Object.getPrototypeOf(MarginPositionWrapper)).apply(this, arguments));
    }

    _createClass(MarginPositionWrapper, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                object = _props2.object,
                account = _props2.account;

            var debtAsset = object.getIn(["call_price", "quote", "asset_id"]);
            var collateralAsset = object.getIn(["call_price", "base", "asset_id"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPosition, _extends({
                debtAsset: debtAsset,
                collateralAsset: collateralAsset,
                account: account
            }, this.props));
        }
    }]);

    return MarginPositionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPositionWrapper.propTypes = {
    object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};


MarginPositionWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MarginPositionWrapper);

var MarginPositionPlaceHolder = function (_React$Component3) {
    _inherits(MarginPositionPlaceHolder, _React$Component3);

    function MarginPositionPlaceHolder() {
        _classCallCheck(this, MarginPositionPlaceHolder);

        return _possibleConstructorReturn(this, (MarginPositionPlaceHolder.__proto__ || Object.getPrototypeOf(MarginPositionPlaceHolder)).apply(this, arguments));
    }

    _createClass(MarginPositionPlaceHolder, [{
        key: "_onUpdatePosition",
        value: function _onUpdatePosition(e) {
            e.preventDefault();
            var ref = "cp_modal_" + this.props.debtAsset.get("id");
            this.refs[ref].show();
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_price(this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.collateralAsset, this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.debtAsset);
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                debtAsset = _props3.debtAsset,
                collateralAsset = _props3.collateralAsset,
                account = _props3.account;

            // get the balance

            // the debt asset id which we want to display

            var row_asset_id = debtAsset.get("id");

            var account_balances = account.get("balances");

            var balance = 0;

            // really this iteration should be called once, and
            // each asset_id matched once with its balance

            // for every debt the account has, we iterate
            // through every balance the user has
            if (account_balances) {
                account_balances.forEach(function (a, asset_type) {
                    if (asset_type == row_asset_id) {
                        var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(a);

                        // get the balance
                        balance = balanceObject.get("balance");
                    }
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: "margin-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignLeft },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        replaceNoneToBts: false,
                        maxWidth: 30,
                        name: debtAsset.get("symbol")
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"],
                        { to: "/asset/" + debtAsset.get("symbol") },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__["default"], { noTip: true, name: debtAsset.get("symbol") })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        amount: balance,
                        asset: debtAsset.get("id"),
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        amount: 0,
                        asset: debtAsset.get("id"),
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: alignRight, className: "column-hide-medium" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        decimalOffset: 5,
                        amount: 0,
                        asset: collateralAsset.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: alignRight }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: alignRight, className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: alignRight, className: "column-hide-small" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
                    className: "center-content column-hide-small",
                    style: alignLeft
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            "data-place": "left",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.update_position"),
                            style: { paddingBottom: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._onUpdatePosition.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                name: "adjust",
                                title: "icons.adjust",
                                className: "icon-14px rotate90"
                            })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    debtAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        ref: "cp_modal_" + debtAsset.get("id"),
                        modalId: "cp_modal_" + debtAsset.get("id"),
                        quote_asset: debtAsset.get("id"),
                        backing_asset: debtAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: this.props.account
                    }) : null
                )
            );
        }
    }]);

    return MarginPositionPlaceHolder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPositionPlaceHolder.propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired
};
MarginPositionPlaceHolder.defaultProps = {
    tempComponent: "tr"
};


MarginPositionPlaceHolder = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MarginPositionPlaceHolder);

var PlaceHolderWrapper = function (_React$Component4) {
    _inherits(PlaceHolderWrapper, _React$Component4);

    function PlaceHolderWrapper() {
        _classCallCheck(this, PlaceHolderWrapper);

        return _possibleConstructorReturn(this, (PlaceHolderWrapper.__proto__ || Object.getPrototypeOf(PlaceHolderWrapper)).apply(this, arguments));
    }

    _createClass(PlaceHolderWrapper, [{
        key: "render",
        value: function render() {
            var _this5 = this;

            var _props4 = this.props,
                account = _props4.account,
                callOrders = _props4.callOrders,
                bitAssets = _props4.bitAssets;

            callOrders = callOrders.filter(function (o) {
                return !!o;
            });
            bitAssets = bitAssets.filter(function (o) {
                return !!o;
            });
            if (!bitAssets.length) return null;
            callOrders.forEach(function (object) {
                /*
                * Existing call orders are already rendered elsewhere, so we filter
                * out assets from the bitAssets list for which the account already
                * has a position
                */
                if (object) {
                    var index = bitAssets.findIndex(function (o) {
                        return o && o.get("id") === object.getIn(["call_price", "quote", "asset_id"]);
                    });
                    if (index !== -1) {
                        bitAssets.splice(index, 1);
                    }
                }
            });

            if (!bitAssets.length) return null;
            var rows = bitAssets.map(function (a) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPositionPlaceHolder, _extends({
                    key: a.get("id"),
                    debtAsset: a.get("id"),
                    collateralAsset: a.getIn(["bitasset", "options", "short_backing_asset"]),
                    account: account
                }, _this5.props));
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tbody",
                null,
                rows
            );
        }
    }]);

    return PlaceHolderWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PlaceHolderWrapper.propTypes = {
    callOrders: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList
};


PlaceHolderWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(PlaceHolderWrapper);
PlaceHolderWrapper = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(PlaceHolderWrapper, {
    propNames: ["bitAssets"],
    defaultProps: {
        bitAssets: ["1.3.103", "1.3.113", "1.3.120", "1.3.121", "1.3.958", "1.3.1325", "1.3.1362", "1.3.105", "1.3.106"]
    },
    asList: true
});

var CollateralTable = function CollateralTable(_ref3) {
    var callOrders = _ref3.callOrders,
        account = _ref3.account,
        className = _ref3.className,
        children = _ref3.children,
        preferredUnit = _ref3.preferredUnit;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "table",
        { className: "table table-hover " + className },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignLeft },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "explorer.asset.title" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "exchange.balance" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignRight },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "transaction.borrow_amount" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignRight, className: "column-hide-medium" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "transaction.collateral" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "tooltip inline-block",
                            "data-place": "top",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.coll_ratio")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "borrow.coll_ratio" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        noLink: true,
                        string: "account.total",
                        keys: [{
                            type: "asset",
                            value: preferredUnit,
                            arg: "asset"
                        }]
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignRight, className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "tooltip inline-block",
                            "data-place": "top",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("tooltip.call_price")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "exchange.call" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: alignRight, className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "exchange.price" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { className: "column-hide-small", style: alignLeft },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "explorer.assets.units" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "borrow.adjust_short" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "transfer.close" })
                )
            )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tbody",
            null,
            callOrders.sort(function (a, b) {
                return a.split(".")[2] - b.split(".")[2];
            }).map(function (id) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPositionWrapper, {
                    key: id,
                    object: id,
                    account: account
                });
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlaceHolderWrapper, {
            account: account,
            callOrders: immutable__WEBPACK_IMPORTED_MODULE_17___default.a.List(callOrders)
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tbody",
            null,
            children
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (CollateralTable);

/***/ }),

/***/ 2527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Blockchain_ProposedOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1336);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _Modal_ProposalApproveModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2528);
/* harmony import */ var _Account_NestedApprovalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2529);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(416);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_permission_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2530);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1332);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(549);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Proposals = function (_Component) {
    _inherits(Proposals, _Component);

    function Proposals() {
        _classCallCheck(this, Proposals);

        var _this = _possibleConstructorReturn(this, (Proposals.__proto__ || Object.getPrototypeOf(Proposals)).call(this));

        _this.forceUpdate = _this.forceUpdate.bind(_this);
        return _this;
    }

    _createClass(Proposals, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            /*
            * Account objects don't get updated by underlying proposal changes, but
            * the ChainStore does, so in order to update this component when a proposal
            * changes, we need to update it whenever the ChainStore itself updates
            */
            bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].subscribe(this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].unsubscribe(this.forceUpdate);
        }
    }, {
        key: "_onApproveModal",
        value: function _onApproveModal(id, action) {
            if (this.refs[id + "_" + action]) {
                this.refs[id + "_" + action].show();
            }
        }
    }, {
        key: "_canReject",
        value: function _canReject(proposal) {
            return proposal.available_active_approvals.length || proposal.available_owner_approvals.length || proposal.available_key_approvals.length;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var account = this.props.account;

            if (!account) return null;

            var proposals = [];

            if (account.get("proposals").size) {
                account.get("proposals").forEach(function (proposal_id) {
                    var proposal = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(proposal_id);
                    if (proposal) {
                        var proposed_transaction = proposal.get("proposed_transaction");
                        var operations = proposed_transaction.get("operations");
                        proposals.push({ operations: operations, account: account, proposal: proposal });
                    }
                });
            }

            var proposalRows = proposals.sort(function (a, b) {
                return common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].sortID(a.proposal.get("id"), b.proposal.get("id"), true);
            }).reduce(function (result, proposal, index) {
                var isScam = false;
                var id = proposal.proposal.get("id");
                var proposer = proposal.proposal.get("proposer");
                var expiration = proposal.proposal.get("expiration_time");
                var text = proposal.operations.map(function (o, index) {
                    if (o.getIn([1, "to"]) === "1.2.153124") isScam = true;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Blockchain_ProposedOperation__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        key: proposal.proposal.get("id") + "_operation_" + index,
                        expiration: expiration,
                        index: index,
                        op: o.toJS(),
                        inverted: false,
                        hideFee: true,
                        hideOpLabel: true,
                        hideExpiration: true,
                        hideDate: true,
                        proposal: true,
                        id: id,
                        proposer: proposer
                    });
                }).toArray();

                var canReject = _this2._canReject(proposal.proposal.toJS());
                var proposalId = proposal.proposal.get("id");

                var type = proposal.proposal.get("required_active_approvals").size ? "active" : "owner";
                result.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: proposalId + "_id" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            colSpan: "4",
                            className: "proposal" + (index === 0 ? " first" : "")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Blockchain_ProposedOperation__WEBPACK_IMPORTED_MODULE_2__["TransactionIDAndExpiry"], {
                            id: id,
                            expiration: expiration
                        })
                    )
                ));

                var available = common_permission_utils__WEBPACK_IMPORTED_MODULE_10__["default"].listToIDs(proposal.proposal.get("available_" + type + "_approvals"));
                var availableKeys = common_permission_utils__WEBPACK_IMPORTED_MODULE_10__["default"].listToIDs(proposal.proposal.get("available_key_approvals"));

                var required = common_permission_utils__WEBPACK_IMPORTED_MODULE_10__["default"].listToIDs(proposal.proposal.get("required_" + type + "_approvals"));
                var requiredPermissions = common_permission_utils__WEBPACK_IMPORTED_MODULE_10__["default"].unnest(required, type);

                var _finalRequiredPerms = Object(_Modal_ProposalApproveModal__WEBPACK_IMPORTED_MODULE_6__["finalRequiredPerms"])(requiredPermissions, available, availableKeys),
                    _finalRequiredPerms2 = _slicedToArray(_finalRequiredPerms, 2),
                    accounts = _finalRequiredPerms2[0],
                    keys = _finalRequiredPerms2[1];

                var accountNames = [];

                if (accounts.length) {
                    accounts.forEach(function (account) {
                        if (account && !proposal.proposal.get("available_" + type + "_approvals").includes(account)) {
                            accountNames.push(account);
                        }
                    });
                }

                var keyNames = [];
                if (keys.length) {
                    keys.forEach(function (key) {
                        var isMine = stores_AccountStore__WEBPACK_IMPORTED_MODULE_12__["default"].isMyKey(key);
                        if (isMine && !proposal.proposal.get("available_key_approvals").includes(key)) {
                            keyNames.push(key);
                        }
                    });
                }

                var canApprove = accountNames.length + keyNames.length > 0;

                result.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    {
                        className: "top-left-align",
                        key: proposalId + "_content"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        text
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        requiredPermissions.map(function (account, index) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "list-item",
                                    key: proposalId + "_approver_" + index
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    subpage: "permissions",
                                    account: account.id
                                })
                            );
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_NestedApprovalState__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            proposal: proposal.proposal.get("id"),
                            type: type
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { className: "approval-buttons" },
                        isScam ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.propose_scam"),
                                className: "tooltip has-error scam-error"
                            },
                            "SCAM"
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                onClick: canApprove ? _this2._onApproveModal.bind(_this2, proposalId, "approve") : function () {},
                                className: "button primary hollow" + (canApprove ? "" : " hidden")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.approve" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_ProposalApproveModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            ref: proposalId + "_" + "approve",
                            modalId: proposalId + "_" + "approve",
                            account: proposal.account.get("id"),
                            proposal: proposalId,
                            action: "approve"
                        }),
                        canReject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                onClick: _this2._onApproveModal.bind(_this2, proposalId, "reject"),
                                className: "button primary hollow"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.reject" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_ProposalApproveModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            ref: proposalId + "_" + "reject",
                            modalId: proposalId + "_" + "reject",
                            account: proposal.account.get("id"),
                            proposal: proposalId,
                            action: "reject"
                        })
                    )
                ));
                result.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: proposalId + "_separator" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { colSpan: "4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                    )
                ));
                return result;
            }, []);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                {
                    className: "table proposals compact " + this.props.className
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.proposals" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.approvers" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.status" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "proposal.action" })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    proposalRows
                )
            );
        }
    }]);

    return Proposals;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Proposals.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(Proposals));

/***/ }),

/***/ 2528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalRequiredPerms", function() { return finalRequiredPerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1011);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(549);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(589);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(585);
/* harmony import */ var _Account_NestedApprovalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2529);
/* harmony import */ var common_permission_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2530);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(416);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var finalRequiredPerms = function finalRequiredPerms(requiredPermissions, available, availableKeys) {
    var finalRequired = [];

    requiredPermissions.forEach(function (account) {
        finalRequired = finalRequired.concat(account.getMissingSigs(available));
    });

    var finalRequiredKeys = [];

    requiredPermissions.forEach(function (account) {
        finalRequiredKeys = finalRequiredKeys.concat(account.getMissingKeys(availableKeys));
    });

    return [finalRequired, finalRequiredKeys];
};

var ProposalApproveModal = function (_React$Component) {
    _inherits(ProposalApproveModal, _React$Component);

    function ProposalApproveModal(props) {
        _classCallCheck(this, ProposalApproveModal);

        var _this = _possibleConstructorReturn(this, (ProposalApproveModal.__proto__ || Object.getPrototypeOf(ProposalApproveModal)).call(this));

        _this.state = {
            active: null,
            key: null,
            owner: null,
            payee: null
        };
        return _this;
    }

    _createClass(ProposalApproveModal, [{
        key: "onActiveAccount",
        value: function onActiveAccount(accountMap, keyMap, type, account) {
            var newState = {};

            if (keyMap[account]) {
                newState["key"] = account;
                newState[type] = null;
            } else if (account) {
                newState[type] = accountMap[account];
                newState["key"] = null;
            } else {
                newState[type] = null;
                newState["key"] = null;
            }
            this.setState(newState);
        }
    }, {
        key: "_onProposalAction",
        value: function _onProposalAction(oldProposal) {
            var _this2 = this;

            var proposalObject = oldProposal.toJS();
            var _state = this.state,
                active = _state.active,
                key = _state.key,
                owner = _state.owner,
                payee = _state.payee;


            var proposal = {
                fee_paying_account: payee || active,
                proposal: proposalObject.id,
                active_approvals_to_add: [],
                active_approvals_to_remove: [],
                owner_approvals_to_add: [],
                owner_approvals_to_remove: [],
                key_approvals_to_add: [],
                key_approvals_to_remove: []
            };

            var isAdd = this.props.action === "approve";

            var neededKeys = [];

            ["active", "owner", "key"].forEach(function (auth_type) {
                var value = _this2.state[auth_type];
                if (value) {
                    var hasValue = proposalObject["available_" + auth_type + "_approvals"].indexOf(value) !== -1;
                    if (isAdd && !hasValue || !isAdd && hasValue) {
                        if (_this2.props.action === "approve") {
                            proposal[auth_type + "_approvals_to_add"] = [value];
                            if (auth_type === "key") neededKeys.push(value);
                        } else if (_this2.props.action === "reject") {
                            proposal[auth_type + "_approvals_to_remove"] = [value];
                            if (auth_type === "key") neededKeys.push(value);
                        }
                    }
                }
            });

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_9__["default"].new_transaction();
            tr.add_type_operation("proposal_update", proposal);
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__["default"].process_transaction(tr, null, true, neededKeys);

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "onChangePayee",
        value: function onChangePayee(account) {
            var fullAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(account);

            if (fullAccount) {
                this.setState({
                    payee: fullAccount.get("id")
                });
            }
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                proposal = _props.proposal,
                type = _props.type;


            var accountNames = [];
            var accountMap = {};
            var isAdd = this.props.action === "approve";

            if (this.props.accounts.length) {
                this.props.accounts.forEach(function (account) {
                    var accountCheck = isAdd ? account && !proposal.get("available_" + type + "_approvals").includes(account.get("id")) : account && proposal.get("available_" + type + "_approvals").includes(account.get("id"));
                    if (accountCheck) {
                        accountMap[account.get("name")] = account.get("id");
                        accountNames.push(account.get("name"));
                    }
                });
            }

            var keyNames = [];
            var keyMap = {};
            if (this.props.keys.length) {
                this.props.keys.forEach(function (key) {
                    var isMine = stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].isMyKey(key);
                    var hasValue = proposal.get("available_key_approvals").includes(key);
                    if (isMine && isAdd && !hasValue || isMine && !isAdd && hasValue) {
                        keyMap[key] = true;
                        keyNames.push(key);
                    }
                });
            }

            var myAccounts = stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].getMyAccounts();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h4",
                            null,
                            isAdd ? "Add approval" : "Remove approval"
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: { paddingRight: "20%" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_NestedApprovalState__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            expanded: true,
                            proposal: proposal.get("id"),
                            type: type,
                            added: isAdd ? this.state.key ? this.state.key : this.state[type] || null : null,
                            removed: !isAdd ? this.state.key ? this.state.key : this.state[type] || null : null,
                            noFail: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block full-width-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "full-width-content form-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "modal.proposals.pay_with",
                                component: "label"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                account_names: myAccounts,
                                onChange: this.onChangePayee.bind(this)
                            })
                        ),
                        accountNames.length || keyNames.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "full-width-content form-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "modal.proposals.approval_" + (isAdd ? "add" : "remove"),
                                component: "label"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                account_names: accountNames.concat(keyNames),
                                onChange: this.onActiveAccount.bind(this, accountMap, keyMap, type)
                            })
                        ) : null,
                         false ? undefined : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "submit",
                            className: "button",
                            onClick: this._onProposalAction.bind(this, proposal),
                            value: isAdd ? "Approve" : "Remove"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: this.onCancel.bind(this),
                                className: " button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.cancel" })
                        )
                    )
                )
            );
        }
    }]);

    return ProposalApproveModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ProposalApproveModal.propTypes = {
    accounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccountsList
};

ProposalApproveModal = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(ProposalApproveModal);

var FirstLevel = function (_React$Component2) {
    _inherits(FirstLevel, _React$Component2);

    function FirstLevel() {
        _classCallCheck(this, FirstLevel);

        var _this3 = _possibleConstructorReturn(this, (FirstLevel.__proto__ || Object.getPrototypeOf(FirstLevel)).call(this));

        _this3._updateState = _this3._updateState.bind(_this3);
        return _this3;
    }

    _createClass(FirstLevel, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateState();

            bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].subscribe(this._updateState);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].unsubscribe(this._updateState);
        }
    }, {
        key: "_updateState",
        value: function _updateState() {
            var _props2 = this.props,
                proposal = _props2.proposal,
                account = _props2.account;

            var type = proposal.get("required_active_approvals").size ? "active" : "owner";

            var required = common_permission_utils__WEBPACK_IMPORTED_MODULE_11__["default"].listToIDs(proposal.get("required_" + type + "_approvals"));
            var available = common_permission_utils__WEBPACK_IMPORTED_MODULE_11__["default"].listToIDs(proposal.get("available_" + type + "_approvals"));
            var availableKeys = common_permission_utils__WEBPACK_IMPORTED_MODULE_11__["default"].listToIDs(proposal.get("available_key_approvals"));

            this.setState({
                requiredPermissions: common_permission_utils__WEBPACK_IMPORTED_MODULE_11__["default"].unnest(required, type),
                available: available,
                availableKeys: availableKeys,
                type: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var action = this.props.action;
            var _state2 = this.state,
                requiredPermissions = _state2.requiredPermissions,
                available = _state2.available,
                availableKeys = _state2.availableKeys,
                type = _state2.type;

            var _finalRequiredPerms = finalRequiredPerms(requiredPermissions, available, availableKeys),
                _finalRequiredPerms2 = _slicedToArray(_finalRequiredPerms, 2),
                finalRequired = _finalRequiredPerms2[0],
                finalRequiredKeys = _finalRequiredPerms2[1];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProposalApproveModal, _extends({}, this.props, {
                type: type,
                accounts: action === "approve" ? finalRequired : available,
                keys: action === "approve" ? finalRequiredKeys : availableKeys
            }));
        }
    }]);

    return FirstLevel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FirstLevel.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    proposal: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired
};

FirstLevel = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(FirstLevel);

var ModalWrapper = function (_React$Component3) {
    _inherits(ModalWrapper, _React$Component3);

    function ModalWrapper() {
        _classCallCheck(this, ModalWrapper);

        var _this4 = _possibleConstructorReturn(this, (ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call(this));

        _this4.state = {
            open: false
        };
        return _this4;
    }

    _createClass(ModalWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this5 = this;

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(this.props.modalId, function (msg, data) {
                _this5.setState({
                    open: data === "open"
                });
            });
        }
    }, {
        key: "show",
        value: function show() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(this.props.modalId, "open");
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                modalId = _props3.modalId,
                proposal = _props3.proposal;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                { id: modalId, overlay: true, ref: modalId },
                this.state.open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FirstLevel, this.props)
                ) : null
            );
        }
    }]);

    return ModalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalWrapper);

/***/ }),

/***/ 2529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(590);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1332);
/* harmony import */ var common_permission_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2530);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
/* harmony import */ var _NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2531);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var AccountPermissionTree = function (_React$Component) {
    _inherits(AccountPermissionTree, _React$Component);

    function AccountPermissionTree(props) {
        _classCallCheck(this, AccountPermissionTree);

        var _this = _possibleConstructorReturn(this, (AccountPermissionTree.__proto__ || Object.getPrototypeOf(AccountPermissionTree)).call(this, props));

        _this.handleExpandToggle = function () {
            _this.setState({ expanded: !_this.state.expanded });
        };

        _this.state = { expanded: !!props.expanded };
        return _this;
    }

    _createClass(AccountPermissionTree, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                available = _props.available,
                availableKeys = _props.availableKeys,
                permission = _props.permission,
                threshold = _props.threshold,
                level = _props.level,
                maxAuthorityDepth = _props.maxAuthorityDepth,
                hideRoot = _props.hideRoot;
            var expanded = this.state.expanded;


            var isOK = Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["isApproved"])(permission, available, availableKeys);
            var isNested = permission.isNested();
            var isMultiSig = permission.isMultiSig();

            var notNestedWeight = Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["notNestdWeight"])(permission.weight, threshold) || 1;

            var nestedWeight = Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["statusText"])(permission, available, availableKeys);

            var authorityDepthOverflow = level >= maxAuthorityDepth;

            var rootPerm = !isNested && !isMultiSig ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { colSpan: "2" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ApprovedIcon"], { approved: isOK }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        subpage: "permissions",
                        account: account.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    !isNested && notNestedWeight ? "" + (notNestedWeight && notNestedWeight.length === 2 ? "\xA0\xA0" : "") + notNestedWeight + " " : null
                )
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { colSpan: "2" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ApprovedIcon"], { approved: isOK }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        subpage: "permissions",
                        account: account.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    expanded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: isOK ? "success-text" : "" },
                        notNestedWeight
                    ) : notNestedWeight && "" + (notNestedWeight && notNestedWeight.length === 2 ? "\xA0\xA0" : "") + notNestedWeight + " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ExpandButton"], {
                        onToggle: this.handleExpandToggle,
                        expanded: expanded
                    }),
                    expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "appended" },
                        "(",
                        nestedWeight,
                        ")"
                    ),
                    authorityDepthOverflow ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["AuthorityDepthOverflowWarning"], null) : Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["hasAuthorityDepthProblem"])(maxAuthorityDepth, permission, level) && !expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ChildAuthorityDepthOverflowWarning"], null)
                )
            );

            var status = [];

            if ((isNested || isMultiSig) && expanded) {
                permission.accounts.forEach(function (subAccount) {
                    status.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoundAccountPermissionTree, {
                        key: subAccount.id,
                        account: subAccount.id,
                        accounts: subAccount.accounts,
                        permission: subAccount,
                        available: available,
                        availableKeys: availableKeys,
                        threshold: permission.threshold,
                        level: level + 1,
                        maxAuthorityDepth: maxAuthorityDepth
                    }));
                });

                if (permission.keys.length) {
                    permission.keys.forEach(function (key) {
                        return status.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["KeyPermissionBranch"], {
                            key: key.id,
                            permission: key,
                            available: availableKeys,
                            level: level + (hideRoot ? 0 : 1),
                            weight: Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["notNestdWeight"])(key.weight, threshold)
                        }));
                    });
                }
            }

            return status.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tbody",
                null,
                hideRoot || rootPerm,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "td",
                        { colSpan: "3", className: "heading-perm" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: hideRoot ? "" : "table-container" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "table",
                                null,
                                status
                            )
                        ),
                        expanded && level === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "spacer" })
                    )
                )
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tbody",
                null,
                rootPerm
            );
        }
    }]);

    return AccountPermissionTree;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AccountPermissionTree.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    accounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList,
    level: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
};
AccountPermissionTree.defaultProps = {
    level: 0
};

var BoundAccountPermissionTree = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountPermissionTree);

var FirstLevel = function (_React$Component2) {
    _inherits(FirstLevel, _React$Component2);

    function FirstLevel(props) {
        _classCallCheck(this, FirstLevel);

        var _this2 = _possibleConstructorReturn(this, (FirstLevel.__proto__ || Object.getPrototypeOf(FirstLevel)).call(this, props));

        _this2.handleExpandToggle = function () {
            return _this2.setState({ expanded: !_this2.state.expanded });
        };

        _this2.state = {
            requiredPermissions: [],
            expanded: props.expanded
        };

        _this2._updateState = _this2._updateState.bind(_this2);
        return _this2;
    }

    _createClass(FirstLevel, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateState();

            bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].subscribe(this._updateState);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].unsubscribe(this._updateState);
        }
    }, {
        key: "_updateState",
        value: function _updateState() {
            var required = common_permission_utils__WEBPACK_IMPORTED_MODULE_5__["default"].listToIDs(this.props.required);
            var available = common_permission_utils__WEBPACK_IMPORTED_MODULE_5__["default"].listToIDs(this.props.available);

            this.setState({
                requiredPermissions: common_permission_utils__WEBPACK_IMPORTED_MODULE_5__["default"].unnest(required, this.props.type),
                required: required,
                available: available
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                type = _props2.type,
                added = _props2.added,
                removed = _props2.removed,
                availableKeys = _props2.availableKeys,
                globalObject = _props2.globalObject,
                reviewPeriodTime = _props2.reviewPeriodTime,
                noFail = _props2.noFail;
            var _state = this.state,
                requiredPermissions = _state.requiredPermissions,
                required = _state.required,
                available = _state.available,
                expanded = _state.expanded;


            available = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(available);
            availableKeys = availableKeys.toJS();

            if (added) {
                available.push(added);
                availableKeys.push(added);
            }

            if (removed) {
                if (available.indexOf(removed) !== -1) {
                    available.splice(available.indexOf(removed), 1);
                }
                if (availableKeys.indexOf(removed) !== -1) {
                    availableKeys.splice(availableKeys.indexOf(removed), 1);
                }
            }

            var approvedCount = requiredPermissions.reduce(function (total, perm) {
                return total + (Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["isApproved"])(perm, available, availableKeys) ? 1 : 0);
            }, 0);
            var approversCount = requiredPermissions.length;
            var isOK = approvedCount === approversCount;

            var failed = isOK && !reviewPeriodTime && !noFail;
            var pendingReview = isOK && reviewPeriodTime;

            var maxAuthorityDepth = globalObject.get("parameters").get("max_authority_depth");

            var onePerm = requiredPermissions.length === 1;
            var oPermission = onePerm ? requiredPermissions[0] : null;

            var nestedWeight = !onePerm && approvedCount + " / " + approversCount;

            var rows = requiredPermissions.map(function (account) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoundAccountPermissionTree, {
                    key: account.id,
                    account: account.id,
                    accounts: account.accounts,
                    permission: account,
                    available: available,
                    availableKeys: availableKeys,
                    expanded: _this3.props.expanded || onePerm,
                    level: 0,
                    maxAuthorityDepth: maxAuthorityDepth,
                    hideRoot: onePerm
                });
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "nested-approval-state" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "root-status" },
                    failed ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["Failed"], null) : pendingReview ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["Review"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["Pending"], null),
                    " ",
                    !oPermission ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        "(",
                        nestedWeight,
                        ")"
                    ) : oPermission.threshold > 1 && Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["statusText"])(oPermission, available, availableKeys),
                    (!oPermission || oPermission.isMultiSig() || oPermission.isNested()) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ExpandButton"], {
                        onToggle: this.handleExpandToggle,
                        expanded: expanded
                    }),
                    !expanded && requiredPermissions.some(function (permission) {
                        return Object(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["hasAuthorityDepthProblem"])(maxAuthorityDepth, permission, 0);
                    }) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NestedApprovalStateLib__WEBPACK_IMPORTED_MODULE_7__["ChildAuthorityDepthOverflowWarning"], null)
                ),
                expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "table",
                    null,
                    rows
                )
            );
        }
    }]);

    return FirstLevel;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

FirstLevel.propTypes = {
    required: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList,
    available: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList
};
FirstLevel.defaultProps = {
    type: "active",
    added: null,
    removed: null
};

FirstLevel = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(FirstLevel);

var ProposalWrapper = function (_React$Component3) {
    _inherits(ProposalWrapper, _React$Component3);

    function ProposalWrapper() {
        _classCallCheck(this, ProposalWrapper);

        return _possibleConstructorReturn(this, (ProposalWrapper.__proto__ || Object.getPrototypeOf(ProposalWrapper)).apply(this, arguments));
    }

    _createClass(ProposalWrapper, [{
        key: "render",
        value: function render() {
            var _props3 = this.props,
                proposal = _props3.proposal,
                type = _props3.type;

            var available = proposal.get("available_" + type + "_approvals");
            var availableKeys = proposal.get("available_key_approvals");
            var required = proposal.get("required_" + type + "_approvals");

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstLevel, _extends({}, this.props, {
                required: required,
                available: available,
                availableKeys: availableKeys,
                reviewPeriodTime: proposal.get("review_period_time")
            }));
        }
    }]);

    return ProposalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ProposalWrapper.propTypes = {
    proposal: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};
ProposalWrapper.defaultProps = {
    type: "active",
    added: null,
    globalObject: "2.0.0"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(ProposalWrapper));

/***/ }),

/***/ 2530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);



var KeyAuth = function KeyAuth(auth) {
    var _this = this;

    this.id = auth.toJS ? auth.get(0) : auth[0];
    this.weight = auth.toJS ? auth.get(1) : auth[1];

    this.isAvailable = function (auths) {
        return auths.includes ? auths.includes(_this.id) : auths.indexOf(_this) !== -1;
    };
};

var permissionUtils = {
    AccountPermission: function AccountPermission(account, weight, type) {
        var _this2 = this;

        this.id = account.get("id");
        this.weight = weight;
        this.threshold = account.getIn([type, "weight_threshold"]);
        this.accounts = [];
        this.keys = account.getIn([type, "key_auths"]).map(function (auth) {
            return new KeyAuth(auth);
        }).toArray();

        this.isAvailable = function (auths) {
            return auths.includes ? auths.includes(_this2.id) : auths.indexOf(_this2) !== -1;
        };

        this._sumWeights = function (auths) {
            if (!_this2.isNested() && !_this2.isMultiSig()) {
                return _this2.isAvailable(auths) ? _this2.weight : 0;
            } else {
                var sum = _this2.accounts.reduce(function (status, account) {
                    return status + (account._sumWeights(auths) ? account.weight : 0);
                }, 0);

                return Math.floor(sum / _this2.threshold);
            }
        };

        this.getStatus = function (auths, keyAuths) {
            if (!_this2.isNested()) {
                var sum = _this2._sumWeights(auths);
                if (_this2.isMultiSig()) {
                    sum += _this2.sumKeys(keyAuths);
                }
                return sum;
            } else {
                var _sum = _this2.accounts.reduce(function (status, account) {
                    return status + account._sumWeights(auths);
                }, 0);

                if (_this2.keys.length) {
                    _sum += _this2.sumKeys(keyAuths);
                }

                return _sum;
            }
        };

        this.sumKeys = function (keyAuths) {
            var keySum = _this2.keys.reduce(function (s, key) {
                return s + (key.isAvailable(keyAuths) ? key.weight : 0);
            }, 0);
            return keySum;
        };

        this.isNested = function () {
            return _this2.accounts.length > 0;
        };

        this.isMultiSig = function () {
            return _this2.keys.reduce(function (final, key) {
                return final || key.weight < _this2.threshold;
            }, false);
        };

        this.getMissingSigs = function (auths) {
            var missing = [];
            var nested = [];
            if (_this2.isNested()) {
                nested = _this2.accounts.reduce(function (a, account) {
                    return a.concat(account.getMissingSigs(auths));
                }, []);
            } else if (!_this2.isAvailable(auths)) {
                missing.push(_this2.id);
            }

            return missing.concat(nested);
        };

        this.getMissingKeys = function (auths) {
            var missing = [];
            var nested = [];
            if (_this2.keys.length && (_this2.isNested() || _this2.isMultiSig())) {
                _this2.keys.forEach(function (key) {
                    if (!key.isAvailable(auths)) {
                        missing.push(key.id);
                    }
                });
            }

            if (_this2.isNested()) {
                nested = _this2.accounts.reduce(function (a, account) {
                    return a.concat(account.getMissingKeys(auths));
                }, []);
            }

            return missing.concat(nested);
        };
    },

    listToIDs: function listToIDs(accountList) {
        var allAccounts = [];

        accountList.forEach(function (account) {
            if (account) {
                allAccounts.push(account.get ? account.get("id") : account);
            }
        });

        return allAccounts;
    },

    unravel: function unravel(accountPermission, type) {
        var _this3 = this;

        var recursive_count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (recursive_count < 3) {
            var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["ChainStore"].getAccount(accountPermission.id);
            if (account && account.getIn([type, "account_auths"]).size) {
                account.getIn([type, "account_auths"]).forEach(function (auth) {
                    var nestedAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["ChainStore"].getAccount(auth.get(0));
                    if (nestedAccount) {
                        accountPermission.accounts.push(_this3.unravel(new _this3.AccountPermission(nestedAccount, auth.get(1), type), type, recursive_count + 1));
                    }
                });
            }
        }

        return accountPermission;
    },

    unnest: function unnest(accounts, type) {
        var _this4 = this;

        var map = [];
        accounts.forEach(function (id) {
            var fullAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["ChainStore"].getAccount(id);
            var currentPermission = _this4.unravel(new _this4.AccountPermission(fullAccount, null, type), type);
            map.push(currentPermission);
        });

        return map;
    },

    flatten_auths: function flatten_auths(auths) {
        var existingAuths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();

        if (!auths.size) {
            return existingAuths;
        }

        auths.forEach(function (owner) {
            if (!existingAuths.includes(owner.get(0))) {
                existingAuths = existingAuths.push(owner.get(0));
            }
        });
        return existingAuths;
    }
};

/* harmony default export */ __webpack_exports__["default"] = (permissionUtils);

/***/ }),

/***/ 2531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityDepthOverflowWarning", function() { return AuthorityDepthOverflowWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildAuthorityDepthOverflowWarning", function() { return ChildAuthorityDepthOverflowWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pending", function() { return Pending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Failed", function() { return Failed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandButton", function() { return ExpandButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedIcon", function() { return ApprovedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPermissionBranch", function() { return KeyPermissionBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAuthorityDepthProblem", function() { return hasAuthorityDepthProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApproved", function() { return isApproved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusText", function() { return statusText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notNestdWeight", function() { return notNestdWeight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(802);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }

    _createClass(Tooltip, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a.rebuild();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                dataTip = _props.dataTip,
                content = _props.content;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    className: "tooltip " + className,
                    "data-html": true,
                    "data-tip": dataTip || counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate(content)
                },
                children
            );
        }
    }]);

    return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AuthorityDepthOverflowWarning = function AuthorityDepthOverflowWarning() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tooltip,
        {
            className: "error appended",
            content: "explorer.proposals.authority_depth_warning"
        },
        "/!\\"
    );
};

var ChildAuthorityDepthOverflowWarning = function ChildAuthorityDepthOverflowWarning() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tooltip,
        {
            className: "error appended",
            content: "explorer.proposals.children_authority_depth_warning"
        },
        "/!\\"
    );
};

var Pending = function Pending() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tooltip,
        { className: "warning", content: "explorer.proposals.pending_approval" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.proposals.pending" })
    );
};

var Review = function Review() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tooltip,
        { className: "warning", content: "explorer.proposals.pending_review" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.proposals.review" })
    );
};

var Failed = function Failed() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tooltip,
        { className: "error", content: "explorer.proposals.failed_execute" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.proposals.failed" })
    );
};

var ExpandButton = function ExpandButton(_ref) {
    var onToggle = _ref.onToggle,
        expanded = _ref.expanded;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        { className: "expand-button", onClick: onToggle },
        "[",
        expanded ? "-" : "+",
        "]"
    );
};

var ApprovedIcon = function ApprovedIcon(_ref2) {
    var approved = _ref2.approved;
    return approved ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "checkmark-circle",
        size: "1x",
        className: "success",
        title: "icons.checkmark_circle.operation_succeed"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "cross-circle",
        size: "1x",
        className: "error",
        title: "icons.cross_circle.operation_failed"
    });
};

var KeyPermissionBranch = function KeyPermissionBranch(_ref3) {
    var available = _ref3.available,
        permission = _ref3.permission,
        weight = _ref3.weight,
        level = _ref3.level;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "tbody",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tr",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "td",
                { colSpan: "2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApprovedIcon, { approved: permission.isAvailable(available) }),
                permission.id.substr(0, 20 - 4 * level),
                "..."
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "td",
                null,
                weight
            )
        )
    );
};

var hasAuthorityDepthProblem = function hasAuthorityDepthProblem(maxAuthorityDepth, permission) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (level > maxAuthorityDepth) {
        return true;
    } else if (!permission.isNested() && !permission.isMultiSig()) {
        return false;
    } else {
        return permission.accounts.some(function (subAccount) {
            return hasAuthorityDepthProblem(maxAuthorityDepth, subAccount, level + 1);
        });
    }
};

var getStatus = function getStatus(permission, available, availableKeys) {
    return permission.accounts.reduce(function (amount, subPermission) {
        return amount + (isApproved(subPermission, available, availableKeys) ? subPermission.weight : 0);
    }, 0) + permission.keys.reduce(function (amount, key) {
        return amount + (key.isAvailable(availableKeys) ? key.weight : 0);
    }, 0);
};

var isApproved = function isApproved(permission, available, availableKeys) {
    return permission.isNested() || permission.isMultiSig() ? getStatus(permission, available, availableKeys) >= permission.threshold : permission.isAvailable(available);
};

var statusText = function statusText(permission, available, availableKeys) {
    return permission && permission.threshold > 10 ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].get_percentage(permission.getStatus(available, availableKeys), permission.threshold) + " / 100%" : permission.getStatus(available, availableKeys) + " / " + permission.threshold;
};

var notNestdWeight = function notNestdWeight(weight, threshold) {
    return threshold && threshold > 10 ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].get_percentage(weight, threshold) : weight;
};

/***/ }),

/***/ 2532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Exchange_MyOpenOrders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2363);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(582);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(730);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1265);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var AccountOrders = function (_React$Component) {
    _inherits(AccountOrders, _React$Component);

    function AccountOrders(props) {
        _classCallCheck(this, AccountOrders);

        var _this = _possibleConstructorReturn(this, (AccountOrders.__proto__ || Object.getPrototypeOf(AccountOrders)).call(this, props));

        _this.state = {
            selectedOrders: [],
            filterValue: ""
        };
        return _this;
    }

    _createClass(AccountOrders, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var cancelHeader = document.getElementById("cancelAllOrders");

            if (cancelHeader) {
                cancelHeader.addEventListener("click", function () {
                    var orders = this._getFilteredOrders.call(this);
                    orders = orders.toJS ? orders.toJS() : orders;

                    this.setState({ selectedOrders: orders });

                    var checkboxes = document.querySelectorAll(".orderCancel");

                    checkboxes.forEach(function (item) {
                        if (!item.checked) item.checked = true;
                    });
                }.bind(this));
            }
        }
    }, {
        key: "_getFilteredOrders",
        value: function _getFilteredOrders() {
            var filterValue = this.state.filterValue;


            var orders = this.props.account.get("orders") || [];

            return orders.filter(function (item) {
                var order = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(item).toJS();
                var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(order.sell_price.base.asset_id);
                var quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(order.sell_price.quote.asset_id);

                var baseSymbol = base.get("symbol").toLowerCase();
                var quoteSymbol = quote.get("symbol").toLowerCase();

                return baseSymbol.indexOf(filterValue) > -1 || quoteSymbol.indexOf(filterValue) > -1;
            });
        }
    }, {
        key: "_cancelLimitOrder",
        value: function _cancelLimitOrder(orderID, e) {
            e.preventDefault();

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].cancelLimitOrder(this.props.account.get("id"), orderID, // order id to cancel
            false // Don't show normal confirms
            ).catch(function (err) {
                console.log("cancel order error:", err);
            });
        }
    }, {
        key: "_cancelLimitOrders",
        value: function _cancelLimitOrders(orderId) {
            var _this2 = this;

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].cancelLimitOrders(this.props.account.get("id"), this.state.selectedOrders).then(function () {
                _this2.resetSelected();
            }).catch(function (err) {
                console.log("cancel orders error:", err);
            });
        }
    }, {
        key: "onFlip",
        value: function onFlip(marketId) {
            var setting = {};
            setting[marketId] = !this.props.marketDirections.get(marketId);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].changeMarketDirection(setting);
        }
    }, {
        key: "onCheckCancel",
        value: function onCheckCancel(orderId, evt) {
            var selectedOrders = this.state.selectedOrders;

            var checked = evt.target.checked;

            if (checked) {
                this.setState({ selectedOrders: selectedOrders.concat([orderId]) });
            } else {
                var index = selectedOrders.indexOf(orderId);

                if (index > -1) {
                    this.setState({
                        selectedOrders: selectedOrders.slice(0, index).concat(selectedOrders.slice(index + 1))
                    });
                }
            }
        }
    }, {
        key: "setFilterValue",
        value: function setFilterValue(evt) {
            this.setState({ filterValue: evt.target.value.toLowerCase() });
        }
    }, {
        key: "resetSelected",
        value: function resetSelected() {
            this.setState({ selectedOrders: [] });

            var checkboxes = document.querySelectorAll(".orderCancel");

            checkboxes.forEach(function (item) {
                if (item.checked) item.checked = false;
            });
        }
    }, {
        key: "cancelSelected",
        value: function cancelSelected() {
            this._cancelLimitOrders.call(this);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                account = _props.account,
                marketDirections = _props.marketDirections;
            var _state = this.state,
                filterValue = _state.filterValue,
                selectedOrders = _state.selectedOrders;

            var cancel = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("account.perm.cancel");
            var markets = {};

            var marketOrders = {};

            if (!account.get("orders")) {
                return null;
            }

            var orders = account.get("orders");
            var ordersCount = orders.size;
            if (filterValue) {
                orders = this._getFilteredOrders.call(this);
            }

            orders.forEach(function (orderID) {
                var order = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(orderID).toJS();
                var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(order.sell_price.base.asset_id);
                var quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(order.sell_price.quote.asset_id);

                if (base && quote) {
                    var _assets;

                    var assets = (_assets = {}, _defineProperty(_assets, base.get("id"), { precision: base.get("precision") }), _defineProperty(_assets, quote.get("id"), { precision: quote.get("precision") }), _assets);
                    // let baseID = parseInt(order.sell_price.base.asset_id.split(".")[2], 10);
                    // let quoteID = parseInt(order.sell_price.quote.asset_id.split(".")[2], 10);

                    // let marketName = quoteID > baseID ? `${quote.get("symbol")}_${base.get("symbol")}` : `${base.get("symbol")}_${quote.get("symbol")}`;

                    var _marketUtils$getMarke = common_market_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getMarketName(base, quote),
                        marketName = _marketUtils$getMarke.marketName;

                    var direction = marketDirections.get(marketName);

                    if (!markets[marketName]) {
                        if (direction) {
                            markets[marketName] = {
                                base: {
                                    id: base.get("id"),
                                    symbol: base.get("symbol"),
                                    precision: base.get("precision")
                                },
                                quote: {
                                    id: quote.get("id"),
                                    symbol: quote.get("symbol"),
                                    precision: quote.get("precision")
                                }
                            };
                        } else {
                            markets[marketName] = {
                                base: {
                                    id: quote.get("id"),
                                    symbol: quote.get("symbol"),
                                    precision: quote.get("precision")
                                },
                                quote: {
                                    id: base.get("id"),
                                    symbol: base.get("symbol"),
                                    precision: base.get("precision")
                                }
                            };
                        }
                    }
                    var limitOrder = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["LimitOrder"](order, assets, markets[marketName].quote.id);

                    var marketBase = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(markets[marketName].base.id);
                    var marketQuote = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(markets[marketName].quote.id);

                    if (!marketOrders[marketName]) {
                        marketOrders[marketName] = [];
                    }

                    marketOrders[marketName].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exchange_MyOpenOrders__WEBPACK_IMPORTED_MODULE_1__["OrderRow"], {
                        ref: markets[marketName].base.symbol,
                        key: order.id,
                        order: limitOrder,
                        base: marketBase,
                        quote: marketQuote,
                        cancel_text: cancel,
                        showSymbols: false,
                        invert: true,
                        onCancel: _this3._cancelLimitOrder.bind(_this3, order.id),
                        price: limitOrder.getPrice(),
                        dashboard: true,
                        isMyAccount: _this3.props.isMyAccount,
                        settings: _this3.props.settings,
                        onFlip: _this3.onFlip.bind(_this3, marketName),
                        onCheckCancel: _this3.onCheckCancel.bind(_this3, order.id)
                    }));
                }
            });

            var tables = [];

            var marketIndex = 0;
            for (var market in marketOrders) {
                if (marketOrders[market].length) {
                    tables.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        { key: market },
                        marketOrders[market].sort(function (a, b) {
                            return a.props.price - b.props.price;
                        })
                    ));
                    marketIndex++;
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content no-overflow no-padding",
                    style: { paddingBottom: 15 }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "header-selector" },
                    orders && ordersCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "text",
                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("account.filter_orders"),
                        style: {
                            display: "inline-block",
                            maxWidth: "50%",
                            marginRight: "1em",
                            marginBottom: "0"
                        },
                        onChange: this.setFilterValue.bind(this)
                    }) : null,
                    selectedOrders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button",
                            onClick: this.resetSelected.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "account.reset_orders" })
                    ) : null,
                    selectedOrders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button",
                            onClick: this.cancelSelected.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "account.submit_orders" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table table-striped dashboard-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exchange_MyOpenOrders__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], {
                        settings: this.props.settings,
                        dashboard: true,
                        isMyAccount: this.props.isMyAccount
                    }),
                    tables,
                    this.props.children
                )
            );
        }
    }]);

    return AccountOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountOrders = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(AccountOrders, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
    },
    getProps: function getProps() {
        return {
            marketDirections: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().marketDirections
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (AccountOrders);

/***/ }),

/***/ 2533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMarginStatus", function() { return checkMarginStatus; });
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _MarketClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);



var asyncCache = {};
var checkMarginStatusTTL = 60000 * 1; // 1 minute

function checkMarginStatus(account) {
    if (!account || account && !account.get("call_orders", []).size) return Promise.resolve(null);

    var key = account.get("name") + JSON.stringify(account.get("call_orders"));
    if (asyncCache[key]) {
        if (asyncCache[key].result) {
            return Promise.resolve(asyncCache[key].result);
        }
        return new Promise(function (res, rej) {
            asyncCache[key].queue.push({ res: res, rej: rej });
        });
    }
    return new Promise(function (res, rej) {
        asyncCache[key] = { queue: [{ res: res, rej: rej }], result: null };

        Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["FetchChain"])("getObject", account.get("call_orders").toArray()).then(function (call_orders) {
            var assets = [];
            call_orders.forEach(function (a) {
                var baseId = a.getIn(["call_price", "base", "asset_id"]);
                var quoteId = a.getIn(["call_price", "quote", "asset_id"]);
                if (assets.indexOf(baseId) === -1) assets.push(baseId);
                if (assets.indexOf(quoteId) === -1) assets.push(quoteId);
            });
            Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["FetchChain"])("getAsset", assets, 6000).then(function (assets) {
                var assetsMap = {};
                assets.forEach(function (asset) {
                    assetsMap[asset.get("id")] = asset.toJS();
                });
                var status = {};
                call_orders.forEach(function (co) {
                    var debtAsset = assetsMap[co.getIn(["call_price", "quote", "asset_id"])];
                    var collateralAsset = assetsMap[co.getIn(["call_price", "base", "asset_id"])];
                    var sp = debtAsset.bitasset.current_feed.settlement_price;
                    if (sp.base.asset_id === sp.quote.asset_id) {
                        status[debtAsset.id] = { ratio: null };
                    } else {
                        var collateral = new _MarketClasses__WEBPACK_IMPORTED_MODULE_1__["Asset"]({
                            amount: co.get("collateral"),
                            asset_id: collateralAsset.id,
                            precision: collateralAsset.precision
                        });
                        var debt = new _MarketClasses__WEBPACK_IMPORTED_MODULE_1__["Asset"]({
                            amount: co.get("debt"),
                            asset_id: debtAsset.id,
                            precision: debtAsset.precision
                        });
                        var mr = debtAsset.bitasset.current_feed.maintenance_collateral_ratio / 1000;
                        var price = new _MarketClasses__WEBPACK_IMPORTED_MODULE_1__["FeedPrice"]({
                            priceObject: debtAsset.bitasset.current_feed.settlement_price,
                            market_base: debtAsset.bitasset.current_feed.settlement_price.quote.asset_id,
                            sqr: debtAsset.bitasset.current_feed.maximum_short_squeeze_ratio,
                            assets: assetsMap
                        });
                        var current = {
                            ratio: collateral.getAmount({ real: true }) / (debt.getAmount({ real: true }) / price.toReal())
                        };
                        if (isNaN(current.ratio)) return null;
                        if (current.ratio < mr) {
                            current.statusClass = "danger";
                        } else if (current.ratio < mr + 0.5) {
                            current.statusClass = "warning";
                        } else {
                            current.statusClass = null;
                        }
                        status[debtAsset.id] = current;
                    }
                });
                asyncCache[key].queue.forEach(function (promise) {
                    promise.res(status);
                });
                asyncCache[key] = { result: status };
                setTimeout(function () {
                    delete asyncCache[key];
                }, checkMarginStatusTTL);
            });
        }).catch(function () {
            asyncCache[key].queue.forEach(function (promise) {
                promise.rej();
            });
        });
    });
}



/***/ }),

/***/ 2534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2462);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2535);
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2536);
/* harmony import */ var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1265);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1266);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(709);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_2___default()(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.Highcharts);
highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3___default()(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.Highcharts);

var AccountTreemap = function (_React$Component) {
    _inherits(AccountTreemap, _React$Component);

    function AccountTreemap() {
        _classCallCheck(this, AccountTreemap);

        return _possibleConstructorReturn(this, (AccountTreemap.__proto__ || Object.getPrototypeOf(AccountTreemap)).apply(this, arguments));
    }

    _createClass(AccountTreemap, [{
        key: "render",


        // shouldComponentUpdate(nextProps) {
        //     return (
        //         !utils.are_equal_shallow(nextProps.balanceObjects, this.props.balanceObjects) ||
        //         !utils.are_equal_shallow(nextProps.assets, this.props.assets)
        //     );
        // }

        value: function render() {
            var _props = this.props,
                balanceObjects = _props.balanceObjects,
                core_asset = _props.core_asset,
                marketStats = _props.marketStats,
                preferredAsset = _props.preferredAsset;


            var accountBalances = null;

            if (balanceObjects && balanceObjects.length > 0) {
                var totalValue = 0;
                accountBalances = balanceObjects.forEach(function (balance) {
                    if (!balance) return;
                    var balanceObject = typeof balance == "string" ? bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(balance) : balance;
                    var asset_type = balanceObject.get("asset_type");
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(asset_type);
                    if (!asset || !preferredAsset) return;
                    var amount = Number(balanceObject.get("balance"));
                    var eqValue = common_market_utils__WEBPACK_IMPORTED_MODULE_9__["default"].convertValue(amount, preferredAsset, asset, marketStats, core_asset);

                    if (!eqValue) return;
                    var precision = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(preferredAsset.get("precision"));
                    totalValue += eqValue / precision;
                });

                accountBalances = balanceObjects.map(function (balance, index) {
                    if (!balance) return null;
                    var balanceObject = typeof balance == "string" ? bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(balance) : balance;
                    var asset_type = balanceObject.get("asset_type");
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(asset_type);
                    if (!asset) return null;
                    var amount = Number(balanceObject.get("balance"));

                    var eqValue = common_market_utils__WEBPACK_IMPORTED_MODULE_9__["default"].convertValue(amount, preferredAsset, asset, marketStats, core_asset);

                    if (!eqValue) {
                        return null;
                    }

                    var precision = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(preferredAsset.get("precision"));
                    var finalValue = eqValue / precision;
                    var percent = finalValue / totalValue * 100;

                    /*
                    * Filter out assets that make up a small percentage of
                    * the total value of the account
                    */
                    if (percent < 0.5) return null;

                    return finalValue >= 1 ? {
                        name: asset.get("symbol") + " (" + (totalValue === 0 ? 0 : percent.toFixed(2)) + "%)",
                        value: finalValue,
                        color: react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.Highcharts.getOptions().colors[index]
                    } : null;
                }).filter(function (n) {
                    return !!n;
                });
            }

            if (accountBalances && accountBalances.length === 1 && accountBalances[0].value === 0) {
                accountBalances = null;
            }

            var config = {
                chart: {
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    height: 250,
                    spacingLeft: 0,
                    spacingRight: 0,
                    spacingBottom: 0
                },
                // colorAxis: {
                //     min: 0,
                //     minColor: "#ffffff",
                //     maxColor: ReactHighcharts.Highcharts.getOptions().colors[0]
                // },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    treemap: {
                        animation: false,
                        tooltip: {
                            pointFormatter: function pointFormatter() {
                                return "<b>" + this.name + "</b>: " + react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.Highcharts.numberFormat(this.value, 0) + " " + preferredAsset.get("symbol");
                            }
                        }
                    }
                },
                series: [{
                    type: "treemap",
                    levels: [{
                        level: 1,
                        layoutAlgorithm: "sliceAndDice",
                        dataLabels: {
                            enabled: true,
                            align: "center",
                            verticalAlign: "middle"
                        }
                    }],
                    data: accountBalances
                }],
                title: {
                    text: null
                }
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "account-treemap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a, { config: config })
            );
        }
    }]);

    return AccountTreemap;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountTreemap.propTypes = {
    assets: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAssetsList,
    preferredAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAsset.isRequired
};
AccountTreemap.defaultProps = {
    assets: [],
    preferredAsset: "1.3.0"
};


AccountTreemap = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountTreemap);

var AccountTreemapBalanceWrapper = function (_React$Component2) {
    _inherits(AccountTreemapBalanceWrapper, _React$Component2);

    function AccountTreemapBalanceWrapper() {
        _classCallCheck(this, AccountTreemapBalanceWrapper);

        return _possibleConstructorReturn(this, (AccountTreemapBalanceWrapper.__proto__ || Object.getPrototypeOf(AccountTreemapBalanceWrapper)).apply(this, arguments));
    }

    _createClass(AccountTreemapBalanceWrapper, [{
        key: "render",
        value: function render() {
            var assets = this.props.balanceObjects.filter(function (a) {
                return !!a;
            }).map(function (a) {
                return a.get("asset_type");
            });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountTreemap, _extends({
                preferredAsset: this.props.settings.get("unit", "1.3.0"),
                assets: assets
            }, this.props));
        }
    }]);

    return AccountTreemapBalanceWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountTreemapBalanceWrapper.propTypes = {
    balanceObjects: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainObjectsList,
    core_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAsset.isRequired
};
AccountTreemapBalanceWrapper.defaultProps = {
    balanceObjects: [],
    core_asset: "1.3.0"
};


AccountTreemapBalanceWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountTreemapBalanceWrapper);

var AccountTreemapWrapper = function (_React$Component3) {
    _inherits(AccountTreemapWrapper, _React$Component3);

    function AccountTreemapWrapper() {
        _classCallCheck(this, AccountTreemapWrapper);

        return _possibleConstructorReturn(this, (AccountTreemapWrapper.__proto__ || Object.getPrototypeOf(AccountTreemapWrapper)).apply(this, arguments));
    }

    _createClass(AccountTreemapWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_8___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"]],
                    inject: {
                        marketStats: function marketStats() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().allMarketStats;
                        },
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().settings;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountTreemapBalanceWrapper, _extends({}, this.props, {
                    ref: this.props.refCallback
                }))
            );
        }
    }]);

    return AccountTreemapWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountTreemapWrapper);

/***/ }),

/***/ 2537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2417);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1232);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var _Utility_MarketChangeComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2538);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2415);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1030);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(744);
/* harmony import */ var _Utility_EquivalentPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2539);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1333);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2464);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1262);
/* harmony import */ var bitsharesjs_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(416);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(709);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1259);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1266);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(802);
/* harmony import */ var _Icon_PulseIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2540);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(567);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1006);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(730);
/* harmony import */ var _Modal_SettleModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2541);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1233);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2420);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2421);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1282);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }































var AccountPortfolioList = function (_React$Component) {
    _inherits(AccountPortfolioList, _React$Component);

    function AccountPortfolioList() {
        _classCallCheck(this, AccountPortfolioList);

        var _this = _possibleConstructorReturn(this, (AccountPortfolioList.__proto__ || Object.getPrototypeOf(AccountPortfolioList)).call(this));

        _this.sortFunctions = {
            qty: function qty(a, b, force) {
                if (Number(this.qtyRefs[a.key]) < Number(this.qtyRefs[b.key])) return this.props.sortDirection || force ? -1 : 1;

                if (Number(this.qtyRefs[a.key]) > Number(this.qtyRefs[b.key])) return this.props.sortDirection || force ? 1 : -1;
            },
            alphabetic: function alphabetic(a, b, force) {
                if (a.key > b.key) return this.props.sortDirection || force ? 1 : -1;
                if (a.key < b.key) return this.props.sortDirection || force ? -1 : 1;
                return 0;
            },
            priceValue: function priceValue(a, b) {
                var aRef = this.priceRefs[a.key];
                var bRef = this.priceRefs[b.key];
                if (aRef && bRef) {
                    var aPrice = aRef.getFinalPrice(true);
                    var bPrice = bRef.getFinalPrice(true);
                    if (aPrice === null && bPrice !== null) return 1;
                    if (aPrice !== null && bPrice === null) return -1;
                    if (aPrice === null && bPrice === null) return this.sortFunctions.alphabetic(a, b, true);
                    return this.props.sortDirection ? aPrice - bPrice : bPrice - aPrice;
                }
            },
            totalValue: function totalValue(a, b) {
                var aRef = this.valueRefs[a.key];
                var bRef = this.valueRefs[b.key];
                if (aRef && bRef) {
                    var aValue = aRef.getValue();
                    var bValue = bRef.getValue();
                    if (!aValue && bValue) return 1;
                    if (aValue && !bValue) return -1;
                    if (!aValue && !bValue) return this.sortFunctions.alphabetic(a, b, true);
                    return this.props.sortDirection ? aValue - bValue : bValue - aValue;
                }
            },
            changeValue: function changeValue(a, b) {
                var aRef = this.changeRefs[a.key];
                var bRef = this.changeRefs[b.key];

                if (aRef && bRef) {
                    var aValue = aRef.getValue();
                    var bValue = bRef.getValue();
                    var aChange = parseFloat(aValue) != "NaN" ? parseFloat(aValue) : aValue;
                    var bChange = parseFloat(bValue) != "NaN" ? parseFloat(bValue) : bValue;
                    var direction = typeof this.props.sortDirection !== "undefined" ? this.props.sortDirection : true;

                    return direction ? aChange - bChange : bChange - aChange;
                }
            }
        };

        _this._renderBuy = function (symbol, canBuy, assetName, emptyCell, balance) {
            if (symbol === "BTS" && balance <= 100000) {
                // Precision of 5, 1 = 10^5
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: _this._showDepositWithdraw.bind(_this, "bridge_modal", assetName, false)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_PulseIcon__WEBPACK_IMPORTED_MODULE_20__["default"], {
                            onIcon: "dollar",
                            offIcon: "dollar-green",
                            title: "icons.dollar.buy",
                            duration: 1000,
                            className: "icon-14px"
                        })
                    )
                );
            } else {
                return canBuy && _this.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: _this._showDepositWithdraw.bind(_this, "bridge_modal", assetName, false)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            name: "dollar",
                            title: "icons.dollar.buy",
                            className: "icon-14px"
                        })
                    )
                ) : emptyCell;
            }
        };

        _this.state = {
            settleAsset: "1.3.0",
            depositAsset: null,
            withdrawAsset: null,
            bridgeAsset: null,
            allRefsAssigned: false
        };

        _this.qtyRefs = {};
        _this.priceRefs = {};
        _this.valueRefs = {};
        _this.changeRefs = {};
        for (var key in _this.sortFunctions) {
            _this.sortFunctions[key] = _this.sortFunctions[key].bind(_this);
        }
        _this._checkRefAssignments = _this._checkRefAssignments.bind(_this);
        return _this;
    }

    _createClass(AccountPortfolioList, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.refCheckInterval = setInterval(this._checkRefAssignments);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.refCheckInterval);
        }
    }, {
        key: "_checkRefAssignments",
        value: function _checkRefAssignments() {
            var _this2 = this;

            /*
            * In order for sorting to work all refs must be assigned, so we check
            * this here and update the state to trigger a rerender
            */
            if (!this.state.allRefsAssigned) {
                var refKeys = ["qtyRefs", "priceRefs", "valueRefs", "changeRefs"];
                var allRefsAssigned = refKeys.reduce(function (a, b) {
                    if (a === undefined) return !!Object.keys(_this2[b]).length;
                    return !!Object.keys(_this2[b]).length && a;
                }, undefined);
                if (allRefsAssigned) {
                    clearInterval(this.refCheckInterval);
                    this.setState({ allRefsAssigned: allRefsAssigned });
                }
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            var _this3 = this;

            return !common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].are_equal_shallow(ns, this.state) || !common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].are_equal_shallow(np.backedCoins, this.props.backedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].are_equal_shallow(np.balances, this.props.balances) || !common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].are_equal_shallow(np.balanceList, this.props.balanceList) || !common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].are_equal_shallow(np.optionalAssets, this.props.optionalAssets) || np.account !== this.props.account || np.visible !== this.props.visible || np.settings !== this.props.settings || np.hiddenAssets !== this.props.hiddenAssets || np.sortDirection !== this.props.sortDirection || np.sortKey !== this.props.sortKey || np.allMarketStats.reduce(function (a, value, key) {
                return common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].check_market_stats(value, _this3.props.allMarketStats.get(key)) || a;
            }, false);
        }
    }, {
        key: "triggerSend",
        value: function triggerSend(asset) {
            var _this4 = this;

            this.setState({ send_asset: asset }, function () {
                if (_this4.send_modal) _this4.send_modal.show();
            });
        }
    }, {
        key: "_onSettleAsset",
        value: function _onSettleAsset(id, e) {
            e.preventDefault();
            this.setState({
                settleAsset: id
            });

            this.refs.settlement_modal.show();
        }
    }, {
        key: "_hideAsset",
        value: function _hideAsset(asset, status) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_23__["default"].hideAsset(asset, status);
        }
    }, {
        key: "_showDepositModal",
        value: function _showDepositModal(asset, e) {
            var _this5 = this;

            e.preventDefault();
            this.setState({ depositAsset: asset }, function () {
                _this5.refs.deposit_modal_new.show();
            });
        }
    }, {
        key: "_showDepositWithdraw",
        value: function _showDepositWithdraw(action, asset, fiatModal, e) {
            var _setState,
                _this6 = this;

            e.preventDefault();
            this.setState((_setState = {}, _defineProperty(_setState, action === "bridge_modal" ? "bridgeAsset" : action === "deposit_modal" ? "depositAsset" : "withdrawAsset", asset), _defineProperty(_setState, "fiatModal", fiatModal), _setState), function () {
                _this6.refs[action].show();
            });
        }
    }, {
        key: "_getSeparator",
        value: function _getSeparator(render) {
            return render ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "\xA0|\xA0"
            ) : null;
        }
    }, {
        key: "_renderBalances",
        value: function _renderBalances(balanceList, optionalAssets, visible) {
            var _this7 = this;

            var _props = this.props,
                coreSymbol = _props.coreSymbol,
                preferredUnit = _props.preferredUnit,
                settings = _props.settings,
                hiddenAssets = _props.hiddenAssets,
                orders = _props.orders;

            var showAssetPercent = settings.get("showAssetPercent", false);

            var renderBorrow = function renderBorrow(asset, account) {
                var isBitAsset = asset && asset.has("bitasset_data_id");
                var modalRef = "cp_modal_" + asset.get("id");
                return {
                    isBitAsset: isBitAsset,
                    borrowModal: !isBitAsset ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        ref: modalRef,
                        modalId: "borrow_modal_" + asset.get("id"),
                        quote_asset: asset.get("id"),
                        backing_asset: asset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: account
                    }),
                    borrowLink: !isBitAsset ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: function onClick() {
                                react_tooltip__WEBPACK_IMPORTED_MODULE_12___default.a.hide();
                                _this7.refs[modalRef].show();
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            name: "dollar",
                            title: "icons.dollar.borrow",
                            className: "icon-14px"
                        })
                    )
                };
            };

            var balances = [];
            var emptyCell = "-";
            balanceList.forEach(function (balance) {
                var balanceObject = bitsharesjs_es__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(balance);
                if (!balanceObject) return;
                var asset_type = balanceObject.get("asset_type");
                var asset = bitsharesjs_es__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(asset_type);
                if (!asset) return;

                var directMarketLink = void 0,
                    settleLink = void 0,
                    transferLink = void 0;
                var symbol = "";

                var assetName = asset.get("symbol");
                var notCore = asset.get("id") !== "1.3.0";
                var notCorePrefUnit = preferredUnit !== coreSymbol;

                var _assetUtils$parseDesc = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(asset.getIn(["options", "description"])),
                    market = _assetUtils$parseDesc.market;

                symbol = asset.get("symbol");
                if (symbol.indexOf("OPEN.") !== -1 && !market) market = "USD";
                if (["RUDEX.GOLOS", "RUDEX.GBG"].indexOf(symbol) !== -1) market = "RUBLE";
                // let preferredMarket = market ? market : preferredUnit;
                var preferredMarket = market ? market : coreSymbol;

                /* Table content */
                directMarketLink = notCore ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                    { to: "/market/" + asset.get("symbol") + "_" + preferredMarket },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        name: "trade",
                        title: "icons.trade.trade",
                        className: "icon-14px"
                    })
                ) : notCorePrefUnit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                    { to: "/market/" + asset.get("symbol") + "_" + preferredUnit },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        name: "trade",
                        title: "icons.trade.trade",
                        className: "icon-14px"
                    })
                ) : emptyCell;
                transferLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                    { to: "/transfer?asset=" + asset.get("id") },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        name: "transfer",
                        title: "icons.transfer",
                        className: "icon-14px"
                    })
                );

                var _renderBorrow = renderBorrow(asset, _this7.props.account),
                    isBitAsset = _renderBorrow.isBitAsset,
                    borrowModal = _renderBorrow.borrowModal,
                    borrowLink = _renderBorrow.borrowLink;

                /* Popover content */


                settleLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    { onClick: _this7._onSettleAsset.bind(_this7, asset.get("id")) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        name: "settle",
                        title: "icons.settle",
                        className: "icon-14px"
                    })
                );

                var includeAsset = !hiddenAssets.includes(asset_type);
                var hasBalance = !!balanceObject.get("balance");
                var hasOnOrder = !!orders[asset_type];

                var backedCoin = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_13__["getBackedCoin"])(asset.get("symbol"), _this7.props.backedCoins);
                // const canDeposit =
                //     (backedCoin && backedCoin.depositAllowed) ||
                //     asset.get("symbol") == "BTS";
                var canDeposit = false; // disable till stable version

                // const canWithdraw =
                //     backedCoin &&
                //     backedCoin.withdrawalAllowed &&
                //     (hasBalance && balanceObject.get("balance") != 0);
                var canWithdraw = false; // disable till stable version

                var canBuy = !!_this7.props.bridgeCoins.get(symbol);
                var assetAmount = balanceObject.get("balance");

                _this7.qtyRefs[asset.get("symbol")] = common_utils__WEBPACK_IMPORTED_MODULE_21__["default"].get_asset_amount(assetAmount, asset);

                balances.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: asset.get("symbol"), style: { maxWidth: "100rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "left" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            replaceNoneToBts: false,
                            maxWidth: 30,
                            name: asset.get("symbol")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_10__["default"], { asset: asset.get("id") })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right" } },
                        hasBalance || hasOnOrder ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_2__["default"], { balance: balance, hide_asset: true }) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentPrice__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            refCallback: function refCallback(c) {
                                if (c && c.refs.bound_component) _this7.priceRefs[asset.get("symbol")] = c.refs.bound_component;
                            },
                            fromAsset: asset.get("id"),
                            pulsate: { reverse: true, fill: "forwards" },
                            hide_symbols: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketChangeComponent__WEBPACK_IMPORTED_MODULE_4__["Market24HourChangeComponent"], {
                            refCallback: function refCallback(c) {
                                if (c && c.refs.bound_component) _this7.changeRefs[asset.get("symbol")] = c.refs.bound_component;
                            },
                            base: asset.get("id"),
                            quote: preferredUnit,
                            marketId: asset.get("symbol") + "_" + preferredUnit,
                            hide_symbols: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        hasBalance || hasOnOrder ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_3__["BalanceValueComponent"], {
                            balance: balance,
                            toAsset: preferredUnit,
                            hide_asset: true,
                            refCallback: function refCallback(c) {
                                if (c && c.refs.bound_component) _this7.valueRefs[asset.get("symbol")] = c.refs.bound_component;
                            }
                        }) : null
                    ),
                    showAssetPercent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right" } },
                        hasBalance ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            balance: balance,
                            asPercentage: true
                        }) : null
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        transferLink
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        _this7._renderBuy(asset.get("symbol"), canBuy, assetName, emptyCell, balanceObject.get("balance"))
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        canDeposit && _this7.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                style: { cursor: "pointer" },
                                name: "deposit",
                                title: "icons.deposit.deposit",
                                className: "icon-14x",
                                onClick: _this7._showDepositModal.bind(_this7, assetName)
                            })
                        ) : emptyCell
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        canWithdraw && _this7.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    className: !canWithdraw ? "disabled" : "",
                                    onClick: canWithdraw ? _this7._showDepositWithdraw.bind(_this7, "withdraw_modal_new", assetName, false) : function () {}
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                    name: "withdraw",
                                    title: "icons.withdraw",
                                    className: "icon-14px"
                                })
                            )
                        ) : emptyCell
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        directMarketLink
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "inline-block",
                                "data-place": "bottom",
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.borrow", { asset: symbol })
                            },
                            borrowLink,
                            borrowModal
                        ) : emptyCell
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "inline-block",
                                "data-place": "bottom",
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.settle", { asset: symbol })
                            },
                            settleLink
                        ) : emptyCell
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "center" },
                            className: "column-hide-small",
                            "data-place": "bottom",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip." + (includeAsset ? "hide_asset" : "show_asset"))
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                style: { marginRight: 0 },
                                className: includeAsset ? "order-cancel" : "action-plus",
                                onClick: _this7._hideAsset.bind(_this7, asset_type, includeAsset)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                name: includeAsset ? "cross-circle" : "plus-circle",
                                title: includeAsset ? "icons.cross_circle.hide_asset" : "icons.plus_circle.show_asset",
                                className: "icon-14px"
                            })
                        )
                    )
                ));
            });

            if (optionalAssets) {
                optionalAssets.filter(function (asset) {
                    var isAvailable = false;
                    _this7.props.backedCoins.get("OPEN", []).forEach(function (coin) {
                        if (coin && coin.symbol === asset) {
                            isAvailable = true;
                        }
                    });
                    if (!!_this7.props.bridgeCoins.get(asset)) {
                        isAvailable = true;
                    }
                    var keep = true;
                    balances.forEach(function (a) {
                        if (a.key === asset) keep = false;
                    });
                    return keep && isAvailable;
                }).forEach(function (a) {
                    var asset = bitsharesjs_es__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAsset(a);
                    if (asset && _this7.props.isMyAccount) {
                        var includeAsset = !hiddenAssets.includes(asset.get("id"));

                        var thisAssetName = asset.get("symbol").split(".");
                        var canDeposit = !!_this7.props.backedCoins.get("OPEN", []).find(function (a) {
                            return a.backingCoinType === thisAssetName[1];
                        }) || !!_this7.props.backedCoins.get("RUDEX", []).find(function (a) {
                            return a.backingCoin === thisAssetName[1];
                        }) || asset.get("symbol") == "BTS";

                        var canBuy = !!_this7.props.bridgeCoins.get(asset.get("symbol"));

                        var notCore = asset.get("id") !== "1.3.0";

                        var _assetUtils$parseDesc2 = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(asset.getIn(["options", "description"])),
                            market = _assetUtils$parseDesc2.market;

                        if (asset.get("symbol").indexOf("OPEN.") !== -1 && !market) market = "USD";
                        var preferredMarket = market ? market : coreSymbol;

                        var directMarketLink = notCore ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                            {
                                to: "/market/" + asset.get("symbol") + "_" + preferredMarket
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                name: "trade",
                                title: "icons.trade.trade",
                                className: "icon-14px"
                            })
                        ) : emptyCell;

                        var _renderBorrow2 = renderBorrow(asset, _this7.props.account),
                            isBitAsset = _renderBorrow2.isBitAsset,
                            borrowModal = _renderBorrow2.borrowModal,
                            borrowLink = _renderBorrow2.borrowLink;

                        if (includeAsset && visible || !includeAsset && !visible) balances.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            {
                                key: asset.get("symbol"),
                                style: { maxWidth: "100rem" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "left" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    replaceNoneToBts: false,
                                    maxWidth: 30,
                                    name: asset.get("symbol")
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    asset: asset.get("id")
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "column-hide-small" },
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "column-hide-small" },
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { className: "column-hide-small" },
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "center" } },
                                canBuy && _this7.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: _this7._showDepositWithdraw.bind(_this7, "bridge_modal", a, false)
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                            name: "dollar",
                                            title: "icons.dollar.buy",
                                            className: "icon-14px"
                                        })
                                    )
                                ) : emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                canDeposit && _this7.props.isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                        style: { cursor: "pointer" },
                                        name: "deposit",
                                        title: "icons.deposit.deposit",
                                        className: "icon-14x",
                                        onClick: _this7._showDepositModal.bind(_this7, asset.get("symbol"))
                                    })
                                ) : emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "center" } },
                                directMarketLink
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                isBitAsset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "inline-block",
                                        "data-place": "bottom",
                                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.borrow", { asset: asset.get("symbol") })
                                    },
                                    borrowLink,
                                    borrowModal
                                ) : emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                emptyCell
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                {
                                    style: { textAlign: "center" },
                                    className: "column-hide-small",
                                    "data-place": "bottom",
                                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip." + (includeAsset ? "hide_asset" : "show_asset"))
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        style: { marginRight: 0 },
                                        className: includeAsset ? "order-cancel" : "action-plus",
                                        onClick: _this7._hideAsset.bind(_this7, asset.get("id"), includeAsset)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                        name: includeAsset ? "cross-circle" : "plus-circle",
                                        title: includeAsset ? "icons.cross_circle.hide_asset" : "icons.plus_circle.show_asset",
                                        className: "icon-14px"
                                    })
                                )
                            )
                        ));
                    }
                });
            }

            balances.sort(this.sortFunctions[this.props.sortKey]);
            return balances;
        }
    }, {
        key: "_renderSendModal",
        value: function _renderSendModal() {
            var _this8 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_SendModal__WEBPACK_IMPORTED_MODULE_22__["default"], {
                id: "send_modal_portfolio",
                refCallback: function refCallback(e) {
                    if (e) _this8.send_modal = e;
                },
                from_name: this.props.account.get("name"),
                asset_id: this.state.send_asset || "1.3.0"
            });
        }
    }, {
        key: "_renderSettleModal",
        value: function _renderSettleModal() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_SettleModal__WEBPACK_IMPORTED_MODULE_24__["default"], {
                ref: "settlement_modal",
                modalId: "settlement_modal",
                asset: this.state.settleAsset,
                account: this.props.account.get("name")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            var currentWithdrawAsset = this.props.backedCoins.get("OPEN", []).find(function (c) {
                return c.symbol === _this9.state.withdrawAsset;
            }) || {};
            var currentBridges = this.props.bridgeCoins.get(this.state.bridgeAsset) || null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tbody",
                null,
                this._renderBalances(this.props.balanceList, this.props.optionalAssets, this.props.visible),
                this._renderSendModal(),
                this._renderSettleModal(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({
                    ref: "withdraw_modal",
                    action: "withdraw",
                    fiatModal: this.state.fiatModal,
                    account: this.props.account.get("name"),
                    sender: this.props.account.get("id"),
                    asset: this.state.withdrawAsset,
                    modalId: "simple_withdraw_modal",
                    balances: this.props.balances
                }, currentWithdrawAsset, {
                    isDown: this.props.gatewayDown.get("OPEN")
                })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_28__["default"], {
                    ref: "withdraw_modal_new",
                    modalId: "withdraw_modal_new",
                    backedCoins: this.props.backedCoins,
                    initialSymbol: this.state.withdrawAsset
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_DepositModal__WEBPACK_IMPORTED_MODULE_25__["default"], {
                    ref: "deposit_modal_new",
                    modalId: "deposit_modal_new",
                    asset: this.state.depositAsset,
                    account: this.props.account.get("name"),
                    backedCoins: this.props.backedCoins
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_27__["default"], {
                    ref: "bridge_modal",
                    action: "deposit",
                    account: this.props.account.get("name"),
                    sender: this.props.account.get("id"),
                    asset: this.state.bridgeAsset,
                    modalId: "simple_bridge_modal",
                    balances: this.props.balances,
                    bridges: currentBridges,
                    isDown: this.props.gatewayDown.get("TRADE")
                })
            );
        }
    }]);

    return AccountPortfolioList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountPortfolioList = Object(alt_react__WEBPACK_IMPORTED_MODULE_15__["connect"])(AccountPortfolioList, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"], stores_GatewayStore__WEBPACK_IMPORTED_MODULE_17__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().settings,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().viewSettings,
            backedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_17__["default"].getState().backedCoins,
            bridgeCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_17__["default"].getState().bridgeCoins,
            gatewayDown: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_17__["default"].getState().down,
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().allMarketStats
        };
    }
});

AccountPortfolioList = react_debounce_render__WEBPACK_IMPORTED_MODULE_1___default()(AccountPortfolioList, 50, {
    leading: false
});

/* harmony default export */ __webpack_exports__["default"] = (AccountPortfolioList);

/***/ }),

/***/ 2538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Market24HourChangeComponent", function() { return Market24HourChangeComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1014);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1218);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1266);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2402);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 *  Displays change in market value for an asset
 *
 *  Expects three properties
 *  -'quote' which should be a asset id
 *  -'base' which is the asset id of the original asset amount
 */

var MarketChangeComponent = function (_MarketStats) {
    _inherits(MarketChangeComponent, _MarketStats);

    function MarketChangeComponent(props) {
        _classCallCheck(this, MarketChangeComponent);

        return _possibleConstructorReturn(this, (MarketChangeComponent.__proto__ || Object.getPrototypeOf(MarketChangeComponent)).call(this, props));
    }

    _createClass(MarketChangeComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(MarketChangeComponent.prototype.__proto__ || Object.getPrototypeOf(MarketChangeComponent.prototype), "shouldComponentUpdate", this).call(this, np) || np.base !== this.props.base;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var marketStats = this.props.marketStats;

            return marketStats && marketStats.change ? marketStats.change : 0;
        }
    }, {
        key: "render",
        value: function render() {
            var marketChangeValue = this.getValue();
            var dayChangeClass = parseFloat(marketChangeValue) === 0 ? "" : parseFloat(marketChangeValue) < 0 ? "change-down" : "change-up";
            var marketChangeFormattedValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedNumber"], {
                style: "decimal",
                value: marketChangeValue,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "value " + dayChangeClass },
                marketChangeFormattedValue,
                "%"
            );
        }
    }]);

    return MarketChangeComponent;
}(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_6__["MarketStats"]);

MarketChangeComponent.defaultProps = {
    fullPrecision: false,
    noDecimals: false,
    hide_asset: false
};

MarketChangeComponent = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketChangeComponent, {
    propNames: ["quote", "base"],
    defaultProps: { quote: "1.3.0" }
});

var Market24HourChangeComponent = function (_React$Component) {
    _inherits(Market24HourChangeComponent, _React$Component);

    function Market24HourChangeComponent() {
        _classCallCheck(this, Market24HourChangeComponent);

        return _possibleConstructorReturn(this, (Market24HourChangeComponent.__proto__ || Object.getPrototypeOf(Market24HourChangeComponent)).apply(this, arguments));
    }

    _createClass(Market24HourChangeComponent, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                refCallback = _props.refCallback,
                others = _objectWithoutProperties(_props, ["refCallback"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketChangeComponent, _extends({}, others, { ref: refCallback }));
        }
    }]);

    return Market24HourChangeComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Market24HourChangeComponent = Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Market24HourChangeComponent, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps(props) {
        return {
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().allMarketStats.get(props.marketId),
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().allMarketStats
        };
    }
});



/***/ }),

/***/ 2539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(709);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1334);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1268);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1266);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1265);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1218);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var EquivalentPrice = function (_MarketStatsCheck) {
    _inherits(EquivalentPrice, _MarketStatsCheck);

    function EquivalentPrice() {
        _classCallCheck(this, EquivalentPrice);

        return _possibleConstructorReturn(this, (EquivalentPrice.__proto__ || Object.getPrototypeOf(EquivalentPrice)).apply(this, arguments));
    }

    _createClass(EquivalentPrice, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, nextState) {
            return _get(EquivalentPrice.prototype.__proto__ || Object.getPrototypeOf(EquivalentPrice.prototype), "shouldComponentUpdate", this).call(this, np) || np.base_amount !== this.props.base_amount || np.quote_amount !== this.props.quote_amount || np.decimals !== this.props.decimals || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.pulsate, this.props.pulsate) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "getFinalPrice",
        value: function getFinalPrice() {
            var real = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var _props = this.props,
                coreAsset = _props.coreAsset,
                fromAsset = _props.fromAsset,
                toAsset = _props.toAsset,
                allMarketStats = _props.allMarketStats;

            return common_market_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getFinalPrice(coreAsset, fromAsset, toAsset, allMarketStats, real);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                toAsset = _props2.toAsset,
                forceDirection = _props2.forceDirection,
                others = _objectWithoutProperties(_props2, ["toAsset", "forceDirection"]);

            var finalPrice = this.getFinalPrice();

            if (finalPrice === 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "1.00"
                );
            }

            if (!finalPrice) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "--"
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedPrice__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
                force_direction: forceDirection ? toAsset.get("symbol") : false,
                base_amount: finalPrice.base.amount,
                base_asset: finalPrice.base.asset_id,
                quote_amount: finalPrice.quote.amount,
                quote_asset: finalPrice.quote.asset_id
            }, others));
        }
    }]);

    return EquivalentPrice;
}(_MarketStatsCheck__WEBPACK_IMPORTED_MODULE_5__["default"]);

EquivalentPrice.defaultProps = {
    forceDirection: true
};


EquivalentPrice = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(EquivalentPrice, {
    propNames: ["toAsset", "fromAsset", "coreAsset"],
    defaultProps: {
        toAsset: "1.3.0",
        coreAsset: "1.3.0"
    }
});

var EquivalentPriceWrapper = function (_React$Component) {
    _inherits(EquivalentPriceWrapper, _React$Component);

    function EquivalentPriceWrapper() {
        _classCallCheck(this, EquivalentPriceWrapper);

        return _possibleConstructorReturn(this, (EquivalentPriceWrapper.__proto__ || Object.getPrototypeOf(EquivalentPriceWrapper)).apply(this, arguments));
    }

    _createClass(EquivalentPriceWrapper, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]],
                    inject: {
                        toAsset: function toAsset() {
                            return _this3.props.toAsset || stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings.get("unit", "1.3.0");
                        },
                        allMarketStats: function allMarketStats() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EquivalentPrice, _extends({}, this.props, { ref: this.props.refCallback }))
            );
        }
    }]);

    return EquivalentPriceWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EquivalentPriceWrapper);

/***/ }),

/***/ 2540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(802);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PulseIcon = function (_Component) {
    _inherits(PulseIcon, _Component);

    function PulseIcon() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PulseIcon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PulseIcon.__proto__ || Object.getPrototypeOf(PulseIcon)).call.apply(_ref, [this].concat(args))), _this), _this.tick = function () {
            var _this$props = _this.props,
                onIcon = _this$props.onIcon,
                offIcon = _this$props.offIcon;

            var _ref2 = _this.state || {},
                _ref2$name = _ref2.name,
                name = _ref2$name === undefined ? onIcon : _ref2$name;

            _this.setState({
                name: name === onIcon ? offIcon : onIcon
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PulseIcon, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var duration = this.props.duration;

            this.interval = setInterval(this.tick, duration);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.interval && clearInterval(this.interval);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                onIcon = _props.onIcon,
                rest = _props.rest;

            var _ref3 = this.state || {},
                _ref3$name = _ref3.name,
                name = _ref3$name === undefined ? onIcon : _ref3$name;

            var title = this.props.title;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({ name: name, title: title }, rest));
        }
    }]);

    return PulseIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PulseIcon.propTypes = {
    duration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    offIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    onIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PulseIcon);

/***/ }),

/***/ 2541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1232);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(585);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(589);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(416);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1012);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var ModalContent = function (_React$Component) {
    _inherits(ModalContent, _React$Component);

    function ModalContent() {
        _classCallCheck(this, ModalContent);

        var _this = _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this));

        _this.state = {
            amount: 0
        };
        return _this;
    }

    _createClass(ModalContent, [{
        key: "onAmountChanged",
        value: function onAmountChanged(_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            this.setState({ amount: amount });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish("settlement_modal", "close");

            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.asset.get("precision"));
            var amount = this.state.amount.replace(/,/g, "");
            amount *= precision;

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_8__["default"].new_transaction();
            tr.add_type_operation("asset_settle", {
                fee: {
                    amount: 0,
                    asset_id: 0
                },
                account: this.props.account.get("id"),
                amount: {
                    amount: amount,
                    asset_id: this.props.asset.get("id")
                }
            });
            return stores_WalletDb__WEBPACK_IMPORTED_MODULE_9__["default"].process_transaction(tr, null, true).then(function (result) {
                // console.log("asset settle result:", result);
                // this.dispatch(account_id);
                return true;
            }).catch(function (error) {
                console.error("asset settle error: ", error);
                return false;
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                asset = _props.asset,
                account = _props.account;
            var amount = this.state.amount;


            if (!asset) {
                return null;
            }

            var assetID = asset.get("id");

            var account_balances = account.get("balances");

            var currentBalance = null,
                balanceAmount = 0;

            account_balances && account_balances.forEach(function (balance) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_11__["ChainStore"].getObject(balance);
                if (!balanceObject.get("balance")) {
                    return null;
                }
                if (balanceObject.get("asset_type") === assetID) {
                    currentBalance = balance;
                    balanceAmount = balanceObject.get("balance");
                }
            });

            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(asset.get("precision"));
            var parsedAmount = amount ? amount.replace(/,/g, "") : 0;
            var submit_btn_class = parseFloat(parsedAmount) > 0 && parseFloat(parsedAmount) * precision <= parseFloat(balanceAmount) ? "button success" : "button disabled";

            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.balance" }),
                ":\xA0",
                currentBalance ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], { balance: currentBalance }) : "0 " + asset.get("symbol")
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "h3",
                    style: { textAlign: "center" },
                    content: "modal.settle.title",
                    asset: asset.get("symbol")
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container ", style: { paddingTop: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            label: "modal.settle.amount",
                            amount: amount,
                            onChange: this.onAmountChanged.bind(this),
                            display_balance: balanceText,
                            asset: assetID,
                            assets: [assetID],
                            tabIndex: 1
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "submit",
                            className: submit_btn_class,
                            onClick: this.onSubmit.bind(this),
                            value: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("modal.settle.submit")
                        })
                    )
                )
            );
        }
    }]);

    return ModalContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ModalContent.propTypes = {
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired
};

ModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalContent);

var SettleModal = function (_React$Component2) {
    _inherits(SettleModal, _React$Component2);

    function SettleModal() {
        _classCallCheck(this, SettleModal);

        var _this2 = _possibleConstructorReturn(this, (SettleModal.__proto__ || Object.getPrototypeOf(SettleModal)).call(this));

        _this2.state = { open: false };
        return _this2;
    }

    _createClass(SettleModal, [{
        key: "show",
        value: function show() {
            var _this3 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_this3.props.modalId, "open");
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
            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    id: this.props.modalId,
                    onClose: this.onClose.bind(this),
                    overlay: true,
                    ref: "settlement_modal"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContent, this.props)
                )
            );
        }
    }]);

    return SettleModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettleModal);

/***/ })

}]);
//# sourceMappingURL=account.js.map