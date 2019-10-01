(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 2810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2374);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2811);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SettingsContainer = function (_React$Component) {
    _inherits(SettingsContainer, _React$Component);

    function SettingsContainer() {
        _classCallCheck(this, SettingsContainer);

        return _possibleConstructorReturn(this, (SettingsContainer.__proto__ || Object.getPrototypeOf(SettingsContainer)).apply(this, arguments));
    }

    _createClass(SettingsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().viewSettings;
                        },
                        defaults: function defaults() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().defaults;
                        },
                        localesObject: function localesObject() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().localesObject;
                        },
                        apiLatencies: function apiLatencies() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().apiLatencies;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], this.props)
            );
        }
    }]);

    return SettingsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsContainer);

/***/ }),

/***/ 2811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2812);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(703);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(702);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(836);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2813);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2814);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2815);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2834);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2835);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2837);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2838);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1811);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(560);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings(props) {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

        var menuEntries = _this._getMenuEntries(props);
        var activeSetting = 0;

        var tabIndex = !!props.match.params.tab ? menuEntries.indexOf(props.match.params.tab) : props.viewSettings.get("activeSetting", 0);
        if (tabIndex >= 0) activeSetting = tabIndex;

        var general = ["locale", "unit", "browser_notifications", "showSettles", "showProposedTx", "walletLockTimeout", "themes", "showAssetPercent"];
        // disable that the user can change login method if only one is allowed
        if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getAllowedLogins"])().length > 1) general.push("passwordLogin");
        general.push("reset");

        _this.state = {
            isAddNodeModalVisible: false,
            isRemoveNodeModalVisible: false,
            removeNode: {
                name: null,
                url: null
            },
            apiServer: props.settings.get("apiServer"),
            activeSetting: activeSetting,
            menuEntries: menuEntries,
            settingEntries: {
                general: general,
                access: ["apiServer", "faucet_address"]
            }
        };

        _this.showAddNodeModal = _this.showAddNodeModal.bind(_this);
        _this.hideAddNodeModal = _this.hideAddNodeModal.bind(_this);
        _this.showRemoveNodeModal = _this.showRemoveNodeModal.bind(_this);
        _this.hideRemoveNodeModal = _this.hideRemoveNodeModal.bind(_this);

        _this._handleNotificationChange = _this._handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(Settings, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.match.params.tab !== this.props.match.params.tab) {
                this._onChangeMenu(this.props.match.params.tab);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.settings.get("passwordLogin") !== this.props.settings.get("passwordLogin")) {
                var currentEntries = this._getMenuEntries(this.props);
                var menuEntries = this._getMenuEntries(np);
                var currentActive = currentEntries[this.state.activeSetting];
                var newActiveIndex = menuEntries.indexOf(currentActive);
                var newActive = menuEntries[newActiveIndex];
                this.setState({
                    menuEntries: menuEntries
                });
                if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
                    this.setState({
                        activeSetting: menuEntries.indexOf(currentActive)
                    });
                } else if (!newActive || this.state.activeSetting > menuEntries.length - 1) {
                    this.setState({
                        activeSetting: 0
                    });
                }
            }
        }
    }, {
        key: "showAddNodeModal",
        value: function showAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: true
            });
        }
    }, {
        key: "hideAddNodeModal",
        value: function hideAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: false
            });
        }
    }, {
        key: "showRemoveNodeModal",
        value: function showRemoveNodeModal(url, name) {
            this.setState({
                isRemoveNodeModalVisible: true,
                removeNode: {
                    url: url,
                    name: name
                }
            });
        }
    }, {
        key: "hideRemoveNodeModal",
        value: function hideRemoveNodeModal() {
            this.setState({
                isRemoveNodeModalVisible: false,
                removeNode: {
                    url: null,
                    name: null
                }
            });
        }
    }, {
        key: "_getMenuEntries",
        value: function _getMenuEntries(props) {
            if (props.deprecated) {
                return ["wallet", "backup"];
            }

            var menuEntries = [];

            menuEntries.push("general");
            if (!props.settings.get("passwordLogin")) menuEntries.push("wallet");
            menuEntries.push("accounts");
            menuEntries.push("password");
            if (!props.settings.get("passwordLogin")) menuEntries.push("backup");
            if (!props.settings.get("passwordLogin")) menuEntries.push("restore");
            menuEntries.push("access");

            if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().show) menuEntries.push("faucet_address");

            menuEntries.push("reset");

            return menuEntries;
        }
    }, {
        key: "triggerModal",
        value: function triggerModal(e) {
            var _refs$ws_modal;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_refs$ws_modal = this.refs.ws_modal).show.apply(_refs$ws_modal, [e].concat(args));
        }
    }, {
        key: "_handleNotificationChange",
        value: function _handleNotificationChange(path, value) {
            // use different change handler because checkbox doesn't work
            // normal with e.preventDefault()

            var updatedValue = Object(lodash_es_set__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.settings.get("browser_notifications"), path, value);

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                setting: "browser_notifications",
                value: updatedValue
            });
        }
    }, {
        key: "_onChangeSetting",
        value: function _onChangeSetting(setting, e) {
            e.preventDefault();

            var defaults = this.props.defaults;

            var value = null;

            function findEntry(targetValue, targetDefaults) {
                if (!targetDefaults) return targetValue;
                if (targetDefaults[0].translate) {
                    for (var i = 0; i < targetDefaults.length; i++) {
                        if (counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("settings." + targetDefaults[i].translate) === targetValue) {
                            return i;
                        }
                    }
                } else {
                    return targetDefaults.indexOf(targetValue);
                }
            }

            switch (setting) {
                case "locale":
                    var myLocale = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.getLocale();
                    if (e.target.value !== myLocale) {
                        actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__["default"].switchLocale(e.target.value);
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "locale",
                            value: e.target.value
                        });
                    }
                    break;

                case "themes":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "themes",
                        value: e.target.value
                    });
                    break;

                case "defaultMarkets":
                    break;

                case "walletLockTimeout":
                    var newValue = parseInt(e.target.value, 10);
                    if (isNaN(newValue)) newValue = 0;
                    if (!isNaN(newValue) && typeof newValue === "number") {
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "walletLockTimeout",
                            value: newValue
                        });
                    }
                    break;

                case "inverseMarket":
                case "confirmMarketOrder":
                    value = findEntry(e.target.value, defaults[setting]) === 0; // USD/BTS is true, BTS/USD is false
                    break;

                case "apiServer":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "apiServer",
                        value: e.target.value
                    });
                    this.setState({
                        apiServer: e.target.value
                    });
                    break;

                case "showSettles":
                case "showProposedTx":
                case "showAssetPercent":
                case "passwordLogin":
                    var reference = defaults[setting][0];
                    if (reference.translate) reference = reference.translate;
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: e.target.value === reference
                    });
                    break;

                case "unit":
                    var index = findEntry(e.target.value, defaults[setting]);
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: defaults[setting][index]
                    });
                    break;

                default:
                    value = findEntry(e.target.value, defaults[setting]);
                    break;
            }

            if (value !== null) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({ setting: setting, value: value });
            }
        }
    }, {
        key: "onReset",
        value: function onReset() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].clearSettings();
        }
    }, {
        key: "_redirectToEntry",
        value: function _redirectToEntry(entry) {
            this.props.history.push("/settings/" + entry);
        }
    }, {
        key: "_onChangeMenu",
        value: function _onChangeMenu(entry) {
            var index = this.state.menuEntries.indexOf(entry);
            this.setState({
                activeSetting: index
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({ activeSetting: index });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                settings = _props.settings,
                defaults = _props.defaults;
            var _state = this.state,
                menuEntries = _state.menuEntries,
                activeSetting = _state.activeSetting,
                settingEntries = _state.settingEntries;

            var entries = void 0;
            var activeEntry = menuEntries[activeSetting] || menuEntries[0];

            switch (activeEntry) {
                case "accounts":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountsSettings__WEBPACK_IMPORTED_MODULE_8__["default"], null);
                    break;

                case "wallet":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WalletSettings__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
                    break;

                case "password":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PasswordSettings__WEBPACK_IMPORTED_MODULE_10__["default"], null);
                    break;

                case "backup":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BackupSettings__WEBPACK_IMPORTED_MODULE_13__["default"], null);
                    break;

                case "restore":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RestoreSettings__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        passwordLogin: this.props.settings.get("passwordLogin")
                    });
                    break;

                case "access":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccessSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        faucet: settings.get("faucet_address"),
                        nodes: defaults.apiServer,
                        onChange: this._onChangeSetting.bind(this),
                        showAddNodeModal: this.showAddNodeModal,
                        showRemoveNodeModal: this.showRemoveNodeModal
                    });
                    break;
                case "faucet_address":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        disabled: !Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable,
                        type: "text",
                        className: "settings-input",
                        defaultValue: settings.get("faucet_address"),
                        onChange: Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable ? this._onChangeSetting.bind(this, "faucet_address") : null
                    });
                    break;

                case "reset":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResetSettings__WEBPACK_IMPORTED_MODULE_12__["default"], null);
                    break;

                default:
                    entries = settingEntries[activeEntry].map(function (setting) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SettingsEntry__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
                            key: setting,
                            setting: setting,
                            settings: settings,
                            defaults: defaults[setting],
                            onChange: _this2._onChangeSetting.bind(_this2),
                            onNotificationChange: _this2._handleNotificationChange,
                            locales: _this2.props.localesObject
                        }, _this2.state));
                    });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.deprecated ? "" : "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block main-content margin-block wrap" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-content shrink settings-menu",
                            style: { paddingRight: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            style: { paddingBottom: 10, paddingLeft: 10 },
                            component: "h3",
                            content: "header.settings",
                            className: "panel-bg-color"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "ul",
                            null,
                            menuEntries.map(function (entry, index) {
                                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "li",
                                    {
                                        className: index === activeSetting ? "active" : "",
                                        onClick: _this2._redirectToEntry.bind(_this2, entry),
                                        key: entry
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: "settings." + entry
                                    })
                                );
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-content",
                            style: {
                                maxWidth: 1000
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block small-12 no-margin vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                component: "h3",
                                content: "settings." + menuEntries[activeSetting]
                            }),
                            activeEntry != "access" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                unsafe: true,
                                style: { paddingTop: 5, marginBottom: 30 },
                                content: "settings." + menuEntries[activeSetting] + "_text",
                                className: "panel-bg-color"
                            }),
                            entries
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    removeNode: this.state.removeNode,
                    isAddNodeModalVisible: this.state.isAddNodeModalVisible,
                    isRemoveNodeModalVisible: this.state.isRemoveNodeModalVisible,
                    onAddNodeClose: this.hideAddNodeModal,
                    onRemoveNodeClose: this.hideRemoveNodeModal,
                    apis: defaults["apiServer"],
                    api: defaults["apiServer"].filter(function (a) {
                        return a.url === _this2.state.apiServer;
                    }).reduce(function (a, b) {
                        return b && b.url;
                    }, null),
                    changeConnection: function changeConnection(apiServer) {
                        _this2.setState({ apiServer: apiServer });
                    }
                })
            );
        }
    }]);

    return Settings;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ 2812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1849);


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : Object(_baseSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, value);
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ 2813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(702);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2186);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1950);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notifyjs__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SettingsEntry = function (_React$Component) {
    _inherits(SettingsEntry, _React$Component);

    function SettingsEntry() {
        _classCallCheck(this, SettingsEntry);

        var _this = _possibleConstructorReturn(this, (SettingsEntry.__proto__ || Object.getPrototypeOf(SettingsEntry)).call(this));

        _this.state = {
            message: null
        };

        _this.handleNotificationChange = _this.handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(SettingsEntry, [{
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "handleNotificationChange",
        value: function handleNotificationChange(path) {
            var _this3 = this;

            return function (evt) {
                _this3.props.onNotificationChange(path, !!evt.target.checked);
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                defaults = _props.defaults,
                setting = _props.setting,
                settings = _props.settings;

            var options = void 0,
                optional = void 0,
                confirmButton = void 0,
                value = void 0,
                input = void 0,
                selected = settings.get(setting);
            var noHeader = false;
            var component = null;

            switch (setting) {
                case "locale":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "languages." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "themes":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "settings." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "browser_notifications":
                    value = selected;

                    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "settings--notifications" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "settings--notifications--group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--item" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    id: "browser_notifications.allow",
                                    checked: !!value.allow,
                                    onChange: this.handleNotificationChange("allow")
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "browser_notifications.allow" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_allow")
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "settings--notifications--item" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        id: "browser_notifications.additional.transferToMe",
                                        disabled: !value.allow,
                                        checked: !!value.additional.transferToMe,
                                        onChange: this.handleNotificationChange("additional.transferToMe")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { htmlFor: "browser_notifications.allow" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_additional_transfer_to_me")
                                    )
                                )
                            )
                        ),
                        !!value.allow && notifyjs__WEBPACK_IMPORTED_MODULE_5___default.a.needsPermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                href: "https://goo.gl/zZ7NHY",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "div",
                                className: "settings--notifications--no-browser-support",
                                content: "settings.browser_notifications_disabled_by_browser_notify"
                            })
                        )
                    );

                    break;

                case "defaultMarkets":
                    options = null;
                    value = null;
                    break;

                case "walletLockTimeout":
                    value = selected;
                    input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "text",
                        className: "settings-input",
                        value: selected,
                        onChange: this.props.onChange.bind(this, setting)
                    });
                    break;

                default:
                    if (typeof selected === "number") {
                        value = defaults[selected];
                    } else if (typeof selected === "boolean") {
                        if (selected) {
                            value = defaults[0];
                        } else {
                            value = defaults[1];
                        }
                    } else if (typeof selected === "string") {
                        value = selected;
                    }

                    if (defaults) {
                        options = defaults.map(function (entry) {
                            var option = entry.translate ? counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings." + entry.translate) : entry;
                            if (setting === "unit") {
                                option = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: entry });
                            }
                            var key = entry.translate ? entry.translate : entry;
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "option",
                                {
                                    value: entry.translate ? entry.translate : entry,
                                    key: key
                                },
                                option
                            );
                        });
                    } else {
                        input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            className: "settings-input",
                            type: "text",
                            defaultValue: value,
                            onBlur: this.props.onChange.bind(this, setting)
                        });
                    }
                    break;
            }
            if (typeof value !== "number" && !value && !options) return null;

            if (value && value.translate) {
                value = value.translate;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "block-list no-border-bottom" },
                noHeader ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "header",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        style: {
                            fontWeight: "normal",
                            fontFamily: "Roboto-Medium, arial, sans-serif",
                            fontStyle: "normal"
                        },
                        content: "settings." + setting
                    })
                ),
                options ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        { className: "with-dropdown" },
                        optional,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                value: value,
                                className: "settings-select",
                                onChange: this.props.onChange.bind(this, setting)
                            },
                            options
                        ),
                        confirmButton
                    )
                ) : null,
                input ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        null,
                        input
                    )
                ) : null,
                component ? component : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "facolor-success" },
                    this.state.message
                )
            );
        }
    }]);

    return SettingsEntry;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsEntry);

/***/ }),

/***/ 2814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(556);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(760);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AccountsSettings = function (_React$Component) {
    _inherits(AccountsSettings, _React$Component);

    function AccountsSettings() {
        _classCallCheck(this, AccountsSettings);

        return _possibleConstructorReturn(this, (AccountsSettings.__proto__ || Object.getPrototypeOf(AccountsSettings)).apply(this, arguments));
    }

    _createClass(AccountsSettings, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps.myAccounts, this.props.myAccounts) || nextProps.hiddenAccounts !== this.props.hiddenAccounts;
        }
    }, {
        key: "onToggleHide",
        value: function onToggleHide(account, hide, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].toggleHideAccount(account, hide);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                myAccounts = _props.myAccounts,
                hiddenAccounts = _props.hiddenAccounts;


            var accounts = hiddenAccounts.toArray().concat(myAccounts).sort();

            if (!accounts.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.no_accounts" })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                { className: "table" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    accounts.map(function (account) {
                        var isIgnored = hiddenAccounts.has(account);
                        var hideLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                onClick: isIgnored ? _this2.onToggleHide.bind(_this2, account, false) : _this2.onToggleHide.bind(_this2, account, true)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                content: "account." + (isIgnored ? "unignore" : "ignore")
                            })
                        );

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: account },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                account
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        to: "/account/" + account + "/permissions"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.view_keys" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                hideLink
                            )
                        );
                    })
                )
            );
        }
    }]);

    return AccountsSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountsSettings = Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(AccountsSettings, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            myAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getMyAccounts(),
            hiddenAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myHiddenAccounts
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (AccountsSettings);

/***/ }),

/***/ 2815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2816);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2818);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var WalletSettings = function (_React$Component) {
    _inherits(WalletSettings, _React$Component);

    function WalletSettings() {
        _classCallCheck(this, WalletSettings);

        var _this = _possibleConstructorReturn(this, (WalletSettings.__proto__ || Object.getPrototypeOf(WalletSettings)).call(this));

        _this.state = {
            lookupActive: false,
            resetMessage: null
        };
        return _this;
    }

    _createClass(WalletSettings, [{
        key: "onLookup",
        value: function onLookup() {
            this.setState({
                lookupActive: true
            });
        }
    }, {
        key: "onResetBrainkeySequence",
        value: function onResetBrainkeySequence() {
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].resetBrainKeySequence();
            this.setState({
                resetMessage: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("wallet.brainkey_reset_success")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var lookupActive = this.state.lookupActive;
            var deprecated = this.props.deprecated;


            if (deprecated) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null)
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { padding: "15px 0" }, className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.balance_claims" }),
                        ":"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "settings.lookup_text" }),
                    ":"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "button outline",
                        onClick: this.onLookup.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.balance_claim_lookup" })
                ),
                lookupActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { padding: "15px 0" }, className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.brainkey_seq_reset" }),
                        ":"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            unsafe: true,
                            content: "wallet.brainkey_seq_reset_text"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this.onResetBrainkeySequence.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.brainkey_seq_reset_button" })
                    ),
                    this.state.resetMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { style: { paddingTop: 10 }, className: "facolor-success" },
                        this.state.resetMessage
                    ) : null
                )
            );
        }
    }]);

    return WalletSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WalletSettings);

/***/ }),

/***/ 2834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2832);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PasswordSettings = function (_React$Component) {
    _inherits(PasswordSettings, _React$Component);

    function PasswordSettings() {
        _classCallCheck(this, PasswordSettings);

        return _possibleConstructorReturn(this, (PasswordSettings.__proto__ || Object.getPrototypeOf(PasswordSettings)).apply(this, arguments));
    }

    _createClass(PasswordSettings, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"], null);
        }
    }]);

    return PasswordSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PasswordSettings);

/***/ }),

/***/ 2835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2825);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2371);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2836);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var RestoreSettings = function (_React$Component) {
    _inherits(RestoreSettings, _React$Component);

    function RestoreSettings() {
        _classCallCheck(this, RestoreSettings);

        var _this = _possibleConstructorReturn(this, (RestoreSettings.__proto__ || Object.getPrototypeOf(RestoreSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "key", "legacy", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(RestoreSettings, [{
        key: "_setWalletMode",
        value: function _setWalletMode() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeSetting({
                setting: "passwordLogin",
                value: false
            });
        }
    }, {
        key: "_changeType",
        value: function _changeType(e) {
            this.setState({
                restoreType: this.state.types.indexOf(e.target.value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var passwordLogin = this.props.passwordLogin;


            if (passwordLogin) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "settings.wallet_required",
                        component: "h4"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { className: "dark-text-color" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.wallet_required_text" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button", onClick: this._setWalletMode },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.enable_wallet" })
                    )
                );
            }
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("settings.backup_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupRestore"], null)
                    );
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { maxWidth: "40rem", paddingBottom: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.restore_brainkey_text" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__["CreateWalletFromBrainkey"], { nested: true })
                    );
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__["default"], null)
                    );
                    break;

                default:
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__["default"], { privateKey: restoreType === 1 });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "select",
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType]
                    },
                    options
                ),
                content
            );
        }
    }]);

    return RestoreSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreSettings);

/***/ }),

/***/ 2836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(702);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var RestoreFavorites = function (_React$Component) {
    _inherits(RestoreFavorites, _React$Component);

    function RestoreFavorites(props) {
        _classCallCheck(this, RestoreFavorites);

        var _this = _possibleConstructorReturn(this, (RestoreFavorites.__proto__ || Object.getPrototypeOf(RestoreFavorites)).call(this, props));

        _this.state = {
            json: null,
            error: null
        };
        return _this;
    }

    _createClass(RestoreFavorites, [{
        key: "upload",
        value: function upload(evt) {
            var _this2 = this;

            this.setState({ error: false, json: null });

            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;

                try {
                    var json = JSON.parse(contents);

                    for (var key in json) {
                        var market = json[key];
                        var quote = market.quote,
                            base = market.base;


                        if (!quote || !base) throw new Error("Cannot parse json data.");
                    }

                    _this2.setState({ json: json });
                    // this.finish();
                } catch (message) {
                    _this2.setState({ error: true });
                }
            };
            reader.readAsText(file);
        }
    }, {
        key: "finish",
        value: function finish() {
            var json = this.state.json;


            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].clearStarredMarkets();

            for (var key in json) {
                var market = json[key];
                var quote = market.quote,
                    base = market.base;


                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].addStarMarket(quote, base);
            }

            actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].addNotification({
                message: counterpart__WEBPACK_IMPORTED_MODULE_4___default()("settings.backup_favorites_success"),
                level: "success",
                autoDismiss: 2
            });
        }
    }, {
        key: "render",
        value: function render() {
            var state = this.state;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                    type: "file",
                    id: "file_input",
                    accept: ".json",
                    style: {
                        border: "solid",
                        marginBottom: 15
                    },
                    onChange: this.upload.bind(this)
                }),
                state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_error" })
                ),
                state.json && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            onClick: this.finish.bind(this),
                            className: "button success"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_finish" })
                    )
                )
            );
        }
    }]);

    return RestoreFavorites;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreFavorites);

/***/ }),

/***/ 2837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(702);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ResetSettings = function (_React$Component) {
    _inherits(ResetSettings, _React$Component);

    function ResetSettings() {
        _classCallCheck(this, ResetSettings);

        var _this = _possibleConstructorReturn(this, (ResetSettings.__proto__ || Object.getPrototypeOf(ResetSettings)).call(this));

        _this.state = {
            message: null
        };
        return _this;
    }

    _createClass(ResetSettings, [{
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "block-list no-border-bottom" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "header",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        style: {
                            fontWeight: "normal",
                            fontFamily: "Roboto-Medium, arial, sans-serif",
                            fontStyle: "normal"
                        },
                        content: "settings.reset_text_description",
                        generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                        "with": {
                            generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                            accessName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.access")
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { height: 60, width: "100%", paddingTop: 20 },
                        className: "button",
                        onClick: function onClick() {
                            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].clearSettings().then(function () {
                                _this3._setMessage("settings.restore_default_success");
                            });
                        }
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.reset")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "facolor-success",
                        style: { marginTop: "20px", height: "18px" }
                    },
                    this.state.message
                )
            );
        }
    }]);

    return ResetSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResetSettings);

/***/ }),

/***/ 2838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2833);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2839);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BackupSettings = function (_React$Component) {
    _inherits(BackupSettings, _React$Component);

    function BackupSettings() {
        _classCallCheck(this, BackupSettings);

        var _this = _possibleConstructorReturn(this, (BackupSettings.__proto__ || Object.getPrototypeOf(BackupSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(BackupSettings, [{
        key: "_changeType",
        value: function _changeType(e) {
            this.setState({
                restoreType: this.state.types.indexOf(e.target.value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("settings.backupcreate_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupCreate"], null);
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__["default"], null);
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackupFavorites__WEBPACK_IMPORTED_MODULE_4__["default"], null);
                    break;

                default:
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "select",
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType]
                    },
                    options
                ),
                content
            );
        }
    }]);

    return BackupSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackupSettings);

/***/ }),

/***/ 2839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2343);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BackupFavorites = function (_React$Component) {
    _inherits(BackupFavorites, _React$Component);

    function BackupFavorites() {
        _classCallCheck(this, BackupFavorites);

        return _possibleConstructorReturn(this, (BackupFavorites.__proto__ || Object.getPrototypeOf(BackupFavorites)).apply(this, arguments));
    }

    _createClass(BackupFavorites, [{
        key: "makeBackup",
        value: function makeBackup() {
            var data = this.props.starredMarkets.toJS();

            var blob = new Blob([JSON.stringify(data)], {
                type: "application/json; charset=us-ascii"
            });

            Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "favorites.json");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritestext" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "button",
                    {
                        onClick: this.makeBackup.bind(this),
                        className: "button success"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritesbtn" })
                )
            );
        }
    }]);

    return BackupFavorites;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(BackupFavorites, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuNTc3M2EzYjIxNDZiNjdkMWEzYTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9TZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zZXQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzRW50cnkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9BY2NvdW50c1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvV2FsbGV0U2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9QYXNzd29yZFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvUmVzdG9yZVNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvUmVzdG9yZUZhdm9yaXRlcy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Jlc2V0U2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9CYWNrdXBTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0JhY2t1cEZhdm9yaXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IEludGxTdG9yZSBmcm9tIFwic3RvcmVzL0ludGxTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzT2JqZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5sb2NhbGVzT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTGF0ZW5jaWVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuYXBpTGF0ZW5jaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgSW50bEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvSW50bEFjdGlvbnNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgV2Vic29ja2V0QWRkTW9kYWwgZnJvbSBcIi4vV2Vic29ja2V0QWRkTW9kYWxcIjtcclxuaW1wb3J0IFNldHRpbmdzRW50cnkgZnJvbSBcIi4vU2V0dGluZ3NFbnRyeVwiO1xyXG5pbXBvcnQgQWNjb3VudHNTZXR0aW5ncyBmcm9tIFwiLi9BY2NvdW50c1NldHRpbmdzXCI7XHJcbmltcG9ydCBXYWxsZXRTZXR0aW5ncyBmcm9tIFwiLi9XYWxsZXRTZXR0aW5nc1wiO1xyXG5pbXBvcnQgUGFzc3dvcmRTZXR0aW5ncyBmcm9tIFwiLi9QYXNzd29yZFNldHRpbmdzXCI7XHJcbmltcG9ydCBSZXN0b3JlU2V0dGluZ3MgZnJvbSBcIi4vUmVzdG9yZVNldHRpbmdzXCI7XHJcbmltcG9ydCBSZXNldFNldHRpbmdzIGZyb20gXCIuL1Jlc2V0U2V0dGluZ3NcIjtcclxuaW1wb3J0IEJhY2t1cFNldHRpbmdzIGZyb20gXCIuL0JhY2t1cFNldHRpbmdzXCI7XHJcbmltcG9ydCBBY2Nlc3NTZXR0aW5ncyBmcm9tIFwiLi9BY2Nlc3NTZXR0aW5nc1wiO1xyXG5pbXBvcnQge3NldH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge2dldEFsbG93ZWRMb2dpbnMsIGdldEZhdWNldH0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XHJcblxyXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IG1lbnVFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXMocHJvcHMpO1xyXG4gICAgICAgIGxldCBhY3RpdmVTZXR0aW5nID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gISFwcm9wcy5tYXRjaC5wYXJhbXMudGFiXHJcbiAgICAgICAgICAgID8gbWVudUVudHJpZXMuaW5kZXhPZihwcm9wcy5tYXRjaC5wYXJhbXMudGFiKVxyXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVTZXR0aW5nXCIsIDApO1xyXG4gICAgICAgIGlmICh0YWJJbmRleCA+PSAwKSBhY3RpdmVTZXR0aW5nID0gdGFiSW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBnZW5lcmFsID0gW1xyXG4gICAgICAgICAgICBcImxvY2FsZVwiLFxyXG4gICAgICAgICAgICBcInVuaXRcIixcclxuICAgICAgICAgICAgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG93U2V0dGxlc1wiLFxyXG4gICAgICAgICAgICBcInNob3dQcm9wb3NlZFR4XCIsXHJcbiAgICAgICAgICAgIFwid2FsbGV0TG9ja1RpbWVvdXRcIixcclxuICAgICAgICAgICAgXCJ0aGVtZXNcIixcclxuICAgICAgICAgICAgXCJzaG93QXNzZXRQZXJjZW50XCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIGRpc2FibGUgdGhhdCB0aGUgdXNlciBjYW4gY2hhbmdlIGxvZ2luIG1ldGhvZCBpZiBvbmx5IG9uZSBpcyBhbGxvd2VkXHJcbiAgICAgICAgaWYgKGdldEFsbG93ZWRMb2dpbnMoKS5sZW5ndGggPiAxKSBnZW5lcmFsLnB1c2goXCJwYXNzd29yZExvZ2luXCIpO1xyXG4gICAgICAgIGdlbmVyYWwucHVzaChcInJlc2V0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFwaVNlcnZlcjogcHJvcHMuc2V0dGluZ3MuZ2V0KFwiYXBpU2VydmVyXCIpLFxyXG4gICAgICAgICAgICBhY3RpdmVTZXR0aW5nLFxyXG4gICAgICAgICAgICBtZW51RW50cmllcyxcclxuICAgICAgICAgICAgc2V0dGluZ0VudHJpZXM6IHtcclxuICAgICAgICAgICAgICAgIGdlbmVyYWw6IGdlbmVyYWwsXHJcbiAgICAgICAgICAgICAgICBhY2Nlc3M6IFtcImFwaVNlcnZlclwiLCBcImZhdWNldF9hZGRyZXNzXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNob3dBZGROb2RlTW9kYWwgPSB0aGlzLnNob3dBZGROb2RlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVBZGROb2RlTW9kYWwgPSB0aGlzLmhpZGVBZGROb2RlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwgPSB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVSZW1vdmVOb2RlTW9kYWwgPSB0aGlzLmhpZGVSZW1vdmVOb2RlTW9kYWwuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy50YWIgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYikge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZU1lbnUodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudGFiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbnAuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSAhPT1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXModGhpcy5wcm9wcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXMobnApO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gY3VycmVudEVudHJpZXNbdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nXTtcclxuICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSBtZW51RW50cmllcy5pbmRleE9mKGN1cnJlbnRBY3RpdmUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBY3RpdmUgPSBtZW51RW50cmllc1tuZXdBY3RpdmVJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbWVudUVudHJpZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChuZXdBY3RpdmVJbmRleCAmJiBuZXdBY3RpdmVJbmRleCAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiBtZW51RW50cmllcy5pbmRleE9mKGN1cnJlbnRBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICFuZXdBY3RpdmUgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2V0dGluZyA+IG1lbnVFbnRyaWVzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QWRkTm9kZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWRkTm9kZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlbW92ZU5vZGVNb2RhbCh1cmwsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlUmVtb3ZlTm9kZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWVudUVudHJpZXMocHJvcHMpIHtcclxuICAgICAgICBpZiAocHJvcHMuZGVwcmVjYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1wid2FsbGV0XCIsIFwiYmFja3VwXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1lbnVFbnRyaWVzID0gW107XHJcblxyXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJnZW5lcmFsXCIpO1xyXG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcIndhbGxldFwiKTtcclxuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwiYWNjb3VudHNcIik7XHJcbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcImJhY2t1cFwiKTtcclxuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJyZXN0b3JlXCIpO1xyXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJhY2Nlc3NcIik7XHJcblxyXG4gICAgICAgIGlmIChnZXRGYXVjZXQoKS5zaG93KSBtZW51RW50cmllcy5wdXNoKFwiZmF1Y2V0X2FkZHJlc3NcIik7XHJcblxyXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJyZXNldFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnVFbnRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNb2RhbChlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZWZzLndzX21vZGFsLnNob3coZSwgLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShwYXRoLCB2YWx1ZSkge1xyXG4gICAgICAgIC8vIHVzZSBkaWZmZXJlbnQgY2hhbmdlIGhhbmRsZXIgYmVjYXVzZSBjaGVja2JveCBkb2Vzbid0IHdvcmtcclxuICAgICAgICAvLyBub3JtYWwgd2l0aCBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHNldChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIiksXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xyXG4gICAgICAgICAgICBzZXR0aW5nOiBcImJyb3dzZXJfbm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2hhbmdlU2V0dGluZyhzZXR0aW5nLCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQge2RlZmF1bHRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZEVudHJ5KHRhcmdldFZhbHVlLCB0YXJnZXREZWZhdWx0cykge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldERlZmF1bHRzKSByZXR1cm4gdGFyZ2V0VmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXREZWZhdWx0c1swXS50cmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0RGVmYXVsdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXR0aW5ncy4ke3RhcmdldERlZmF1bHRzW2ldLnRyYW5zbGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IHRhcmdldFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXREZWZhdWx0cy5pbmRleE9mKHRhcmdldFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChzZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVcIjpcclxuICAgICAgICAgICAgICAgIGxldCBteUxvY2FsZSA9IGNvdW50ZXJwYXJ0LmdldExvY2FsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBteUxvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEludGxBY3Rpb25zLnN3aXRjaExvY2FsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcImxvY2FsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRoZW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwidGhlbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRNYXJrZXRzXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRMb2NrVGltZW91dFwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTihuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obmV3VmFsdWUpICYmIHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImludmVyc2VNYXJrZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1NYXJrZXRPcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKSA9PT0gMDsgLy8gVVNEL0JUUyBpcyB0cnVlLCBCVFMvVVNEIGlzIGZhbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhcGlTZXJ2ZXJcIjpcclxuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcImFwaVNlcnZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlTZXJ2ZXI6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNob3dTZXR0bGVzXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG93UHJvcG9zZWRUeFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2hvd0Fzc2V0UGVyY2VudFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRMb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IGRlZmF1bHRzW3NldHRpbmddWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZS50cmFuc2xhdGUpIHJlZmVyZW5jZSA9IHJlZmVyZW5jZS50cmFuc2xhdGU7XHJcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUgPT09IHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bml0XCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKTtcclxuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBzZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0c1tzZXR0aW5nXVtpbmRleF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtzZXR0aW5nOiBzZXR0aW5nLCB2YWx1ZTogdmFsdWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNldCgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2xlYXJTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWRpcmVjdFRvRW50cnkoZW50cnkpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9zZXR0aW5ncy9cIiArIGVudHJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25DaGFuZ2VNZW51KGVudHJ5KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5tZW51RW50cmllcy5pbmRleE9mKGVudHJ5KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlU2V0dGluZzogaW5kZXhcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHthY3RpdmVTZXR0aW5nOiBpbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3NldHRpbmdzLCBkZWZhdWx0c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHttZW51RW50cmllcywgYWN0aXZlU2V0dGluZywgc2V0dGluZ0VudHJpZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZW50cmllcztcclxuICAgICAgICBsZXQgYWN0aXZlRW50cnkgPSBtZW51RW50cmllc1thY3RpdmVTZXR0aW5nXSB8fCBtZW51RW50cmllc1swXTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3RpdmVFbnRyeSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudHNcIjpcclxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8QWNjb3VudHNTZXR0aW5ncyAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIndhbGxldFwiOlxyXG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxXYWxsZXRTZXR0aW5ncyB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxQYXNzd29yZFNldHRpbmdzIC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPEJhY2t1cFNldHRpbmdzIC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicmVzdG9yZVwiOlxyXG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8UmVzdG9yZVNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTG9naW49e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFjY2Vzc1wiOlxyXG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8QWNjZXNzU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF1Y2V0PXtzZXR0aW5ncy5nZXQoXCJmYXVjZXRfYWRkcmVzc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM9e2RlZmF1bHRzLmFwaVNlcnZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlU2V0dGluZy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QWRkTm9kZU1vZGFsPXt0aGlzLnNob3dBZGROb2RlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSZW1vdmVOb2RlTW9kYWw9e3RoaXMuc2hvd1JlbW92ZU5vZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmF1Y2V0X2FkZHJlc3NcIjpcclxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZ2V0RmF1Y2V0KCkuZWRpdGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NldHRpbmdzLmdldChcImZhdWNldF9hZGRyZXNzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGYXVjZXQoKS5lZGl0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fb25DaGFuZ2VTZXR0aW5nLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhdWNldF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicmVzZXRcIjpcclxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8UmVzZXRTZXR0aW5ncyAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSBzZXR0aW5nRW50cmllc1thY3RpdmVFbnRyeV0ubWFwKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NldHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPXtzZXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHM9e2RlZmF1bHRzW3NldHRpbmddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlU2V0dGluZy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ob3RpZmljYXRpb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlcz17dGhpcy5wcm9wcy5sb2NhbGVzT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kZXByZWNhdGVkID8gXCJcIiA6IFwiZ3JpZC1ibG9ja1wifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgbWFyZ2luLWJsb2NrIHdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzaHJpbmsgc2V0dGluZ3MtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicGFuZWwtYmctY29sb3JcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51RW50cmllcy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gYWN0aXZlU2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9yZWRpcmVjdFRvRW50cnkuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbnRyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2V0dGluZ3MuXCIgKyBlbnRyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIG5vLW1hcmdpbiB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5cIiArIG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVFbnRyeSAhPSBcImFjY2Vzc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDUsIG1hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgc2V0dGluZ3MuJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1fdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWJnLWNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFdlYnNvY2tldEFkZE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZT17dGhpcy5zdGF0ZS5yZW1vdmVOb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZT17dGhpcy5zdGF0ZS5pc0FkZE5vZGVNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1JlbW92ZU5vZGVNb2RhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25BZGROb2RlQ2xvc2U9e3RoaXMuaGlkZUFkZE5vZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU5vZGVDbG9zZT17dGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFwaXM9e2RlZmF1bHRzW1wiYXBpU2VydmVyXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIGFwaT17ZGVmYXVsdHNbXCJhcGlTZXJ2ZXJcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnVybCA9PT0gdGhpcy5zdGF0ZS5hcGlTZXJ2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiICYmIGIudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb25uZWN0aW9uPXthcGlTZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcGlTZXJ2ZXJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBiYXNlU2V0IGZyb20gJy4vX2Jhc2VTZXQuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYCBkb2Vzbid0IGV4aXN0LFxuICogaXQncyBjcmVhdGVkLiBBcnJheXMgYXJlIGNyZWF0ZWQgZm9yIG1pc3NpbmcgaW5kZXggcHJvcGVydGllcyB3aGlsZSBvYmplY3RzXG4gKiBhcmUgY3JlYXRlZCBmb3IgYWxsIG90aGVyIG1pc3NpbmcgcHJvcGVydGllcy4gVXNlIGBfLnNldFdpdGhgIHRvIGN1c3RvbWl6ZVxuICogYHBhdGhgIGNyZWF0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsIFsneCcsICcwJywgJ3knLCAneiddLCA1KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC54WzBdLnkueik7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBOb3RpZnkgZnJvbSBcIm5vdGlmeWpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE1lc3NhZ2Uoa2V5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShrZXkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogbnVsbH0pO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UocGF0aCkge1xyXG4gICAgICAgIHJldHVybiBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTm90aWZpY2F0aW9uQ2hhbmdlKHBhdGgsICEhZXZ0LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2RlZmF1bHRzLCBzZXR0aW5nLCBzZXR0aW5nc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBvcHRpb25zLFxyXG4gICAgICAgICAgICBvcHRpb25hbCxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbixcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBzZWxlY3RlZCA9IHNldHRpbmdzLmdldChzZXR0aW5nKTtcclxuICAgICAgICBsZXQgbm9IZWFkZXIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChzZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdHMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25LZXkgPSBcImxhbmd1YWdlcy5cIiArIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlbnRyeX0gdmFsdWU9e2VudHJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRoZW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0cy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbktleSA9IFwic2V0dGluZ3MuXCIgKyBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodHJhbnNsYXRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZW50cnl9IHZhbHVlPXtlbnRyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm93c2VyX25vdGlmaWNhdGlvbnMuYWxsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshIXZhbHVlLmFsbG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnJvd3Nlcl9ub3RpZmljYXRpb25zLmFsbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19hbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJvd3Nlcl9ub3RpZmljYXRpb25zLmFkZGl0aW9uYWwudHJhbnNmZXJUb01lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdmFsdWUuYWxsb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXZhbHVlLmFkZGl0aW9uYWwudHJhbnNmZXJUb01lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyb3dzZXJfbm90aWZpY2F0aW9ucy5hbGxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19hZGRpdGlvbmFsX3RyYW5zZmVyX3RvX21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshIXZhbHVlLmFsbG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZnkubmVlZHNQZXJtaXNzaW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvelo3TkhZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLW5vLWJyb3dzZXItc3VwcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwic2V0dGluZ3MuYnJvd3Nlcl9ub3RpZmljYXRpb25zX2Rpc2FibGVkX2J5X2Jyb3dzZXJfbm90aWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0TWFya2V0c1wiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRMb2NrVGltZW91dFwiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKHRoaXMsIHNldHRpbmcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBlbnRyeS50cmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldHRpbmdzLiR7ZW50cnkudHJhbnNsYXRlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmcgPT09IFwidW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSA8QXNzZXROYW1lIG5hbWU9e2VudHJ5fSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gZW50cnkudHJhbnNsYXRlID8gZW50cnkudHJhbnNsYXRlIDogZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50cmFuc2xhdGUgPyBlbnRyeS50cmFuc2xhdGUgOiBlbnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZCh0aGlzLCBzZXR0aW5nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIgJiYgIXZhbHVlICYmICFvcHRpb25zKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyYW5zbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAge25vSGVhZGVyID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90by1NZWRpdW0sIGFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YHNldHRpbmdzLiR7c2V0dGluZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge2lucHV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpbnB1dH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29tcG9uZW50ID8gY29tcG9uZW50IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm15QWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm15QWNjb3VudHNcclxuICAgICAgICAgICAgKSB8fCBuZXh0UHJvcHMuaGlkZGVuQWNjb3VudHMgIT09IHRoaXMucHJvcHMuaGlkZGVuQWNjb3VudHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlSGlkZShhY2NvdW50LCBoaWRlLCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRvZ2dsZUhpZGVBY2NvdW50KGFjY291bnQsIGhpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge215QWNjb3VudHMsIGhpZGRlbkFjY291bnRzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGhpZGRlbkFjY291bnRzXHJcbiAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgICAgLmNvbmNhdChteUFjY291bnRzKVxyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICBpZiAoIWFjY291bnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5ub19hY2NvdW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50cy5tYXAoYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0lnbm9yZWQgPSBoaWRkZW5BY2NvdW50cy5oYXMoYWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaWRlTGluayA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSWdub3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uVG9nZ2xlSGlkZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub25Ub2dnbGVIaWRlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0lnbm9yZWQgPyBcInVuaWdub3JlXCIgOiBcImlnbm9yZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9hY2NvdW50LyR7YWNjb3VudH0vcGVybWlzc2lvbnNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy52aWV3X2tleXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hpZGVMaW5rfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BY2NvdW50c1NldHRpbmdzID0gY29ubmVjdChcclxuICAgIEFjY291bnRzU2V0dGluZ3MsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbXlBY2NvdW50czogQWNjb3VudFN0b3JlLmdldE15QWNjb3VudHMoKSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbkFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUhpZGRlbkFjY291bnRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHNTZXR0aW5ncztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NoYW5nZUFjdGl2ZVdhbGxldCwgV2FsbGV0RGVsZXRlfSBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldE1hbmFnZXJcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvb2t1cEFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc2V0TWVzc2FnZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb29rdXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvb2t1cEFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXRCcmFpbmtleVNlcXVlbmNlKCkge1xyXG4gICAgICAgIFdhbGxldERiLnJlc2V0QnJhaW5LZXlTZXF1ZW5jZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXNldE1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5icmFpbmtleV9yZXNldF9zdWNjZXNzXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7bG9va3VwQWN0aXZlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHtkZXByZWNhdGVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChkZXByZWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFuZ2VBY3RpdmVXYWxsZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8V2FsbGV0RGVsZXRlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XHJcbiAgICAgICAgICAgICAgICA8V2FsbGV0RGVsZXRlIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twYWRkaW5nOiBcIjE1cHggMFwifX0gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmxvb2t1cF90ZXh0XCIgLz46XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkxvb2t1cC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltX2xvb2t1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9va3VwQWN0aXZlID8gPEJhbGFuY2VDbGFpbUFjdGl2ZSAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twYWRkaW5nOiBcIjE1cHggMFwifX0gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV9zZXFfcmVzZXRcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfc2VxX3Jlc2V0X3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0QnJhaW5rZXlTZXF1ZW5jZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3NlcV9yZXNldF9idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc2V0TWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19IGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzZXRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPFdhbGxldENoYW5nZVBhc3N3b3JkIC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYWNrdXBSZXN0b3JlfSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cFwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi4vV2FsbGV0L0ltcG9ydEtleXNcIjtcclxuaW1wb3J0IHtDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXl9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVzdG9yZUZhdm9yaXRlcyBmcm9tIFwiLi9SZXN0b3JlRmF2b3JpdGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImtleVwiLCBcImxlZ2FjeVwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0V2FsbGV0TW9kZSgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwicGFzc3dvcmRMb2dpblwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiB0aGlzLnN0YXRlLnR5cGVzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cGFzc3dvcmRMb2dpbn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRMb2dpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJzZXR0aW5ncy53YWxsZXRfcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXJrLXRleHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3Mud2FsbGV0X3JlcXVpcmVkX3RleHRcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5fc2V0V2FsbGV0TW9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmVuYWJsZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0eXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLmJhY2t1cF8ke3R5cGV9YCl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrdXBSZXN0b3JlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYnJhaW5rZXlcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXhXaWR0aDogXCI0MHJlbVwiLCBwYWRkaW5nQm90dG9tOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9icmFpbmtleV90ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlV2FsbGV0RnJvbUJyYWlua2V5IG5lc3RlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzdG9yZUZhdm9yaXRlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8SW1wb3J0S2V5cyBwcml2YXRlS2V5PXtyZXN0b3JlVHlwZSA9PT0gMX0gLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NoYW5nZVR5cGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBub3RpZnkgZnJvbSBcImFjdGlvbnMvTm90aWZpY2F0aW9uQWN0aW9uc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jbGFzcyBSZXN0b3JlRmF2b3JpdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBqc29uOiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGV2dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBmYWxzZSwganNvbjogbnVsbH0pO1xyXG5cclxuICAgICAgICBsZXQgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGV2dC50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShjb250ZW50cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0ID0ganNvbltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7cXVvdGUsIGJhc2V9ID0gbWFya2V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1b3RlIHx8ICFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UganNvbiBkYXRhLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtqc29ufSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgY29uc3Qge2pzb259ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNsZWFyU3RhcnJlZE1hcmtldHMoKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcclxuICAgICAgICAgICAgbGV0IG1hcmtldCA9IGpzb25ba2V5XTtcclxuICAgICAgICAgICAgbGV0IHtxdW90ZSwgYmFzZX0gPSBtYXJrZXQ7XHJcblxyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQoXCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX3N1Y2Nlc3NcIiksXHJcbiAgICAgICAgICAgIGxldmVsOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IDJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3N0YXRlfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwbG9hZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc19lcnJvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmpzb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZpbmlzaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX2ZpbmlzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmVGYXZvcml0ZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRNZXNzYWdlKGtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoa2V5KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG51bGx9KTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLU1lZGl1bSwgYXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcInNldHRpbmdzLnJlc2V0X3RleHRfZGVzY3JpcHRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbE5hbWU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLmdlbmVyYWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGg9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxOYW1lOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5nZW5lcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NOYW1lOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5hY2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiA2MCwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclNldHRpbmdzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRNZXNzYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MucmVzdG9yZV9kZWZhdWx0X3N1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MucmVzZXRcIil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCIsIGhlaWdodDogXCIxOHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JhY2t1cENyZWF0ZX0gZnJvbSBcIi4uL1dhbGxldC9CYWNrdXBcIjtcclxuaW1wb3J0IEJhY2t1cEJyYWlua2V5IGZyb20gXCIuLi9XYWxsZXQvQmFja3VwQnJhaW5rZXlcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQmFja3VwRmF2b3JpdGVzIGZyb20gXCIuL0JhY2t1cEZhdm9yaXRlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiB0aGlzLnN0YXRlLnR5cGVzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0eXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLmJhY2t1cGNyZWF0ZV8ke3R5cGV9YCl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cENyZWF0ZSAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJyYWlua2V5XCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cEJyYWlua2V5IC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVzXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cEZhdm9yaXRlcyAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY2hhbmdlVHlwZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlc1tyZXN0b3JlVHlwZV19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuXHJcbmNsYXNzIEJhY2t1cEZhdm9yaXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBtYWtlQmFja3VwKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy50b0pTKCk7XHJcblxyXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEpXSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXMtYXNjaWlcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzYXZlQXMoYmxvYiwgXCJmYXZvcml0ZXMuanNvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXN0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm1ha2VCYWNrdXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc2J0blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChCYWNrdXBGYXZvcml0ZXMsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0c1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBRkE7QUFvQkE7QUFwQkE7QUF1QkE7Ozs7QUExQkE7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFnREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEVBO0FBQ0E7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBYUE7QUFDQTtBQTVFQTtBQUNBO0FBOEVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUlBO0FBVkE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQXBCQTtBQVhBO0FBbUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVNBO0FBakJBO0FBTkE7QUFwQ0E7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBaEVBO0FBc0ZBOzs7O0FBamNBO0FBQ0E7QUFtY0E7Ozs7Ozs7O0FDcmRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFVQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBREE7QUFoQkE7QUFxQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUF4Q0E7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQTFKQTtBQTRKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFEQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQVJBO0FBVUE7QUFaQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhDQTtBQTJDQTs7OztBQTFQQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBZUE7QUFDQTtBQURBO0FBZkE7QUFDQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBekNBO0FBREE7QUE4Q0E7Ozs7QUE5RUE7QUFDQTtBQWdGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQWRBO0FBM0JBO0FBZ0RBOzs7O0FBckZBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQWNBO0FBbkJBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQVRBO0FBWUE7Ozs7QUFuR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBbkJBO0FBOEJBOzs7O0FBM0ZBO0FBQ0E7QUE2RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFUQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVEE7QUFXQTtBQVhBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWxDQTtBQTBDQTs7OztBQW5FQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQVRBO0FBWUE7Ozs7QUF6REE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFZQTs7OztBQXpCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=