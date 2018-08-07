(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 2767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2768);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2517);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(879);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2329);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(709);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(549);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1266);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2478);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_11__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var AccountsContainer = function (_React$Component) {
    _inherits(AccountsContainer, _React$Component);

    function AccountsContainer() {
        _classCallCheck(this, AccountsContainer);

        return _possibleConstructorReturn(this, (AccountsContainer.__proto__ || Object.getPrototypeOf(AccountsContainer)).apply(this, arguments));
    }

    _createClass(AccountsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_11___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"]],
                    inject: {
                        contacts: function contacts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountContacts;
                        },
                        myActiveAccounts: function myActiveAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().myActiveAccounts;
                        },
                        myHiddenAccounts: function myHiddenAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().myHiddenAccounts;
                        },
                        accountsReady: function accountsReady() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountsLoaded && stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().refsLoaded;
                        },
                        passwordAccount: function passwordAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().passwordAccount;
                        },
                        lowVolumeMarkets: function lowVolumeMarkets() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().lowVolumeMarkets;
                        },
                        currentEntry: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().viewSettings.get("dashboardEntry", "accounts")
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Accounts, this.props)
            );
        }
    }]);

    return AccountsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Accounts = function (_React$Component2) {
    _inherits(Accounts, _React$Component2);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this2 = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this2.state = {
            width: null,
            showIgnored: false,
            currentEntry: props.currentEntry
        };

        _this2._setDimensions = _this2._setDimensions.bind(_this2);
        return _this2;
    }

    _createClass(Accounts, [{
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
            return nextProps.myActiveAccounts !== this.props.myActiveAccounts || nextProps.contacts !== this.props.contacts || nextProps.ignoredAccounts !== this.props.ignoredAccounts || nextProps.passwordAccount !== this.props.passwordAccount || nextState.width !== this.state.width || nextProps.accountsReady !== this.props.accountsReady || nextState.showIgnored !== this.state.showIgnored || nextState.currentEntry !== this.state.currentEntry;
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
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
                dashboardEntry: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                myActiveAccounts = _props.myActiveAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                width = _state.width,
                showIgnored = _state.showIgnored;


            if (passwordAccount && !myActiveAccounts.has(passwordAccount)) {
                myActiveAccounts = myActiveAccounts.add(passwordAccount);
            }
            var names = myActiveAccounts.toArray().sort();
            if (passwordAccount && names.indexOf(passwordAccount) === -1) names.push(passwordAccount);
            var ignored = myHiddenAccounts.toArray().sort();

            var accountCount = myActiveAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], null);
            }

            if (!accountCount) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSelector__WEBPACK_IMPORTED_MODULE_5__["default"], null);
            }

            var contacts = this.props.contacts.toArray();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block page-layout vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        ref: "container",
                        className: "tabs-container generic-bordered-box"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tabs"],
                        {
                            setting: "accountTab",
                            className: "account-tabs",
                            defaultActiveTab: 1,
                            segmented: false,
                            tabsClass: "account-overview no-padding bordered-header content-block"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.accounts" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "box-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        accounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(names),
                                        ignoredAccounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(ignored),
                                        width: width,
                                        onToggleIgnored: this._onToggleIgnored.bind(this),
                                        showIgnored: showIgnored,
                                        showMyAccounts: true
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.contacts" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "box-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        accounts: contacts,
                                        passwordAccount: passwordAccount,
                                        ignoredAccounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(ignored),
                                        width: width,
                                        onToggleIgnored: this._onToggleIgnored.bind(this),
                                        showIgnored: showIgnored,
                                        isContactsList: true
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.recent" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__["RecentTransactions"], {
                                accountsList: myActiveAccounts,
                                limit: 10,
                                compactView: false,
                                fullHeight: true,
                                showFilters: true,
                                dashboard: true
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Accounts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var DashboardAccountsOnly = function DashboardAccountsOnly(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountsContainer, _extends({}, props, { onlyAccounts: true }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardAccountsOnly);

/***/ })

}]);
//# sourceMappingURL=dashboard-accounts.js.map