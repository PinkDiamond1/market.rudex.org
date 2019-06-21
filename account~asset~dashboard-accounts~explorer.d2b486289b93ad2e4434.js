(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 2516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(702);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(716);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 *  Renders a tab layout, handling switching and optionally persists the currently open tab using the SettingsStore
 *
 *  props:
 *     setting: unique name to be used to remember the active tab of this tabs layout,
 *     tabsClass: optional classes for the tabs container div
 *     contentClass: optional classes for the content container div
 *
 *  Usage:
 *
 *  <Tabs setting="mySetting">
 *      <Tab title="locale.string.title1">Tab 1 content</Tab>
 *      <Tab title="locale.string.title2">Tab 2 content</Tab>
 *  </Tabs>
 *
 */

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isActive = _props.isActive,
                index = _props.index,
                changeTab = _props.changeTab,
                title = _props.title,
                className = _props.className,
                updatedTab = _props.updatedTab,
                disabled = _props.disabled,
                subText = _props.subText;

            var c = classnames__WEBPACK_IMPORTED_MODULE_2___default()({ "is-active": isActive }, className);

            if (typeof title === "string" && title.indexOf(".") > 0) {
                title = counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate(title);
            }

            // dont string concetenate subText directly within the rendering, subText can be an object without toString
            // implementation, but valid DOM (meaning, don't do subText + "someString"

            if (this.props.collapsed) {
                // if subText is empty, dont render it, we dont want empty brackets added
                if (typeof subText === "string") {
                    subText = subText.trim();
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: index, "data-is-link-to": this.props.isLinkTo },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tab-title" },
                        title,
                        updatedTab ? "*" : "",
                        subText && " (",
                        subText && subText,
                        subText && ")"
                    )
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: c,
                    onClick: !disabled ? changeTab.bind(this, index, this.props.isLinkTo) : null
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tab-title" },
                        title,
                        updatedTab ? "*" : ""
                    ),
                    subText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tab-subtext" },
                        subText
                    )
                )
            );
        }
    }]);

    return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tab.propTypes = {
    changeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    isLinkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    subText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};
Tab.defaultProps = {
    isActive: false,
    index: 0,
    className: "",
    isLinkTo: "",
    subText: null
};

var Tabs = function (_React$Component2) {
    _inherits(Tabs, _React$Component2);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this2 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

        _this2.state = {
            activeTab: props.setting ? props.viewSettings.get(props.setting, props.defaultActiveTab) : props.defaultActiveTab,
            width: window.innerWidth
        };

        _this2._setDimensions = _this2._setDimensions.bind(_this2);
        return _this2;
    }

    _createClass(Tabs, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var nextSetting = nextProps.viewSettings.get(nextProps.setting);
            if (nextSetting !== this.props.viewSettings.get(this.props.setting)) {
                this.setState({
                    activeTab: nextSetting
                });
            }
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
        key: "_changeTab",
        value: function _changeTab(value, isLinkTo) {
            if (value === this.state.activeTab) return;
            // Persist current tab if desired

            if (isLinkTo !== "") {
                this.props.history.push(isLinkTo);
            }

            if (this.props.setting) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting(_defineProperty({}, this.props.setting, value));
            }
            this.setState({ activeTab: value });

            if (this.props.onChangeTab) this.props.onChangeTab(value);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                children = _props2.children,
                contentClass = _props2.contentClass,
                tabsClass = _props2.tabsClass,
                style = _props2.style,
                segmented = _props2.segmented;

            var collapseTabs = this.state.width < 900 && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) > 2;

            var activeContent = null;

            var tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
                if (!child) {
                    return null;
                }
                if (collapseTabs && child.props.disabled) return null;
                var isActive = index === _this3.state.activeTab;
                if (isActive) {
                    activeContent = child.props.children;
                }

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
                    collapsed: collapseTabs,
                    isActive: isActive,
                    changeTab: _this3._changeTab.bind(_this3),
                    index: index
                });
            }).filter(function (a) {
                return a !== null;
            });

            if (!activeContent) {
                activeContent = tabs[0].props.children;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(!!this.props.actionButtons ? "with-buttons" : "", this.props.className)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "service-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        {
                            style: style,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button-group no-margin", tabsClass, {
                                segmented: segmented
                            })
                        },
                        collapseTabs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            {
                                style: {
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    minWidth: "15rem"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    value: this.state.activeTab,
                                    style: { marginTop: 10, marginBottom: 10 },
                                    className: "bts-select",
                                    onChange: function onChange(e) {
                                        var ind = parseInt(e.target.value, 10);
                                        _this3._changeTab(ind, e.target[ind].attributes["data-is-link-to"].value);
                                    }
                                },
                                tabs
                            )
                        ) : tabs,
                        this.props.actionButtons ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "tabs-action-buttons" },
                            this.props.actionButtons
                        ) : null
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tab-content", contentClass) },
                    activeContent
                )
            );
        }
    }]);

    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tabs.propTypes = {
    setting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    defaultActiveTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    segmented: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Tabs.defaultProps = {
    active: 0,
    defaultActiveTab: 0,
    segmented: true,
    contentClass: "",
    style: {}
};


Tabs = Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Tabs, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return { viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().viewSettings };
    }
});

Tabs = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Tabs);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5kYXNoYm9hcmQtYWNjb3VudHN+ZXhwbG9yZXIuZDJiNDg2Mjg5YjkzYWQyZTQ0MzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLyoqXHJcbiAqICBSZW5kZXJzIGEgdGFiIGxheW91dCwgaGFuZGxpbmcgc3dpdGNoaW5nIGFuZCBvcHRpb25hbGx5IHBlcnNpc3RzIHRoZSBjdXJyZW50bHkgb3BlbiB0YWIgdXNpbmcgdGhlIFNldHRpbmdzU3RvcmVcclxuICpcclxuICogIHByb3BzOlxyXG4gKiAgICAgc2V0dGluZzogdW5pcXVlIG5hbWUgdG8gYmUgdXNlZCB0byByZW1lbWJlciB0aGUgYWN0aXZlIHRhYiBvZiB0aGlzIHRhYnMgbGF5b3V0LFxyXG4gKiAgICAgdGFic0NsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgdGFicyBjb250YWluZXIgZGl2XHJcbiAqICAgICBjb250ZW50Q2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IGNvbnRhaW5lciBkaXZcclxuICpcclxuICogIFVzYWdlOlxyXG4gKlxyXG4gKiAgPFRhYnMgc2V0dGluZz1cIm15U2V0dGluZ1wiPlxyXG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMVwiPlRhYiAxIGNvbnRlbnQ8L1RhYj5cclxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTJcIj5UYWIgMiBjb250ZW50PC9UYWI+XHJcbiAqICA8L1RhYnM+XHJcbiAqXHJcbiAqL1xyXG5cclxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY2hhbmdlVGFiOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpc0xpbmtUbzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzdWJUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSlcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlzTGlua1RvOiBcIlwiLFxyXG4gICAgICAgIHN1YlRleHQ6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgY2hhbmdlVGFiLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB1cGRhdGVkVGFiLFxyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgc3ViVGV4dFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBjID0gY25hbWVzKHtcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZX0sIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIgJiYgdGl0bGUuaW5kZXhPZihcIi5cIikgPiAwKSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRvbnQgc3RyaW5nIGNvbmNldGVuYXRlIHN1YlRleHQgZGlyZWN0bHkgd2l0aGluIHRoZSByZW5kZXJpbmcsIHN1YlRleHQgY2FuIGJlIGFuIG9iamVjdCB3aXRob3V0IHRvU3RyaW5nXHJcbiAgICAgICAgLy8gaW1wbGVtZW50YXRpb24sIGJ1dCB2YWxpZCBET00gKG1lYW5pbmcsIGRvbid0IGRvIHN1YlRleHQgKyBcInNvbWVTdHJpbmdcIlxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgLy8gaWYgc3ViVGV4dCBpcyBlbXB0eSwgZG9udCByZW5kZXIgaXQsIHdlIGRvbnQgd2FudCBlbXB0eSBicmFja2V0cyBhZGRlZFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1YlRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHN1YlRleHQgPSBzdWJUZXh0LnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGRhdGEtaXMtbGluay10bz17dGhpcy5wcm9wcy5pc0xpbmtUb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiIChcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgc3ViVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIpXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhbmdlVGFiLmJpbmQodGhpcywgaW5kZXgsIHRoaXMucHJvcHMuaXNMaW5rVG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0YWItc3VidGV4dFwiPntzdWJUZXh0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2V0dGluZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIHNlZ21lbnRlZDogUHJvcFR5cGVzLmJvb2xcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhY3RpdmU6IDAsXHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogMCxcclxuICAgICAgICBzZWdtZW50ZWQ6IHRydWUsXHJcbiAgICAgICAgY29udGVudENsYXNzOiBcIlwiLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQocHJvcHMuc2V0dGluZywgcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYilcclxuICAgICAgICAgICAgICAgIDogcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYixcclxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xyXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IG5leHRTZXR0aW5nID0gbmV4dFByb3BzLnZpZXdTZXR0aW5ncy5nZXQobmV4dFByb3BzLnNldHRpbmcpO1xyXG4gICAgICAgIGlmIChuZXh0U2V0dGluZyAhPT0gdGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHRoaXMucHJvcHMuc2V0dGluZykpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IG5leHRTZXR0aW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RGltZW5zaW9ucygpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VUYWIodmFsdWUsIGlzTGlua1RvKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYikgcmV0dXJuO1xyXG4gICAgICAgIC8vIFBlcnNpc3QgY3VycmVudCB0YWIgaWYgZGVzaXJlZFxyXG5cclxuICAgICAgICBpZiAoaXNMaW5rVG8gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goaXNMaW5rVG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0dGluZykge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuc2V0dGluZ106IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IHZhbHVlfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKSB0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgY29udGVudENsYXNzLCB0YWJzQ2xhc3MsIHN0eWxlLCBzZWdtZW50ZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjb2xsYXBzZVRhYnMgPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoIDwgOTAwICYmIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDI7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHRhYnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbGxhcHNlVGFicyAmJiBjaGlsZC5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYjtcclxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VUYWJzLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VUYWI6IHRoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xyXG5cclxuICAgICAgICBpZiAoIWFjdGl2ZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IHRhYnNbMF0ucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IFwid2l0aC1idXR0b25zXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImJ1dHRvbi1ncm91cCBuby1tYXJnaW5cIiwgdGFic0NsYXNzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VUYWJzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIxNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZVRhYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtpbmRdLmF0dHJpYnV0ZXNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pcy1saW5rLXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYnMtYWN0aW9uLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lcyhcInRhYi1jb250ZW50XCIsIGNvbnRlbnRDbGFzcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblRhYnMgPSBjb25uZWN0KFxyXG4gICAgVGFicyxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge3ZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuVGFicyA9IHdpdGhSb3V0ZXIoVGFicyk7XHJcblxyXG5leHBvcnQge1RhYnMsIFRhYn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUkE7QUFpQkE7Ozs7QUF6RUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBaUVBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7QUFkQTtBQVBBO0FBMkJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFuQ0E7QUFEQTtBQTBDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaERBO0FBcURBOzs7O0FBN0pBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBdUpBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=