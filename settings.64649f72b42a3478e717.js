(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 2732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2337);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2733);
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
                alt_container__WEBPACK_IMPORTED_MODULE_3___default.a,
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

/***/ 2733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2734);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(862);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2735);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2736);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2737);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2756);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2757);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2759);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2760);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(872);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(569);


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

        var general = ["locale", "unit", "browser_notifications", "showSettles", "walletLockTimeout", "themes", "showAssetPercent"];
        // disable that the user can change login method if only one is allowed
        if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getAllowedLogins"])().length > 1) general.push("passwordLogin");
        general.push("reset");

        _this.state = {
            apiServer: props.settings.get("apiServer"),
            activeSetting: activeSetting,
            menuEntries: menuEntries,
            settingEntries: {
                general: general,
                access: ["apiServer", "faucet_address"]
            }
        };

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
                        triggerModal: this.triggerModal.bind(this)
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
                    ref: "ws_modal",
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

/***/ 2734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(910);


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

/***/ 2735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1217);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1001);
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

/***/ 2736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
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

/***/ 2737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2738);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2740);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
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

/***/ 2756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2754);
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

/***/ 2757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2332);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2747);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2334);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2758);
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

/***/ 2758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
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

/***/ 2759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730);
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

/***/ 2760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2332);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2755);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2761);
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

/***/ 2761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1392);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(709);
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
//# sourceMappingURL=settings.js.map