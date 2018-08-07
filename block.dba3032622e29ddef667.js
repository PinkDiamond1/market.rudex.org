(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 2487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1332);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LinkToWitnessById = function (_React$Component) {
    _inherits(LinkToWitnessById, _React$Component);

    function LinkToWitnessById() {
        _classCallCheck(this, LinkToWitnessById);

        return _possibleConstructorReturn(this, (LinkToWitnessById.__proto__ || Object.getPrototypeOf(LinkToWitnessById)).apply(this, arguments));
    }

    _createClass(LinkToWitnessById, [{
        key: "render",
        value: function render() {
            var witness_account = this.props.witness.get("witness_account");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: witness_account });
        }
    }]);

    return LinkToWitnessById;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LinkToWitnessById.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};

LinkToWitnessById = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);

/* harmony default export */ __webpack_exports__["default"] = (LinkToWitnessById);

/***/ }),

/***/ 2765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(798);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2766);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlockContainer = function (_React$Component) {
    _inherits(BlockContainer, _React$Component);

    function BlockContainer() {
        _classCallCheck(this, BlockContainer);

        return _possibleConstructorReturn(this, (BlockContainer.__proto__ || Object.getPrototypeOf(BlockContainer)).apply(this, arguments));
    }

    _createClass(BlockContainer, [{
        key: "render",
        value: function render() {
            var height = parseInt(this.props.match.params.height, 10);
            var txIndex = this.props.match.params.txIndex ? parseInt(this.props.match.params.txIndex) : 0;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        blocks: function blocks() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().blocks;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
                    height: height,
                    scrollToIndex: txIndex
                }))
            );
        }
    }]);

    return BlockContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlockContainer);

/***/ }),

/***/ 2766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1014);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(799);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1316);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(895);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2487);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1360);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var TransactionList = function (_React$Component) {
    _inherits(TransactionList, _React$Component);

    function TransactionList() {
        _classCallCheck(this, TransactionList);

        return _possibleConstructorReturn(this, (TransactionList.__proto__ || Object.getPrototypeOf(TransactionList)).apply(this, arguments));
    }

    _createClass(TransactionList, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.block.id !== this.props.block.id;
        }
    }, {
        key: "render",
        value: function render() {
            var block = this.props.block;

            var transactions = null;

            transactions = [];

            if (block.transactions.length > 0) {
                transactions = [];

                block.transactions.forEach(function (trx, index) {
                    transactions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"],
                        {
                            key: index,
                            id: "tx_" + index,
                            name: "tx_" + index
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Transaction__WEBPACK_IMPORTED_MODULE_5__["default"], { key: index, trx: trx, index: index })
                    ));
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                transactions
            );
        }
    }]);

    return TransactionList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Block = function (_React$Component2) {
    _inherits(Block, _React$Component2);

    function Block(props) {
        _classCallCheck(this, Block);

        var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

        _this2.state = {
            showInput: false
        };

        _this2.scrollToTop = _this2.scrollToTop.bind(_this2);
        return _this2;
    }

    _createClass(Block, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this._getBlock(this.props.height);

            react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register("begin", function () {
                //console.log("begin", arguments);
            });

            react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register("end", function () {
                //console.log("end", arguments);
                _this3.setState({ scrollEnded: true });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.height !== this.props.height) {
                this._getBlock(np.height);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return !immutable__WEBPACK_IMPORTED_MODULE_3___default.a.is(np.blocks, this.props.blocks) || np.height !== this.props.height || np.dynGlobalObject !== this.props.dynGlobalObject || ns.showInput !== this.state.showInput;
        }
    }, {
        key: "scrollToTop",
        value: function scrollToTop() {
            react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToTop({
                duration: 1500,
                delay: 100,
                smooth: true,
                containerId: "blockContainer"
            });
        }
    }, {
        key: "_getBlock",
        value: function _getBlock(height) {
            if (height) {
                height = parseInt(height, 10);
                if (!this.props.blocks.get(height)) {
                    actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getBlock(height);
                }
            }
        }
    }, {
        key: "_nextBlock",
        value: function _nextBlock() {
            var height = this.props.match.params.height;
            var nextBlock = Math.min(this.props.dynGlobalObject.get("head_block_number"), parseInt(height, 10) + 1);
            this.props.history.push("/block/" + nextBlock);
        }
    }, {
        key: "_previousBlock",
        value: function _previousBlock() {
            var height = this.props.match.params.height;
            var previousBlock = Math.max(1, parseInt(height, 10) - 1);
            this.props.history.push("/block/" + previousBlock);
        }
    }, {
        key: "toggleInput",
        value: function toggleInput(e) {
            e.preventDefault();
            this.setState({ showInput: true });
        }
    }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
            if (e && e.keyCode === 13) {
                this.props.history.push("/block/" + e.target.value);
                this.setState({ showInput: false });
            }
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit() {
            var value = this.refs.blockInput.value;
            if (value) {
                this._onKeyDown({ keyCode: 13, target: { value: value } });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var blocks = this.props.blocks;

            var height = parseInt(this.props.height, 10);
            var block = blocks.get(height);

            if (this.props.scrollToIndex && !this.state.scrollEnded && block) {
                react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo("tx_" + this.props.scrollToIndex, {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                    offset: -100,
                    containerId: "blockContainer"
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var showInput = this.state.showInput;
            var blocks = this.props.blocks;

            var height = parseInt(this.props.height, 10);
            var block = blocks.get(height);

            var blockHeight = showInput ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "inline-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                    ref: "blockInput",
                    type: "number",
                    onKeyDown: this._onKeyDown.bind(this)
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    { onClick: this._onSubmit.bind(this), className: "button" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.block.go_to" })
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    style: { textTransform: "uppercase" },
                    component: "span",
                    content: "explorer.block.title"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    { onClick: this.toggleInput.bind(this) },
                    "\xA0#",
                    height
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block main-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content", id: "blockContainer" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h4",
                                { className: "text-center" },
                                blockHeight
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.date"
                                    }),
                                    ":",
                                    " ",
                                    block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedDate"], {
                                        value: block.timestamp,
                                        format: "full"
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.witness"
                                    }),
                                    ":",
                                    " ",
                                    block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        witness: block.witness
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.previous"
                                    }),
                                    ": ",
                                    block ? block.previous : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.transactions"
                                    }),
                                    ":",
                                    " ",
                                    block ? block.transactions.length : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "clearfix",
                                    style: { marginBottom: "1rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button float-left outline",
                                        onClick: this._previousBlock.bind(this)
                                    },
                                    "\u2190"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button float-right outline",
                                        onClick: this._nextBlock.bind(this)
                                    },
                                    "\u2192"
                                )
                            ),
                            block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransactionList, { block: block }) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: { textAlign: "center", marginBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    { onClick: this.scrollToTop },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "global.return_to_top" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Block;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Block.propTypes = {
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired,
    blocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
Block.defaultProps = {
    dynGlobalObject: "2.1.0",
    blocks: {},
    height: 1
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(Block));

/***/ })

}]);
//# sourceMappingURL=block.js.map