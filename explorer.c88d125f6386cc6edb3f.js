(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 2477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2478);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2479);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2482);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2483);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2485);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2491);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2493);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2495);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Explorer = function (_React$Component) {
    _inherits(Explorer, _React$Component);

    function Explorer(props) {
        _classCallCheck(this, Explorer);

        var _this = _possibleConstructorReturn(this, (Explorer.__proto__ || Object.getPrototypeOf(Explorer)).call(this, props));

        _this.state = {
            tabs: [{
                name: "blocks",
                link: "/explorer/blocks",
                translate: "explorer.blocks.title",
                content: _BlocksContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, {
                name: "assets",
                link: "/explorer/assets",
                translate: "explorer.assets.title",
                content: _AssetsContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, {
                name: "accounts",
                link: "/explorer/accounts",
                translate: "explorer.accounts.title",
                content: _AccountsContainer__WEBPACK_IMPORTED_MODULE_7__["default"]
            }, {
                name: "witnesses",
                link: "/explorer/witnesses",
                translate: "explorer.witnesses.title",
                content: _Witnesses__WEBPACK_IMPORTED_MODULE_2__["default"]
            }, {
                name: "committee_members",
                link: "/explorer/committee-members",
                translate: "explorer.committee_members.title",
                content: _CommitteeMembers__WEBPACK_IMPORTED_MODULE_3__["default"]
            }, {
                name: "markets",
                link: "/explorer/markets",
                translate: "markets.title",
                content: _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, {
                name: "fees",
                link: "/explorer/fees",
                translate: "fees.title",
                content: _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
            }]
        };
        return _this;
    }

    _createClass(Explorer, [{
        key: "render",
        value: function render() {
            var tab = this.props.match.params.tab;

            var defaultActiveTab = this.state.tabs.findIndex(function (t) {
                return t.name === tab;
            });

            var tabs = [];

            for (var i = 0; i < this.state.tabs.length; i++) {
                var currentTab = this.state.tabs[i];

                var TabContent = currentTab.content;
                var isLinkTo = defaultActiveTab == i ? "" : currentTab.link;

                tabs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                    { key: i, title: currentTab.translate, isLinkTo: isLinkTo },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, null)
                ));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
                {
                    defaultActiveTab: defaultActiveTab,
                    segmented: false,
                    setting: "explorer-tabs",
                    className: "account-tabs",
                    tabsClass: "account-overview bordered-header content-block",
                    contentClass: "tab-content padding"
                },
                tabs
            );
        }
    }]);

    return Explorer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explorer);

/***/ }),

/***/ 2479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1222);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1013);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1381);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(709);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(744);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















__webpack_require__(2480);

var WitnessCard = function (_React$Component) {
    _inherits(WitnessCard, _React$Component);

    function WitnessCard() {
        _classCallCheck(this, WitnessCard);

        return _possibleConstructorReturn(this, (WitnessCard.__proto__ || Object.getPrototypeOf(WitnessCard)).apply(this, arguments));
    }

    _createClass(WitnessCard, [{
        key: "_onCardClick",
        value: function _onCardClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.witness.get("name"));
        }
    }, {
        key: "render",
        value: function render() {
            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this._onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card", style: color },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        "#",
                        this.props.rank,
                        ": ",
                        this.props.witness.get("name")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "text-center" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                account: this.props.witness.get("name"),
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
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
                                        "Votes"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            amount: total_votes,
                                            asset: "1.3.0",
                                            decimalOffset: 5
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        "Last\xA0Block"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            time: new Date(last_aslot_time)
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        "Missed"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        witness_data.get("total_missed")
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WitnessCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WitnessCard.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

WitnessCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessCard);
WitnessCard = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessCard);

var WitnessRow = function (_React$Component2) {
    _inherits(WitnessRow, _React$Component2);

    function WitnessRow() {
        _classCallCheck(this, WitnessRow);

        return _possibleConstructorReturn(this, (WitnessRow.__proto__ || Object.getPrototypeOf(WitnessRow)).apply(this, arguments));
    }

    _createClass(WitnessRow, [{
        key: "_onRowClick",
        value: function _onRowClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.witness.get("name"));
        }

        // componentWillUnmount() {
        //     ChainStore.unSubFrom("witnesses", ChainStore.getWitnessById( this.props.witness.get("id") ).get("id"));
        // }

    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                witness = _props.witness,
                isCurrent = _props.isCurrent,
                rank = _props.rank;

            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            var currentClass = isCurrent ? "active-witness" : "";

            var missed = witness_data.get("total_missed");
            var missedClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: missed <= 500 }, { info: missed > 500 && missed <= 1250 }, { warning: missed > 1250 && missed <= 2000 }, { error: missed >= 200 });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: currentClass, onClick: this._onRowClick.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    rank
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: color },
                    witness.get("name")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: new Date(last_aslot_time) })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    witness_data.get("last_confirmed_block_num")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: missedClass },
                    missed
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: witness_data.get("total_votes"),
                        asset: "1.3.0",
                        decimalOffset: 5
                    })
                )
            );
        }
    }]);

    return WitnessRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WitnessRow.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

WitnessRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessRow);
WitnessRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessRow);

var WitnessList = function (_React$Component3) {
    _inherits(WitnessList, _React$Component3);

    function WitnessList() {
        _classCallCheck(this, WitnessList);

        var _this3 = _possibleConstructorReturn(this, (WitnessList.__proto__ || Object.getPrototypeOf(WitnessList)).call(this));

        _this3.state = {
            sortBy: "rank",
            inverseSort: true
        };
        return _this3;
    }

    _createClass(WitnessList, [{
        key: "_setSort",
        value: function _setSort(field) {
            this.setState({
                sortBy: field,
                inverseSort: field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                witnesses = _props2.witnesses,
                current = _props2.current,
                cardView = _props2.cardView,
                witnessList = _props2.witnessList;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;

            var most_recent_aslot = 0;
            var ranks = {};

            witnesses.filter(function (a) {
                if (!a) {
                    return false;
                }
                return witnessList.indexOf(a.get("id")) !== -1;
            }).sort(function (a, b) {
                if (a && b) {
                    return parseInt(b.get("total_votes"), 10) - parseInt(a.get("total_votes"), 10);
                }
            }).forEach(function (w, index) {
                if (w) {
                    var s = w.get("last_aslot");
                    if (most_recent_aslot < s) {
                        most_recent_aslot = s;
                    }

                    ranks[w.get("id")] = index + 1;
                }
            });

            var itemRows = null;
            if (witnesses.length > 0 && witnesses[1]) {
                itemRows = witnesses.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));
                    if (!account) return false;
                    var name = account.get("name");
                    if (!name) return false;
                    return name.indexOf(_this4.props.filter) !== -1;
                }).sort(function (a, b) {
                    var a_account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));
                    var b_account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(b.get("witness_account"));

                    if (!a_account || !b_account) {
                        return 0;
                    }
                    // console.log("a:", a.toJS());

                    switch (sortBy) {
                        case "name":
                            if (a_account.get("name") > b_account.get("name")) {
                                return inverseSort ? 1 : -1;
                            } else if (a_account.get("name") < b_account.get("name")) {
                                return inverseSort ? -1 : 1;
                            } else {
                                return 0;
                            }
                            break;

                        case "rank":
                            return !inverseSort ? ranks[b.get("id")] - ranks[a.get("id")] : ranks[a.get("id")] - ranks[b.get("id")];
                            break;

                        default:
                            return !inverseSort ? parseInt(b.get(sortBy), 10) - parseInt(a.get(sortBy), 10) : parseInt(a.get(sortBy), 10) - parseInt(b.get(sortBy), 10);
                    }
                }).map(function (a) {
                    if (!cardView) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WitnessRow, {
                            key: a.get("id"),
                            rank: ranks[a.get("id")],
                            isCurrent: current === a.get("id"),
                            witness: a.get("witness_account"),
                            most_recent: _this4.props.current_aslot
                        });
                    } else {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WitnessCard, {
                            key: a.get("id"),
                            rank: ranks[a.get("id")],
                            witness: a.get("witness_account"),
                            most_recent: _this4.props.current_aslot
                        });
                    }
                });
            }

            // table view
            if (!cardView) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "rank")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.rank" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "name")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.name" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "last_aslot")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.blocks.last_block" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "last_confirmed_block_num")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.last_confirmed" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "total_missed")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.missed" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "total_votes")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.votes" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        itemRows
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-up-1 medium-up-2 large-up-3" },
                    itemRows
                );
            }
        }
    }]);

    return WitnessList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WitnessList.propTypes = {
    witnesses: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

WitnessList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessList, {
    show_loader: true
});

var Witnesses = function (_React$Component4) {
    _inherits(Witnesses, _React$Component4);

    function Witnesses(props) {
        _classCallCheck(this, Witnesses);

        var _this5 = _possibleConstructorReturn(this, (Witnesses.__proto__ || Object.getPrototypeOf(Witnesses)).call(this, props));

        _this5.state = {
            filterWitness: props.filterWitness || "",
            cardView: props.cardView
        };
        return _this5;
    }

    _createClass(Witnesses, [{
        key: "_onFilter",
        value: function _onFilter(e) {
            e.preventDefault();
            this.setState({ filterWitness: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                filterWitness: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_toggleView",
        value: function _toggleView() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                cardView: !this.state.cardView
            });

            this.setState({
                cardView: !this.state.cardView
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                dynGlobalObject = _props3.dynGlobalObject,
                globalObject = _props3.globalObject;

            dynGlobalObject = dynGlobalObject.toJS();
            globalObject = globalObject.toJS();

            var current = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(dynGlobalObject.current_witness),
                currentAccount = null;
            if (current) {
                currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(current.get("witness_account"));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block vertical small-5 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.current" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            currentAccount ? currentAccount.get("name") : null
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.blocks.active_witnesses" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            Object.keys(globalObject.active_witnesses).length
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.participation" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            dynGlobalObject.participation,
                                            "%"
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.pay" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                amount: globalObject.parameters.witness_pay_per_block,
                                                asset: "1.3.0"
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.budget" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                amount: dynGlobalObject.witness_budget,
                                                asset: "1.3.0"
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.next_vote" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                time: new Date(dynGlobalObject.next_maintenance_time + "Z")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                                component: "h4",
                                                content: "markets.filter"
                                            }),
                                            " "
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "text",
                                                value: this.state.filterWitness,
                                                onChange: this._onFilter.bind(this)
                                            }),
                                            " "
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "view-switcher" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        className: "button outline",
                                        onClick: this._toggleView.bind(this)
                                    },
                                    !this.state.cardView ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.card" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.table" })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content " },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WitnessList, {
                                current_aslot: dynGlobalObject.current_aslot,
                                current: current ? current.get("id") : null,
                                witnesses: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(globalObject.active_witnesses),
                                witnessList: globalObject.active_witnesses,
                                filter: this.state.filterWitness,
                                cardView: this.state.cardView
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Witnesses;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Witnesses.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
Witnesses.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0"
};

Witnesses = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(Witnesses);

var WitnessStoreWrapper = function (_React$Component5) {
    _inherits(WitnessStoreWrapper, _React$Component5);

    function WitnessStoreWrapper() {
        _classCallCheck(this, WitnessStoreWrapper);

        return _possibleConstructorReturn(this, (WitnessStoreWrapper.__proto__ || Object.getPrototypeOf(WitnessStoreWrapper)).apply(this, arguments));
    }

    _createClass(WitnessStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Witnesses, this.props);
        }
    }]);

    return WitnessStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WitnessStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_9__["connect"])(WitnessStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("cardView"),
            filterWitness: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("filterWitness")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (WitnessStoreWrapper);

/***/ }),

/***/ 2480:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1222);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1013);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(730);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(709);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(744);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var CommitteeMemberCard = function (_React$Component) {
    _inherits(CommitteeMemberCard, _React$Component);

    function CommitteeMemberCard() {
        _classCallCheck(this, CommitteeMemberCard);

        return _possibleConstructorReturn(this, (CommitteeMemberCard.__proto__ || Object.getPrototypeOf(CommitteeMemberCard)).apply(this, arguments));
    }

    _createClass(CommitteeMemberCard, [{
        key: "_onCardClick",
        value: function _onCardClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.committee_member.get("name"));
        }
    }, {
        key: "render",
        value: function render() {
            var committee_member_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(this.props.committee_member.get("id"));

            if (!committee_member_data) {
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this._onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        this.props.committee_member.get("name")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-content clearfix" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                account: this.props.committee_member.get("name"),
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "balances" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.votes" }),
                                ":",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    decimalOffset: 5,
                                    amount: committee_member_data.get("total_votes"),
                                    asset: "1.3.0"
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CommitteeMemberCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CommitteeMemberCard.propTypes = {
    committee_member: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

CommitteeMemberCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberCard);
CommitteeMemberCard = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(CommitteeMemberCard);

var CommitteeMemberRow = function (_React$Component2) {
    _inherits(CommitteeMemberRow, _React$Component2);

    function CommitteeMemberRow() {
        _classCallCheck(this, CommitteeMemberRow);

        return _possibleConstructorReturn(this, (CommitteeMemberRow.__proto__ || Object.getPrototypeOf(CommitteeMemberRow)).apply(this, arguments));
    }

    _createClass(CommitteeMemberRow, [{
        key: "_onRowClick",
        value: function _onRowClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.committee_member.get("name"));
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                committee_member = _props.committee_member,
                rank = _props.rank;

            var committee_member_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(committee_member.get("id"));
            if (!committee_member_data) return null;

            var url = committee_member_data.get("url");
            url = url && url.length > 0 && url.indexOf("http") === -1 ? "http://" + url : url;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { onClick: this._onRowClick.bind(this) },
                    rank
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { onClick: this._onRowClick.bind(this) },
                    committee_member.get("name")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { onClick: this._onRowClick.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: committee_member_data.get("total_votes"),
                        asset: "1.3.0"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { href: url, rel: "noopener noreferrer", target: "_blank" },
                        committee_member_data.get("url")
                    )
                )
            );
        }
    }]);

    return CommitteeMemberRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CommitteeMemberRow.propTypes = {
    committee_member: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

CommitteeMemberRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberRow);
CommitteeMemberRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(CommitteeMemberRow);

var CommitteeMemberList = function (_React$Component3) {
    _inherits(CommitteeMemberList, _React$Component3);

    function CommitteeMemberList() {
        _classCallCheck(this, CommitteeMemberList);

        var _this3 = _possibleConstructorReturn(this, (CommitteeMemberList.__proto__ || Object.getPrototypeOf(CommitteeMemberList)).call(this));

        _this3.state = {
            sortBy: "rank",
            inverseSort: true
        };
        return _this3;
    }

    _createClass(CommitteeMemberList, [{
        key: "_setSort",
        value: function _setSort(field) {
            this.setState({
                sortBy: field,
                inverseSort: field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                committee_members = _props2.committee_members,
                cardView = _props2.cardView,
                membersList = _props2.membersList;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;


            var itemRows = null;

            var ranks = {};

            committee_members.filter(function (a) {
                if (!a) {
                    return false;
                }
                return membersList.indexOf(a.get("id")) !== -1;
            }).sort(function (a, b) {
                if (a && b) {
                    return parseInt(b.get("total_votes"), 10) - parseInt(a.get("total_votes"), 10);
                }
            }).forEach(function (c, index) {
                if (c) {
                    ranks[c.get("id")] = index + 1;
                }
            });

            if (committee_members.length > 0 && committee_members[1]) {
                itemRows = committee_members.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));
                    if (!account) {
                        return false;
                    }

                    return account.get("name").indexOf(_this4.props.filter) !== -1;
                }).sort(function (a, b) {
                    var a_account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));
                    var b_account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(b.get("committee_member_account"));
                    if (!a_account || !b_account) {
                        return 0;
                    }

                    switch (sortBy) {
                        case "name":
                            if (a_account.get("name") > b_account.get("name")) {
                                return inverseSort ? 1 : -1;
                            } else if (a_account.get("name") < b_account.get("name")) {
                                return inverseSort ? -1 : 1;
                            } else {
                                return 0;
                            }
                            break;

                        case "rank":
                            return !inverseSort ? ranks[b.get("id")] - ranks[a.get("id")] : ranks[a.get("id")] - ranks[b.get("id")];
                            break;

                        default:
                            return !inverseSort ? parseInt(b.get(sortBy), 10) - parseInt(a.get(sortBy), 10) : parseInt(a.get(sortBy), 10) - parseInt(b.get(sortBy), 10);
                    }
                }).map(function (a) {
                    if (!cardView) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommitteeMemberRow, {
                            key: a.get("id"),
                            rank: ranks[a.get("id")],
                            committee_member: a.get("committee_member_account")
                        });
                    } else {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommitteeMemberCard, {
                            key: a.get("id"),
                            rank: ranks[a.get("id")],
                            committee_member: a.get("committee_member_account")
                        });
                    }
                });
            }

            // table view
            if (!cardView) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "rank")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.rank" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "name")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.name" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    className: "clickable",
                                    onClick: this._setSort.bind(this, "total_votes")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.votes" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.votes.url" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        itemRows
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin small-up-1 medium-up-2 large-up-3" },
                    itemRows
                );
            }
        }
    }]);

    return CommitteeMemberList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CommitteeMemberList.propTypes = {
    committee_members: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

CommitteeMemberList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberList, {
    show_loader: true
});

var CommitteeMembers = function (_React$Component4) {
    _inherits(CommitteeMembers, _React$Component4);

    function CommitteeMembers(props) {
        _classCallCheck(this, CommitteeMembers);

        var _this5 = _possibleConstructorReturn(this, (CommitteeMembers.__proto__ || Object.getPrototypeOf(CommitteeMembers)).call(this, props));

        _this5.state = {
            filterCommitteeMember: props.filterCommitteeMember || "",
            cardView: props.cardView
        };
        return _this5;
    }

    _createClass(CommitteeMembers, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_1___default.a.is(nextProps.globalObject, this.props.globalObject) || nextState.filterCommitteeMember !== this.state.filterCommitteeMember || nextState.cardView !== this.state.cardView;
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(e) {
            e.preventDefault();
            this.setState({ filterCommitteeMember: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                filterCommitteeMember: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_toggleView",
        value: function _toggleView() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                cardViewCommittee: !this.state.cardView
            });

            this.setState({
                cardView: !this.state.cardView
            });
        }
    }, {
        key: "render",
        value: function render() {
            var globalObject = this.props.globalObject;

            globalObject = globalObject.toJS();

            var activeCommitteeMembers = [];
            for (var key in globalObject.active_committee_members) {
                if (globalObject.active_committee_members.hasOwnProperty(key)) {
                    activeCommitteeMembers.push(globalObject.active_committee_members[key]);
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.committee_members.active" }),
                                ":",
                                " ",
                                Object.keys(globalObject.active_committee_members).length
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "view-switcher" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        className: "button outline",
                                        onClick: this._toggleView.bind(this)
                                    },
                                    !this.state.cardView ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.card" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.table" })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical shrink" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                component: "h3",
                                content: "markets.filter"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "text",
                                value: this.state.filterCommitteeMember,
                                onChange: this._onFilter.bind(this)
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommitteeMemberList, {
                                committee_members: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(globalObject.active_committee_members),
                                membersList: globalObject.active_committee_members,
                                filter: this.state.filterCommitteeMember,
                                cardView: this.state.cardView
                            })
                        )
                    )
                )
            );
        }
    }]);

    return CommitteeMembers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CommitteeMembers.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
CommitteeMembers.defaultProps = {
    globalObject: "2.0.0"
};

CommitteeMembers = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMembers);

var CommitteeMembersStoreWrapper = function (_React$Component5) {
    _inherits(CommitteeMembersStoreWrapper, _React$Component5);

    function CommitteeMembersStoreWrapper() {
        _classCallCheck(this, CommitteeMembersStoreWrapper);

        return _possibleConstructorReturn(this, (CommitteeMembersStoreWrapper.__proto__ || Object.getPrototypeOf(CommitteeMembersStoreWrapper)).apply(this, arguments));
    }

    _createClass(CommitteeMembersStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommitteeMembers, this.props);
        }
    }]);

    return CommitteeMembersStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CommitteeMembersStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_8__["connect"])(CommitteeMembersStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().viewSettings.get("cardViewCommittee"),
            filterCommitteeMember: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().viewSettings.get("filterCommitteeMember")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (CommitteeMembersStoreWrapper);

/***/ }),

/***/ 2483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2484);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FeesContainer = function (_React$Component) {
    _inherits(FeesContainer, _React$Component);

    function FeesContainer() {
        _classCallCheck(this, FeesContainer);

        return _possibleConstructorReturn(this, (FeesContainer.__proto__ || Object.getPrototypeOf(FeesContainer)).apply(this, arguments));
    }

    _createClass(FeesContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fees__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)
            );
        }
    }]);

    return FeesContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FeesContainer);

/***/ }),

/***/ 2484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1051);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1013);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2401);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainTypes"].operations;

var ops = Object.keys(operations);

// Define groups and their corresponding operation ids
var fee_grouping = {
    general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 40],
    asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 41],
    market: [1, 2, 3, 4, 17, 18],
    account: [5, 6, 7, 8, 9],
    business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
};

// Operations that require LTM
var ltm_required = [5, 7, 20, 21, 34];

var FeeGroup = function (_React$Component) {
    _inherits(FeeGroup, _React$Component);

    function FeeGroup(props) {
        _classCallCheck(this, FeeGroup);

        return _possibleConstructorReturn(this, (FeeGroup.__proto__ || Object.getPrototypeOf(FeeGroup)).call(this, props));
    }

    _createClass(FeeGroup, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !immutable__WEBPACK_IMPORTED_MODULE_1___default.a.is(nextProps.globalObject, this.props.globalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                globalObject = _props.globalObject,
                settings = _props.settings,
                opIds = _props.opIds,
                title = _props.title;

            globalObject = globalObject.toJSON();
            var core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset("1.3.0");

            var current_fees = globalObject.parameters.current_fees;
            var network_fee = globalObject.parameters.network_percent_of_fee / 1e4;
            var scale = current_fees.scale;
            var feesRaw = current_fees.parameters;
            var preferredUnit = settings.get("unit") || core_asset.get("symbol");

            var trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.trxTypes");

            var fees = opIds.map(function (feeIdx) {
                if (feeIdx >= feesRaw.length) {
                    console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx", feeIdx);
                    return; // FIXME, if I ask for a fee that does not exist?
                }

                var feeStruct = feesRaw[feeIdx];

                var opId = feeStruct[0];
                var fee = feeStruct[1];
                var operation_name = ops[opId];
                var feename = trxTypes[operation_name];

                var feeRateForLTM = network_fee;
                if (opId === 10) {
                    // See https://github.com/bitshares/bitshares-ui/issues/996
                    feeRateForLTM = 0.5 + 0.5 * network_fee;
                }

                var rows = [];
                var headIncluded = false;
                var labelClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()("label", "info");

                for (var key in fee) {
                    var amount = fee[key] * scale / 1e4;
                    var amountForLTM = amount * feeRateForLTM;
                    var feeTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeTypes");
                    var assetAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amount, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amount,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var assetAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amountForLTM, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amountForLTM,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var _title = null;

                    if (!headIncluded) {
                        headIncluded = true;
                        _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { rowSpan: "6", style: { width: "15em" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: labelClass },
                                feename
                            )
                        );
                    }

                    if (ltm_required.indexOf(opId) < 0) {
                        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            {
                                key: opId.toString() + key,
                                className: feeTypes[key] === "Annual Membership" ? "linethrough" : ""
                            },
                            _title,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feeTypes[key]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                assetAmount,
                                amount !== 0 && preferredUnit !== "BTS" && [" / ", equivalentAmount]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                feeIdx !== 8 ? assetAmountLTM : null,
                                feeIdx !== 8 && amount !== 0 && preferredUnit !== "BTS" && [" / ", equivalentAmountLTM]
                            )
                        ));
                    } else {
                        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: opId.toString() + key },
                            _title,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feeTypes[key]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                "- ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "sup",
                                    null,
                                    "*"
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                assetAmountLTM,
                                amount !== 0 && preferredUnit !== "BTS" && [" / ", equivalentAmountLTM]
                            )
                        ));
                    }
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    { key: feeIdx },
                    rows
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    this.props.title
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.block.op" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.type" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.fee" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.feeltm" })
                            )
                        )
                    ),
                    fees
                )
            );
        }
    }]);

    return FeeGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeeGroup.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired
};
FeeGroup.defaultProps = {
    globalObject: "2.0.0"
};

FeeGroup = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(FeeGroup);

var Fees = function (_React$Component2) {
    _inherits(Fees, _React$Component2);

    function Fees() {
        _classCallCheck(this, Fees);

        return _possibleConstructorReturn(this, (Fees.__proto__ || Object.getPrototypeOf(Fees)).apply(this, arguments));
    }

    _createClass(Fees, [{
        key: "render",
        value: function render() {
            var FeeGroupsTitle = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeGroups");
            var feeGroups = [];

            for (var groupName in fee_grouping) {
                var groupNameText = FeeGroupsTitle[groupName];
                var feeIds = fee_grouping[groupName];
                feeGroups.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeeGroup, {
                    key: groupName,
                    settings: this.props.settings,
                    opIds: feeIds,
                    title: groupNameText
                }));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical", style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 shrink",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__["default"], { path: "components/Fees" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 ",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        feeGroups
                    )
                )
            );
        }
    }]);

    return Fees;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Fees);

/***/ }),

/***/ 2485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(798);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2486);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocksContainer = function (_React$Component) {
    _inherits(BlocksContainer, _React$Component);

    function BlocksContainer() {
        _classCallCheck(this, BlocksContainer);

        return _possibleConstructorReturn(this, (BlocksContainer.__proto__ || Object.getPrototypeOf(BlocksContainer)).apply(this, arguments));
    }

    _createClass(BlocksContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        latestBlocks: function latestBlocks() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestBlocks;
                        },
                        latestTransactions: function latestTransactions() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestTransactions;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blocks__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return BlocksContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocksContainer);

/***/ }),

/***/ 2486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1014);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1379);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2487);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(895);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1218);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2488);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2489);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(567);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1381);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1013);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2386);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















__webpack_require__(1377);

var BlockTimeAgo = function (_React$Component) {
    _inherits(BlockTimeAgo, _React$Component);

    function BlockTimeAgo() {
        _classCallCheck(this, BlockTimeAgo);

        return _possibleConstructorReturn(this, (BlockTimeAgo.__proto__ || Object.getPrototypeOf(BlockTimeAgo)).apply(this, arguments));
    }

    _createClass(BlockTimeAgo, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.blockTime !== this.props.blockTime;
        }
    }, {
        key: "render",
        value: function render() {
            var blockTime = this.props.blockTime;

            // let timePassed = Date.now() - blockTime;

            var timePassed = new Date().getTime() - new Date(blockTime).getTime();

            var textClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: timePassed <= 6000 }, { info: timePassed > 6000 && timePassed <= 15000 }, { warning: timePassed > 15000 && timePassed <= 25000 }, { error: timePassed > 25000 });

            return blockTime ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "h3",
                { className: textClass },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__["default"], { time: blockTime })
            ) : null;
        }
    }]);

    return BlockTimeAgo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Blocks = function (_React$Component2) {
    _inherits(Blocks, _React$Component2);

    function Blocks(props) {
        _classCallCheck(this, Blocks);

        var _this2 = _possibleConstructorReturn(this, (Blocks.__proto__ || Object.getPrototypeOf(Blocks)).call(this, props));

        _this2.state = {
            animateEnter: false,
            operationsHeight: null,
            blocksHeight: null
        };

        _this2._updateHeight = _this2._updateHeight.bind(_this2);
        return _this2;
    }

    _createClass(Blocks, [{
        key: "_getBlock",
        value: function _getBlock(height, maxBlock) {
            if (height) {
                height = parseInt(height, 10);
                actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__["default"].getLatest(height, maxBlock);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._updateHeight, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._updateHeight);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.latestBlocks.size === 0) {
                return this._getInitialBlocks();
            } else if (!this.state.animateEnter) {
                this.setState({
                    animateEnter: true
                });
            }

            var maxBlock = nextProps.dynGlobalObject.get("head_block_number");
            if (nextProps.latestBlocks.size >= 20 && nextProps.dynGlobalObject.get("head_block_number") !== nextProps.latestBlocks.get(0).id) {
                return this._getBlock(maxBlock, maxBlock);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getInitialBlocks();
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(blocks);
            this._updateHeight();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_14___default.a.is(nextProps.latestBlocks, this.props.latestBlocks) || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this._updateHeight();
        }
    }, {
        key: "_getInitialBlocks",
        value: function _getInitialBlocks() {
            var maxBlock = parseInt(this.props.dynGlobalObject.get("head_block_number"), 10);
            if (maxBlock) {
                for (var i = 19; i >= 0; i--) {
                    var exists = false;
                    if (this.props.latestBlocks.size > 0) {
                        for (var j = 0; j < this.props.latestBlocks.size; j++) {
                            if (this.props.latestBlocks.get(j).id === maxBlock - i) {
                                exists = true;
                                break;
                            }
                        }
                    }
                    if (!exists) {
                        this._getBlock(maxBlock - i, maxBlock);
                    }
                }
            }
        }
    }, {
        key: "_updateHeight",
        value: function _updateHeight() {
            var containerHeight = this.refs.outerWrapper.offsetHeight;
            var operationsTextHeight = this.refs.operationsText.offsetHeight;
            var blocksTextHeight = this.refs.blocksText.offsetHeight;

            this.setState({
                operationsHeight: containerHeight - operationsTextHeight,
                blocksHeight: containerHeight - blocksTextHeight
            }, this.psUpdate);
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(blocks);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                latestBlocks = _props.latestBlocks,
                latestTransactions = _props.latestTransactions,
                globalObject = _props.globalObject,
                dynGlobalObject = _props.dynGlobalObject,
                coreAsset = _props.coreAsset;
            var _state = this.state,
                blocksHeight = _state.blocksHeight,
                operationsHeight = _state.operationsHeight;

            var dynamicObject = this.props.getDynamicObject(coreAsset.get("dynamic_asset_data_id"));
            var blocks = null,
                transactions = null;
            var headBlock = null;
            var trxCount = 0,
                blockCount = latestBlocks.size,
                trxPerSec = 0,
                blockTimes = [],
                avgTime = 0;

            if (latestBlocks && latestBlocks.size >= 20) {
                var previousTime = void 0;

                var lastBlock = void 0,
                    firstBlock = void 0;

                // Map out the block times for the latest blocks and count the number of transactions
                latestBlocks.filter(function (a, index) {
                    // Only use consecutive blocks counting back from head block
                    return a.id === dynGlobalObject.get("head_block_number") - index;
                }).sort(function (a, b) {
                    return a.id - b.id;
                }).forEach(function (block, index) {
                    trxCount += block.transactions.length;
                    if (index > 0) {
                        blockTimes.push([block.id, (block.timestamp - previousTime) / 1000]);
                        lastBlock = block.timestamp;
                    } else {
                        firstBlock = block.timestamp;
                    }
                    previousTime = block.timestamp;
                });

                // Output block rows for the last 20 blocks
                blocks = latestBlocks.sort(function (a, b) {
                    return b.id - a.id;
                }).take(20).map(function (block) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: block.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/block/" + block.id },
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.id, 0)
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedDate"], {
                                value: block.timestamp,
                                format: "time"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__["default"], { witness: block.witness })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.transactions.length, 0)
                        )
                    );
                }).toArray();

                var trxIndex = 0;

                transactions = latestTransactions.sort(function (a, b) {
                    return b.block_num - a.block_num;
                }).take(20).map(function (trx) {
                    var opIndex = 0;
                    return trx.operations.map(function (op) {
                        if (trxIndex > 15) return null;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            key: trxIndex++,
                            op: op,
                            result: trx.operation_results[opIndex++],
                            block: trx.block_num,
                            hideFee: true,
                            hideOpLabel: false,
                            current: "1.2.0",
                            hideDate: true,
                            hidePending: true
                        });
                    }).filter(function (a) {
                        return !!a;
                    });
                }).toArray();

                headBlock = latestBlocks.first().timestamp;
                avgTime = blockTimes.reduce(function (previous, current, idx, array) {
                    return previous + current[1] / array.length;
                }, 0);

                trxPerSec = trxCount / ((lastBlock - firstBlock) / 1000);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "outerWrapper", className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.current_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(dynGlobalObject.get("head_block_number"), 0)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.last_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockTimeAgo, { blockTime: headBlock })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_sec"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxPerSec, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.avg_conf_time"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(avgTime / 2, 2),
                                "s"
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal  blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_witnesses"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_witnesses").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_committee_members"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_committee_members").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxCount / blockCount || 0, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.recently_missed_blocks"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                {
                                    className: "txtlabel warning",
                                    style: { fontWeight: "100" }
                                },
                                dynGlobalObject.get("recently_missed_count")
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-vertical medium-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.current_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("current_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.block_times"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                blockTimes: blockTimes,
                                head_block_number: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TransactionChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                blocks: latestBlocks,
                                head_block: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.stealth_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("confidential_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { ref: "transactionsBlock", className: "grid-block no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block small-12 medium-6 vertical no-overflow",
                            style: { paddingBottom: 0 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "operationsText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.recent" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.votes.info" })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: {
                                        maxHeight: operationsHeight || "400px",
                                        overflow: "hidden"
                                    },
                                    ref: "operations"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        transactions
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block medium-6 show-for-medium vertical no-overflow",
                            style: { paddingBottom: 0, paddingLeft: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "blocksText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                        component: "span",
                                        content: "explorer.blocks.recent"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block vertical",
                                    style: {
                                        maxHeight: blocksHeight || "438px",
                                        overflow: "hidden"
                                    },
                                    ref: "blocks"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.id"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.date"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.witness"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.count"
                                                })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__["default"],
                                        {
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        blocks
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Blocks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Blocks.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired
};
Blocks.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0",
    latestBlocks: {},
    assets: {},
    accounts: {},
    height: 1
};


Blocks = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(Blocks, { show_loader: true });
Blocks = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__["default"])(Blocks, {
    propNames: ["coreAsset"],
    withDynamic: true
});
/* harmony default export */ __webpack_exports__["default"] = (Blocks);

/***/ }),

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

/***/ 2488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2462);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TransactionChart = function (_React$Component) {
    _inherits(TransactionChart, _React$Component);

    function TransactionChart() {
        _classCallCheck(this, TransactionChart);

        return _possibleConstructorReturn(this, (TransactionChart.__proto__ || Object.getPrototypeOf(TransactionChart)).apply(this, arguments));
    }

    _createClass(TransactionChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blocks.size < 20) {
                return false;
            }
            var chart = this.refs.trx_chart ? this.refs.trx_chart.chart : null;
            if (chart && nextProps.blocks !== this.props.blocks) {
                var _getData2 = this._getData(nextProps),
                    trxData = _getData2.trxData,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                // console.log("chart:", chart, "series:", series.data, "finalValue:", finalValue);
                if (series.xData.length) {
                    trxData.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }
            return nextProps.blocks !== this.props.blocks || nextProps.head_block !== this.props.head_block;
        }
    }, {
        key: "_getData",
        value: function _getData(props) {
            var blocks = props.blocks,
                head_block = props.head_block;


            var trxData = [];
            var max = 0;
            trxData = blocks.filter(function (a) {
                return a.id >= head_block - 30;
            }).sort(function (a, b) {
                return a.id - b.id;
            }).takeLast(30).map(function (block) {
                max = Math.max(block.transactions.length, max);
                return [block.id, block.transactions.length];
            }).toArray();

            var colors = trxData.map(function (entry) {
                // console.log("entry:", entry);
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                colors: colors,
                trxData: trxData,
                max: max
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                trxData = _getData3.trxData,
                colors = _getData3.colors,
                max = _getData3.max;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("explorer.blocks.transactions");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y;
                    }
                },
                series: [{
                    name: "Transactions",
                    data: trxData,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: Math.max(1.5, max + 0.5),
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 5,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return trxData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a, { ref: "trx_chart", config: config }) : null;
        }
    }]);

    return TransactionChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TransactionChart);

/***/ }),

/***/ 2489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2462);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocktimeChart = function (_React$Component) {
    _inherits(BlocktimeChart, _React$Component);

    function BlocktimeChart() {
        _classCallCheck(this, BlocktimeChart);

        return _possibleConstructorReturn(this, (BlocktimeChart.__proto__ || Object.getPrototypeOf(BlocktimeChart)).apply(this, arguments));
    }

    _createClass(BlocktimeChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blockTimes.length < 19) {
                return false;
            } else if (this.props.blockTimes.length === 0) {
                return true;
            }

            var chart = this.refs.chart ? this.refs.chart.chart : null;
            if (chart) {
                var _getData2 = this._getData(nextProps),
                    blockTimes = _getData2.blockTimes,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                if (series.xData.length) {
                    // console.log(chart, "series:", series.data, "finalValue:", finalValue);
                    blockTimes.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }

            return nextProps.blockTimes[nextProps.blockTimes.length - 1][0] !== this.props.blockTimes[this.props.blockTimes.length - 1][0] || nextProps.blockTimes.length !== this.props.blockTimes.length;
        }
    }, {
        key: "_getData",
        value: function _getData() {
            var _props = this.props,
                blockTimes = _props.blockTimes,
                head_block = _props.head_block;


            blockTimes.filter(function (a) {
                return a[0] >= head_block - 30;
            });

            if (blockTimes && blockTimes.length) {
                blockTimes = Object(lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__["default"])(blockTimes, 30);
            }

            var colors = blockTimes.map(function (entry) {
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                blockTimes: blockTimes,
                colors: colors
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                blockTimes = _getData3.blockTimes,
                colors = _getData3.colors;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("explorer.blocks.block_time");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y + "s";
                    }
                },
                series: [{
                    name: "Block time",
                    data: blockTimes,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 3,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return blockTimes.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_2___default.a, { ref: "chart", config: config }) : null;
        }
    }]);

    return BlocktimeChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocktimeChart);

/***/ }),

/***/ 2490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(923);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);



/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n);
  n = length - n;
  return Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, n < 0 ? 0 : n, length);
}

/* harmony default export */ __webpack_exports__["default"] = (takeRight);


/***/ }),

/***/ 2491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1285);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2492);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AssetsContainer = function (_React$Component) {
    _inherits(AssetsContainer, _React$Component);

    function AssetsContainer() {
        _classCallCheck(this, AssetsContainer);

        return _possibleConstructorReturn(this, (AssetsContainer.__proto__ || Object.getPrototypeOf(AssetsContainer)).apply(this, arguments));
    }

    _createClass(AssetsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                    stores: [stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]],
                    inject: {
                        assets: function assets() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().assets;
                        },
                        filterMPA: function filterMPA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterMPA");
                        },
                        filterUIA: function filterUIA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterUIA");
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets__WEBPACK_IMPORTED_MODULE_4__["default"], null)
            );
        }
    }]);

    return AssetsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetsContainer);

/***/ }),

/***/ 2492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1286);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(744);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1332);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1030);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1013);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1217);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(416);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(567);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(879);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(733);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var accountStorage = new common_localStorage__WEBPACK_IMPORTED_MODULE_16__["default"]("__graphene__");

var Assets = function (_React$Component) {
    _inherits(Assets, _React$Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this));

        _this.state = {
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets: _typeof(accountStorage.get("totalAssets")) != "object" ? accountStorage.get("totalAssets") : 3000,
            assetsFetched: 0,
            activeFilter: "market",
            filterUIA: props.filterUIA || "",
            filterMPA: props.filterMPA || "",
            filterPM: props.filterPM || ""
        };
        return _this;
    }

    _createClass(Assets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_5___default.a.is(nextProps.assets, this.props.assets) || !common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkAssets(this.props.assets, true);
        }
    }, {
        key: "_checkAssets",
        value: function _checkAssets(assets, force) {
            this.setState({ isLoading: true });
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
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer("A", 100);
                this.setState({ assetsFetched: 100 });
            } else if (assets.size >= this.state.assetsFetched) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer(lastAsset.symbol, 100);
                this.setState({ assetsFetched: this.state.assetsFetched + 99 });
            }

            if (assets.size > this.state.totalAssets) {
                accountStorage.set("totalAssets", assets.size);
            }

            if (this.state.assetsFetched >= this.state.totalAssets - 100) {
                this.setState({ isLoading: false });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.assets !== this.props.assets) {
                this._checkAssets(nextProps.assets);
            }
        }
    }, {
        key: "linkToAccount",
        value: function linkToAccount(name_or_id) {
            if (!name_or_id) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "-"
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], { account: name_or_id });
        }
    }, {
        key: "_toggleFilter",
        value: function _toggleFilter(filter) {
            this.setState({
                activeFilter: filter
            });
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(type, e) {
            this.setState(_defineProperty({}, type, e.target.value.toUpperCase()));
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting(_defineProperty({}, type, e.target.value.toUpperCase()));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var assets = this.props.assets;
            var activeFilter = this.state.activeFilter;


            var placeholder = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("markets.filter").toUpperCase();
            var coreAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAsset("1.3.0");

            var uia = void 0;
            var mia = void 0;
            var pm = void 0;

            if (activeFilter == "user") {
                uia = assets.filter(function (a) {
                    return !a.market_asset && a.symbol.indexOf(_this2.state.filterUIA) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.symbol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                { to: "/asset/" + asset.symbol },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            _this2.linkToAccount(asset.issuer)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                amount: asset.dynamic.current_supply,
                                asset: asset.id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            if (activeFilter == "market") {
                mia = assets.filter(function (a) {
                    return a.bitasset_data && !a.bitasset_data.is_prediction_market && a.symbol.indexOf(_this2.state.filterMPA) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.symbol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                { to: "/asset/" + asset.symbol },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            _this2.linkToAccount(asset.issuer)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                amount: asset.dynamic.current_supply,
                                asset: asset.id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            if (activeFilter == "prediction") {
                pm = assets.filter(function (a) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(a.options.description);

                    return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(_this2.state.filterPM.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(_this2.state.filterPM.toLowerCase()) !== -1);
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);
                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.id.split(".")[2] },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { width: "80%" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: { paddingTop: 10, fontWeight: "bold" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                    { to: "/asset/" + asset.symbol },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                                ),
                                description.condition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " (",
                                    description.condition,
                                    ")"
                                ) : null
                            ),
                            description ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "10px 20px 5px 0",
                                        lineHeight: "18px"
                                    }
                                },
                                description.main
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "0 20px 5px 0",
                                        lineHeight: "18px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], { account: asset.issuer }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " ",
                                    "-",
                                    " ",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        amount: asset.dynamic.current_supply,
                                        asset: asset.id
                                    })
                                ),
                                description.expiry ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " - ",
                                    description.expiry
                                ) : null
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { width: "20%" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return -1;
                    } else if (a.key < b.key) {
                        return 1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "generic-bordered-box tab-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "header-selector" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "selector" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "market"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "market")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.market" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "user"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "user")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.user" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "prediction"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "prediction")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.prediction" })
                                    )
                                )
                            ),
                            this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], null) : null,
                            activeFilter == "market" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: placeholder,
                                        type: "text",
                                        value: this.state.filterMPA,
                                        onChange: this._onFilter.bind(this, "filterMPA")
                                    })
                                )
                            ) : null,
                            activeFilter == "market" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "table",
                                        { className: "table" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "thead",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tr",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "explorer.assets.symbol"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "explorer.assets.issuer"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "markets.supply"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null)
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tbody",
                                            null,
                                            mia
                                        )
                                    )
                                )
                            ) : null,
                            activeFilter == "user" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: placeholder,
                                        type: "text",
                                        value: this.state.filterUIA,
                                        onChange: this._onFilter.bind(this, "filterUIA")
                                    })
                                )
                            ) : null,
                            activeFilter == "user" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "table",
                                        { className: "table" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "thead",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "tr",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "explorer.assets.symbol"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "explorer.assets.issuer"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "th",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                                        component: "span",
                                                        content: "markets.supply"
                                                    })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null)
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tbody",
                                            null,
                                            uia
                                        )
                                    )
                                )
                            ) : null,
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("markets.search").toUpperCase(),
                                        type: "text",
                                        value: this.state.filterPM,
                                        onChange: this._onFilter.bind(this, "filterPM")
                                    })
                                )
                            ) : null,
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "table",
                                        { className: "table" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tbody",
                                            null,
                                            pm
                                        )
                                    )
                                )
                            ) : null
                        )
                    )
                )
            );
        }
    }]);

    return Assets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Assets.defaultProps = {
    assets: {}
};

Assets.propTypes = {
    assets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ 2493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2494);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        searchAccounts: function searchAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchAccounts;
                        },
                        searchTerm: function searchTerm() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchTerm;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return AccountsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountsContainer);

/***/ }),

/***/ 2494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(744);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(565);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(802);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(895);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1232);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(549);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(879);


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
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.contacts !== this.props.contacts || nextProps.account !== this.props.account;
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].addAccountContact(account);
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeAccountContact(account);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                contacts = _props.contacts;


            if (!account) return null;
            var balance = account.getIn(["balances", "1.3.0"]) || null;
            var accountName = account.get("name");

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                { key: account.get("id") },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    account.get("id")
                ),
                contacts.has(accountName) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { onClick: this._onRemoveContact.bind(this, accountName) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        name: "minus-circle",
                        title: "icons.minus_circle.remove_contact"
                    })
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { onClick: this._onAddContact.bind(this, accountName) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        name: "plus-circle",
                        title: "icons.plus_circle.add_contact"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                        { to: "/account/" + accountName + "/overview" },
                        accountName
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], { balance: balance })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        balance: balance,
                        asPercentage: true
                    })
                )
            );
        }
    }]);

    return AccountRow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AccountRow.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired
};
AccountRow.defaultProps = {
    tempComponent: "tr",
    autosubscribe: false
};

AccountRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountRow);

var AccountRowWrapper = function AccountRowWrapper(props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountRow, props);
};

AccountRowWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_12__["connect"])(AccountRowWrapper, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            contacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().accountContacts
        };
    }
});

var Accounts = function (_React$Component2) {
    _inherits(Accounts, _React$Component2);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this2 = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this2.state = {
            searchTerm: props.searchTerm,
            isLoading: false
        };

        _this2._searchAccounts = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2._searchAccounts, 200);
        return _this2;
    }

    _createClass(Accounts, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.searchAccounts, this.props.searchAccounts) || nextState.searchTerm !== this.state.searchTerm || nextState.isLoading !== this.state.isLoading;
        }
    }, {
        key: "_onSearchChange",
        value: function _onSearchChange(e) {
            this.setState({
                searchTerm: e.target.value.toLowerCase(),
                isLoading: true
            });
            this._searchAccounts(e.target.value);
        }
    }, {
        key: "_searchAccounts",
        value: function _searchAccounts(searchTerm) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].accountSearch(searchTerm);
            this.setState({ isLoading: false });
        }
    }, {
        key: "render",
        value: function render() {
            var searchAccounts = this.props.searchAccounts;
            var searchTerm = this.state.searchTerm;

            var accountRows = null;

            if (searchAccounts.size > 0 && searchTerm && searchTerm.length > 0) {
                accountRows = searchAccounts.filter(function (a) {
                    /*
                    * This appears to return false negatives, perhaps from
                    * changed account name rules when moving to graphene?. Either
                    * way, trying to resolve invalid names fails in the ChainStore,
                    * which in turn breaks the BindToChainState wrapper
                    */
                    // if (!ChainValidation.is_account_name(a, true)) {
                    //     return false;
                    // }
                    return a.indexOf(searchTerm) !== -1;
                }).sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    } else if (a < b) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).map(function (account, id) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountRowWrapper, { key: id, account: account });
                }).toArray();
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical medium-6 medium-offset-3" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-content shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            component: "h3",
                            content: "explorer.accounts.title"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            value: this.state.searchTerm,
                            onChange: this._onSearchChange.bind(this)
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "table",
                            { className: "table" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                            component: "span",
                                            content: "explorer.assets.id"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            name: "user",
                                            title: "icons.user.account"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                            component: "span",
                                            content: "account.name"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                            component: "span",
                                            content: "gateway.balance"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                            component: "span",
                                            content: "account.percent"
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tbody",
                                null,
                                this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { colSpan: "5" }) : accountRows
                            )
                        ),
                        this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { style: { textAlign: "center", padding: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "three-bounce" })
                        ) : null
                    )
                )
            );
        }
    }]);

    return Accounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Accounts.defaultProps = {
    searchAccounts: {}
};

Accounts.propTypes = {
    searchAccounts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Accounts);

/***/ }),

/***/ 2495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1266);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1285);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(709);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2496);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MarketsContainer = function (_React$Component) {
    _inherits(MarketsContainer, _React$Component);

    function MarketsContainer() {
        _classCallCheck(this, MarketsContainer);

        return _possibleConstructorReturn(this, (MarketsContainer.__proto__ || Object.getPrototypeOf(MarketsContainer)).apply(this, arguments));
    }

    _createClass(MarketsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_4___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        lookupResults: function lookupResults() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().lookupResults;
                        },
                        marketBase: function marketBase() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketBase;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_5__["default"], null)
            );
        }
    }]);

    return MarketsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MarketsContainer);

/***/ }),

/***/ 2496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2412);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Markets = function (_React$Component) {
    _inherits(Markets, _React$Component);

    function Markets() {
        _classCallCheck(this, Markets);

        var _this = _possibleConstructorReturn(this, (Markets.__proto__ || Object.getPrototypeOf(Markets)).call(this));

        _this.state = {
            height: null
        };

        _this._setDimensions = _this._setDimensions.bind(_this);
        return _this;
    }

    _createClass(Markets, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var height = this.refs.wrapper.offsetHeight;

            if (height !== this.state.height) {
                this.setState({ height: height });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block page-layout no-overflow" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    style: { width: "100%", padding: 20 },
                    listHeight: this.state.height ? this.state.height - 82 : null,
                    className: "no-overflow",
                    headerStyle: { paddingTop: 0, borderTop: "none" },
                    columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "quoteSupply", index: 3 }, { name: "vol", index: 4 }, { name: "price", index: 5 }, { name: "change", index: 6 }]
                })
            );
        }
    }]);

    return Markets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Markets);

/***/ })

}]);
//# sourceMappingURL=explorer.js.map