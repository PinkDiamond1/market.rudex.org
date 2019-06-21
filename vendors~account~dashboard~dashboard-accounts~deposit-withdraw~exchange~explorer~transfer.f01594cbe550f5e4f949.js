(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 2401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2402);


/***/ }),

/***/ 2402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var destroy = __webpack_require__(2403);
var initialize = __webpack_require__(2411);
var update = __webpack_require__(2421);

module.exports = {
  initialize: initialize,
  update: update,
  destroy: destroy
};


/***/ }),

/***/ 2403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var dom = __webpack_require__(2406);
var instances = __webpack_require__(2407);

module.exports = function (element) {
  var i = instances.get(element);

  if (!i) {
    return;
  }

  i.event.unbindAll();
  dom.remove(i.scrollbarX);
  dom.remove(i.scrollbarY);
  dom.remove(i.scrollbarXRail);
  dom.remove(i.scrollbarYRail);
  _.removePsClasses(element);

  instances.remove(element);
};


/***/ }),

/***/ 2404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cls = __webpack_require__(2405);
var dom = __webpack_require__(2406);

var toInt = exports.toInt = function (x) {
  return parseInt(x, 10) || 0;
};

var clone = exports.clone = function (obj) {
  if (!obj) {
    return null;
  } else if (obj.constructor === Array) {
    return obj.map(clone);
  } else if (typeof obj === 'object') {
    var result = {};
    for (var key in obj) {
      result[key] = clone(obj[key]);
    }
    return result;
  } else {
    return obj;
  }
};

exports.extend = function (original, source) {
  var result = clone(original);
  for (var key in source) {
    result[key] = clone(source[key]);
  }
  return result;
};

exports.isEditable = function (el) {
  return dom.matches(el, "input,[contenteditable]") ||
         dom.matches(el, "select,[contenteditable]") ||
         dom.matches(el, "textarea,[contenteditable]") ||
         dom.matches(el, "button,[contenteditable]");
};

exports.removePsClasses = function (element) {
  var clsList = cls.list(element);
  for (var i = 0; i < clsList.length; i++) {
    var className = clsList[i];
    if (className.indexOf('ps-') === 0) {
      cls.remove(element, className);
    }
  }
};

exports.outerWidth = function (element) {
  return toInt(dom.css(element, 'width')) +
         toInt(dom.css(element, 'paddingLeft')) +
         toInt(dom.css(element, 'paddingRight')) +
         toInt(dom.css(element, 'borderLeftWidth')) +
         toInt(dom.css(element, 'borderRightWidth'));
};

exports.startScrolling = function (element, axis) {
  cls.add(element, 'ps-in-scrolling');
  if (typeof axis !== 'undefined') {
    cls.add(element, 'ps-' + axis);
  } else {
    cls.add(element, 'ps-x');
    cls.add(element, 'ps-y');
  }
};

exports.stopScrolling = function (element, axis) {
  cls.remove(element, 'ps-in-scrolling');
  if (typeof axis !== 'undefined') {
    cls.remove(element, 'ps-' + axis);
  } else {
    cls.remove(element, 'ps-x');
    cls.remove(element, 'ps-y');
  }
};

exports.env = {
  isWebKit: 'WebkitAppearance' in document.documentElement.style,
  supportsTouch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: window.navigator.msMaxTouchPoints !== null
};


/***/ }),

/***/ 2405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function oldAdd(element, className) {
  var classes = element.className.split(' ');
  if (classes.indexOf(className) < 0) {
    classes.push(className);
  }
  element.className = classes.join(' ');
}

function oldRemove(element, className) {
  var classes = element.className.split(' ');
  var idx = classes.indexOf(className);
  if (idx >= 0) {
    classes.splice(idx, 1);
  }
  element.className = classes.join(' ');
}

exports.add = function (element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    oldAdd(element, className);
  }
};

exports.remove = function (element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    oldRemove(element, className);
  }
};

exports.list = function (element) {
  if (element.classList) {
    return Array.prototype.slice.apply(element.classList);
  } else {
    return element.className.split(' ');
  }
};


/***/ }),

/***/ 2406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DOM = {};

DOM.e = function (tagName, className) {
  var element = document.createElement(tagName);
  element.className = className;
  return element;
};

DOM.appendTo = function (child, parent) {
  parent.appendChild(child);
  return child;
};

function cssGet(element, styleName) {
  return window.getComputedStyle(element)[styleName];
}

function cssSet(element, styleName, styleValue) {
  if (typeof styleValue === 'number') {
    styleValue = styleValue.toString() + 'px';
  }
  element.style[styleName] = styleValue;
  return element;
}

function cssMultiSet(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val.toString() + 'px';
    }
    element.style[key] = val;
  }
  return element;
}

DOM.css = function (element, styleNameOrObject, styleValue) {
  if (typeof styleNameOrObject === 'object') {
    // multiple set with object
    return cssMultiSet(element, styleNameOrObject);
  } else {
    if (typeof styleValue === 'undefined') {
      return cssGet(element, styleNameOrObject);
    } else {
      return cssSet(element, styleNameOrObject, styleValue);
    }
  }
};

DOM.matches = function (element, query) {
  if (typeof element.matches !== 'undefined') {
    return element.matches(query);
  } else {
    if (typeof element.matchesSelector !== 'undefined') {
      return element.matchesSelector(query);
    } else if (typeof element.webkitMatchesSelector !== 'undefined') {
      return element.webkitMatchesSelector(query);
    } else if (typeof element.mozMatchesSelector !== 'undefined') {
      return element.mozMatchesSelector(query);
    } else if (typeof element.msMatchesSelector !== 'undefined') {
      return element.msMatchesSelector(query);
    }
  }
};

DOM.remove = function (element) {
  if (typeof element.remove !== 'undefined') {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
};

DOM.queryChildren = function (element, selector) {
  return Array.prototype.filter.call(element.childNodes, function (child) {
    return DOM.matches(child, selector);
  });
};

module.exports = DOM;


/***/ }),

/***/ 2407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var cls = __webpack_require__(2405);
var defaultSettings = __webpack_require__(2408);
var dom = __webpack_require__(2406);
var EventManager = __webpack_require__(2409);
var guid = __webpack_require__(2410);

var instances = {};

function Instance(element) {
  var i = this;

  i.settings = _.clone(defaultSettings);
  i.containerWidth = null;
  i.containerHeight = null;
  i.contentWidth = null;
  i.contentHeight = null;

  i.isRtl = dom.css(element, 'direction') === "rtl";
  i.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  i.event = new EventManager();
  i.ownerDocument = element.ownerDocument || document;

  function focus() {
    cls.add(element, 'ps-focus');
  }

  function blur() {
    cls.remove(element, 'ps-focus');
  }

  i.scrollbarXRail = dom.appendTo(dom.e('div', 'ps-scrollbar-x-rail'), element);
  i.scrollbarX = dom.appendTo(dom.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
  i.scrollbarX.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarX, 'focus', focus);
  i.event.bind(i.scrollbarX, 'blur', blur);
  i.scrollbarXActive = null;
  i.scrollbarXWidth = null;
  i.scrollbarXLeft = null;
  i.scrollbarXBottom = _.toInt(dom.css(i.scrollbarXRail, 'bottom'));
  i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN
  i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : _.toInt(dom.css(i.scrollbarXRail, 'top'));
  i.railBorderXWidth = _.toInt(dom.css(i.scrollbarXRail, 'borderLeftWidth')) + _.toInt(dom.css(i.scrollbarXRail, 'borderRightWidth'));
  // Set rail to display:block to calculate margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  i.railXMarginWidth = _.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + _.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  dom.css(i.scrollbarXRail, 'display', '');
  i.railXWidth = null;
  i.railXRatio = null;

  i.scrollbarYRail = dom.appendTo(dom.e('div', 'ps-scrollbar-y-rail'), element);
  i.scrollbarY = dom.appendTo(dom.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
  i.scrollbarY.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarY, 'focus', focus);
  i.event.bind(i.scrollbarY, 'blur', blur);
  i.scrollbarYActive = null;
  i.scrollbarYHeight = null;
  i.scrollbarYTop = null;
  i.scrollbarYRight = _.toInt(dom.css(i.scrollbarYRail, 'right'));
  i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN
  i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : _.toInt(dom.css(i.scrollbarYRail, 'left'));
  i.scrollbarYOuterWidth = i.isRtl ? _.outerWidth(i.scrollbarY) : null;
  i.railBorderYWidth = _.toInt(dom.css(i.scrollbarYRail, 'borderTopWidth')) + _.toInt(dom.css(i.scrollbarYRail, 'borderBottomWidth'));
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railYMarginHeight = _.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + _.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));
  dom.css(i.scrollbarYRail, 'display', '');
  i.railYHeight = null;
  i.railYRatio = null;
}

function getId(element) {
  return element.getAttribute('data-ps-id');
}

function setId(element, id) {
  element.setAttribute('data-ps-id', id);
}

function removeId(element) {
  element.removeAttribute('data-ps-id');
}

exports.add = function (element) {
  var newId = guid();
  setId(element, newId);
  instances[newId] = new Instance(element);
  return instances[newId];
};

exports.remove = function (element) {
  delete instances[getId(element)];
  removeId(element);
};

exports.get = function (element) {
  return instances[getId(element)];
};


/***/ }),

/***/ 2408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipePropagation: true,
  useBothWheelAxes: false,
  wheelPropagation: false,
  wheelSpeed: 1,
  theme: 'default'
};


/***/ }),

/***/ 2409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventElement = function (element) {
  this.element = element;
  this.events = {};
};

EventElement.prototype.bind = function (eventName, handler) {
  if (typeof this.events[eventName] === 'undefined') {
    this.events[eventName] = [];
  }
  this.events[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function (eventName, handler) {
  var isHandlerProvided = (typeof handler !== 'undefined');
  this.events[eventName] = this.events[eventName].filter(function (hdlr) {
    if (isHandlerProvided && hdlr !== handler) {
      return true;
    }
    this.element.removeEventListener(eventName, hdlr, false);
    return false;
  }, this);
};

EventElement.prototype.unbindAll = function () {
  for (var name in this.events) {
    this.unbind(name);
  }
};

var EventManager = function () {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function (element) {
  var ee = this.eventElements.filter(function (eventElement) {
    return eventElement.element === element;
  })[0];
  if (typeof ee === 'undefined') {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function (element, eventName, handler) {
  this.eventElement(element).unbind(eventName, handler);
};

EventManager.prototype.unbindAll = function () {
  for (var i = 0; i < this.eventElements.length; i++) {
    this.eventElements[i].unbindAll();
  }
};

EventManager.prototype.once = function (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (e) {
    ee.unbind(eventName, onceHandler);
    handler(e);
  };
  ee.bind(eventName, onceHandler);
};

module.exports = EventManager;


/***/ }),

/***/ 2410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();


/***/ }),

/***/ 2411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var cls = __webpack_require__(2405);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);

// Handlers
var handlers = {
  'click-rail': __webpack_require__(2414),
  'drag-scrollbar': __webpack_require__(2415),
  'keyboard': __webpack_require__(2416),
  'wheel': __webpack_require__(2417),
  'touch': __webpack_require__(2418),
  'selection': __webpack_require__(2419)
};
var nativeScrollHandler = __webpack_require__(2420);

module.exports = function (element, userSettings) {
  userSettings = typeof userSettings === 'object' ? userSettings : {};

  cls.add(element, 'ps-container');

  // Create a plugin instance.
  var i = instances.add(element);

  i.settings = _.extend(i.settings, userSettings);
  cls.add(element, 'ps-theme-' + i.settings.theme);

  i.settings.handlers.forEach(function (handlerName) {
    handlers[handlerName](element);
  });

  nativeScrollHandler(element);

  updateGeometry(element);
};


/***/ }),

/***/ 2412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var cls = __webpack_require__(2405);
var dom = __webpack_require__(2406);
var instances = __webpack_require__(2407);
var updateScroll = __webpack_require__(2413);

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = {width: i.railXWidth};
  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + element.scrollTop;
  }
  dom.css(i.scrollbarXRail, xRailOffset);

  var yRailOffset = {top: element.scrollTop, height: i.railYHeight};
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  dom.css(i.scrollbarYRail, yRailOffset);

  dom.css(i.scrollbarX, {left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth});
  dom.css(i.scrollbarY, {top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth});
}

module.exports = function (element) {
  var i = instances.get(element);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  var existingRails;
  if (!element.contains(i.scrollbarXRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-x-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarXRail, element);
  }
  if (!element.contains(i.scrollbarYRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-y-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarYRail, element);
  }

  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, _.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = _.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }

  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, _.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = _.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    cls.add(element, 'ps-active-x');
  } else {
    cls.remove(element, 'ps-active-x');
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    updateScroll(element, 'left', 0);
  }
  if (i.scrollbarYActive) {
    cls.add(element, 'ps-active-y');
  } else {
    cls.remove(element, 'ps-active-y');
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    updateScroll(element, 'top', 0);
  }
};


/***/ }),

/***/ 2413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2407);

var lastTop;
var lastLeft;

var createDOMEvent = function (name) {
  var event = document.createEvent("Event");
  event.initEvent(name, true, true);
  return event;
};

module.exports = function (element, axis, value) {
  if (typeof element === 'undefined') {
    throw 'You must provide an element to the update-scroll function';
  }

  if (typeof axis === 'undefined') {
    throw 'You must provide an axis to the update-scroll function';
  }

  if (typeof value === 'undefined') {
    throw 'You must provide a value to the update-scroll function';
  }

  if (axis === 'top' && value <= 0) {
    element.scrollTop = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-y-reach-start'));
  }

  if (axis === 'left' && value <= 0) {
    element.scrollLeft = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-x-reach-start'));
  }

  var i = instances.get(element);

  if (axis === 'top' && value >= i.contentHeight - i.containerHeight) {
    // don't allow scroll past container
    value = i.contentHeight - i.containerHeight;
    if (value - element.scrollTop <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollTop;
    } else {
      element.scrollTop = value;
    }
    element.dispatchEvent(createDOMEvent('ps-y-reach-end'));
  }

  if (axis === 'left' && value >= i.contentWidth - i.containerWidth) {
    // don't allow scroll past container
    value = i.contentWidth - i.containerWidth;
    if (value - element.scrollLeft <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollLeft;
    } else {
      element.scrollLeft = value;
    }
    element.dispatchEvent(createDOMEvent('ps-x-reach-end'));
  }

  if (!lastTop) {
    lastTop = element.scrollTop;
  }

  if (!lastLeft) {
    lastLeft = element.scrollLeft;
  }

  if (axis === 'top' && value < lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-up'));
  }

  if (axis === 'top' && value > lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-down'));
  }

  if (axis === 'left' && value < lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-left'));
  }

  if (axis === 'left' && value > lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-right'));
  }

  if (axis === 'top') {
    element.scrollTop = lastTop = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-y'));
  }

  if (axis === 'left') {
    element.scrollLeft = lastLeft = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-x'));
  }

};


/***/ }),

/***/ 2414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindClickRailHandler(element, i) {
  function pageOffset(el) {
    return el.getBoundingClientRect();
  }
  var stopPropagation = function (e) { e.stopPropagation(); };

  i.event.bind(i.scrollbarY, 'click', stopPropagation);
  i.event.bind(i.scrollbarYRail, 'click', function (e) {
    var positionTop = e.pageY - window.pageYOffset - pageOffset(i.scrollbarYRail).top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    updateScroll(element, 'top', element.scrollTop + direction * i.containerHeight);
    updateGeometry(element);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'click', stopPropagation);
  i.event.bind(i.scrollbarXRail, 'click', function (e) {
    var positionLeft = e.pageX - window.pageXOffset - pageOffset(i.scrollbarXRail).left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    updateScroll(element, 'left', element.scrollLeft + direction * i.containerWidth);
    updateGeometry(element);

    e.stopPropagation();
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindClickRailHandler(element, i);
};


/***/ }),

/***/ 2415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var dom = __webpack_require__(2406);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindMouseScrollXHandler(element, i) {
  var currentLeft = null;
  var currentPageX = null;

  function updateScrollLeft(deltaX) {
    var newLeft = currentLeft + (deltaX * i.railXRatio);
    var maxLeft = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + (i.railXRatio * (i.railXWidth - i.scrollbarXWidth));

    if (newLeft < 0) {
      i.scrollbarXLeft = 0;
    } else if (newLeft > maxLeft) {
      i.scrollbarXLeft = maxLeft;
    } else {
      i.scrollbarXLeft = newLeft;
    }

    var scrollLeft = _.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - (i.railXRatio * i.scrollbarXWidth))) - i.negativeScrollAdjustment;
    updateScroll(element, 'left', scrollLeft);
  }

  var mouseMoveHandler = function (e) {
    updateScrollLeft(e.pageX - currentPageX);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    _.stopScrolling(element, 'x');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarX, 'mousedown', function (e) {
    currentPageX = e.pageX;
    currentLeft = _.toInt(dom.css(i.scrollbarX, 'left')) * i.railXRatio;
    _.startScrolling(element, 'x');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

function bindMouseScrollYHandler(element, i) {
  var currentTop = null;
  var currentPageY = null;

  function updateScrollTop(deltaY) {
    var newTop = currentTop + (deltaY * i.railYRatio);
    var maxTop = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + (i.railYRatio * (i.railYHeight - i.scrollbarYHeight));

    if (newTop < 0) {
      i.scrollbarYTop = 0;
    } else if (newTop > maxTop) {
      i.scrollbarYTop = maxTop;
    } else {
      i.scrollbarYTop = newTop;
    }

    var scrollTop = _.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - (i.railYRatio * i.scrollbarYHeight)));
    updateScroll(element, 'top', scrollTop);
  }

  var mouseMoveHandler = function (e) {
    updateScrollTop(e.pageY - currentPageY);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    _.stopScrolling(element, 'y');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarY, 'mousedown', function (e) {
    currentPageY = e.pageY;
    currentTop = _.toInt(dom.css(i.scrollbarY, 'top')) * i.railYRatio;
    _.startScrolling(element, 'y');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindMouseScrollXHandler(element, i);
  bindMouseScrollYHandler(element, i);
};


/***/ }),

/***/ 2416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var dom = __webpack_require__(2406);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindKeyboardHandler(element, i) {
  var hovered = false;
  i.event.bind(element, 'mouseenter', function () {
    hovered = true;
  });
  i.event.bind(element, 'mouseleave', function () {
    hovered = false;
  });

  var shouldPrevent = false;
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if ((e.isDefaultPrevented && e.isDefaultPrevented()) || e.defaultPrevented) {
      return;
    }

    var focused = dom.matches(i.scrollbarX, ':focus') ||
                  dom.matches(i.scrollbarY, ':focus');

    if (!hovered && !focused) {
      return;
    }

    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (_.isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
    case 37: // left
      if (e.metaKey) {
        deltaX = -i.contentWidth;
      } else if (e.altKey) {
        deltaX = -i.containerWidth;
      } else {
        deltaX = -30;
      }
      break;
    case 38: // up
      if (e.metaKey) {
        deltaY = i.contentHeight;
      } else if (e.altKey) {
        deltaY = i.containerHeight;
      } else {
        deltaY = 30;
      }
      break;
    case 39: // right
      if (e.metaKey) {
        deltaX = i.contentWidth;
      } else if (e.altKey) {
        deltaX = i.containerWidth;
      } else {
        deltaX = 30;
      }
      break;
    case 40: // down
      if (e.metaKey) {
        deltaY = -i.contentHeight;
      } else if (e.altKey) {
        deltaY = -i.containerHeight;
      } else {
        deltaY = -30;
      }
      break;
    case 33: // page up
      deltaY = 90;
      break;
    case 32: // space bar
      if (e.shiftKey) {
        deltaY = 90;
      } else {
        deltaY = -90;
      }
      break;
    case 34: // page down
      deltaY = -90;
      break;
    case 35: // end
      if (e.ctrlKey) {
        deltaY = -i.contentHeight;
      } else {
        deltaY = -i.containerHeight;
      }
      break;
    case 36: // home
      if (e.ctrlKey) {
        deltaY = element.scrollTop;
      } else {
        deltaY = i.containerHeight;
      }
      break;
    default:
      return;
    }

    updateScroll(element, 'top', element.scrollTop - deltaY);
    updateScroll(element, 'left', element.scrollLeft + deltaX);
    updateGeometry(element);

    shouldPrevent = shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent) {
      e.preventDefault();
    }
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindKeyboardHandler(element, i);
};


/***/ }),

/***/ 2417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindMouseWheelHandler(element, i) {
  var shouldPrevent = false;

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY/* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(deltaX, deltaY) {
    var child = element.querySelector('textarea:hover, select[multiple]:hover, .ps-child:hover');
    if (child) {
      if (child.className.match(/ps-must-propagate/)) {
        // force consumption by child
        return true;
      }
      if (!window.getComputedStyle(child).overflow.match(/(scroll|auto)/)) {
        // if not scrollable
        return false;
      }



      var maxScrollTop = child.scrollHeight - child.clientHeight;
      if (maxScrollTop > 0) {
        if (!(child.scrollTop === 0 && deltaY > 0) && !(child.scrollTop === maxScrollTop && deltaY < 0)) {
          return true;
        }
      }
      var maxScrollLeft = child.scrollLeft - child.clientWidth;
      if (maxScrollLeft > 0) {
        if (!(child.scrollLeft === 0 && deltaX < 0) && !(child.scrollLeft === maxScrollLeft && deltaX > 0)) {
          return true;
        }
      }
    }
    return false;
  }

  function mousewheelHandler(e) {
    var delta = getDeltaFromEvent(e);

    var deltaX = delta[0];
    var deltaY = delta[1];

    if (shouldBeConsumedByChild(deltaX, deltaY)) {
      return;
    }

    shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      updateScroll(element, 'top', element.scrollTop - (deltaY * i.settings.wheelSpeed));
      updateScroll(element, 'left', element.scrollLeft + (deltaX * i.settings.wheelSpeed));
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        updateScroll(element, 'top', element.scrollTop - (deltaY * i.settings.wheelSpeed));
      } else {
        updateScroll(element, 'top', element.scrollTop + (deltaX * i.settings.wheelSpeed));
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        updateScroll(element, 'left', element.scrollLeft + (deltaX * i.settings.wheelSpeed));
      } else {
        updateScroll(element, 'left', element.scrollLeft - (deltaY * i.settings.wheelSpeed));
      }
      shouldPrevent = true;
    }

    updateGeometry(element);

    shouldPrevent = (shouldPrevent || shouldPreventDefault(deltaX, deltaY));
    if (shouldPrevent) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

module.exports = function (element) {
  var i = instances.get(element);
  bindMouseWheelHandler(element, i);
};


/***/ }),

/***/ 2418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (((deltaY < 0) && (scrollTop === i.contentHeight - i.containerHeight)) ||
          ((deltaY > 0) && (scrollTop === 0))) {
        return !i.settings.swipePropagation;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (((deltaX < 0) && (scrollLeft === i.contentWidth - i.containerWidth)) ||
          ((deltaX > 0) && (scrollLeft === 0))) {
        return !i.settings.swipePropagation;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    updateScroll(element, 'top', element.scrollTop - differenceY);
    updateScroll(element, 'left', element.scrollLeft - differenceX);

    updateGeometry(element);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;
  var inGlobalTouch = false;
  var inLocalTouch = false;

  function globalTouchStart() {
    inGlobalTouch = true;
  }
  function globalTouchEnd() {
    inGlobalTouch = false;
  }

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }
  function shouldHandle(e) {
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (shouldHandle(e)) {
      inLocalTouch = true;

      var touch = getTouch(e);

      startOffset.pageX = touch.pageX;
      startOffset.pageY = touch.pageY;

      startTime = (new Date()).getTime();

      if (easingLoop !== null) {
        clearInterval(easingLoop);
      }

      e.stopPropagation();
    }
  }
  function touchMove(e) {
    if (!inLocalTouch && i.settings.swipePropagation) {
      touchStart(e);
    }
    if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = {pageX: touch.pageX, pageY: touch.pageY};

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = (new Date()).getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPreventDefault(differenceX, differenceY)) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (!inGlobalTouch && inLocalTouch) {
      inLocalTouch = false;

      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (!instances.get(element)) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (supportsTouch) {
    i.event.bind(window, 'touchstart', globalTouchStart);
    i.event.bind(window, 'touchend', globalTouchEnd);
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(window, 'pointerdown', globalTouchStart);
      i.event.bind(window, 'pointerup', globalTouchEnd);
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(window, 'MSPointerDown', globalTouchStart);
      i.event.bind(window, 'MSPointerUp', globalTouchEnd);
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

module.exports = function (element) {
  if (!_.env.supportsTouch && !_.env.supportsIePointer) {
    return;
  }

  var i = instances.get(element);
  bindTouchHandler(element, i, _.env.supportsTouch, _.env.supportsIePointer);
};


/***/ }),

/***/ 2419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

function bindSelectionHandler(element, i) {
  function getRangeNode() {
    var selection = window.getSelection ? window.getSelection() :
                    document.getSelection ? document.getSelection() : '';
    if (selection.toString().length === 0) {
      return null;
    } else {
      return selection.getRangeAt(0).commonAncestorContainer;
    }
  }

  var scrollingLoop = null;
  var scrollDiff = {top: 0, left: 0};
  function startScrolling() {
    if (!scrollingLoop) {
      scrollingLoop = setInterval(function () {
        if (!instances.get(element)) {
          clearInterval(scrollingLoop);
          return;
        }

        updateScroll(element, 'top', element.scrollTop + scrollDiff.top);
        updateScroll(element, 'left', element.scrollLeft + scrollDiff.left);
        updateGeometry(element);
      }, 50); // every .1 sec
    }
  }
  function stopScrolling() {
    if (scrollingLoop) {
      clearInterval(scrollingLoop);
      scrollingLoop = null;
    }
    _.stopScrolling(element);
  }

  var isSelected = false;
  i.event.bind(i.ownerDocument, 'selectionchange', function () {
    if (element.contains(getRangeNode())) {
      isSelected = true;
    } else {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'mouseup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'keyup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });

  i.event.bind(window, 'mousemove', function (e) {
    if (isSelected) {
      var mousePosition = {x: e.pageX, y: e.pageY};
      var containerGeometry = {
        left: element.offsetLeft,
        right: element.offsetLeft + element.offsetWidth,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight
      };

      if (mousePosition.x < containerGeometry.left + 3) {
        scrollDiff.left = -5;
        _.startScrolling(element, 'x');
      } else if (mousePosition.x > containerGeometry.right - 3) {
        scrollDiff.left = 5;
        _.startScrolling(element, 'x');
      } else {
        scrollDiff.left = 0;
      }

      if (mousePosition.y < containerGeometry.top + 3) {
        if (containerGeometry.top + 3 - mousePosition.y < 5) {
          scrollDiff.top = -5;
        } else {
          scrollDiff.top = -20;
        }
        _.startScrolling(element, 'y');
      } else if (mousePosition.y > containerGeometry.bottom - 3) {
        if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
          scrollDiff.top = 5;
        } else {
          scrollDiff.top = 20;
        }
        _.startScrolling(element, 'y');
      } else {
        scrollDiff.top = 0;
      }

      if (scrollDiff.top === 0 && scrollDiff.left === 0) {
        stopScrolling();
      } else {
        startScrolling();
      }
    }
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindSelectionHandler(element, i);
};


/***/ }),

/***/ 2420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);

function bindNativeScrollHandler(element, i) {
  i.event.bind(element, 'scroll', function () {
    updateGeometry(element);
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindNativeScrollHandler(element, i);
};


/***/ }),

/***/ 2421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2404);
var dom = __webpack_require__(2406);
var instances = __webpack_require__(2407);
var updateGeometry = __webpack_require__(2412);
var updateScroll = __webpack_require__(2413);

module.exports = function (element) {
  var i = instances.get(element);

  if (!i) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;

  // Recalculate rail margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railXMarginWidth = _.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + _.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  i.railYMarginHeight = _.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + _.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  dom.css(i.scrollbarXRail, 'display', 'none');
  dom.css(i.scrollbarYRail, 'display', 'none');

  updateGeometry(element);

  // Update top/left scroll to trigger events
  updateScroll(element, 'top', element.scrollTop);
  updateScroll(element, 'left', element.scrollLeft);

  dom.css(i.scrollbarXRail, 'display', '');
  dom.css(i.scrollbarYRail, 'display', '');
};


/***/ }),

/***/ 2425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(2426);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(2430);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(2437);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  true ? propTypes : undefined;
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 2426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(2427);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(2428);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(2429);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : undefined;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 2427:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 2428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 2429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(377);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 2430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(2431);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(2433);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(2434);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(2436);

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(386);

var _PropTypes = __webpack_require__(2437);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  true ? propTypes : undefined;

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 2431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(2432);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ 2432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 2433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 2434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(2435);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 2435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 2436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(2435);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 2437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(377);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50fmRhc2hib2FyZH5kYXNoYm9hcmQtYWNjb3VudHN+ZGVwb3NpdC13aXRoZHJhd35leGNoYW5nZX5leHBsb3Jlcn50cmFuc2Zlci5mMDE1OTRjYmU1NTBmNWU0Zjk0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vZGVzdHJveS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2luc3RhbmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9kZWZhdWx0LXNldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvZXZlbnQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9ndWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vdXBkYXRlLWdlb21ldHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL3VwZGF0ZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9jbGljay1yYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2hhbmRsZXIvZHJhZy1zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL21vdXNlLXdoZWVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2hhbmRsZXIvdG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdXRpbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9qcy9tYWluJyk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkZXN0cm95ID0gcmVxdWlyZSgnLi9wbHVnaW4vZGVzdHJveScpO1xyXG52YXIgaW5pdGlhbGl6ZSA9IHJlcXVpcmUoJy4vcGx1Z2luL2luaXRpYWxpemUnKTtcclxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vcGx1Z2luL3VwZGF0ZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcclxuICB1cGRhdGU6IHVwZGF0ZSxcclxuICBkZXN0cm95OiBkZXN0cm95XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcblxyXG4gIGlmICghaSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaS5ldmVudC51bmJpbmRBbGwoKTtcclxuICBkb20ucmVtb3ZlKGkuc2Nyb2xsYmFyWCk7XHJcbiAgZG9tLnJlbW92ZShpLnNjcm9sbGJhclkpO1xyXG4gIGRvbS5yZW1vdmUoaS5zY3JvbGxiYXJYUmFpbCk7XHJcbiAgZG9tLnJlbW92ZShpLnNjcm9sbGJhcllSYWlsKTtcclxuICBfLnJlbW92ZVBzQ2xhc3NlcyhlbGVtZW50KTtcclxuXHJcbiAgaW5zdGFuY2VzLnJlbW92ZShlbGVtZW50KTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGNscyA9IHJlcXVpcmUoJy4vY2xhc3MnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XHJcblxyXG52YXIgdG9JbnQgPSBleHBvcnRzLnRvSW50ID0gZnVuY3Rpb24gKHgpIHtcclxuICByZXR1cm4gcGFyc2VJbnQoeCwgMTApIHx8IDA7XHJcbn07XHJcblxyXG52YXIgY2xvbmUgPSBleHBvcnRzLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgIHJldHVybiBvYmoubWFwKGNsb25lKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gY2xvbmUob2JqW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmV4dGVuZCA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgc291cmNlKSB7XHJcbiAgdmFyIHJlc3VsdCA9IGNsb25lKG9yaWdpbmFsKTtcclxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICByZXN1bHRba2V5XSA9IGNsb25lKHNvdXJjZVtrZXldKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydHMuaXNFZGl0YWJsZSA9IGZ1bmN0aW9uIChlbCkge1xyXG4gIHJldHVybiBkb20ubWF0Y2hlcyhlbCwgXCJpbnB1dCxbY29udGVudGVkaXRhYmxlXVwiKSB8fFxyXG4gICAgICAgICBkb20ubWF0Y2hlcyhlbCwgXCJzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV1cIikgfHxcclxuICAgICAgICAgZG9tLm1hdGNoZXMoZWwsIFwidGV4dGFyZWEsW2NvbnRlbnRlZGl0YWJsZV1cIikgfHxcclxuICAgICAgICAgZG9tLm1hdGNoZXMoZWwsIFwiYnV0dG9uLFtjb250ZW50ZWRpdGFibGVdXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5yZW1vdmVQc0NsYXNzZXMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBjbHNMaXN0ID0gY2xzLmxpc3QoZWxlbWVudCk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xzTGlzdFtpXTtcclxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZigncHMtJykgPT09IDApIHtcclxuICAgICAgY2xzLnJlbW92ZShlbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMub3V0ZXJXaWR0aCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIHRvSW50KGRvbS5jc3MoZWxlbWVudCwgJ3dpZHRoJykpICtcclxuICAgICAgICAgdG9JbnQoZG9tLmNzcyhlbGVtZW50LCAncGFkZGluZ0xlZnQnKSkgK1xyXG4gICAgICAgICB0b0ludChkb20uY3NzKGVsZW1lbnQsICdwYWRkaW5nUmlnaHQnKSkgK1xyXG4gICAgICAgICB0b0ludChkb20uY3NzKGVsZW1lbnQsICdib3JkZXJMZWZ0V2lkdGgnKSkgK1xyXG4gICAgICAgICB0b0ludChkb20uY3NzKGVsZW1lbnQsICdib3JkZXJSaWdodFdpZHRoJykpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFNjcm9sbGluZyA9IGZ1bmN0aW9uIChlbGVtZW50LCBheGlzKSB7XHJcbiAgY2xzLmFkZChlbGVtZW50LCAncHMtaW4tc2Nyb2xsaW5nJyk7XHJcbiAgaWYgKHR5cGVvZiBheGlzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMtJyArIGF4aXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy14Jyk7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy15Jyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wU2Nyb2xsaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF4aXMpIHtcclxuICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1pbi1zY3JvbGxpbmcnKTtcclxuICBpZiAodHlwZW9mIGF4aXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy0nICsgYXhpcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLXgnKTtcclxuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLXknKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmVudiA9IHtcclxuICBpc1dlYktpdDogJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICBzdXBwb3J0c1RvdWNoOiAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCksXHJcbiAgc3VwcG9ydHNJZVBvaW50ZXI6IHdpbmRvdy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAhPT0gbnVsbFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBvbGRBZGQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gIGlmIChjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA8IDApIHtcclxuICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbGRSZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gIHZhciBpZHggPSBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKTtcclxuICBpZiAoaWR4ID49IDApIHtcclxuICAgIGNsYXNzZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgfVxyXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmV4cG9ydHMuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9sZEFkZChlbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9sZFJlbW92ZShlbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMubGlzdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsZW1lbnQuY2xhc3NMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgRE9NID0ge307XHJcblxyXG5ET00uZSA9IGZ1bmN0aW9uICh0YWdOYW1lLCBjbGFzc05hbWUpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5ET00uYXBwZW5kVG8gPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xyXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgcmV0dXJuIGNoaWxkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3NzR2V0KGVsZW1lbnQsIHN0eWxlTmFtZSkge1xyXG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZU5hbWVdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjc3NTZXQoZWxlbWVudCwgc3R5bGVOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgc3R5bGVWYWx1ZSA9IHN0eWxlVmFsdWUudG9TdHJpbmcoKSArICdweCc7XHJcbiAgfVxyXG4gIGVsZW1lbnQuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNzc011bHRpU2V0KGVsZW1lbnQsIG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB2YWwudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWw7XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5ET00uY3NzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0LCBzdHlsZVZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZU5hbWVPck9iamVjdCA9PT0gJ29iamVjdCcpIHtcclxuICAgIC8vIG11bHRpcGxlIHNldCB3aXRoIG9iamVjdFxyXG4gICAgcmV0dXJuIGNzc011bHRpU2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gY3NzR2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjc3NTZXQoZWxlbWVudCwgc3R5bGVOYW1lT3JPYmplY3QsIHN0eWxlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkRPTS5tYXRjaGVzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHF1ZXJ5KSB7XHJcbiAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHF1ZXJ5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuRE9NLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgaWYgKHR5cGVvZiBlbGVtZW50LnJlbW92ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkRPTS5xdWVyeUNoaWxkcmVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgcmV0dXJuIERPTS5tYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERPTTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi9saWIvaGVscGVyJyk7XHJcbnZhciBjbHMgPSByZXF1aXJlKCcuLi9saWIvY2xhc3MnKTtcclxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vZGVmYXVsdC1zZXR0aW5nJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi9saWIvZG9tJyk7XHJcbnZhciBFdmVudE1hbmFnZXIgPSByZXF1aXJlKCcuLi9saWIvZXZlbnQtbWFuYWdlcicpO1xyXG52YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL2xpYi9ndWlkJyk7XHJcblxyXG52YXIgaW5zdGFuY2VzID0ge307XHJcblxyXG5mdW5jdGlvbiBJbnN0YW5jZShlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSB0aGlzO1xyXG5cclxuICBpLnNldHRpbmdzID0gXy5jbG9uZShkZWZhdWx0U2V0dGluZ3MpO1xyXG4gIGkuY29udGFpbmVyV2lkdGggPSBudWxsO1xyXG4gIGkuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcclxuICBpLmNvbnRlbnRXaWR0aCA9IG51bGw7XHJcbiAgaS5jb250ZW50SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgaS5pc1J0bCA9IGRvbS5jc3MoZWxlbWVudCwgJ2RpcmVjdGlvbicpID09PSBcInJ0bFwiO1xyXG4gIGkuaXNOZWdhdGl2ZVNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMTtcclxuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XHJcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBvcmlnaW5hbFNjcm9sbExlZnQ7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pKCk7XHJcbiAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSBpLmlzTmVnYXRpdmVTY3JvbGwgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCA6IDA7XHJcbiAgaS5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICBpLm93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGZvY3VzKCkge1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMtZm9jdXMnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJsdXIoKSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1mb2N1cycpO1xyXG4gIH1cclxuXHJcbiAgaS5zY3JvbGxiYXJYUmFpbCA9IGRvbS5hcHBlbmRUbyhkb20uZSgnZGl2JywgJ3BzLXNjcm9sbGJhci14LXJhaWwnKSwgZWxlbWVudCk7XHJcbiAgaS5zY3JvbGxiYXJYID0gZG9tLmFwcGVuZFRvKGRvbS5lKCdkaXYnLCAncHMtc2Nyb2xsYmFyLXgnKSwgaS5zY3JvbGxiYXJYUmFpbCk7XHJcbiAgaS5zY3JvbGxiYXJYLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnZm9jdXMnLCBmb2N1cyk7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcclxuICBpLnNjcm9sbGJhclhBY3RpdmUgPSBudWxsO1xyXG4gIGkuc2Nyb2xsYmFyWFdpZHRoID0gbnVsbDtcclxuICBpLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcclxuICBpLnNjcm9sbGJhclhCb3R0b20gPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2JvdHRvbScpKTtcclxuICBpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gaS5zY3JvbGxiYXJYQm90dG9tID09PSBpLnNjcm9sbGJhclhCb3R0b207IC8vICFpc05hTlxyXG4gIGkuc2Nyb2xsYmFyWFRvcCA9IGkuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPyBudWxsIDogXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICd0b3AnKSk7XHJcbiAgaS5yYWlsQm9yZGVyWFdpZHRoID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdib3JkZXJMZWZ0V2lkdGgnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2JvcmRlclJpZ2h0V2lkdGgnKSk7XHJcbiAgLy8gU2V0IHJhaWwgdG8gZGlzcGxheTpibG9jayB0byBjYWxjdWxhdGUgbWFyZ2luc1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICBpLnJhaWxYTWFyZ2luV2lkdGggPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpbkxlZnQnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpblJpZ2h0JykpO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnJyk7XHJcbiAgaS5yYWlsWFdpZHRoID0gbnVsbDtcclxuICBpLnJhaWxYUmF0aW8gPSBudWxsO1xyXG5cclxuICBpLnNjcm9sbGJhcllSYWlsID0gZG9tLmFwcGVuZFRvKGRvbS5lKCdkaXYnLCAncHMtc2Nyb2xsYmFyLXktcmFpbCcpLCBlbGVtZW50KTtcclxuICBpLnNjcm9sbGJhclkgPSBkb20uYXBwZW5kVG8oZG9tLmUoJ2RpdicsICdwcy1zY3JvbGxiYXIteScpLCBpLnNjcm9sbGJhcllSYWlsKTtcclxuICBpLnNjcm9sbGJhclkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnYmx1cicsIGJsdXIpO1xyXG4gIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcclxuICBpLnNjcm9sbGJhcllUb3AgPSBudWxsO1xyXG4gIGkuc2Nyb2xsYmFyWVJpZ2h0ID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdyaWdodCcpKTtcclxuICBpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSBpLnNjcm9sbGJhcllSaWdodCA9PT0gaS5zY3JvbGxiYXJZUmlnaHQ7IC8vICFpc05hTlxyXG4gIGkuc2Nyb2xsYmFyWUxlZnQgPSBpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPyBudWxsIDogXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdsZWZ0JykpO1xyXG4gIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGggPSBpLmlzUnRsID8gXy5vdXRlcldpZHRoKGkuc2Nyb2xsYmFyWSkgOiBudWxsO1xyXG4gIGkucmFpbEJvcmRlcllXaWR0aCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnYm9yZGVyVG9wV2lkdGgnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2JvcmRlckJvdHRvbVdpZHRoJykpO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICBpLnJhaWxZTWFyZ2luSGVpZ2h0ID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Ub3AnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ21hcmdpbkJvdHRvbScpKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJycpO1xyXG4gIGkucmFpbFlIZWlnaHQgPSBudWxsO1xyXG4gIGkucmFpbFlSYXRpbyA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElkKGVsZW1lbnQpIHtcclxuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHMtaWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SWQoZWxlbWVudCwgaWQpIHtcclxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcy1pZCcsIGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSWQoZWxlbWVudCkge1xyXG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXBzLWlkJyk7XHJcbn1cclxuXHJcbmV4cG9ydHMuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgbmV3SWQgPSBndWlkKCk7XHJcbiAgc2V0SWQoZWxlbWVudCwgbmV3SWQpO1xyXG4gIGluc3RhbmNlc1tuZXdJZF0gPSBuZXcgSW5zdGFuY2UoZWxlbWVudCk7XHJcbiAgcmV0dXJuIGluc3RhbmNlc1tuZXdJZF07XHJcbn07XHJcblxyXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgZGVsZXRlIGluc3RhbmNlc1tnZXRJZChlbGVtZW50KV07XHJcbiAgcmVtb3ZlSWQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGluc3RhbmNlc1tnZXRJZChlbGVtZW50KV07XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGhhbmRsZXJzOiBbJ2NsaWNrLXJhaWwnLCAnZHJhZy1zY3JvbGxiYXInLCAna2V5Ym9hcmQnLCAnd2hlZWwnLCAndG91Y2gnXSxcclxuICBtYXhTY3JvbGxiYXJMZW5ndGg6IG51bGwsXHJcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxyXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXHJcbiAgc2Nyb2xsWU1hcmdpbk9mZnNldDogMCxcclxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxyXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXHJcbiAgc3dpcGVQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcclxuICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZSxcclxuICB3aGVlbFNwZWVkOiAxLFxyXG4gIHRoZW1lOiAnZGVmYXVsdCdcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB0aGlzLmV2ZW50cyA9IHt9O1xyXG59O1xyXG5cclxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuICB9XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xyXG59O1xyXG5cclxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIGlzSGFuZGxlclByb3ZpZGVkID0gKHR5cGVvZiBoYW5kbGVyICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGZ1bmN0aW9uIChoZGxyKSB7XHJcbiAgICBpZiAoaXNIYW5kbGVyUHJvdmlkZWQgJiYgaGRsciAhPT0gaGFuZGxlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGRsciwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sIHRoaXMpO1xyXG59O1xyXG5cclxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmV2ZW50cykge1xyXG4gICAgdGhpcy51bmJpbmQobmFtZSk7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcclxufTtcclxuXHJcbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuZXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChldmVudEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBldmVudEVsZW1lbnQuZWxlbWVudCA9PT0gZWxlbWVudDtcclxuICB9KVswXTtcclxuICBpZiAodHlwZW9mIGVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgZWUgPSBuZXcgRXZlbnRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xyXG4gIH1cclxuICByZXR1cm4gZWU7XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkudW5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5ldmVudEVsZW1lbnRzW2ldLnVuYmluZEFsbCgpO1xyXG4gIH1cclxufTtcclxuXHJcbkV2ZW50TWFuYWdlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcclxuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xyXG4gICAgaGFuZGxlcihlKTtcclxuICB9O1xyXG4gIGVlLmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50TWFuYWdlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcclxuICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gIH07XHJcbn0pKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG5cclxuLy8gSGFuZGxlcnNcclxudmFyIGhhbmRsZXJzID0ge1xyXG4gICdjbGljay1yYWlsJzogcmVxdWlyZSgnLi9oYW5kbGVyL2NsaWNrLXJhaWwnKSxcclxuICAnZHJhZy1zY3JvbGxiYXInOiByZXF1aXJlKCcuL2hhbmRsZXIvZHJhZy1zY3JvbGxiYXInKSxcclxuICAna2V5Ym9hcmQnOiByZXF1aXJlKCcuL2hhbmRsZXIva2V5Ym9hcmQnKSxcclxuICAnd2hlZWwnOiByZXF1aXJlKCcuL2hhbmRsZXIvbW91c2Utd2hlZWwnKSxcclxuICAndG91Y2gnOiByZXF1aXJlKCcuL2hhbmRsZXIvdG91Y2gnKSxcclxuICAnc2VsZWN0aW9uJzogcmVxdWlyZSgnLi9oYW5kbGVyL3NlbGVjdGlvbicpXHJcbn07XHJcbnZhciBuYXRpdmVTY3JvbGxIYW5kbGVyID0gcmVxdWlyZSgnLi9oYW5kbGVyL25hdGl2ZS1zY3JvbGwnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHVzZXJTZXR0aW5ncykge1xyXG4gIHVzZXJTZXR0aW5ncyA9IHR5cGVvZiB1c2VyU2V0dGluZ3MgPT09ICdvYmplY3QnID8gdXNlclNldHRpbmdzIDoge307XHJcblxyXG4gIGNscy5hZGQoZWxlbWVudCwgJ3BzLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBwbHVnaW4gaW5zdGFuY2UuXHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuYWRkKGVsZW1lbnQpO1xyXG5cclxuICBpLnNldHRpbmdzID0gXy5leHRlbmQoaS5zZXR0aW5ncywgdXNlclNldHRpbmdzKTtcclxuICBjbHMuYWRkKGVsZW1lbnQsICdwcy10aGVtZS0nICsgaS5zZXR0aW5ncy50aGVtZSk7XHJcblxyXG4gIGkuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHtcclxuICAgIGhhbmRsZXJzW2hhbmRsZXJOYW1lXShlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgbmF0aXZlU2Nyb2xsSGFuZGxlcihlbGVtZW50KTtcclxuXHJcbiAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi9saWIvZG9tJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYlNpemUoaSwgdGh1bWJTaXplKSB7XHJcbiAgaWYgKGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKSB7XHJcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcclxuICB9XHJcbiAgaWYgKGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKSB7XHJcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRodW1iU2l6ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsZW1lbnQsIGkpIHtcclxuICB2YXIgeFJhaWxPZmZzZXQgPSB7d2lkdGg6IGkucmFpbFhXaWR0aH07XHJcbiAgaWYgKGkuaXNSdGwpIHtcclxuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGkuY29udGFpbmVyV2lkdGggLSBpLmNvbnRlbnRXaWR0aDtcclxuICB9IGVsc2Uge1xyXG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICB9XHJcbiAgaWYgKGkuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20pIHtcclxuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB4UmFpbE9mZnNldC50b3AgPSBpLnNjcm9sbGJhclhUb3AgKyBlbGVtZW50LnNjcm9sbFRvcDtcclxuICB9XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCB4UmFpbE9mZnNldCk7XHJcblxyXG4gIHZhciB5UmFpbE9mZnNldCA9IHt0b3A6IGVsZW1lbnQuc2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHR9O1xyXG4gIGlmIChpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQpIHtcclxuICAgIGlmIChpLmlzUnRsKSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5jb250ZW50V2lkdGggLSAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpIC0gaS5zY3JvbGxiYXJZUmlnaHQgLSBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPSBpLnNjcm9sbGJhcllSaWdodCAtIGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGkuaXNSdGwpIHtcclxuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgaS5jb250YWluZXJXaWR0aCAqIDIgLSBpLmNvbnRlbnRXaWR0aCAtIGkuc2Nyb2xsYmFyWUxlZnQgLSBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkuc2Nyb2xsYmFyWUxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xyXG5cclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWCwge2xlZnQ6IGkuc2Nyb2xsYmFyWExlZnQsIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aH0pO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZLCB7dG9wOiBpLnNjcm9sbGJhcllUb3AsIGhlaWdodDogaS5zY3JvbGxiYXJZSGVpZ2h0IC0gaS5yYWlsQm9yZGVyWVdpZHRofSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcblxyXG4gIGkuY29udGFpbmVyV2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gIGkuY29udGFpbmVySGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgaS5jb250ZW50V2lkdGggPSBlbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gIGkuY29udGVudEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICB2YXIgZXhpc3RpbmdSYWlscztcclxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJYUmFpbCkpIHtcclxuICAgIGV4aXN0aW5nUmFpbHMgPSBkb20ucXVlcnlDaGlsZHJlbihlbGVtZW50LCAnLnBzLXNjcm9sbGJhci14LXJhaWwnKTtcclxuICAgIGlmIChleGlzdGluZ1JhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXhpc3RpbmdSYWlscy5mb3JFYWNoKGZ1bmN0aW9uIChyYWlsKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZShyYWlsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkb20uYXBwZW5kVG8oaS5zY3JvbGxiYXJYUmFpbCwgZWxlbWVudCk7XHJcbiAgfVxyXG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhcllSYWlsKSkge1xyXG4gICAgZXhpc3RpbmdSYWlscyA9IGRvbS5xdWVyeUNoaWxkcmVuKGVsZW1lbnQsICcucHMtc2Nyb2xsYmFyLXktcmFpbCcpO1xyXG4gICAgaWYgKGV4aXN0aW5nUmFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBleGlzdGluZ1JhaWxzLmZvckVhY2goZnVuY3Rpb24gKHJhaWwpIHtcclxuICAgICAgICBkb20ucmVtb3ZlKHJhaWwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGRvbS5hcHBlbmRUbyhpLnNjcm9sbGJhcllSYWlsLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGlmICghaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgaS5jb250YWluZXJXaWR0aCArIGkuc2V0dGluZ3Muc2Nyb2xsWE1hcmdpbk9mZnNldCA8IGkuY29udGVudFdpZHRoKSB7XHJcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xyXG4gICAgaS5yYWlsWFdpZHRoID0gaS5jb250YWluZXJXaWR0aCAtIGkucmFpbFhNYXJnaW5XaWR0aDtcclxuICAgIGkucmFpbFhSYXRpbyA9IGkuY29udGFpbmVyV2lkdGggLyBpLnJhaWxYV2lkdGg7XHJcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShpLCBfLnRvSW50KGkucmFpbFhXaWR0aCAqIGkuY29udGFpbmVyV2lkdGggLyBpLmNvbnRlbnRXaWR0aCkpO1xyXG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IF8udG9JbnQoKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAqIChpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkgLyAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBpLmNvbnRhaW5lckhlaWdodCArIGkuc2V0dGluZ3Muc2Nyb2xsWU1hcmdpbk9mZnNldCA8IGkuY29udGVudEhlaWdodCkge1xyXG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcclxuICAgIGkucmFpbFlIZWlnaHQgPSBpLmNvbnRhaW5lckhlaWdodCAtIGkucmFpbFlNYXJnaW5IZWlnaHQ7XHJcbiAgICBpLnJhaWxZUmF0aW8gPSBpLmNvbnRhaW5lckhlaWdodCAvIGkucmFpbFlIZWlnaHQ7XHJcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoaSwgXy50b0ludChpLnJhaWxZSGVpZ2h0ICogaS5jb250YWluZXJIZWlnaHQgLyBpLmNvbnRlbnRIZWlnaHQpKTtcclxuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IF8udG9JbnQoZWxlbWVudC5zY3JvbGxUb3AgKiAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkgLyAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoaS5zY3JvbGxiYXJYTGVmdCA+PSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkge1xyXG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoO1xyXG4gIH1cclxuICBpZiAoaS5zY3JvbGxiYXJZVG9wID49IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIHtcclxuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDc3MoZWxlbWVudCwgaSk7XHJcblxyXG4gIGlmIChpLnNjcm9sbGJhclhBY3RpdmUpIHtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWFjdGl2ZS14Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLWFjdGl2ZS14Jyk7XHJcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IDA7XHJcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gMDtcclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIDApO1xyXG4gIH1cclxuICBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlKSB7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy1hY3RpdmUteScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1hY3RpdmUteScpO1xyXG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gMDtcclxuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIDApO1xyXG4gIH1cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJyk7XHJcblxyXG52YXIgbGFzdFRvcDtcclxudmFyIGxhc3RMZWZ0O1xyXG5cclxudmFyIGNyZWF0ZURPTUV2ZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG4gIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcclxuICByZXR1cm4gZXZlbnQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50LCBheGlzLCB2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGFuIGVsZW1lbnQgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgdGhyb3cgJ1lvdSBtdXN0IHByb3ZpZGUgYW4gYXhpcyB0byB0aGUgdXBkYXRlLXNjcm9sbCBmdW5jdGlvbic7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgdGhyb3cgJ1lvdSBtdXN0IHByb3ZpZGUgYSB2YWx1ZSB0byB0aGUgdXBkYXRlLXNjcm9sbCBmdW5jdGlvbic7XHJcbiAgfVxyXG5cclxuICBpZiAoYXhpcyA9PT0gJ3RvcCcgJiYgdmFsdWUgPD0gMCkge1xyXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZSA9IDA7IC8vIGRvbid0IGFsbG93IG5lZ2F0aXZlIHNjcm9sbFxyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy15LXJlYWNoLXN0YXJ0JykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA8PSAwKSB7XHJcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWx1ZSA9IDA7IC8vIGRvbid0IGFsbG93IG5lZ2F0aXZlIHNjcm9sbFxyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy14LXJlYWNoLXN0YXJ0JykpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG5cclxuICBpZiAoYXhpcyA9PT0gJ3RvcCcgJiYgdmFsdWUgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIHtcclxuICAgIC8vIGRvbid0IGFsbG93IHNjcm9sbCBwYXN0IGNvbnRhaW5lclxyXG4gICAgdmFsdWUgPSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodDtcclxuICAgIGlmICh2YWx1ZSAtIGVsZW1lbnQuc2Nyb2xsVG9wIDw9IDEpIHtcclxuICAgICAgLy8gbWl0aWdhdGVzIHJvdW5kaW5nIGVycm9ycyBvbiBub24tc3VicGl4ZWwgc2Nyb2xsIHZhbHVlc1xyXG4gICAgICB2YWx1ZSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteS1yZWFjaC1lbmQnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYXhpcyA9PT0gJ2xlZnQnICYmIHZhbHVlID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkge1xyXG4gICAgLy8gZG9uJ3QgYWxsb3cgc2Nyb2xsIHBhc3QgY29udGFpbmVyXHJcbiAgICB2YWx1ZSA9IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aDtcclxuICAgIGlmICh2YWx1ZSAtIGVsZW1lbnQuc2Nyb2xsTGVmdCA8PSAxKSB7XHJcbiAgICAgIC8vIG1pdGlnYXRlcyByb3VuZGluZyBlcnJvcnMgb24gbm9uLXN1YnBpeGVsIHNjcm9sbCB2YWx1ZXNcclxuICAgICAgdmFsdWUgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteC1yZWFjaC1lbmQnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWxhc3RUb3ApIHtcclxuICAgIGxhc3RUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICB9XHJcblxyXG4gIGlmICghbGFzdExlZnQpIHtcclxuICAgIGxhc3RMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlIDwgbGFzdFRvcCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtdXAnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYXhpcyA9PT0gJ3RvcCcgJiYgdmFsdWUgPiBsYXN0VG9wKSB7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC1kb3duJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA8IGxhc3RMZWZ0KSB7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC1sZWZ0JykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA+IGxhc3RMZWZ0KSB7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC1yaWdodCcpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAndG9wJykge1xyXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBsYXN0VG9wID0gdmFsdWU7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC15JykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0Jykge1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gbGFzdExlZnQgPSB2YWx1ZTtcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMtc2Nyb2xsLXgnKSk7XHJcbiAgfVxyXG5cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRDbGlja1JhaWxIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICBmdW5jdGlvbiBwYWdlT2Zmc2V0KGVsKSB7XHJcbiAgICByZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgfVxyXG4gIHZhciBzdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9O1xyXG5cclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhcllSYWlsLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBvc2l0aW9uVG9wID0gZS5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCAtIHBhZ2VPZmZzZXQoaS5zY3JvbGxiYXJZUmFpbCkudG9wO1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uVG9wID4gaS5zY3JvbGxiYXJZVG9wID8gMSA6IC0xO1xyXG5cclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgKyBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lckhlaWdodCk7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9IGUucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQgLSBwYWdlT2Zmc2V0KGkuc2Nyb2xsYmFyWFJhaWwpLmxlZnQ7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25MZWZ0ID4gaS5zY3JvbGxiYXJYTGVmdCA/IDEgOiAtMTtcclxuXHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lcldpZHRoKTtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZENsaWNrUmFpbEhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcicpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsWEhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIHZhciBjdXJyZW50TGVmdCA9IG51bGw7XHJcbiAgdmFyIGN1cnJlbnRQYWdlWCA9IG51bGw7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbExlZnQoZGVsdGFYKSB7XHJcbiAgICB2YXIgbmV3TGVmdCA9IGN1cnJlbnRMZWZ0ICsgKGRlbHRhWCAqIGkucmFpbFhSYXRpbyk7XHJcbiAgICB2YXIgbWF4TGVmdCA9IE1hdGgubWF4KDAsIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgKyAoaS5yYWlsWFJhdGlvICogKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSk7XHJcblxyXG4gICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xyXG4gICAgfSBlbHNlIGlmIChuZXdMZWZ0ID4gbWF4TGVmdCkge1xyXG4gICAgICBpLnNjcm9sbGJhclhMZWZ0ID0gbWF4TGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBuZXdMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gXy50b0ludChpLnNjcm9sbGJhclhMZWZ0ICogKGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkgLyAoaS5jb250YWluZXJXaWR0aCAtIChpLnJhaWxYUmF0aW8gKiBpLnNjcm9sbGJhclhXaWR0aCkpKSAtIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50O1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jywgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICB2YXIgbW91c2VNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB1cGRhdGVTY3JvbGxMZWZ0KGUucGFnZVggLSBjdXJyZW50UGFnZVgpO1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIF8uc3RvcFNjcm9sbGluZyhlbGVtZW50LCAneCcpO1xyXG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgfTtcclxuXHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjdXJyZW50UGFnZVggPSBlLnBhZ2VYO1xyXG4gICAgY3VycmVudExlZnQgPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYLCAnbGVmdCcpKSAqIGkucmFpbFhSYXRpbztcclxuICAgIF8uc3RhcnRTY3JvbGxpbmcoZWxlbWVudCwgJ3gnKTtcclxuXHJcbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kTW91c2VTY3JvbGxZSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgdmFyIGN1cnJlbnRUb3AgPSBudWxsO1xyXG4gIHZhciBjdXJyZW50UGFnZVkgPSBudWxsO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUb3AoZGVsdGFZKSB7XHJcbiAgICB2YXIgbmV3VG9wID0gY3VycmVudFRvcCArIChkZWx0YVkgKiBpLnJhaWxZUmF0aW8pO1xyXG4gICAgdmFyIG1heFRvcCA9IE1hdGgubWF4KDAsIGkuc2Nyb2xsYmFyWVJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSArIChpLnJhaWxZUmF0aW8gKiAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkpO1xyXG5cclxuICAgIGlmIChuZXdUb3AgPCAwKSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1RvcCA+IG1heFRvcCkge1xyXG4gICAgICBpLnNjcm9sbGJhcllUb3AgPSBtYXhUb3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpLnNjcm9sbGJhcllUb3AgPSBuZXdUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNjcm9sbFRvcCA9IF8udG9JbnQoaS5zY3JvbGxiYXJZVG9wICogKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSAvIChpLmNvbnRhaW5lckhlaWdodCAtIChpLnJhaWxZUmF0aW8gKiBpLnNjcm9sbGJhcllIZWlnaHQpKSk7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIHNjcm9sbFRvcCk7XHJcbiAgfVxyXG5cclxuICB2YXIgbW91c2VNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB1cGRhdGVTY3JvbGxUb3AoZS5wYWdlWSAtIGN1cnJlbnRQYWdlWSk7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXy5zdG9wU2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICB9O1xyXG5cclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGN1cnJlbnRQYWdlWSA9IGUucGFnZVk7XHJcbiAgICBjdXJyZW50VG9wID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWSwgJ3RvcCcpKSAqIGkucmFpbFlSYXRpbztcclxuICAgIF8uc3RhcnRTY3JvbGxpbmcoZWxlbWVudCwgJ3knKTtcclxuXHJcbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmRNb3VzZVNjcm9sbFhIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG4gIGJpbmRNb3VzZVNjcm9sbFlIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9kb20nKTtcclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRLZXlib2FyZEhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIHZhciBob3ZlcmVkID0gZmFsc2U7XHJcbiAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaG92ZXJlZCA9IHRydWU7XHJcbiAgfSk7XHJcbiAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaG92ZXJlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xyXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XHJcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApIHx8IChzY3JvbGxUb3AgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQgJiYgZGVsdGFZIDwgMCkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xyXG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgfHwgKHNjcm9sbExlZnQgPj0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoICYmIGRlbHRhWCA+IDApKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKChlLmlzRGVmYXVsdFByZXZlbnRlZCAmJiBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB8fCBlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmb2N1c2VkID0gZG9tLm1hdGNoZXMoaS5zY3JvbGxiYXJYLCAnOmZvY3VzJykgfHxcclxuICAgICAgICAgICAgICAgICAgZG9tLm1hdGNoZXMoaS5zY3JvbGxiYXJZLCAnOmZvY3VzJyk7XHJcblxyXG4gICAgaWYgKCFob3ZlcmVkICYmICFmb2N1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IDogaS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LmNvbnRlbnREb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XHJcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXy5pc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlbHRhWCA9IDA7XHJcbiAgICB2YXIgZGVsdGFZID0gMDtcclxuXHJcbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgIGNhc2UgMzc6IC8vIGxlZnRcclxuICAgICAgaWYgKGUubWV0YUtleSkge1xyXG4gICAgICAgIGRlbHRhWCA9IC1pLmNvbnRlbnRXaWR0aDtcclxuICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIGRlbHRhWCA9IC1pLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWCA9IC0zMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzg6IC8vIHVwXHJcbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVkgPSAzMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzk6IC8vIHJpZ2h0XHJcbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcclxuICAgICAgICBkZWx0YVggPSBpLmNvbnRlbnRXaWR0aDtcclxuICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIGRlbHRhWCA9IGkuY29udGFpbmVyV2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFYID0gMzA7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQwOiAvLyBkb3duXHJcbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xyXG4gICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWSA9IC0zMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzM6IC8vIHBhZ2UgdXBcclxuICAgICAgZGVsdGFZID0gOTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXHJcbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gOTA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFZID0gLTkwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzNDogLy8gcGFnZSBkb3duXHJcbiAgICAgIGRlbHRhWSA9IC05MDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM1OiAvLyBlbmRcclxuICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzNjogLy8gaG9tZVxyXG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCAtIGRlbHRhWSk7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyBkZWx0YVgpO1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcblxyXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKTtcclxuICAgIGlmIChzaG91bGRQcmV2ZW50KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kS2V5Ym9hcmRIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZE1vdXNlV2hlZWxIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgdmFyIHNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKGRlbHRhWCA9PT0gMCkge1xyXG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fCAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIGlmIChkZWx0YVkgPT09IDApIHtcclxuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApIHx8IChzY3JvbGxMZWZ0ID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCAmJiBkZWx0YVggPiAwKSkge1xyXG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERlbHRhRnJvbUV2ZW50KGUpIHtcclxuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcclxuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBkZWx0YVkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgLy8gT1MgWCBTYWZhcmlcclxuICAgICAgZGVsdGFYID0gLTEgKiBlLndoZWVsRGVsdGFYIC8gNjtcclxuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XHJcbiAgICAgIC8vIEZpcmVmb3ggaW4gZGVsdGFNb2RlIDE6IExpbmUgc2Nyb2xsaW5nXHJcbiAgICAgIGRlbHRhWCAqPSAxMDtcclxuICAgICAgZGVsdGFZICo9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWS8qIE5hTiBjaGVja3MgKi8pIHtcclxuICAgICAgLy8gSUUgaW4gc29tZSBtb3VzZSBkcml2ZXJzXHJcbiAgICAgIGRlbHRhWCA9IDA7XHJcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAvLyByZXZlcnNlIGF4aXMgd2l0aCBzaGlmdCBrZXlcclxuICAgICAgcmV0dXJuIFstZGVsdGFZLCAtZGVsdGFYXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbZGVsdGFYLCBkZWx0YVldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIHZhciBjaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWE6aG92ZXIsIHNlbGVjdFttdWx0aXBsZV06aG92ZXIsIC5wcy1jaGlsZDpob3ZlcicpO1xyXG4gICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUubWF0Y2goL3BzLW11c3QtcHJvcGFnYXRlLykpIHtcclxuICAgICAgICAvLyBmb3JjZSBjb25zdW1wdGlvbiBieSBjaGlsZFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2hpbGQpLm92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcclxuICAgICAgICAvLyBpZiBub3Qgc2Nyb2xsYWJsZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY2hpbGQuc2Nyb2xsSGVpZ2h0IC0gY2hpbGQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xyXG4gICAgICAgIGlmICghKGNoaWxkLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJiAhKGNoaWxkLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjaGlsZC5zY3JvbGxMZWZ0IC0gY2hpbGQuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xyXG4gICAgICAgIGlmICghKGNoaWxkLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiYgIShjaGlsZC5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcclxuICAgIHZhciBkZWx0YSA9IGdldERlbHRhRnJvbUV2ZW50KGUpO1xyXG5cclxuICAgIHZhciBkZWx0YVggPSBkZWx0YVswXTtcclxuICAgIHZhciBkZWx0YVkgPSBkZWx0YVsxXTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZGVsdGFYLCBkZWx0YVkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XHJcbiAgICBpZiAoIWkuc2V0dGluZ3MudXNlQm90aFdoZWVsQXhlcykge1xyXG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxyXG4gICAgICAvLyBvbmx5IGJlIHVzZWQgZm9yIHZlcnRpY2FsIHNjcm9sbGluZyAtIHRoaXMgaXMgdGhlIGRlZmF1bHRcclxuICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCAtIChkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgKGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhcllBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xyXG4gICAgICAvLyBvbmx5IHZlcnRpY2FsIHNjcm9sbGJhciBpcyBhY3RpdmUgYW5kIHVzZUJvdGhXaGVlbEF4ZXMgb3B0aW9uIGlzXHJcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcclxuICAgICAgaWYgKGRlbHRhWSkge1xyXG4gICAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgLSAoZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIChkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgICAgfVxyXG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlICYmICFpLnNjcm9sbGJhcllBY3RpdmUpIHtcclxuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXHJcbiAgICAgIC8vIHdoZWVsIGF4ZXMgZm9yIGhvcml6b250YWwgYmFyXHJcbiAgICAgIGlmIChkZWx0YVgpIHtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyAoZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0IC0gKGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG5cclxuICAgIHNob3VsZFByZXZlbnQgPSAoc2hvdWxkUHJldmVudCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpO1xyXG4gICAgaWYgKHNob3VsZFByZXZlbnQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmRNb3VzZVdoZWVsSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVyJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kVG91Y2hIYW5kbGVyKGVsZW1lbnQsIGksIHN1cHBvcnRzVG91Y2gsIHN1cHBvcnRzSWVQb2ludGVyKSB7XHJcbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xyXG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xyXG5cclxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xyXG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcclxuXHJcbiAgICAgIGlmICgoKGRlbHRhWSA8IDApICYmIChzY3JvbGxUb3AgPT09IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSkgfHxcclxuICAgICAgICAgICgoZGVsdGFZID4gMCkgJiYgKHNjcm9sbFRvcCA9PT0gMCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLnN3aXBlUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcclxuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSBsZWZ0L3JpZ2h0IGFjcm9zcyB0aGUgcGFnZVxyXG5cclxuICAgICAgaWYgKCgoZGVsdGFYIDwgMCkgJiYgKHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkpIHx8XHJcbiAgICAgICAgICAoKGRlbHRhWCA+IDApICYmIChzY3JvbGxMZWZ0ID09PSAwKSkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gZGlmZmVyZW5jZVkpO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGlmZmVyZW5jZVgpO1xyXG5cclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHN0YXJ0T2Zmc2V0ID0ge307XHJcbiAgdmFyIHN0YXJ0VGltZSA9IDA7XHJcbiAgdmFyIHNwZWVkID0ge307XHJcbiAgdmFyIGVhc2luZ0xvb3AgPSBudWxsO1xyXG4gIHZhciBpbkdsb2JhbFRvdWNoID0gZmFsc2U7XHJcbiAgdmFyIGluTG9jYWxUb3VjaCA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBnbG9iYWxUb3VjaFN0YXJ0KCkge1xyXG4gICAgaW5HbG9iYWxUb3VjaCA9IHRydWU7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdsb2JhbFRvdWNoRW5kKCkge1xyXG4gICAgaW5HbG9iYWxUb3VjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xyXG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcclxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiYgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG91Y2hTdGFydChlKSB7XHJcbiAgICBpZiAoc2hvdWxkSGFuZGxlKGUpKSB7XHJcbiAgICAgIGluTG9jYWxUb3VjaCA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcclxuXHJcbiAgICAgIHN0YXJ0T2Zmc2V0LnBhZ2VYID0gdG91Y2gucGFnZVg7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XHJcblxyXG4gICAgICBzdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgaWYgKGVhc2luZ0xvb3AgIT09IG51bGwpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xyXG4gICAgaWYgKCFpbkxvY2FsVG91Y2ggJiYgaS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIHRvdWNoU3RhcnQoZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWluR2xvYmFsVG91Y2ggJiYgaW5Mb2NhbFRvdWNoICYmIHNob3VsZEhhbmRsZShlKSkge1xyXG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcclxuXHJcbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0ge3BhZ2VYOiB0b3VjaC5wYWdlWCwgcGFnZVk6IHRvdWNoLnBhZ2VZfTtcclxuXHJcbiAgICAgIHZhciBkaWZmZXJlbmNlWCA9IGN1cnJlbnRPZmZzZXQucGFnZVggLSBzdGFydE9mZnNldC5wYWdlWDtcclxuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xyXG5cclxuICAgICAgYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKTtcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG5cclxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIHZhciB0aW1lR2FwID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xyXG4gICAgICAgIHNwZWVkLnggPSBkaWZmZXJlbmNlWCAvIHRpbWVHYXA7XHJcbiAgICAgICAgc3BlZWQueSA9IGRpZmZlcmVuY2VZIC8gdGltZUdhcDtcclxuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB0b3VjaEVuZCgpIHtcclxuICAgIGlmICghaW5HbG9iYWxUb3VjaCAmJiBpbkxvY2FsVG91Y2gpIHtcclxuICAgICAgaW5Mb2NhbFRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICBlYXNpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2VzLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3BlZWQueCAmJiAhc3BlZWQueSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXBwbHlUb3VjaE1vdmUoc3BlZWQueCAqIDMwLCBzcGVlZC55ICogMzApO1xyXG5cclxuICAgICAgICBzcGVlZC54ICo9IDAuODtcclxuICAgICAgICBzcGVlZC55ICo9IDAuODtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcclxuICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICd0b3VjaHN0YXJ0JywgZ2xvYmFsVG91Y2hTdGFydCk7XHJcbiAgICBpLmV2ZW50LmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBnbG9iYWxUb3VjaEVuZCk7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KTtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcbiAgfSBlbHNlIGlmIChzdXBwb3J0c0llUG9pbnRlcikge1xyXG4gICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ3BvaW50ZXJkb3duJywgZ2xvYmFsVG91Y2hTdGFydCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdwb2ludGVydXAnLCBnbG9iYWxUb3VjaEVuZCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcmRvd24nLCB0b3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVybW92ZScsIHRvdWNoTW92ZSk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ01TUG9pbnRlckRvd24nLCBnbG9iYWxUb3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ01TUG9pbnRlclVwJywgZ2xvYmFsVG91Y2hFbmQpO1xyXG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlKTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICBpZiAoIV8uZW52LnN1cHBvcnRzVG91Y2ggJiYgIV8uZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZFRvdWNoSGFuZGxlcihlbGVtZW50LCBpLCBfLmVudi5zdXBwb3J0c1RvdWNoLCBfLmVudi5zdXBwb3J0c0llUG9pbnRlcik7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcicpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZFNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIGZ1bmN0aW9uIGdldFJhbmdlTm9kZSgpIHtcclxuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24gPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSA6ICcnO1xyXG4gICAgaWYgKHNlbGVjdGlvbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBzY3JvbGxpbmdMb29wID0gbnVsbDtcclxuICB2YXIgc2Nyb2xsRGlmZiA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gIGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsaW5nKCkge1xyXG4gICAgaWYgKCFzY3JvbGxpbmdMb29wKSB7XHJcbiAgICAgIHNjcm9sbGluZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbGluZ0xvb3ApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIHNjcm9sbERpZmYudG9wKTtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyBzY3JvbGxEaWZmLmxlZnQpO1xyXG4gICAgICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gICAgICB9LCA1MCk7IC8vIGV2ZXJ5IC4xIHNlY1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdG9wU2Nyb2xsaW5nKCkge1xyXG4gICAgaWYgKHNjcm9sbGluZ0xvb3ApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxpbmdMb29wKTtcclxuICAgICAgc2Nyb2xsaW5nTG9vcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBfLnN0b3BTY3JvbGxpbmcoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB2YXIgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jb250YWlucyhnZXRSYW5nZU5vZGUoKSkpIHtcclxuICAgICAgaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0b3BTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpLmV2ZW50LmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGkuZXZlbnQuYmluZCh3aW5kb3csICdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpLmV2ZW50LmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVl9O1xyXG4gICAgICB2YXIgY29udGFpbmVyR2VvbWV0cnkgPSB7XHJcbiAgICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgYm90dG9tOiBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAobW91c2VQb3NpdGlvbi54IDwgY29udGFpbmVyR2VvbWV0cnkubGVmdCArIDMpIHtcclxuICAgICAgICBzY3JvbGxEaWZmLmxlZnQgPSAtNTtcclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbi54ID4gY29udGFpbmVyR2VvbWV0cnkucmlnaHQgLSAzKSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi5sZWZ0ID0gNTtcclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi5sZWZ0ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1vdXNlUG9zaXRpb24ueSA8IGNvbnRhaW5lckdlb21ldHJ5LnRvcCArIDMpIHtcclxuICAgICAgICBpZiAoY29udGFpbmVyR2VvbWV0cnkudG9wICsgMyAtIG1vdXNlUG9zaXRpb24ueSA8IDUpIHtcclxuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gLTU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gLTIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbi55ID4gY29udGFpbmVyR2VvbWV0cnkuYm90dG9tIC0gMykge1xyXG4gICAgICAgIGlmIChtb3VzZVBvc2l0aW9uLnkgLSBjb250YWluZXJHZW9tZXRyeS5ib3R0b20gKyAzIDwgNSkge1xyXG4gICAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSA1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IDIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsRGlmZi50b3AgPT09IDAgJiYgc2Nyb2xsRGlmZi5sZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0U2Nyb2xsaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kU2VsZWN0aW9uSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmROYXRpdmVTY3JvbGxIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmROYXRpdmVTY3JvbGxIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uL2xpYi9kb20nKTtcclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcblxyXG4gIGlmICghaSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcclxuICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IGkuaXNOZWdhdGl2ZVNjcm9sbCA/IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoIDogMDtcclxuXHJcbiAgLy8gUmVjYWxjdWxhdGUgcmFpbCBtYXJnaW5zXHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnZGlzcGxheScsICdibG9jaycpO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICBpLnJhaWxYTWFyZ2luV2lkdGggPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpbkxlZnQnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpblJpZ2h0JykpO1xyXG4gIGkucmFpbFlNYXJnaW5IZWlnaHQgPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ21hcmdpblRvcCcpKSArIF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbWFyZ2luQm90dG9tJykpO1xyXG5cclxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG5cclxuICAvLyBVcGRhdGUgdG9wL2xlZnQgc2Nyb2xsIHRvIHRyaWdnZXIgZXZlbnRzXHJcbiAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCk7XHJcbiAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0KTtcclxuXHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnZGlzcGxheScsICcnKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJycpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IHJlcXVpcmUoJy4vQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQnKTtcblxudmFyIF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICB0cmFuc2l0aW9uTmFtZTogX1Byb3BUeXBlcy5uYW1lU2hhcGUuaXNSZXF1aXJlZCxcblxuICB0cmFuc2l0aW9uQXBwZWFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRyYW5zaXRpb25FbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0cmFuc2l0aW9uTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6ICgwLCBfUHJvcFR5cGVzLnRyYW5zaXRpb25UaW1lb3V0KSgnQXBwZWFyJyksXG4gIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6ICgwLCBfUHJvcFR5cGVzLnRyYW5zaXRpb25UaW1lb3V0KSgnRW50ZXInKSxcbiAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogKDAsIF9Qcm9wVHlwZXMudHJhbnNpdGlvblRpbWVvdXQpKCdMZWF2ZScpXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICB0cmFuc2l0aW9uTGVhdmU6IHRydWVcbn07XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ1NTVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uR3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl93cmFwQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQyLmRlZmF1bHQsIHtcbiAgICAgICAgbmFtZTogX3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIGFwcGVhcjogX3RoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhcixcbiAgICAgICAgZW50ZXI6IF90aGlzLnByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgbGVhdmU6IF90aGlzLnByb3BzLnRyYW5zaXRpb25MZWF2ZSxcbiAgICAgICAgYXBwZWFyVGltZW91dDogX3RoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQsXG4gICAgICAgIGVudGVyVGltZW91dDogX3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dCxcbiAgICAgICAgbGVhdmVUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0XG4gICAgICB9LCBjaGlsZCk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICAvLyBXZSBuZWVkIHRvIHByb3ZpZGUgdGhpcyBjaGlsZEZhY3Rvcnkgc28gdGhhdFxuICAvLyBSZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkIGNhbiByZWNlaXZlIHVwZGF0ZXMgdG8gbmFtZSwgZW50ZXIsIGFuZFxuICAvLyBsZWF2ZSB3aGlsZSBpdCBpcyBsZWF2aW5nLlxuXG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNoaWxkRmFjdG9yeTogdGhpcy5fd3JhcENoaWxkIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ0NTU1RyYW5zaXRpb25Hcm91cCc7XG5cblxuQ1NTVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuQ1NTVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NoYWluRnVuY3Rpb24gPSByZXF1aXJlKCdjaGFpbi1mdW5jdGlvbicpO1xuXG52YXIgX2NoYWluRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW5GdW5jdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgYXBwZWFyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBlbnRlcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBzb21ld2hhdCBkYW5nZXJvdXMgYi9jIGl0IGNhbGxzIHNldFN0YXRlKClcbiAgICAgICAgLy8gYWdhaW4sIGVmZmVjdGl2ZWx5IG11dGF0aW5nIHRoZSBjb21wb25lbnQgYmVmb3JlIGFsbCB0aGUgd29ya1xuICAgICAgICAvLyBpcyBkb25lLlxuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoY3VycmVudENoaWxkTWFwcGluZyAmJiBjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyBlbnRlcmVkIGFnYWluIGJlZm9yZSBpdCBmdWxseSBsZWZ0LiBBZGQgaXQgYWdhaW4uXG4gICAgICAgIF90aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG4gICAgICAgICAgZGVsZXRlIG5ld0NoaWxkcmVuW2tleV07XG4gICAgICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jaGlsZFJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbilcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgaW5pdGlhbENoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIga2V5IGluIGluaXRpYWxDaGlsZE1hcHBpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsQ2hpbGRNYXBwaW5nW2tleV0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQXBwZWFyKGtleSwgdGhpcy5jaGlsZFJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKShwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5leHRDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNQcmV2ID0gcHJldkNoaWxkTWFwcGluZyAmJiBwcmV2Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAobmV4dENoaWxkTWFwcGluZ1trZXldICYmICFoYXNQcmV2ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2tleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgbmV4dENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KTtcbiAgICAgIGlmIChwcmV2Q2hpbGRNYXBwaW5nW19rZXldICYmICFoYXNOZXh0ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW19rZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvTGVhdmUucHVzaChfa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSB3YW50IHRvIHNvbWVkYXkgY2hlY2sgZm9yIHJlb3JkZXJpbmcsIHdlIGNvdWxkIGRvIGl0IGhlcmUuXG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBrZXlzVG9FbnRlci5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUVudGVyKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcblxuICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgIGtleXNUb0xlYXZlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtTGVhdmUoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2UgY291bGQgZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3IgdGhlIHdyYXBwZXIgbm9kZVxuICAgIC8vIGJ5IGNsb25pbmcgYSBzaW5nbGUgY2hpbGRcbiAgICB2YXIgY2hpbGRyZW5Ub1JlbmRlciA9IFtdO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczMuc3RhdGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICB2YXIgaXNDYWxsYmFja1JlZiA9IHR5cGVvZiBjaGlsZC5yZWYgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgZmFjdG9yeUNoaWxkID0gX3RoaXMzLnByb3BzLmNoaWxkRmFjdG9yeShjaGlsZCk7XG4gICAgICAgIHZhciByZWYgPSBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgIF90aGlzMy5jaGlsZFJlZnNba2V5XSA9IHI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoaXNDYWxsYmFja1JlZiwgJ3N0cmluZyByZWZzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIGNoaWxkcmVuIG9mIFRyYW5zaXRpb25Hcm91cCBhbmQgd2lsbCBiZSBpZ25vcmVkLiAnICsgJ1BsZWFzZSB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZDogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKSA6IHZvaWQgMDtcblxuICAgICAgICAvLyBBbHdheXMgY2hhaW5pbmcgdGhlIHJlZnMgbGVhZHMgdG8gcHJvYmxlbXMgd2hlbiB0aGUgY2hpbGRGYWN0b3J5XG4gICAgICAgIC8vIHdyYXBzIHRoZSBjaGlsZC4gVGhlIGNoaWxkIHJlZiBjYWxsYmFjayBnZXRzIGNhbGxlZCB0d2ljZSB3aXRoIHRoZVxuICAgICAgICAvLyB3cmFwcGVyIGFuZCB0aGUgY2hpbGQuIFNvIHdlIG9ubHkgbmVlZCB0byBjaGFpbiB0aGUgcmVmIGlmIHRoZVxuICAgICAgICAvLyBmYWN0b3J5Q2hpbGQgaXMgbm90IGRpZmZlcmVudCBmcm9tIGNoaWxkLlxuICAgICAgICBpZiAoZmFjdG9yeUNoaWxkID09PSBjaGlsZCAmJiBpc0NhbGxiYWNrUmVmKSB7XG4gICAgICAgICAgcmVmID0gKDAsIF9jaGFpbkZ1bmN0aW9uMi5kZWZhdWx0KShjaGlsZC5yZWYsIHJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGxlYXZpbmcuXG4gICAgICAgIC8vIFRoZSBub3JtYWwgUmVhY3Qgd2F5IHRvIGRvIGl0IHdvbid0IHdvcmsgc2luY2UgdGhlIGNoaWxkIHdpbGwgaGF2ZVxuICAgICAgICAvLyBhbHJlYWR5IGJlZW4gcmVtb3ZlZC4gSW4gY2FzZSB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIHlvdSBjYW4gcHJvdmlkZVxuICAgICAgICAvLyBhIGNoaWxkRmFjdG9yeSBmdW5jdGlvbiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlXG4gICAgICAgIC8vIGxlYXZpbmcuXG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGZhY3RvcnlDaGlsZCwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUuY2hpbGRyZW4pIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvcndhcmQgVHJhbnNpdGlvbkdyb3VwIHByb3BzIHRvIHByaW1pdGl2ZSBET00gbm9kZXNcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRGYWN0b3J5O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdUcmFuc2l0aW9uR3JvdXAnO1xuXG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGFpbigpe1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuXG4gIGFyZ3MgPSBhcmdzLmZpbHRlcihmdW5jdGlvbihmbil7IHJldHVybiBmbiAhPSBudWxsIH0pXG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFyZ3NbMF1cblxuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oY3VycmVudCwgbmV4dCl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGN1cnJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIG5leHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuKSB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBuZXh0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZba2V5XTtcbiAgfVxuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0ge307XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KHByZXZLZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmcuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2FkZENsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MnKTtcblxudmFyIF9hZGRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRDbGFzcyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcycpO1xuXG52YXIgX3JlbW92ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZUNsYXNzKTtcblxudmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCdkb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xuXG52YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGV2ZW50cyA9IFtdO1xuaWYgKF9wcm9wZXJ0aWVzLnRyYW5zaXRpb25FbmQpIGV2ZW50cy5wdXNoKF9wcm9wZXJ0aWVzLnRyYW5zaXRpb25FbmQpO1xuaWYgKF9wcm9wZXJ0aWVzLmFuaW1hdGlvbkVuZCkgZXZlbnRzLnB1c2goX3Byb3BlcnRpZXMuYW5pbWF0aW9uRW5kKTtcblxuZnVuY3Rpb24gYWRkRW5kTGlzdGVuZXIobm9kZSwgbGlzdGVuZXIpIHtcbiAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQobGlzdGVuZXIsIDApO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWV2ZW50cy5sZW5ndGgpIHJldHVybjtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBuYW1lOiBfUHJvcFR5cGVzLm5hbWVTaGFwZS5pc1JlcXVpcmVkLFxuXG4gIC8vIE9uY2Ugd2UgcmVxdWlyZSB0aW1lb3V0cyB0byBiZSBzcGVjaWZpZWQsIHdlIGNhbiByZW1vdmUgdGhlXG4gIC8vIGJvb2xlYW4gZmxhZ3MgKGFwcGVhciBldGMuKSBhbmQganVzdCBhY2NlcHQgYSBudW1iZXJcbiAgLy8gb3IgYSBib29sIGZvciB0aGUgdGltZW91dCBmbGFncyAoYXBwZWFyVGltZW91dCBldGMuKVxuICBhcHBlYXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYXBwZWFyVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGVudGVyVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxlYXZlVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbn07XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY29tcG9uZW50V2lsbEFwcGVhciA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuYXBwZWFyKSB7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUsIF90aGlzLnByb3BzLmFwcGVhclRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxFbnRlciA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZW50ZXIpIHtcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lLCBfdGhpcy5wcm9wcy5lbnRlclRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxMZWF2ZSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubGVhdmUpIHtcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lLCBfdGhpcy5wcm9wcy5sZWF2ZVRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IFtdO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzID0gW107XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKGFuaW1hdGlvblR5cGUsIGZpbmlzaENhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlXSB8fCB0aGlzLnByb3BzLm5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSB8fCBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gdm9pZCAwO1xuXG4gICAgKDAsIF9hZGRDbGFzczIuZGVmYXVsdCkobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgIC8vIE5lZWQgdG8gZG8gdGhpcyB0byBhY3R1YWxseSB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cbiAgICB0aGlzLnF1ZXVlQ2xhc3NBbmROb2RlKGFjdGl2ZUNsYXNzTmFtZSwgbm9kZSk7XG5cbiAgICAvLyBDbGVhbi11cCB0aGUgYW5pbWF0aW9uIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXlcbiAgICB2YXIgZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIGlmIChyZW1vdmVMaXN0ZW5lcnMpIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAoMCwgX3JlbW92ZUNsYXNzMi5kZWZhdWx0KShub2RlLCBjbGFzc05hbWUpO1xuICAgICAgKDAsIF9yZW1vdmVDbGFzczIuZGVmYXVsdCkobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHJlbW92ZUxpc3RlbmVycykgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgICBpZiAoZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmaW5pc2gsIHRpbWVvdXQpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lcik7XG4gICAgfSBlbHNlIGlmIChfcHJvcGVydGllcy50cmFuc2l0aW9uRW5kKSB7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMgPSBhZGRFbmRMaXN0ZW5lcihub2RlLCBmaW5pc2gpO1xuICAgIH1cbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUucXVldWVDbGFzc0FuZE5vZGUgPSBmdW5jdGlvbiBxdWV1ZUNsYXNzQW5kTm9kZShjbGFzc05hbWUsIG5vZGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLnB1c2goe1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucmFmSGFuZGxlKSB7XG4gICAgICB0aGlzLnJhZkhhbmRsZSA9ICgwLCBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUgPSBmdW5jdGlvbiBmbHVzaENsYXNzTmFtZUFuZE5vZGVRdWV1ZSgpIHtcbiAgICBpZiAoIXRoaXMudW5tb3VudGVkKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgICAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgICAgb2JqLm5vZGUuc2Nyb2xsVG9wO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgICAoMCwgX2FkZENsYXNzMi5kZWZhdWx0KShvYmoubm9kZSwgb2JqLmNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgICB0aGlzLnJhZkhhbmRsZSA9IG51bGw7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLm5hbWU7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmxlYXZlO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5kaXNwbGF5TmFtZSA9ICdDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCc7XG5cblxuQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1RyYW5zaXRpb25Hcm91cENoaWxkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSByZXF1aXJlKCcuL2hhc0NsYXNzJyk7XG5cbnZhciBfaGFzQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzQ2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzczIuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNDbGFzcztcbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbkRPTSA9IHJlcXVpcmUoJy4vaW5ET00nKTtcblxudmFyIF9pbkRPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbkRPTSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2ZW5kb3JzID0gWycnLCAnd2Via2l0JywgJ21veicsICdvJywgJ21zJ107XG52YXIgY2FuY2VsID0gJ2NsZWFyVGltZW91dCc7XG52YXIgcmFmID0gZmFsbGJhY2s7XG52YXIgY29tcGF0UmFmID0gdm9pZCAwO1xuXG52YXIgZ2V0S2V5ID0gZnVuY3Rpb24gZ2V0S2V5KHZlbmRvciwgaykge1xuICByZXR1cm4gdmVuZG9yICsgKCF2ZW5kb3IgPyBrIDoga1swXS50b1VwcGVyQ2FzZSgpICsgay5zdWJzdHIoMSkpICsgJ0FuaW1hdGlvbkZyYW1lJztcbn07XG5cbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgdmVuZG9ycy5zb21lKGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICB2YXIgcmFmS2V5ID0gZ2V0S2V5KHZlbmRvciwgJ3JlcXVlc3QnKTtcblxuICAgIGlmIChyYWZLZXkgaW4gd2luZG93KSB7XG4gICAgICBjYW5jZWwgPSBnZXRLZXkodmVuZG9yLCAnY2FuY2VsJyk7XG4gICAgICByZXR1cm4gcmFmID0gZnVuY3Rpb24gcmFmKGNiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbcmFmS2V5XShjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9jb21wb25lbnQvcmFmICovXG52YXIgcHJldiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKSxcbiAgICAgIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcblxuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuY29tcGF0UmFmID0gZnVuY3Rpb24gY29tcGF0UmFmKGNiKSB7XG4gIHJldHVybiByYWYoY2IpO1xufTtcbmNvbXBhdFJhZi5jYW5jZWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgd2luZG93W2NhbmNlbF0gJiYgdHlwZW9mIHdpbmRvd1tjYW5jZWxdID09PSAnZnVuY3Rpb24nICYmIHdpbmRvd1tjYW5jZWxdKGlkKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXRSYWY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hbmltYXRpb25FbmQgPSBleHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBleHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gZXhwb3J0cy5hbmltYXRpb25OYW1lID0gZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gZXhwb3J0cy50cmFuc2Zvcm0gPSB1bmRlZmluZWQ7XG5cbnZhciBfaW5ET00gPSByZXF1aXJlKCcuLi91dGlsL2luRE9NJyk7XG5cbnZhciBfaW5ET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5ET00pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdHJhbnNmb3JtID0gJ3RyYW5zZm9ybSc7XG52YXIgcHJlZml4ID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25FbmQgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xudmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvblRpbWluZyA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB2b2lkIDA7XG52YXIgYW5pbWF0aW9uTmFtZSA9IHZvaWQgMCxcbiAgICBhbmltYXRpb25EdXJhdGlvbiA9IHZvaWQgMCxcbiAgICBhbmltYXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRGVsYXkgPSB2b2lkIDA7XG5cbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcGVydCA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCk7XG5cbiAgcHJlZml4ID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LnByZWZpeDtcbiAgZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC50cmFuc2l0aW9uRW5kO1xuICBleHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5hbmltYXRpb25FbmQ7XG5cblxuICBleHBvcnRzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybSA9IHByZWZpeCArICctJyArIHRyYW5zZm9ybTtcbiAgZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHkgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tcHJvcGVydHknO1xuICBleHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kdXJhdGlvbic7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLWRlbGF5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uVGltaW5nID0gdHJhbnNpdGlvblRpbWluZyA9IHByZWZpeCArICctdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nO1xuXG4gIGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWUgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1uYW1lJztcbiAgZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uID0gcHJlZml4ICsgJy1hbmltYXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLmFuaW1hdGlvblRpbWluZyA9IGFuaW1hdGlvblRpbWluZyA9IHByZWZpeCArICctYW5pbWF0aW9uLWRlbGF5JztcbiAgZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ID0gcHJlZml4ICsgJy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJztcbn1cblxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5leHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHRyYW5zaXRpb25Qcm9wZXJ0eTtcbmV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmc7XG5leHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheTtcbmV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZDtcbmV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWU7XG5leHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb247XG5leHBvcnRzLmFuaW1hdGlvblRpbWluZyA9IGFuaW1hdGlvblRpbWluZztcbmV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gYW5pbWF0aW9uRW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgZW5kOiB0cmFuc2l0aW9uRW5kLFxuICBwcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5LFxuICB0aW1pbmc6IHRyYW5zaXRpb25UaW1pbmcsXG4gIGRlbGF5OiB0cmFuc2l0aW9uRGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb25cbn07XG5cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuXG4gIHZhciB2ZW5kb3JNYXAgPSB7XG4gICAgTzogZnVuY3Rpb24gTyhlKSB7XG4gICAgICByZXR1cm4gJ28nICsgZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgTW96OiBmdW5jdGlvbiBNb3ooZSkge1xuICAgICAgcmV0dXJuIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIFdlYmtpdDogZnVuY3Rpb24gV2Via2l0KGUpIHtcbiAgICAgIHJldHVybiAnd2Via2l0JyArIGU7XG4gICAgfSxcbiAgICBtczogZnVuY3Rpb24gbXMoZSkge1xuICAgICAgcmV0dXJuICdNUycgKyBlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdmVuZG9ycyA9IE9iamVjdC5rZXlzKHZlbmRvck1hcCk7XG5cbiAgdmFyIHRyYW5zaXRpb25FbmQgPSB2b2lkIDAsXG4gICAgICBhbmltYXRpb25FbmQgPSB2b2lkIDA7XG4gIHZhciBwcmVmaXggPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmVuZG9yID0gdmVuZG9yc1tpXTtcblxuICAgIGlmICh2ZW5kb3IgKyAnVHJhbnNpdGlvblByb3BlcnR5JyBpbiBzdHlsZSkge1xuICAgICAgcHJlZml4ID0gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0cmFuc2l0aW9uRW5kID0gdmVuZG9yTWFwW3ZlbmRvcl0oJ1RyYW5zaXRpb25FbmQnKTtcbiAgICAgIGFuaW1hdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdBbmltYXRpb25FbmQnKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdHJhbnNpdGlvbkVuZCAmJiAndHJhbnNpdGlvblByb3BlcnR5JyBpbiBzdHlsZSkgdHJhbnNpdGlvbkVuZCA9ICd0cmFuc2l0aW9uZW5kJztcblxuICBpZiAoIWFuaW1hdGlvbkVuZCAmJiAnYW5pbWF0aW9uTmFtZScgaW4gc3R5bGUpIGFuaW1hdGlvbkVuZCA9ICdhbmltYXRpb25lbmQnO1xuXG4gIHN0eWxlID0gbnVsbDtcblxuICByZXR1cm4geyBhbmltYXRpb25FbmQ6IGFuaW1hdGlvbkVuZCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCwgcHJlZml4OiBwcmVmaXggfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm5hbWVTaGFwZSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMudHJhbnNpdGlvblRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdHJhbnNpdGlvblRpbWVvdXQodHJhbnNpdGlvblR5cGUpIHtcbiAgdmFyIHRpbWVvdXRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlICsgJ1RpbWVvdXQnO1xuICB2YXIgZW5hYmxlZFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIC8vIElmIHRoZSB0cmFuc2l0aW9uIGlzIGVuYWJsZWRcbiAgICBpZiAocHJvcHNbZW5hYmxlZFByb3BOYW1lXSkge1xuICAgICAgLy8gSWYgbm8gdGltZW91dCBkdXJhdGlvbiBpcyBwcm92aWRlZFxuICAgICAgaWYgKHByb3BzW3RpbWVvdXRQcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgd2FzblxcJ3Qgc3VwcGxpZWQgdG8gQ1NTVHJhbnNpdGlvbkdyb3VwOiAnICsgJ3RoaXMgY2FuIGNhdXNlIHVucmVsaWFibGUgYW5pbWF0aW9ucyBhbmQgd29uXFwndCBiZSBzdXBwb3J0ZWQgaW4gJyArICdhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LiBTZWUgJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWFuaW1hdGlvbi10cmFuc2l0aW9uLWdyb3VwLXRpbWVvdXQgZm9yIG1vcmUgJyArICdpbmZvcm1hdGlvbi4nKTtcblxuICAgICAgICAvLyBJZiB0aGUgZHVyYXRpb24gaXNuJ3QgYSBudW1iZXJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzW3RpbWVvdXRQcm9wTmFtZV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyBtdXN0IGJlIGEgbnVtYmVyIChpbiBtaWxsaXNlY29uZHMpJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciBuYW1lU2hhcGUgPSBleHBvcnRzLm5hbWVTaGFwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59KSwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxlYXZlQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXBwZWFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXBwZWFyQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSldKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9