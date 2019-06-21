(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 2600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(2601);

var _Select2 = _interopRequireDefault(_Select);

var _stripDiacritics = __webpack_require__(2606);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	autoload: _propTypes2.default.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: _propTypes2.default.any, // object to use to cache results; set to null/false to disable caching
	children: _propTypes2.default.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: _propTypes2.default.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: _propTypes2.default.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: _propTypes2.default.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: _propTypes2.default.oneOfType([// replaces the placeholder while options are loading
	_propTypes2.default.string, _propTypes2.default.node]),
	multi: _propTypes2.default.bool, // multi-value input
	noResultsText: _propTypes2.default.oneOfType([// field noResultsText, displayed when no options come back from the server
	_propTypes2.default.string, _propTypes2.default.node]),
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onInputChange: _propTypes2.default.func, // optional for keeping track of what is being typed
	options: _propTypes2.default.array.isRequired, // array of options
	placeholder: _propTypes2.default.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	_propTypes2.default.string, _propTypes2.default.node]),
	searchPromptText: _propTypes2.default.oneOfType([// label to prompt for search input
	_propTypes2.default.string, _propTypes2.default.node]),
	value: _propTypes2.default.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
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
	_inherits(Async, _Component);

	function Async(props, context) {
		_classCallCheck(this, Async);

		var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	_createClass(Async, [{
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
				transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue);
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
}(_react.Component);

exports.default = Async;


Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

/***/ }),

/***/ 2601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*!
                                                                                                                                                                                                                                                                                Copyright (c) 2018 Jed Watson.
                                                                                                                                                                                                                                                                                Licensed under the MIT License (MIT), see
                                                                                                                                                                                                                                                                                http://jedwatson.github.io/react-select
                                                                                                                                                                                                                                                                              */


var _reactInputAutosize = __webpack_require__(2602);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = __webpack_require__(931);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(386);

var _defaultArrowRenderer = __webpack_require__(2603);

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultClearRenderer = __webpack_require__(2604);

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _defaultFilterOptions = __webpack_require__(2605);

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__(2608);

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _Option = __webpack_require__(2609);

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__(2611);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);
var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

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

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

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

	_createClass(Select, [{
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
				var focusedOptionNode = (0, _reactDom.findDOMNode)(this.focused);
				var menuNode = (0, _reactDom.findDOMNode)(this.menu);

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
				var focusedDOM = (0, _reactDom.findDOMNode)(this.focused);
				var menuDOM = (0, _reactDom.findDOMNode)(this.menu);
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
			return _react2.default.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2.default.createElement('span', { className: 'Select-loading' })
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
				return showPlaceholder ? _react2.default.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2.default.createElement(
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
						_react2.default.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return _react2.default.createElement(
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

			var className = (0, _classnames2.default)('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

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
				var divProps = _objectWithoutProperties(this.props.inputProps, []);

				var _ariaOwns = (0, _classnames2.default)(_defineProperty({}, this._instancePrefix + '-list', isOpen));
				return _react2.default.createElement('div', _extends({}, divProps, {
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
				return _react2.default.createElement(_reactInputAutosize2.default, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return _react2.default.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				_react2.default.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return _react2.default.createElement(
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

			return _react2.default.createElement(
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
		value: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;

				return filterOptions(options, filterValue, excludeOptions, {
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
				return _react2.default.createElement(
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
				return _react2.default.createElement('input', {
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
				return _react2.default.createElement('input', {
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

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2.default.createElement(
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
			var className = (0, _classnames2.default)('Select', this.props.className, {
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
				removeMessage = _react2.default.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2.default.createElement(
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
					_react2.default.createElement(
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
}(_react2.default.Component);

Select.propTypes = {
	'aria-describedby': _propTypes2.default.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': _propTypes2.default.string, // aria label (for assistive tech)
	'aria-labelledby': _propTypes2.default.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: _propTypes2.default.func, // create the drop-down caret element
	autoBlur: _propTypes2.default.bool, // automatically blur the component when an option is selected
	autoFocus: _propTypes2.default.bool, // autofocus the component on mount
	autofocus: _propTypes2.default.bool, // deprecated; use autoFocus instead
	autosize: _propTypes2.default.bool, // whether to enable autosizing or not
	backspaceRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: _propTypes2.default.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: _propTypes2.default.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: _propTypes2.default.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: _propTypes2.default.bool, // should it be possible to reset value
	closeOnSelect: _propTypes2.default.bool, // whether to close the menu when a value is selected
	deleteRemoves: _propTypes2.default.bool, // whether delete removes an item if there is no text input
	delimiter: _propTypes2.default.string, // delimiter to use to join multiple values for the hidden field value
	disabled: _propTypes2.default.bool, // whether the Select is disabled or not
	escapeClearsValue: _propTypes2.default.bool, // whether escape clears the value when the menu is closed
	filterOption: _propTypes2.default.func, // method to filter a single option (option, filterString)
	filterOptions: _propTypes2.default.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: _propTypes2.default.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: _propTypes2.default.bool, // whether to strip diacritics when filtering
	ignoreCase: _propTypes2.default.bool, // whether to perform case-insensitive filtering
	inputProps: _propTypes2.default.object, // custom attributes for the Input
	inputRenderer: _propTypes2.default.func, // returns a custom input component
	instanceId: _propTypes2.default.string, // set the components instanceId
	isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: _propTypes2.default.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: _propTypes2.default.string, // path of the label value in option objects
	matchPos: _propTypes2.default.string, // (any|start) match the start or entire string when filtering
	matchProp: _propTypes2.default.string, // (any|label|value) which option property to filter on
	menuBuffer: _propTypes2.default.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: _propTypes2.default.object, // optional style to apply to the menu container
	menuRenderer: _propTypes2.default.func, // renders a custom menu with options
	menuStyle: _propTypes2.default.object, // optional style to apply to the menu
	multi: _propTypes2.default.bool, // multi-value input
	name: _propTypes2.default.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: _propTypes2.default.func, // onBlur handler: function (event) {}
	onBlurResetsInput: _propTypes2.default.bool, // whether input is cleared on blur
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onClose: _propTypes2.default.func, // fires when the menu is closed
	onCloseResetsInput: _propTypes2.default.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: _propTypes2.default.func, // onFocus handler: function (event) {}
	onInputChange: _propTypes2.default.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: _propTypes2.default.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: _propTypes2.default.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: _propTypes2.default.func, // fires when the menu is opened
	onSelectResetsInput: _propTypes2.default.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: _propTypes2.default.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: _propTypes2.default.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: _propTypes2.default.bool, // always open options menu on focus
	optionClassName: _propTypes2.default.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: _propTypes2.default.func, // option component to render in dropdown
	optionRenderer: _propTypes2.default.func, // optionRenderer: function (option) {}
	options: _propTypes2.default.array, // array of options
	pageSize: _propTypes2.default.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: _propTypes2.default.bool, // whether the selected option is removed from the dropdown on multi selects
	required: _propTypes2.default.bool, // applies HTML5 required attribute when needed
	resetValue: _propTypes2.default.any, // value to use when you clear the control
	rtl: _propTypes2.default.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: _propTypes2.default.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: _propTypes2.default.bool, // whether to enable searching feature or not
	simpleValue: _propTypes2.default.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: _propTypes2.default.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: _propTypes2.default.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: _propTypes2.default.bool, // whether to trim whitespace around filter value
	value: _propTypes2.default.any, // initial field value
	valueComponent: _propTypes2.default.func, // value component to render
	valueKey: _propTypes2.default.string, // path of the label value in option objects
	valueRenderer: _propTypes2.default.func, // valueRenderer: function (option) {}
	wrapperStyle: _propTypes2.default.object // optional style to apply to the component wrapper
};

Select.defaultProps = {
	arrowRenderer: _defaultArrowRenderer2.default,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: _defaultClearRenderer2.default,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: _defaultFilterOptions2.default,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: _defaultMenuRenderer2.default,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: _Option2.default,
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
	valueComponent: _Value2.default,
	valueKey: 'value'
};

exports.default = Select;

/***/ }),

/***/ 2603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2.default.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: _propTypes2.default.func
};

exports.default = arrowRenderer;

/***/ }),

/***/ 2604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearRenderer = function clearRenderer() {
	return _react2.default.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

exports.default = clearRenderer;

/***/ }),

/***/ 2605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stripDiacritics = __webpack_require__(2606);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

var _trim = __webpack_require__(2607);

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = (0, _stripDiacritics2.default)(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = (0, _trim2.default)(filterValue);
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
			if (valueTest && props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

exports.default = filterOptions;

/***/ }),

/***/ 2606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

exports.default = stripDiacritics;

/***/ }),

/***/ 2607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

exports.default = trim;

/***/ }),

/***/ 2608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__(931);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		var optionClass = (0, _classnames2.default)(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2.default.createElement(
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
	focusOption: _propTypes2.default.func,
	focusedOption: _propTypes2.default.object,
	inputValue: _propTypes2.default.string,
	instancePrefix: _propTypes2.default.string,
	onFocus: _propTypes2.default.func,
	onOptionRef: _propTypes2.default.func,
	onSelect: _propTypes2.default.func,
	optionClassName: _propTypes2.default.string,
	optionComponent: _propTypes2.default.func,
	optionRenderer: _propTypes2.default.func,
	options: _propTypes2.default.array,
	removeValue: _propTypes2.default.func,
	selectValue: _propTypes2.default.func,
	valueArray: _propTypes2.default.array,
	valueKey: _propTypes2.default.string
};

exports.default = menuRenderer;

/***/ }),

/***/ 2609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(931);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _blockEvent = __webpack_require__(2610);

var _blockEvent2 = _interopRequireDefault(_blockEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	_createClass(Option, [{
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

			var className = (0, _classnames2.default)(this.props.className, option.className);

			return option.disabled ? _react2.default.createElement(
				'div',
				{ className: className,
					onMouseDown: _blockEvent2.default,
					onClick: _blockEvent2.default },
				this.props.children
			) : _react2.default.createElement(
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
}(_react2.default.Component);

Option.propTypes = {
	children: _propTypes2.default.node,
	className: _propTypes2.default.string, // className (based on mouse position)
	instancePrefix: _propTypes2.default.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: _propTypes2.default.bool, // the option is disabled
	isFocused: _propTypes2.default.bool, // the option is focused
	isSelected: _propTypes2.default.bool, // the option is selected
	onFocus: _propTypes2.default.func, // method to handle mouseEnter on option element
	onSelect: _propTypes2.default.func, // method to handle click on option element
	onUnfocus: _propTypes2.default.func, // method to handle mouseLeave on option element
	option: _propTypes2.default.object.isRequired, // object that is base for that option
	optionIndex: _propTypes2.default.number // index of the option, used to generate unique ids for aria
};

exports.default = Option;

/***/ }),

/***/ 2610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (event) {
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
};

/***/ }),

/***/ 2611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(931);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_React$Component) {
	_inherits(Value, _React$Component);

	function Value(props) {
		_classCallCheck(this, Value);

		var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	_createClass(Value, [{
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
			return _react2.default.createElement(
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
			return this.props.onClick || this.props.value.href ? _react2.default.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2.default.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);

	return Value;
}(_react2.default.Component);

Value.propTypes = {
	children: _propTypes2.default.node,
	disabled: _propTypes2.default.bool, // disabled prop passed to ReactSelect
	id: _propTypes2.default.string, // Unique id for the value - used for aria
	onClick: _propTypes2.default.func, // method to handle click on value label
	onRemove: _propTypes2.default.func, // method to handle removal of the value
	value: _propTypes2.default.object.isRequired // the option object for this value
};

exports.default = Value;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzLmM3YjlmMzk0ZGU5OGYxM2FlZDhkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRBcnJvd1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRDbGVhclJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRGaWx0ZXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL3N0cmlwRGlhY3JpdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy90cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRNZW51UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvT3B0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2Jsb2NrRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvVmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfU2VsZWN0ID0gcmVxdWlyZSgnLi9TZWxlY3QnKTtcblxudmFyIF9TZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VsZWN0KTtcblxudmFyIF9zdHJpcERpYWNyaXRpY3MgPSByZXF1aXJlKCcuL3V0aWxzL3N0cmlwRGlhY3JpdGljcycpO1xuXG52YXIgX3N0cmlwRGlhY3JpdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcERpYWNyaXRpY3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG5cdGF1dG9sb2FkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCwgLy8gYXV0b21hdGljYWxseSBjYWxsIHRoZSBgbG9hZE9wdGlvbnNgIHByb3Agb24tbW91bnQ7IGRlZmF1bHRzIHRvIHRydWVcblx0Y2FjaGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBvYmplY3QgdG8gdXNlIHRvIGNhY2hlIHJlc3VsdHM7IHNldCB0byBudWxsL2ZhbHNlIHRvIGRpc2FibGUgY2FjaGluZ1xuXHRjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsIC8vIENoaWxkIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaW5uZXIgU2VsZWN0IGNvbXBvbmVudDsgKHByb3BzOiBPYmplY3QpOiBQcm9wVHlwZXMuZWxlbWVudFxuXHRpZ25vcmVBY2NlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHN0cmlwIGRpYWNyaXRpY3Mgd2hlbiBmaWx0ZXJpbmc7IGRlZmF1bHRzIHRvIHRydWVcblx0aWdub3JlQ2FzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBwZXJmb3JtIGNhc2UtaW5zZW5zaXRpdmUgZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGxvYWRPcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCwgLy8gY2FsbGJhY2sgdG8gbG9hZCBvcHRpb25zIGFzeW5jaHJvbm91c2x5OyAoaW5wdXRWYWx1ZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiA/UHJvbWlzZVxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyByZXBsYWNlcyB0aGUgcGxhY2Vob2xkZXIgd2hpbGUgb3B0aW9ucyBhcmUgbG9hZGluZ1xuXHRfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG5cdG11bHRpOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIG11bHRpLXZhbHVlIGlucHV0XG5cdG5vUmVzdWx0c1RleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBmaWVsZCBub1Jlc3VsdHNUZXh0LCBkaXNwbGF5ZWQgd2hlbiBubyBvcHRpb25zIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuXHRvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb3B0aW9uYWwgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hhdCBpcyBiZWluZyB0eXBlZFxuXHRvcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LmlzUmVxdWlyZWQsIC8vIGFycmF5IG9mIG9wdGlvbnNcblx0cGxhY2Vob2xkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZSAoc2hhcmVkIHdpdGggU2VsZWN0KVxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG5cdHNlYXJjaFByb21wdFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBsYWJlbCB0byBwcm9tcHQgZm9yIHNlYXJjaCBpbnB1dFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSAvLyBpbml0aWFsIGZpZWxkIHZhbHVlXG59O1xuXG52YXIgZGVmYXVsdENhY2hlID0ge307XG5cbnZhciBkZWZhdWx0Q2hpbGRyZW4gPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TZWxlY3QyLmRlZmF1bHQsIHByb3BzKTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG5cdGF1dG9sb2FkOiB0cnVlLFxuXHRjYWNoZTogZGVmYXVsdENhY2hlLFxuXHRjaGlsZHJlbjogZGVmYXVsdENoaWxkcmVuLFxuXHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRpZ25vcmVDYXNlOiB0cnVlLFxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6ICdMb2FkaW5nLi4uJyxcblx0b3B0aW9uczogW10sXG5cdHNlYXJjaFByb21wdFRleHQ6ICdUeXBlIHRvIHNlYXJjaCdcbn07XG5cbnZhciBBc3luYyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhBc3luYywgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXN5bmMocHJvcHMsIGNvbnRleHQpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXN5bmMpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFzeW5jLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXN5bmMpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cblx0XHRfdGhpcy5fY2FjaGUgPSBwcm9wcy5jYWNoZSA9PT0gZGVmYXVsdENhY2hlID8ge30gOiBwcm9wcy5jYWNoZTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0b3B0aW9uczogcHJvcHMub3B0aW9uc1xuXHRcdH07XG5cblx0XHRfdGhpcy5vbklucHV0Q2hhbmdlID0gX3RoaXMub25JbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXN5bmMsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdHZhciBhdXRvbG9hZCA9IHRoaXMucHJvcHMuYXV0b2xvYWQ7XG5cblxuXHRcdFx0aWYgKGF1dG9sb2FkKSB7XG5cdFx0XHRcdHRoaXMubG9hZE9wdGlvbnMoJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdFx0aWYgKG5leHRQcm9wcy5vcHRpb25zICE9PSB0aGlzLnByb3BzLm9wdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0b3B0aW9uczogbmV4dFByb3BzLm9wdGlvbnNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsb2FkT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxvYWRPcHRpb25zKGlucHV0VmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHR2YXIgbG9hZE9wdGlvbnMgPSB0aGlzLnByb3BzLmxvYWRPcHRpb25zO1xuXG5cdFx0XHR2YXIgY2FjaGUgPSB0aGlzLl9jYWNoZTtcblxuXHRcdFx0aWYgKGNhY2hlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaW5wdXRWYWx1ZSkpIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0b3B0aW9uczogY2FjaGVbaW5wdXRWYWx1ZV1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhlcnJvciwgZGF0YSkge1xuXHRcdFx0XHR2YXIgb3B0aW9ucyA9IGRhdGEgJiYgZGF0YS5vcHRpb25zIHx8IFtdO1xuXG5cdFx0XHRcdGlmIChjYWNoZSkge1xuXHRcdFx0XHRcdGNhY2hlW2lucHV0VmFsdWVdID0gb3B0aW9ucztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PT0gX3RoaXMyLl9jYWxsYmFjaykge1xuXHRcdFx0XHRcdF90aGlzMi5fY2FsbGJhY2sgPSBudWxsO1xuXG5cdFx0XHRcdFx0X3RoaXMyLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBvcHRpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdC8vIElnbm9yZSBhbGwgYnV0IHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0XG5cdFx0XHR0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdFx0XHR2YXIgcHJvbWlzZSA9IGxvYWRPcHRpb25zKGlucHV0VmFsdWUsIGNhbGxiYWNrKTtcblx0XHRcdGlmIChwcm9taXNlKSB7XG5cdFx0XHRcdHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhudWxsLCBkYXRhKTtcblx0XHRcdFx0fSwgZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jYWxsYmFjayAmJiAhdGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNMb2FkaW5nOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGlnbm9yZUFjY2VudHMgPSBfcHJvcHMuaWdub3JlQWNjZW50cyxcblx0XHRcdCAgICBpZ25vcmVDYXNlID0gX3Byb3BzLmlnbm9yZUNhc2UsXG5cdFx0XHQgICAgb25JbnB1dENoYW5nZSA9IF9wcm9wcy5vbklucHV0Q2hhbmdlO1xuXG5cdFx0XHR2YXIgbmV3SW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG5cblx0XHRcdGlmIChvbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IG9uSW5wdXRDaGFuZ2UobmV3SW5wdXRWYWx1ZSk7XG5cdFx0XHRcdC8vIE5vdGU6ICE9IHVzZWQgZGVsaWJlcmF0ZWx5IGhlcmUgdG8gY2F0Y2ggdW5kZWZpbmVkIGFuZCBudWxsXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0bmV3SW5wdXRWYWx1ZSA9ICcnICsgdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9IG5ld0lucHV0VmFsdWU7XG5cblx0XHRcdGlmIChpZ25vcmVBY2NlbnRzKSB7XG5cdFx0XHRcdHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9ICgwLCBfc3RyaXBEaWFjcml0aWNzMi5kZWZhdWx0KSh0cmFuc2Zvcm1lZElucHV0VmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlQ2FzZSkge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSB0cmFuc2Zvcm1lZElucHV0VmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IG5ld0lucHV0VmFsdWUgfSk7XG5cdFx0XHR0aGlzLmxvYWRPcHRpb25zKHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSk7XG5cblx0XHRcdC8vIFJldHVybiBuZXcgaW5wdXQgdmFsdWUsIGJ1dCB3aXRob3V0IGFwcGx5aW5nIHRvTG93ZXJDYXNlKCkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSB1c2VyJ3MgdmlldyBjYXNlIG9mIHRoZSBpbnB1dCB3aGlsZSB0eXBpbmcuXG5cdFx0XHRyZXR1cm4gbmV3SW5wdXRWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdub1Jlc3VsdHNUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbm9SZXN1bHRzVGV4dCgpIHtcblx0XHRcdHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBsb2FkaW5nUGxhY2Vob2xkZXIgPSBfcHJvcHMyLmxvYWRpbmdQbGFjZWhvbGRlcixcblx0XHRcdCAgICBub1Jlc3VsdHNUZXh0ID0gX3Byb3BzMi5ub1Jlc3VsdHNUZXh0LFxuXHRcdFx0ICAgIHNlYXJjaFByb21wdFRleHQgPSBfcHJvcHMyLnNlYXJjaFByb21wdFRleHQ7XG5cdFx0XHR2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHRcdCAgICBpbnB1dFZhbHVlID0gX3N0YXRlLmlucHV0VmFsdWUsXG5cdFx0XHQgICAgaXNMb2FkaW5nID0gX3N0YXRlLmlzTG9hZGluZztcblxuXG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBsb2FkaW5nUGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5wdXRWYWx1ZSAmJiBub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBub1Jlc3VsdHNUZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlYXJjaFByb21wdFRleHQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG5cdFx0XHQgICAgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMy5sb2FkaW5nUGxhY2Vob2xkZXIsXG5cdFx0XHQgICAgcGxhY2Vob2xkZXIgPSBfcHJvcHMzLnBsYWNlaG9sZGVyO1xuXHRcdFx0dmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuXHRcdFx0ICAgIGlzTG9hZGluZyA9IF9zdGF0ZTIuaXNMb2FkaW5nLFxuXHRcdFx0ICAgIG9wdGlvbnMgPSBfc3RhdGUyLm9wdGlvbnM7XG5cblxuXHRcdFx0dmFyIHByb3BzID0ge1xuXHRcdFx0XHRub1Jlc3VsdHNUZXh0OiB0aGlzLm5vUmVzdWx0c1RleHQoKSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGlzTG9hZGluZyA/IGxvYWRpbmdQbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyLFxuXHRcdFx0XHRvcHRpb25zOiBpc0xvYWRpbmcgJiYgbG9hZGluZ1BsYWNlaG9sZGVyID8gW10gOiBvcHRpb25zLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzMy5zZWxlY3QgPSBfcmVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzLCB7XG5cdFx0XHRcdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRcdFx0XHRvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2Vcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXN5bmM7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBc3luYztcblxuXG5Bc3luYy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Bc3luYy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IC8qIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vcmVhY3Qtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfcmVhY3RJbnB1dEF1dG9zaXplID0gcmVxdWlyZSgncmVhY3QtaW5wdXQtYXV0b3NpemUnKTtcblxudmFyIF9yZWFjdElucHV0QXV0b3NpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJbnB1dEF1dG9zaXplKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9kZWZhdWx0QXJyb3dSZW5kZXJlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmYXVsdEFycm93UmVuZGVyZXInKTtcblxudmFyIF9kZWZhdWx0QXJyb3dSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0QXJyb3dSZW5kZXJlcik7XG5cbnZhciBfZGVmYXVsdENsZWFyUmVuZGVyZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRDbGVhclJlbmRlcmVyJyk7XG5cbnZhciBfZGVmYXVsdENsZWFyUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdENsZWFyUmVuZGVyZXIpO1xuXG52YXIgX2RlZmF1bHRGaWx0ZXJPcHRpb25zID0gcmVxdWlyZSgnLi91dGlscy9kZWZhdWx0RmlsdGVyT3B0aW9ucycpO1xuXG52YXIgX2RlZmF1bHRGaWx0ZXJPcHRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRGaWx0ZXJPcHRpb25zKTtcblxudmFyIF9kZWZhdWx0TWVudVJlbmRlcmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZhdWx0TWVudVJlbmRlcmVyJyk7XG5cbnZhciBfZGVmYXVsdE1lbnVSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0TWVudVJlbmRlcmVyKTtcblxudmFyIF9PcHRpb24gPSByZXF1aXJlKCcuL09wdGlvbicpO1xuXG52YXIgX09wdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PcHRpb24pO1xuXG52YXIgX1ZhbHVlID0gcmVxdWlyZSgnLi9WYWx1ZScpO1xuXG52YXIgX1ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHJpbmdpZnlWYWx1ZSA9IGZ1bmN0aW9uIHN0cmluZ2lmeVZhbHVlKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZSAhPT0gbnVsbCAmJiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgfHwgJyc7XG59O1xuXG52YXIgc3RyaW5nT3JOb2RlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVdKTtcbnZhciBzdHJpbmdPck51bWJlciA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKTtcblxudmFyIGluc3RhbmNlSWQgPSAxO1xuXG52YXIgc2hvdWxkU2hvd1ZhbHVlID0gZnVuY3Rpb24gc2hvdWxkU2hvd1ZhbHVlKHN0YXRlLCBwcm9wcykge1xuXHR2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWUsXG5cdCAgICBpc1BzZXVkb0ZvY3VzZWQgPSBzdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdCAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQ7XG5cdHZhciBvblNlbGVjdFJlc2V0c0lucHV0ID0gcHJvcHMub25TZWxlY3RSZXNldHNJbnB1dDtcblxuXG5cdGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuIHRydWU7XG5cblx0aWYgKCFvblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0cmV0dXJuICEoIWlzRm9jdXNlZCAmJiBpc1BzZXVkb0ZvY3VzZWQgfHwgaXNGb2N1c2VkICYmICFpc1BzZXVkb0ZvY3VzZWQpO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNob3VsZFNob3dQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNob3VsZFNob3dQbGFjZWhvbGRlcihzdGF0ZSwgcHJvcHMsIGlzT3Blbikge1xuXHR2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWUsXG5cdCAgICBpc1BzZXVkb0ZvY3VzZWQgPSBzdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdCAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQ7XG5cdHZhciBvblNlbGVjdFJlc2V0c0lucHV0ID0gcHJvcHMub25TZWxlY3RSZXNldHNJbnB1dDtcblxuXG5cdHJldHVybiAhaW5wdXRWYWx1ZSB8fCAhb25TZWxlY3RSZXNldHNJbnB1dCAmJiAhaXNPcGVuICYmICFpc1BzZXVkb0ZvY3VzZWQgJiYgIWlzRm9jdXNlZDtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgYSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zIGFuZCB2YWx1ZUtleVxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfEFycmF5fSB2YWx1ZVx0LSB0aGUgc2VsZWN0ZWQgdmFsdWUocylcbiAqIEBwYXJhbSB7T2JqZWN0fVx0XHQgcHJvcHNcdC0gdGhlIFNlbGVjdCBjb21wb25lbnQncyBwcm9wcyAob3IgbmV4dFByb3BzKVxuICovXG52YXIgZXhwYW5kVmFsdWUgPSBmdW5jdGlvbiBleHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpIHtcblx0dmFyIHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXHRpZiAodmFsdWVUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWx1ZVR5cGUgIT09ICdudW1iZXInICYmIHZhbHVlVHlwZSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWU7XG5cdHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcblx0ICAgIHZhbHVlS2V5ID0gcHJvcHMudmFsdWVLZXk7XG5cblx0aWYgKCFvcHRpb25zKSByZXR1cm47XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChTdHJpbmcob3B0aW9uc1tpXVt2YWx1ZUtleV0pID09PSBTdHJpbmcodmFsdWUpKSByZXR1cm4gb3B0aW9uc1tpXTtcblx0fVxufTtcblxudmFyIGhhbmRsZVJlcXVpcmVkID0gZnVuY3Rpb24gaGFuZGxlUmVxdWlyZWQodmFsdWUsIG11bHRpKSB7XG5cdGlmICghdmFsdWUpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gbXVsdGkgPyB2YWx1ZS5sZW5ndGggPT09IDAgOiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xufTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdFsnY2xlYXJWYWx1ZScsICdmb2N1c09wdGlvbicsICdnZXRPcHRpb25MYWJlbCcsICdoYW5kbGVJbnB1dEJsdXInLCAnaGFuZGxlSW5wdXRDaGFuZ2UnLCAnaGFuZGxlSW5wdXRGb2N1cycsICdoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlJywgJ2hhbmRsZUtleURvd24nLCAnaGFuZGxlTWVudVNjcm9sbCcsICdoYW5kbGVNb3VzZURvd24nLCAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsICdoYW5kbGVNb3VzZURvd25Pbk1lbnUnLCAnaGFuZGxlVG91Y2hFbmQnLCAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJywgJ2hhbmRsZVRvdWNoTW92ZScsICdoYW5kbGVUb3VjaE91dHNpZGUnLCAnaGFuZGxlVG91Y2hTdGFydCcsICdoYW5kbGVWYWx1ZUNsaWNrJywgJ29uT3B0aW9uUmVmJywgJ3JlbW92ZVZhbHVlJywgJ3NlbGVjdFZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcblx0XHRcdHJldHVybiBfdGhpc1tmbl0gPSBfdGhpc1tmbl0uYmluZChfdGhpcyk7XG5cdFx0fSk7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VmFsdWU6ICcnLFxuXHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRcdHRoaXMuX2luc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKHRoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpICsgJy0nO1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHJlcXVpcmVkOiBoYW5kbGVSZXF1aXJlZCh2YWx1ZUFycmF5WzBdLCB0aGlzLnByb3BzLm11bHRpKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLmF1dG9mb2N1cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignV2FybmluZzogVGhlIGF1dG9mb2N1cyBwcm9wIGhhcyBjaGFuZ2VkIHRvIGF1dG9Gb2N1cywgc3VwcG9ydCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgcmVhY3Qtc2VsZWN0QDEuMCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzIHx8IHRoaXMucHJvcHMuYXV0b2ZvY3VzKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KG5leHRQcm9wcy52YWx1ZSwgbmV4dFByb3BzKTtcblxuXHRcdFx0aWYgKG5leHRQcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRyZXF1aXJlZDogaGFuZGxlUmVxdWlyZWQodmFsdWVBcnJheVswXSwgbmV4dFByb3BzLm11bHRpKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHQvLyBVc2VkIHRvIGJlIHJlcXVpcmVkIGJ1dCBpdCdzIG5vdCBhbnkgbW9yZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVxdWlyZWQ6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSAmJiBuZXh0UHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHRcdC8vIGZvY3VzIHRvIHRoZSBzZWxlY3RlZCBvcHRpb25cblx0XHRcdGlmICh0aGlzLm1lbnUgJiYgdGhpcy5mb2N1c2VkICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICF0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24pIHtcblx0XHRcdFx0dmFyIGZvY3VzZWRPcHRpb25Ob2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5mb2N1c2VkKTtcblx0XHRcdFx0dmFyIG1lbnVOb2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5tZW51KTtcblxuXHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gbWVudU5vZGUuc2Nyb2xsVG9wO1xuXHRcdFx0XHR2YXIgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgbWVudU5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR2YXIgb3B0aW9uVG9wID0gZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0VG9wO1xuXHRcdFx0XHR2YXIgb3B0aW9uQm90dG9tID0gb3B0aW9uVG9wICsgZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHRcdGlmIChzY3JvbGxUb3AgPiBvcHRpb25Ub3AgfHwgc2Nyb2xsQm90dG9tIDwgb3B0aW9uQm90dG9tKSB7XG5cdFx0XHRcdFx0bWVudU5vZGUuc2Nyb2xsVG9wID0gZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0VG9wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2Ugc3RpbGwgc2V0IGhhc1Njcm9sbGVkVG9PcHRpb24gdG8gdHJ1ZSBldmVuIGlmIHdlIGRpZG4ndFxuXHRcdFx0XHQvLyBhY3R1YWxseSBuZWVkIHRvIHNjcm9sbCwgYXMgd2UndmUgc3RpbGwgY29uZmlybWVkIHRoYXQgdGhlXG5cdFx0XHRcdC8vIG9wdGlvbiBpcyBpbiB2aWV3LlxuXHRcdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5tZW51KSB7XG5cdFx0XHRcdHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRcdHZhciBmb2N1c2VkRE9NID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5mb2N1c2VkKTtcblx0XHRcdFx0dmFyIG1lbnVET00gPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzLm1lbnUpO1xuXHRcdFx0XHR2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHR2YXIgbWVudVJlY3QgPSBtZW51RE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAoZm9jdXNlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tKSB7XG5cdFx0XHRcdFx0bWVudURPTS5zY3JvbGxUb3AgPSBmb2N1c2VkRE9NLm9mZnNldFRvcCArIGZvY3VzZWRET00uY2xpZW50SGVpZ2h0IC0gbWVudURPTS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZm9jdXNlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG5cdFx0XHRcdFx0bWVudURPTS5zY3JvbGxUb3AgPSBmb2N1c2VkRE9NLm9mZnNldFRvcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuc2Nyb2xsTWVudUludG9WaWV3ICYmIHRoaXMubWVudUNvbnRhaW5lcikge1xuXHRcdFx0XHR2YXIgbWVudUNvbnRhaW5lclJlY3QgPSB0aGlzLm1lbnVDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCBtZW51Q29udGFpbmVyUmVjdC5ib3R0b20gKyB0aGlzLnByb3BzLm1lbnVCdWZmZXIpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgbWVudUNvbnRhaW5lclJlY3QuYm90dG9tICsgdGhpcy5wcm9wcy5tZW51QnVmZmVyIC0gd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZQcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZTdGF0ZS5pc09wZW4gIT09IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQodGhpcy5zdGF0ZS5pc09wZW4pO1xuXHRcdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMuc3RhdGUuaXNPcGVuID8gdGhpcy5wcm9wcy5vbk9wZW4gOiB0aGlzLnByb3BzLm9uQ2xvc2U7XG5cdFx0XHRcdGhhbmRsZXIgJiYgaGFuZGxlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KGZhbHNlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd0b2dnbGVUb3VjaE91dHNpZGVFdmVudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KGVuYWJsZWQpIHtcblx0XHRcdHZhciBldmVudFRvZ2dsZXJOYW1lID0gZW5hYmxlZCA/IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnIDogZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdkZXRhY2hFdmVudCc7XG5cdFx0XHR2YXIgcHJlZiA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgPyAnJyA6ICdvbic7XG5cblx0XHRcdGRvY3VtZW50W2V2ZW50VG9nZ2xlck5hbWVdKHByZWYgKyAndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHRcdGRvY3VtZW50W2V2ZW50VG9nZ2xlck5hbWVdKHByZWYgKyAnbW91c2Vkb3duJywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoT3V0c2lkZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoT3V0c2lkZShldmVudCkge1xuXHRcdFx0Ly8gaGFuZGxlIHRvdWNoIG91dHNpZGUgb24gaW9zIHRvIGRpc21pc3MgbWVudVxuXHRcdFx0aWYgKHRoaXMud3JhcHBlciAmJiAhdGhpcy53cmFwcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYmx1cklucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cklucHV0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cdFx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBGaXJlIHRoZSBtb3VzZSBldmVudHNcblx0XHRcdHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdC8vIENsZWFyIHRoZSB2YWx1ZVxuXHRcdFx0dGhpcy5jbGVhclZhbHVlKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRoaXMucHJvcHMub3Blbk9uQ2xpY2s7XG5cdFx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNPcGVuOiB0cnVlLFxuXHRcdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBmb3IgdGhlIG5vbi1zZWFyY2hhYmxlIHNlbGVjdCwgdG9nZ2xlIHRoZSBtZW51XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHQvLyBUaGlzIGNvZGUgbWVhbnMgdGhhdCBpZiBhIHNlbGVjdCBpcyBzZWFyY2hhYmxlLCBvbkNsaWNrIHRoZSBvcHRpb25zIG1lbnUgd2lsbCBub3QgYXBwZWFyLCBvbmx5IG9uIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBpdCBvcGVuLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46ICF0aGlzLnN0YXRlLmlzT3Blbixcblx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBudWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0Ly8gT24gaU9TLCB3ZSBjYW4gZ2V0IGludG8gYSBzdGF0ZSB3aGVyZSB3ZSB0aGluayB0aGUgaW5wdXQgaXMgZm9jdXNlZCBidXQgaXQgaXNuJ3QgcmVhbGx5LFxuXHRcdFx0XHQvLyBzaW5jZSBpT1MgaWdub3JlcyBwcm9ncmFtbWF0aWMgY2FsbHMgdG8gaW5wdXQuZm9jdXMoKSB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IGEgY2xpY2sgZXZlbnQuXG5cdFx0XHRcdC8vIENhbGwgZm9jdXMoKSBhZ2FpbiBoZXJlIHRvIGJlIHNhZmUuXG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblxuXHRcdFx0XHR2YXIgaW5wdXQgPSB0aGlzLmlucHV0O1xuXHRcdFx0XHR2YXIgdG9PcGVuID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGlucHV0LmdldElucHV0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Ly8gR2V0IHRoZSBhY3R1YWwgRE9NIGlucHV0IGlmIHRoZSByZWYgaXMgYW4gPEF1dG9zaXplSW5wdXQgLz4gY29tcG9uZW50XG5cdFx0XHRcdFx0aW5wdXQgPSBpbnB1dC5nZXRJbnB1dCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2xlYXJzIHRoZSB2YWx1ZSBzbyB0aGF0IHRoZSBjdXJzb3Igd2lsbCBiZSBhdCB0aGUgZW5kIG9mIGlucHV0IHdoZW4gdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XG5cblx0XHRcdFx0aWYgKHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhcikge1xuXHRcdFx0XHRcdHRvT3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgdGhlIGlucHV0IGlzIGZvY3VzZWQsIGVuc3VyZSB0aGUgbWVudSBpcyBvcGVuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogdG9PcGVuLFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyd2lzZSwgZm9jdXMgdGhlIGlucHV0IGFuZCBvcGVuIHRoZSBtZW51XG5cdFx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gdGhpcy5wcm9wcy5vcGVuT25DbGljaztcblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgZm9jdXNlZE9wdGlvbjogbnVsbCB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd25PbkFycm93Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25BcnJvdyhldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBvciBpZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyBjbG9zZSB0aGUgbWVudVxuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgdGhlIG1lbnUgaXNuJ3Qgb3BlbiwgbGV0IHRoZSBldmVudCBidWJibGUgdG8gdGhlIG1haW4gaGFuZGxlTW91c2VEb3duXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd25Pbk1lbnUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Pbk1lbnUoZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRydWU7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xvc2VNZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DbG9zZVJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyksXG5cdFx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRGb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Rm9jdXMoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cblx0XHRcdHZhciB0b09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbiB8fCB0aGlzLl9vcGVuQWZ0ZXJGb2N1cyB8fCB0aGlzLnByb3BzLm9wZW5PbkZvY3VzO1xuXHRcdFx0dG9PcGVuID0gdGhpcy5fZm9jdXNBZnRlckNsZWFyID8gZmFsc2UgOiB0b09wZW47IC8vaWYgZm9jdXMgaGFwcGVucyBhZnRlciBjbGVhciB2YWx1ZXMsIGRvbid0IG9wZW4gZHJvcGRvd24geWV0LlxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc0ZvY3VzZWQ6IHRydWUsXG5cdFx0XHRcdGlzT3BlbjogISF0b09wZW5cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSBmYWxzZTtcblx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRCbHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKGV2ZW50KSB7XG5cdFx0XHQvLyBUaGUgY2hlY2sgZm9yIG1lbnUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgSUUxMSdzIHNjcm9sbGJhciBmcm9tIGNsb3NpbmcgdGhlIG1lbnUgaW4gY2VydGFpbiBjb250ZXh0cy5cblx0XHRcdGlmICh0aGlzLm1lbnUgJiYgKHRoaXMubWVudSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCB0aGlzLm1lbnUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9uQmx1cnJlZFN0YXRlID0ge1xuXHRcdFx0XHRpc0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25CbHVyUmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0b25CbHVycmVkU3RhdGUuaW5wdXRWYWx1ZSA9IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKG9uQmx1cnJlZFN0YXRlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVJbnB1dENoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG5cdFx0XHR2YXIgbmV3SW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRcdG5ld0lucHV0VmFsdWUgPSB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UobmV3SW5wdXRWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFZhbHVlOiBuZXdJbnB1dFZhbHVlLFxuXHRcdFx0XHRpc09wZW46IHRydWUsXG5cdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NldElucHV0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuXHRcdFx0XHRpZiAobmV4dFN0YXRlICE9IG51bGwgJiYgKHR5cGVvZiBuZXh0U3RhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRTdGF0ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld1ZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFZhbHVlOiBuZXdWYWx1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWVDaGFuZ2UobmV3VmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSk7XG5cdFx0XHRcdC8vIE5vdGU6ICE9IHVzZWQgZGVsaWJlcmF0ZWx5IGhlcmUgdG8gY2F0Y2ggdW5kZWZpbmVkIGFuZCBudWxsXG5cdFx0XHRcdGlmIChuZXh0U3RhdGUgIT0gbnVsbCAmJiAodHlwZW9mIG5leHRTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dFN0YXRlKSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0bmV3VmFsdWUgPSAnJyArIG5leHRTdGF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUtleURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25JbnB1dEtleURvd24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbklucHV0S2V5RG93bihldmVudCk7XG5cdFx0XHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0XHRjYXNlIDg6XG5cdFx0XHRcdFx0Ly8gYmFja3NwYWNlXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy5iYWNrc3BhY2VSZW1vdmVzKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb3BWYWx1ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHRcdC8vIHRhYlxuXHRcdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSB8fCAhdGhpcy5zdGF0ZS5pc09wZW4gfHwgIXRoaXMucHJvcHMudGFiU2VsZWN0c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzpcblx0XHRcdFx0XHQvLyBlbnRlclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjc6XG5cdFx0XHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuY2xlYXJhYmxlICYmIHRoaXMucHJvcHMuZXNjYXBlQ2xlYXJzVmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xlYXJWYWx1ZShldmVudCk7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0Ly8gc3BhY2Vcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dE9wdGlvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0Rm9jdXNlZE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdC8vIHVwXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUHJldmlvdXNPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0XHQvLyBkb3duXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMzOlxuXHRcdFx0XHRcdC8vIHBhZ2UgdXBcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNQYWdlVXBPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0XHQvLyBwYWdlIGRvd25cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNQYWdlRG93bk9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM1OlxuXHRcdFx0XHRcdC8vIGVuZCBrZXlcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNFbmRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNjpcblx0XHRcdFx0XHQvLyBob21lIGtleVxuXHRcdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1N0YXJ0T3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDY6XG5cdFx0XHRcdFx0Ly8gZGVsZXRlXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy5kZWxldGVSZW1vdmVzKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb3BWYWx1ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVWYWx1ZUNsaWNrJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVmFsdWVDbGljayhvcHRpb24sIGV2ZW50KSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMub25WYWx1ZUNsaWNrKSByZXR1cm47XG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVDbGljayhvcHRpb24sIGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNZW51U2Nyb2xsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWVudVNjcm9sbChldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm9uTWVudVNjcm9sbFRvQm90dG9tKSByZXR1cm47XG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0XHRpZiAodGFyZ2V0LnNjcm9sbEhlaWdodCA+IHRhcmdldC5vZmZzZXRIZWlnaHQgJiYgdGFyZ2V0LnNjcm9sbEhlaWdodCAtIHRhcmdldC5vZmZzZXRIZWlnaHQgLSB0YXJnZXQuc2Nyb2xsVG9wIDw9IDApIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbk1lbnVTY3JvbGxUb0JvdHRvbSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldE9wdGlvbkxhYmVsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3ApIHtcblx0XHRcdHJldHVybiBvcFt0aGlzLnByb3BzLmxhYmVsS2V5XTtcblx0XHR9XG5cblx0XHQvKipcbiAgICogVHVybnMgYSB2YWx1ZSBpbnRvIGFuIGFycmF5IGZyb20gdGhlIGdpdmVuIG9wdGlvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfEFycmF5fSB2YWx1ZVx0XHQtIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0IGlucHV0XG4gICAqIEBwYXJhbSB7T2JqZWN0fVx0XHRuZXh0UHJvcHNcdC0gb3B0aW9uYWxseSBzcGVjaWZ5IHRoZSBuZXh0UHJvcHMgc28gdGhlIHJldHVybmVkIGFycmF5IHVzZXMgdGhlIGxhdGVzdCBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm5zXHR7QXJyYXl9XHR0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCByZXByZXNlbnRlZCBpbiBhbiBhcnJheVxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0VmFsdWVBcnJheScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlQXJyYXkodmFsdWUpIHtcblx0XHRcdHZhciBuZXh0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0LyoqIHN1cHBvcnQgb3B0aW9uYWxseSBwYXNzaW5nIGluIHRoZSBgbmV4dFByb3BzYCBzbyBgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc2AgdXBkYXRlcyB3aWxsIGZ1bmN0aW9uIGFzIGV4cGVjdGVkICovXG5cdFx0XHR2YXIgcHJvcHMgPSAodHlwZW9mIG5leHRQcm9wcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dFByb3BzKSkgPT09ICdvYmplY3QnID8gbmV4dFByb3BzIDogdGhpcy5wcm9wcztcblx0XHRcdGlmIChwcm9wcy5tdWx0aSkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQocHJvcHMuZGVsaW1pdGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBbXTtcblx0XHRcdFx0XHR2YWx1ZSA9IFt2YWx1ZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKTtcblx0XHRcdFx0fSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGV4cGFuZGVkVmFsdWUgPSBleHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpO1xuXHRcdFx0cmV0dXJuIGV4cGFuZGVkVmFsdWUgPyBbZXhwYW5kZWRWYWx1ZV0gOiBbXTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b0JsdXIpIHtcblx0XHRcdFx0dGhpcy5ibHVySW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHZhciByZXF1aXJlZCA9IGhhbmRsZVJlcXVpcmVkKHZhbHVlLCB0aGlzLnByb3BzLm11bHRpKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlcXVpcmVkOiByZXF1aXJlZCB9KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnNpbXBsZVZhbHVlICYmIHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gdGhpcy5wcm9wcy5tdWx0aSA/IHZhbHVlLm1hcChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBpW190aGlzMi5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpIDogdmFsdWVbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZWxlY3RWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdFx0Ly8gTk9URTogd2UgYWN0dWFsbHkgYWRkL3NldCB0aGUgdmFsdWUgaW4gYSBjYWxsYmFjayB0byBtYWtlIHN1cmUgdGhlXG5cdFx0XHQvLyBpbnB1dCB2YWx1ZSBpcyBlbXB0eSB0byBhdm9pZCBzdHlsaW5nIGlzc3VlcyBpbiBDaHJvbWVcblx0XHRcdGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdXBkYXRlZFZhbHVlID0gdGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0ID8gJycgOiB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXg6IG51bGwsXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKHVwZGF0ZWRWYWx1ZSksXG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0XG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVBcnJheSA9IF90aGlzMy5nZXRWYWx1ZUFycmF5KF90aGlzMy5wcm9wcy52YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlQXJyYXkuc29tZShmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGlbX3RoaXMzLnByb3BzLnZhbHVlS2V5XSA9PT0gdmFsdWVbX3RoaXMzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdFx0XHR9KSkge1xuXHRcdFx0XHRcdFx0X3RoaXMzLnJlbW92ZVZhbHVlKHZhbHVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3RoaXMzLmFkZFZhbHVlKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKHVwZGF0ZWRWYWx1ZSksXG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0LFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogdGhpcy5zdGF0ZS5pc0ZvY3VzZWRcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdF90aGlzMy5zZXRWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2FkZFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYWRkVmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0dmFyIHZpc2libGVPcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0cmV0dXJuICF2YWwuZGlzYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBsYXN0VmFsdWVJbmRleCA9IHZpc2libGVPcHRpb25zLmluZGV4T2YodmFsdWUpO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSh2YWx1ZUFycmF5LmNvbmNhdCh2YWx1ZSkpO1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCAtIDEgPT09IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHRcdC8vIHRoZSBsYXN0IG9wdGlvbiB3YXMgc2VsZWN0ZWQ7IGZvY3VzIHRoZSBzZWNvbmQtbGFzdCBvbmVcblx0XHRcdFx0dGhpcy5mb2N1c09wdGlvbih2aXNpYmxlT3B0aW9uc1tsYXN0VmFsdWVJbmRleCAtIDFdKTtcblx0XHRcdH0gZWxzZSBpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoID4gbGFzdFZhbHVlSW5kZXgpIHtcblx0XHRcdFx0Ly8gZm9jdXMgdGhlIG9wdGlvbiBiZWxvdyB0aGUgc2VsZWN0ZWQgb25lXG5cdFx0XHRcdHRoaXMuZm9jdXNPcHRpb24odmlzaWJsZU9wdGlvbnNbbGFzdFZhbHVlSW5kZXggKyAxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncG9wVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3BWYWx1ZSgpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0aWYgKCF2YWx1ZUFycmF5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0aWYgKHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXS5jbGVhcmFibGVWYWx1ZSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5wcm9wcy5tdWx0aSA/IHZhbHVlQXJyYXkuc2xpY2UoMCwgdmFsdWVBcnJheS5sZW5ndGggLSAxKSA6IG51bGwpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbW92ZVZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczQgPSB0aGlzO1xuXG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0cmV0dXJuIGlbX3RoaXM0LnByb3BzLnZhbHVlS2V5XSAhPT0gdmFsdWVbX3RoaXM0LnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjbGVhclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xlYXJWYWx1ZShldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5zZXRWYWx1ZSh0aGlzLmdldFJlc2V0VmFsdWUoKSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKSxcblx0XHRcdFx0aXNPcGVuOiBmYWxzZVxuXHRcdFx0fSwgdGhpcy5mb2N1cyk7XG5cblx0XHRcdHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0UmVzZXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFJlc2V0VmFsdWUoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXNldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHMucmVzZXRWYWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKG9wdGlvbikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb246IG9wdGlvblxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNOZXh0T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNOZXh0T3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCduZXh0Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNQcmV2aW91c09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3ByZXZpb3VzJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNQYWdlVXBPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1BhZ2VVcE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV91cCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUGFnZURvd25PcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1BhZ2VEb3duT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwYWdlX2Rvd24nKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1N0YXJ0T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNTdGFydE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignc3RhcnQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c0VuZE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzRW5kT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdlbmQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c0FkamFjZW50T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNBZGphY2VudE9wdGlvbihkaXIpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB7IG9wdGlvbjogb3B0aW9uLCBpbmRleDogaW5kZXggfTtcblx0XHRcdH0pLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG5cdFx0XHRcdHJldHVybiAhb3B0aW9uLm9wdGlvbi5kaXNhYmxlZDtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR2YXIgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogdGhpcy5fZm9jdXNlZE9wdGlvbiB8fCAob3B0aW9ucy5sZW5ndGggPyBvcHRpb25zW2RpciA9PT0gJ25leHQnID8gMCA6IG9wdGlvbnMubGVuZ3RoIC0gMV0ub3B0aW9uIDogbnVsbCksXG5cdFx0XHRcdFx0aXNPcGVuOiB0cnVlXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5pbnB1dFZhbHVlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdHZhciBmb2N1c2VkSW5kZXggPSAtMTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9jdXNlZE9wdGlvbiA9PT0gb3B0aW9uc1tpXS5vcHRpb24pIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09PSAnbmV4dCcgJiYgZm9jdXNlZEluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncHJldmlvdXMnKSB7XG5cdFx0XHRcdGlmIChmb2N1c2VkSW5kZXggPiAwKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gZm9jdXNlZEluZGV4IC0gMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAnc3RhcnQnKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ2VuZCcpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdwYWdlX3VwJykge1xuXHRcdFx0XHR2YXIgcG90ZW50aWFsSW5kZXggPSBmb2N1c2VkSW5kZXggLSB0aGlzLnByb3BzLnBhZ2VTaXplO1xuXHRcdFx0XHRpZiAocG90ZW50aWFsSW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBwb3RlbnRpYWxJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdwYWdlX2Rvd24nKSB7XG5cdFx0XHRcdHZhciBfcG90ZW50aWFsSW5kZXggPSBmb2N1c2VkSW5kZXggKyB0aGlzLnByb3BzLnBhZ2VTaXplO1xuXHRcdFx0XHRpZiAoX3BvdGVudGlhbEluZGV4ID4gb3B0aW9ucy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IF9wb3RlbnRpYWxJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4OiBvcHRpb25zW2ZvY3VzZWRJbmRleF0uaW5kZXgsXG5cdFx0XHRcdGZvY3VzZWRPcHRpb246IG9wdGlvbnNbZm9jdXNlZEluZGV4XS5vcHRpb25cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEZvY3VzZWRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2VkT3B0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2ZvY3VzZWRPcHRpb247XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Rm9jdXNlZE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdEZvY3VzZWRPcHRpb24oKSB7XG5cdFx0XHRpZiAodGhpcy5fZm9jdXNlZE9wdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3RWYWx1ZSh0aGlzLl9mb2N1c2VkT3B0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJMb2FkaW5nJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZygpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5pc0xvYWRpbmcpIHJldHVybjtcblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1sb2FkaW5nLXpvbmUnLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ1NlbGVjdC1sb2FkaW5nJyB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlclZhbHVlKHZhbHVlQXJyYXksIGlzT3Blbikge1xuXHRcdFx0dmFyIF90aGlzNSA9IHRoaXM7XG5cblx0XHRcdHZhciByZW5kZXJMYWJlbCA9IHRoaXMucHJvcHMudmFsdWVSZW5kZXJlciB8fCB0aGlzLmdldE9wdGlvbkxhYmVsO1xuXHRcdFx0dmFyIFZhbHVlQ29tcG9uZW50ID0gdGhpcy5wcm9wcy52YWx1ZUNvbXBvbmVudDtcblx0XHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIHNob3dQbGFjZWhvbGRlciA9IHNob3VsZFNob3dQbGFjZWhvbGRlcih0aGlzLnN0YXRlLCB0aGlzLnByb3BzLCBpc09wZW4pO1xuXHRcdFx0XHRyZXR1cm4gc2hvd1BsYWNlaG9sZGVyID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtcGxhY2Vob2xkZXInIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXHRcdFx0XHQpIDogbnVsbDtcblx0XHRcdH1cblx0XHRcdHZhciBvbkNsaWNrID0gdGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sgPyB0aGlzLmhhbmRsZVZhbHVlQ2xpY2sgOiBudWxsO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuXHRcdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFZhbHVlQ29tcG9uZW50LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM1LnByb3BzLmRpc2FibGVkIHx8IHZhbHVlLmNsZWFyYWJsZVZhbHVlID09PSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0aWQ6IF90aGlzNS5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlLScgKyBpLFxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogX3RoaXM1Ll9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdFx0a2V5OiAndmFsdWUtJyArIGkgKyAnLScgKyB2YWx1ZVtfdGhpczUucHJvcHMudmFsdWVLZXldLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvbkNsaWNrLFxuXHRcdFx0XHRcdFx0XHRvblJlbW92ZTogX3RoaXM1LnJlbW92ZVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX3RoaXM1LnByb3BzLnBsYWNlaG9sZGVyLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlczogdmFsdWVBcnJheVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJlbmRlckxhYmVsKHZhbHVlLCBpKSxcblx0XHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LWFyaWEtb25seScgfSxcblx0XHRcdFx0XHRcdFx0J1xceEEwJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChzaG91bGRTaG93VmFsdWUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcblx0XHRcdFx0aWYgKGlzT3Blbikgb25DbGljayA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUtaXRlbScsXG5cdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogdGhpcy5faW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBvbkNsaWNrLFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWVBcnJheVswXVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVuZGVyTGFiZWwodmFsdWVBcnJheVswXSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb25JbmRleCkge1xuXHRcdFx0dmFyIF9jbGFzc05hbWVzLFxuXHRcdFx0ICAgIF90aGlzNiA9IHRoaXM7XG5cblx0XHRcdHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdTZWxlY3QtaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lKTtcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcblxuXHRcdFx0dmFyIGFyaWFPd25zID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctbGlzdCcsIGlzT3BlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWJhY2tzcGFjZS1yZW1vdmUtbWVzc2FnZScsIHRoaXMucHJvcHMubXVsdGkgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSksIF9jbGFzc05hbWVzKSk7XG5cblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdGlmICh2YWx1ZSAmJiAhdGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0XHQvLyBpdCBoaWRlcyBpbnB1dCB2YWx1ZSB3aGVuIGl0IGlzIG5vdCBmb2N1c2VkIGFuZCB3YXMgbm90IHJlc2V0IG9uIHNlbGVjdFxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmlucHV0UHJvcHMsIHtcblx0XHRcdFx0J2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiA/IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIGZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScsXG5cdFx0XHRcdCdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuXHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1oYXNwb3B1cCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcblx0XHRcdFx0J2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuXHRcdFx0XHQnYXJpYS1vd25zJzogYXJpYU93bnMsXG5cdFx0XHRcdG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG5cdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuXHRcdFx0XHRvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXMsXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXM2LmlucHV0ID0gX3JlZjtcblx0XHRcdFx0fSxcblx0XHRcdFx0cm9sZTogJ2NvbWJvYm94Jyxcblx0XHRcdFx0cmVxdWlyZWQ6IHRoaXMuc3RhdGUucmVxdWlyZWQsXG5cdFx0XHRcdHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4LFxuXHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLmlucHV0UmVuZGVyZXIoaW5wdXRQcm9wcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdFx0dmFyIGRpdlByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMuaW5wdXRQcm9wcywgW10pO1xuXG5cdFx0XHRcdHZhciBfYXJpYU93bnMgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLCBpc09wZW4pKTtcblx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHtcblx0XHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6IGlzT3Blbixcblx0XHRcdFx0XHQnYXJpYS1vd25zJzogX2FyaWFPd25zLFxuXHRcdFx0XHRcdCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gPyB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBmb2N1c2VkT3B0aW9uSW5kZXggOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnLFxuXHRcdFx0XHRcdCdhcmlhLWRpc2FibGVkJzogJycgKyB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRcdG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1cyxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWYyO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cm9sZTogJ2NvbWJvYm94Jyxcblx0XHRcdFx0XHRzdHlsZTogeyBib3JkZXI6IDAsIHdpZHRoOiAxLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9LFxuXHRcdFx0XHRcdHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4IHx8IDBcblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0SW5wdXRBdXRvc2l6ZTIuZGVmYXVsdCwgX2V4dGVuZHMoeyBpZDogdGhpcy5wcm9wcy5pZCB9LCBpbnB1dFByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBtaW5XaWR0aDogJzUnIH0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGtleTogJ2lucHV0LXdyYXAnLCBzdHlsZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH0sXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgaWQ6IHRoaXMucHJvcHMuaWQgfSwgaW5wdXRQcm9wcykpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckNsZWFyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXIoKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5jbGVhcmFibGUgfHwgIXZhbHVlQXJyYXkubGVuZ3RoIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5pc0xvYWRpbmcpIHJldHVybjtcblx0XHRcdHZhciBhcmlhTGFiZWwgPSB0aGlzLnByb3BzLm11bHRpID8gdGhpcy5wcm9wcy5jbGVhckFsbFRleHQgOiB0aGlzLnByb3BzLmNsZWFyVmFsdWVUZXh0O1xuXHRcdFx0dmFyIGNsZWFyID0gdGhpcy5wcm9wcy5jbGVhclJlbmRlcmVyKCk7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNsZWFyLXpvbmUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmNsZWFyVmFsdWUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdHRpdGxlOiBhcmlhTGFiZWxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2xlYXJcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyQXJyb3cnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBcnJvdygpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5hcnJvd1JlbmRlcmVyKSByZXR1cm47XG5cblx0XHRcdHZhciBvbk1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duT25BcnJvdztcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3Blbjtcblx0XHRcdHZhciBhcnJvdyA9IHRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcih7IG9uTW91c2VEb3duOiBvbk1vdXNlRG93biwgaXNPcGVuOiBpc09wZW4gfSk7XG5cblx0XHRcdGlmICghYXJyb3cpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93LXpvbmUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhcnJvd1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmaWx0ZXJPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyhleGNsdWRlT3B0aW9ucykge1xuXHRcdFx0dmFyIGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW107XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zKSB7XG5cdFx0XHRcdC8vIE1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYm9vbGVhbiBhdHRyaWJ1dGVcblx0XHRcdFx0dmFyIGZpbHRlck9wdGlvbnMgPSB0eXBlb2YgdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zIDogX2RlZmF1bHRGaWx0ZXJPcHRpb25zMi5kZWZhdWx0O1xuXG5cdFx0XHRcdHJldHVybiBmaWx0ZXJPcHRpb25zKG9wdGlvbnMsIGZpbHRlclZhbHVlLCBleGNsdWRlT3B0aW9ucywge1xuXHRcdFx0XHRcdGZpbHRlck9wdGlvbjogdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24sXG5cdFx0XHRcdFx0aWdub3JlQWNjZW50czogdGhpcy5wcm9wcy5pZ25vcmVBY2NlbnRzLFxuXHRcdFx0XHRcdGlnbm9yZUNhc2U6IHRoaXMucHJvcHMuaWdub3JlQ2FzZSxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0XHRtYXRjaFBvczogdGhpcy5wcm9wcy5tYXRjaFBvcyxcblx0XHRcdFx0XHRtYXRjaFByb3A6IHRoaXMucHJvcHMubWF0Y2hQcm9wLFxuXHRcdFx0XHRcdHRyaW1GaWx0ZXI6IHRoaXMucHJvcHMudHJpbUZpbHRlcixcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uT3B0aW9uUmVmJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25PcHRpb25SZWYocmVmLCBpc0ZvY3VzZWQpIHtcblx0XHRcdGlmIChpc0ZvY3VzZWQpIHtcblx0XHRcdFx0dGhpcy5mb2N1c2VkID0gcmVmO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlck1lbnUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51KG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIHtcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLm1lbnVSZW5kZXJlcih7XG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcblx0XHRcdFx0XHRmb2N1c09wdGlvbjogdGhpcy5mb2N1c09wdGlvbixcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsXG5cdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdGxhYmVsS2V5OiB0aGlzLnByb3BzLmxhYmVsS2V5LFxuXHRcdFx0XHRcdG9uRm9jdXM6IHRoaXMuZm9jdXNPcHRpb24sXG5cdFx0XHRcdFx0b25PcHRpb25SZWY6IHRoaXMub25PcHRpb25SZWYsXG5cdFx0XHRcdFx0b25TZWxlY3Q6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdFx0b3B0aW9uQ2xhc3NOYW1lOiB0aGlzLnByb3BzLm9wdGlvbkNsYXNzTmFtZSxcblx0XHRcdFx0XHRvcHRpb25Db21wb25lbnQ6IHRoaXMucHJvcHMub3B0aW9uQ29tcG9uZW50LFxuXHRcdFx0XHRcdG9wdGlvblJlbmRlcmVyOiB0aGlzLnByb3BzLm9wdGlvblJlbmRlcmVyIHx8IHRoaXMuZ2V0T3B0aW9uTGFiZWwsXG5cdFx0XHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdFx0XHRyZW1vdmVWYWx1ZTogdGhpcy5yZW1vdmVWYWx1ZSxcblx0XHRcdFx0XHRzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RWYWx1ZSxcblx0XHRcdFx0XHR2YWx1ZUFycmF5OiB2YWx1ZUFycmF5LFxuXHRcdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnByb3BzLnZhbHVlS2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLm5vUmVzdWx0c1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LW5vcmVzdWx0cycgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLm5vUmVzdWx0c1RleHRcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckhpZGRlbkZpZWxkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGlkZGVuRmllbGQodmFsdWVBcnJheSkge1xuXHRcdFx0dmFyIF90aGlzNyA9IHRoaXM7XG5cblx0XHRcdGlmICghdGhpcy5wcm9wcy5uYW1lKSByZXR1cm47XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5qb2luVmFsdWVzKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0cmluZ2lmeVZhbHVlKGlbX3RoaXM3LnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpO1xuXHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdG5hbWU6IHRoaXMucHJvcHMubmFtZSxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzNy52YWx1ZSA9IF9yZWYzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdGRpc2FibGVkOiBfdGhpczcucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0a2V5OiAnaGlkZGVuLicgKyBpbmRleCxcblx0XHRcdFx0XHRuYW1lOiBfdGhpczcucHJvcHMubmFtZSxcblx0XHRcdFx0XHRyZWY6ICd2YWx1ZScgKyBpbmRleCxcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogc3RyaW5naWZ5VmFsdWUoaXRlbVtfdGhpczcucHJvcHMudmFsdWVLZXldKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEZvY3VzYWJsZU9wdGlvbkluZGV4Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgoc2VsZWN0ZWRPcHRpb24pIHtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnM7XG5cdFx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuXHRcdFx0dmFyIHZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleTtcblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uIHx8IHNlbGVjdGVkT3B0aW9uO1xuXHRcdFx0aWYgKGZvY3VzZWRPcHRpb24gJiYgIWZvY3VzZWRPcHRpb24uZGlzYWJsZWQpIHtcblx0XHRcdFx0dmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IC0xO1xuXHRcdFx0XHRvcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcblx0XHRcdFx0XHR2YXIgaXNPcHRpb25FcXVhbCA9IG9wdGlvblt2YWx1ZUtleV0gPT09IGZvY3VzZWRPcHRpb25bdmFsdWVLZXldO1xuXHRcdFx0XHRcdGlmIChpc09wdGlvbkVxdWFsKSB7XG5cdFx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uSW5kZXggPSBpbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGlzT3B0aW9uRXF1YWw7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiBmb2N1c2VkT3B0aW9uSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkgcmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJPdXRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlck91dGVyKG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIHtcblx0XHRcdHZhciBfdGhpczggPSB0aGlzO1xuXG5cdFx0XHR2YXIgbWVudSA9IHRoaXMucmVuZGVyTWVudShvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKTtcblx0XHRcdGlmICghbWVudSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOC5tZW51Q29udGFpbmVyID0gX3JlZjU7XG5cdFx0XHRcdFx0fSwgY2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUtb3V0ZXInLCBzdHlsZTogdGhpcy5wcm9wcy5tZW51Q29udGFpbmVyU3R5bGUgfSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUnLFxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0Jyxcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bk9uTWVudSxcblx0XHRcdFx0XHRcdG9uU2Nyb2xsOiB0aGlzLmhhbmRsZU1lbnVTY3JvbGwsXG5cdFx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmNCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM4Lm1lbnUgPSBfcmVmNDtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyb2xlOiAnbGlzdGJveCcsXG5cdFx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5tZW51U3R5bGUsXG5cdFx0XHRcdFx0XHR0YWJJbmRleDogLTFcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1lbnVcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXM5ID0gdGhpcztcblxuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb25zKHRoaXMucHJvcHMubXVsdGkgJiYgdGhpcy5wcm9wcy5yZW1vdmVTZWxlY3RlZCA/IHZhbHVlQXJyYXkgOiBudWxsKTtcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3Blbjtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpICYmICFvcHRpb25zLmxlbmd0aCAmJiB2YWx1ZUFycmF5Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSBpc09wZW4gPSBmYWxzZTtcblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHZhbHVlQXJyYXlbMF0pO1xuXG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IG51bGw7XG5cdFx0XHRpZiAoZm9jdXNlZE9wdGlvbkluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb24gPSB0aGlzLl9mb2N1c2VkT3B0aW9uID0gb3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXhdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbiA9IHRoaXMuX2ZvY3VzZWRPcHRpb24gPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ1NlbGVjdCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG5cdFx0XHRcdCdoYXMtdmFsdWUnOiB2YWx1ZUFycmF5Lmxlbmd0aCxcblx0XHRcdFx0J2lzLWNsZWFyYWJsZSc6IHRoaXMucHJvcHMuY2xlYXJhYmxlLFxuXHRcdFx0XHQnaXMtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHQnaXMtZm9jdXNlZCc6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuXHRcdFx0XHQnaXMtbG9hZGluZyc6IHRoaXMucHJvcHMuaXNMb2FkaW5nLFxuXHRcdFx0XHQnaXMtb3Blbic6IGlzT3Blbixcblx0XHRcdFx0J2lzLXBzZXVkby1mb2N1c2VkJzogdGhpcy5zdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdFx0XHRcdCdpcy1zZWFyY2hhYmxlJzogdGhpcy5wcm9wcy5zZWFyY2hhYmxlLFxuXHRcdFx0XHQnU2VsZWN0LS1tdWx0aSc6IHRoaXMucHJvcHMubXVsdGksXG5cdFx0XHRcdCdTZWxlY3QtLXJ0bCc6IHRoaXMucHJvcHMucnRsLFxuXHRcdFx0XHQnU2VsZWN0LS1zaW5nbGUnOiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciByZW1vdmVNZXNzYWdlID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpICYmICF0aGlzLnByb3BzLmRpc2FibGVkICYmIHZhbHVlQXJyYXkubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgdGhpcy5wcm9wcy5iYWNrc3BhY2VSZW1vdmVzKSB7XG5cdFx0XHRcdHJlbW92ZU1lc3NhZ2UgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0eyBpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWJhY2tzcGFjZS1yZW1vdmUtbWVzc2FnZScsIGNsYXNzTmFtZTogJ1NlbGVjdC1hcmlhLW9ubHknLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLmJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZS5yZXBsYWNlKCd7bGFiZWx9JywgdmFsdWVBcnJheVt2YWx1ZUFycmF5Lmxlbmd0aCAtIDFdW3RoaXMucHJvcHMubGFiZWxLZXldKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY3KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM5LndyYXBwZXIgPSBfcmVmNztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLndyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlckhpZGRlbkZpZWxkKHZhbHVlQXJyYXkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY2KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczkuY29udHJvbCA9IF9yZWY2O1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jb250cm9sJyxcblx0XHRcdFx0XHRcdG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuXHRcdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcblx0XHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1tdWx0aS12YWx1ZS13cmFwcGVyJywgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScgfSxcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyVmFsdWUodmFsdWVBcnJheSwgaXNPcGVuKSxcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVySW5wdXQodmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbkluZGV4KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0cmVtb3ZlTWVzc2FnZSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckxvYWRpbmcoKSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckNsZWFyKCksXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJBcnJvdygpXG5cdFx0XHRcdCksXG5cdFx0XHRcdGlzT3BlbiA/IHRoaXMucmVuZGVyT3V0ZXIob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbikgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTZWxlY3Q7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuXHQnYXJpYS1kZXNjcmliZWRieSc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBodG1sIGlkKHMpIG9mIGVsZW1lbnQocykgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBkZXNjcmliZSB0aGlzIGlucHV0IChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdCdhcmlhLWxhYmVsJzogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGFyaWEgbGFiZWwgKGZvciBhc3Npc3RpdmUgdGVjaClcblx0J2FyaWEtbGFiZWxsZWRieSc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBodG1sIGlkIG9mIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyB0aGUgbGFiZWwgKGZvciBhc3Npc3RpdmUgdGVjaClcblx0YXJyb3dSZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBjcmVhdGUgdGhlIGRyb3AtZG93biBjYXJldCBlbGVtZW50XG5cdGF1dG9CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGF1dG9tYXRpY2FsbHkgYmx1ciB0aGUgY29tcG9uZW50IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkXG5cdGF1dG9Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBhdXRvZm9jdXMgdGhlIGNvbXBvbmVudCBvbiBtb3VudFxuXHRhdXRvZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZGVwcmVjYXRlZDsgdXNlIGF1dG9Gb2N1cyBpbnN0ZWFkXG5cdGF1dG9zaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9zaXppbmcgb3Igbm90XG5cdGJhY2tzcGFjZVJlbW92ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciBiYWNrc3BhY2UgcmVtb3ZlcyBhbiBpdGVtIGlmIHRoZXJlIGlzIG5vIHRleHQgaW5wdXRcblx0YmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gbWVzc2FnZSB0byB1c2UgZm9yIHNjcmVlbnJlYWRlcnMgdG8gcHJlc3MgYmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudCBpdGVtIC0ge2xhYmVsfSBpcyByZXBsYWNlZCB3aXRoIHRoZSBpdGVtIGxhYmVsXG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0Y2xlYXJBbGxUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHRpdGxlIGZvciB0aGUgXCJjbGVhclwiIGNvbnRyb2wgd2hlbiBtdWx0aTogdHJ1ZVxuXHRjbGVhclJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIGNyZWF0ZSBjbGVhcmFibGUgeCBlbGVtZW50XG5cdGNsZWFyVmFsdWVUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHRpdGxlIGZvciB0aGUgXCJjbGVhclwiIGNvbnRyb2xcblx0Y2xlYXJhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHNob3VsZCBpdCBiZSBwb3NzaWJsZSB0byByZXNldCB2YWx1ZVxuXHRjbG9zZU9uU2VsZWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHZhbHVlIGlzIHNlbGVjdGVkXG5cdGRlbGV0ZVJlbW92ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciBkZWxldGUgcmVtb3ZlcyBhbiBpdGVtIGlmIHRoZXJlIGlzIG5vIHRleHQgaW5wdXRcblx0ZGVsaW1pdGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gZGVsaW1pdGVyIHRvIHVzZSB0byBqb2luIG11bHRpcGxlIHZhbHVlcyBmb3IgdGhlIGhpZGRlbiBmaWVsZCB2YWx1ZVxuXHRkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRoZSBTZWxlY3QgaXMgZGlzYWJsZWQgb3Igbm90XG5cdGVzY2FwZUNsZWFyc1ZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgZXNjYXBlIGNsZWFycyB0aGUgdmFsdWUgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWRcblx0ZmlsdGVyT3B0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG1ldGhvZCB0byBmaWx0ZXIgYSBzaW5nbGUgb3B0aW9uIChvcHRpb24sIGZpbHRlclN0cmluZylcblx0ZmlsdGVyT3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksIC8vIGJvb2xlYW4gdG8gZW5hYmxlIGRlZmF1bHQgZmlsdGVyaW5nIG9yIGZ1bmN0aW9uIHRvIGZpbHRlciB0aGUgb3B0aW9ucyBhcnJheSAoW29wdGlvbnNdLCBmaWx0ZXJTdHJpbmcsIFt2YWx1ZXNdKVxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGh0bWwgaWQgdG8gc2V0IG9uIHRoZSBpbnB1dCBlbGVtZW50IGZvciBhY2Nlc3NpYmlsaXR5IG9yIHRlc3RzXG5cdGlnbm9yZUFjY2VudHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciB0byBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nXG5cdGlnbm9yZUNhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciB0byBwZXJmb3JtIGNhc2UtaW5zZW5zaXRpdmUgZmlsdGVyaW5nXG5cdGlucHV0UHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjdXN0b20gYXR0cmlidXRlcyBmb3IgdGhlIElucHV0XG5cdGlucHV0UmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmV0dXJucyBhIGN1c3RvbSBpbnB1dCBjb21wb25lbnRcblx0aW5zdGFuY2VJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHNldCB0aGUgY29tcG9uZW50cyBpbnN0YW5jZUlkXG5cdGlzTG9hZGluZzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRoZSBTZWxlY3QgaXMgbG9hZGluZyBleHRlcm5hbGx5IG9yIG5vdCAoc3VjaCBhcyBvcHRpb25zIGJlaW5nIGxvYWRlZClcblx0am9pblZhbHVlczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBqb2lucyBtdWx0aXBsZSB2YWx1ZXMgaW50byBhIHNpbmdsZSBmb3JtIGZpZWxkIHdpdGggdGhlIGRlbGltaXRlciAobGVnYWN5IG1vZGUpXG5cdGxhYmVsS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGF0aCBvZiB0aGUgbGFiZWwgdmFsdWUgaW4gb3B0aW9uIG9iamVjdHNcblx0bWF0Y2hQb3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyAoYW55fHN0YXJ0KSBtYXRjaCB0aGUgc3RhcnQgb3IgZW50aXJlIHN0cmluZyB3aGVuIGZpbHRlcmluZ1xuXHRtYXRjaFByb3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyAoYW55fGxhYmVsfHZhbHVlKSB3aGljaCBvcHRpb24gcHJvcGVydHkgdG8gZmlsdGVyIG9uXG5cdG1lbnVCdWZmZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCAvLyBvcHRpb25hbCBidWZmZXIgKGluIHB4KSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0IGFuZCB0aGUgYm90dG9tIG9mIHRoZSBtZW51XG5cdG1lbnVDb250YWluZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBtZW51IGNvbnRhaW5lclxuXHRtZW51UmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmVuZGVycyBhIGN1c3RvbSBtZW51IHdpdGggb3B0aW9uc1xuXHRtZW51U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudVxuXHRtdWx0aTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBtdWx0aS12YWx1ZSBpbnB1dFxuXHRuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gZ2VuZXJhdGVzIGEgaGlkZGVuIDxpbnB1dCAvPiB0YWcgd2l0aCB0aGlzIGZpZWxkIG5hbWUgZm9yIGh0bWwgZm9ybXNcblx0bm9SZXN1bHRzVGV4dDogc3RyaW5nT3JOb2RlLCAvLyBwbGFjZWhvbGRlciBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hpbmcgc2VhcmNoIHJlc3VsdHNcblx0b25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQmx1ciBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uQmx1clJlc2V0c0lucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCBvbiBibHVyXG5cdG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge31cblx0b25DbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZFxuXHRvbkNsb3NlUmVzZXRzSW5wdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciBpbnB1dCBpcyBjbGVhcmVkIHdoZW4gbWVudSBpcyBjbG9zZWQgdGhyb3VnaCB0aGUgYXJyb3dcblx0b25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkZvY3VzIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25JbnB1dENoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbklucHV0Q2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7fVxuXHRvbklucHV0S2V5RG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBpbnB1dCBrZXlEb3duIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25NZW51U2Nyb2xsVG9Cb3R0b206IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tOyBjYW4gYmUgdXNlZCB0byBwYWdpbmF0ZSBvcHRpb25zXG5cdG9uT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIG9wZW5lZFxuXHRvblNlbGVjdFJlc2V0c0lucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCBvbiBzZWxlY3QgKHdvcmtzIG9ubHkgZm9yIG11bHRpc2VsZWN0KVxuXHRvblZhbHVlQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DbGljayBoYW5kbGVyIGZvciB2YWx1ZSBsYWJlbHM6IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHt9XG5cdG9wZW5PbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGJvb2xlYW4gdG8gY29udHJvbCBvcGVuaW5nIHRoZSBtZW51IHdoZW4gdGhlIGNvbnRyb2wgaXMgY2xpY2tlZFxuXHRvcGVuT25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBhbHdheXMgb3BlbiBvcHRpb25zIG1lbnUgb24gZm9jdXNcblx0b3B0aW9uQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gYWRkaXRpb25hbCBjbGFzcyhlcykgdG8gYXBwbHkgdG8gdGhlIDxPcHRpb24gLz4gZWxlbWVudHNcblx0b3B0aW9uQ29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9wdGlvbiBjb21wb25lbnQgdG8gcmVuZGVyIGluIGRyb3Bkb3duXG5cdG9wdGlvblJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9wdGlvblJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRvcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBhZ2VTaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgLy8gbnVtYmVyIG9mIGVudHJpZXMgdG8gcGFnZSB3aGVuIHVzaW5nIHBhZ2UgdXAvZG93biBrZXlzXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmdPck5vZGUsIC8vIGZpZWxkIHBsYWNlaG9sZGVyLCBkaXNwbGF5ZWQgd2hlbiB0aGVyZSdzIG5vIHZhbHVlXG5cdHJlbW92ZVNlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdGhlIHNlbGVjdGVkIG9wdGlvbiBpcyByZW1vdmVkIGZyb20gdGhlIGRyb3Bkb3duIG9uIG11bHRpIHNlbGVjdHNcblx0cmVxdWlyZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gYXBwbGllcyBIVE1MNSByZXF1aXJlZCBhdHRyaWJ1dGUgd2hlbiBuZWVkZWRcblx0cmVzZXRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksIC8vIHZhbHVlIHRvIHVzZSB3aGVuIHlvdSBjbGVhciB0aGUgY29udHJvbFxuXHRydGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gc2V0IHRvIHRydWUgaW4gb3JkZXIgdG8gdXNlIHJlYWN0LXNlbGVjdCBpbiByaWdodC10by1sZWZ0IGRpcmVjdGlvblxuXHRzY3JvbGxNZW51SW50b1ZpZXc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gYm9vbGVhbiB0byBlbmFibGUgdGhlIHZpZXdwb3J0IHRvIHNoaWZ0IHNvIHRoYXQgdGhlIGZ1bGwgbWVudSBmdWxseSB2aXNpYmxlIHdoZW4gZW5nYWdlZFxuXHRzZWFyY2hhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIHNlYXJjaGluZyBmZWF0dXJlIG9yIG5vdFxuXHRzaW1wbGVWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBwYXNzIHRoZSB2YWx1ZSB0byBvbkNoYW5nZSBhcyBhIHNpbXBsZSB2YWx1ZSAobGVnYWN5IHByZSAxLjAgbW9kZSksIGRlZmF1bHRzIHRvIGZhbHNlXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGNvbnRyb2xcblx0dGFiSW5kZXg6IHN0cmluZ09yTnVtYmVyLCAvLyBvcHRpb25hbCB0YWIgaW5kZXggb2YgdGhlIGNvbnRyb2xcblx0dGFiU2VsZWN0c1ZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gdHJlYXQgdGFiYmluZyBvdXQgd2hpbGUgZm9jdXNlZCB0byBiZSB2YWx1ZSBzZWxlY3Rpb25cblx0dHJpbUZpbHRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRvIHRyaW0gd2hpdGVzcGFjZSBhcm91bmQgZmlsdGVyIHZhbHVlXG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxuXHR2YWx1ZUNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyB2YWx1ZSBjb21wb25lbnQgdG8gcmVuZGVyXG5cdHZhbHVlS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGF0aCBvZiB0aGUgbGFiZWwgdmFsdWUgaW4gb3B0aW9uIG9iamVjdHNcblx0dmFsdWVSZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyB2YWx1ZVJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHR3cmFwcGVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0IC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd3JhcHBlclxufTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcblx0YXJyb3dSZW5kZXJlcjogX2RlZmF1bHRBcnJvd1JlbmRlcmVyMi5kZWZhdWx0LFxuXHRhdXRvc2l6ZTogdHJ1ZSxcblx0YmFja3NwYWNlUmVtb3ZlczogdHJ1ZSxcblx0YmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlOiAnUHJlc3MgYmFja3NwYWNlIHRvIHJlbW92ZSB7bGFiZWx9Jyxcblx0Y2xlYXJhYmxlOiB0cnVlLFxuXHRjbGVhckFsbFRleHQ6ICdDbGVhciBhbGwnLFxuXHRjbGVhclJlbmRlcmVyOiBfZGVmYXVsdENsZWFyUmVuZGVyZXIyLmRlZmF1bHQsXG5cdGNsZWFyVmFsdWVUZXh0OiAnQ2xlYXIgdmFsdWUnLFxuXHRjbG9zZU9uU2VsZWN0OiB0cnVlLFxuXHRkZWxldGVSZW1vdmVzOiB0cnVlLFxuXHRkZWxpbWl0ZXI6ICcsJyxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRlc2NhcGVDbGVhcnNWYWx1ZTogdHJ1ZSxcblx0ZmlsdGVyT3B0aW9uczogX2RlZmF1bHRGaWx0ZXJPcHRpb25zMi5kZWZhdWx0LFxuXHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRpZ25vcmVDYXNlOiB0cnVlLFxuXHRpbnB1dFByb3BzOiB7fSxcblx0aXNMb2FkaW5nOiBmYWxzZSxcblx0am9pblZhbHVlczogZmFsc2UsXG5cdGxhYmVsS2V5OiAnbGFiZWwnLFxuXHRtYXRjaFBvczogJ2FueScsXG5cdG1hdGNoUHJvcDogJ2FueScsXG5cdG1lbnVCdWZmZXI6IDAsXG5cdG1lbnVSZW5kZXJlcjogX2RlZmF1bHRNZW51UmVuZGVyZXIyLmRlZmF1bHQsXG5cdG11bHRpOiBmYWxzZSxcblx0bm9SZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgZm91bmQnLFxuXHRvbkJsdXJSZXNldHNJbnB1dDogdHJ1ZSxcblx0b25DbG9zZVJlc2V0c0lucHV0OiB0cnVlLFxuXHRvblNlbGVjdFJlc2V0c0lucHV0OiB0cnVlLFxuXHRvcGVuT25DbGljazogdHJ1ZSxcblx0b3B0aW9uQ29tcG9uZW50OiBfT3B0aW9uMi5kZWZhdWx0LFxuXHRwYWdlU2l6ZTogNSxcblx0cGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuXHRyZW1vdmVTZWxlY3RlZDogdHJ1ZSxcblx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRydGw6IGZhbHNlLFxuXHRzY3JvbGxNZW51SW50b1ZpZXc6IHRydWUsXG5cdHNlYXJjaGFibGU6IHRydWUsXG5cdHNpbXBsZVZhbHVlOiBmYWxzZSxcblx0dGFiU2VsZWN0c1ZhbHVlOiB0cnVlLFxuXHR0cmltRmlsdGVyOiB0cnVlLFxuXHR2YWx1ZUNvbXBvbmVudDogX1ZhbHVlMi5kZWZhdWx0LFxuXHR2YWx1ZUtleTogJ3ZhbHVlJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2VsZWN0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFycm93UmVuZGVyZXIgPSBmdW5jdGlvbiBhcnJvd1JlbmRlcmVyKF9yZWYpIHtcblx0dmFyIG9uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bjtcblxuXHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG5cdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93Jyxcblx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0fSk7XG59O1xuXG5hcnJvd1JlbmRlcmVyLnByb3BUeXBlcyA9IHtcblx0b25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXJyb3dSZW5kZXJlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNsZWFyUmVuZGVyZXIgPSBmdW5jdGlvbiBjbGVhclJlbmRlcmVyKCkge1xuXHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG5cdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNsZWFyJyxcblx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6ICcmdGltZXM7JyB9XG5cdH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2xlYXJSZW5kZXJlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3RyaXBEaWFjcml0aWNzID0gcmVxdWlyZSgnLi9zdHJpcERpYWNyaXRpY3MnKTtcblxudmFyIF9zdHJpcERpYWNyaXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBEaWFjcml0aWNzKTtcblxudmFyIF90cmltID0gcmVxdWlyZSgnLi90cmltJyk7XG5cbnZhciBfdHJpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmltKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJztcbn07XG5cbnZhciBmaWx0ZXJPcHRpb25zID0gZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyhvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHByb3BzKSB7XG5cdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSAoMCwgX3N0cmlwRGlhY3JpdGljczIuZGVmYXVsdCkoZmlsdGVyVmFsdWUpO1xuXHR9XG5cblx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRpZiAocHJvcHMudHJpbUZpbHRlcikge1xuXHRcdGZpbHRlclZhbHVlID0gKDAsIF90cmltMi5kZWZhdWx0KShmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRpZiAoZXhjbHVkZU9wdGlvbnMpIGV4Y2x1ZGVPcHRpb25zID0gZXhjbHVkZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0cmV0dXJuIGlbcHJvcHMudmFsdWVLZXldO1xuXHR9KTtcblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdGlmIChleGNsdWRlT3B0aW9ucyAmJiBleGNsdWRlT3B0aW9ucy5pbmRleE9mKG9wdGlvbltwcm9wcy52YWx1ZUtleV0pID4gLTEpIHJldHVybiBmYWxzZTtcblx0XHRpZiAocHJvcHMuZmlsdGVyT3B0aW9uKSByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uLmNhbGwodW5kZWZpbmVkLCBvcHRpb24sIGZpbHRlclZhbHVlKTtcblx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuXHRcdHZhciB2YWx1ZSA9IG9wdGlvbltwcm9wcy52YWx1ZUtleV07XG5cdFx0dmFyIGxhYmVsID0gb3B0aW9uW3Byb3BzLmxhYmVsS2V5XTtcblx0XHR2YXIgaGFzVmFsdWUgPSBpc1ZhbGlkKHZhbHVlKTtcblx0XHR2YXIgaGFzTGFiZWwgPSBpc1ZhbGlkKGxhYmVsKTtcblxuXHRcdGlmICghaGFzVmFsdWUgJiYgIWhhc0xhYmVsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbHVlVGVzdCA9IGhhc1ZhbHVlID8gU3RyaW5nKHZhbHVlKSA6IG51bGw7XG5cdFx0dmFyIGxhYmVsVGVzdCA9IGhhc0xhYmVsID8gU3RyaW5nKGxhYmVsKSA6IG51bGw7XG5cblx0XHRpZiAocHJvcHMuaWdub3JlQWNjZW50cykge1xuXHRcdFx0aWYgKHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcpIHZhbHVlVGVzdCA9ICgwLCBfc3RyaXBEaWFjcml0aWNzMi5kZWZhdWx0KSh2YWx1ZVRlc3QpO1xuXHRcdFx0aWYgKGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScpIGxhYmVsVGVzdCA9ICgwLCBfc3RyaXBEaWFjcml0aWNzMi5kZWZhdWx0KShsYWJlbFRlc3QpO1xuXHRcdH1cblxuXHRcdGlmIChwcm9wcy5pZ25vcmVDYXNlKSB7XG5cdFx0XHRpZiAodmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gdmFsdWVUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAobGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gbGFiZWxUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLm1hdGNoUG9zID09PSAnc3RhcnQnID8gdmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIHx8IGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScgJiYgbGFiZWxUZXN0LnN1YnN0cigwLCBmaWx0ZXJWYWx1ZS5sZW5ndGgpID09PSBmaWx0ZXJWYWx1ZSA6IHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcgJiYgdmFsdWVUZXN0LmluZGV4T2YoZmlsdGVyVmFsdWUpID49IDAgfHwgbGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMDtcblx0fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmaWx0ZXJPcHRpb25zOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBtYXAgPSBbeyAnYmFzZSc6ICdBJywgJ2xldHRlcnMnOiAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2cgfSwgeyAnYmFzZSc6ICdBQScsICdsZXR0ZXJzJzogL1tcXHVBNzMyXS9nIH0sIHsgJ2Jhc2UnOiAnQUUnLCAnbGV0dGVycyc6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nIH0sIHsgJ2Jhc2UnOiAnQU8nLCAnbGV0dGVycyc6IC9bXFx1QTczNF0vZyB9LCB7ICdiYXNlJzogJ0FVJywgJ2xldHRlcnMnOiAvW1xcdUE3MzZdL2cgfSwgeyAnYmFzZSc6ICdBVicsICdsZXR0ZXJzJzogL1tcXHVBNzM4XFx1QTczQV0vZyB9LCB7ICdiYXNlJzogJ0FZJywgJ2xldHRlcnMnOiAvW1xcdUE3M0NdL2cgfSwgeyAnYmFzZSc6ICdCJywgJ2xldHRlcnMnOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyB9LCB7ICdiYXNlJzogJ0MnLCAnbGV0dGVycyc6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nIH0sIHsgJ2Jhc2UnOiAnRCcsICdsZXR0ZXJzJzogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyB9LCB7ICdiYXNlJzogJ0RaJywgJ2xldHRlcnMnOiAvW1xcdTAxRjFcXHUwMUM0XS9nIH0sIHsgJ2Jhc2UnOiAnRHonLCAnbGV0dGVycyc6IC9bXFx1MDFGMlxcdTAxQzVdL2cgfSwgeyAnYmFzZSc6ICdFJywgJ2xldHRlcnMnOiAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyB9LCB7ICdiYXNlJzogJ0YnLCAnbGV0dGVycyc6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nIH0sIHsgJ2Jhc2UnOiAnRycsICdsZXR0ZXJzJzogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2cgfSwgeyAnYmFzZSc6ICdIJywgJ2xldHRlcnMnOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nIH0sIHsgJ2Jhc2UnOiAnSScsICdsZXR0ZXJzJzogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyB9LCB7ICdiYXNlJzogJ0onLCAnbGV0dGVycyc6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2cgfSwgeyAnYmFzZSc6ICdLJywgJ2xldHRlcnMnOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nIH0sIHsgJ2Jhc2UnOiAnTCcsICdsZXR0ZXJzJzogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2cgfSwgeyAnYmFzZSc6ICdMSicsICdsZXR0ZXJzJzogL1tcXHUwMUM3XS9nIH0sIHsgJ2Jhc2UnOiAnTGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOF0vZyB9LCB7ICdiYXNlJzogJ00nLCAnbGV0dGVycyc6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2cgfSwgeyAnYmFzZSc6ICdOJywgJ2xldHRlcnMnOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2cgfSwgeyAnYmFzZSc6ICdOSicsICdsZXR0ZXJzJzogL1tcXHUwMUNBXS9nIH0sIHsgJ2Jhc2UnOiAnTmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQl0vZyB9LCB7ICdiYXNlJzogJ08nLCAnbGV0dGVycyc6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyB9LCB7ICdiYXNlJzogJ09JJywgJ2xldHRlcnMnOiAvW1xcdTAxQTJdL2cgfSwgeyAnYmFzZSc6ICdPTycsICdsZXR0ZXJzJzogL1tcXHVBNzRFXS9nIH0sIHsgJ2Jhc2UnOiAnT1UnLCAnbGV0dGVycyc6IC9bXFx1MDIyMl0vZyB9LCB7ICdiYXNlJzogJ1AnLCAnbGV0dGVycyc6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyB9LCB7ICdiYXNlJzogJ1EnLCAnbGV0dGVycyc6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nIH0sIHsgJ2Jhc2UnOiAnUicsICdsZXR0ZXJzJzogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyB9LCB7ICdiYXNlJzogJ1MnLCAnbGV0dGVycyc6IC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2cgfSwgeyAnYmFzZSc6ICdUJywgJ2xldHRlcnMnOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyB9LCB7ICdiYXNlJzogJ1RaJywgJ2xldHRlcnMnOiAvW1xcdUE3MjhdL2cgfSwgeyAnYmFzZSc6ICdVJywgJ2xldHRlcnMnOiAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2cgfSwgeyAnYmFzZSc6ICdWJywgJ2xldHRlcnMnOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nIH0sIHsgJ2Jhc2UnOiAnVlknLCAnbGV0dGVycyc6IC9bXFx1QTc2MF0vZyB9LCB7ICdiYXNlJzogJ1cnLCAnbGV0dGVycyc6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyB9LCB7ICdiYXNlJzogJ1gnLCAnbGV0dGVycyc6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2cgfSwgeyAnYmFzZSc6ICdZJywgJ2xldHRlcnMnOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyB9LCB7ICdiYXNlJzogJ1onLCAnbGV0dGVycyc6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2cgfSwgeyAnYmFzZSc6ICdhJywgJ2xldHRlcnMnOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nIH0sIHsgJ2Jhc2UnOiAnYWEnLCAnbGV0dGVycyc6IC9bXFx1QTczM10vZyB9LCB7ICdiYXNlJzogJ2FlJywgJ2xldHRlcnMnOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyB9LCB7ICdiYXNlJzogJ2FvJywgJ2xldHRlcnMnOiAvW1xcdUE3MzVdL2cgfSwgeyAnYmFzZSc6ICdhdScsICdsZXR0ZXJzJzogL1tcXHVBNzM3XS9nIH0sIHsgJ2Jhc2UnOiAnYXYnLCAnbGV0dGVycyc6IC9bXFx1QTczOVxcdUE3M0JdL2cgfSwgeyAnYmFzZSc6ICdheScsICdsZXR0ZXJzJzogL1tcXHVBNzNEXS9nIH0sIHsgJ2Jhc2UnOiAnYicsICdsZXR0ZXJzJzogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2cgfSwgeyAnYmFzZSc6ICdjJywgJ2xldHRlcnMnOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2cgfSwgeyAnYmFzZSc6ICdkJywgJ2xldHRlcnMnOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nIH0sIHsgJ2Jhc2UnOiAnZHonLCAnbGV0dGVycyc6IC9bXFx1MDFGM1xcdTAxQzZdL2cgfSwgeyAnYmFzZSc6ICdlJywgJ2xldHRlcnMnOiAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2cgfSwgeyAnYmFzZSc6ICdmJywgJ2xldHRlcnMnOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyB9LCB7ICdiYXNlJzogJ2cnLCAnbGV0dGVycyc6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nIH0sIHsgJ2Jhc2UnOiAnaCcsICdsZXR0ZXJzJzogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2cgfSwgeyAnYmFzZSc6ICdodicsICdsZXR0ZXJzJzogL1tcXHUwMTk1XS9nIH0sIHsgJ2Jhc2UnOiAnaScsICdsZXR0ZXJzJzogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyB9LCB7ICdiYXNlJzogJ2onLCAnbGV0dGVycyc6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nIH0sIHsgJ2Jhc2UnOiAnaycsICdsZXR0ZXJzJzogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyB9LCB7ICdiYXNlJzogJ2wnLCAnbGV0dGVycyc6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyB9LCB7ICdiYXNlJzogJ2xqJywgJ2xldHRlcnMnOiAvW1xcdTAxQzldL2cgfSwgeyAnYmFzZSc6ICdtJywgJ2xldHRlcnMnOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nIH0sIHsgJ2Jhc2UnOiAnbicsICdsZXR0ZXJzJzogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyB9LCB7ICdiYXNlJzogJ25qJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0NdL2cgfSwgeyAnYmFzZSc6ICdvJywgJ2xldHRlcnMnOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2cgfSwgeyAnYmFzZSc6ICdvaScsICdsZXR0ZXJzJzogL1tcXHUwMUEzXS9nIH0sIHsgJ2Jhc2UnOiAnb3UnLCAnbGV0dGVycyc6IC9bXFx1MDIyM10vZyB9LCB7ICdiYXNlJzogJ29vJywgJ2xldHRlcnMnOiAvW1xcdUE3NEZdL2cgfSwgeyAnYmFzZSc6ICdwJywgJ2xldHRlcnMnOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2cgfSwgeyAnYmFzZSc6ICdxJywgJ2xldHRlcnMnOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyB9LCB7ICdiYXNlJzogJ3InLCAnbGV0dGVycyc6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2cgfSwgeyAnYmFzZSc6ICdzJywgJ2xldHRlcnMnOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyB9LCB7ICdiYXNlJzogJ3QnLCAnbGV0dGVycyc6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyB9LCB7ICdiYXNlJzogJ3R6JywgJ2xldHRlcnMnOiAvW1xcdUE3MjldL2cgfSwgeyAnYmFzZSc6ICd1JywgJ2xldHRlcnMnOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2cgfSwgeyAnYmFzZSc6ICd2JywgJ2xldHRlcnMnOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nIH0sIHsgJ2Jhc2UnOiAndnknLCAnbGV0dGVycyc6IC9bXFx1QTc2MV0vZyB9LCB7ICdiYXNlJzogJ3cnLCAnbGV0dGVycyc6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2cgfSwgeyAnYmFzZSc6ICd4JywgJ2xldHRlcnMnOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nIH0sIHsgJ2Jhc2UnOiAneScsICdsZXR0ZXJzJzogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nIH0sIHsgJ2Jhc2UnOiAneicsICdsZXR0ZXJzJzogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyB9XTtcblxudmFyIHN0cmlwRGlhY3JpdGljcyA9IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZShtYXBbaV0ubGV0dGVycywgbWFwW2ldLmJhc2UpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpcERpYWNyaXRpY3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHRyaW0gPSBmdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyaW07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1lbnVSZW5kZXJlciA9IGZ1bmN0aW9uIG1lbnVSZW5kZXJlcihfcmVmKSB7XG5cdHZhciBmb2N1c2VkT3B0aW9uID0gX3JlZi5mb2N1c2VkT3B0aW9uLFxuXHQgICAgZm9jdXNPcHRpb24gPSBfcmVmLmZvY3VzT3B0aW9uLFxuXHQgICAgaW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcblx0ICAgIGluc3RhbmNlUHJlZml4ID0gX3JlZi5pbnN0YW5jZVByZWZpeCxcblx0ICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG5cdCAgICBvbk9wdGlvblJlZiA9IF9yZWYub25PcHRpb25SZWYsXG5cdCAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG5cdCAgICBvcHRpb25DbGFzc05hbWUgPSBfcmVmLm9wdGlvbkNsYXNzTmFtZSxcblx0ICAgIG9wdGlvbkNvbXBvbmVudCA9IF9yZWYub3B0aW9uQ29tcG9uZW50LFxuXHQgICAgb3B0aW9uUmVuZGVyZXIgPSBfcmVmLm9wdGlvblJlbmRlcmVyLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcblx0ICAgIHJlbW92ZVZhbHVlID0gX3JlZi5yZW1vdmVWYWx1ZSxcblx0ICAgIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZSxcblx0ICAgIHZhbHVlQXJyYXkgPSBfcmVmLnZhbHVlQXJyYXksXG5cdCAgICB2YWx1ZUtleSA9IF9yZWYudmFsdWVLZXk7XG5cblx0dmFyIE9wdGlvbiA9IG9wdGlvbkNvbXBvbmVudDtcblxuXHRyZXR1cm4gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaSkge1xuXHRcdHZhciBpc1NlbGVjdGVkID0gdmFsdWVBcnJheSAmJiB2YWx1ZUFycmF5LnNvbWUoZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB4W3ZhbHVlS2V5XSA9PT0gb3B0aW9uW3ZhbHVlS2V5XTtcblx0XHR9KTtcblx0XHR2YXIgaXNGb2N1c2VkID0gb3B0aW9uID09PSBmb2N1c2VkT3B0aW9uO1xuXHRcdHZhciBvcHRpb25DbGFzcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkob3B0aW9uQ2xhc3NOYW1lLCB7XG5cdFx0XHQnU2VsZWN0LW9wdGlvbic6IHRydWUsXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuXHRcdFx0J2lzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG5cdFx0XHQnaXMtZGlzYWJsZWQnOiBvcHRpb24uZGlzYWJsZWRcblx0XHR9KTtcblxuXHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdE9wdGlvbixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBvcHRpb25DbGFzcyxcblx0XHRcdFx0Zm9jdXNPcHRpb246IGZvY3VzT3B0aW9uLFxuXHRcdFx0XHRpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuXHRcdFx0XHRpbnN0YW5jZVByZWZpeDogaW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdGlzRGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcblx0XHRcdFx0aXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG5cdFx0XHRcdGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG5cdFx0XHRcdGtleTogJ29wdGlvbi0nICsgaSArICctJyArIG9wdGlvblt2YWx1ZUtleV0sXG5cdFx0XHRcdG9uRm9jdXM6IG9uRm9jdXMsXG5cdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdCxcblx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdG9wdGlvbkluZGV4OiBpLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdG9uT3B0aW9uUmVmKF9yZWYyLCBpc0ZvY3VzZWQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVWYWx1ZTogcmVtb3ZlVmFsdWUsXG5cdFx0XHRcdHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZVxuXHRcdFx0fSxcblx0XHRcdG9wdGlvblJlbmRlcmVyKG9wdGlvbiwgaSwgaW5wdXRWYWx1ZSlcblx0XHQpO1xuXHR9KTtcbn07XG5cbm1lbnVSZW5kZXJlci5wcm9wVHlwZXMgPSB7XG5cdGZvY3VzT3B0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdGZvY3VzZWRPcHRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXHRpbnB1dFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0aW5zdGFuY2VQcmVmaXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdG9uT3B0aW9uUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdG9uU2VsZWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdG9wdGlvbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdG9wdGlvbkNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRvcHRpb25SZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRvcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuXHRyZW1vdmVWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHRzZWxlY3RWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXHR2YWx1ZUFycmF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuXHR2YWx1ZUtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1lbnVSZW5kZXJlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Jsb2NrRXZlbnQgPSByZXF1aXJlKCcuL3V0aWxzL2Jsb2NrRXZlbnQnKTtcblxudmFyIF9ibG9ja0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jsb2NrRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBPcHRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoT3B0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3B0aW9uKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IF90aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlTW91c2VNb3ZlID0gX3RoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoRW5kID0gX3RoaXMuaGFuZGxlVG91Y2hFbmQuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hNb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhPcHRpb24sIFt7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMub3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VFbnRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoZXZlbnQpIHtcblx0XHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG5cdFx0XHR0aGlzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbkZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmlzRm9jdXNlZCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXModGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBvcHRpb24gPSBfcHJvcHMub3B0aW9uLFxuXHRcdFx0ICAgIGluc3RhbmNlUHJlZml4ID0gX3Byb3BzLmluc3RhbmNlUHJlZml4LFxuXHRcdFx0ICAgIG9wdGlvbkluZGV4ID0gX3Byb3BzLm9wdGlvbkluZGV4O1xuXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgb3B0aW9uLmNsYXNzTmFtZSk7XG5cblx0XHRcdHJldHVybiBvcHRpb24uZGlzYWJsZWQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IF9ibG9ja0V2ZW50Mi5kZWZhdWx0LFxuXHRcdFx0XHRcdG9uQ2xpY2s6IF9ibG9ja0V2ZW50Mi5kZWZhdWx0IH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0c3R5bGU6IG9wdGlvbi5zdHlsZSxcblx0XHRcdFx0XHRyb2xlOiAnb3B0aW9uJyxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IG9wdGlvbi5sYWJlbCxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG5cdFx0XHRcdFx0b25Nb3VzZU1vdmU6IHRoaXMuaGFuZGxlTW91c2VNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuXHRcdFx0XHRcdGlkOiBpbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBvcHRpb25JbmRleCxcblx0XHRcdFx0XHR0aXRsZTogb3B0aW9uLnRpdGxlIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE9wdGlvbjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbk9wdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSAoYmFzZWQgb24gbW91c2UgcG9zaXRpb24pXG5cdGluc3RhbmNlUHJlZml4OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLCAvLyB1bmlxdWUgcHJlZml4IGZvciB0aGUgaWRzICh1c2VkIGZvciBhcmlhKVxuXHRpc0Rpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZGlzYWJsZWRcblx0aXNGb2N1c2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZm9jdXNlZFxuXHRpc1NlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcblx0b25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlRW50ZXIgb24gb3B0aW9uIGVsZW1lbnRcblx0b25TZWxlY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiBvcHRpb24gZWxlbWVudFxuXHRvblVuZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBtb3VzZUxlYXZlIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9wdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCwgLy8gb2JqZWN0IHRoYXQgaXMgYmFzZSBmb3IgdGhhdCBvcHRpb25cblx0b3B0aW9uSW5kZXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyIC8vIGluZGV4IG9mIHRoZSBvcHRpb24sIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIGlkcyBmb3IgYXJpYVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT3B0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdBJyB8fCAhKCdocmVmJyBpbiBldmVudC50YXJnZXQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChldmVudC50YXJnZXQudGFyZ2V0KSB7XG5cdFx0d2luZG93Lm9wZW4oZXZlbnQudGFyZ2V0LmhyZWYsIGV2ZW50LnRhcmdldC50YXJnZXQpO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZlbnQudGFyZ2V0LmhyZWY7XG5cdH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVmFsdWUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFZhbHVlKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChWYWx1ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFZhbHVlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaGFuZGxlTW91c2VEb3duID0gX3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uUmVtb3ZlID0gX3RoaXMub25SZW1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFZhbHVlLCBbe1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy52YWx1ZSwgZXZlbnQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZS5ocmVmKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uUmVtb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25SZW1vdmUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRSZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZFJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLm9uUmVtb3ZlKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJSZW1vdmVJY29uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVtb3ZlSWNvbigpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLm9uUmVtb3ZlKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtdmFsdWUtaWNvbicsXG5cdFx0XHRcdFx0J2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLm9uUmVtb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlIH0sXG5cdFx0XHRcdCdcXHhENydcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTGFiZWwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbCgpIHtcblx0XHRcdHZhciBjbGFzc05hbWUgPSAnU2VsZWN0LXZhbHVlLWxhYmVsJztcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2sgfHwgdGhpcy5wcm9wcy52YWx1ZS5ocmVmID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgaHJlZjogdGhpcy5wcm9wcy52YWx1ZS5ocmVmLCB0YXJnZXQ6IHRoaXMucHJvcHMudmFsdWUudGFyZ2V0LCBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlTW91c2VEb3duIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCByb2xlOiAnb3B0aW9uJywgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsIGlkOiB0aGlzLnByb3BzLmlkIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ1NlbGVjdC12YWx1ZScsIHRoaXMucHJvcHMudmFsdWUuZGlzYWJsZWQgPyAnU2VsZWN0LXZhbHVlLWRpc2FibGVkJyA6ICcnLCB0aGlzLnByb3BzLnZhbHVlLmNsYXNzTmFtZSksXG5cdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMudmFsdWUuc3R5bGUsXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMucHJvcHMudmFsdWUudGl0bGVcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhpcy5yZW5kZXJSZW1vdmVJY29uKCksXG5cdFx0XHRcdHRoaXMucmVuZGVyTGFiZWwoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVmFsdWU7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5WYWx1ZS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG5cdGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRpc2FibGVkIHByb3AgcGFzc2VkIHRvIFJlYWN0U2VsZWN0XG5cdGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gVW5pcXVlIGlkIGZvciB0aGUgdmFsdWUgLSB1c2VkIGZvciBhcmlhXG5cdG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiB2YWx1ZSBsYWJlbFxuXHRvblJlbW92ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIHJlbW92YWwgb2YgdGhlIHZhbHVlXG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkIC8vIHRoZSBvcHRpb24gb2JqZWN0IGZvciB0aGlzIHZhbHVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBWYWx1ZTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDajdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==