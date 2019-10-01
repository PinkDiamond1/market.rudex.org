(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 2525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1833);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1834);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2304);
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

/***/ 2847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1821);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2848);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ 2848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2288);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1833);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1834);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2525);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2313);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suMzg4NTU3MTFiYTc1ZGYzODk5ZWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmxvY2tDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0Jsb2NrLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4vTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuXHJcbmNsYXNzIExpbmtUb1dpdG5lc3NCeUlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgd2l0bmVzczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgd2l0bmVzc19hY2NvdW50ID0gdGhpcy5wcm9wcy53aXRuZXNzLmdldChcIndpdG5lc3NfYWNjb3VudFwiKTtcclxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3dpdG5lc3NfYWNjb3VudH0gLz47XHJcbiAgICB9XHJcbn1cclxuTGlua1RvV2l0bmVzc0J5SWQgPSBCaW5kVG9DaGFpblN0YXRlKExpbmtUb1dpdG5lc3NCeUlkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtUb1dpdG5lc3NCeUlkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCbG9ja2NoYWluU3RvcmUgZnJvbSBcInN0b3Jlcy9CbG9ja2NoYWluU3RvcmVcIjtcclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuXHJcbmNsYXNzIEJsb2NrQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgbGV0IHR4SW5kZXggPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy50eEluZGV4XHJcbiAgICAgICAgICAgID8gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudHhJbmRleClcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tCbG9ja2NoYWluU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU3RvcmUuZ2V0U3RhdGUoKS5ibG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17dHhJbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IEJsb2NrY2hhaW5BY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Jsb2NrY2hhaW5BY3Rpb25zXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tIFwiLi9UcmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgTGlua1RvV2l0bmVzc0J5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvV2l0bmVzc0J5SWRcIjtcclxuaW1wb3J0IHtFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxlcn0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuY2xhc3MgVHJhbnNhY3Rpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gbmV4dFByb3BzLmJsb2NrLmlkICE9PSB0aGlzLnByb3BzLmJsb2NrLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jsb2NrfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9ucyA9IG51bGw7XHJcblxyXG4gICAgICAgIHRyYW5zYWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICBibG9jay50cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJ4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2B0eF8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2B0eF8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb24ga2V5PXtpbmRleH0gdHJ4PXt0cnh9IGluZGV4PXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0VsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2Pnt0cmFuc2FjdGlvbnN9PC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGJsb2NrczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCIsXHJcbiAgICAgICAgYmxvY2tzOiB7fSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dJbnB1dDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wID0gdGhpcy5zY3JvbGxUb1RvcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2dldEJsb2NrKHRoaXMucHJvcHMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgRXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiYmVnaW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmVnaW5cIiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVuZFwiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzY3JvbGxFbmRlZDogdHJ1ZX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcclxuICAgICAgICBpZiAobnAuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRCbG9jayhucC5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhucC5ibG9ja3MsIHRoaXMucHJvcHMuYmxvY2tzKSB8fFxyXG4gICAgICAgICAgICBucC5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIG5wLmR5bkdsb2JhbE9iamVjdCAhPT0gdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QgfHxcclxuICAgICAgICAgICAgbnMuc2hvd0lucHV0ICE9PSB0aGlzLnN0YXRlLnNob3dJbnB1dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXHJcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGFpbmVySWQ6IFwiYmxvY2tDb250YWluZXJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRCbG9jayhoZWlnaHQpIHtcclxuICAgICAgICBpZiAoaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGhlaWdodCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmxvY2tzLmdldChoZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICBCbG9ja2NoYWluQWN0aW9ucy5nZXRCbG9jayhoZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9uZXh0QmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhlaWdodDtcclxuICAgICAgICBsZXQgbmV4dEJsb2NrID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpLFxyXG4gICAgICAgICAgICBwYXJzZUludChoZWlnaHQsIDEwKSArIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtuZXh0QmxvY2t9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ByZXZpb3VzQmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhlaWdodDtcclxuICAgICAgICBsZXQgcHJldmlvdXNCbG9jayA9IE1hdGgubWF4KDEsIHBhcnNlSW50KGhlaWdodCwgMTApIC0gMSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke3ByZXZpb3VzQmxvY2t9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSW5wdXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93SW5wdXQ6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25LZXlEb3duKGUpIHtcclxuICAgICAgICBpZiAoZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtlLnRhcmdldC52YWx1ZX1gKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0lucHV0OiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlZnMuYmxvY2tJbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25LZXlEb3duKHtrZXlDb2RlOiAxMywgdGFyZ2V0OiB7dmFsdWV9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQge2Jsb2Nrc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLnByb3BzLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGxldCBibG9jayA9IGJsb2Nrcy5nZXQoaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Nyb2xsVG9JbmRleCAmJiAhdGhpcy5zdGF0ZS5zY3JvbGxFbmRlZCAmJiBibG9jaykge1xyXG4gICAgICAgICAgICBzY3JvbGxlci5zY3JvbGxUbyhgdHhfJHt0aGlzLnByb3BzLnNjcm9sbFRvSW5kZXh9YCwge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwLFxyXG4gICAgICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAtMTAwLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVySWQ6IFwiYmxvY2tDb250YWluZXJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaG93SW5wdXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge2Jsb2Nrc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLnByb3BzLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGxldCBibG9jayA9IGJsb2Nrcy5nZXQoaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGJsb2NrSGVpZ2h0ID0gc2hvd0lucHV0ID8gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImJsb2NrSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5nb190b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUlucHV0LmJpbmQodGhpcyl9PiZuYnNwOyN7aGVpZ2h0fTwvYT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCIgaWQ9XCJibG9ja0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBtZWRpdW0tb2Zmc2V0LTIgbWVkaXVtLTggbGFyZ2Utb2Zmc2V0LTMgbGFyZ2UtNiBzbWFsbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2Jsb2NrSGVpZ2h0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay50aW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2sud2l0bmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2NrID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb1dpdG5lc3NCeUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzcz17YmxvY2sud2l0bmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5wcmV2aW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+OiB7YmxvY2sgPyBibG9jay5wcmV2aW91cyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLnRyYW5zYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2NrID8gYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxvYXQtbGVmdCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fcHJldmlvdXNCbG9jay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NTkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsb2F0LXJpZ2h0IG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9uZXh0QmxvY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODU5NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2NrID8gPFRyYW5zYWN0aW9uTGlzdCBibG9jaz17YmxvY2t9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zY3JvbGxUb1RvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdsb2JhbC5yZXR1cm5fdG9fdG9wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShCbG9jayk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFSQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBRUE7QUFDQTtBQUhBO0FBUkE7QUFlQTs7OztBQXZCQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBNUJBO0FBQ0E7QUE4QkE7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU5BO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUE5QkE7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFWQTtBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSEE7QUExREE7QUFEQTtBQURBO0FBREE7QUF5RUE7Ozs7QUE3TkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQXVOQTs7OztBIiwic291cmNlUm9vdCI6IiJ9