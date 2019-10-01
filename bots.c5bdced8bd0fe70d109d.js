(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 2453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2187);
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

/***/ 2591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2592);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(716);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Bots = function (_React$Component) {
    _inherits(Bots, _React$Component);

    function Bots(props) {
        var _this2 = this;

        _classCallCheck(this, Bots);

        var _this = _possibleConstructorReturn(this, (Bots.__proto__ || Object.getPrototypeOf(Bots)).call(this, props));

        _this.handleChangeStrategy = function (event) {
            _this.setState({ selectStrategy: event.target.value });
        };

        _this.handleChangeBot = function (event) {
            var selectBot = event.target.value;

            _this.setState({
                selectBot: selectBot,
                botRun: _this.state.bots[selectBot].run
            });
        };

        _this.handleCreate = function (event) {
            event.preventDefault();
            var bots = _this.state.bots;

            bots.push(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].create(_this.state.selectStrategy, _this.props.currentAccount, _this.createForm.state));
            _this.setState({ bots: bots });

            if (_this.createForm.validate) _this.createForm.validate("name", _this.createForm.state.name);
        };

        _this.handleEnableCreate = function (enableCreate) {
            if (_this.state.enableCreate != enableCreate) _this.setState({ enableCreate: enableCreate });
        };

        _this.handleStartBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var bot;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context.next = 3;
                            return bot.start();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.handleStopBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var bot;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context2.next = 3;
                            return bot.stop();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.handleDeleteBot = function () {
            lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].delete(_this.state.bots[_this.state.selectBot]);

            _this.setState({
                bots: lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(_this.props.currentAccount),
                selectBot: 0
            });
        };

        _this.strategies = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies;
        _this.state = {
            selectStrategy: Object.keys(_this.strategies)[0],
            bots: [],
            selectBot: 0,
            enableCreate: false,
            botRun: false
        };
        return _this;
    }

    _createClass(Bots, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var bots = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(this.props.currentAccount);
            this.setState({
                bots: bots,
                selectBot: 0,
                botRun: bots[0] ? bots[0].run : false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            //console.log("start render main page", this.props)
            if (this.props.currentAccount === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: "/" });
            }

            var CreateForm = this.strategies[this.state.selectStrategy].create;

            var bot = this.state.bots[this.state.selectBot] || null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block shrink vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            style: { paddingBottom: 20, overflow: "visible" },
                            className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                            onSubmit: this.handleCreate,
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.select_strategy" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "content-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        className: "form-control bts-select ",
                                        value: this.state.selectStrategy,
                                        onChange: this.handleChangeStrategy
                                    },
                                    Object.keys(this.strategies).map(function (name) {
                                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "option",
                                            { key: name, value: name },
                                            name
                                        );
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateForm, {
                                ref: function ref(form) {
                                    _this3.createForm = form;
                                },
                                account: this.props.currentAccount,
                                name: this.state.selectStrategy,
                                enableCreate: this.handleEnableCreate
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button no-margin",
                                    type: "submit",
                                    disabled: !this.state.enableCreate
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.create" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.bot_state" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                className: "form-control bts-select",
                                value: this.state.selectBot,
                                onChange: this.handleChangeBot
                            },
                            this.state.bots.map(function (bot, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "option",
                                    { key: bot.name, value: index },
                                    bot.name + " (" + bot.constructor.name + ")"
                                );
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            bot ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bot.state, { key: bot.name, bot: bot }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStartBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.start" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStopBot,
                                        disabled: !this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.stop" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleDeleteBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.delete" })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.select_bot" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Bots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Bots, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().passwordAccount
        };
    }
}));

/***/ }),

/***/ 2592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2593);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2615);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2618);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2622);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




//import RelativeOrders from "./RelativeOrders";


var bots = {};

/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
        TrailingStop: _TrailingStop__WEBPACK_IMPORTED_MODULE_1__["default"],
        //RelativeOrders,
        PercentUp: _PercentUp__WEBPACK_IMPORTED_MODULE_2__["default"]
    },

    create: function create(strategy, account, initData) {
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + initData.name + "]");

        var bot = new this.strategies[strategy](account, storage, initData);
        bots["__bots__" + storage.name] = bot;

        return bot;
    },
    delete: function _delete(bot) {
        var name = "__bots__" + bot.storage.name;

        bots[name].delete();
        delete bots[name];
    },
    getBots: function getBots(account) {
        var _this = this;

        //console.log("getBots", Object.keys(bots))

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAccountBot(account).map(function (key) {
            if (bots[key]) return bots[key];

            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            if (!strategy || !name) return null;

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + name + "]");

            var bot = new _this.strategies[strategy](account, storage);
            bots[key] = bot;
            return bot;
        }).filter(function (el) {
            return el;
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].has(account + "::" + strategy + "[" + name + "]");
    }
});

/***/ }),

/***/ 2593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2594);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2612);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(574);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2614);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var SpreadTrade = function () {
    function SpreadTrade(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, SpreadTrade);

        this.state = components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state, ticker, feedPrice, buyPrice, sellPrice, buyOrder, sellOrder, accountBalances, baseBalance, quoteBalance, baseAmount, quoteAmount, orderAmount, amount, obj, _obj, _orderAmount, _amount, _obj2, _obj3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();
                            //console.log("state", state);

                            _context.next = 3;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.base.symbol, _this.quote.symbol);

                        case 3:
                            ticker = _context.sent;


                            _this.defaultPrice = state.defaultPrice;

                            if (!state.fromMarket) {
                                _context.next = 9;
                                break;
                            }

                            _context.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            _context.next = 12;
                            break;

                        case 9:
                            _context.next = 11;
                            return _this.getFeed();

                        case 11:
                            _context.t0 = _context.sent;

                        case 12:
                            feedPrice = _context.t0;
                            buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber();
                            sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();


                            feedPrice = feedPrice.toNumber();

                            if (!(feedPrice == 0)) {
                                _context.next = 18;
                                break;
                            }

                            return _context.abrupt("return");

                        case 18:
                            if (!state.base.order.id) {
                                _context.next = 24;
                                break;
                            }

                            _context.next = 21;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.base.order.id]);

                        case 21:
                            _context.t1 = _context.sent[0];
                            _context.next = 25;
                            break;

                        case 24:
                            _context.t1 = state.base.order.id;

                        case 25:
                            buyOrder = _context.t1;

                            if (!state.quote.order.id) {
                                _context.next = 32;
                                break;
                            }

                            _context.next = 29;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.quote.order.id]);

                        case 29:
                            _context.t2 = _context.sent[0];
                            _context.next = 33;
                            break;

                        case 32:
                            _context.t2 = state.quote.order.id;

                        case 33:
                            sellOrder = _context.t2;
                            _context.next = 36;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 36:
                            _context.t3 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context.t4 = {};
                            accountBalances = _context.sent.reduce(_context.t3, _context.t4);
                            baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance);
                            quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance);
                            baseAmount = state.base.percent.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(baseBalance).times(state.base.amount).div(100).toNumber() : state.base.amount;
                            quoteAmount = state.quote.percent.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quoteBalance).times(state.quote.amount).div(100).toNumber() : state.quote.amount;


                            console.log("prices", buyPrice, feedPrice, sellPrice);
                            console.log("orders", buyOrder, sellOrder);

                            if (!buyOrder) {
                                _context.next = 69;
                                break;
                            }

                            //check Price
                            console.log("check buyOrder: move=" + (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice)) {
                                _context.next = 67;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 51;
                            return _this.account.cancelOrder(state.base.order.id);

                        case 51:

                            // check amount in order
                            orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, baseAmount);
                            _context.prev = 55;
                            _context.next = 58;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 58:
                            obj = _context.sent;

                            state.base.order = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                amount: amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
                            _context.next = 67;
                            break;

                        case 63:
                            _context.prev = 63;
                            _context.t5 = _context["catch"](55);

                            _this.logger.error(_context.t5);
                            state.base.order.id = undefined;

                        case 67:
                            _context.next = 84;
                            break;

                        case 69:
                            if (/^1.7.\d*$/.test(state.base.order.id)) {
                                // fill order
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

                                state.base.order.id = undefined;
                            }

                            console.log("create buyOrder: balance=" + (baseBalance >= baseAmount) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(baseBalance >= baseAmount && ticker.lowest_ask > buyPrice)) {
                                _context.next = 84;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 73;
                            _context.next = 76;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, baseAmount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 76:
                            _obj = _context.sent;

                            state.base.order = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                amount: baseAmount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= baseAmount);
                            _context.next = 84;
                            break;

                        case 81:
                            _context.prev = 81;
                            _context.t6 = _context["catch"](73);

                            _this.logger.error(_context.t6);

                        case 84:
                            if (!sellOrder) {
                                _context.next = 108;
                                break;
                            }

                            //check Price
                            console.log("check sellOrder: move=" + (Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice)) {
                                _context.next = 106;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 90;
                            return _this.account.cancelOrder(state.quote.order.id);

                        case 90:

                            // check amount in order
                            _orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

                            _amount = Math.min(quoteBalance, quoteAmount);
                            _context.prev = 94;
                            _context.next = 97;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 97:
                            _obj2 = _context.sent;

                            state.quote.order = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                amount: _amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= _amount);
                            _context.next = 106;
                            break;

                        case 102:
                            _context.prev = 102;
                            _context.t7 = _context["catch"](94);

                            _this.logger.error(_context.t7);
                            state.quote.order.id = undefined;

                        case 106:
                            _context.next = 123;
                            break;

                        case 108:
                            if (/^1.7.\d*$/.test(state.quote.order.id)) {
                                // fill order
                                !["", "-"].includes(state.base.balance) && (state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
                                state.quote.order.id = undefined;
                            }

                            console.log("create sellOrder: balance=" + (quoteBalance >= quoteAmount) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(quoteBalance >= quoteAmount && ticker.highest_bid < sellPrice)) {
                                _context.next = 123;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 112;
                            _context.next = 115;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, quoteAmount, sellPrice);

                        case 115:
                            _obj3 = _context.sent;

                            state.quote.order = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                amount: quoteAmount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= quoteAmount);
                            _context.next = 123;
                            break;

                        case 120:
                            _context.prev = 120;
                            _context.t8 = _context["catch"](112);

                            _this.logger.error(_context.t8);

                        case 123:

                            _this.storage.write(state);

                        case 124:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[55, 63], [73, 81], [94, 102], [112, 120]]);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                base: {
                    asset: initData.baseAsset,
                    balance: initData.baseBalance,
                    spread: initData.baseSpread,
                    amount: initData.baseAmount,
                    percent: initData.percentBaseAmount,
                    order: {
                        //id, price and amount
                    }
                },
                quote: {
                    asset: initData.quoteAsset,
                    balance: initData.quoteBalance,
                    spread: initData.quoteSpread,
                    amount: initData.quoteAmount,
                    percent: initData.percentQuoteAmount,
                    order: {
                        //id, price and amount
                    }
                },
                fromMarket: initData.fromMarket,
                defaultPrice: initData.defaultPrice
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(SpreadTrade, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.base.asset];

                            case 3:
                                this.base = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quote.asset];

                            case 6:
                                this.quote = _context2.sent;


                                if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
                                    if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
                                } else {
                                    this.getFeed = this.getUIAFeed;
                                }

                                _context2.next = 10;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 10:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }, {
        key: "getCoreFeed",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var rate, _ref5, _ref6, base, quote;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                rate = void 0;

                                if (!(this.base.id == "1.3.0")) {
                                    _context4.next = 7;
                                    break;
                                }

                                _context4.next = 4;
                                return this.quote.update();

                            case 4:
                                rate = this.quote.options.core_exchange_rate;
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.next = 9;
                                return this.base.update();

                            case 9:
                                rate = this.base.options.core_exchange_rate;

                            case 10:
                                _ref5 = rate.base.asset_id == this.base.id ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref6 = _slicedToArray(_ref5, 2), base = _ref6[0], quote = _ref6[1];
                                return _context4.abrupt("return", Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, this.base.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision))));

                            case 12:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getCoreFeed() {
                return _ref4.apply(this, arguments);
            }

            return getCoreFeed;
        }()
    }, {
        key: "getSmartFeed",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var bts, rate, _ref8, _ref9, base, quote, basePrice, quotePrice;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"]["bts"];

                            case 2:
                                bts = _context5.sent;
                                _context5.next = 5;
                                return this.base.update();

                            case 5:
                                rate = this.base.options.core_exchange_rate;
                                _ref8 = rate.base.asset_id == "1.3.0" ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref9 = _slicedToArray(_ref8, 2), base = _ref9[0], quote = _ref9[1];
                                basePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.base.precision)));
                                _context5.next = 10;
                                return this.quote.update();

                            case 10:
                                rate = this.quote.options.core_exchange_rate;
                                if (rate.base.asset_id == "1.3.0") {
                                    base = rate.base;
                                    quote = rate.quote;
                                } else {
                                    base = rate.quote;
                                    quote = rate.base;
                                }

                                quotePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision)));
                                return _context5.abrupt("return", quotePrice.div(basePrice));

                            case 14:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getSmartFeed() {
                return _ref7.apply(this, arguments);
            }

            return getSmartFeed;
        }()
    }, {
        key: "getUIAFeed",
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (!this.defaultPrice) {
                                    _context6.next = 4;
                                    break;
                                }

                                _context6.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.defaultPrice);
                                _context6.next = 7;
                                break;

                            case 4:
                                _context6.next = 6;
                                return this.binancePrice(this.base.symbol, this.quote.symbol);

                            case 6:
                                _context6.t0 = _context6.sent;

                            case 7:
                                return _context6.abrupt("return", _context6.t0);

                            case 8:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getUIAFeed() {
                return _ref10.apply(this, arguments);
            }

            return getUIAFeed;
        }()
    }, {
        key: "binancePrice",
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(base, quote) {
                var asset, response, data;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                asset = ("" + quote.split(".").slice(-1)[0] + base.split(".").slice(-1)[0]).toUpperCase().replace("USD", "USDT");

                                console.log("get asset: " + asset);
                                this.priceArray = this.priceArray || [];

                                _context7.prev = 3;
                                _context7.next = 6;
                                return fetch("https://api.binance.com/api/v1/trades?symbol=" + asset + "&limit=1");

                            case 6:
                                response = _context7.sent;
                                _context7.next = 9;
                                return response.json();

                            case 9:
                                data = _context7.sent;

                                this.priceArray.push(data[0].price);
                                //this.priceArray.push(10)
                                _context7.next = 16;
                                break;

                            case 13:
                                _context7.prev = 13;
                                _context7.t0 = _context7["catch"](3);

                                this.logger.error("Error Binance request: " + asset + ", error: " + _context7.t0);

                            case 16:

                                if (this.priceArray.length > 10) this.priceArray.shift();

                                return _context7.abrupt("return", this.priceArray.length > 0 ? this.priceArray.reduce(function (a, b) {
                                    return a.plus(b);
                                }, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0)).div(this.priceArray.length) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0));

                            case 18:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[3, 13]]);
            }));

            function binancePrice(_x, _x2) {
                return _ref11.apply(this, arguments);
            }

            return binancePrice;
        }()
    }]);

    return SpreadTrade;
}();

SpreadTrade.create = components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (SpreadTrade);

/***/ }),

/***/ 2594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            baseAsset: "USD",
            quoteAsset: "BTC",
            baseAmount: 10,
            quoteAmount: 0.01,
            baseSpread: 10,
            quoteSpread: 10,
            baseBalance: 100,
            quoteBalance: 0.1,
            percentBaseAmount: false,
            percentQuoteAmount: false,
            validate: ["name"]
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            console.log(name, value);

            if (["baseAsset", "quoteAsset"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAsset":
                case "quoteAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "baseBalance":
                case "quoteBalance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAmount":
                case "quoteAmount":
                case "baseSpread":
                case "quoteSpread":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "defaultPrice":
                    if (!isNaN(+value)) _this.setState({
                        validate: validate.filter(function (input) {
                            return input !== name;
                        })
                    });else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        autoComplete: "name",
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "baseAsset",
                            value: this.state.baseAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseBalance",
                            id: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.baseBalance,
                            onChange: this.handleChange,
                            autoComplete: "baseBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentBaseAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseAmount",
                            id: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.baseAmount,
                            onChange: this.handleChange,
                            autoComplete: "baseAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseSpread",
                            id: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.baseSpread,
                            onChange: this.handleChange,
                            autoComplete: "baseSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "quoteAsset",
                            value: this.state.quoteAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteBalance",
                            id: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteBalance,
                            onChange: this.handleChange,
                            autoComplete: "quoteBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentQuoteAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteAmount",
                            id: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteAmount,
                            onChange: this.handleChange,
                            autoComplete: "quoteAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteSpread",
                            id: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteSpread,
                            onChange: this.handleChange,
                            autoComplete: "quoteSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.default_price" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "defaultPrice",
                        id: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        autoComplete: "defaultPrice",
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.get_price_from_market" })
                    )
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);


/* harmony default export */ __webpack_exports__["default"] = ({
    db: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                //console.log(`call Apis.db.${method}(${[...arguments]})`);
                return apis.instance().db_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    history: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().history_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    network: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().network_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    crypto: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().crypto_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    orders: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().orders_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    })
});

/***/ }),

/***/ 2596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLabel", function() { return AssetLabel; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2597);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2453);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2600);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(560);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var AssetLabel = function (_React$Component) {
    _inherits(AssetLabel, _React$Component);

    function AssetLabel() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, AssetLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssetLabel.__proto__ || Object.getPrototypeOf(AssetLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: null
        }, _this.hidePrefix = function (name) {
            var arr = name.split(".");
            if (Object(branding__WEBPACK_IMPORTED_MODULE_7__["getAssetHideNamespaces"])().includes(arr[0] + ".")) arr.shift();

            return arr.join(".");
        }, _this.setAssetName = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][name];

                            case 2:
                                asset = _context.sent;


                                _this.setState({
                                    name: asset.bitasset_data_id ? "bit" + name : name
                                });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AssetLabel, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setAssetName(this.props.name);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.name !== this.props.name) this.setAssetName(nextProps.name);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    replaceNoneToBts: false,
                    maxWidth: 30,
                    name: this.props.name
                }),
                this.hidePrefix(this.state.name || this.props.name)
            );
        }
    }]);

    return AssetLabel;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var options = Object(branding__WEBPACK_IMPORTED_MODULE_7__["getMyMarketsQuotes"])().map(function (name) {
    return {
        value: name,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AssetLabel, { name: name })
    };
});

var AssetSelector = function (_React$Component2) {
    _inherits(AssetSelector, _React$Component2);

    function AssetSelector() {
        var _ref3,
            _this4 = this;

        var _temp2, _this3, _ret2;

        _classCallCheck(this, AssetSelector);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = AssetSelector.__proto__ || Object.getPrototypeOf(AssetSelector)).call.apply(_ref3, [this].concat(args))), _this3), _this3.onChange = function (option) {
            console.log("onChange", option);
            _this3.props.onChange({
                target: {
                    name: _this3.props.name,
                    value: option ? option.value : ""
                }
            });
        }, _this3.promiseOptions = function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue) {
                var result, asset;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                inputValue = inputValue.toUpperCase();

                                result = options.filter(function (i) {
                                    return i.value == inputValue;
                                });

                                if (!(result.length === 0 && inputValue)) {
                                    _context2.next = 7;
                                    break;
                                }

                                _context2.next = 5;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(inputValue, 1);

                            case 5:
                                asset = _context2.sent[0];


                                if (asset && !options.find(function (i) {
                                    return i.value == asset.symbol;
                                })) {
                                    options.push({
                                        value: asset.symbol,
                                        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AssetLabel, { name: asset.symbol })
                                    });
                                }

                            case 7:
                                return _context2.abrupt("return", { options: options });

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this4);
            }));

            return function (_x2) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp2), _possibleConstructorReturn(_this3, _ret2);
    }

    _createClass(AssetSelector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.promiseOptions = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.promiseOptions, 200);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var value = options.find(function (option) {
                return option.value === _this5.props.value;
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { marginBottom: 30 } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    value: value,
                    onChange: this.onChange,
                    loadOptions: this.promiseOptions,
                    searchPromptText: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("bots.asset_selector.wait"),
                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("bots.asset_selector.placeholder")
                })
            );
        }
    }]);

    return AssetSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetSelector);

/***/ }),

/***/ 2599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2595);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Asset = function () {
    _createClass(Asset, null, [{
        key: "get",
        value: function get(_, name) {
            if (this[name]) return this[name];

            return (/^1\.3\.\d+$/.test(name) || !isNaN(name) ? this.id(name) : this.getAsset(name)
            );
        }
    }, {
        key: "getAsset",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_symbol) {
                var symbol, obj;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                symbol = _symbol.toUpperCase();


                                this.map = this.map || {};

                                if (!this.map[symbol]) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", this.map[symbol]);

                            case 4:
                                _context.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.list_assets(symbol, 1);

                            case 6:
                                obj = _context.sent[0];

                                if (!(!obj || obj.symbol !== symbol)) {
                                    _context.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset " + symbol + "! Blockchain return " + (obj ? obj.symbol : obj));

                            case 9:

                                this.map[symbol] = new this(obj);
                                return _context.abrupt("return", this.map[symbol]);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAsset(_x) {
                return _ref.apply(this, arguments);
            }

            return getAsset;
        }()
    }, {
        key: "id",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_id) {
                var _this = this;

                var asset;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.map = this.map || {};
                                asset = Object.keys(this.map).find(function (symbol) {
                                    return _this.map[symbol].id == _id;
                                });

                                if (!asset) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt("return", this.map[asset]);

                            case 4:
                                _context2.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([_id]);

                            case 6:
                                asset = _context2.sent[0];

                                if (asset) {
                                    _context2.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset by id " + _id + "!");

                            case 9:

                                this.map[asset.symbol] = new this(asset);
                                return _context2.abrupt("return", this.map[asset.symbol]);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function id(_x2) {
                return _ref2.apply(this, arguments);
            }

            return id;
        }()
    }, {
        key: "fromParam",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.t0 = param.amount;
                                _context3.next = 3;
                                return this.id(param.asset_id);

                            case 3:
                                _context3.t1 = _context3.sent;
                                return _context3.abrupt("return", {
                                    amount: _context3.t0,
                                    asset: _context3.t1
                                });

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fromParam(_x3) {
                return _ref3.apply(this, arguments);
            }

            return fromParam;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this2 = this;

                var assets;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.map = this.map || {};

                                _context4.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets(Object.keys(this.map).map(function (symbol) {
                                    return _this2.map[symbol].id;
                                }));

                            case 3:
                                assets = _context4.sent;

                                assets.forEach(function (asset) {
                                    return Object.assign(_this2.map[asset.symbol], asset);
                                });

                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function update() {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }]);

    function Asset(rpcObj) {
        _classCallCheck(this, Asset);

        Object.assign(this, rpcObj);
    }

    _createClass(Asset, [{
        key: "toParam",
        value: function toParam() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return { amount: number, asset_id: this.id };
        }
    }, {
        key: "fee",
        value: function fee() {
            return this.options.market_fee_percent / 100 / 100;
        }
    }, {
        key: "update",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.t0 = Object;
                                _context5.t1 = this;
                                _context5.next = 4;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([this.id]);

                            case 4:
                                _context5.t2 = _context5.sent[0];

                                _context5.t0.assign.call(_context5.t0, _context5.t1, _context5.t2);

                            case 6:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function update() {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }]);

    return Asset;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Proxy({}, Asset));

/***/ }),

/***/ 2612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value,
                base = void 0,
                quote = void 0;

            //console.log(name, value, typeof value);

            switch (name) {
                case "baseAmount":
                    base = _this.state.base;
                    base.amount = value;
                    _this.setState({ base: base });
                    break;
                case "percentBaseAmount":
                    base = _this.state.base;
                    base.percent = value == "true";
                    _this.setState({ base: base });
                    break;
                case "baseBalance":
                    base = _this.state.base;
                    base.balance = value;
                    _this.setState({ base: base });
                    break;
                case "baseSpread":
                    base = _this.state.base;
                    base.spread = value;
                    _this.setState({ base: base });
                    break;
                case "quoteAmount":
                    quote = _this.state.quote;
                    quote.amount = value;
                    _this.setState({ quote: quote });
                    break;
                case "percentQuoteAmount":
                    quote = _this.state.quote;
                    quote.percent = value == "true";
                    _this.setState({ quote: quote });
                    break;
                case "quoteBalance":
                    quote = _this.state.quote;
                    quote.balance = value;
                    _this.setState({ quote: quote });
                    break;
                case "quoteSpread":
                    quote = _this.state.quote;
                    quote.spread = value;
                    _this.setState({ quote: quote });
                    break;
                case "defaultPrice":
                    _this.setState({ defaultPrice: value });
                    break;
                case "fromMarket":
                    _this.setState({ fromMarket: event.target.checked });
                    break;
            }

            //this.setState({[name]: value}, () => this.validate(name, value));
        }, _this.handleUpdateBot = function () {
            var stateNow = _this.props.bot.storage.read();
            _this.state.base.order = stateNow.base.order;
            _this.state.quote.order = stateNow.quote.order;

            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(Object.assign({ validate: [] }, this.props.bot.storage.read()));
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "baseAsset",
                            value: {
                                value: this.state.base.asset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.base.asset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.base.balance,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentBaseAmount",
                                checked: this.state.base.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                checked: !this.state.base.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.base.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.base.spread,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "quoteAsset",
                            value: {
                                value: this.state.quote.asset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.quote.asset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.balance,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentQuoteAmount",
                                checked: this.state.quote.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                checked: !this.state.quote.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.spread,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.default_price" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket,
                            disabled: this.props.bot.run
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.get_price_from_market" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(581);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(579);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(407);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Account = function () {
    function Account(name) {
        var _this = this;

        var feeSymbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BTS";

        _classCallCheck(this, Account);

        this.promise = Promise.all([lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_by_name(name), lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][feeSymbol]]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                acc = _ref2[0],
                fee = _ref2[1];

            _this.acc = acc;
            _this.feeAsset = fee;
        });
    }

    _createClass(Account, [{
        key: "cancelOrder",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.promise;

                            case 2:
                                return _context.abrupt("return", this.sendTransaction("limit_order_cancel", {
                                    fee: this.feeAsset.toParam(),
                                    fee_paying_account: this.acc.id,
                                    order: id,
                                    extensions: []
                                }));

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function cancelOrder(_x2) {
                return _ref3.apply(this, arguments);
            }

            return cancelOrder;
        }()
    }, {
        key: "buy",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(buySymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2025-02-02T02:02:02";
                var buyAsset, baseAsset, buyAmount, sellAmount, tx;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.promise;

                            case 2:
                                _context2.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof buySymbol === "undefined" ? "undefined" : _typeof(buySymbol)) === "object" ? buySymbol.asset_id : buySymbol];

                            case 4:
                                buyAsset = _context2.sent;
                                _context2.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? baseSymbol.asset_id : baseSymbol];

                            case 7:
                                baseAsset = _context2.sent;
                                buyAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])((typeof buySymbol === "undefined" ? "undefined" : _typeof(buySymbol)) === "object" ? buySymbol.amount : amount).times(Math.pow(10, buyAsset.precision)).toString());
                                sellAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context2.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context2.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: baseAsset.toParam(sellAmount),
                                    min_to_receive: buyAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context2.sent;
                                _context2.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context2.abrupt("return", _context2.sent[0]);

                            case 18:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function buy(_x3, _x4, _x5, _x6) {
                return _ref4.apply(this, arguments);
            }

            return buy;
        }()
    }, {
        key: "sell",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sellSymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2025-02-02T02:02:02";
                var sellAsset, baseAsset, sellAmount, buyAmount, tx;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.promise;

                            case 2:
                                _context3.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof sellSymbol === "undefined" ? "undefined" : _typeof(sellSymbol)) === "object" ? sellSymbol.asset_id : sellSymbol];

                            case 4:
                                sellAsset = _context3.sent;
                                _context3.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? baseSymbol.asset_id : baseSymbol];

                            case 7:
                                baseAsset = _context3.sent;
                                sellAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])((typeof sellSymbol === "undefined" ? "undefined" : _typeof(sellSymbol)) === "object" ? sellSymbol.amount : amount).times(Math.pow(10, sellAsset.precision)).toString());
                                buyAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context3.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context3.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: sellAsset.toParam(sellAmount),
                                    min_to_receive: baseAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context3.sent;
                                _context3.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context3.abrupt("return", _context3.sent[0]);

                            case 18:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function sell(_x9, _x10, _x11, _x12) {
                return _ref5.apply(this, arguments);
            }

            return sell;
        }()
    }, {
        key: "balances",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _args4 = arguments;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.promise;

                            case 2:
                                return _context4.abrupt("return", lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_balances(this.acc.id, [].concat(Array.prototype.slice.call(_args4))));

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function balances() {
                return _ref6.apply(this, arguments);
            }

            return balances;
        }()
    }, {
        key: "sendTransaction",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type, operation) {
                var tr, private_key;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["TransactionBuilder"]();

                                tr.add_type_operation(type, operation);
                                _context5.next = 4;
                                return tr.set_required_fees();

                            case 4:
                                _context5.next = 6;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__["default"].unlock();

                            case 6:
                                private_key = stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].getPrivateKey(this.acc.active.key_auths[0][0]);

                                tr.add_signer(private_key, private_key.toPublicKey().toPublicKeyString());

                                return _context5.abrupt("return", tr.broadcast());

                            case 9:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function sendTransaction(_x15, _x16) {
                return _ref7.apply(this, arguments);
            }

            return sendTransaction;
        }()
    }]);

    return Account;
}();

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ 2615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2617);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(574);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2614);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var TrailingStop = function () {
    function TrailingStop(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, TrailingStop);

        this.state = components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state, ticker, price, needStoploss, createOrderPrice, stoploss;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();

                            console.log("checkOrders");

                            _context.next = 4;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.getAsset.symbol, _this.sellAsset.symbol);

                        case 4:
                            ticker = _context.sent;
                            price = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            needStoploss = price.times(1 - state.percent / 100);
                            createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100);
                            stoploss = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.minAmount).div(state.amount);


                            console.log(price.toNumber(), needStoploss.toNumber(), createOrderPrice.toNumber(), stoploss.toNumber());

                            if (!needStoploss.gt(stoploss)) {
                                _context.next = 16;
                                break;
                            }

                            console.log("up minAmount");
                            state.minAmount = needStoploss.times(state.amount).toNumber();
                            _this.storage.write(state);
                            _context.next = 21;
                            break;

                        case 16:
                            if (!createOrderPrice.lt(stoploss)) {
                                _context.next = 21;
                                break;
                            }

                            console.log("create limit order");
                            _context.next = 20;
                            return _this.account.sell(_this.sellAsset.symbol, _this.getAsset.symbol, state.amount, stoploss.toNumber());

                        case 20:
                            _this.stop();

                        case 21:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                sellAsset: initData.sellAsset,
                getAsset: initData.getAsset,
                amount: initData.amount,
                minAmount: initData.minAmount,
                percent: initData.percent
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(TrailingStop, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.sellAsset];

                            case 3:
                                this.sellAsset = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.getAsset];

                            case 6:
                                this.getAsset = _context2.sent;
                                _context2.next = 9;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 9:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return TrailingStop;
}();

TrailingStop.create = components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (TrailingStop);

/***/ }),

/***/ 2616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            sellAsset: "BTC",
            getAsset: "USD",
            amount: 0.01,
            minAmount: 1,
            stoploss: 100,
            percent: 10,
            validate: ["name"]
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            if (name === "minAmount") {
                _this.setState({
                    minAmount: value,
                    stoploss: value / _this.state.amount
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "stoploss") {
                _this.setState({
                    minAmount: _this.state.amount * value,
                    stoploss: value
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "amount") {
                _this.setState({
                    amount: value,
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "sellAsset":
                case "getAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "amount":
                case "minAmount":
                case "pecent":
                case "stoploss":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.sell_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "sellAsset",
                            value: this.state.sellAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.get_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "getAsset",
                            value: this.state.getAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.min_amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.stoploss" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.trailing_percent" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            validate: []
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            if (name === "minAmount") {
                _this.setState({
                    minAmount: value,
                    stoploss: value / _this.state.amount
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "stoploss") {
                _this.setState({
                    minAmount: _this.state.amount * value,
                    stoploss: value
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "amount") {
                _this.setState({
                    amount: value,
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }

            _this.setState(_defineProperty({}, name, value));
        }, _this.validate = function (name, value) {}, _this.handleUpdateBot = function () {
            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var state = this.props.bot.storage.read();
            state.stoploss = state.minAmount / state.amount;

            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block horizontal",
                        style: { marginLeft: 50, marginTop: 50 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.sell_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "sellAsset",
                            value: {
                                value: this.state.sellAsset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.sellAsset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.get_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "getAsset",
                            value: {
                                value: this.state.getAsset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.getAsset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.min_amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.stoploss" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.trailing_percent" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2619);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2621);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2614);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(574);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var PercentUp = function () {
    function PercentUp(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, PercentUp);

        this.state = components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var state, log, accountBalances, balance, amount, orders, processOrders, orderFee, promises, orderBook, quoteAmount, baseAmount, i, ask, quote, base, diffBase, price, lowPrice, isGreaterDistance, baseAssetAmount, quoteAssetAmount, obj, order;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            state = _this.storage.read();

                            log = function log() {
                                var _logger;

                                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                                }

                                return (_logger = _this.logger).log.apply(_logger, ["[" + state.name + "]"].concat(args));
                            };

                            _context2.next = 4;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 4:
                            _context2.t0 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context2.t1 = {};
                            accountBalances = _context2.sent.reduce(_context2.t0, _context2.t1);
                            balance = state.balance === "-" ? 0 : state.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.balance);
                            amount = state.percentAmount.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance).times(state.amount).div(100).toNumber() : state.amount;
                            _context2.next = 11;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_objects(state.orders.map(function (order) {
                                return order.id;
                            }).filter(function (id) {
                                return id;
                            }));

                        case 11:
                            _context2.t2 = function (order) {
                                return order && order.id;
                            };

                            _context2.t3 = function (id) {
                                return id;
                            };

                            orders = _context2.sent.map(_context2.t2).filter(_context2.t3);
                            processOrders = state.orders.filter(function (order) {
                                return !orders.includes(order.id);
                            });
                            _context2.t4 = bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"];
                            _context2.next = 18;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_global_properties();

                        case 18:
                            _context2.t5 = _context2.sent.parameters.current_fees.parameters[1][1].fee;
                            _context2.t6 = Math.pow(10, 5);
                            orderFee = (0, _context2.t4)(_context2.t5).div(_context2.t6).toNumber();

                            if (!(processOrders.length > 0)) {
                                _context2.next = 24;
                                break;
                            }

                            _context2.next = 24;
                            return _this.base.update();

                        case 24:
                            promises = processOrders.map(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(order) {
                                    var amountToMarket, forQuoteFee, forBaseFee, quoteAssetAmount, percentOnMarket, baseAssetAmount, obj;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    if (!(order.state === "buy")) {
                                                        _context.next = 5;
                                                        break;
                                                    }

                                                    order.id = null;
                                                    if (!["", "-"].includes(state.balance)) {
                                                        amountToMarket = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.base.options.market_fee_percent).div(100 * 100).times(order.base).times(Math.pow(10, _this.base.precision)).toString());

                                                        state.balance = Number(state.balance) + Number(order.base) - (amountToMarket !== 0 ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amountToMarket).div(Math.pow(10, _this.base.precision)).toNumber() : _this.base.options.market_fee_percent !== 0 ? Math.pow(10, -_this.base.precision) : 0);
                                                    }
                                                    _context.next = 13;
                                                    break;

                                                case 5:
                                                    forQuoteFee = _this.quote.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, forBaseFee = _this.base.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, quoteAssetAmount = {
                                                        asset_id: _this.quote.id,
                                                        amount: Math.min(Number(accountBalances.quote), Number(order.quote)) - forQuoteFee
                                                    }, percentOnMarket = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.base.options.market_fee_percent).div(100 * 100), baseAssetAmount = {
                                                        asset_id: _this.base.id,
                                                        amount: Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber()).plus(forBaseFee)
                                                    };


                                                    log("buy " + _this.base.symbol + ": amount=" + baseAssetAmount.amount.toNumber() + " price=" + Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quoteAssetAmount.amount).div(baseAssetAmount.amount).toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);
                                                    _context.next = 9;
                                                    return _this.account.sell(quoteAssetAmount, baseAssetAmount);

                                                case 9:
                                                    obj = _context.sent;


                                                    order.state = "buy";
                                                    order.id = obj ? obj.id : "1.7.0";
                                                    order.base = baseAssetAmount.amount.toNumber();

                                                case 13:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this);
                                }));

                                return function (_x) {
                                    return _ref2.apply(this, arguments);
                                };
                            }());
                            _context2.next = 27;
                            return Promise.all(promises);

                        case 27:
                            _context2.next = 29;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_order_book(_this.quote.symbol, _this.base.symbol, 50);

                        case 29:
                            orderBook = _context2.sent;
                            quoteAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0), baseAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0);
                            i = 0;

                        case 32:
                            if (!(i < orderBook.asks.length)) {
                                _context2.next = 55;
                                break;
                            }

                            ask = orderBook.asks[i];
                            quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.base);
                            base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.quote);
                            diffBase = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amount).minus(baseAmount);

                            if (!base.isEqualTo(diffBase)) {
                                _context2.next = 43;
                                break;
                            }

                            quoteAmount = quoteAmount.plus(quote);
                            baseAmount = baseAmount.plus(base);
                            return _context2.abrupt("break", 55);

                        case 43:
                            if (!base.isLessThan(diffBase)) {
                                _context2.next = 48;
                                break;
                            }

                            quoteAmount = quoteAmount.plus(quote);
                            baseAmount = baseAmount.plus(base);
                            _context2.next = 52;
                            break;

                        case 48:
                            if (!base.isGreaterThan(diffBase)) {
                                _context2.next = 52;
                                break;
                            }

                            baseAmount = baseAmount.plus(diffBase);
                            quoteAmount = quoteAmount.plus(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.price).times(diffBase));
                            return _context2.abrupt("break", 55);

                        case 52:
                            i++;
                            _context2.next = 32;
                            break;

                        case 55:
                            price = quoteAmount.div(baseAmount), lowPrice = null;


                            state.orders.forEach(function (order) {
                                var orderPrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.quote).div(order.base);
                                if (!lowPrice || orderPrice.minus(price).abs().isLessThan(lowPrice.minus(price).abs())) lowPrice = orderPrice;
                            });

                            isGreaterDistance = !!lowPrice && lowPrice.minus(price).abs().div(lowPrice).times(100).isGreaterThan(state.distance);


                            log("Orders exists: " + !!lowPrice + ", balance > amount: " + (balance > amount) + ", lowPrice - price > distance: " + isGreaterDistance);

                            if (!(balance > amount && (!lowPrice || isGreaterDistance))) {
                                _context2.next = 69;
                                break;
                            }

                            baseAssetAmount = {
                                asset_id: _this.base.id,
                                amount: amount
                            };
                            quoteAssetAmount = {
                                asset_id: _this.quote.id,
                                amount: quoteAmount
                            };
                            _context2.next = 64;
                            return _this.account.buy(quoteAssetAmount, baseAssetAmount);

                        case 64:
                            obj = _context2.sent;
                            order = {
                                state: "sell",
                                base: amount,
                                quote: quoteAssetAmount.amount.toNumber(),
                                id: obj ? obj.id : "1.7.0",
                                fee: orderFee
                            };


                            state.orders.push(order);
                            log("sell " + _this.base.symbol + ": amount=" + amount + ", price=" + price.toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);

                            if (!["", "-"].includes(state.balance)) state.balance = Number(state.balance) - amount;

                        case 69:

                            state.orders = state.orders.filter(function (order) {
                                return order.id !== null;
                            });

                            _this.storage.write(state);

                        case 71:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_2__["default"](account);
        this.storage = storage;

        if (initData) {
            var name = initData.name,
                base = initData.base,
                quote = initData.quote,
                amount = initData.amount,
                percentAmount = initData.percentAmount,
                balance = initData.balance,
                spread = initData.spread,
                distance = initData.distance;

            storage.init({
                name: name,
                base: base,
                quote: quote,
                amount: amount,
                percentAmount: percentAmount,
                balance: balance,
                spread: spread,
                distance: distance,
                orders: []
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(PercentUp, [{
        key: "start",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var state;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                state = this.storage.read();
                                _context3.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.base];

                            case 3:
                                this.base = _context3.sent;
                                _context3.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.quote];

                            case 6:
                                this.quote = _context3.sent;
                                _context3.next = 9;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 9:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 12:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function start() {
                return _ref3.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context4.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function stop() {
                return _ref4.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return PercentUp;
}();

PercentUp.create = components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (PercentUp);

/***/ }),

/***/ 2619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2596);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2595);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2620);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            base: "CNY",
            quote: "BTS",
            amount: 100,
            percentAmount: false,
            balance: "",
            spread: 1,
            distance: "1.5",
            validate: ["name"]
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["base", "quote"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "base":
                case "quote":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "balance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "spread":
                case "distance":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            console.log(validate);
            _this.props.enableCreate(validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                validate = _state.validate,
                name = _state.name,
                amount = _state.amount,
                balance = _state.balance,
                spread = _state.spread,
                distance = _state.distance;


            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        name: "name",
                        value: name,
                        onChange: this.handleChange,
                        border: validate.includes("name")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "base",
                            value: this.state.base,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "amount",
                            value: amount,
                            onChange: this.handleChange,
                            border: validate.includes("amount")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "balance",
                            value: balance,
                            onChange: this.handleChange,
                            border: validate.includes("balance")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "quote",
                            value: this.state.quote,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "spread",
                            value: spread,
                            onChange: this.handleChange,
                            border: validate.includes("spread")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.percent_up.distance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "distance",
                            value: distance,
                            onChange: this.handleChange,
                            border: validate.includes("distance")
                        })
                    )
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                value = _props.value,
                onChange = _props.onChange,
                border = _props.border,
                props = _objectWithoutProperties(_props, ["name", "value", "onChange", "border"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
                name: name,
                id: name,
                type: "text",
                ref: "input",
                value: value,
                onChange: onChange,
                style: {
                    marginBottom: 30,
                    border: border ? "1px solid red" : "none"
                }
            }, props));
        }
    }]);

    return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ 2621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2620);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["base", "quote"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || BotManager.hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "base":
                case "quote":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "balance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "spread":
                case "distance":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            //this.props.enableCreate(validate.length == 0);
        }, _this.handleUpdateBot = function () {
            var stateNow = _this.props.bot.storage.read();

            _this.props.bot.storage.write(_extends({}, stateNow, _this.state));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(Object.assign({ validate: [] }, this.props.bot.storage.read()));
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                validate = _state.validate,
                amount = _state.amount,
                balance = _state.balance,
                spread = _state.spread,
                distance = _state.distance;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "base",
                            value: {
                                value: this.state.base,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.base })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "amount",
                            value: amount,
                            onChange: this.handleChange,
                            border: validate.includes("amount")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "balance",
                            value: balance,
                            onChange: this.handleChange,
                            border: validate.includes("balance")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "quote",
                            value: {
                                value: this.state.quote,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.quote })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "spread",
                            value: spread,
                            onChange: this.handleChange,
                            border: validate.includes("spread")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.percent_up.distance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "distance",
                            value: distance,
                            onChange: this.handleChange,
                            border: validate.includes("distance")
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(705);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bots = Object(common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])("__bots__");

var Storage = function () {
    _createClass(Storage, null, [{
        key: "getAccountBot",
        value: function getAccountBot(account) {
            var re = new RegExp("^__bots__" + account + "::");
            return Object.keys(localStorage).filter(function (key) {
                return re.test(key);
            });
        }
    }, {
        key: "has",
        value: function has(name) {
            return bots.has(name);
        }
    }]);

    function Storage(name) {
        _classCallCheck(this, Storage);

        //bots.has(name)
        this.name = name;
        //if (!bots.has(name))
        //bots.set(name, {})
    }

    _createClass(Storage, [{
        key: "init",
        value: function init(data) {
            if (!bots.has(name)) bots.set(this.name, data);
        }
    }, {
        key: "read",
        value: function read() {
            return bots.get(this.name);
        }
    }, {
        key: "write",
        value: function write(newState) {
            bots.set(this.name, newState);
        }
    }, {
        key: "delete",
        value: function _delete() {
            bots.remove(this.name);
        }
    }]);

    return Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy5jNWJkY2VkOGJkMGZlNzBkMTA5ZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0SW1hZ2UuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0U2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXNzZXRzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL1BlcmNlbnRVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGUuanN4Iiwid2VicGFjazovLy9hcHAvc3RvcmVzL0JvdHNTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcclxuICAgICAgICBtYXhXaWR0aDogMjBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tcclxuICAgICAgICAgICAgICAgICAgICBpbWdOYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIF0uc3JjID0gYCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvYnRzLnBuZ2A7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbWdOYW1lID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgLy9yZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYXNzZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIG1hcmdpblJpZ2h0OiA1fX1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9IC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNsYXNzIEJvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IEJvdE1hbmFnZXIuc3RyYXRlZ2llcztcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RTdHJhdGVneTogT2JqZWN0LmtleXModGhpcy5zdHJhdGVnaWVzKVswXSxcclxuICAgICAgICAgICAgYm90czogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcclxuICAgICAgICAgICAgZW5hYmxlQ3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgYm90UnVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGJvdHMgPSBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJvdHMsXHJcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcclxuICAgICAgICAgICAgYm90UnVuOiBib3RzWzBdID8gYm90c1swXS5ydW4gOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVN0cmF0ZWd5ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdFN0cmF0ZWd5OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlQm90ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RCb3QgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RCb3QsXHJcbiAgICAgICAgICAgIGJvdFJ1bjogdGhpcy5zdGF0ZS5ib3RzW3NlbGVjdEJvdF0ucnVuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNyZWF0ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBib3RzID0gdGhpcy5zdGF0ZS5ib3RzO1xyXG5cclxuICAgICAgICBib3RzLnB1c2goXHJcbiAgICAgICAgICAgIEJvdE1hbmFnZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc3RhdGVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90c30pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVGb3JtLnZhbGlkYXRlKVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUoXCJuYW1lXCIsIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZS5uYW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRW5hYmxlQ3JlYXRlID0gZW5hYmxlQ3JlYXRlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVDcmVhdGUgIT0gZW5hYmxlQ3JlYXRlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVDcmVhdGV9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU3RhcnRCb3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XHJcblxyXG4gICAgICAgIGF3YWl0IGJvdC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTdG9wQm90ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdO1xyXG5cclxuICAgICAgICBhd2FpdCBib3Quc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVEZWxldGVCb3QgPSAoKSA9PiB7XHJcbiAgICAgICAgQm90TWFuYWdlci5kZWxldGUodGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBib3RzOiBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCksXHJcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IHJlbmRlciBtYWluIHBhZ2VcIiwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtcIi9cIn0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgQ3JlYXRlRm9ybSA9IHRoaXMuc3RyYXRlZ2llc1t0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5XS5jcmVhdGU7XHJcblxyXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdIHx8IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjAsIG92ZXJmbG93OiBcInZpc2libGVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS01IGxhcmdlLW9mZnNldC0xIGZ1bGwtd2lkdGgtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3Rfc3RyYXRlZ3lcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdCBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVN0cmF0ZWd5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcykubWFwKG5hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e25hbWV9IHZhbHVlPXtuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUNyZWF0ZT17dGhpcy5oYW5kbGVFbmFibGVDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uY3JlYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAzMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYm90X3N0YXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0Qm90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQm90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib3RzLm1hcCgoYm90LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtib3QubmFtZX0gdmFsdWU9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2JvdC5uYW1lfSAoJHtib3QuY29uc3RydWN0b3IubmFtZX0pYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym90ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxib3Quc3RhdGUga2V5PXtib3QubmFtZX0gYm90PXtib3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0Qm90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYm90UnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0YXJ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0b3BCb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYm90UnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0b3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlQm90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYm90UnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmRlbGV0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc2VsZWN0X2JvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEJvdHMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBTcHJlYWRUcmFkZSBmcm9tIFwiLi9TcHJlYWRUcmFkZVwiO1xyXG5pbXBvcnQgVHJhaWxpbmdTdG9wIGZyb20gXCIuL1RyYWlsaW5nU3RvcFwiO1xyXG5pbXBvcnQgUGVyY2VudFVwIGZyb20gXCIuL1BlcmNlbnRVcFwiO1xyXG4vL2ltcG9ydCBSZWxhdGl2ZU9yZGVycyBmcm9tIFwiLi9SZWxhdGl2ZU9yZGVyc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwic3RvcmVzL0JvdHNTdG9yYWdlXCI7XHJcblxyXG52YXIgYm90cyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RyYXRlZ2llczoge1xyXG4gICAgICAgIFNwcmVhZFRyYWRlLFxyXG4gICAgICAgIFRyYWlsaW5nU3RvcCxcclxuICAgICAgICAvL1JlbGF0aXZlT3JkZXJzLFxyXG4gICAgICAgIFBlcmNlbnRVcFxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoc3RyYXRlZ3ksIGFjY291bnQsIGluaXREYXRhKSB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtpbml0RGF0YS5uYW1lfV1gKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKTtcclxuICAgICAgICBib3RzW2BfX2JvdHNfXyR7c3RvcmFnZS5uYW1lfWBdID0gYm90O1xyXG5cclxuICAgICAgICByZXR1cm4gYm90O1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGUoYm90KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBgX19ib3RzX18ke2JvdC5zdG9yYWdlLm5hbWV9YDtcclxuXHJcbiAgICAgICAgYm90c1tuYW1lXS5kZWxldGUoKTtcclxuICAgICAgICBkZWxldGUgYm90c1tuYW1lXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Qm90cyhhY2NvdW50KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEJvdHNcIiwgT2JqZWN0LmtleXMoYm90cykpXHJcblxyXG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldEFjY291bnRCb3QoYWNjb3VudClcclxuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdHNba2V5XSkgcmV0dXJuIGJvdHNba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgW3N0cmF0ZWd5LCBuYW1lXSA9IGtleVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eX19ib3RzX18oLispOjooXFx3KylcXFsoXFx3KylcXF0vLCBcIiQyLCQzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmF0ZWd5IHx8ICFuYW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlKTtcclxuICAgICAgICAgICAgICAgIGJvdHNba2V5XSA9IGJvdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3Q7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gZWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNCb3QoYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG5hbWUgc3RhdGVneVwiLCBhY2NvdW50LCBzdHJhdGVneSwgbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaGFzKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvQ3JlYXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU3ByZWFkVHJhZGUge1xyXG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcclxuICAgIHN0YXRlID0gU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcclxuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cclxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLmJhc2VBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5iYXNlQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLmJhc2VTcHJlYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5iYXNlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRCYXNlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcXVvdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEucXVvdGVBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5xdW90ZUJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5xdW90ZVNwcmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLnF1b3RlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRRdW90ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lkLCBwcmljZSBhbmQgYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZyb21NYXJrZXQ6IGluaXREYXRhLmZyb21NYXJrZXQsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U6IGluaXREYXRhLmRlZmF1bHRQcmljZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcclxuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZS5hc3NldF07XHJcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZS5hc3NldF07XHJcblxyXG4gICAgICAgIGlmIChbdGhpcy5iYXNlLmlzc3VlciwgdGhpcy5xdW90ZS5pc3N1ZXJdLmluY2x1ZGVzKFwiMS4yLjBcIikpIHtcclxuICAgICAgICAgICAgaWYgKFt0aGlzLmJhc2UuaWQsIHRoaXMucXVvdGUuaWRdLmluY2x1ZGVzKFwiMS4zLjBcIikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldENvcmVGZWVkO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhc2UuaXNzdWVyID09IHRoaXMucXVvdGUuaXNzdWVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRTbWFydEZlZWQ7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xyXG4gICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxyXG4gICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gc3RhdGUuZGVmYXVsdFByaWNlO1xyXG5cclxuICAgICAgICBsZXQgZmVlZFByaWNlID0gc3RhdGUuZnJvbU1hcmtldFxyXG4gICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIodGlja2VyLmxhdGVzdClcclxuICAgICAgICAgICAgICAgIDogYXdhaXQgdGhpcy5nZXRGZWVkKCksXHJcbiAgICAgICAgICAgIGJ1eVByaWNlID0gZmVlZFByaWNlLnRpbWVzKDEgLSBzdGF0ZS5iYXNlLnNwcmVhZCAvIDEwMCkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgc2VsbFByaWNlID0gZmVlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAudGltZXMoMSArIHN0YXRlLnF1b3RlLnNwcmVhZCAvIDEwMClcclxuICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG5cclxuICAgICAgICBmZWVkUHJpY2UgPSBmZWVkUHJpY2UudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKGZlZWRQcmljZSA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBidXlPcmRlciA9IHN0YXRlLmJhc2Uub3JkZXIuaWRcclxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLmJhc2Uub3JkZXIuaWRdKSlbMF1cclxuICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5vcmRlci5pZCxcclxuICAgICAgICAgICAgc2VsbE9yZGVyID0gc3RhdGUucXVvdGUub3JkZXIuaWRcclxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLnF1b3RlLm9yZGVyLmlkXSkpWzBdXHJcbiAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxyXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgYmFzZUJhbGFuY2UgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLmJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFzZS5iYWxhbmNlKSxcclxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLnF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLnF1b3RlLCBzdGF0ZS5xdW90ZS5iYWxhbmNlKSxcclxuICAgICAgICAgICAgYmFzZUFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLnBlcmNlbnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VCYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5iYXNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5hbW91bnQsXHJcbiAgICAgICAgICAgIHF1b3RlQW1vdW50ID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLnBlcmNlbnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKHF1b3RlQmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5hbW91bnQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2VzXCIsIGJ1eVByaWNlLCBmZWVkUHJpY2UsIHNlbGxQcmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcmRlcnNcIiwgYnV5T3JkZXIsIHNlbGxPcmRlcik7XHJcblxyXG4gICAgICAgIGlmIChidXlPcmRlcikge1xyXG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYGNoZWNrIGJ1eU9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlXHJcbiAgICAgICAgICAgICAgICApID5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBidXlQcmljZSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC8gMiAmJlxyXG4gICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPiBidXlQcmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIGJ1eSBvcmRlcjogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLmJhc2Uub3JkZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKGJ1eU9yZGVyLmZvcl9zYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcclxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYXNlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzZWxsIGJhbGFuY2VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoc3RhdGUuYmFzZS5vcmRlci5wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKGJhc2VCYWxhbmNlLCBiYXNlQW1vdW50KTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGJ1eVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBhbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgvXjEuNy5cXGQqJC8udGVzdChzdGF0ZS5iYXNlLm9yZGVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgY3JlYXRlIGJ1eU9yZGVyOiBiYWxhbmNlPSR7YmFzZUJhbGFuY2UgPj1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGJhc2VCYWxhbmNlID49IGJhc2VBbW91bnQgJiYgdGlja2VyLmxvd2VzdF9hc2sgPiBidXlQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgLy9idXlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYGJ1eTogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHt0aGlzLmJhc2Uuc3ltYm9sfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYmFzZUFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGJhc2VBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxsT3JkZXIpIHtcclxuICAgICAgICAgICAgLy9jaGVjayBQcmljZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGBjaGVjayBzZWxsT3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcclxuICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2UgLSBzdGF0ZS5xdW90ZS5vcmRlci5wcmljZVxyXG4gICAgICAgICAgICAgICAgKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmhpZ2hlc3RfYmlkID49IHNlbGxQcmljZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvIDIgJiZcclxuICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIHNlbGwgb3JkZXI6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUucXVvdGUub3JkZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKHNlbGxPcmRlci5mb3Jfc2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5xdW90ZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYnV5IGJhbGFuY2VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQgPiBvcmRlckFtb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCAtIG9yZGVyQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKHF1b3RlQmFsYW5jZSwgcXVvdGVBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLnF1b3RlLm9yZGVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUucXVvdGUub3JkZXIuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYGNyZWF0ZSBzZWxsT3JkZXI6IGJhbGFuY2U9JHtxdW90ZUJhbGFuY2UgPj1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudH0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHF1b3RlQmFsYW5jZSA+PSBxdW90ZUFtb3VudCAmJiB0aWNrZXIuaGlnaGVzdF9iaWQgPCBzZWxsUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIC8vYnV5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBzZWxsOiAke3NlbGxQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBxdW90ZUFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gcXVvdGVBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGdldENvcmVGZWVkKCkge1xyXG4gICAgICAgIGxldCByYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iYXNlLmlkID09IFwiMS4zLjBcIikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XHJcbiAgICAgICAgICAgIHJhdGUuYmFzZS5hc3NldF9pZCA9PSB0aGlzLmJhc2UuaWRcclxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cclxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XHJcblxyXG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXHJcbiAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcclxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRTbWFydEZlZWQoKSB7XHJcbiAgICAgICAgbGV0IGJ0cyA9IGF3YWl0IEFzc2V0c1tcImJ0c1wiXTtcclxuICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxyXG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICA/IFtyYXRlLmJhc2UsIHJhdGUucXVvdGVdXHJcbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xyXG5cclxuICAgICAgICBsZXQgYmFzZVByaWNlID0gQmlnTnVtYmVyKGJhc2UuYW1vdW50KVxyXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5xdW90ZS51cGRhdGUoKTtcclxuICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICBpZiAocmF0ZS5iYXNlLmFzc2V0X2lkID09IFwiMS4zLjBcIikge1xyXG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5iYXNlO1xyXG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUucXVvdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFzZSA9IHJhdGUucXVvdGU7XHJcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5iYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHF1b3RlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXHJcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcclxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1b3RlUHJpY2UuZGl2KGJhc2VQcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0VUlBRmVlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpY2VcclxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGhpcy5kZWZhdWx0UHJpY2UpXHJcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5iaW5hbmNlUHJpY2UodGhpcy5iYXNlLnN5bWJvbCwgdGhpcy5xdW90ZS5zeW1ib2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGJpbmFuY2VQcmljZShiYXNlLCBxdW90ZSkge1xyXG4gICAgICAgIGxldCBhc3NldCA9IGAke3F1b3RlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF19JHtcclxuICAgICAgICAgICAgYmFzZS5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdXHJcbiAgICAgICAgfWBcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJVU0RcIiwgXCJVU0RUXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXQgYXNzZXQ6ICR7YXNzZXR9YCk7XHJcbiAgICAgICAgdGhpcy5wcmljZUFycmF5ID0gdGhpcy5wcmljZUFycmF5IHx8IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2Fzc2V0ID0gXCJCVENVU0RUXCJcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YxL3RyYWRlcz9zeW1ib2w9JHthc3NldH0mbGltaXQ9MWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VBcnJheS5wdXNoKGRhdGFbMF0ucHJpY2UpO1xyXG4gICAgICAgICAgICAvL3RoaXMucHJpY2VBcnJheS5wdXNoKDEwKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgYEVycm9yIEJpbmFuY2UgcmVxdWVzdDogJHthc3NldH0sIGVycm9yOiAke2Vycm9yfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMTApIHRoaXMucHJpY2VBcnJheS5zaGlmdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyB0aGlzLnByaWNlQXJyYXlcclxuICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5wbHVzKGIpLCBCaWdOdW1iZXIoMCkpXHJcbiAgICAgICAgICAgICAgICAgIC5kaXYodGhpcy5wcmljZUFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgOiBCaWdOdW1iZXIoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZFRyYWRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xyXG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgYmFzZUFzc2V0OiBcIlVTRFwiLFxyXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiQlRDXCIsXHJcbiAgICAgICAgYmFzZUFtb3VudDogMTAsXHJcbiAgICAgICAgcXVvdGVBbW91bnQ6IDAuMDEsXHJcbiAgICAgICAgYmFzZVNwcmVhZDogMTAsXHJcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxyXG4gICAgICAgIGJhc2VCYWxhbmNlOiAxMDAsXHJcbiAgICAgICAgcXVvdGVCYWxhbmNlOiAwLjEsXHJcbiAgICAgICAgcGVyY2VudEJhc2VBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgIHBlcmNlbnRRdW90ZUFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xyXG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcclxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChbXCJiYXNlQXNzZXRcIiwgXCJxdW90ZUFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VBc3NldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQW1vdW50XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFByaWNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfdmFsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50UXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5kZWZhdWx0X3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlZmF1bHRQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVmYXVsdFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlZmF1bHRQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJkZWZhdWx0UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tTWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmdldF9wcmljZV9mcm9tX21hcmtldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XHJcbiIsImltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYjogbmV3IFByb3h5KEFwaXMsIHtcclxuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNhbGwgQXBpcy5kYi4ke21ldGhvZH0oJHtbLi4uYXJndW1lbnRzXX0pYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcblxyXG4gICAgaGlzdG9yeTogbmV3IFByb3h5KEFwaXMsIHtcclxuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG5cclxuICAgIG5ldHdvcms6IG5ldyBQcm94eShBcGlzLCB7XHJcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm5ldHdvcmtfYXBpKClcclxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KSxcclxuXHJcbiAgICBjcnlwdG86IG5ldyBQcm94eShBcGlzLCB7XHJcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNyeXB0b19hcGkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG5cclxuICAgIG9yZGVyczogbmV3IFByb3h5KEFwaXMsIHtcclxuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAub3JkZXJzX2FwaSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XHJcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2xpYi9Bc3luY1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCB7Z2V0TXlNYXJrZXRzUXVvdGVzLCBnZXRBc3NldEhpZGVOYW1lc3BhY2VzfSBmcm9tIFwiYnJhbmRpbmdcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2V0TGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBoaWRlUHJlZml4ID0gbmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IG5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmIChnZXRBc3NldEhpZGVOYW1lc3BhY2VzKCkuaW5jbHVkZXMoYCR7YXJyWzBdfS5gKSkgYXJyLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIuam9pbihcIi5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldEFzc2V0TmFtZSh0aGlzLnByb3BzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBc3NldE5hbWUgPSBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBhd2FpdCBBc3NldHNbbmFtZV07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBhc3NldC5iaXRhc3NldF9kYXRhX2lkID8gYGJpdCR7bmFtZX1gIDogbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5oaWRlUHJlZml4KHRoaXMuc3RhdGUubmFtZSB8fCB0aGlzLnByb3BzLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgb3B0aW9ucyA9IGdldE15TWFya2V0c1F1b3RlcygpLm1hcChuYW1lID0+ICh7XHJcbiAgICB2YWx1ZTogbmFtZSxcclxuICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXtuYW1lfSAvPlxyXG59KSk7XHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZU9wdGlvbnMgPSBkZWJvdW5jZSh0aGlzLnByb21pc2VPcHRpb25zLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gb3B0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlXCIsIG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbiA/IG9wdGlvbi52YWx1ZSA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm9taXNlT3B0aW9ucyA9IGFzeW5jIGlucHV0VmFsdWUgPT4ge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBvcHRpb25zLmZpbHRlcihpID0+IGkudmFsdWUgPT0gaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwICYmIGlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoaW5wdXRWYWx1ZSwgMSkpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFzc2V0ICYmICFvcHRpb25zLmZpbmQoaSA9PiBpLnZhbHVlID09IGFzc2V0LnN5bWJvbCkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7b3B0aW9uc307XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0+XHJcbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMucHJvbWlzZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUHJvbXB0VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3Iud2FpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3IucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NldFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5cclxuY2xhc3MgQXNzZXQge1xyXG4gICAgc3RhdGljIGdldChfLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIHJldHVybiB0aGlzW25hbWVdO1xyXG5cclxuICAgICAgICByZXR1cm4gL14xXFwuM1xcLlxcZCskLy50ZXN0KG5hbWUpIHx8ICFpc05hTihuYW1lKVxyXG4gICAgICAgICAgICA/IHRoaXMuaWQobmFtZSlcclxuICAgICAgICAgICAgOiB0aGlzLmdldEFzc2V0KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBc3NldChfc3ltYm9sKSB7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IF9zeW1ib2wudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFwW3N5bWJvbF0pIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xyXG5cclxuICAgICAgICBsZXQgb2JqID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoc3ltYm9sLCAxKSlbMF07XHJcblxyXG4gICAgICAgIGlmICghb2JqIHx8IG9iai5zeW1ib2wgIT09IHN5bWJvbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYE5vdCBmb3VuZCBhc3NldCAke3N5bWJvbH0hIEJsb2NrY2hhaW4gcmV0dXJuICR7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID8gb2JqLnN5bWJvbCA6IG9ialxyXG4gICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXBbc3ltYm9sXSA9IG5ldyB0aGlzKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGlkKGlkKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcclxuICAgICAgICBsZXQgYXNzZXQgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCkuZmluZChcclxuICAgICAgICAgICAgc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQgPT0gaWRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXQpIHJldHVybiB0aGlzLm1hcFthc3NldF07XHJcblxyXG4gICAgICAgIGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbaWRdKSlbMF07XHJcblxyXG4gICAgICAgIGlmICghYXNzZXQpIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFzc2V0IGJ5IGlkICR7aWR9IWApO1xyXG5cclxuICAgICAgICB0aGlzLm1hcFthc3NldC5zeW1ib2xdID0gbmV3IHRoaXMoYXNzZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcFthc3NldC5zeW1ib2xdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBmcm9tUGFyYW0ocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4ge2Ftb3VudDogcGFyYW0uYW1vdW50LCBhc3NldDogYXdhaXQgdGhpcy5pZChwYXJhbS5hc3NldF9pZCl9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcclxuXHJcbiAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tYXApLm1hcChzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZClcclxuICAgICAgICApO1xyXG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IE9iamVjdC5hc3NpZ24odGhpcy5tYXBbYXNzZXQuc3ltYm9sXSwgYXNzZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihycGNPYmopIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHJwY09iaik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9QYXJhbShudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IG51bWJlciwgYXNzZXRfaWQ6IHRoaXMuaWR9O1xyXG4gICAgfVxyXG5cclxuICAgIGZlZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCAvIDEwMCAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCAoYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFt0aGlzLmlkXSkpWzBdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb3h5KHt9LCBBc3NldCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBc3NldExhYmVsfSBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgIHF1b3RlO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUsIHZhbHVlLCB0eXBlb2YgdmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmFtb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJjZW50QmFzZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UucGVyY2VudCA9IHZhbHVlID09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UuYmFsYW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5zcHJlYWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLmFtb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudFF1b3RlQW1vdW50XCI6XHJcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XHJcbiAgICAgICAgICAgICAgICBxdW90ZS5wZXJjZW50ID0gdmFsdWUgPT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUJhbGFuY2VcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLmJhbGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XHJcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVmYXVsdFByaWNlOiB2YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcm9tTWFya2V0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tTWFya2V0OiBldmVudC50YXJnZXQuY2hlY2tlZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmJhc2Uub3JkZXIgPSBzdGF0ZU5vdy5iYXNlLm9yZGVyO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucXVvdGUub3JkZXIgPSBzdGF0ZU5vdy5xdW90ZS5vcmRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYmFzZS5hc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmJhc2UucGVyY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5iYWxhbmNlX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLmJhc2UucGVyY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2Uuc3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnF1b3RlLmFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGUuYXNzZXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5xdW90ZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50UXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuc3ByZWFkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuc3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuZGVmYXVsdF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlZmF1bHRQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImRlZmF1bHRQcmljZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZyb21NYXJrZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuZ2V0X3ByaWNlX2Zyb21fbWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XHJcbiIsImltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5pbXBvcnQge1RyYW5zYWN0aW9uQnVpbGRlcn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZlZVN5bWJvbCA9IFwiQlRTXCIpIHtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIEFwaXMuZGIuZ2V0X2FjY291bnRfYnlfbmFtZShuYW1lKSxcclxuICAgICAgICAgICAgQXNzZXRzW2ZlZVN5bWJvbF1cclxuICAgICAgICBdKS50aGVuKChbYWNjLCBmZWVdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjID0gYWNjO1xyXG4gICAgICAgICAgICB0aGlzLmZlZUFzc2V0ID0gZmVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbmNlbE9yZGVyKGlkKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jYW5jZWxcIiwge1xyXG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxyXG4gICAgICAgICAgICBmZWVfcGF5aW5nX2FjY291bnQ6IHRoaXMuYWNjLmlkLFxyXG4gICAgICAgICAgICBvcmRlcjogaWQsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYnV5KFxyXG4gICAgICAgIGJ1eVN5bWJvbCxcclxuICAgICAgICBiYXNlU3ltYm9sLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcclxuICAgICAgICBleHBpcmUgPSBcIjIwMjUtMDItMDJUMDI6MDI6MDJcIlxyXG4gICAgKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xyXG5cclxuICAgICAgICBsZXQgYnV5QXNzZXQgPSBhd2FpdCBBc3NldHNbXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFzc2V0X2lkIDogYnV5U3ltYm9sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBiYXNlU3ltYm9sLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgOiBiYXNlU3ltYm9sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJ1eUFtb3VudCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJ1eVN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IGJ1eVN5bWJvbC5hbW91bnQgOiBhbW91bnRcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYnV5QXNzZXQucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZVN5bWJvbC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBCaWdOdW1iZXIoYW1vdW50KS50aW1lcyhwcmljZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYmFzZUFzc2V0LnByZWNpc2lvbilcclxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XHJcblxyXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcclxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLmFjYy5pZCxcclxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IGJhc2VBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxyXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYnV5QXNzZXQudG9QYXJhbShidXlBbW91bnQpLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXHJcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxyXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW1xyXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cclxuICAgICAgICBdKSlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VsbChcclxuICAgICAgICBzZWxsU3ltYm9sLFxyXG4gICAgICAgIGJhc2VTeW1ib2wsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxyXG4gICAgICAgIGV4cGlyZSA9IFwiMjAyNS0wMi0wMlQwMjowMjowMlwiXHJcbiAgICApIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XHJcblxyXG4gICAgICAgIGxldCBzZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbXHJcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsbFN5bWJvbC5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsbFN5bWJvbFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBiYXNlQXNzZXQgPSBhd2FpdCBBc3NldHNbXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgIDogYmFzZVN5bWJvbFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IHNlbGxTeW1ib2wuYW1vdW50IDogYW1vdW50XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIHNlbGxBc3NldC5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgYnV5QW1vdW50ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICh0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIDogQmlnTnVtYmVyKGFtb3VudCkudGltZXMocHJpY2UpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1eUFtb3VudCA9PSAwIHx8IHNlbGxBbW91bnQgPT0gMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xyXG5cclxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXHJcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXHJcbiAgICAgICAgICAgIGFtb3VudF90b19zZWxsOiBzZWxsQXNzZXQudG9QYXJhbShzZWxsQW1vdW50KSxcclxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJhc2VBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcclxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiBmaWxsX29yX2tpbGwsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXHJcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxyXG4gICAgICAgIF0pKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBiYWxhbmNlcygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIEFwaXMuZGIuZ2V0X2FjY291bnRfYmFsYW5jZXModGhpcy5hY2MuaWQsIFsuLi5hcmd1bWVudHNdKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZW5kVHJhbnNhY3Rpb24odHlwZSwgb3BlcmF0aW9uKSB7XHJcbiAgICAgICAgbGV0IHRyID0gbmV3IFRyYW5zYWN0aW9uQnVpbGRlcigpO1xyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbih0eXBlLCBvcGVyYXRpb24pO1xyXG4gICAgICAgIGF3YWl0IHRyLnNldF9yZXF1aXJlZF9mZWVzKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XHJcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gV2FsbGV0RGIuZ2V0UHJpdmF0ZUtleShcclxuICAgICAgICAgICAgdGhpcy5hY2MuYWN0aXZlLmtleV9hdXRoc1swXVswXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdHIuYWRkX3NpZ25lcihcclxuICAgICAgICAgICAgcHJpdmF0ZV9rZXksXHJcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ci5icm9hZGNhc3QoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcclxuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9DcmVhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgVHJhaWxpbmdTdG9wIHtcclxuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XHJcbiAgICBzdGF0ZSA9IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcbiAgICAgICAgaWYgKGluaXREYXRhKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBpbml0RGF0YS5zZWxsQXNzZXQsXHJcbiAgICAgICAgICAgICAgICBnZXRBc3NldDogaW5pdERhdGEuZ2V0QXNzZXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIG1pbkFtb3VudDogaW5pdERhdGEubWluQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcclxuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5zZWxsQXNzZXRdO1xyXG4gICAgICAgIHRoaXMuZ2V0QXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuZ2V0QXNzZXRdO1xyXG5cclxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcclxuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrT3JkZXJzXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2xcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcHJpY2UgPSBCaWdOdW1iZXIodGlja2VyLmxhdGVzdCksXHJcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcyA9IHByaWNlLnRpbWVzKDEgLSBzdGF0ZS5wZXJjZW50IC8gMTAwKSxcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZSA9IHByaWNlLnRpbWVzKDEgLSAoc3RhdGUucGVyY2VudCAqIDIpIC8gMyAvIDEwMCksXHJcbiAgICAgICAgICAgIHN0b3Bsb3NzID0gQmlnTnVtYmVyKHN0YXRlLm1pbkFtb3VudCkuZGl2KHN0YXRlLmFtb3VudCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBwcmljZS50b051bWJlcigpLFxyXG4gICAgICAgICAgICBuZWVkU3RvcGxvc3MudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZS50b051bWJlcigpLFxyXG4gICAgICAgICAgICBzdG9wbG9zcy50b051bWJlcigpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG5lZWRTdG9wbG9zcy5ndChzdG9wbG9zcykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cCBtaW5BbW91bnRcIik7XHJcbiAgICAgICAgICAgIHN0YXRlLm1pbkFtb3VudCA9IG5lZWRTdG9wbG9zcy50aW1lcyhzdGF0ZS5hbW91bnQpLnRvTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVPcmRlclByaWNlLmx0KHN0b3Bsb3NzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaW1pdCBvcmRlclwiKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHN0b3Bsb3NzLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xyXG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc2VsbEFzc2V0OiBcIkJUQ1wiLFxyXG4gICAgICAgIGdldEFzc2V0OiBcIlVTRFwiLFxyXG4gICAgICAgIGFtb3VudDogMC4wMSxcclxuICAgICAgICBtaW5BbW91bnQ6IDEsXHJcbiAgICAgICAgc3RvcGxvc3M6IDEwMCxcclxuICAgICAgICBwZXJjZW50OiAxMCxcclxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZSAvIHRoaXMuc3RhdGUuYW1vdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJhbW91bnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcclxuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEFzc2V0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbW91bnRcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGVjZW50XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdG9wbG9zc1wiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbGlkYXRlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbEFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiYW1vdW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5taW5fYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0b3Bsb3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0b3Bsb3NzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbGlkYXRlOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XHJcbiAgICAgICAgc3RhdGUuc3RvcGxvc3MgPSBzdGF0ZS5taW5BbW91bnQgLyBzdGF0ZS5hbW91bnQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0b3Bsb3NzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50ICogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUgKiB0aGlzLnN0YXRlLnN0b3Bsb3NzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge307XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luVG9wOiA1MH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuc2VsbEFzc2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5nZXRBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5nZXRBc3NldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLm1pbl9hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0b3Bsb3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0b3Bsb3NzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XHJcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9TdGF0ZVwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIFBlcmNlbnRVcCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xyXG4gICAgc3RhdGUgPSBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VcclxuICAgICAgICAgICAgfSA9IGluaXREYXRhO1xyXG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlXTtcclxuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlXTtcclxuXHJcbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCksXHJcbiAgICAgICAgICAgIGxvZyA9ICguLi5hcmdzKSA9PiB0aGlzLmxvZ2dlci5sb2coYFske3N0YXRlLm5hbWV9XWAsIC4uLmFyZ3MpLFxyXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxyXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID09PSBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFsYW5jZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLmJhc2UsIHN0YXRlLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBhbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUucGVyY2VudEFtb3VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5hbW91bnQsXHJcbiAgICAgICAgICAgIG9yZGVycyA9IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUub3JkZXJzLm1hcChvcmRlciA9PiBvcmRlci5pZCkuZmlsdGVyKGlkID0+IGlkKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiBvcmRlciAmJiBvcmRlci5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpLFxyXG4gICAgICAgICAgICBwcm9jZXNzT3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIG9yZGVyID0+ICFvcmRlcnMuaW5jbHVkZXMob3JkZXIuaWQpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG9yZGVyRmVlID0gQmlnTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgKGF3YWl0IEFwaXMuZGIuZ2V0X2dsb2JhbF9wcm9wZXJ0aWVzKCkpLnBhcmFtZXRlcnMuY3VycmVudF9mZWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmFtZXRlcnNbMV1bMV0uZmVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogNSlcclxuICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG5cclxuICAgICAgICBpZiAocHJvY2Vzc09yZGVycy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IHByb2Nlc3NPcmRlcnMubWFwKGFzeW5jIG9yZGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXRlID09PSBcImJ1eVwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50VG9NYXJrZXQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIodGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDAgKiAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMob3JkZXIuYmFzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhbGFuY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFsYW5jZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIuYmFzZSkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYW1vdW50VG9NYXJrZXQgIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGFtb3VudFRvTWFya2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50ICE9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMCAqKiAtdGhpcy5iYXNlLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9yUXVvdGVGZWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCA9PT0gXCJCVFNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yQmFzZUZlZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wgPT09IFwiQlRTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGlzTmFOKG9yZGVyLmZlZSkgPyBvcmRlckZlZSA6IG9yZGVyLmZlZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnF1b3RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYWNjb3VudEJhbGFuY2VzLnF1b3RlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIucXVvdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC0gZm9yUXVvdGVGZWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRPbk1hcmtldCA9IEJpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKS5kaXYoMTAwICogMTAwKSxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogQmlnTnVtYmVyKG9yZGVyLmJhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5zcHJlYWQpIC8gMTAwICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudE9uTWFya2V0LnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKGZvckJhc2VGZWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYGJ1eSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpfSBwcmljZT0ke0JpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYmFzZUFzc2V0QW1vdW50LmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCl9ICR7dGhpcy5iYXNlLnN5bWJvbH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIG9yZGVyLnN0YXRlID0gXCJidXlcIjtcclxuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiO1xyXG4gICAgICAgICAgICAgICAgb3JkZXIuYmFzZSA9IGJhc2VBc3NldEFtb3VudC5hbW91bnQudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGxldCBvcmRlckJvb2sgPSBhd2FpdCBBcGlzLmRiLmdldF9vcmRlcl9ib29rKFxyXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcclxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcclxuICAgICAgICAgICAgNTBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcXVvdGVBbW91bnQgPSBCaWdOdW1iZXIoMCksXHJcbiAgICAgICAgICAgIGJhc2VBbW91bnQgPSBCaWdOdW1iZXIoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlckJvb2suYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYXNrID0gb3JkZXJCb29rLmFza3NbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSBCaWdOdW1iZXIoYXNrLmJhc2UpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZSA9IEJpZ051bWJlcihhc2sucXVvdGUpO1xyXG4gICAgICAgICAgICBsZXQgZGlmZkJhc2UgPSBCaWdOdW1iZXIoYW1vdW50KS5taW51cyhiYXNlQW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLmlzRXF1YWxUbyhkaWZmQmFzZSkpIHtcclxuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhxdW90ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0xlc3NUaGFuKGRpZmZCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBbW91bnQgPSBiYXNlQW1vdW50LnBsdXMoYmFzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0dyZWF0ZXJUaGFuKGRpZmZCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhkaWZmQmFzZSk7XHJcbiAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCA9IHF1b3RlQW1vdW50LnBsdXMoXHJcbiAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKGFzay5wcmljZSkudGltZXMoZGlmZkJhc2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9IHF1b3RlQW1vdW50LmRpdihiYXNlQW1vdW50KSxcclxuICAgICAgICAgICAgbG93UHJpY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBzdGF0ZS5vcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlclByaWNlID0gQmlnTnVtYmVyKG9yZGVyLnF1b3RlKS5kaXYob3JkZXIuYmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFsb3dQcmljZSB8fFxyXG4gICAgICAgICAgICAgICAgb3JkZXJQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5taW51cyhwcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAuYWJzKClcclxuICAgICAgICAgICAgICAgICAgICAuaXNMZXNzVGhhbihsb3dQcmljZS5taW51cyhwcmljZSkuYWJzKCkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGxvd1ByaWNlID0gb3JkZXJQcmljZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlzR3JlYXRlckRpc3RhbmNlID1cclxuICAgICAgICAgICAgISFsb3dQcmljZSAmJlxyXG4gICAgICAgICAgICBsb3dQcmljZVxyXG4gICAgICAgICAgICAgICAgLm1pbnVzKHByaWNlKVxyXG4gICAgICAgICAgICAgICAgLmFicygpXHJcbiAgICAgICAgICAgICAgICAuZGl2KGxvd1ByaWNlKVxyXG4gICAgICAgICAgICAgICAgLnRpbWVzKDEwMClcclxuICAgICAgICAgICAgICAgIC5pc0dyZWF0ZXJUaGFuKHN0YXRlLmRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbG9nKFxyXG4gICAgICAgICAgICBgT3JkZXJzIGV4aXN0czogJHshIWxvd1ByaWNlfSwgYmFsYW5jZSA+IGFtb3VudDogJHtiYWxhbmNlID5cclxuICAgICAgICAgICAgICAgIGFtb3VudH0sIGxvd1ByaWNlIC0gcHJpY2UgPiBkaXN0YW5jZTogJHtpc0dyZWF0ZXJEaXN0YW5jZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmFsYW5jZSA+IGFtb3VudCAmJiAoIWxvd1ByaWNlIHx8IGlzR3JlYXRlckRpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICBsZXQgYmFzZUFzc2V0QW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHF1b3RlQW1vdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LmJ1eShxdW90ZUFzc2V0QW1vdW50LCBiYXNlQXNzZXRBbW91bnQpLFxyXG4gICAgICAgICAgICAgICAgb3JkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZTogcXVvdGVBc3NldEFtb3VudC5hbW91bnQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZTogb3JkZXJGZWVcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5vcmRlcnMucHVzaChvcmRlcik7XHJcbiAgICAgICAgICAgIGxvZyhcclxuICAgICAgICAgICAgICAgIGBzZWxsICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YW1vdW50fSwgcHJpY2U9JHtwcmljZS50b051bWJlcigpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcclxuICAgICAgICAgICAgICAgIH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID0gTnVtYmVyKHN0YXRlLmJhbGFuY2UpIC0gYW1vdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50VXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XHJcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgYmFzZTogXCJDTllcIixcclxuICAgICAgICBxdW90ZTogXCJCVFNcIixcclxuICAgICAgICBhbW91bnQ6IDEwMCxcclxuICAgICAgICBwZXJjZW50QW1vdW50OiBmYWxzZSxcclxuICAgICAgICBiYWxhbmNlOiBcIlwiLFxyXG4gICAgICAgIHNwcmVhZDogMSxcclxuICAgICAgICBkaXN0YW5jZTogXCIxLjVcIixcclxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xyXG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XHJcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XHJcblxyXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKFtcImJhc2VcIiwgXCJxdW90ZVwiXS5pbmNsdWRlcyhuYW1lKSkgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcHJlYWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImRpc3RhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3ZhbGlkYXRlLCBuYW1lLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VfdmFsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYW1vdW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYmFsYW5jZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwcmVhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJzcHJlYWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZGlzdGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtuYW1lLCB2YWx1ZSwgb25DaGFuZ2UsIGJvcmRlciwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGJvcmRlciA/IFwiMXB4IHNvbGlkIHJlZFwiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vbGlicy9JbnB1dFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0YW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZU5vdyA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHsuLi5zdGF0ZU5vdywgLi4udGhpcy5zdGF0ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt2YWxpZGF0ZSwgYW1vdW50LCBiYWxhbmNlLCBzcHJlYWQsIGRpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJiYWxhbmNlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnF1b3RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnF1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnF1b3RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwcmVhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJzcHJlYWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZGlzdGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24udXBkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcclxuIiwiaW1wb3J0IGxzIGZyb20gXCJjb21tb24vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG52YXIgYm90cyA9IGxzKFwiX19ib3RzX19cIik7XHJcblxyXG5jbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBnZXRBY2NvdW50Qm90KGFjY291bnQpIHtcclxuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGBeX19ib3RzX18ke2FjY291bnR9OjpgKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoa2V5ID0+IHJlLnRlc3Qoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhcyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvdHMuaGFzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICAvL2JvdHMuaGFzKG5hbWUpXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvL2lmICghYm90cy5oYXMobmFtZSkpXHJcbiAgICAgICAgLy9ib3RzLnNldChuYW1lLCB7fSlcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRhdGEpIHtcclxuICAgICAgICBpZiAoIWJvdHMuaGFzKG5hbWUpKSBib3RzLnNldCh0aGlzLm5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvdHMuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGUobmV3U3RhdGUpIHtcclxuICAgICAgICBib3RzLnNldCh0aGlzLm5hbWUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgYm90cy5yZW1vdmUodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7O0FBaEVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuREE7QUFxREE7QUFFQTtBQUNBO0FBeERBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekRBO0FBZ0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFqRUE7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUE0REE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFEQTtBQURBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVEE7QUF6QkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBbEJBO0FBNEJBO0FBQUE7QUFDQTtBQURBO0FBOUJBO0FBZkE7QUE1Q0E7QUFEQTtBQW1HQTs7OztBQS9MQTtBQUNBO0FBaU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFqREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE0RUE7QUFHQTtBQUNBO0FBaEZBO0FBaUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUEwQkE7QUExQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlDQTtBQU9BO0FBQ0E7QUFDQTtBQTFDQTtBQTZCQTtBQWFBO0FBTUE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQXZFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0VBO0FBQ0E7QUFDQTtBQTNFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQXhGQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBcEhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFzSEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQW5JQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXFJQTtBQUNBO0FBQ0E7QUF4SUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTJJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2SkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBKQTtBQUNBO0FBNUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnS0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQStLQTtBQUNBO0FBakxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFMQTtBQUNBO0FBQ0E7QUF4TEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtNQTtBQUNBO0FBQ0E7QUFyTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQTJNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVUE7QUFoT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWtPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBN09BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBK09BO0FBQ0E7QUFDQTtBQWxQQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcVBBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1RQTtBQUNBO0FBclFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEyUUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXRSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXdSQTtBQUNBO0FBMVJBO0FBQ0E7QUE2UkE7QUFDQTtBQS9SQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBMFNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBOztBQUdBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUlBOztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFEQTs7QUFHQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzY0E7QUFDQTtBQUNBO0FBOGNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQWFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBNURBO0FBQ0E7QUE4REE7QUFDQTtBQUNBOzs7OztBQXBHQTtBQUNBO0FBQ0E7OztBQW9HQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdkVBO0FBeUZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUF2RUE7QUExRkE7QUFvTEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFEQTtBQTVOQTtBQXlPQTs7OztBQWpXQTtBQUNBO0FBbVdBOzs7Ozs7OztBQzNXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUE5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFpQkE7QUFFQTtBQW5CQTtBQUFBO0FBQUE7QUE4QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQXhDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFDQTs7O0FBK0JBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFEQTtBQWNBOzs7O0FBcERBO0FBQ0E7QUFzREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7O0FBQUE7QUFDQTs7OztBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUZBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5Q0E7QUFDQTtBQWdEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXhFQTtBQUNBO0FBR0E7OztBQXNFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBdEZBO0FBdUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBdEZBO0FBeEdBO0FBZ05BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBSkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQS9PQTtBQXlQQTs7OztBQXRVQTtBQUNBO0FBd1VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBSUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7O0FBR0E7QUFDQTs7QUFEQTtBQUtBO0FBT0E7QUFDQTtBQVFBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOztBQURBOztBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFJQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7QUFEQTs7QUFLQTtBQUNBOztBQURBO0FBS0E7QUFPQTtBQUNBO0FBUUE7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7O0FBREE7O0FBVUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFnREE7QUFHQTtBQUNBO0FBcERBO0FBcURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUF2QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBekJBO0FBQUE7QUFDQTtBQURBO0FBZ0NBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQWpEQTtBQUNBO0FBQ0E7QUE0RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFnQkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQUNBO0FBeUNBO0FBQ0E7QUFDQTs7Ozs7QUFyR0E7QUFDQTtBQUNBOzs7QUFxR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUpBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVpBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVpBO0FBNUJBO0FBMERBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBckJBO0FBN0VBO0FBbUhBOzs7O0FBeE9BO0FBQ0E7QUEwT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQVlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7QUFqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE4Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXBCQTtBQW9DQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWxCQTtBQXhDQTtBQTZFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUF0QkE7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFwSEE7QUE4SEE7Ozs7QUF4TEE7QUFDQTtBQTBMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNkRBO0FBR0E7QUFDQTtBQWpFQTtBQWtFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBT0E7QUFDQTtBQUNBO0FBaEJBO0FBR0E7QUFhQTtBQU1BO0FBdEJBO0FBQUE7QUE4QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQS9CQTtBQUFBO0FBZ0NBO0FBQUE7QUFDQTtBQWpDQTtBQWlDQTtBQUFBO0FBQ0E7QUFMQTtBQUtBO0FBQ0E7QUFBQTtBQW5DQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQThDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBVUE7QUFyQkE7QUFBQTtBQUNBO0FBREE7QUF1QkE7QUFXQTtBQUNBO0FBRkE7QUFZQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBU0E7QUF2REE7QUFBQTtBQUNBO0FBREE7QUFnRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUF4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBOUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEySEE7QUFNQTtBQUVBO0FBQ0E7QUFwSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF6SUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBJQTtBQUNBO0FBNUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE4SUE7QUFDQTtBQWhKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFpSkE7QUFDQTtBQW5KQTtBQUNBO0FBREE7QUFtSUE7QUFuSUE7QUFBQTtBQUNBO0FBREE7QUEwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFuTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXNMQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBM0xBO0FBQUE7QUFDQTtBQURBO0FBK0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQWxOQTtBQUNBO0FBb05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXhOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBOURBO0FBQ0E7QUFDQTtBQStSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUNBOzs7OztBQWxGQTtBQUNBO0FBQ0E7OztBQWtGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXJDQTtBQTRDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckJBO0FBN0NBO0FBWkE7QUF3RkE7Ozs7QUE3TEE7QUFDQTtBQStMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTs7OztBQWxCQTtBQUNBO0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUEzRUE7QUFDQTtBQUdBOzs7QUF5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBM0NBO0FBa0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUEzQkE7QUFuREE7QUFzRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUF2RkE7QUFpR0E7Ozs7QUFuTEE7QUFDQTtBQXFMQTs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9