(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 2602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ 2613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return CreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenuRenderer", function() { return menuRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArrowRenderer", function() { return arrowRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultClearRenderer", function() { return clearRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterOptions", function() { return filterOptions; });
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2602);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(386);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);






var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

var clearRenderer = function clearRenderer() {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

var menuRenderer = function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	focusedOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
	inputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onOptionRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	removeValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	selectValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	valueArray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var blockEvent = (function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Option = function (_React$Component) {
	inherits(Option, _React$Component);

	function Option(props) {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, option.className);

			return option.disabled ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					onMouseDown: blockEvent,
					onClick: blockEvent },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Option.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className (based on mouse position)
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is disabled
	isFocused: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is focused
	isSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is selected
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseEnter on option element
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on option element
	onUnfocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseLeave on option element
	option: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, // object that is base for that option
	optionIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits(Value, _React$Component);

	function Value(props) {
		classCallCheck(this, Value);

		var _this = possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Value.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // disabled prop passed to ReactSelect
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // Unique id for the value - used for aria
	onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on value label
	onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle removal of the value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]);
var stringOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select$1 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
			var pref = document.addEventListener ? '' : 'on';

			document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
			document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false,
						focusedOption: null
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen,
					focusedOption: null
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (!this.props.closeOnSelect) {
				return;
			}
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value,
							values: valueArray
						},
						renderLabel(value, i),
						react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, defineProperty(_classNames, this._instancePrefix + '-list', isOpen), defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = objectWithoutProperties(this.props.inputProps, []);


				var _ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()(defineProperty({}, this._instancePrefix + '-list', isOpen));
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('div', _extends({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						'div',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Select$1.propTypes = {
	'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // aria label (for assistive tech)
	'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create the drop-down caret element
	autoBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // automatically blur the component when an option is selected
	autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // autofocus the component on mount
	autofocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // deprecated; use autoFocus instead
	autosize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable autosizing or not
	backspaceRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // should it be possible to reset value
	closeOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to close the menu when a value is selected
	deleteRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether delete removes an item if there is no text input
	delimiter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // delimiter to use to join multiple values for the hidden field value
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is disabled or not
	escapeClearsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether escape clears the value when the menu is closed
	filterOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to filter a single option (option, filterString)
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to strip diacritics when filtering
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to perform case-insensitive filtering
	inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // custom attributes for the Input
	inputRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // returns a custom input component
	instanceId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // set the components instanceId
	isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	matchPos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|start) match the start or entire string when filtering
	matchProp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|label|value) which option property to filter on
	menuBuffer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu container
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // renders a custom menu with options
	menuStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onBlur handler: function (event) {}
	onBlurResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on blur
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is closed
	onCloseResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onFocus handler: function (event) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is opened
	onSelectResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // always open options menu on focus
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // option component to render in dropdown
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optionRenderer: function (option) {}
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, // array of options
	pageSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the selected option is removed from the dropdown on multi selects
	required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // applies HTML5 required attribute when needed
	resetValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // value to use when you clear the control
	rtl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable searching feature or not
	simpleValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to trim whitespace around filter value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // initial field value
	valueComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // value component to render
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	valueRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // valueRenderer: function (option) {}
	wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes = {
	autoload: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // object to use to cache results; set to null/false to disable caching
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// replaces the placeholder while options are loading
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	noResultsText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field noResultsText, displayed when no options come back from the server
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optional for keeping track of what is being typed
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired, // array of options
	placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	searchPromptText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// label to prompt for search input
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits(Async, _Component);

	function Async(props, context) {
		classCallCheck(this, Async);

		var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

var CreatableSelect = function (_React$Component) {
	inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck(this, CreatableSelect);

		var _this = possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator,
			    showNewOptionAtTop = _props2.showNewOptionAtTop;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					if (showNewOptionAtTop) {
						filteredOptions.unshift(this._createPlaceholderOption);
					} else {
						filteredOptions.push(this._createPlaceholderOption);
					}
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption(event)) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties(_props4, ['ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$2 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var isOptionUnique = function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	if (!options || !options.length) {
		return true;
	}

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

var isValidNewOption = function isValidNewOption(_ref4) {
	var label = _ref4.label;
	return !!label;
};

var newOptionCreator = function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';

	return option;
};

var promptTextCreator = function promptTextCreator(label) {
	return 'Create option "' + label + '"';
};

var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption,
	showNewOptionAtTop: true
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.filterOptions
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input change handler: function (inputValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// new option click handler: function (option) {}
	onNewOptionClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.options
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	ref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Where to show prompt/placeholder option text.
	// true: new option prompt at top of list (default)
	// false: new option prompt at bottom of list
	showNewOptionAtTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck(this, AsyncCreatableSelect);
		return possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$1 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

AsyncCreatableSelect.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;


/* harmony default export */ __webpack_exports__["default"] = (Select$1);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzfmRlcG9zaXQtd2l0aGRyYXcuYWIwZTliODk2ODc4YzU3ZGQ1MDUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtYXV0b3NpemUvbGliL0F1dG9zaXplSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2l6ZXJTdHlsZSA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDogMCxcblx0bGVmdDogMCxcblx0dmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cdGhlaWdodDogMCxcblx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxuXHR3aGl0ZVNwYWNlOiAncHJlJ1xufTtcblxudmFyIElOUFVUX1BST1BTX0JMQUNLTElTVCA9IFsnZXh0cmFXaWR0aCcsICdpbmplY3RTdHlsZXMnLCAnaW5wdXRDbGFzc05hbWUnLCAnaW5wdXRSZWYnLCAnaW5wdXRTdHlsZScsICdtaW5XaWR0aCcsICdvbkF1dG9zaXplJywgJ3BsYWNlaG9sZGVySXNNaW5XaWR0aCddO1xuXG52YXIgY2xlYW5JbnB1dFByb3BzID0gZnVuY3Rpb24gY2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpIHtcblx0SU5QVVRfUFJPUFNfQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0cmV0dXJuIGRlbGV0ZSBpbnB1dFByb3BzW2ZpZWxkXTtcblx0fSk7XG5cdHJldHVybiBpbnB1dFByb3BzO1xufTtcblxudmFyIGNvcHlTdHlsZXMgPSBmdW5jdGlvbiBjb3B5U3R5bGVzKHN0eWxlcywgbm9kZSkge1xuXHRub2RlLnN0eWxlLmZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuXHRub2RlLnN0eWxlLmZvbnRGYW1pbHkgPSBzdHlsZXMuZm9udEZhbWlseTtcblx0bm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gc3R5bGVzLmZvbnRXZWlnaHQ7XG5cdG5vZGUuc3R5bGUuZm9udFN0eWxlID0gc3R5bGVzLmZvbnRTdHlsZTtcblx0bm9kZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gc3R5bGVzLmxldHRlclNwYWNpbmc7XG5cdG5vZGUuc3R5bGUudGV4dFRyYW5zZm9ybSA9IHN0eWxlcy50ZXh0VHJhbnNmb3JtO1xufTtcblxudmFyIGlzSUUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yID8gL01TSUUgfFRyaWRlbnRcXC98RWRnZVxcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgOiBmYWxzZTtcblxudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuXHQvLyB3ZSBvbmx5IG5lZWQgYW4gYXV0by1nZW5lcmF0ZWQgSUQgZm9yIHN0eWxlc2hlZXQgaW5qZWN0aW9uLCB3aGljaCBpcyBvbmx5XG5cdC8vIHVzZWQgZm9yIElFLiBzbyBpZiB0aGUgYnJvd3NlciBpcyBub3QgSUUsIHRoaXMgc2hvdWxkIHJldHVybiB1bmRlZmluZWQuXG5cdHJldHVybiBpc0lFID8gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKSA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBBdXRvc2l6ZUlucHV0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEF1dG9zaXplSW5wdXQsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEF1dG9zaXplSW5wdXQocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0b3NpemVJbnB1dCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXV0b3NpemVJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9zaXplSW5wdXQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5pbnB1dFJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuaW5wdXQgPSBlbDtcblx0XHRcdGlmICh0eXBlb2YgX3RoaXMucHJvcHMuaW5wdXRSZWYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0X3RoaXMucHJvcHMuaW5wdXRSZWYoZWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5zaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0V2lkdGg6IHByb3BzLm1pbldpZHRoLFxuXHRcdFx0aW5wdXRJZDogcHJvcHMuaWQgfHwgZ2VuZXJhdGVJZCgpXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXV0b3NpemVJbnB1dCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciBpZCA9IG5leHRQcm9wcy5pZDtcblxuXHRcdFx0aWYgKGlkICE9PSB0aGlzLnByb3BzLmlkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dElkOiBpZCB8fCBnZW5lcmF0ZUlkKCkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHRpZiAocHJldlN0YXRlLmlucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25BdXRvc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25BdXRvc2l6ZSh0aGlzLnN0YXRlLmlucHV0V2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29weUlucHV0U3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29weUlucHV0U3R5bGVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBpbnB1dFN0eWxlcyA9IHRoaXMuaW5wdXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dCk7XG5cdFx0XHRpZiAoIWlucHV0U3R5bGVzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMuc2l6ZXIpO1xuXHRcdFx0aWYgKHRoaXMucGxhY2VIb2xkZXJTaXplcikge1xuXHRcdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZUlucHV0V2lkdGgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXRoaXMuc2l6ZXIgfHwgdHlwZW9mIHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdm9pZCAwO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgJiYgKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGgpKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnNpemVyLnNjcm9sbFdpZHRoLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnNpemVyLnNjcm9sbFdpZHRoICsgMjtcblx0XHRcdH1cblx0XHRcdC8vIGFkZCBleHRyYVdpZHRoIHRvIHRoZSBkZXRlY3RlZCB3aWR0aC4gZm9yIG51bWJlciB0eXBlcywgdGhpcyBkZWZhdWx0cyB0byAxNiB0byBhbGxvdyBmb3IgdGhlIHN0ZXBwZXIgVUlcblx0XHRcdHZhciBleHRyYVdpZHRoID0gdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyAmJiB0aGlzLnByb3BzLmV4dHJhV2lkdGggPT09IHVuZGVmaW5lZCA/IDE2IDogcGFyc2VJbnQodGhpcy5wcm9wcy5leHRyYVdpZHRoKSB8fCAwO1xuXHRcdFx0bmV3SW5wdXRXaWR0aCArPSBleHRyYVdpZHRoO1xuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldElucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpbmplY3RzIHN0eWxlcyB0byBoaWRlIElFJ3MgY2xlYXIgaW5kaWNhdG9yLCB3aGljaCBtZXNzZXNcblx0XHRcdC8vIHdpdGggaW5wdXQgc2l6ZSBkZXRlY3Rpb24uIHRoZSBzdHlsZXNoZWV0IGlzIG9ubHkgaW5qZWN0ZWQgd2hlbiB0aGVcblx0XHRcdC8vIGJyb3dzZXIgaXMgSUUsIGFuZCBjYW4gYWxzbyBiZSBkaXNhYmxlZCBieSB0aGUgYGluamVjdFN0eWxlc2AgcHJvcC5cblx0XHRcdHZhciBpbmplY3RTdHlsZXMgPSB0aGlzLnByb3BzLmluamVjdFN0eWxlcztcblxuXHRcdFx0cmV0dXJuIGlzSUUgJiYgaW5qZWN0U3R5bGVzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuXHRcdFx0XHRcdF9faHRtbDogJ2lucHV0IycgKyB0aGlzLnN0YXRlLmlucHV0SWQgKyAnOjotbXMtY2xlYXIge2Rpc3BsYXk6IG5vbmU7fSdcblx0XHRcdFx0fSB9KSA6IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHNpemVyVmFsdWUgPSBbdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudmFsdWUsICcnXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSAhPT0gbnVsbCAmJiBwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXNWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0XHRpZiAoIXdyYXBwZXJTdHlsZS5kaXNwbGF5KSB3cmFwcGVyU3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG5cdFx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHtcblx0XHRcdFx0Ym94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS5pbnB1dFdpZHRoICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5pbnB1dFN0eWxlKTtcblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG5cdFx0XHRjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcyk7XG5cdFx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0XHRpbnB1dFByb3BzLmlkID0gdGhpcy5zdGF0ZS5pbnB1dElkO1xuXHRcdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclN0eWxlcygpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6IHRoaXMuaW5wdXRSZWYgfSkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5zaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEF1dG9zaXplSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdXRvc2l6ZUlucHV0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBkZWZhdWx0IGZpZWxkIHZhbHVlXG5cdGV4dHJhV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBhZGRpdGlvbmFsIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGlkIHRvIHVzZSBmb3IgdGhlIGlucHV0LCBjYW4gYmUgc2V0IGZvciBjb25zaXN0ZW50IHNuYXBzaG90c1xuXHRpbmplY3RTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gaW5qZWN0IHRoZSBjdXN0b20gc3R5bGVzaGVldCB0byBoaWRlIGNsZWFyIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdGlucHV0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyByZWYgY2FsbGJhY2sgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRtaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdG9uQXV0b3NpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25BdXRvc2l6ZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdXaWR0aCkge31cblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHt9XG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRwbGFjZWhvbGRlcklzTWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZG9uJ3QgY29sbGFwc2Ugc2l6ZSB0byBsZXNzIHRoYW4gdGhlIHBsYWNlaG9sZGVyXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55IC8vIGZpZWxkIHZhbHVlXG59O1xuQXV0b3NpemVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdG1pbldpZHRoOiAxLFxuXHRpbmplY3RTdHlsZXM6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9zaXplSW5wdXQ7IiwiaW1wb3J0IEF1dG9zaXplSW5wdXQgZnJvbSAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxudmFyIGFycm93UmVuZGVyZXIgPSBmdW5jdGlvbiBhcnJvd1JlbmRlcmVyKF9yZWYpIHtcblx0dmFyIG9uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bjtcblxuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcblx0XHRjbGFzc05hbWU6ICdTZWxlY3QtYXJyb3cnLFxuXHRcdG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuXHR9KTtcbn07XG5cbmFycm93UmVuZGVyZXIucHJvcFR5cGVzID0ge1xuXHRvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBjbGVhclJlbmRlcmVyID0gZnVuY3Rpb24gY2xlYXJSZW5kZXJlcigpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG5cdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNsZWFyJyxcblx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6ICcmdGltZXM7JyB9XG5cdH0pO1xufTtcblxudmFyIG1hcCA9IFt7ICdiYXNlJzogJ0EnLCAnbGV0dGVycyc6IC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyB9LCB7ICdiYXNlJzogJ0FBJywgJ2xldHRlcnMnOiAvW1xcdUE3MzJdL2cgfSwgeyAnYmFzZSc6ICdBRScsICdsZXR0ZXJzJzogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2cgfSwgeyAnYmFzZSc6ICdBTycsICdsZXR0ZXJzJzogL1tcXHVBNzM0XS9nIH0sIHsgJ2Jhc2UnOiAnQVUnLCAnbGV0dGVycyc6IC9bXFx1QTczNl0vZyB9LCB7ICdiYXNlJzogJ0FWJywgJ2xldHRlcnMnOiAvW1xcdUE3MzhcXHVBNzNBXS9nIH0sIHsgJ2Jhc2UnOiAnQVknLCAnbGV0dGVycyc6IC9bXFx1QTczQ10vZyB9LCB7ICdiYXNlJzogJ0InLCAnbGV0dGVycyc6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nIH0sIHsgJ2Jhc2UnOiAnQycsICdsZXR0ZXJzJzogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2cgfSwgeyAnYmFzZSc6ICdEJywgJ2xldHRlcnMnOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nIH0sIHsgJ2Jhc2UnOiAnRFonLCAnbGV0dGVycyc6IC9bXFx1MDFGMVxcdTAxQzRdL2cgfSwgeyAnYmFzZSc6ICdEeicsICdsZXR0ZXJzJzogL1tcXHUwMUYyXFx1MDFDNV0vZyB9LCB7ICdiYXNlJzogJ0UnLCAnbGV0dGVycyc6IC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nIH0sIHsgJ2Jhc2UnOiAnRicsICdsZXR0ZXJzJzogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2cgfSwgeyAnYmFzZSc6ICdHJywgJ2xldHRlcnMnOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyB9LCB7ICdiYXNlJzogJ0gnLCAnbGV0dGVycyc6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2cgfSwgeyAnYmFzZSc6ICdJJywgJ2xldHRlcnMnOiAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nIH0sIHsgJ2Jhc2UnOiAnSicsICdsZXR0ZXJzJzogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyB9LCB7ICdiYXNlJzogJ0snLCAnbGV0dGVycyc6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2cgfSwgeyAnYmFzZSc6ICdMJywgJ2xldHRlcnMnOiAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyB9LCB7ICdiYXNlJzogJ0xKJywgJ2xldHRlcnMnOiAvW1xcdTAxQzddL2cgfSwgeyAnYmFzZSc6ICdMaicsICdsZXR0ZXJzJzogL1tcXHUwMUM4XS9nIH0sIHsgJ2Jhc2UnOiAnTScsICdsZXR0ZXJzJzogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyB9LCB7ICdiYXNlJzogJ04nLCAnbGV0dGVycyc6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyB9LCB7ICdiYXNlJzogJ05KJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0FdL2cgfSwgeyAnYmFzZSc6ICdOaicsICdsZXR0ZXJzJzogL1tcXHUwMUNCXS9nIH0sIHsgJ2Jhc2UnOiAnTycsICdsZXR0ZXJzJzogL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nIH0sIHsgJ2Jhc2UnOiAnT0knLCAnbGV0dGVycyc6IC9bXFx1MDFBMl0vZyB9LCB7ICdiYXNlJzogJ09PJywgJ2xldHRlcnMnOiAvW1xcdUE3NEVdL2cgfSwgeyAnYmFzZSc6ICdPVScsICdsZXR0ZXJzJzogL1tcXHUwMjIyXS9nIH0sIHsgJ2Jhc2UnOiAnUCcsICdsZXR0ZXJzJzogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nIH0sIHsgJ2Jhc2UnOiAnUScsICdsZXR0ZXJzJzogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2cgfSwgeyAnYmFzZSc6ICdSJywgJ2xldHRlcnMnOiAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nIH0sIHsgJ2Jhc2UnOiAnUycsICdsZXR0ZXJzJzogL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyB9LCB7ICdiYXNlJzogJ1QnLCAnbGV0dGVycyc6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nIH0sIHsgJ2Jhc2UnOiAnVFonLCAnbGV0dGVycyc6IC9bXFx1QTcyOF0vZyB9LCB7ICdiYXNlJzogJ1UnLCAnbGV0dGVycyc6IC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyB9LCB7ICdiYXNlJzogJ1YnLCAnbGV0dGVycyc6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2cgfSwgeyAnYmFzZSc6ICdWWScsICdsZXR0ZXJzJzogL1tcXHVBNzYwXS9nIH0sIHsgJ2Jhc2UnOiAnVycsICdsZXR0ZXJzJzogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nIH0sIHsgJ2Jhc2UnOiAnWCcsICdsZXR0ZXJzJzogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyB9LCB7ICdiYXNlJzogJ1knLCAnbGV0dGVycyc6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nIH0sIHsgJ2Jhc2UnOiAnWicsICdsZXR0ZXJzJzogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyB9LCB7ICdiYXNlJzogJ2EnLCAnbGV0dGVycyc6IC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2cgfSwgeyAnYmFzZSc6ICdhYScsICdsZXR0ZXJzJzogL1tcXHVBNzMzXS9nIH0sIHsgJ2Jhc2UnOiAnYWUnLCAnbGV0dGVycyc6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nIH0sIHsgJ2Jhc2UnOiAnYW8nLCAnbGV0dGVycyc6IC9bXFx1QTczNV0vZyB9LCB7ICdiYXNlJzogJ2F1JywgJ2xldHRlcnMnOiAvW1xcdUE3MzddL2cgfSwgeyAnYmFzZSc6ICdhdicsICdsZXR0ZXJzJzogL1tcXHVBNzM5XFx1QTczQl0vZyB9LCB7ICdiYXNlJzogJ2F5JywgJ2xldHRlcnMnOiAvW1xcdUE3M0RdL2cgfSwgeyAnYmFzZSc6ICdiJywgJ2xldHRlcnMnOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyB9LCB7ICdiYXNlJzogJ2MnLCAnbGV0dGVycyc6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyB9LCB7ICdiYXNlJzogJ2QnLCAnbGV0dGVycyc6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2cgfSwgeyAnYmFzZSc6ICdkeicsICdsZXR0ZXJzJzogL1tcXHUwMUYzXFx1MDFDNl0vZyB9LCB7ICdiYXNlJzogJ2UnLCAnbGV0dGVycyc6IC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyB9LCB7ICdiYXNlJzogJ2YnLCAnbGV0dGVycyc6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nIH0sIHsgJ2Jhc2UnOiAnZycsICdsZXR0ZXJzJzogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2cgfSwgeyAnYmFzZSc6ICdoJywgJ2xldHRlcnMnOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyB9LCB7ICdiYXNlJzogJ2h2JywgJ2xldHRlcnMnOiAvW1xcdTAxOTVdL2cgfSwgeyAnYmFzZSc6ICdpJywgJ2xldHRlcnMnOiAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nIH0sIHsgJ2Jhc2UnOiAnaicsICdsZXR0ZXJzJzogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2cgfSwgeyAnYmFzZSc6ICdrJywgJ2xldHRlcnMnOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nIH0sIHsgJ2Jhc2UnOiAnbCcsICdsZXR0ZXJzJzogL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nIH0sIHsgJ2Jhc2UnOiAnbGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOV0vZyB9LCB7ICdiYXNlJzogJ20nLCAnbGV0dGVycyc6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2cgfSwgeyAnYmFzZSc6ICduJywgJ2xldHRlcnMnOiAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nIH0sIHsgJ2Jhc2UnOiAnbmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQ10vZyB9LCB7ICdiYXNlJzogJ28nLCAnbGV0dGVycyc6IC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyB9LCB7ICdiYXNlJzogJ29pJywgJ2xldHRlcnMnOiAvW1xcdTAxQTNdL2cgfSwgeyAnYmFzZSc6ICdvdScsICdsZXR0ZXJzJzogL1tcXHUwMjIzXS9nIH0sIHsgJ2Jhc2UnOiAnb28nLCAnbGV0dGVycyc6IC9bXFx1QTc0Rl0vZyB9LCB7ICdiYXNlJzogJ3AnLCAnbGV0dGVycyc6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyB9LCB7ICdiYXNlJzogJ3EnLCAnbGV0dGVycyc6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nIH0sIHsgJ2Jhc2UnOiAncicsICdsZXR0ZXJzJzogL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyB9LCB7ICdiYXNlJzogJ3MnLCAnbGV0dGVycyc6IC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nIH0sIHsgJ2Jhc2UnOiAndCcsICdsZXR0ZXJzJzogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nIH0sIHsgJ2Jhc2UnOiAndHonLCAnbGV0dGVycyc6IC9bXFx1QTcyOV0vZyB9LCB7ICdiYXNlJzogJ3UnLCAnbGV0dGVycyc6IC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyB9LCB7ICdiYXNlJzogJ3YnLCAnbGV0dGVycyc6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2cgfSwgeyAnYmFzZSc6ICd2eScsICdsZXR0ZXJzJzogL1tcXHVBNzYxXS9nIH0sIHsgJ2Jhc2UnOiAndycsICdsZXR0ZXJzJzogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyB9LCB7ICdiYXNlJzogJ3gnLCAnbGV0dGVycyc6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2cgfSwgeyAnYmFzZSc6ICd5JywgJ2xldHRlcnMnOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2cgfSwgeyAnYmFzZSc6ICd6JywgJ2xldHRlcnMnOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nIH1dO1xuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1hcC5sZW5ndGg7IGkrKykge1xuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKG1hcFtpXS5sZXR0ZXJzLCBtYXBbaV0uYmFzZSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn07XG5cbnZhciB0cmltID0gZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59O1xuXG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnO1xufTtcblxudmFyIGZpbHRlck9wdGlvbnMgPSBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zKG9wdGlvbnMsIGZpbHRlclZhbHVlLCBleGNsdWRlT3B0aW9ucywgcHJvcHMpIHtcblx0aWYgKHByb3BzLmlnbm9yZUFjY2VudHMpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IHN0cmlwRGlhY3JpdGljcyhmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRpZiAocHJvcHMuaWdub3JlQ2FzZSkge1xuXHRcdGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGlmIChwcm9wcy50cmltRmlsdGVyKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSB0cmltKGZpbHRlclZhbHVlKTtcblx0fVxuXG5cdGlmIChleGNsdWRlT3B0aW9ucykgZXhjbHVkZU9wdGlvbnMgPSBleGNsdWRlT3B0aW9ucy5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRyZXR1cm4gaVtwcm9wcy52YWx1ZUtleV07XG5cdH0pO1xuXG5cdHJldHVybiBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG5cdFx0aWYgKGV4Y2x1ZGVPcHRpb25zICYmIGV4Y2x1ZGVPcHRpb25zLmluZGV4T2Yob3B0aW9uW3Byb3BzLnZhbHVlS2V5XSkgPiAtMSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmIChwcm9wcy5maWx0ZXJPcHRpb24pIHJldHVybiBwcm9wcy5maWx0ZXJPcHRpb24uY2FsbCh1bmRlZmluZWQsIG9wdGlvbiwgZmlsdGVyVmFsdWUpO1xuXHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiB0cnVlO1xuXG5cdFx0dmFyIHZhbHVlID0gb3B0aW9uW3Byb3BzLnZhbHVlS2V5XTtcblx0XHR2YXIgbGFiZWwgPSBvcHRpb25bcHJvcHMubGFiZWxLZXldO1xuXHRcdHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQodmFsdWUpO1xuXHRcdHZhciBoYXNMYWJlbCA9IGlzVmFsaWQobGFiZWwpO1xuXG5cdFx0aWYgKCFoYXNWYWx1ZSAmJiAhaGFzTGFiZWwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgdmFsdWVUZXN0ID0gaGFzVmFsdWUgPyBTdHJpbmcodmFsdWUpIDogbnVsbDtcblx0XHR2YXIgbGFiZWxUZXN0ID0gaGFzTGFiZWwgPyBTdHJpbmcobGFiZWwpIDogbnVsbDtcblxuXHRcdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0XHRpZiAodmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gc3RyaXBEaWFjcml0aWNzKHZhbHVlVGVzdCk7XG5cdFx0XHRpZiAobGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gc3RyaXBEaWFjcml0aWNzKGxhYmVsVGVzdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRcdGlmICh2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnKSB2YWx1ZVRlc3QgPSB2YWx1ZVRlc3QudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnKSBsYWJlbFRlc3QgPSBsYWJlbFRlc3QudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvcHMubWF0Y2hQb3MgPT09ICdzdGFydCcgPyB2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnICYmIHZhbHVlVGVzdC5zdWJzdHIoMCwgZmlsdGVyVmFsdWUubGVuZ3RoKSA9PT0gZmlsdGVyVmFsdWUgfHwgbGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIDogdmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMCB8fCBsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnICYmIGxhYmVsVGVzdC5pbmRleE9mKGZpbHRlclZhbHVlKSA+PSAwO1xuXHR9KTtcbn07XG5cbnZhciBtZW51UmVuZGVyZXIgPSBmdW5jdGlvbiBtZW51UmVuZGVyZXIoX3JlZikge1xuXHR2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYuZm9jdXNlZE9wdGlvbixcblx0ICAgIGZvY3VzT3B0aW9uID0gX3JlZi5mb2N1c09wdGlvbixcblx0ICAgIGlucHV0VmFsdWUgPSBfcmVmLmlucHV0VmFsdWUsXG5cdCAgICBpbnN0YW5jZVByZWZpeCA9IF9yZWYuaW5zdGFuY2VQcmVmaXgsXG5cdCAgICBvbkZvY3VzID0gX3JlZi5vbkZvY3VzLFxuXHQgICAgb25PcHRpb25SZWYgPSBfcmVmLm9uT3B0aW9uUmVmLFxuXHQgICAgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuXHQgICAgb3B0aW9uQ2xhc3NOYW1lID0gX3JlZi5vcHRpb25DbGFzc05hbWUsXG5cdCAgICBvcHRpb25Db21wb25lbnQgPSBfcmVmLm9wdGlvbkNvbXBvbmVudCxcblx0ICAgIG9wdGlvblJlbmRlcmVyID0gX3JlZi5vcHRpb25SZW5kZXJlcixcblx0ICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG5cdCAgICByZW1vdmVWYWx1ZSA9IF9yZWYucmVtb3ZlVmFsdWUsXG5cdCAgICBzZWxlY3RWYWx1ZSA9IF9yZWYuc2VsZWN0VmFsdWUsXG5cdCAgICB2YWx1ZUFycmF5ID0gX3JlZi52YWx1ZUFycmF5LFxuXHQgICAgdmFsdWVLZXkgPSBfcmVmLnZhbHVlS2V5O1xuXG5cdHZhciBPcHRpb24gPSBvcHRpb25Db21wb25lbnQ7XG5cblx0cmV0dXJuIG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIGkpIHtcblx0XHR2YXIgaXNTZWxlY3RlZCA9IHZhbHVlQXJyYXkgJiYgdmFsdWVBcnJheS5zb21lKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4geFt2YWx1ZUtleV0gPT09IG9wdGlvblt2YWx1ZUtleV07XG5cdFx0fSk7XG5cdFx0dmFyIGlzRm9jdXNlZCA9IG9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbjtcblx0XHR2YXIgb3B0aW9uQ2xhc3MgPSBjbGFzc05hbWVzKG9wdGlvbkNsYXNzTmFtZSwge1xuXHRcdFx0J1NlbGVjdC1vcHRpb24nOiB0cnVlLFxuXHRcdFx0J2lzLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcblx0XHRcdCdpcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuXHRcdFx0J2lzLWRpc2FibGVkJzogb3B0aW9uLmRpc2FibGVkXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdE9wdGlvbixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBvcHRpb25DbGFzcyxcblx0XHRcdFx0Zm9jdXNPcHRpb246IGZvY3VzT3B0aW9uLFxuXHRcdFx0XHRpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuXHRcdFx0XHRpbnN0YW5jZVByZWZpeDogaW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdGlzRGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcblx0XHRcdFx0aXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG5cdFx0XHRcdGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG5cdFx0XHRcdGtleTogJ29wdGlvbi0nICsgaSArICctJyArIG9wdGlvblt2YWx1ZUtleV0sXG5cdFx0XHRcdG9uRm9jdXM6IG9uRm9jdXMsXG5cdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdCxcblx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdG9wdGlvbkluZGV4OiBpLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdG9uT3B0aW9uUmVmKF9yZWYyLCBpc0ZvY3VzZWQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVWYWx1ZTogcmVtb3ZlVmFsdWUsXG5cdFx0XHRcdHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZVxuXHRcdFx0fSxcblx0XHRcdG9wdGlvblJlbmRlcmVyKG9wdGlvbiwgaSwgaW5wdXRWYWx1ZSlcblx0XHQpO1xuXHR9KTtcbn07XG5cbm1lbnVSZW5kZXJlci5wcm9wVHlwZXMgPSB7XG5cdGZvY3VzT3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcblx0Zm9jdXNlZE9wdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0aW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0aW5zdGFuY2VQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXHRvbk9wdGlvblJlZjogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblx0b3B0aW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRvcHRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvcHRpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblx0cmVtb3ZlVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXHRzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdHZhbHVlQXJyYXk6IFByb3BUeXBlcy5hcnJheSxcblx0dmFsdWVLZXk6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbnZhciBibG9ja0V2ZW50ID0gKGZ1bmN0aW9uIChldmVudCkge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0aWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnQScgfHwgISgnaHJlZicgaW4gZXZlbnQudGFyZ2V0KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoZXZlbnQudGFyZ2V0LnRhcmdldCkge1xuXHRcdHdpbmRvdy5vcGVuKGV2ZW50LnRhcmdldC5ocmVmLCBldmVudC50YXJnZXQudGFyZ2V0KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xuXHR9XG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxudmFyIGFzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBhcmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgYXdhaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBPcHRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhPcHRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdGlvbik7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IF90aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlTW91c2VNb3ZlID0gX3RoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoRW5kID0gX3RoaXMuaGFuZGxlVG91Y2hFbmQuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hNb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKE9wdGlvbiwgW3tcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZUVudGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcihldmVudCkge1xuXHRcdFx0dGhpcy5vbkZvY3VzKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZU1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcblx0XHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydCgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uRm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Gb2N1cyh0aGlzLnByb3BzLm9wdGlvbiwgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIG9wdGlvbiA9IF9wcm9wcy5vcHRpb24sXG5cdFx0XHQgICAgaW5zdGFuY2VQcmVmaXggPSBfcHJvcHMuaW5zdGFuY2VQcmVmaXgsXG5cdFx0XHQgICAgb3B0aW9uSW5kZXggPSBfcHJvcHMub3B0aW9uSW5kZXg7XG5cblx0XHRcdHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBvcHRpb24uY2xhc3NOYW1lKTtcblxuXHRcdFx0cmV0dXJuIG9wdGlvbi5kaXNhYmxlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiBibG9ja0V2ZW50LFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGJsb2NrRXZlbnQgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdHN0eWxlOiBvcHRpb24uc3R5bGUsXG5cdFx0XHRcdFx0cm9sZTogJ29wdGlvbicsXG5cdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiBvcHRpb24ubGFiZWwsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuXHRcdFx0XHRcdG9uTW91c2VNb3ZlOiB0aGlzLmhhbmRsZU1vdXNlTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcblx0XHRcdFx0XHRpZDogaW5zdGFuY2VQcmVmaXggKyAnLW9wdGlvbi0nICsgb3B0aW9uSW5kZXgsXG5cdFx0XHRcdFx0dGl0bGU6IG9wdGlvbi50aXRsZSB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gT3B0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5PcHRpb24ucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gY2xhc3NOYW1lIChiYXNlZCBvbiBtb3VzZSBwb3NpdGlvbilcblx0aW5zdGFuY2VQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8gdW5pcXVlIHByZWZpeCBmb3IgdGhlIGlkcyAodXNlZCBmb3IgYXJpYSlcblx0aXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZGlzYWJsZWRcblx0aXNGb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBmb2N1c2VkXG5cdGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXG5cdG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlRW50ZXIgb24gb3B0aW9uIGVsZW1lbnRcblx0b25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9uVW5mb2N1czogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgbW91c2VMZWF2ZSBvbiBvcHRpb24gZWxlbWVudFxuXHRvcHRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gb2JqZWN0IHRoYXQgaXMgYmFzZSBmb3IgdGhhdCBvcHRpb25cblx0b3B0aW9uSW5kZXg6IFByb3BUeXBlcy5udW1iZXIgLy8gaW5kZXggb2YgdGhlIG9wdGlvbiwgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgaWRzIGZvciBhcmlhXG59O1xuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhWYWx1ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gVmFsdWUocHJvcHMpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChWYWx1ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFZhbHVlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaGFuZGxlTW91c2VEb3duID0gX3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uUmVtb3ZlID0gX3RoaXMub25SZW1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoVmFsdWUsIFt7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLnZhbHVlLCBldmVudCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlLmhyZWYpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25SZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvblJlbW92ZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9wcy5vblJlbW92ZSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZFJlbW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kUmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBGaXJlIHRoZSBtb3VzZSBldmVudHNcblx0XHRcdHRoaXMub25SZW1vdmUoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydCgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclJlbW92ZUljb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZW1vdmVJY29uKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMub25SZW1vdmUpIHJldHVybjtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LXZhbHVlLWljb24nLFxuXHRcdFx0XHRcdCdhcmlhLWhpZGRlbic6ICd0cnVlJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5vblJlbW92ZSxcblx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSB9LFxuXHRcdFx0XHQnXFx4RDcnXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckxhYmVsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGFiZWwoKSB7XG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gJ1NlbGVjdC12YWx1ZS1sYWJlbCc7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkNsaWNrIHx8IHRoaXMucHJvcHMudmFsdWUuaHJlZiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgaHJlZjogdGhpcy5wcm9wcy52YWx1ZS5ocmVmLCB0YXJnZXQ6IHRoaXMucHJvcHMudmFsdWUudGFyZ2V0LCBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlTW91c2VEb3duIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJvbGU6ICdvcHRpb24nLCAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJywgaWQ6IHRoaXMucHJvcHMuaWQgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdTZWxlY3QtdmFsdWUnLCB0aGlzLnByb3BzLnZhbHVlLmRpc2FibGVkID8gJ1NlbGVjdC12YWx1ZS1kaXNhYmxlZCcgOiAnJywgdGhpcy5wcm9wcy52YWx1ZS5jbGFzc05hbWUpLFxuXHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLnZhbHVlLnN0eWxlLFxuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnByb3BzLnZhbHVlLnRpdGxlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoaXMucmVuZGVyUmVtb3ZlSWNvbigpLFxuXHRcdFx0XHR0aGlzLnJlbmRlckxhYmVsKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBWYWx1ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVmFsdWUucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGlzYWJsZWQgcHJvcCBwYXNzZWQgdG8gUmVhY3RTZWxlY3Rcblx0aWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIFVuaXF1ZSBpZCBmb3IgdGhlIHZhbHVlIC0gdXNlZCBmb3IgYXJpYVxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiB2YWx1ZSBsYWJlbFxuXHRvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgcmVtb3ZhbCBvZiB0aGUgdmFsdWVcblx0dmFsdWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCAvLyB0aGUgb3B0aW9uIG9iamVjdCBmb3IgdGhpcyB2YWx1ZVxufTtcblxuLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9yZWFjdC1zZWxlY3RcbiovXG52YXIgc3RyaW5naWZ5VmFsdWUgPSBmdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUgIT09IG51bGwgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpIHx8ICcnO1xufTtcblxudmFyIHN0cmluZ09yTm9kZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSk7XG52YXIgc3RyaW5nT3JOdW1iZXIgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSk7XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIHNob3VsZFNob3dWYWx1ZSA9IGZ1bmN0aW9uIHNob3VsZFNob3dWYWx1ZShzdGF0ZSwgcHJvcHMpIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRpZiAoIWlucHV0VmFsdWUpIHJldHVybiB0cnVlO1xuXG5cdGlmICghb25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdHJldHVybiAhKCFpc0ZvY3VzZWQgJiYgaXNQc2V1ZG9Gb2N1c2VkIHx8IGlzRm9jdXNlZCAmJiAhaXNQc2V1ZG9Gb2N1c2VkKTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzaG91bGRTaG93UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzaG91bGRTaG93UGxhY2Vob2xkZXIoc3RhdGUsIHByb3BzLCBpc09wZW4pIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRyZXR1cm4gIWlucHV0VmFsdWUgfHwgIW9uU2VsZWN0UmVzZXRzSW5wdXQgJiYgIWlzT3BlbiAmJiAhaXNQc2V1ZG9Gb2N1c2VkICYmICFpc0ZvY3VzZWQ7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gb3B0aW9ucyBhbmQgdmFsdWVLZXlcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdC0gdGhlIHNlbGVjdGVkIHZhbHVlKHMpXG4gKiBAcGFyYW0ge09iamVjdH1cdFx0IHByb3BzXHQtIHRoZSBTZWxlY3QgY29tcG9uZW50J3MgcHJvcHMgKG9yIG5leHRQcm9wcylcbiAqL1xudmFyIGV4cGFuZFZhbHVlID0gZnVuY3Rpb24gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKSB7XG5cdHZhciB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcblx0aWYgKHZhbHVlVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJyAmJiB2YWx1ZVR5cGUgIT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xuXHR2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG5cdCAgICB2YWx1ZUtleSA9IHByb3BzLnZhbHVlS2V5O1xuXG5cdGlmICghb3B0aW9ucykgcmV0dXJuO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoU3RyaW5nKG9wdGlvbnNbaV1bdmFsdWVLZXldKSA9PT0gU3RyaW5nKHZhbHVlKSkgcmV0dXJuIG9wdGlvbnNbaV07XG5cdH1cbn07XG5cbnZhciBoYW5kbGVSZXF1aXJlZCA9IGZ1bmN0aW9uIGhhbmRsZVJlcXVpcmVkKHZhbHVlLCBtdWx0aSkge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIG11bHRpID8gdmFsdWUubGVuZ3RoID09PSAwIDogT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbn07XG5cbnZhciBTZWxlY3QkMSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdFsnY2xlYXJWYWx1ZScsICdmb2N1c09wdGlvbicsICdnZXRPcHRpb25MYWJlbCcsICdoYW5kbGVJbnB1dEJsdXInLCAnaGFuZGxlSW5wdXRDaGFuZ2UnLCAnaGFuZGxlSW5wdXRGb2N1cycsICdoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlJywgJ2hhbmRsZUtleURvd24nLCAnaGFuZGxlTWVudVNjcm9sbCcsICdoYW5kbGVNb3VzZURvd24nLCAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsICdoYW5kbGVNb3VzZURvd25Pbk1lbnUnLCAnaGFuZGxlVG91Y2hFbmQnLCAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJywgJ2hhbmRsZVRvdWNoTW92ZScsICdoYW5kbGVUb3VjaE91dHNpZGUnLCAnaGFuZGxlVG91Y2hTdGFydCcsICdoYW5kbGVWYWx1ZUNsaWNrJywgJ29uT3B0aW9uUmVmJywgJ3JlbW92ZVZhbHVlJywgJ3NlbGVjdFZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcblx0XHRcdHJldHVybiBfdGhpc1tmbl0gPSBfdGhpc1tmbl0uYmluZChfdGhpcyk7XG5cdFx0fSk7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VmFsdWU6ICcnLFxuXHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFx0dGhpcy5faW5zdGFuY2VQcmVmaXggPSAncmVhY3Qtc2VsZWN0LScgKyAodGhpcy5wcm9wcy5pbnN0YW5jZUlkIHx8ICsraW5zdGFuY2VJZCkgKyAnLSc7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IGhhbmRsZVJlcXVpcmVkKHZhbHVlQXJyYXlbMF0sIHRoaXMucHJvcHMubXVsdGkpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMuYXV0b2ZvY3VzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdXYXJuaW5nOiBUaGUgYXV0b2ZvY3VzIHByb3AgaGFzIGNoYW5nZWQgdG8gYXV0b0ZvY3VzLCBzdXBwb3J0IHdpbGwgYmUgcmVtb3ZlZCBhZnRlciByZWFjdC1zZWxlY3RAMS4wJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMgfHwgdGhpcy5wcm9wcy5hdXRvZm9jdXMpIHtcblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkobmV4dFByb3BzLnZhbHVlLCBuZXh0UHJvcHMpO1xuXG5cdFx0XHRpZiAobmV4dFByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHJlcXVpcmVkOiBoYW5kbGVSZXF1aXJlZCh2YWx1ZUFycmF5WzBdLCBuZXh0UHJvcHMubXVsdGkpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdC8vIFVzZWQgdG8gYmUgcmVxdWlyZWQgYnV0IGl0J3Mgbm90IGFueSBtb3JlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogZmFsc2UgfSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0Ly8gZm9jdXMgdG8gdGhlIHNlbGVjdGVkIG9wdGlvblxuXHRcdFx0aWYgKHRoaXMubWVudSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbikge1xuXHRcdFx0XHR2YXIgZm9jdXNlZE9wdGlvbk5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzLmZvY3VzZWQpO1xuXHRcdFx0XHR2YXIgbWVudU5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzLm1lbnUpO1xuXG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSBtZW51Tm9kZS5zY3JvbGxUb3A7XG5cdFx0XHRcdHZhciBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyBtZW51Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHZhciBvcHRpb25Ub3AgPSBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRUb3A7XG5cdFx0XHRcdHZhciBvcHRpb25Cb3R0b20gPSBvcHRpb25Ub3AgKyBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+IG9wdGlvblRvcCB8fCBzY3JvbGxCb3R0b20gPCBvcHRpb25Cb3R0b20pIHtcblx0XHRcdFx0XHRtZW51Tm9kZS5zY3JvbGxUb3AgPSBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRUb3A7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBzdGlsbCBzZXQgaGFzU2Nyb2xsZWRUb09wdGlvbiB0byB0cnVlIGV2ZW4gaWYgd2UgZGlkbid0XG5cdFx0XHRcdC8vIGFjdHVhbGx5IG5lZWQgdG8gc2Nyb2xsLCBhcyB3ZSd2ZSBzdGlsbCBjb25maXJtZWQgdGhhdCB0aGVcblx0XHRcdFx0Ly8gb3B0aW9uIGlzIGluIHZpZXcuXG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlICYmIHRoaXMuZm9jdXNlZCAmJiB0aGlzLm1lbnUpIHtcblx0XHRcdFx0dGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcblx0XHRcdFx0dmFyIGZvY3VzZWRET00gPSBmaW5kRE9NTm9kZSh0aGlzLmZvY3VzZWQpO1xuXHRcdFx0XHR2YXIgbWVudURPTSA9IGZpbmRET01Ob2RlKHRoaXMubWVudSk7XG5cdFx0XHRcdHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHZhciBtZW51UmVjdCA9IG1lbnVET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGlmIChmb2N1c2VkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20pIHtcblx0XHRcdFx0XHRtZW51RE9NLnNjcm9sbFRvcCA9IGZvY3VzZWRET00ub2Zmc2V0VG9wICsgZm9jdXNlZERPTS5jbGllbnRIZWlnaHQgLSBtZW51RE9NLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgPCBtZW51UmVjdC50b3ApIHtcblx0XHRcdFx0XHRtZW51RE9NLnNjcm9sbFRvcCA9IGZvY3VzZWRET00ub2Zmc2V0VG9wO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5zY3JvbGxNZW51SW50b1ZpZXcgJiYgdGhpcy5tZW51Q29udGFpbmVyKSB7XG5cdFx0XHRcdHZhciBtZW51Q29udGFpbmVyUmVjdCA9IHRoaXMubWVudUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1lbnVDb250YWluZXJSZWN0LmJvdHRvbSArIHRoaXMucHJvcHMubWVudUJ1ZmZlcikge1xuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBtZW51Q29udGFpbmVyUmVjdC5ib3R0b20gKyB0aGlzLnByb3BzLm1lbnVCdWZmZXIgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlN0YXRlLmlzT3BlbiAhPT0gdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dGhpcy50b2dnbGVUb3VjaE91dHNpZGVFdmVudCh0aGlzLnN0YXRlLmlzT3Blbik7XG5cdFx0XHRcdHZhciBoYW5kbGVyID0gdGhpcy5zdGF0ZS5pc09wZW4gPyB0aGlzLnByb3BzLm9uT3BlbiA6IHRoaXMucHJvcHMub25DbG9zZTtcblx0XHRcdFx0aGFuZGxlciAmJiBoYW5kbGVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMudG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQoZmFsc2UpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3RvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQoZW5hYmxlZCkge1xuXHRcdFx0dmFyIGV2ZW50VG9nZ2xlck5hbWUgPSBlbmFibGVkID8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCcgOiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2RldGFjaEV2ZW50Jztcblx0XHRcdHZhciBwcmVmID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/ICcnIDogJ29uJztcblxuXHRcdFx0ZG9jdW1lbnRbZXZlbnRUb2dnbGVyTmFtZV0ocHJlZiArICd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdFx0ZG9jdW1lbnRbZXZlbnRUb2dnbGVyTmFtZV0ocHJlZiArICdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hPdXRzaWRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hPdXRzaWRlKGV2ZW50KSB7XG5cdFx0XHQvLyBoYW5kbGUgdG91Y2ggb3V0c2lkZSBvbiBpb3MgdG8gZGlzbWlzcyBtZW51XG5cdFx0XHRpZiAodGhpcy53cmFwcGVyICYmICF0aGlzLndyYXBwZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHJldHVybjtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdibHVySW5wdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHJldHVybjtcblx0XHRcdHRoaXMuaW5wdXQuYmx1cigpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydCgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdC8vIEZpcmUgdGhlIG1vdXNlIGV2ZW50c1xuXHRcdFx0dGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kQ2xlYXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kQ2xlYXJWYWx1ZShldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gQ2xlYXIgdGhlIHZhbHVlXG5cdFx0XHR0aGlzLmNsZWFyVmFsdWUoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBvciBpZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gdGhpcy5wcm9wcy5vcGVuT25DbGljaztcblx0XHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRpc09wZW46IHRydWUsXG5cdFx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogbnVsbFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcmV2ZW50IGRlZmF1bHQgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIGZvciB0aGUgbm9uLXNlYXJjaGFibGUgc2VsZWN0LCB0b2dnbGUgdGhlIG1lbnVcblx0XHRcdGlmICghdGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdC8vIFRoaXMgY29kZSBtZWFucyB0aGF0IGlmIGEgc2VsZWN0IGlzIHNlYXJjaGFibGUsIG9uQ2xpY2sgdGhlIG9wdGlvbnMgbWVudSB3aWxsIG5vdCBhcHBlYXIsIG9ubHkgb24gc3Vic2VxdWVudCBjbGljayB3aWxsIGl0IG9wZW4uXG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0XHQvLyBPbiBpT1MsIHdlIGNhbiBnZXQgaW50byBhIHN0YXRlIHdoZXJlIHdlIHRoaW5rIHRoZSBpbnB1dCBpcyBmb2N1c2VkIGJ1dCBpdCBpc24ndCByZWFsbHksXG5cdFx0XHRcdC8vIHNpbmNlIGlPUyBpZ25vcmVzIHByb2dyYW1tYXRpYyBjYWxscyB0byBpbnB1dC5mb2N1cygpIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgYSBjbGljayBldmVudC5cblx0XHRcdFx0Ly8gQ2FsbCBmb2N1cygpIGFnYWluIGhlcmUgdG8gYmUgc2FmZS5cblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXG5cdFx0XHRcdHZhciBpbnB1dCA9IHRoaXMuaW5wdXQ7XG5cdFx0XHRcdHZhciB0b09wZW4gPSB0cnVlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgaW5wdXQuZ2V0SW5wdXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHQvLyBHZXQgdGhlIGFjdHVhbCBET00gaW5wdXQgaWYgdGhlIHJlZiBpcyBhbiA8QXV0b3NpemVJbnB1dCAvPiBjb21wb25lbnRcblx0XHRcdFx0XHRpbnB1dCA9IGlucHV0LmdldElucHV0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjbGVhcnMgdGhlIHZhbHVlIHNvIHRoYXQgdGhlIGN1cnNvciB3aWxsIGJlIGF0IHRoZSBlbmQgb2YgaW5wdXQgd2hlbiB0aGUgY29tcG9uZW50IHJlLXJlbmRlcnNcblx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcblxuXHRcdFx0XHRpZiAodGhpcy5fZm9jdXNBZnRlckNsZWFyKSB7XG5cdFx0XHRcdFx0dG9PcGVuID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5fZm9jdXNBZnRlckNsZWFyID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiB0aGUgaW5wdXQgaXMgZm9jdXNlZCwgZW5zdXJlIHRoZSBtZW51IGlzIG9wZW5cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiB0b09wZW4sXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBudWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gb3RoZXJ3aXNlLCBmb2N1cyB0aGUgaW5wdXQgYW5kIG9wZW4gdGhlIG1lbnVcblx0XHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0aGlzLnByb3BzLm9wZW5PbkNsaWNrO1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkT3B0aW9uOiBudWxsIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bk9uQXJyb3cnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25PbkFycm93KGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHQvLyBwcmV2ZW50IGRlZmF1bHQgZXZlbnQgaGFuZGxlcnNcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vIGNsb3NlIHRoZSBtZW51XG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiB0aGUgbWVudSBpc24ndCBvcGVuLCBsZXQgdGhlIGV2ZW50IGJ1YmJsZSB0byB0aGUgbWFpbiBoYW5kbGVNb3VzZURvd25cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bk9uTWVudScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bk9uTWVudShldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBvciBpZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gdHJ1ZTtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjbG9zZU1lbnUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsb3NlUmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKSxcblx0XHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgIXRoaXMucHJvcHMubXVsdGlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgIXRoaXMucHJvcHMubXVsdGlcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVJbnB1dEZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW5wdXRGb2N1cyhldmVudCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuXHRcdFx0dmFyIHRvT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuIHx8IHRoaXMuX29wZW5BZnRlckZvY3VzIHx8IHRoaXMucHJvcHMub3Blbk9uRm9jdXM7XG5cdFx0XHR0b09wZW4gPSB0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPyBmYWxzZSA6IHRvT3BlbjsgLy9pZiBmb2N1cyBoYXBwZW5zIGFmdGVyIGNsZWFyIHZhbHVlcywgZG9uJ3Qgb3BlbiBkcm9wZG93biB5ZXQuXG5cblx0XHRcdGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlzRm9jdXNlZDogdHJ1ZSxcblx0XHRcdFx0aXNPcGVuOiAhIXRvT3BlblxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVJbnB1dEJsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dEJsdXIoZXZlbnQpIHtcblx0XHRcdC8vIFRoZSBjaGVjayBmb3IgbWVudS5jb250YWlucyhhY3RpdmVFbGVtZW50KSBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCBJRTExJ3Mgc2Nyb2xsYmFyIGZyb20gY2xvc2luZyB0aGUgbWVudSBpbiBjZXJ0YWluIGNvbnRleHRzLlxuXHRcdFx0aWYgKHRoaXMubWVudSAmJiAodGhpcy5tZW51ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8IHRoaXMubWVudS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpIHtcblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25CbHVycmVkU3RhdGUgPSB7XG5cdFx0XHRcdGlzRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2Vcblx0XHRcdH07XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkJsdXJSZXNldHNJbnB1dCkge1xuXHRcdFx0XHRvbkJsdXJyZWRTdGF0ZS5pbnB1dFZhbHVlID0gdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUob25CbHVycmVkU3RhdGUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Q2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcblx0XHRcdHZhciBuZXdJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSBldmVudC50YXJnZXQudmFsdWUpIHtcblx0XHRcdFx0bmV3SW5wdXRWYWx1ZSA9IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZShuZXdJbnB1dFZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0VmFsdWU6IG5ld0lucHV0VmFsdWUsXG5cdFx0XHRcdGlzT3BlbjogdHJ1ZSxcblx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2V0SW5wdXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldElucHV0VmFsdWUobmV3VmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSk7XG5cdFx0XHRcdGlmIChuZXh0U3RhdGUgIT0gbnVsbCAmJiAodHlwZW9mIG5leHRTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dFN0YXRlKSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0bmV3VmFsdWUgPSAnJyArIG5leHRTdGF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0VmFsdWU6IG5ld1ZhbHVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZShuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlKTtcblx0XHRcdFx0Ly8gTm90ZTogIT0gdXNlZCBkZWxpYmVyYXRlbHkgaGVyZSB0byBjYXRjaCB1bmRlZmluZWQgYW5kIG51bGxcblx0XHRcdFx0aWYgKG5leHRTdGF0ZSAhPSBudWxsICYmICh0eXBlb2YgbmV4dFN0YXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0U3RhdGUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdWYWx1ZSA9ICcnICsgbmV4dFN0YXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3VmFsdWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlS2V5RG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbklucHV0S2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duKGV2ZW50KTtcblx0XHRcdFx0aWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG5cdFx0XHRcdGNhc2UgODpcblx0XHRcdFx0XHQvLyBiYWNrc3BhY2Vcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnByb3BzLmJhY2tzcGFjZVJlbW92ZXMpIHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBvcFZhbHVlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDk6XG5cdFx0XHRcdFx0Ly8gdGFiXG5cdFx0XHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5IHx8ICF0aGlzLnN0YXRlLmlzT3BlbiB8fCAhdGhpcy5wcm9wcy50YWJTZWxlY3RzVmFsdWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0Rm9jdXNlZE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHRcdC8vIGVudGVyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0Rm9jdXNlZE9wdGlvbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dE9wdGlvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyNzpcblx0XHRcdFx0XHQvLyBlc2NhcGVcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jbGVhcmFibGUgJiYgdGhpcy5wcm9wcy5lc2NhcGVDbGVhcnNWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jbGVhclZhbHVlKGV2ZW50KTtcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHQvLyBzcGFjZVxuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNOZXh0T3B0aW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdFx0Ly8gdXBcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNQcmV2aW91c09wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRcdC8vIGRvd25cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNOZXh0T3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzM6XG5cdFx0XHRcdFx0Ly8gcGFnZSB1cFxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1BhZ2VVcE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRcdC8vIHBhZ2UgZG93blxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1BhZ2VEb3duT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzU6XG5cdFx0XHRcdFx0Ly8gZW5kIGtleVxuXHRcdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c0VuZE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM2OlxuXHRcdFx0XHRcdC8vIGhvbWUga2V5XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzU3RhcnRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0Njpcblx0XHRcdFx0XHQvLyBkZWxldGVcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnByb3BzLmRlbGV0ZVJlbW92ZXMpIHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBvcFZhbHVlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVZhbHVlQ2xpY2snLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVWYWx1ZUNsaWNrKG9wdGlvbiwgZXZlbnQpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5vblZhbHVlQ2xpY2spIHJldHVybjtcblx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUNsaWNrKG9wdGlvbiwgZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1lbnVTY3JvbGwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNZW51U2Nyb2xsKGV2ZW50KSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMub25NZW51U2Nyb2xsVG9Cb3R0b20pIHJldHVybjtcblx0XHRcdHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdGlmICh0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gdGFyZ2V0Lm9mZnNldEhlaWdodCAmJiB0YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0Lm9mZnNldEhlaWdodCAtIHRhcmdldC5zY3JvbGxUb3AgPD0gMCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uTWVudVNjcm9sbFRvQm90dG9tKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0T3B0aW9uTGFiZWwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcCkge1xuXHRcdFx0cmV0dXJuIG9wW3RoaXMucHJvcHMubGFiZWxLZXldO1xuXHRcdH1cblxuXHRcdC8qKlxuICAgKiBUdXJucyBhIHZhbHVlIGludG8gYW4gYXJyYXkgZnJvbSB0aGUgZ2l2ZW4gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ8QXJyYXl9IHZhbHVlXHRcdC0gdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgaW5wdXRcbiAgICogQHBhcmFtIHtPYmplY3R9XHRcdG5leHRQcm9wc1x0LSBvcHRpb25hbGx5IHNwZWNpZnkgdGhlIG5leHRQcm9wcyBzbyB0aGUgcmV0dXJuZWQgYXJyYXkgdXNlcyB0aGUgbGF0ZXN0IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnNcdHtBcnJheX1cdHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0IHJlcHJlc2VudGVkIGluIGFuIGFycmF5XG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6ICdnZXRWYWx1ZUFycmF5Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVBcnJheSh2YWx1ZSkge1xuXHRcdFx0dmFyIG5leHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG5cdFx0XHQvKiogc3VwcG9ydCBvcHRpb25hbGx5IHBhc3NpbmcgaW4gdGhlIGBuZXh0UHJvcHNgIHNvIGBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzYCB1cGRhdGVzIHdpbGwgZnVuY3Rpb24gYXMgZXhwZWN0ZWQgKi9cblx0XHRcdHZhciBwcm9wcyA9ICh0eXBlb2YgbmV4dFByb3BzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0UHJvcHMpKSA9PT0gJ29iamVjdCcgPyBuZXh0UHJvcHMgOiB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLm11bHRpKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdChwcm9wcy5kZWxpbWl0ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtdO1xuXHRcdFx0XHRcdHZhbHVlID0gW3ZhbHVlXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBleHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpO1xuXHRcdFx0XHR9KS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZXhwYW5kZWRWYWx1ZSA9IGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcyk7XG5cdFx0XHRyZXR1cm4gZXhwYW5kZWRWYWx1ZSA/IFtleHBhbmRlZFZhbHVlXSA6IFtdO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NldFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvQmx1cikge1xuXHRcdFx0XHR0aGlzLmJsdXJJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0dmFyIHJlcXVpcmVkID0gaGFuZGxlUmVxdWlyZWQodmFsdWUsIHRoaXMucHJvcHMubXVsdGkpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVxdWlyZWQ6IHJlcXVpcmVkIH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuc2ltcGxlVmFsdWUgJiYgdmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSB0aGlzLnByb3BzLm11bHRpID8gdmFsdWUubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGlbX3RoaXMyLnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdFx0fSkuam9pbih0aGlzLnByb3BzLmRlbGltaXRlcikgOiB2YWx1ZVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0VmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHQvLyBOT1RFOiB3ZSBhY3R1YWxseSBhZGQvc2V0IHRoZSB2YWx1ZSBpbiBhIGNhbGxiYWNrIHRvIG1ha2Ugc3VyZSB0aGVcblx0XHRcdC8vIGlucHV0IHZhbHVlIGlzIGVtcHR5IHRvIGF2b2lkIHN0eWxpbmcgaXNzdWVzIGluIENocm9tZVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuXHRcdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciB1cGRhdGVkVmFsdWUgPSB0aGlzLnByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQgPyAnJyA6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleDogbnVsbCxcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UodXBkYXRlZFZhbHVlKSxcblx0XHRcdFx0XHRpc09wZW46ICF0aGlzLnByb3BzLmNsb3NlT25TZWxlY3Rcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciB2YWx1ZUFycmF5ID0gX3RoaXMzLmdldFZhbHVlQXJyYXkoX3RoaXMzLnByb3BzLnZhbHVlKTtcblx0XHRcdFx0XHRpZiAodmFsdWVBcnJheS5zb21lKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaVtfdGhpczMucHJvcHMudmFsdWVLZXldID09PSB2YWx1ZVtfdGhpczMucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0XHRcdH0pKSB7XG5cdFx0XHRcdFx0XHRfdGhpczMucmVtb3ZlVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpczMuYWRkVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UodXBkYXRlZFZhbHVlKSxcblx0XHRcdFx0XHRpc09wZW46ICF0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0X3RoaXMzLnNldFZhbHVlKHZhbHVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYWRkVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBhZGRWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR2YXIgdmlzaWJsZU9wdGlvbnMgPSB0aGlzLl92aXNpYmxlT3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRyZXR1cm4gIXZhbC5kaXNhYmxlZDtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIGxhc3RWYWx1ZUluZGV4ID0gdmlzaWJsZU9wdGlvbnMuaW5kZXhPZih2YWx1ZSk7XG5cdFx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuY29uY2F0KHZhbHVlKSk7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoIC0gMSA9PT0gbGFzdFZhbHVlSW5kZXgpIHtcblx0XHRcdFx0Ly8gdGhlIGxhc3Qgb3B0aW9uIHdhcyBzZWxlY3RlZDsgZm9jdXMgdGhlIHNlY29uZC1sYXN0IG9uZVxuXHRcdFx0XHR0aGlzLmZvY3VzT3B0aW9uKHZpc2libGVPcHRpb25zW2xhc3RWYWx1ZUluZGV4IC0gMV0pO1xuXHRcdFx0fSBlbHNlIGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggPiBsYXN0VmFsdWVJbmRleCkge1xuXHRcdFx0XHQvLyBmb2N1cyB0aGUgb3B0aW9uIGJlbG93IHRoZSBzZWxlY3RlZCBvbmVcblx0XHRcdFx0dGhpcy5mb2N1c09wdGlvbih2aXNpYmxlT3B0aW9uc1tsYXN0VmFsdWVJbmRleCArIDFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwb3BWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHBvcFZhbHVlKCkge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHRpZiAoIXZhbHVlQXJyYXkubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRpZiAodmFsdWVBcnJheVt2YWx1ZUFycmF5Lmxlbmd0aCAtIDFdLmNsZWFyYWJsZVZhbHVlID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSh0aGlzLnByb3BzLm11bHRpID8gdmFsdWVBcnJheS5zbGljZSgwLCB2YWx1ZUFycmF5Lmxlbmd0aCAtIDEpIDogbnVsbCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVtb3ZlVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzNCA9IHRoaXM7XG5cblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSh2YWx1ZUFycmF5LmZpbHRlcihmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRyZXR1cm4gaVtfdGhpczQucHJvcHMudmFsdWVLZXldICE9PSB2YWx1ZVtfdGhpczQucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0fSkpO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NsZWFyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjbGVhclZhbHVlKGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIGlnbm9yZSBpdC5cblx0XHRcdGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMuZ2V0UmVzZXRWYWx1ZSgpKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpLFxuXHRcdFx0XHRpc09wZW46IGZhbHNlXG5cdFx0XHR9LCB0aGlzLmZvY3VzKTtcblxuXHRcdFx0dGhpcy5fZm9jdXNBZnRlckNsZWFyID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRSZXNldFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzZXRWYWx1ZSgpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLnJlc2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5yZXNldFZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNPcHRpb24ob3B0aW9uKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogb3B0aW9uXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c05leHRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c05leHRPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ25leHQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1ByZXZpb3VzT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQcmV2aW91c09wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncHJldmlvdXMnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1BhZ2VVcE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzUGFnZVVwT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwYWdlX3VwJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNQYWdlRG93bk9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzUGFnZURvd25PcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3BhZ2VfZG93bicpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzU3RhcnRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1N0YXJ0T3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdzdGFydCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzRW5kT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNFbmRPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ2VuZCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzQWRqYWNlbnRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c0FkamFjZW50T3B0aW9uKGRpcikge1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLl92aXNpYmxlT3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHsgb3B0aW9uOiBvcHRpb24sIGluZGV4OiBpbmRleCB9O1xuXHRcdFx0fSkuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRcdFx0cmV0dXJuICFvcHRpb24ub3B0aW9uLmRpc2FibGVkO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdHZhciBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiB0aGlzLl9mb2N1c2VkT3B0aW9uIHx8IChvcHRpb25zLmxlbmd0aCA/IG9wdGlvbnNbZGlyID09PSAnbmV4dCcgPyAwIDogb3B0aW9ucy5sZW5ndGggLSAxXS5vcHRpb24gOiBudWxsKSxcblx0XHRcdFx0XHRpc09wZW46IHRydWVcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdFx0XHRcdG5ld1N0YXRlLmlucHV0VmFsdWUgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0dmFyIGZvY3VzZWRJbmRleCA9IC0xO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9mb2N1c2VkT3B0aW9uID09PSBvcHRpb25zW2ldLm9wdGlvbikge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkaXIgPT09ICduZXh0JyAmJiBmb2N1c2VkSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdwcmV2aW91cycpIHtcblx0XHRcdFx0aWYgKGZvY3VzZWRJbmRleCA+IDApIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBmb2N1c2VkSW5kZXggLSAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdzdGFydCcpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAnZW5kJykge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3BhZ2VfdXAnKSB7XG5cdFx0XHRcdHZhciBwb3RlbnRpYWxJbmRleCA9IGZvY3VzZWRJbmRleCAtIHRoaXMucHJvcHMucGFnZVNpemU7XG5cdFx0XHRcdGlmIChwb3RlbnRpYWxJbmRleCA8IDApIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IHBvdGVudGlhbEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3BhZ2VfZG93bicpIHtcblx0XHRcdFx0dmFyIF9wb3RlbnRpYWxJbmRleCA9IGZvY3VzZWRJbmRleCArIHRoaXMucHJvcHMucGFnZVNpemU7XG5cdFx0XHRcdGlmIChfcG90ZW50aWFsSW5kZXggPiBvcHRpb25zLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gX3BvdGVudGlhbEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmb2N1c2VkSW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRmb2N1c2VkSW5kZXg6IG9wdGlvbnNbZm9jdXNlZEluZGV4XS5pbmRleCxcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogb3B0aW9uc1tmb2N1c2VkSW5kZXhdLm9wdGlvblxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0Rm9jdXNlZE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzZWRPcHRpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZm9jdXNlZE9wdGlvbjtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZWxlY3RGb2N1c2VkT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0Rm9jdXNlZE9wdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLl9mb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbGVjdFZhbHVlKHRoaXMuX2ZvY3VzZWRPcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckxvYWRpbmcnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkaW5nKCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmlzTG9hZGluZykgcmV0dXJuO1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtbG9hZGluZy16b25lJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ1NlbGVjdC1sb2FkaW5nJyB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlclZhbHVlKHZhbHVlQXJyYXksIGlzT3Blbikge1xuXHRcdFx0dmFyIF90aGlzNSA9IHRoaXM7XG5cblx0XHRcdHZhciByZW5kZXJMYWJlbCA9IHRoaXMucHJvcHMudmFsdWVSZW5kZXJlciB8fCB0aGlzLmdldE9wdGlvbkxhYmVsO1xuXHRcdFx0dmFyIFZhbHVlQ29tcG9uZW50ID0gdGhpcy5wcm9wcy52YWx1ZUNvbXBvbmVudDtcblx0XHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIHNob3dQbGFjZWhvbGRlciA9IHNob3VsZFNob3dQbGFjZWhvbGRlcih0aGlzLnN0YXRlLCB0aGlzLnByb3BzLCBpc09wZW4pO1xuXHRcdFx0XHRyZXR1cm4gc2hvd1BsYWNlaG9sZGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1wbGFjZWhvbGRlcicgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHRcdCkgOiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9uQ2xpY2sgPSB0aGlzLnByb3BzLm9uVmFsdWVDbGljayA/IHRoaXMuaGFuZGxlVmFsdWVDbGljayA6IG51bGw7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IF90aGlzNS5wcm9wcy5kaXNhYmxlZCB8fCB2YWx1ZS5jbGVhcmFibGVWYWx1ZSA9PT0gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGlkOiBfdGhpczUuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZS0nICsgaSxcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IF90aGlzNS5faW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdFx0XHRcdGtleTogJ3ZhbHVlLScgKyBpICsgJy0nICsgdmFsdWVbX3RoaXM1LnByb3BzLnZhbHVlS2V5XSxcblx0XHRcdFx0XHRcdFx0b25DbGljazogb25DbGljayxcblx0XHRcdFx0XHRcdFx0b25SZW1vdmU6IF90aGlzNS5yZW1vdmVWYWx1ZSxcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF90aGlzNS5wcm9wcy5wbGFjZWhvbGRlcixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHZhbHVlQXJyYXlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyZW5kZXJMYWJlbCh2YWx1ZSwgaSksXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LWFyaWEtb25seScgfSxcblx0XHRcdFx0XHRcdFx0J1xceEEwJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChzaG91bGRTaG93VmFsdWUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcblx0XHRcdFx0aWYgKGlzT3Blbikgb25DbGljayA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFZhbHVlQ29tcG9uZW50LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZS1pdGVtJyxcblx0XHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiB0aGlzLl9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9uQ2xpY2ssXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcixcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZUFycmF5WzBdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZW5kZXJMYWJlbCh2YWx1ZUFycmF5WzBdKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcklucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQodmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbkluZGV4KSB7XG5cdFx0XHR2YXIgX2NsYXNzTmFtZXMsXG5cdFx0XHQgICAgX3RoaXM2ID0gdGhpcztcblxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ1NlbGVjdC1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5jbGFzc05hbWUpO1xuXHRcdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXG5cdFx0XHR2YXIgYXJpYU93bnMgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLCBpc09wZW4pLCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWJhY2tzcGFjZS1yZW1vdmUtbWVzc2FnZScsIHRoaXMucHJvcHMubXVsdGkgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSksIF9jbGFzc05hbWVzKSk7XG5cblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdGlmICh2YWx1ZSAmJiAhdGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0XHQvLyBpdCBoaWRlcyBpbnB1dCB2YWx1ZSB3aGVuIGl0IGlzIG5vdCBmb2N1c2VkIGFuZCB3YXMgbm90IHJlc2V0IG9uIHNlbGVjdFxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmlucHV0UHJvcHMsIHtcblx0XHRcdFx0J2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiA/IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIGZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScsXG5cdFx0XHRcdCdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuXHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1oYXNwb3B1cCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcblx0XHRcdFx0J2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuXHRcdFx0XHQnYXJpYS1vd25zJzogYXJpYU93bnMsXG5cdFx0XHRcdG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG5cdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuXHRcdFx0XHRvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXMsXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXM2LmlucHV0ID0gX3JlZjtcblx0XHRcdFx0fSxcblx0XHRcdFx0cm9sZTogJ2NvbWJvYm94Jyxcblx0XHRcdFx0cmVxdWlyZWQ6IHRoaXMuc3RhdGUucmVxdWlyZWQsXG5cdFx0XHRcdHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4LFxuXHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLmlucHV0UmVuZGVyZXIoaW5wdXRQcm9wcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdFx0dmFyIGRpdlByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcy5pbnB1dFByb3BzLCBbXSk7XG5cblxuXHRcdFx0XHR2YXIgX2FyaWFPd25zID0gY2xhc3NOYW1lcyhkZWZpbmVQcm9wZXJ0eSh7fSwgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLCBpc09wZW4pKTtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIF9leHRlbmRzKHt9LCBkaXZQcm9wcywge1xuXHRcdFx0XHRcdCdhcmlhLWV4cGFuZGVkJzogaXNPcGVuLFxuXHRcdFx0XHRcdCdhcmlhLW93bnMnOiBfYXJpYU93bnMsXG5cdFx0XHRcdFx0J2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiA/IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIGZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScsXG5cdFx0XHRcdFx0J2FyaWEtZGlzYWJsZWQnOiAnJyArIHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG5cdFx0XHRcdFx0J2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG5cdFx0XHRcdFx0b25Gb2N1czogdGhpcy5oYW5kbGVJbnB1dEZvY3VzLFxuXHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM2LmlucHV0ID0gX3JlZjI7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyb2xlOiAnY29tYm9ib3gnLFxuXHRcdFx0XHRcdHN0eWxlOiB7IGJvcmRlcjogMCwgd2lkdGg6IDEsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0sXG5cdFx0XHRcdFx0dGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXggfHwgMFxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9zaXplKSB7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEF1dG9zaXplSW5wdXQsIF9leHRlbmRzKHsgaWQ6IHRoaXMucHJvcHMuaWQgfSwgaW5wdXRQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgbWluV2lkdGg6ICc1JyB9KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGtleTogJ2lucHV0LXdyYXAnLCBzdHlsZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH0sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyBpZDogdGhpcy5wcm9wcy5pZCB9LCBpbnB1dFByb3BzKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyQ2xlYXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmNsZWFyYWJsZSB8fCAhdmFsdWVBcnJheS5sZW5ndGggfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnByb3BzLmlzTG9hZGluZykgcmV0dXJuO1xuXHRcdFx0dmFyIGFyaWFMYWJlbCA9IHRoaXMucHJvcHMubXVsdGkgPyB0aGlzLnByb3BzLmNsZWFyQWxsVGV4dCA6IHRoaXMucHJvcHMuY2xlYXJWYWx1ZVRleHQ7XG5cdFx0XHR2YXIgY2xlYXIgPSB0aGlzLnByb3BzLmNsZWFyUmVuZGVyZXIoKTtcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jbGVhci16b25lJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5jbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHR0aXRsZTogYXJpYUxhYmVsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNsZWFyXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckFycm93Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQXJyb3coKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcikgcmV0dXJuO1xuXG5cdFx0XHR2YXIgb25Nb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bk9uQXJyb3c7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0XHR2YXIgYXJyb3cgPSB0aGlzLnByb3BzLmFycm93UmVuZGVyZXIoeyBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sIGlzT3BlbjogaXNPcGVuIH0pO1xuXG5cdFx0XHRpZiAoIWFycm93KSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93LXpvbmUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhcnJvd1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmaWx0ZXJPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyQkMShleGNsdWRlT3B0aW9ucykge1xuXHRcdFx0dmFyIGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW107XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zKSB7XG5cdFx0XHRcdC8vIE1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYm9vbGVhbiBhdHRyaWJ1dGVcblx0XHRcdFx0dmFyIGZpbHRlck9wdGlvbnMkJDEgPSB0eXBlb2YgdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zIDogZmlsdGVyT3B0aW9ucztcblxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyT3B0aW9ucyQkMShvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHtcblx0XHRcdFx0XHRmaWx0ZXJPcHRpb246IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uLFxuXHRcdFx0XHRcdGlnbm9yZUFjY2VudHM6IHRoaXMucHJvcHMuaWdub3JlQWNjZW50cyxcblx0XHRcdFx0XHRpZ25vcmVDYXNlOiB0aGlzLnByb3BzLmlnbm9yZUNhc2UsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMucHJvcHMubGFiZWxLZXksXG5cdFx0XHRcdFx0bWF0Y2hQb3M6IHRoaXMucHJvcHMubWF0Y2hQb3MsXG5cdFx0XHRcdFx0bWF0Y2hQcm9wOiB0aGlzLnByb3BzLm1hdGNoUHJvcCxcblx0XHRcdFx0XHR0cmltRmlsdGVyOiB0aGlzLnByb3BzLnRyaW1GaWx0ZXIsXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMucHJvcHMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbk9wdGlvblJlZicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uT3B0aW9uUmVmKHJlZiwgaXNGb2N1c2VkKSB7XG5cdFx0XHRpZiAoaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHJlZjtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJNZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudShvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXIoe1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG5cdFx0XHRcdFx0Zm9jdXNPcHRpb246IHRoaXMuZm9jdXNPcHRpb24sXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLFxuXHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiB0aGlzLl9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0XHRvbkZvY3VzOiB0aGlzLmZvY3VzT3B0aW9uLFxuXHRcdFx0XHRcdG9uT3B0aW9uUmVmOiB0aGlzLm9uT3B0aW9uUmVmLFxuXHRcdFx0XHRcdG9uU2VsZWN0OiB0aGlzLnNlbGVjdFZhbHVlLFxuXHRcdFx0XHRcdG9wdGlvbkNsYXNzTmFtZTogdGhpcy5wcm9wcy5vcHRpb25DbGFzc05hbWUsXG5cdFx0XHRcdFx0b3B0aW9uQ29tcG9uZW50OiB0aGlzLnByb3BzLm9wdGlvbkNvbXBvbmVudCxcblx0XHRcdFx0XHRvcHRpb25SZW5kZXJlcjogdGhpcy5wcm9wcy5vcHRpb25SZW5kZXJlciB8fCB0aGlzLmdldE9wdGlvbkxhYmVsLFxuXHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdFx0cmVtb3ZlVmFsdWU6IHRoaXMucmVtb3ZlVmFsdWUsXG5cdFx0XHRcdFx0c2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdFx0dmFsdWVBcnJheTogdmFsdWVBcnJheSxcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LW5vcmVzdWx0cycgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLm5vUmVzdWx0c1RleHRcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckhpZGRlbkZpZWxkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGlkZGVuRmllbGQodmFsdWVBcnJheSkge1xuXHRcdFx0dmFyIF90aGlzNyA9IHRoaXM7XG5cblx0XHRcdGlmICghdGhpcy5wcm9wcy5uYW1lKSByZXR1cm47XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5qb2luVmFsdWVzKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0cmluZ2lmeVZhbHVlKGlbX3RoaXM3LnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM3LnZhbHVlID0gX3JlZjM7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM3LnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdGtleTogJ2hpZGRlbi4nICsgaW5kZXgsXG5cdFx0XHRcdFx0bmFtZTogX3RoaXM3LnByb3BzLm5hbWUsXG5cdFx0XHRcdFx0cmVmOiAndmFsdWUnICsgaW5kZXgsXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6IHN0cmluZ2lmeVZhbHVlKGl0ZW1bX3RoaXM3LnByb3BzLnZhbHVlS2V5XSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2FibGVPcHRpb25JbmRleCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHNlbGVjdGVkT3B0aW9uKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zO1xuXHRcdFx0aWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cblx0XHRcdHZhciB2YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXk7XG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiB8fCBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uICYmICFmb2N1c2VkT3B0aW9uLmRpc2FibGVkKSB7XG5cdFx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSAtMTtcblx0XHRcdFx0b3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRcdFx0dmFyIGlzT3B0aW9uRXF1YWwgPSBvcHRpb25bdmFsdWVLZXldID09PSBmb2N1c2VkT3B0aW9uW3ZhbHVlS2V5XTtcblx0XHRcdFx0XHRpZiAoaXNPcHRpb25FcXVhbCkge1xuXHRcdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbkluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBpc09wdGlvbkVxdWFsO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZm9jdXNlZE9wdGlvbkluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyT3V0ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJPdXRlcihvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHR2YXIgX3RoaXM4ID0gdGhpcztcblxuXHRcdFx0dmFyIG1lbnUgPSB0aGlzLnJlbmRlck1lbnUob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbik7XG5cdFx0XHRpZiAoIW1lbnUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOC5tZW51Q29udGFpbmVyID0gX3JlZjU7XG5cdFx0XHRcdFx0fSwgY2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUtb3V0ZXInLCBzdHlsZTogdGhpcy5wcm9wcy5tZW51Q29udGFpbmVyU3R5bGUgfSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtbWVudScsXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duT25NZW51LFxuXHRcdFx0XHRcdFx0b25TY3JvbGw6IHRoaXMuaGFuZGxlTWVudVNjcm9sbCxcblx0XHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWY0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczgubWVudSA9IF9yZWY0O1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJvbGU6ICdsaXN0Ym94Jyxcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLm1lbnVTdHlsZSxcblx0XHRcdFx0XHRcdHRhYkluZGV4OiAtMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWVudVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczkgPSB0aGlzO1xuXG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbnModGhpcy5wcm9wcy5tdWx0aSAmJiB0aGlzLnByb3BzLnJlbW92ZVNlbGVjdGVkID8gdmFsdWVBcnJheSA6IG51bGwpO1xuXHRcdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkgJiYgIW9wdGlvbnMubGVuZ3RoICYmIHZhbHVlQXJyYXkubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUpIGlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgodmFsdWVBcnJheVswXSk7XG5cblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uID0gbnVsbDtcblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uSW5kZXggIT09IG51bGwpIHtcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbiA9IHRoaXMuX2ZvY3VzZWRPcHRpb24gPSBvcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uID0gdGhpcy5fZm9jdXNlZE9wdGlvbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnU2VsZWN0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcblx0XHRcdFx0J2hhcy12YWx1ZSc6IHZhbHVlQXJyYXkubGVuZ3RoLFxuXHRcdFx0XHQnaXMtY2xlYXJhYmxlJzogdGhpcy5wcm9wcy5jbGVhcmFibGUsXG5cdFx0XHRcdCdpcy1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdCdpcy1mb2N1c2VkJzogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG5cdFx0XHRcdCdpcy1sb2FkaW5nJzogdGhpcy5wcm9wcy5pc0xvYWRpbmcsXG5cdFx0XHRcdCdpcy1vcGVuJzogaXNPcGVuLFxuXHRcdFx0XHQnaXMtcHNldWRvLWZvY3VzZWQnOiB0aGlzLnN0YXRlLmlzUHNldWRvRm9jdXNlZCxcblx0XHRcdFx0J2lzLXNlYXJjaGFibGUnOiB0aGlzLnByb3BzLnNlYXJjaGFibGUsXG5cdFx0XHRcdCdTZWxlY3QtLW11bHRpJzogdGhpcy5wcm9wcy5tdWx0aSxcblx0XHRcdFx0J1NlbGVjdC0tcnRsJzogdGhpcy5wcm9wcy5ydGwsXG5cdFx0XHRcdCdTZWxlY3QtLXNpbmdsZSc6ICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHJlbW92ZU1lc3NhZ2UgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdmFsdWVBcnJheS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiB0aGlzLnByb3BzLmJhY2tzcGFjZVJlbW92ZXMpIHtcblx0XHRcdFx0cmVtb3ZlTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdHsgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCBjbGFzc05hbWU6ICdTZWxlY3QtYXJpYS1vbmx5JywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5iYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2UucmVwbGFjZSgne2xhYmVsfScsIHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXVt0aGlzLnByb3BzLmxhYmVsS2V5XSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY3KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM5LndyYXBwZXIgPSBfcmVmNztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLndyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlckhpZGRlbkZpZWxkKHZhbHVlQXJyYXkpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjYpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOS5jb250cm9sID0gX3JlZjY7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNvbnRyb2wnLFxuXHRcdFx0XHRcdFx0b25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG5cdFx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuXHRcdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtbXVsdGktdmFsdWUtd3JhcHBlcicsIGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnIH0sXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlclZhbHVlKHZhbHVlQXJyYXksIGlzT3BlbiksXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcklucHV0KHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb25JbmRleClcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHJlbW92ZU1lc3NhZ2UsXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJMb2FkaW5nKCksXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJDbGVhcigpLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyQXJyb3coKVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRpc09wZW4gPyB0aGlzLnJlbmRlck91dGVyKG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIDogbnVsbFxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIFNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU2VsZWN0JDEucHJvcFR5cGVzID0ge1xuXHQnYXJpYS1kZXNjcmliZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGh0bWwgaWQocykgb2YgZWxlbWVudChzKSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGRlc2NyaWJlIHRoaXMgaW5wdXQgKGZvciBhc3Npc3RpdmUgdGVjaClcblx0J2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhcmlhIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdCdhcmlhLWxhYmVsbGVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBodG1sIGlkIG9mIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyB0aGUgbGFiZWwgKGZvciBhc3Npc3RpdmUgdGVjaClcblx0YXJyb3dSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIGNyZWF0ZSB0aGUgZHJvcC1kb3duIGNhcmV0IGVsZW1lbnRcblx0YXV0b0JsdXI6IFByb3BUeXBlcy5ib29sLCAvLyBhdXRvbWF0aWNhbGx5IGJsdXIgdGhlIGNvbXBvbmVudCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLCAvLyBhdXRvZm9jdXMgdGhlIGNvbXBvbmVudCBvbiBtb3VudFxuXHRhdXRvZm9jdXM6IFByb3BUeXBlcy5ib29sLCAvLyBkZXByZWNhdGVkOyB1c2UgYXV0b0ZvY3VzIGluc3RlYWRcblx0YXV0b3NpemU6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvc2l6aW5nIG9yIG5vdFxuXHRiYWNrc3BhY2VSZW1vdmVzOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBiYWNrc3BhY2UgcmVtb3ZlcyBhbiBpdGVtIGlmIHRoZXJlIGlzIG5vIHRleHQgaW5wdXRcblx0YmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBtZXNzYWdlIHRvIHVzZSBmb3Igc2NyZWVucmVhZGVycyB0byBwcmVzcyBiYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50IGl0ZW0gLSB7bGFiZWx9IGlzIHJlcGxhY2VkIHdpdGggdGhlIGl0ZW0gbGFiZWxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdGNsZWFyQWxsVGV4dDogc3RyaW5nT3JOb2RlLCAvLyB0aXRsZSBmb3IgdGhlIFwiY2xlYXJcIiBjb250cm9sIHdoZW4gbXVsdGk6IHRydWVcblx0Y2xlYXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIGNyZWF0ZSBjbGVhcmFibGUgeCBlbGVtZW50XG5cdGNsZWFyVmFsdWVUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHRpdGxlIGZvciB0aGUgXCJjbGVhclwiIGNvbnRyb2xcblx0Y2xlYXJhYmxlOiBQcm9wVHlwZXMuYm9vbCwgLy8gc2hvdWxkIGl0IGJlIHBvc3NpYmxlIHRvIHJlc2V0IHZhbHVlXG5cdGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIGNsb3NlIHRoZSBtZW51IHdoZW4gYSB2YWx1ZSBpcyBzZWxlY3RlZFxuXHRkZWxldGVSZW1vdmVzOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBkZWxldGUgcmVtb3ZlcyBhbiBpdGVtIGlmIHRoZXJlIGlzIG5vIHRleHQgaW5wdXRcblx0ZGVsaW1pdGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBkZWxpbWl0ZXIgdG8gdXNlIHRvIGpvaW4gbXVsdGlwbGUgdmFsdWVzIGZvciB0aGUgaGlkZGVuIGZpZWxkIHZhbHVlXG5cdGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGRpc2FibGVkIG9yIG5vdFxuXHRlc2NhcGVDbGVhcnNWYWx1ZTogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgZXNjYXBlIGNsZWFycyB0aGUgdmFsdWUgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWRcblx0ZmlsdGVyT3B0aW9uOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGZpbHRlciBhIHNpbmdsZSBvcHRpb24gKG9wdGlvbiwgZmlsdGVyU3RyaW5nKVxuXHRmaWx0ZXJPcHRpb25zOiBQcm9wVHlwZXMuYW55LCAvLyBib29sZWFuIHRvIGVuYWJsZSBkZWZhdWx0IGZpbHRlcmluZyBvciBmdW5jdGlvbiB0byBmaWx0ZXIgdGhlIG9wdGlvbnMgYXJyYXkgKFtvcHRpb25zXSwgZmlsdGVyU3RyaW5nLCBbdmFsdWVzXSlcblx0aWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGh0bWwgaWQgdG8gc2V0IG9uIHRoZSBpbnB1dCBlbGVtZW50IGZvciBhY2Nlc3NpYmlsaXR5IG9yIHRlc3RzXG5cdGlnbm9yZUFjY2VudHM6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHN0cmlwIGRpYWNyaXRpY3Mgd2hlbiBmaWx0ZXJpbmdcblx0aWdub3JlQ2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gcGVyZm9ybSBjYXNlLWluc2Vuc2l0aXZlIGZpbHRlcmluZ1xuXHRpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBjdXN0b20gYXR0cmlidXRlcyBmb3IgdGhlIElucHV0XG5cdGlucHV0UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyByZXR1cm5zIGEgY3VzdG9tIGlucHV0IGNvbXBvbmVudFxuXHRpbnN0YW5jZUlkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBzZXQgdGhlIGNvbXBvbmVudHMgaW5zdGFuY2VJZFxuXHRpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRoZSBTZWxlY3QgaXMgbG9hZGluZyBleHRlcm5hbGx5IG9yIG5vdCAoc3VjaCBhcyBvcHRpb25zIGJlaW5nIGxvYWRlZClcblx0am9pblZhbHVlczogUHJvcFR5cGVzLmJvb2wsIC8vIGpvaW5zIG11bHRpcGxlIHZhbHVlcyBpbnRvIGEgc2luZ2xlIGZvcm0gZmllbGQgd2l0aCB0aGUgZGVsaW1pdGVyIChsZWdhY3kgbW9kZSlcblx0bGFiZWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdG1hdGNoUG9zOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyAoYW55fHN0YXJ0KSBtYXRjaCB0aGUgc3RhcnQgb3IgZW50aXJlIHN0cmluZyB3aGVuIGZpbHRlcmluZ1xuXHRtYXRjaFByb3A6IFByb3BUeXBlcy5zdHJpbmcsIC8vIChhbnl8bGFiZWx8dmFsdWUpIHdoaWNoIG9wdGlvbiBwcm9wZXJ0eSB0byBmaWx0ZXIgb25cblx0bWVudUJ1ZmZlcjogUHJvcFR5cGVzLm51bWJlciwgLy8gb3B0aW9uYWwgYnVmZmVyIChpbiBweCkgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCBhbmQgdGhlIGJvdHRvbSBvZiB0aGUgbWVudVxuXHRtZW51Q29udGFpbmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBtZW51IGNvbnRhaW5lclxuXHRtZW51UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyByZW5kZXJzIGEgY3VzdG9tIG1lbnUgd2l0aCBvcHRpb25zXG5cdG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIG1lbnVcblx0bXVsdGk6IFByb3BUeXBlcy5ib29sLCAvLyBtdWx0aS12YWx1ZSBpbnB1dFxuXHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBnZW5lcmF0ZXMgYSBoaWRkZW4gPGlucHV0IC8+IHRhZyB3aXRoIHRoaXMgZmllbGQgbmFtZSBmb3IgaHRtbCBmb3Jtc1xuXHRub1Jlc3VsdHNUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHBsYWNlaG9sZGVyIGRpc3BsYXllZCB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGluZyBzZWFyY2ggcmVzdWx0c1xuXHRvbkJsdXI6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkJsdXIgaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbkJsdXJSZXNldHNJbnB1dDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCBvbiBibHVyXG5cdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7fVxuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWRcblx0b25DbG9zZVJlc2V0c0lucHV0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBpbnB1dCBpcyBjbGVhcmVkIHdoZW4gbWVudSBpcyBjbG9zZWQgdGhyb3VnaCB0aGUgYXJyb3dcblx0b25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uRm9jdXMgaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gb25JbnB1dENoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge31cblx0b25JbnB1dEtleURvd246IFByb3BUeXBlcy5mdW5jLCAvLyBpbnB1dCBrZXlEb3duIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25NZW51U2Nyb2xsVG9Cb3R0b206IFByb3BUeXBlcy5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b207IGNhbiBiZSB1c2VkIHRvIHBhZ2luYXRlIG9wdGlvbnNcblx0b25PcGVuOiBQcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBvcGVuZWRcblx0b25TZWxlY3RSZXNldHNJbnB1dDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCBvbiBzZWxlY3QgKHdvcmtzIG9ubHkgZm9yIG11bHRpc2VsZWN0KVxuXHRvblZhbHVlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkNsaWNrIGhhbmRsZXIgZm9yIHZhbHVlIGxhYmVsczogZnVuY3Rpb24gKHZhbHVlLCBldmVudCkge31cblx0b3Blbk9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLCAvLyBib29sZWFuIHRvIGNvbnRyb2wgb3BlbmluZyB0aGUgbWVudSB3aGVuIHRoZSBjb250cm9sIGlzIGNsaWNrZWRcblx0b3Blbk9uRm9jdXM6IFByb3BUeXBlcy5ib29sLCAvLyBhbHdheXMgb3BlbiBvcHRpb25zIG1lbnUgb24gZm9jdXNcblx0b3B0aW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhZGRpdGlvbmFsIGNsYXNzKGVzKSB0byBhcHBseSB0byB0aGUgPE9wdGlvbiAvPiBlbGVtZW50c1xuXHRvcHRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb24gY29tcG9uZW50IHRvIHJlbmRlciBpbiBkcm9wZG93blxuXHRvcHRpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIG9wdGlvblJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksIC8vIGFycmF5IG9mIG9wdGlvbnNcblx0cGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsIC8vIG51bWJlciBvZiBlbnRyaWVzIHRvIHBhZ2Ugd2hlbiB1c2luZyBwYWdlIHVwL2Rvd24ga2V5c1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nT3JOb2RlLCAvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZVxuXHRyZW1vdmVTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdGhlIHNlbGVjdGVkIG9wdGlvbiBpcyByZW1vdmVkIGZyb20gdGhlIGRyb3Bkb3duIG9uIG11bHRpIHNlbGVjdHNcblx0cmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLCAvLyBhcHBsaWVzIEhUTUw1IHJlcXVpcmVkIGF0dHJpYnV0ZSB3aGVuIG5lZWRlZFxuXHRyZXNldFZhbHVlOiBQcm9wVHlwZXMuYW55LCAvLyB2YWx1ZSB0byB1c2Ugd2hlbiB5b3UgY2xlYXIgdGhlIGNvbnRyb2xcblx0cnRsOiBQcm9wVHlwZXMuYm9vbCwgLy8gc2V0IHRvIHRydWUgaW4gb3JkZXIgdG8gdXNlIHJlYWN0LXNlbGVjdCBpbiByaWdodC10by1sZWZ0IGRpcmVjdGlvblxuXHRzY3JvbGxNZW51SW50b1ZpZXc6IFByb3BUeXBlcy5ib29sLCAvLyBib29sZWFuIHRvIGVuYWJsZSB0aGUgdmlld3BvcnQgdG8gc2hpZnQgc28gdGhhdCB0aGUgZnVsbCBtZW51IGZ1bGx5IHZpc2libGUgd2hlbiBlbmdhZ2VkXG5cdHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIGVuYWJsZSBzZWFyY2hpbmcgZmVhdHVyZSBvciBub3Rcblx0c2ltcGxlVmFsdWU6IFByb3BUeXBlcy5ib29sLCAvLyBwYXNzIHRoZSB2YWx1ZSB0byBvbkNoYW5nZSBhcyBhIHNpbXBsZSB2YWx1ZSAobGVnYWN5IHByZSAxLjAgbW9kZSksIGRlZmF1bHRzIHRvIGZhbHNlXG5cdHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgY29udHJvbFxuXHR0YWJJbmRleDogc3RyaW5nT3JOdW1iZXIsIC8vIG9wdGlvbmFsIHRhYiBpbmRleCBvZiB0aGUgY29udHJvbFxuXHR0YWJTZWxlY3RzVmFsdWU6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHRyZWF0IHRhYmJpbmcgb3V0IHdoaWxlIGZvY3VzZWQgdG8gYmUgdmFsdWUgc2VsZWN0aW9uXG5cdHRyaW1GaWx0ZXI6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHRyaW0gd2hpdGVzcGFjZSBhcm91bmQgZmlsdGVyIHZhbHVlXG5cdHZhbHVlOiBQcm9wVHlwZXMuYW55LCAvLyBpbml0aWFsIGZpZWxkIHZhbHVlXG5cdHZhbHVlQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYywgLy8gdmFsdWUgY29tcG9uZW50IHRvIHJlbmRlclxuXHR2YWx1ZUtleTogUHJvcFR5cGVzLnN0cmluZywgLy8gcGF0aCBvZiB0aGUgbGFiZWwgdmFsdWUgaW4gb3B0aW9uIG9iamVjdHNcblx0dmFsdWVSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIHZhbHVlUmVuZGVyZXI6IGZ1bmN0aW9uIChvcHRpb24pIHt9XG5cdHdyYXBwZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdyYXBwZXJcbn07XG5cblNlbGVjdCQxLmRlZmF1bHRQcm9wcyA9IHtcblx0YXJyb3dSZW5kZXJlcjogYXJyb3dSZW5kZXJlcixcblx0YXV0b3NpemU6IHRydWUsXG5cdGJhY2tzcGFjZVJlbW92ZXM6IHRydWUsXG5cdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogJ1ByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUge2xhYmVsfScsXG5cdGNsZWFyYWJsZTogdHJ1ZSxcblx0Y2xlYXJBbGxUZXh0OiAnQ2xlYXIgYWxsJyxcblx0Y2xlYXJSZW5kZXJlcjogY2xlYXJSZW5kZXJlcixcblx0Y2xlYXJWYWx1ZVRleHQ6ICdDbGVhciB2YWx1ZScsXG5cdGNsb3NlT25TZWxlY3Q6IHRydWUsXG5cdGRlbGV0ZVJlbW92ZXM6IHRydWUsXG5cdGRlbGltaXRlcjogJywnLFxuXHRkaXNhYmxlZDogZmFsc2UsXG5cdGVzY2FwZUNsZWFyc1ZhbHVlOiB0cnVlLFxuXHRmaWx0ZXJPcHRpb25zOiBmaWx0ZXJPcHRpb25zLFxuXHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRpZ25vcmVDYXNlOiB0cnVlLFxuXHRpbnB1dFByb3BzOiB7fSxcblx0aXNMb2FkaW5nOiBmYWxzZSxcblx0am9pblZhbHVlczogZmFsc2UsXG5cdGxhYmVsS2V5OiAnbGFiZWwnLFxuXHRtYXRjaFBvczogJ2FueScsXG5cdG1hdGNoUHJvcDogJ2FueScsXG5cdG1lbnVCdWZmZXI6IDAsXG5cdG1lbnVSZW5kZXJlcjogbWVudVJlbmRlcmVyLFxuXHRtdWx0aTogZmFsc2UsXG5cdG5vUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIGZvdW5kJyxcblx0b25CbHVyUmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9uQ2xvc2VSZXNldHNJbnB1dDogdHJ1ZSxcblx0b25TZWxlY3RSZXNldHNJbnB1dDogdHJ1ZSxcblx0b3Blbk9uQ2xpY2s6IHRydWUsXG5cdG9wdGlvbkNvbXBvbmVudDogT3B0aW9uLFxuXHRwYWdlU2l6ZTogNSxcblx0cGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuXHRyZW1vdmVTZWxlY3RlZDogdHJ1ZSxcblx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRydGw6IGZhbHNlLFxuXHRzY3JvbGxNZW51SW50b1ZpZXc6IHRydWUsXG5cdHNlYXJjaGFibGU6IHRydWUsXG5cdHNpbXBsZVZhbHVlOiBmYWxzZSxcblx0dGFiU2VsZWN0c1ZhbHVlOiB0cnVlLFxuXHR0cmltRmlsdGVyOiB0cnVlLFxuXHR2YWx1ZUNvbXBvbmVudDogVmFsdWUsXG5cdHZhbHVlS2V5OiAndmFsdWUnXG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuXHRhdXRvbG9hZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCwgLy8gYXV0b21hdGljYWxseSBjYWxsIHRoZSBgbG9hZE9wdGlvbnNgIHByb3Agb24tbW91bnQ7IGRlZmF1bHRzIHRvIHRydWVcblx0Y2FjaGU6IFByb3BUeXBlcy5hbnksIC8vIG9iamVjdCB0byB1c2UgdG8gY2FjaGUgcmVzdWx0czsgc2V0IHRvIG51bGwvZmFsc2UgdG8gZGlzYWJsZSBjYWNoaW5nXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnQ7IChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcblx0aWdub3JlQWNjZW50czogUHJvcFR5cGVzLmJvb2wsIC8vIHN0cmlwIGRpYWNyaXRpY3Mgd2hlbiBmaWx0ZXJpbmc7IGRlZmF1bHRzIHRvIHRydWVcblx0aWdub3JlQ2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHBlcmZvcm0gY2FzZS1pbnNlbnNpdGl2ZSBmaWx0ZXJpbmc7IGRlZmF1bHRzIHRvIHRydWVcblx0bG9hZE9wdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIGNhbGxiYWNrIHRvIGxvYWQgb3B0aW9ucyBhc3luY2hyb25vdXNseTsgKGlucHV0VmFsdWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogP1Byb21pc2Vcblx0bG9hZGluZ1BsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyByZXBsYWNlcyB0aGUgcGxhY2Vob2xkZXIgd2hpbGUgb3B0aW9ucyBhcmUgbG9hZGluZ1xuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHRtdWx0aTogUHJvcFR5cGVzLmJvb2wsIC8vIG11bHRpLXZhbHVlIGlucHV0XG5cdG5vUmVzdWx0c1RleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIGZpZWxkIG5vUmVzdWx0c1RleHQsIGRpc3BsYXllZCB3aGVuIG5vIG9wdGlvbnMgY29tZSBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge31cblx0b25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9wdGlvbmFsIGZvciBrZWVwaW5nIHRyYWNrIG9mIHdoYXQgaXMgYmVpbmcgdHlwZWRcblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGFycmF5IG9mIG9wdGlvbnNcblx0cGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIGZpZWxkIHBsYWNlaG9sZGVyLCBkaXNwbGF5ZWQgd2hlbiB0aGVyZSdzIG5vIHZhbHVlIChzaGFyZWQgd2l0aCBTZWxlY3QpXG5cdFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cdHNlYXJjaFByb21wdFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIGxhYmVsIHRvIHByb21wdCBmb3Igc2VhcmNoIGlucHV0XG5cdFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cdHZhbHVlOiBQcm9wVHlwZXMuYW55IC8vIGluaXRpYWwgZmllbGQgdmFsdWVcbn07XG5cbnZhciBkZWZhdWx0Q2FjaGUgPSB7fTtcblxudmFyIGRlZmF1bHRDaGlsZHJlbiA9IGZ1bmN0aW9uIGRlZmF1bHRDaGlsZHJlbihwcm9wcykge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QkMSwgcHJvcHMpO1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcblx0YXV0b2xvYWQ6IHRydWUsXG5cdGNhY2hlOiBkZWZhdWx0Q2FjaGUsXG5cdGNoaWxkcmVuOiBkZWZhdWx0Q2hpbGRyZW4sXG5cdGlnbm9yZUFjY2VudHM6IHRydWUsXG5cdGlnbm9yZUNhc2U6IHRydWUsXG5cdGxvYWRpbmdQbGFjZWhvbGRlcjogJ0xvYWRpbmcuLi4nLFxuXHRvcHRpb25zOiBbXSxcblx0c2VhcmNoUHJvbXB0VGV4dDogJ1R5cGUgdG8gc2VhcmNoJ1xufTtcblxudmFyIEFzeW5jID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0aW5oZXJpdHMoQXN5bmMsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEFzeW5jKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQXN5bmMpO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXN5bmMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBc3luYykpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuXHRcdF90aGlzLl9jYWNoZSA9IHByb3BzLmNhY2hlID09PSBkZWZhdWx0Q2FjaGUgPyB7fSA6IHByb3BzLmNhY2hlO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFZhbHVlOiAnJyxcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRvcHRpb25zOiBwcm9wcy5vcHRpb25zXG5cdFx0fTtcblxuXHRcdF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKEFzeW5jLCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR2YXIgYXV0b2xvYWQgPSB0aGlzLnByb3BzLmF1dG9sb2FkO1xuXG5cblx0XHRcdGlmIChhdXRvbG9hZCkge1xuXHRcdFx0XHR0aGlzLmxvYWRPcHRpb25zKCcnKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdGlmIChuZXh0UHJvcHMub3B0aW9ucyAhPT0gdGhpcy5wcm9wcy5vcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG9wdGlvbnM6IG5leHRQcm9wcy5vcHRpb25zXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbG9hZE9wdGlvbnMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIGxvYWRPcHRpb25zID0gdGhpcy5wcm9wcy5sb2FkT3B0aW9ucztcblxuXHRcdFx0dmFyIGNhY2hlID0gdGhpcy5fY2FjaGU7XG5cblx0XHRcdGlmIChjYWNoZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlucHV0VmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdG9wdGlvbnM6IGNhY2hlW2lucHV0VmFsdWVdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soZXJyb3IsIGRhdGEpIHtcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSBkYXRhICYmIGRhdGEub3B0aW9ucyB8fCBbXTtcblxuXHRcdFx0XHRpZiAoY2FjaGUpIHtcblx0XHRcdFx0XHRjYWNoZVtpbnB1dFZhbHVlXSA9IG9wdGlvbnM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgPT09IF90aGlzMi5fY2FsbGJhY2spIHtcblx0XHRcdFx0XHRfdGhpczIuX2NhbGxiYWNrID0gbnVsbDtcblxuXHRcdFx0XHRcdF90aGlzMi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogb3B0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJZ25vcmUgYWxsIGJ1dCB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdFxuXHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuXHRcdFx0dmFyIHByb21pc2UgPSBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBjYWxsYmFjayk7XG5cdFx0XHRpZiAocHJvbWlzZSkge1xuXHRcdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2sobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fY2FsbGJhY2sgJiYgIXRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzTG9hZGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbklucHV0Q2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBpZ25vcmVBY2NlbnRzID0gX3Byb3BzLmlnbm9yZUFjY2VudHMsXG5cdFx0XHQgICAgaWdub3JlQ2FzZSA9IF9wcm9wcy5pZ25vcmVDYXNlLFxuXHRcdFx0ICAgIG9uSW5wdXRDaGFuZ2UgPSBfcHJvcHMub25JbnB1dENoYW5nZTtcblxuXHRcdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xuXG5cdFx0XHRpZiAob25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBvbklucHV0Q2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0XHQvLyBOb3RlOiAhPSB1c2VkIGRlbGliZXJhdGVseSBoZXJlIHRvIGNhdGNoIHVuZGVmaW5lZCBhbmQgbnVsbFxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld0lucHV0VmFsdWUgPSAnJyArIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuXG5cdFx0XHRpZiAoaWdub3JlQWNjZW50cykge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSBzdHJpcERpYWNyaXRpY3ModHJhbnNmb3JtZWRJbnB1dFZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZUNhc2UpIHtcblx0XHRcdFx0dHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gdHJhbnNmb3JtZWRJbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBuZXdJbnB1dFZhbHVlIH0pO1xuXHRcdFx0dGhpcy5sb2FkT3B0aW9ucyh0cmFuc2Zvcm1lZElucHV0VmFsdWUpO1xuXG5cdFx0XHQvLyBSZXR1cm4gbmV3IGlucHV0IHZhbHVlLCBidXQgd2l0aG91dCBhcHBseWluZyB0b0xvd2VyQ2FzZSgpIHRvIGF2b2lkIG1vZGlmeWluZyB0aGUgdXNlcidzIHZpZXcgY2FzZSBvZiB0aGUgaW5wdXQgd2hpbGUgdHlwaW5nLlxuXHRcdFx0cmV0dXJuIG5ld0lucHV0VmFsdWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbm9SZXN1bHRzVGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG5vUmVzdWx0c1RleHQoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMi5sb2FkaW5nUGxhY2Vob2xkZXIsXG5cdFx0XHQgICAgbm9SZXN1bHRzVGV4dCA9IF9wcm9wczIubm9SZXN1bHRzVGV4dCxcblx0XHRcdCAgICBzZWFyY2hQcm9tcHRUZXh0ID0gX3Byb3BzMi5zZWFyY2hQcm9tcHRUZXh0O1xuXHRcdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHQgICAgaW5wdXRWYWx1ZSA9IF9zdGF0ZS5pbnB1dFZhbHVlLFxuXHRcdFx0ICAgIGlzTG9hZGluZyA9IF9zdGF0ZS5pc0xvYWRpbmc7XG5cblxuXHRcdFx0aWYgKGlzTG9hZGluZykge1xuXHRcdFx0XHRyZXR1cm4gbG9hZGluZ1BsYWNlaG9sZGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlucHV0VmFsdWUgJiYgbm9SZXN1bHRzVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gbm9SZXN1bHRzVGV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzZWFyY2hQcm9tcHRUZXh0O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHR2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuXHRcdFx0ICAgIGxvYWRpbmdQbGFjZWhvbGRlciA9IF9wcm9wczMubG9hZGluZ1BsYWNlaG9sZGVyLFxuXHRcdFx0ICAgIHBsYWNlaG9sZGVyID0gX3Byb3BzMy5wbGFjZWhvbGRlcjtcblx0XHRcdHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcblx0XHRcdCAgICBpc0xvYWRpbmcgPSBfc3RhdGUyLmlzTG9hZGluZyxcblx0XHRcdCAgICBvcHRpb25zID0gX3N0YXRlMi5vcHRpb25zO1xuXG5cblx0XHRcdHZhciBwcm9wcyA9IHtcblx0XHRcdFx0bm9SZXN1bHRzVGV4dDogdGhpcy5ub1Jlc3VsdHNUZXh0KCksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBpc0xvYWRpbmcgPyBsb2FkaW5nUGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcixcblx0XHRcdFx0b3B0aW9uczogaXNMb2FkaW5nICYmIGxvYWRpbmdQbGFjZWhvbGRlciA/IFtdIDogb3B0aW9ucyxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczMuc2VsZWN0ID0gX3JlZjtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcywge1xuXHRcdFx0XHRpc0xvYWRpbmc6IGlzTG9hZGluZyxcblx0XHRcdFx0b25JbnB1dENoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBBc3luYztcbn0oQ29tcG9uZW50KTtcblxuQXN5bmMucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQXN5bmMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgQ3JlYXRhYmxlU2VsZWN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoQ3JlYXRhYmxlU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBDcmVhdGFibGVTZWxlY3QocHJvcHMsIGNvbnRleHQpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBDcmVhdGFibGVTZWxlY3QpO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ3JlYXRhYmxlU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ3JlYXRhYmxlU2VsZWN0KSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG5cdFx0X3RoaXMuZmlsdGVyT3B0aW9ucyA9IF90aGlzLmZpbHRlck9wdGlvbnMuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMubWVudVJlbmRlcmVyID0gX3RoaXMubWVudVJlbmRlcmVyLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uSW5wdXRLZXlEb3duID0gX3RoaXMub25JbnB1dEtleURvd24uYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25JbnB1dENoYW5nZSA9IF90aGlzLm9uSW5wdXRDaGFuZ2UuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25PcHRpb25TZWxlY3QgPSBfdGhpcy5vbk9wdGlvblNlbGVjdC5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhDcmVhdGFibGVTZWxlY3QsIFt7XG5cdFx0a2V5OiAnY3JlYXRlTmV3T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTmV3T3B0aW9uKCkge1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgaXNWYWxpZE5ld09wdGlvbiA9IF9wcm9wcy5pc1ZhbGlkTmV3T3B0aW9uLFxuXHRcdFx0ICAgIG5ld09wdGlvbkNyZWF0b3IgPSBfcHJvcHMubmV3T3B0aW9uQ3JlYXRvcixcblx0XHRcdCAgICBvbk5ld09wdGlvbkNsaWNrID0gX3Byb3BzLm9uTmV3T3B0aW9uQ2xpY2ssXG5cdFx0XHQgICAgX3Byb3BzJG9wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcblx0XHRcdCAgICBvcHRpb25zID0gX3Byb3BzJG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3Byb3BzJG9wdGlvbnM7XG5cblxuXHRcdFx0aWYgKGlzVmFsaWROZXdPcHRpb24oeyBsYWJlbDogdGhpcy5pbnB1dFZhbHVlIH0pKSB7XG5cdFx0XHRcdHZhciBvcHRpb24gPSBuZXdPcHRpb25DcmVhdG9yKHsgbGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSwgbGFiZWxLZXk6IHRoaXMubGFiZWxLZXksIHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5IH0pO1xuXHRcdFx0XHR2YXIgX2lzT3B0aW9uVW5pcXVlID0gdGhpcy5pc09wdGlvblVuaXF1ZSh7IG9wdGlvbjogb3B0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuXG5cdFx0XHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSBvcHRpb24gdHdpY2UuXG5cdFx0XHRcdGlmIChfaXNPcHRpb25VbmlxdWUpIHtcblx0XHRcdFx0XHRpZiAob25OZXdPcHRpb25DbGljaykge1xuXHRcdFx0XHRcdFx0b25OZXdPcHRpb25DbGljayhvcHRpb24pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRvcHRpb25zLnVuc2hpZnQob3B0aW9uKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Quc2VsZWN0VmFsdWUob3B0aW9uKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmaWx0ZXJPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyQkMSgpIHtcblx0XHRcdHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBmaWx0ZXJPcHRpb25zJCQxID0gX3Byb3BzMi5maWx0ZXJPcHRpb25zLFxuXHRcdFx0ICAgIGlzVmFsaWROZXdPcHRpb24gPSBfcHJvcHMyLmlzVmFsaWROZXdPcHRpb24sXG5cdFx0XHQgICAgcHJvbXB0VGV4dENyZWF0b3IgPSBfcHJvcHMyLnByb21wdFRleHRDcmVhdG9yLFxuXHRcdFx0ICAgIHNob3dOZXdPcHRpb25BdFRvcCA9IF9wcm9wczIuc2hvd05ld09wdGlvbkF0VG9wO1xuXG5cdFx0XHQvLyBUUklDS1kgQ2hlY2sgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbnMgYXMgd2VsbC5cblx0XHRcdC8vIERvbid0IGRpc3BsYXkgYSBjcmVhdGUtcHJvbXB0IGZvciBhIHZhbHVlIHRoYXQncyBzZWxlY3RlZC5cblx0XHRcdC8vIFRoaXMgY292ZXJzIGFzeW5jIGVkZ2UtY2FzZXMgd2hlcmUgYSBuZXdseS1jcmVhdGVkIE9wdGlvbiBpc24ndCB5ZXQgaW4gdGhlIGFzeW5jLWxvYWRlZCBhcnJheS5cblxuXHRcdFx0dmFyIGV4Y2x1ZGVPcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSkgfHwgW107XG5cblx0XHRcdHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zJCQxLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSB8fCBbXTtcblxuXHRcdFx0aWYgKGlzVmFsaWROZXdPcHRpb24oeyBsYWJlbDogdGhpcy5pbnB1dFZhbHVlIH0pKSB7XG5cdFx0XHRcdHZhciBfbmV3T3B0aW9uQ3JlYXRvciA9IHRoaXMucHJvcHMubmV3T3B0aW9uQ3JlYXRvcjtcblxuXG5cdFx0XHRcdHZhciBvcHRpb24gPSBfbmV3T3B0aW9uQ3JlYXRvcih7XG5cdFx0XHRcdFx0bGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5sYWJlbEtleSxcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBUUklDS1kgQ29tcGFyZSB0byBhbGwgb3B0aW9ucyAobm90IGp1c3QgZmlsdGVyZWQgb3B0aW9ucykgaW4gY2FzZSBvcHRpb24gaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZCkuXG5cdFx0XHRcdC8vIEZvciBtdWx0aS1zZWxlY3RzLCB0aGlzIHdvdWxkIHJlbW92ZSBpdCBmcm9tIHRoZSBmaWx0ZXJlZCBsaXN0LlxuXHRcdFx0XHR2YXIgX2lzT3B0aW9uVW5pcXVlMiA9IHRoaXMuaXNPcHRpb25VbmlxdWUoe1xuXHRcdFx0XHRcdG9wdGlvbjogb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnM6IGV4Y2x1ZGVPcHRpb25zLmNvbmNhdChmaWx0ZXJlZE9wdGlvbnMpXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChfaXNPcHRpb25VbmlxdWUyKSB7XG5cdFx0XHRcdFx0dmFyIHByb21wdCA9IHByb21wdFRleHRDcmVhdG9yKHRoaXMuaW5wdXRWYWx1ZSk7XG5cblx0XHRcdFx0XHR0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbiA9IF9uZXdPcHRpb25DcmVhdG9yKHtcblx0XHRcdFx0XHRcdGxhYmVsOiBwcm9tcHQsXG5cdFx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5sYWJlbEtleSxcblx0XHRcdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRpZiAoc2hvd05ld09wdGlvbkF0VG9wKSB7XG5cdFx0XHRcdFx0XHRmaWx0ZXJlZE9wdGlvbnMudW5zaGlmdCh0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGZpbHRlcmVkT3B0aW9ucy5wdXNoKHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdpc09wdGlvblVuaXF1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uVW5pcXVlKF9yZWYpIHtcblx0XHRcdHZhciBvcHRpb24gPSBfcmVmLm9wdGlvbixcblx0XHRcdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuXHRcdFx0dmFyIGlzT3B0aW9uVW5pcXVlID0gdGhpcy5wcm9wcy5pc09wdGlvblVuaXF1ZTtcblxuXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB0aGlzLnByb3BzLm9wdGlvbnM7XG5cblx0XHRcdHJldHVybiBpc09wdGlvblVuaXF1ZSh7XG5cdFx0XHRcdGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LFxuXHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdFx0dmFsdWVLZXk6IHRoaXMudmFsdWVLZXlcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ21lbnVSZW5kZXJlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG1lbnVSZW5kZXJlciQkMShwYXJhbXMpIHtcblx0XHRcdHZhciBtZW51UmVuZGVyZXIkJDEgPSB0aGlzLnByb3BzLm1lbnVSZW5kZXJlcjtcblxuXG5cdFx0XHRyZXR1cm4gbWVudVJlbmRlcmVyJCQxKF9leHRlbmRzKHt9LCBwYXJhbXMsIHtcblx0XHRcdFx0b25TZWxlY3Q6IHRoaXMub25PcHRpb25TZWxlY3QsXG5cdFx0XHRcdHNlbGVjdFZhbHVlOiB0aGlzLm9uT3B0aW9uU2VsZWN0XG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25JbnB1dENoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoaW5wdXQpIHtcblx0XHRcdHZhciBvbklucHV0Q2hhbmdlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlO1xuXG5cdFx0XHQvLyBUaGlzIHZhbHVlIG1heSBiZSBuZWVkZWQgaW4gYmV0d2VlbiBTZWxlY3QgbW91bnRzICh3aGVuIHRoaXMuc2VsZWN0IGlzIG51bGwpXG5cblx0XHRcdHRoaXMuaW5wdXRWYWx1ZSA9IGlucHV0O1xuXG5cdFx0XHRpZiAob25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR0aGlzLmlucHV0VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuaW5wdXRWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbklucHV0S2V5RG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRLZXlEb3duKGV2ZW50KSB7XG5cdFx0XHR2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uID0gX3Byb3BzMy5zaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24sXG5cdFx0XHQgICAgb25JbnB1dEtleURvd24gPSBfcHJvcHMzLm9uSW5wdXRLZXlEb3duO1xuXG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc2VsZWN0LmdldEZvY3VzZWRPcHRpb24oKTtcblxuXHRcdFx0aWYgKGZvY3VzZWRPcHRpb24gJiYgZm9jdXNlZE9wdGlvbiA9PT0gdGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24gJiYgc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uKGV2ZW50KSkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU5ld09wdGlvbigpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgZGVjb3JhdGVkIFNlbGVjdCBmcm9tIGRvaW5nIGFueXRoaW5nIGFkZGl0aW9uYWwgd2l0aCB0aGlzIGtleURvd24gZXZlbnRcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25JbnB1dEtleURvd24pIHtcblx0XHRcdFx0b25JbnB1dEtleURvd24oZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uT3B0aW9uU2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25PcHRpb25TZWxlY3Qob3B0aW9uKSB7XG5cdFx0XHRpZiAob3B0aW9uID09PSB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU5ld09wdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZWxlY3Quc2VsZWN0VmFsdWUob3B0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5zZWxlY3QuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIHJlZlByb3AgPSBfcHJvcHM0LnJlZixcblx0XHRcdCAgICByZXN0UHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHM0LCBbJ3JlZiddKTtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblx0XHRcdC8vIFdlIGNhbid0IHVzZSBkZXN0cnVjdHVyaW5nIGRlZmF1bHQgdmFsdWVzIHRvIHNldCB0aGUgY2hpbGRyZW4sXG5cdFx0XHQvLyBiZWNhdXNlIGl0IHdvbid0IGFwcGx5IHdvcmsgaWYgYGNoaWxkcmVuYCBpcyBudWxsLiBBIGZhbHN5IGNoZWNrIGlzXG5cdFx0XHQvLyBtb3JlIHJlbGlhYmxlIGluIHJlYWwgd29ybGQgdXNlLWNhc2VzLlxuXG5cdFx0XHRpZiAoIWNoaWxkcmVuKSB7XG5cdFx0XHRcdGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuJDI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcblx0XHRcdFx0YWxsb3dDcmVhdGU6IHRydWUsXG5cdFx0XHRcdGZpbHRlck9wdGlvbnM6IHRoaXMuZmlsdGVyT3B0aW9ucyxcblx0XHRcdFx0bWVudVJlbmRlcmVyOiB0aGlzLm1lbnVSZW5kZXJlcixcblx0XHRcdFx0b25JbnB1dENoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlLFxuXHRcdFx0XHRvbklucHV0S2V5RG93bjogdGhpcy5vbklucHV0S2V5RG93bixcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcblx0XHRcdFx0XHRfdGhpczIuc2VsZWN0ID0gX3JlZjI7XG5cblx0XHRcdFx0XHQvLyBUaGVzZSB2YWx1ZXMgbWF5IGJlIG5lZWRlZCBpbiBiZXR3ZWVuIFNlbGVjdCBtb3VudHMgKHdoZW4gdGhpcy5zZWxlY3QgaXMgbnVsbClcblx0XHRcdFx0XHRpZiAoX3JlZjIpIHtcblx0XHRcdFx0XHRcdF90aGlzMi5sYWJlbEtleSA9IF9yZWYyLnByb3BzLmxhYmVsS2V5O1xuXHRcdFx0XHRcdFx0X3RoaXMyLnZhbHVlS2V5ID0gX3JlZjIucHJvcHMudmFsdWVLZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChyZWZQcm9wKSB7XG5cdFx0XHRcdFx0XHRyZWZQcm9wKF9yZWYyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW4ocHJvcHMpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gQ3JlYXRhYmxlU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgZGVmYXVsdENoaWxkcmVuJDIgPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0JDEsIHByb3BzKTtcbn07XG5cbnZhciBpc09wdGlvblVuaXF1ZSA9IGZ1bmN0aW9uIGlzT3B0aW9uVW5pcXVlKF9yZWYzKSB7XG5cdHZhciBvcHRpb24gPSBfcmVmMy5vcHRpb24sXG5cdCAgICBvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcblx0ICAgIGxhYmVsS2V5ID0gX3JlZjMubGFiZWxLZXksXG5cdCAgICB2YWx1ZUtleSA9IF9yZWYzLnZhbHVlS2V5O1xuXG5cdGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAoZXhpc3RpbmdPcHRpb24pIHtcblx0XHRyZXR1cm4gZXhpc3RpbmdPcHRpb25bbGFiZWxLZXldID09PSBvcHRpb25bbGFiZWxLZXldIHx8IGV4aXN0aW5nT3B0aW9uW3ZhbHVlS2V5XSA9PT0gb3B0aW9uW3ZhbHVlS2V5XTtcblx0fSkubGVuZ3RoID09PSAwO1xufTtcblxudmFyIGlzVmFsaWROZXdPcHRpb24gPSBmdW5jdGlvbiBpc1ZhbGlkTmV3T3B0aW9uKF9yZWY0KSB7XG5cdHZhciBsYWJlbCA9IF9yZWY0LmxhYmVsO1xuXHRyZXR1cm4gISFsYWJlbDtcbn07XG5cbnZhciBuZXdPcHRpb25DcmVhdG9yID0gZnVuY3Rpb24gbmV3T3B0aW9uQ3JlYXRvcihfcmVmNSkge1xuXHR2YXIgbGFiZWwgPSBfcmVmNS5sYWJlbCxcblx0ICAgIGxhYmVsS2V5ID0gX3JlZjUubGFiZWxLZXksXG5cdCAgICB2YWx1ZUtleSA9IF9yZWY1LnZhbHVlS2V5O1xuXG5cdHZhciBvcHRpb24gPSB7fTtcblx0b3B0aW9uW3ZhbHVlS2V5XSA9IGxhYmVsO1xuXHRvcHRpb25bbGFiZWxLZXldID0gbGFiZWw7XG5cdG9wdGlvbi5jbGFzc05hbWUgPSAnU2VsZWN0LWNyZWF0ZS1vcHRpb24tcGxhY2Vob2xkZXInO1xuXG5cdHJldHVybiBvcHRpb247XG59O1xuXG52YXIgcHJvbXB0VGV4dENyZWF0b3IgPSBmdW5jdGlvbiBwcm9tcHRUZXh0Q3JlYXRvcihsYWJlbCkge1xuXHRyZXR1cm4gJ0NyZWF0ZSBvcHRpb24gXCInICsgbGFiZWwgKyAnXCInO1xufTtcblxudmFyIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbiA9IGZ1bmN0aW9uIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbihfcmVmNikge1xuXHR2YXIga2V5Q29kZSA9IF9yZWY2LmtleUNvZGU7XG5cblx0c3dpdGNoIChrZXlDb2RlKSB7XG5cdFx0Y2FzZSA5OiAvLyBUQUJcblx0XHRjYXNlIDEzOiAvLyBFTlRFUlxuXHRcdGNhc2UgMTg4OlxuXHRcdFx0Ly8gQ09NTUFcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbi8vIERlZmF1bHQgcHJvcCBtZXRob2RzXG5DcmVhdGFibGVTZWxlY3QuaXNPcHRpb25VbmlxdWUgPSBpc09wdGlvblVuaXF1ZTtcbkNyZWF0YWJsZVNlbGVjdC5pc1ZhbGlkTmV3T3B0aW9uID0gaXNWYWxpZE5ld09wdGlvbjtcbkNyZWF0YWJsZVNlbGVjdC5uZXdPcHRpb25DcmVhdG9yID0gbmV3T3B0aW9uQ3JlYXRvcjtcbkNyZWF0YWJsZVNlbGVjdC5wcm9tcHRUZXh0Q3JlYXRvciA9IHByb21wdFRleHRDcmVhdG9yO1xuQ3JlYXRhYmxlU2VsZWN0LnNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbiA9IHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbjtcblxuQ3JlYXRhYmxlU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcblx0ZmlsdGVyT3B0aW9uczogZmlsdGVyT3B0aW9ucyxcblx0aXNPcHRpb25VbmlxdWU6IGlzT3B0aW9uVW5pcXVlLFxuXHRpc1ZhbGlkTmV3T3B0aW9uOiBpc1ZhbGlkTmV3T3B0aW9uLFxuXHRtZW51UmVuZGVyZXI6IG1lbnVSZW5kZXJlcixcblx0bmV3T3B0aW9uQ3JlYXRvcjogbmV3T3B0aW9uQ3JlYXRvcixcblx0cHJvbXB0VGV4dENyZWF0b3I6IHByb21wdFRleHRDcmVhdG9yLFxuXHRzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb246IHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbixcblx0c2hvd05ld09wdGlvbkF0VG9wOiB0cnVlXG59O1xuXG5DcmVhdGFibGVTZWxlY3QucHJvcFR5cGVzID0ge1xuXHQvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnRcblx0Ly8gVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBIT0NzIChlZyBDcmVhdGFibGUgYW5kIEFzeW5jKVxuXHQvLyAocHJvcHM6IE9iamVjdCk6IFByb3BUeXBlcy5lbGVtZW50XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5maWx0ZXJPcHRpb25zXG5cdGZpbHRlck9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG5cblx0Ly8gU2VhcmNoZXMgZm9yIGFueSBtYXRjaGluZyBvcHRpb24gd2l0aGluIHRoZSBzZXQgb2Ygb3B0aW9ucy5cblx0Ly8gVGhpcyBmdW5jdGlvbiBwcmV2ZW50cyBkdXBsaWNhdGUgb3B0aW9ucyBmcm9tIGJlaW5nIGNyZWF0ZWQuXG5cdC8vICh7IG9wdGlvbjogT2JqZWN0LCBvcHRpb25zOiBBcnJheSwgbGFiZWxLZXk6IHN0cmluZywgdmFsdWVLZXk6IHN0cmluZyB9KTogYm9vbGVhblxuXHRpc09wdGlvblVuaXF1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBpbnB1dCB0ZXh0IHJlcHJlc2VudHMgYSB2YWxpZCBvcHRpb24uXG5cdC8vICh7IGxhYmVsOiBzdHJpbmcgfSk6IGJvb2xlYW5cblx0aXNWYWxpZE5ld09wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gU2VlIFNlbGVjdC5wcm9wVHlwZXMubWVudVJlbmRlcmVyXG5cdG1lbnVSZW5kZXJlcjogUHJvcFR5cGVzLmFueSxcblxuXHQvLyBGYWN0b3J5IHRvIGNyZWF0ZSBuZXcgb3B0aW9uLlxuXHQvLyAoeyBsYWJlbDogc3RyaW5nLCBsYWJlbEtleTogc3RyaW5nLCB2YWx1ZUtleTogc3RyaW5nIH0pOiBPYmplY3Rcblx0bmV3T3B0aW9uQ3JlYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gaW5wdXQgY2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7fVxuXHRvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBpbnB1dCBrZXlEb3duIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25JbnB1dEtleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIG5ldyBvcHRpb24gY2xpY2sgaGFuZGxlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0b25OZXdPcHRpb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gU2VlIFNlbGVjdC5wcm9wVHlwZXMub3B0aW9uc1xuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG5cblx0Ly8gQ3JlYXRlcyBwcm9tcHQvcGxhY2Vob2xkZXIgb3B0aW9uIHRleHQuXG5cdC8vIChmaWx0ZXJUZXh0OiBzdHJpbmcpOiBzdHJpbmdcblx0cHJvbXB0VGV4dENyZWF0b3I6IFByb3BUeXBlcy5mdW5jLFxuXG5cdHJlZjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gRGVjaWRlcyBpZiBhIGtleURvd24gZXZlbnQgKGVnIGl0cyBga2V5Q29kZWApIHNob3VsZCByZXN1bHQgaW4gdGhlIGNyZWF0aW9uIG9mIGEgbmV3IG9wdGlvbi5cblx0c2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBXaGVyZSB0byBzaG93IHByb21wdC9wbGFjZWhvbGRlciBvcHRpb24gdGV4dC5cblx0Ly8gdHJ1ZTogbmV3IG9wdGlvbiBwcm9tcHQgYXQgdG9wIG9mIGxpc3QgKGRlZmF1bHQpXG5cdC8vIGZhbHNlOiBuZXcgb3B0aW9uIHByb21wdCBhdCBib3R0b20gb2YgbGlzdFxuXHRzaG93TmV3T3B0aW9uQXRUb3A6IFByb3BUeXBlcy5ib29sXG59O1xuXG52YXIgQXN5bmNDcmVhdGFibGVTZWxlY3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhBc3luY0NyZWF0YWJsZVNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXN5bmNDcmVhdGFibGVTZWxlY3QoKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQXN5bmNDcmVhdGFibGVTZWxlY3QpO1xuXHRcdHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBc3luY0NyZWF0YWJsZVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFzeW5jQ3JlYXRhYmxlU2VsZWN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhBc3luY0NyZWF0YWJsZVNlbGVjdCwgW3tcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5zZWxlY3QuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEFzeW5jLFxuXHRcdFx0XHR0aGlzLnByb3BzLFxuXHRcdFx0XHRmdW5jdGlvbiAoX3JlZikge1xuXHRcdFx0XHRcdHZhciByZWYgPSBfcmVmLnJlZixcblx0XHRcdFx0XHQgICAgYXN5bmNQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsncmVmJ10pO1xuXG5cdFx0XHRcdFx0dmFyIGFzeW5jUmVmID0gcmVmO1xuXHRcdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0Q3JlYXRhYmxlU2VsZWN0LFxuXHRcdFx0XHRcdFx0YXN5bmNQcm9wcyxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfcmVmMikge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVmID0gX3JlZjIucmVmLFxuXHRcdFx0XHRcdFx0XHQgICAgY3JlYXRhYmxlUHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydyZWYnXSk7XG5cblx0XHRcdFx0XHRcdFx0dmFyIGNyZWF0YWJsZVJlZiA9IHJlZjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzMi5wcm9wcy5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgY3JlYXRhYmxlUHJvcHMsIHtcblx0XHRcdFx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihzZWxlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNyZWF0YWJsZVJlZihzZWxlY3QpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXN5bmNSZWYoc2VsZWN0KTtcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzMi5zZWxlY3QgPSBzZWxlY3Q7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIEFzeW5jQ3JlYXRhYmxlU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgZGVmYXVsdENoaWxkcmVuJDEgPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0JDEsIHByb3BzKTtcbn07XG5cbkFzeW5jQ3JlYXRhYmxlU2VsZWN0LnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgLy8gQ2hpbGQgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBTZWxlY3QgY29tcG9uZW50OyAocHJvcHM6IE9iamVjdCk6IFByb3BUeXBlcy5lbGVtZW50XG59O1xuXG5Bc3luY0NyZWF0YWJsZVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBkZWZhdWx0Q2hpbGRyZW4kMVxufTtcblxuU2VsZWN0JDEuQXN5bmMgPSBBc3luYztcblNlbGVjdCQxLkFzeW5jQ3JlYXRhYmxlID0gQXN5bmNDcmVhdGFibGVTZWxlY3Q7XG5TZWxlY3QkMS5DcmVhdGFibGUgPSBDcmVhdGFibGVTZWxlY3Q7XG5TZWxlY3QkMS5WYWx1ZSA9IFZhbHVlO1xuU2VsZWN0JDEuT3B0aW9uID0gT3B0aW9uO1xuXG5leHBvcnQgeyBBc3luYywgQXN5bmNDcmVhdGFibGVTZWxlY3QgYXMgQXN5bmNDcmVhdGFibGUsIENyZWF0YWJsZVNlbGVjdCBhcyBDcmVhdGFibGUsIFZhbHVlLCBPcHRpb24sIG1lbnVSZW5kZXJlciBhcyBkZWZhdWx0TWVudVJlbmRlcmVyLCBhcnJvd1JlbmRlcmVyIGFzIGRlZmF1bHRBcnJvd1JlbmRlcmVyLCBjbGVhclJlbmRlcmVyIGFzIGRlZmF1bHRDbGVhclJlbmRlcmVyLCBmaWx0ZXJPcHRpb25zIGFzIGRlZmF1bHRGaWx0ZXJPcHRpb25zIH07XG5leHBvcnQgZGVmYXVsdCBTZWxlY3QkMTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM1FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==