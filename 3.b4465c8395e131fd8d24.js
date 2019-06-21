(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 2393:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Expose `IntlPolyfill` as global to add locale data into runtime later on.
global.IntlPolyfill = __webpack_require__(2394);

// Require all locale data for `Intl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
__webpack_require__(2395);

// hack to export the polyfill as global Intl if needed
if (!global.Intl) {
    global.Intl = global.IntlPolyfill;
    global.IntlPolyfill.__applyLocaleSensitivePrototypes();
}

// providing an idiomatic api for the nodejs version of this module
module.exports = global.IntlPolyfill;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),

/***/ 2394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

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

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty$1 = function (obj, key, value) {
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

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
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

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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

var selfGlobal = typeof global === "undefined" ? self : global;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};



var babelHelpers$1 = Object.freeze({
  jsx: jsx,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty$1,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});

var realDefineProp = function () {
    var sentinel = function sentinel() {};
    try {
        Object.defineProperty(sentinel, 'a', {
            get: function get() {
                return 1;
            }
        });
        Object.defineProperty(sentinel, 'prototype', { writable: false });
        return sentinel.a === 1 && sentinel.prototype instanceof Object;
    } catch (e) {
        return false;
    }
}();

// Need a workaround for getters in ES3
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

// We use this a lot (and need it for proto-less objects)
var hop = Object.prototype.hasOwnProperty;

// Naive defineProperty for compatibility
var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) obj.__defineGetter__(name, desc.get);else if (!hop.call(obj, name) || 'value' in desc) obj[name] = desc.value;
};

// Array.prototype.indexOf, as good as we need it to be
var arrIndexOf = Array.prototype.indexOf || function (search) {
    /*jshint validthis:true */
    var t = this;
    if (!t.length) return -1;

    for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
        if (t[i] === search) return i;
    }

    return -1;
};

// Create an object with the specified prototype (2nd arg required for Record)
var objCreate = Object.create || function (proto, props) {
    var obj = void 0;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (var k in props) {
        if (hop.call(props, k)) defineProperty(obj, k, props[k]);
    }

    return obj;
};

// Snapshot some (hopefully still) native built-ins
var arrSlice = Array.prototype.slice;
var arrConcat = Array.prototype.concat;
var arrPush = Array.prototype.push;
var arrJoin = Array.prototype.join;
var arrShift = Array.prototype.shift;

// Naive Function.prototype.bind for compatibility
var fnBind = Function.prototype.bind || function (thisObj) {
    var fn = this,
        args = arrSlice.call(arguments, 1);

    // All our (presently) bound functions have either 1 or 0 arguments. By returning
    // different function signatures, we can pass some tests in ES3 environments
    if (fn.length === 1) {
        return function () {
            return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
        };
    }
    return function () {
        return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
    };
};

// Object housing internal properties for constructors
var internals = objCreate(null);

// Keep internal properties internal
var secret = Math.random();

// Helper functions
// ================

/**
 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
 * causing issue #62.
 */
function log10Floor(n) {
    // ES6 provides the more accurate Math.log10
    if (typeof Math.log10 === 'function') return Math.floor(Math.log10(n));

    var x = Math.round(Math.log(n) * Math.LOG10E);
    return x - (Number('1e' + x) > n);
}

/**
 * A map that doesn't contain Object in its prototype chain
 */
function Record(obj) {
    // Copy only own properties over unless this object is already a Record instance
    for (var k in obj) {
        if (obj instanceof Record || hop.call(obj, k)) defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
    }
}
Record.prototype = objCreate(null);

/**
 * An ordered list
 */
function List() {
    defineProperty(this, 'length', { writable: true, value: 0 });

    if (arguments.length) arrPush.apply(this, arrSlice.call(arguments));
}
List.prototype = objCreate(null);

/**
 * Constructs a regular expression to restore tainted RegExp properties
 */
function createRegExpRestore() {
    if (internals.disableRegExpRestore) {
        return function () {/* no-op */};
    }

    var regExpCache = {
        lastMatch: RegExp.lastMatch || '',
        leftContext: RegExp.leftContext,
        multiline: RegExp.multiline,
        input: RegExp.input
    },
        has = false;

    // Create a snapshot of all the 'captured' properties
    for (var i = 1; i <= 9; i++) {
        has = (regExpCache['$' + i] = RegExp['$' + i]) || has;
    }return function () {
        // Now we've snapshotted some properties, escape the lastMatch string
        var esc = /[.?*+^$[\]\\(){}|-]/g,
            lm = regExpCache.lastMatch.replace(esc, '\\$&'),
            reg = new List();

        // If any of the captured strings were non-empty, iterate over them all
        if (has) {
            for (var _i = 1; _i <= 9; _i++) {
                var m = regExpCache['$' + _i];

                // If it's empty, add an empty capturing group
                if (!m) lm = '()' + lm;

                // Else find the string in lm and escape & wrap it to capture it
                else {
                        m = m.replace(esc, '\\$&');
                        lm = lm.replace(m, '(' + m + ')');
                    }

                // Push it to the reg and chop lm to make sure further groups come after
                arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
                lm = lm.slice(lm.indexOf('(') + 1);
            }
        }

        var exprStr = arrJoin.call(reg, '') + lm;

        // Shorten the regex by replacing each part of the expression with a match
        // for a string of that exact length.  This is safe for the type of
        // expressions generated above, because the expression matches the whole
        // match string, so we know each group and each segment between capturing
        // groups can be matched by its length alone.
        exprStr = exprStr.replace(/(\\\(|\\\)|[^()])+/g, function (match) {
            return '[\\s\\S]{' + match.replace('\\', '').length + '}';
        });

        // Create the regular expression that will reconstruct the RegExp properties
        var expr = new RegExp(exprStr, regExpCache.multiline ? 'gm' : 'g');

        // Set the lastIndex of the generated expression to ensure that the match
        // is found in the correct index.
        expr.lastIndex = regExpCache.leftContext.length;

        expr.exec(regExpCache.input);
    };
}

/**
 * Mimics ES5's abstract ToObject() function
 */
function toObject(arg) {
    if (arg === null) throw new TypeError('Cannot convert null or undefined to object');

    if ((typeof arg === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](arg)) === 'object') return arg;
    return Object(arg);
}

function toNumber(arg) {
    if (typeof arg === 'number') return arg;
    return Number(arg);
}

function toInteger(arg) {
    var number = toNumber(arg);
    if (isNaN(number)) return 0;
    if (number === +0 || number === -0 || number === +Infinity || number === -Infinity) return number;
    if (number < 0) return Math.floor(Math.abs(number)) * -1;
    return Math.floor(Math.abs(number));
}

function toLength(arg) {
    var len = toInteger(arg);
    if (len <= 0) return 0;
    if (len === Infinity) return Math.pow(2, 53) - 1;
    return Math.min(len, Math.pow(2, 53) - 1);
}

/**
 * Returns "internal" properties for an object
 */
function getInternalProperties(obj) {
    if (hop.call(obj, '__getInternalProperties')) return obj.__getInternalProperties(secret);

    return objCreate(null);
}

/**
* Defines regular expressions for various operations related to the BCP 47 syntax,
* as defined at http://tools.ietf.org/html/bcp47#section-2.1
*/

// extlang       = 3ALPHA              ; selected ISO 639 codes
//                 *2("-" 3ALPHA)      ; permanently reserved
var extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}';

// language      = 2*3ALPHA            ; shortest ISO 639 code
//                 ["-" extlang]       ; sometimes followed by
//                                     ; extended language subtags
//               / 4ALPHA              ; or reserved for future use
//               / 5*8ALPHA            ; or registered language subtag
var language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})';

// script        = 4ALPHA              ; ISO 15924 code
var script = '[a-z]{4}';

// region        = 2ALPHA              ; ISO 3166-1 code
//               / 3DIGIT              ; UN M.49 code
var region = '(?:[a-z]{2}|\\d{3})';

// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
var variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})';

//                                     ; Single alphanumerics
//                                     ; "x" reserved for private use
// singleton     = DIGIT               ; 0 - 9
//               / %x41-57             ; A - W
//               / %x59-5A             ; Y - Z
//               / %x61-77             ; a - w
//               / %x79-7A             ; y - z
var singleton = '[0-9a-wy-z]';

// extension     = singleton 1*("-" (2*8alphanum))
var extension = singleton + '(?:-[a-z0-9]{2,8})+';

// privateuse    = "x" 1*("-" (1*8alphanum))
var privateuse = 'x(?:-[a-z0-9]{1,8})+';

// irregular     = "en-GB-oed"         ; irregular tags do not match
//               / "i-ami"             ; the 'langtag' production and
//               / "i-bnn"             ; would not otherwise be
//               / "i-default"         ; considered 'well-formed'
//               / "i-enochian"        ; These tags are all valid,
//               / "i-hak"             ; but most are deprecated
//               / "i-klingon"         ; in favor of more modern
//               / "i-lux"             ; subtags or subtag
//               / "i-mingo"           ; combination
//               / "i-navajo"
//               / "i-pwn"
//               / "i-tao"
//               / "i-tay"
//               / "i-tsu"
//               / "sgn-BE-FR"
//               / "sgn-BE-NL"
//               / "sgn-CH-DE"
var irregular = '(?:en-GB-oed' + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)' + '|sgn-(?:BE-FR|BE-NL|CH-DE))';

// regular       = "art-lojban"        ; these tags match the 'langtag'
//               / "cel-gaulish"       ; production, but their subtags
//               / "no-bok"            ; are not extended language
//               / "no-nyn"            ; or variant subtags: their meaning
//               / "zh-guoyu"          ; is defined by their registration
//               / "zh-hakka"          ; and all of these are deprecated
//               / "zh-min"            ; in favor of a more modern
//               / "zh-min-nan"        ; subtag or sequence of subtags
//               / "zh-xiang"
var regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn' + '|zh-(?:guoyu|hakka|min|min-nan|xiang))';

// grandfathered = irregular           ; non-redundant tags registered
//               / regular             ; during the RFC 3066 era
var grandfathered = '(?:' + irregular + '|' + regular + ')';

// langtag       = language
//                 ["-" script]
//                 ["-" region]
//                 *("-" variant)
//                 *("-" extension)
//                 ["-" privateuse]
var langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-' + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

// Language-Tag  = langtag             ; normal language tags
//               / privateuse          ; private use tag
//               / grandfathered       ; grandfathered tags
var expBCP47Syntax = RegExp('^(?:' + langtag + '|' + privateuse + '|' + grandfathered + ')$', 'i');

// Match duplicate variants in a language tag
var expVariantDupes = RegExp('^(?!x).*?-(' + variant + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

// Match duplicate singletons in a language tag (except in private use)
var expSingletonDupes = RegExp('^(?!x).*?-(' + singleton + ')-(?:\\w+-(?!x-))*\\1\\b', 'i');

// Match all extension sequences
var expExtSequences = RegExp('-' + extension, 'ig');

// Default locale is the first-added locale data for us
var defaultLocale = void 0;
function setDefaultLocale(locale) {
    defaultLocale = locale;
}

// IANA Subtag Registry redundant tag and subtag maps
var redundantTags = {
    tags: {
        "art-lojban": "jbo",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-CH-DE": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        "sgn-BR": "bzs",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsl",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-Hans": "cmn-Hans",
        "zh-cmn-Hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue"
    },
    subtags: {
        BU: "MM",
        DD: "DE",
        FX: "FR",
        TP: "TL",
        YD: "YE",
        ZR: "CD",
        heploc: "alalc97",
        'in': "id",
        iw: "he",
        ji: "yi",
        jw: "jv",
        mo: "ro",
        ayx: "nun",
        bjd: "drl",
        ccq: "rki",
        cjr: "mom",
        cka: "cmr",
        cmk: "xch",
        drh: "khk",
        drw: "prs",
        gav: "dev",
        hrr: "jal",
        ibi: "opa",
        kgh: "kml",
        lcq: "ppr",
        mst: "mry",
        myt: "mry",
        sca: "hle",
        tie: "ras",
        tkk: "twm",
        tlw: "weo",
        tnf: "prs",
        ybd: "rki",
        yma: "lrr"
    },
    extLang: {
        aao: ["aao", "ar"],
        abh: ["abh", "ar"],
        abv: ["abv", "ar"],
        acm: ["acm", "ar"],
        acq: ["acq", "ar"],
        acw: ["acw", "ar"],
        acx: ["acx", "ar"],
        acy: ["acy", "ar"],
        adf: ["adf", "ar"],
        ads: ["ads", "sgn"],
        aeb: ["aeb", "ar"],
        aec: ["aec", "ar"],
        aed: ["aed", "sgn"],
        aen: ["aen", "sgn"],
        afb: ["afb", "ar"],
        afg: ["afg", "sgn"],
        ajp: ["ajp", "ar"],
        apc: ["apc", "ar"],
        apd: ["apd", "ar"],
        arb: ["arb", "ar"],
        arq: ["arq", "ar"],
        ars: ["ars", "ar"],
        ary: ["ary", "ar"],
        arz: ["arz", "ar"],
        ase: ["ase", "sgn"],
        asf: ["asf", "sgn"],
        asp: ["asp", "sgn"],
        asq: ["asq", "sgn"],
        asw: ["asw", "sgn"],
        auz: ["auz", "ar"],
        avl: ["avl", "ar"],
        ayh: ["ayh", "ar"],
        ayl: ["ayl", "ar"],
        ayn: ["ayn", "ar"],
        ayp: ["ayp", "ar"],
        bbz: ["bbz", "ar"],
        bfi: ["bfi", "sgn"],
        bfk: ["bfk", "sgn"],
        bjn: ["bjn", "ms"],
        bog: ["bog", "sgn"],
        bqn: ["bqn", "sgn"],
        bqy: ["bqy", "sgn"],
        btj: ["btj", "ms"],
        bve: ["bve", "ms"],
        bvl: ["bvl", "sgn"],
        bvu: ["bvu", "ms"],
        bzs: ["bzs", "sgn"],
        cdo: ["cdo", "zh"],
        cds: ["cds", "sgn"],
        cjy: ["cjy", "zh"],
        cmn: ["cmn", "zh"],
        coa: ["coa", "ms"],
        cpx: ["cpx", "zh"],
        csc: ["csc", "sgn"],
        csd: ["csd", "sgn"],
        cse: ["cse", "sgn"],
        csf: ["csf", "sgn"],
        csg: ["csg", "sgn"],
        csl: ["csl", "sgn"],
        csn: ["csn", "sgn"],
        csq: ["csq", "sgn"],
        csr: ["csr", "sgn"],
        czh: ["czh", "zh"],
        czo: ["czo", "zh"],
        doq: ["doq", "sgn"],
        dse: ["dse", "sgn"],
        dsl: ["dsl", "sgn"],
        dup: ["dup", "ms"],
        ecs: ["ecs", "sgn"],
        esl: ["esl", "sgn"],
        esn: ["esn", "sgn"],
        eso: ["eso", "sgn"],
        eth: ["eth", "sgn"],
        fcs: ["fcs", "sgn"],
        fse: ["fse", "sgn"],
        fsl: ["fsl", "sgn"],
        fss: ["fss", "sgn"],
        gan: ["gan", "zh"],
        gds: ["gds", "sgn"],
        gom: ["gom", "kok"],
        gse: ["gse", "sgn"],
        gsg: ["gsg", "sgn"],
        gsm: ["gsm", "sgn"],
        gss: ["gss", "sgn"],
        gus: ["gus", "sgn"],
        hab: ["hab", "sgn"],
        haf: ["haf", "sgn"],
        hak: ["hak", "zh"],
        hds: ["hds", "sgn"],
        hji: ["hji", "ms"],
        hks: ["hks", "sgn"],
        hos: ["hos", "sgn"],
        hps: ["hps", "sgn"],
        hsh: ["hsh", "sgn"],
        hsl: ["hsl", "sgn"],
        hsn: ["hsn", "zh"],
        icl: ["icl", "sgn"],
        ils: ["ils", "sgn"],
        inl: ["inl", "sgn"],
        ins: ["ins", "sgn"],
        ise: ["ise", "sgn"],
        isg: ["isg", "sgn"],
        isr: ["isr", "sgn"],
        jak: ["jak", "ms"],
        jax: ["jax", "ms"],
        jcs: ["jcs", "sgn"],
        jhs: ["jhs", "sgn"],
        jls: ["jls", "sgn"],
        jos: ["jos", "sgn"],
        jsl: ["jsl", "sgn"],
        jus: ["jus", "sgn"],
        kgi: ["kgi", "sgn"],
        knn: ["knn", "kok"],
        kvb: ["kvb", "ms"],
        kvk: ["kvk", "sgn"],
        kvr: ["kvr", "ms"],
        kxd: ["kxd", "ms"],
        lbs: ["lbs", "sgn"],
        lce: ["lce", "ms"],
        lcf: ["lcf", "ms"],
        liw: ["liw", "ms"],
        lls: ["lls", "sgn"],
        lsg: ["lsg", "sgn"],
        lsl: ["lsl", "sgn"],
        lso: ["lso", "sgn"],
        lsp: ["lsp", "sgn"],
        lst: ["lst", "sgn"],
        lsy: ["lsy", "sgn"],
        ltg: ["ltg", "lv"],
        lvs: ["lvs", "lv"],
        lzh: ["lzh", "zh"],
        max: ["max", "ms"],
        mdl: ["mdl", "sgn"],
        meo: ["meo", "ms"],
        mfa: ["mfa", "ms"],
        mfb: ["mfb", "ms"],
        mfs: ["mfs", "sgn"],
        min: ["min", "ms"],
        mnp: ["mnp", "zh"],
        mqg: ["mqg", "ms"],
        mre: ["mre", "sgn"],
        msd: ["msd", "sgn"],
        msi: ["msi", "ms"],
        msr: ["msr", "sgn"],
        mui: ["mui", "ms"],
        mzc: ["mzc", "sgn"],
        mzg: ["mzg", "sgn"],
        mzy: ["mzy", "sgn"],
        nan: ["nan", "zh"],
        nbs: ["nbs", "sgn"],
        ncs: ["ncs", "sgn"],
        nsi: ["nsi", "sgn"],
        nsl: ["nsl", "sgn"],
        nsp: ["nsp", "sgn"],
        nsr: ["nsr", "sgn"],
        nzs: ["nzs", "sgn"],
        okl: ["okl", "sgn"],
        orn: ["orn", "ms"],
        ors: ["ors", "ms"],
        pel: ["pel", "ms"],
        pga: ["pga", "ar"],
        pks: ["pks", "sgn"],
        prl: ["prl", "sgn"],
        prz: ["prz", "sgn"],
        psc: ["psc", "sgn"],
        psd: ["psd", "sgn"],
        pse: ["pse", "ms"],
        psg: ["psg", "sgn"],
        psl: ["psl", "sgn"],
        pso: ["pso", "sgn"],
        psp: ["psp", "sgn"],
        psr: ["psr", "sgn"],
        pys: ["pys", "sgn"],
        rms: ["rms", "sgn"],
        rsi: ["rsi", "sgn"],
        rsl: ["rsl", "sgn"],
        sdl: ["sdl", "sgn"],
        sfb: ["sfb", "sgn"],
        sfs: ["sfs", "sgn"],
        sgg: ["sgg", "sgn"],
        sgx: ["sgx", "sgn"],
        shu: ["shu", "ar"],
        slf: ["slf", "sgn"],
        sls: ["sls", "sgn"],
        sqk: ["sqk", "sgn"],
        sqs: ["sqs", "sgn"],
        ssh: ["ssh", "ar"],
        ssp: ["ssp", "sgn"],
        ssr: ["ssr", "sgn"],
        svk: ["svk", "sgn"],
        swc: ["swc", "sw"],
        swh: ["swh", "sw"],
        swl: ["swl", "sgn"],
        syy: ["syy", "sgn"],
        tmw: ["tmw", "ms"],
        tse: ["tse", "sgn"],
        tsm: ["tsm", "sgn"],
        tsq: ["tsq", "sgn"],
        tss: ["tss", "sgn"],
        tsy: ["tsy", "sgn"],
        tza: ["tza", "sgn"],
        ugn: ["ugn", "sgn"],
        ugy: ["ugy", "sgn"],
        ukl: ["ukl", "sgn"],
        uks: ["uks", "sgn"],
        urk: ["urk", "ms"],
        uzn: ["uzn", "uz"],
        uzs: ["uzs", "uz"],
        vgt: ["vgt", "sgn"],
        vkk: ["vkk", "ms"],
        vkt: ["vkt", "ms"],
        vsi: ["vsi", "sgn"],
        vsl: ["vsl", "sgn"],
        vsv: ["vsv", "sgn"],
        wuu: ["wuu", "zh"],
        xki: ["xki", "sgn"],
        xml: ["xml", "sgn"],
        xmm: ["xmm", "ms"],
        xms: ["xms", "sgn"],
        yds: ["yds", "sgn"],
        ysl: ["ysl", "sgn"],
        yue: ["yue", "zh"],
        zib: ["zib", "sgn"],
        zlm: ["zlm", "ms"],
        zmi: ["zmi", "ms"],
        zsl: ["zsl", "sgn"],
        zsm: ["zsm", "ms"]
    }
};

/**
 * Convert only a-z to uppercase as per section 6.1 of the spec
 */
function toLatinUpperCase(str) {
    var i = str.length;

    while (i--) {
        var ch = str.charAt(i);

        if (ch >= "a" && ch <= "z") str = str.slice(0, i) + ch.toUpperCase() + str.slice(i + 1);
    }

    return str;
}

/**
 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
 * argument (which must be a String value)
 *
 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
 *   2.1, or successor,
 * - does not include duplicate variant subtags, and
 * - does not include duplicate singleton subtags.
 *
 * The abstract operation returns true if locale can be generated from the ABNF
 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
 * contain duplicate variant or singleton subtags (other than as a private use
 * subtag). It returns false otherwise. Terminal value characters in the grammar are
 * interpreted as the Unicode equivalents of the ASCII octet values given.
 */
function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
    // represents a well-formed BCP 47 language tag as specified in RFC 5646
    if (!expBCP47Syntax.test(locale)) return false;

    // does not include duplicate variant subtags, and
    if (expVariantDupes.test(locale)) return false;

    // does not include duplicate singleton subtags.
    if (expSingletonDupes.test(locale)) return false;

    return true;
}

/**
 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
 * regularized form of the locale argument (which must be a String value that is
 * a structurally valid BCP 47 language tag as verified by the
 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
 * into canonical form, and to regularize the case of the subtags, but does not
 * take the steps to bring a language tag into “extlang form” and to reorder
 * variant subtags.

 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
 * may include canonicalization rules for the extension subtag sequences they
 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
 * Implementations are allowed, but not required, to apply these additional rules.
 */
function /* 6.2.3 */CanonicalizeLanguageTag(locale) {
    var match = void 0,
        parts = void 0;

    // A language tag is in 'canonical form' when the tag is well-formed
    // according to the rules in Sections 2.1 and 2.2

    // Section 2.1 says all subtags use lowercase...
    locale = locale.toLowerCase();

    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
    // appear at the start of the tag nor occur after singletons.  Such two-letter
    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
    parts = locale.split('-');
    for (var i = 1, max = parts.length; i < max; i++) {
        // Two-letter subtags are all uppercase
        if (parts[i].length === 2) parts[i] = parts[i].toUpperCase();

        // Four-letter subtags are titlecase
        else if (parts[i].length === 4) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

            // Is it a singleton?
            else if (parts[i].length === 1 && parts[i] !== 'x') break;
    }
    locale = arrJoin.call(parts, '-');

    // The steps laid out in RFC 5646 section 4.5 are as follows:

    // 1.  Extension sequences are ordered into case-insensitive ASCII order
    //     by singleton subtag.
    if ((match = locale.match(expExtSequences)) && match.length > 1) {
        // The built-in sort() sorts by ASCII order, so use that
        match.sort();

        // Replace all extensions with the joined, sorted array
        locale = locale.replace(RegExp('(?:' + expExtSequences.source + ')+', 'i'), arrJoin.call(match, ''));
    }

    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
    //     Value', if there is one.
    if (hop.call(redundantTags.tags, locale)) locale = redundantTags.tags[locale];

    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
    //     For extlangs, the original primary language subtag is also
    //     replaced if there is a primary language subtag in the 'Preferred-
    //     Value'.
    parts = locale.split('-');

    for (var _i = 1, _max = parts.length; _i < _max; _i++) {
        if (hop.call(redundantTags.subtags, parts[_i])) parts[_i] = redundantTags.subtags[parts[_i]];else if (hop.call(redundantTags.extLang, parts[_i])) {
            parts[_i] = redundantTags.extLang[parts[_i]][0];

            // For extlang tags, the prefix needs to be removed if it is redundant
            if (_i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
                parts = arrSlice.call(parts, _i++);
                _max -= 1;
            }
        }
    }

    return arrJoin.call(parts, '-');
}

/**
 * The DefaultLocale abstract operation returns a String value representing the
 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
 * host environment’s current locale.
 */
function /* 6.2.4 */DefaultLocale() {
    return defaultLocale;
}

// Sect 6.3 Currency Codes
// =======================

var expCurrencyCode = /^[A-Z]{3}$/;

/**
 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
 * code. The following steps are taken:
 */
function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
    // 1. Let `c` be ToString(currency)
    var c = String(currency);

    // 2. Let `normalized` be the result of mapping c to upper case as described
    //    in 6.1.
    var normalized = toLatinUpperCase(c);

    // 3. If the string length of normalized is not 3, return false.
    // 4. If normalized contains any character that is not in the range "A" to "Z"
    //    (U+0041 to U+005A), return false.
    if (expCurrencyCode.test(normalized) === false) return false;

    // 5. Return true
    return true;
}

var expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi; // See `extension` below

function /* 9.2.1 */CanonicalizeLocaleList(locales) {
    // The abstract operation CanonicalizeLocaleList takes the following steps:

    // 1. If locales is undefined, then a. Return a new empty List
    if (locales === undefined) return new List();

    // 2. Let seen be a new empty List.
    var seen = new List();

    // 3. If locales is a String value, then
    //    a. Let locales be a new array created as if by the expression new
    //    Array(locales) where Array is the standard built-in constructor with
    //    that name and locales is the value of locales.
    locales = typeof locales === 'string' ? [locales] : locales;

    // 4. Let O be ToObject(locales).
    var O = toObject(locales);

    // 5. Let lenValue be the result of calling the [[Get]] internal method of
    //    O with the argument "length".
    // 6. Let len be ToUint32(lenValue).
    var len = toLength(O.length);

    // 7. Let k be 0.
    var k = 0;

    // 8. Repeat, while k < len
    while (k < len) {
        // a. Let Pk be ToString(k).
        var Pk = String(k);

        // b. Let kPresent be the result of calling the [[HasProperty]] internal
        //    method of O with argument Pk.
        var kPresent = Pk in O;

        // c. If kPresent is true, then
        if (kPresent) {
            // i. Let kValue be the result of calling the [[Get]] internal
            //     method of O with argument Pk.
            var kValue = O[Pk];

            // ii. If the type of kValue is not String or Object, then throw a
            //     TypeError exception.
            if (kValue === null || typeof kValue !== 'string' && (typeof kValue === "undefined" ? "undefined" : babelHelpers$1["typeof"](kValue)) !== 'object') throw new TypeError('String or Object type expected');

            // iii. Let tag be ToString(kValue).
            var tag = String(kValue);

            // iv. If the result of calling the abstract operation
            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
            //     the argument, is false, then throw a RangeError exception.
            if (!IsStructurallyValidLanguageTag(tag)) throw new RangeError("'" + tag + "' is not a structurally valid language tag");

            // v. Let tag be the result of calling the abstract operation
            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
            //    argument.
            tag = CanonicalizeLanguageTag(tag);

            // vi. If tag is not an element of seen, then append tag as the last
            //     element of seen.
            if (arrIndexOf.call(seen, tag) === -1) arrPush.call(seen, tag);
        }

        // d. Increase k by 1.
        k++;
    }

    // 9. Return seen.
    return seen;
}

/**
 * The BestAvailableLocale abstract operation compares the provided argument
 * locale, which must be a String value with a structurally valid and
 * canonicalized BCP 47 language tag, against the locales in availableLocales and
 * returns either the longest non-empty prefix of locale that is an element of
 * availableLocales, or undefined if there is no such element. It uses the
 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
 */
function /* 9.2.2 */BestAvailableLocale(availableLocales, locale) {
    // 1. Let candidate be locale
    var candidate = locale;

    // 2. Repeat
    while (candidate) {
        // a. If availableLocales contains an element equal to candidate, then return
        // candidate.
        if (arrIndexOf.call(availableLocales, candidate) > -1) return candidate;

        // b. Let pos be the character index of the last occurrence of "-"
        // (U+002D) within candidate. If that character does not occur, return
        // undefined.
        var pos = candidate.lastIndexOf('-');

        if (pos < 0) return;

        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
        //    then decrease pos by 2.
        if (pos >= 2 && candidate.charAt(pos - 2) === '-') pos -= 2;

        // d. Let candidate be the substring of candidate from position 0, inclusive,
        //    to position pos, exclusive.
        candidate = candidate.substring(0, pos);
    }
}

/**
 * The LookupMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The following steps are taken:
 */
function /* 9.2.3 */LookupMatcher(availableLocales, requestedLocales) {
    // 1. Let i be 0.
    var i = 0;

    // 2. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;

    // 3. Let availableLocale be undefined.
    var availableLocale = void 0;

    var locale = void 0,
        noExtensionsLocale = void 0;

    // 4. Repeat while i < len and availableLocale is undefined:
    while (i < len && !availableLocale) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position i.
        locale = requestedLocales[i];

        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');

        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. Increase i by 1.
        i++;
    }

    // 5. Let result be a new Record.
    var result = new Record();

    // 6. If availableLocale is not undefined, then
    if (availableLocale !== undefined) {
        // a. Set result.[[locale]] to availableLocale.
        result['[[locale]]'] = availableLocale;

        // b. If locale and noExtensionsLocale are not the same String value, then
        if (String(locale) !== String(noExtensionsLocale)) {
            // i. Let extension be the String value consisting of the first
            //    substring of locale that is a Unicode locale extension sequence.
            var extension = locale.match(expUnicodeExSeq)[0];

            // ii. Let extensionIndex be the character position of the initial
            //     "-" of the first Unicode locale extension sequence within locale.
            var extensionIndex = locale.indexOf('-u-');

            // iii. Set result.[[extension]] to extension.
            result['[[extension]]'] = extension;

            // iv. Set result.[[extensionIndex]] to extensionIndex.
            result['[[extensionIndex]]'] = extensionIndex;
        }
    }
    // 7. Else
    else
        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
        //    operation (defined in 6.2.4).
        result['[[locale]]'] = DefaultLocale();

    // 8. Return result
    return result;
}

/**
 * The BestFitMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The algorithm is implementation dependent, but should produce results
 * that a typical user of the requested locales would perceive as at least as
 * good as those produced by the LookupMatcher abstract operation. Options
 * specified through Unicode locale extension sequences must be ignored by the
 * algorithm. Information about such subsequences is returned separately.
 * The abstract operation returns a record with a [[locale]] field, whose value
 * is the language tag of the selected locale, which must be an element of
 * availableLocales. If the language tag of the request locale that led to the
 * selected locale contained a Unicode locale extension sequence, then the
 * returned record also contains an [[extension]] field whose value is the first
 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
 * is the index of the first Unicode locale extension sequence within the request
 * locale language tag.
 */
function /* 9.2.4 */BestFitMatcher(availableLocales, requestedLocales) {
    return LookupMatcher(availableLocales, requestedLocales);
}

/**
 * The ResolveLocale abstract operation compares a BCP 47 language priority list
 * requestedLocales against the locales in availableLocales and determines the
 * best available language to meet the request. availableLocales and
 * requestedLocales must be provided as List values, options as a Record.
 */
function /* 9.2.5 */ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
    if (availableLocales.length === 0) {
        throw new ReferenceError('No locale data has been provided for this object yet.');
    }

    // The following steps are taken:
    // 1. Let matcher be the value of options.[[localeMatcher]].
    var matcher = options['[[localeMatcher]]'];

    var r = void 0;

    // 2. If matcher is "lookup", then
    if (matcher === 'lookup')
        // a. Let r be the result of calling the LookupMatcher abstract operation
        //    (defined in 9.2.3) with arguments availableLocales and
        //    requestedLocales.
        r = LookupMatcher(availableLocales, requestedLocales);

        // 3. Else
    else
        // a. Let r be the result of calling the BestFitMatcher abstract
        //    operation (defined in 9.2.4) with arguments availableLocales and
        //    requestedLocales.
        r = BestFitMatcher(availableLocales, requestedLocales);

    // 4. Let foundLocale be the value of r.[[locale]].
    var foundLocale = r['[[locale]]'];

    var extensionSubtags = void 0,
        extensionSubtagsLength = void 0;

    // 5. If r has an [[extension]] field, then
    if (hop.call(r, '[[extension]]')) {
        // a. Let extension be the value of r.[[extension]].
        var extension = r['[[extension]]'];
        // b. Let split be the standard built-in function object defined in ES5,
        //    15.5.4.14.
        var split = String.prototype.split;
        // c. Let extensionSubtags be the result of calling the [[Call]] internal
        //    method of split with extension as the this value and an argument
        //    list containing the single item "-".
        extensionSubtags = split.call(extension, '-');
        // d. Let extensionSubtagsLength be the result of calling the [[Get]]
        //    internal method of extensionSubtags with argument "length".
        extensionSubtagsLength = extensionSubtags.length;
    }

    // 6. Let result be a new Record.
    var result = new Record();

    // 7. Set result.[[dataLocale]] to foundLocale.
    result['[[dataLocale]]'] = foundLocale;

    // 8. Let supportedExtension be "-u".
    var supportedExtension = '-u';
    // 9. Let i be 0.
    var i = 0;
    // 10. Let len be the result of calling the [[Get]] internal method of
    //     relevantExtensionKeys with argument "length".
    var len = relevantExtensionKeys.length;

    // 11 Repeat while i < len:
    while (i < len) {
        // a. Let key be the result of calling the [[Get]] internal method of
        //    relevantExtensionKeys with argument ToString(i).
        var key = relevantExtensionKeys[i];
        // b. Let foundLocaleData be the result of calling the [[Get]] internal
        //    method of localeData with the argument foundLocale.
        var foundLocaleData = localeData[foundLocale];
        // c. Let keyLocaleData be the result of calling the [[Get]] internal
        //    method of foundLocaleData with the argument key.
        var keyLocaleData = foundLocaleData[key];
        // d. Let value be the result of calling the [[Get]] internal method of
        //    keyLocaleData with argument "0".
        var value = keyLocaleData['0'];
        // e. Let supportedExtensionAddition be "".
        var supportedExtensionAddition = '';
        // f. Let indexOf be the standard built-in function object defined in
        //    ES5, 15.4.4.14.
        var indexOf = arrIndexOf;

        // g. If extensionSubtags is not undefined, then
        if (extensionSubtags !== undefined) {
            // i. Let keyPos be the result of calling the [[Call]] internal
            //    method of indexOf with extensionSubtags as the this value and
            // an argument list containing the single item key.
            var keyPos = indexOf.call(extensionSubtags, key);

            // ii. If keyPos ≠ -1, then
            if (keyPos !== -1) {
                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
                //    result of calling the [[Get]] internal method of
                //    extensionSubtags with argument ToString(keyPos +1) is greater
                //    than 2, then
                if (keyPos + 1 < extensionSubtagsLength && extensionSubtags[keyPos + 1].length > 2) {
                    // a. Let requestedValue be the result of calling the [[Get]]
                    //    internal method of extensionSubtags with argument
                    //    ToString(keyPos + 1).
                    var requestedValue = extensionSubtags[keyPos + 1];
                    // b. Let valuePos be the result of calling the [[Call]]
                    //    internal method of indexOf with keyLocaleData as the
                    //    this value and an argument list containing the single
                    //    item requestedValue.
                    var valuePos = indexOf.call(keyLocaleData, requestedValue);

                    // c. If valuePos ≠ -1, then
                    if (valuePos !== -1) {
                        // i. Let value be requestedValue.
                        value = requestedValue,
                        // ii. Let supportedExtensionAddition be the
                        //     concatenation of "-", key, "-", and value.
                        supportedExtensionAddition = '-' + key + '-' + value;
                    }
                }
                // 2. Else
                else {
                        // a. Let valuePos be the result of calling the [[Call]]
                        // internal method of indexOf with keyLocaleData as the this
                        // value and an argument list containing the single item
                        // "true".
                        var _valuePos = indexOf(keyLocaleData, 'true');

                        // b. If valuePos ≠ -1, then
                        if (_valuePos !== -1)
                            // i. Let value be "true".
                            value = 'true';
                    }
            }
        }
        // h. If options has a field [[<key>]], then
        if (hop.call(options, '[[' + key + ']]')) {
            // i. Let optionsValue be the value of options.[[<key>]].
            var optionsValue = options['[[' + key + ']]'];

            // ii. If the result of calling the [[Call]] internal method of indexOf
            //     with keyLocaleData as the this value and an argument list
            //     containing the single item optionsValue is not -1, then
            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
                // 1. If optionsValue is not equal to value, then
                if (optionsValue !== value) {
                    // a. Let value be optionsValue.
                    value = optionsValue;
                    // b. Let supportedExtensionAddition be "".
                    supportedExtensionAddition = '';
                }
            }
        }
        // i. Set result.[[<key>]] to value.
        result['[[' + key + ']]'] = value;

        // j. Append supportedExtensionAddition to supportedExtension.
        supportedExtension += supportedExtensionAddition;

        // k. Increase i by 1.
        i++;
    }
    // 12. If the length of supportedExtension is greater than 2, then
    if (supportedExtension.length > 2) {
        // a.
        var privateIndex = foundLocale.indexOf("-x-");
        // b.
        if (privateIndex === -1) {
            // i.
            foundLocale = foundLocale + supportedExtension;
        }
        // c.
        else {
                // i.
                var preExtension = foundLocale.substring(0, privateIndex);
                // ii.
                var postExtension = foundLocale.substring(privateIndex);
                // iii.
                foundLocale = preExtension + supportedExtension + postExtension;
            }
        // d. asserting - skipping
        // e.
        foundLocale = CanonicalizeLanguageTag(foundLocale);
    }
    // 13. Set result.[[locale]] to foundLocale.
    result['[[locale]]'] = foundLocale;

    // 14. Return result.
    return result;
}

/**
 * The LookupSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
 * Locales appear in the same order in the returned list as in requestedLocales.
 * The following steps are taken:
 */
function /* 9.2.6 */LookupSupportedLocales(availableLocales, requestedLocales) {
    // 1. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;
    // 2. Let subset be a new empty List.
    var subset = new List();
    // 3. Let k be 0.
    var k = 0;

    // 4. Repeat while k < len
    while (k < len) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position k.
        var locale = requestedLocales[k];
        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        var noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');
        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. If availableLocale is not undefined, then append locale to the end of
        //    subset.
        if (availableLocale !== undefined) arrPush.call(subset, locale);

        // e. Increment k by 1.
        k++;
    }

    // 5. Let subsetArray be a new Array object whose elements are the same
    //    values in the same order as the elements of subset.
    var subsetArray = arrSlice.call(subset);

    // 6. Return subsetArray.
    return subsetArray;
}

/**
 * The BestFitSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the Best Fit Matcher
 * algorithm. Locales appear in the same order in the returned list as in
 * requestedLocales. The steps taken are implementation dependent.
 */
function /*9.2.7 */BestFitSupportedLocales(availableLocales, requestedLocales) {
    // ###TODO: implement this function as described by the specification###
    return LookupSupportedLocales(availableLocales, requestedLocales);
}

/**
 * The SupportedLocales abstract operation returns the subset of the provided BCP
 * 47 language priority list requestedLocales for which availableLocales has a
 * matching locale. Two algorithms are available to match the locales: the Lookup
 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
 * best-fit algorithm. Locales appear in the same order in the returned list as
 * in requestedLocales. The following steps are taken:
 */
function /*9.2.8 */SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = void 0,
        subset = void 0;

    // 1. If options is not undefined, then
    if (options !== undefined) {
        // a. Let options be ToObject(options).
        options = new Record(toObject(options));
        // b. Let matcher be the result of calling the [[Get]] internal method of
        //    options with argument "localeMatcher".
        matcher = options.localeMatcher;

        // c. If matcher is not undefined, then
        if (matcher !== undefined) {
            // i. Let matcher be ToString(matcher).
            matcher = String(matcher);

            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
            //     exception.
            if (matcher !== 'lookup' && matcher !== 'best fit') throw new RangeError('matcher should be "lookup" or "best fit"');
        }
    }
    // 2. If matcher is undefined or "best fit", then
    if (matcher === undefined || matcher === 'best fit')
        // a. Let subset be the result of calling the BestFitSupportedLocales
        //    abstract operation (defined in 9.2.7) with arguments
        //    availableLocales and requestedLocales.
        subset = BestFitSupportedLocales(availableLocales, requestedLocales);
        // 3. Else
    else
        // a. Let subset be the result of calling the LookupSupportedLocales
        //    abstract operation (defined in 9.2.6) with arguments
        //    availableLocales and requestedLocales.
        subset = LookupSupportedLocales(availableLocales, requestedLocales);

    // 4. For each named own property name P of subset,
    for (var P in subset) {
        if (!hop.call(subset, P)) continue;

        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
        //    method of subset with P.
        // b. Set desc.[[Writable]] to false.
        // c. Set desc.[[Configurable]] to false.
        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
        //    and true as arguments.
        defineProperty(subset, P, {
            writable: false, configurable: false, value: subset[P]
        });
    }
    // "Freeze" the array so no new elements can be added
    defineProperty(subset, 'length', { writable: false });

    // 5. Return subset
    return subset;
}

/**
 * The GetOption abstract operation extracts the value of the property named
 * property from the provided options object, converts it to the required type,
 * checks whether it is one of a List of allowed values, and fills in a fallback
 * value if necessary.
 */
function /*9.2.9 */GetOption(options, property, type, values, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Assert: type is "boolean" or "string".
        // b. If type is "boolean", then let value be ToBoolean(value).
        // c. If type is "string", then let value be ToString(value).
        value = type === 'boolean' ? Boolean(value) : type === 'string' ? String(value) : value;

        // d. If values is not undefined, then
        if (values !== undefined) {
            // i. If values does not contain an element equal to value, then throw a
            //    RangeError exception.
            if (arrIndexOf.call(values, value) === -1) throw new RangeError("'" + value + "' is not an allowed value for `" + property + '`');
        }

        // e. Return value.
        return value;
    }
    // Else return fallback.
    return fallback;
}

/**
 * The GetNumberOption abstract operation extracts a property value from the
 * provided options object, converts it to a Number value, checks whether it is
 * in the allowed range, and fills in a fallback value if necessary.
 */
function /* 9.2.10 */GetNumberOption(options, property, minimum, maximum, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Let value be ToNumber(value).
        value = Number(value);

        // b. If value is NaN or less than minimum or greater than maximum, throw a
        //    RangeError exception.
        if (isNaN(value) || value < minimum || value > maximum) throw new RangeError('Value is not a number or outside accepted range');

        // c. Return floor(value).
        return Math.floor(value);
    }
    // 3. Else return fallback.
    return fallback;
}

// 8 The Intl Object
var Intl = {};

// 8.2 Function Properties of the Intl Object

// 8.2.1
// @spec[tc39/ecma402/master/spec/intl.html]
// @clause[sec-intl.getcanonicallocales]
function getCanonicalLocales(locales) {
    // 1. Let ll be ? CanonicalizeLocaleList(locales).
    var ll = CanonicalizeLocaleList(locales);
    // 2. Return CreateArrayFromList(ll).
    {
        var result = [];

        var len = ll.length;
        var k = 0;

        while (k < len) {
            result[k] = ll[k];
            k++;
        }
        return result;
    }
}

Object.defineProperty(Intl, 'getCanonicalLocales', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: getCanonicalLocales
});

// Currency minor units output from get-4217 grunt task, formatted
var currencyMinorUnits = {
    BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0,
    XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
    OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
};

// Define the NumberFormat constructor internally so it cannot be tainted
function NumberFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.NumberFormat(locales, options);
    }

    return InitializeNumberFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'NumberFormat', {
    configurable: true,
    writable: true,
    value: NumberFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(Intl.NumberFormat, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeNumberFormat accepts the arguments
 * numberFormat (which must be an object), locales, and options. It initializes
 * numberFormat as a NumberFormat object.
 */
function /*11.1.1.1 */InitializeNumberFormat(numberFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(numberFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
    // value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(numberFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. If options is undefined, then
    if (options === undefined)
        // a. Let options be the result of creating a new object as if by the
        // expression new Object() where Object is the standard built-in constructor
        // with that name.
        options = {};

        // 5. Else
    else
        // a. Let options be ToObject(options).
        options = toObject(options);

    // 6. Let opt be a new Record.
    var opt = new Record(),


    // 7. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
    //    a List containing the two String values "lookup" and "best fit", and
    //    "best fit".
    matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 8. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 9. Let NumberFormat be the standard built-in object that is the initial value
    //    of Intl.NumberFormat.
    // 10. Let localeData be the value of the [[localeData]] internal property of
    //     NumberFormat.
    var localeData = internals.NumberFormat['[[localeData]]'];

    // 11. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //     internal property of NumberFormat, and localeData.
    var r = ResolveLocale(internals.NumberFormat['[[availableLocales]]'], requestedLocales, opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData);

    // 12. Set the [[locale]] internal property of numberFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
    //     of r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let s be the result of calling the GetOption abstract operation with the
    //     arguments options, "style", "string", a List containing the three String
    //     values "decimal", "percent", and "currency", and "decimal".
    var s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

    // 16. Set the [[style]] internal property of numberFormat to s.
    internal['[[style]]'] = s;

    // 17. Let c be the result of calling the GetOption abstract operation with the
    //     arguments options, "currency", "string", undefined, and undefined.
    var c = GetOption(options, 'currency', 'string');

    // 18. If c is not undefined and the result of calling the
    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
    //     argument c is false, then throw a RangeError exception.
    if (c !== undefined && !IsWellFormedCurrencyCode(c)) throw new RangeError("'" + c + "' is not a valid currency code");

    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
    if (s === 'currency' && c === undefined) throw new TypeError('Currency code is required when style is currency');

    var cDigits = void 0;

    // 20. If s is "currency", then
    if (s === 'currency') {
        // a. Let c be the result of converting c to upper case as specified in 6.1.
        c = c.toUpperCase();

        // b. Set the [[currency]] internal property of numberFormat to c.
        internal['[[currency]]'] = c;

        // c. Let cDigits be the result of calling the CurrencyDigits abstract
        //    operation (defined below) with argument c.
        cDigits = CurrencyDigits(c);
    }

    // 21. Let cd be the result of calling the GetOption abstract operation with the
    //     arguments options, "currencyDisplay", "string", a List containing the
    //     three String values "code", "symbol", and "name", and "symbol".
    var cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
    //     numberFormat to cd.
    if (s === 'currency') internal['[[currencyDisplay]]'] = cd;

    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
    //     and 1.
    var mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
    internal['[[minimumIntegerDigits]]'] = mnid;

    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
    //     be 0.
    var mnfdDefault = s === 'currency' ? cDigits : 0;

    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
    var mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
    internal['[[minimumFractionDigits]]'] = mnfd;

    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
    //     be max(mnfd, 3).
    var mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits) : s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3);

    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
    var mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
    internal['[[maximumFractionDigits]]'] = mxfd;

    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
    //     with argument "minimumSignificantDigits".
    var mnsd = options.minimumSignificantDigits;

    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
    //     with argument "maximumSignificantDigits".
    var mxsd = options.maximumSignificantDigits;

    // 33. If mnsd is not undefined or mxsd is not undefined, then:
    if (mnsd !== undefined || mxsd !== undefined) {
        // a. Let mnsd be the result of calling the GetNumberOption abstract
        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
        //    and 1.
        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

        // b. Let mxsd be the result of calling the GetNumberOption abstract
        //     operation with arguments options, "maximumSignificantDigits", mnsd,
        //     21, and 21.
        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
        //    numberFormat to mxsd.
        internal['[[minimumSignificantDigits]]'] = mnsd;
        internal['[[maximumSignificantDigits]]'] = mxsd;
    }
    // 34. Let g be the result of calling the GetOption abstract operation with the
    //     arguments options, "useGrouping", "boolean", undefined, and true.
    var g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
    internal['[[useGrouping]]'] = g;

    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 37. Let patterns be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "patterns".
    var patterns = dataLocaleData.patterns;

    // 38. Assert: patterns is an object (see 11.2.3)

    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
    //     patterns with argument s.
    var stylePatterns = patterns[s];

    // 40. Set the [[positivePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "positivePattern".
    internal['[[positivePattern]]'] = stylePatterns.positivePattern;

    // 41. Set the [[negativePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "negativePattern".
    internal['[[negativePattern]]'] = stylePatterns.negativePattern;

    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
    //     true.
    internal['[[initializedNumberFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) numberFormat.format = GetFormatNumber.call(numberFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return numberFormat;
}

function CurrencyDigits(currency) {
    // When the CurrencyDigits abstract operation is called with an argument currency
    // (which must be an upper case String value), the following steps are taken:

    // 1. If the ISO 4217 currency and funds code list contains currency as an
    // alphabetic code, then return the minor unit value corresponding to the
    // currency from the list; else return 2.
    return currencyMinorUnits[currency] !== undefined ? currencyMinorUnits[currency] : 2;
}

/* 11.2.3 */internals.NumberFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
 * following steps are taken:
 */
/* 11.2.2 */
defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * NumberFormat object.
 */
/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatNumber
});

function GetFormatNumber() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 11.3_b
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this NumberFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 1, that takes the argument value and
        //    performs the following steps:
        var F = function F(value) {
            // i. If value is not provided, then let value be undefined.
            // ii. Let x be ToNumber(value).
            // iii. Return the result of calling the FormatNumber abstract
            //      operation (defined below) with arguments this and x.
            return FormatNumber(this, /* x = */Number(value));
        };

        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);

        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts() {
    var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.NumberFormat object.');

    var x = Number(value);
    return FormatNumberToParts(this, x);
}

Object.defineProperty(Intl.NumberFormat.prototype, 'formatToParts', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: formatToParts
});

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumbertoparts]
 */
function FormatNumberToParts(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be ArrayCreate(0).
    var result = [];
    // 3. Let n be 0.
    var n = 0;
    // 4. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Let O be ObjectCreate(%ObjectPrototype%).
        var O = {};
        // a. Perform ? CreateDataPropertyOrThrow(O, "type", part.[[type]]).
        O.type = part['[[type]]'];
        // a. Perform ? CreateDataPropertyOrThrow(O, "value", part.[[value]]).
        O.value = part['[[value]]'];
        // a. Perform ? CreateDataPropertyOrThrow(result, ? ToString(n), O).
        result[n] = O;
        // a. Increment n by 1.
        n += 1;
    }
    // 5. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-partitionnumberpattern]
 */
function PartitionNumberPattern(numberFormat, x) {

    var internal = getInternalProperties(numberFormat),
        locale = internal['[[dataLocale]]'],
        nums = internal['[[numberingSystem]]'],
        data = internals.NumberFormat['[[localeData]]'][locale],
        ild = data.symbols[nums] || data.symbols.latn,
        pattern = void 0;

    // 1. If x is not NaN and x < 0, then:
    if (!isNaN(x) && x < 0) {
        // a. Let x be -x.
        x = -x;
        // a. Let pattern be the value of numberFormat.[[negativePattern]].
        pattern = internal['[[negativePattern]]'];
    }
    // 2. Else,
    else {
            // a. Let pattern be the value of numberFormat.[[positivePattern]].
            pattern = internal['[[positivePattern]]'];
        }
    // 3. Let result be a new empty List.
    var result = new List();
    // 4. Let beginIndex be Call(%StringProto_indexOf%, pattern, "{", 0).
    var beginIndex = pattern.indexOf('{', 0);
    // 5. Let endIndex be 0.
    var endIndex = 0;
    // 6. Let nextIndex be 0.
    var nextIndex = 0;
    // 7. Let length be the number of code units in pattern.
    var length = pattern.length;
    // 8. Repeat while beginIndex is an integer index into pattern:
    while (beginIndex > -1 && beginIndex < length) {
        // a. Set endIndex to Call(%StringProto_indexOf%, pattern, "}", beginIndex)
        endIndex = pattern.indexOf('}', beginIndex);
        // a. If endIndex = -1, throw new Error exception.
        if (endIndex === -1) throw new Error();
        // a. If beginIndex is greater than nextIndex, then:
        if (beginIndex > nextIndex) {
            // i. Let literal be a substring of pattern from position nextIndex, inclusive, to position beginIndex, exclusive.
            var literal = pattern.substring(nextIndex, beginIndex);
            // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
            arrPush.call(result, { '[[type]]': 'literal', '[[value]]': literal });
        }
        // a. Let p be the substring of pattern from position beginIndex, exclusive, to position endIndex, exclusive.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // a. If p is equal "number", then:
        if (p === "number") {
            // i. If x is NaN,
            if (isNaN(x)) {
                // 1. Let n be an ILD String value indicating the NaN value.
                var n = ild.nan;
                // 2. Add new part record { [[type]]: "nan", [[value]]: n } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'nan', '[[value]]': n });
            }
            // ii. Else if isFinite(x) is false,
            else if (!isFinite(x)) {
                    // 1. Let n be an ILD String value indicating infinity.
                    var _n = ild.infinity;
                    // 2. Add new part record { [[type]]: "infinity", [[value]]: n } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'infinity', '[[value]]': _n });
                }
                // iii. Else,
                else {
                        // 1. If the value of numberFormat.[[style]] is "percent" and isFinite(x), let x be 100 × x.
                        if (internal['[[style]]'] === 'percent' && isFinite(x)) x *= 100;

                        var _n2 = void 0;
                        // 2. If the numberFormat.[[minimumSignificantDigits]] and numberFormat.[[maximumSignificantDigits]] are present, then
                        if (hop.call(internal, '[[minimumSignificantDigits]]') && hop.call(internal, '[[maximumSignificantDigits]]')) {
                            // a. Let n be ToRawPrecision(x, numberFormat.[[minimumSignificantDigits]], numberFormat.[[maximumSignificantDigits]]).
                            _n2 = ToRawPrecision(x, internal['[[minimumSignificantDigits]]'], internal['[[maximumSignificantDigits]]']);
                        }
                        // 3. Else,
                        else {
                                // a. Let n be ToRawFixed(x, numberFormat.[[minimumIntegerDigits]], numberFormat.[[minimumFractionDigits]], numberFormat.[[maximumFractionDigits]]).
                                _n2 = ToRawFixed(x, internal['[[minimumIntegerDigits]]'], internal['[[minimumFractionDigits]]'], internal['[[maximumFractionDigits]]']);
                            }
                        // 4. If the value of the numberFormat.[[numberingSystem]] matches one of the values in the "Numbering System" column of Table 2 below, then
                        if (numSys[nums]) {
                            (function () {
                                // a. Let digits be an array whose 10 String valued elements are the UTF-16 string representations of the 10 digits specified in the "Digits" column of the matching row in Table 2.
                                var digits = numSys[nums];
                                // a. Replace each digit in n with the value of digits[digit].
                                _n2 = String(_n2).replace(/\d/g, function (digit) {
                                    return digits[digit];
                                });
                            })();
                        }
                        // 5. Else use an implementation dependent algorithm to map n to the appropriate representation of n in the given numbering system.
                        else _n2 = String(_n2); // ###TODO###

                        var integer = void 0;
                        var fraction = void 0;
                        // 6. Let decimalSepIndex be Call(%StringProto_indexOf%, n, ".", 0).
                        var decimalSepIndex = _n2.indexOf('.', 0);
                        // 7. If decimalSepIndex > 0, then:
                        if (decimalSepIndex > 0) {
                            // a. Let integer be the substring of n from position 0, inclusive, to position decimalSepIndex, exclusive.
                            integer = _n2.substring(0, decimalSepIndex);
                            // a. Let fraction be the substring of n from position decimalSepIndex, exclusive, to the end of n.
                            fraction = _n2.substring(decimalSepIndex + 1, decimalSepIndex.length);
                        }
                        // 8. Else:
                        else {
                                // a. Let integer be n.
                                integer = _n2;
                                // a. Let fraction be undefined.
                                fraction = undefined;
                            }
                        // 9. If the value of the numberFormat.[[useGrouping]] is true,
                        if (internal['[[useGrouping]]'] === true) {
                            // a. Let groupSepSymbol be the ILND String representing the grouping separator.
                            var groupSepSymbol = ild.group;
                            // a. Let groups be a List whose elements are, in left to right order, the substrings defined by ILND set of locations within the integer.
                            var groups = [];
                            // ----> implementation:
                            // Primary group represents the group closest to the decimal
                            var pgSize = data.patterns.primaryGroupSize || 3;
                            // Secondary group is every other group
                            var sgSize = data.patterns.secondaryGroupSize || pgSize;
                            // Group only if necessary
                            if (integer.length > pgSize) {
                                // Index of the primary grouping separator
                                var end = integer.length - pgSize;
                                // Starting index for our loop
                                var idx = end % sgSize;
                                var start = integer.slice(0, idx);
                                if (start.length) arrPush.call(groups, start);
                                // Loop to separate into secondary grouping digits
                                while (idx < end) {
                                    arrPush.call(groups, integer.slice(idx, idx + sgSize));
                                    idx += sgSize;
                                }
                                // Add the primary grouping digits
                                arrPush.call(groups, integer.slice(end));
                            } else {
                                arrPush.call(groups, integer);
                            }
                            // a. Assert: The number of elements in groups List is greater than 0.
                            if (groups.length === 0) throw new Error();
                            // a. Repeat, while groups List is not empty:
                            while (groups.length) {
                                // i. Remove the first element from groups and let integerGroup be the value of that element.
                                var integerGroup = arrShift.call(groups);
                                // ii. Add new part record { [[type]]: "integer", [[value]]: integerGroup } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integerGroup });
                                // iii. If groups List is not empty, then:
                                if (groups.length) {
                                    // 1. Add new part record { [[type]]: "group", [[value]]: groupSepSymbol } as a new element of the list result.
                                    arrPush.call(result, { '[[type]]': 'group', '[[value]]': groupSepSymbol });
                                }
                            }
                        }
                        // 10. Else,
                        else {
                                // a. Add new part record { [[type]]: "integer", [[value]]: integer } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integer });
                            }
                        // 11. If fraction is not undefined, then:
                        if (fraction !== undefined) {
                            // a. Let decimalSepSymbol be the ILND String representing the decimal separator.
                            var decimalSepSymbol = ild.decimal;
                            // a. Add new part record { [[type]]: "decimal", [[value]]: decimalSepSymbol } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'decimal', '[[value]]': decimalSepSymbol });
                            // a. Add new part record { [[type]]: "fraction", [[value]]: fraction } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'fraction', '[[value]]': fraction });
                        }
                    }
        }
        // a. Else if p is equal "plusSign", then:
        else if (p === "plusSign") {
                // i. Let plusSignSymbol be the ILND String representing the plus sign.
                var plusSignSymbol = ild.plusSign;
                // ii. Add new part record { [[type]]: "plusSign", [[value]]: plusSignSymbol } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'plusSign', '[[value]]': plusSignSymbol });
            }
            // a. Else if p is equal "minusSign", then:
            else if (p === "minusSign") {
                    // i. Let minusSignSymbol be the ILND String representing the minus sign.
                    var minusSignSymbol = ild.minusSign;
                    // ii. Add new part record { [[type]]: "minusSign", [[value]]: minusSignSymbol } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'minusSign', '[[value]]': minusSignSymbol });
                }
                // a. Else if p is equal "percentSign" and numberFormat.[[style]] is "percent", then:
                else if (p === "percentSign" && internal['[[style]]'] === "percent") {
                        // i. Let percentSignSymbol be the ILND String representing the percent sign.
                        var percentSignSymbol = ild.percentSign;
                        // ii. Add new part record { [[type]]: "percentSign", [[value]]: percentSignSymbol } as a new element of the list result.
                        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': percentSignSymbol });
                    }
                    // a. Else if p is equal "currency" and numberFormat.[[style]] is "currency", then:
                    else if (p === "currency" && internal['[[style]]'] === "currency") {
                            // i. Let currency be the value of numberFormat.[[currency]].
                            var currency = internal['[[currency]]'];

                            var cd = void 0;

                            // ii. If numberFormat.[[currencyDisplay]] is "code", then
                            if (internal['[[currencyDisplay]]'] === "code") {
                                // 1. Let cd be currency.
                                cd = currency;
                            }
                            // iii. Else if numberFormat.[[currencyDisplay]] is "symbol", then
                            else if (internal['[[currencyDisplay]]'] === "symbol") {
                                    // 1. Let cd be an ILD string representing currency in short form. If the implementation does not have such a representation of currency, use currency itself.
                                    cd = data.currencies[currency] || currency;
                                }
                                // iv. Else if numberFormat.[[currencyDisplay]] is "name", then
                                else if (internal['[[currencyDisplay]]'] === "name") {
                                        // 1. Let cd be an ILD string representing currency in long form. If the implementation does not have such a representation of currency, then use currency itself.
                                        cd = currency;
                                    }
                            // v. Add new part record { [[type]]: "currency", [[value]]: cd } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'currency', '[[value]]': cd });
                        }
                        // a. Else,
                        else {
                                // i. Let literal be the substring of pattern from position beginIndex, inclusive, to position endIndex, inclusive.
                                var _literal = pattern.substring(beginIndex, endIndex);
                                // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal });
                            }
        // a. Set nextIndex to endIndex + 1.
        nextIndex = endIndex + 1;
        // a. Set beginIndex to Call(%StringProto_indexOf%, pattern, "{", nextIndex)
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    // 9. If nextIndex is less than length, then:
    if (nextIndex < length) {
        // a. Let literal be the substring of pattern from position nextIndex, inclusive, to position length, exclusive.
        var _literal2 = pattern.substring(nextIndex, length);
        // a. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal2 });
    }
    // 10. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumber]
 */
function FormatNumber(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be an empty String.
    var result = '';
    // 3. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Set result to a String value produced by concatenating result and part.[[value]].
        result += part['[[value]]'];
    }
    // 4. Return result.
    return result;
}

/**
 * When the ToRawPrecision abstract operation is called with arguments x (which
 * must be a finite non-negative number), minPrecision, and maxPrecision (both
 * must be integers between 1 and 21) the following steps are taken:
 */
function ToRawPrecision(x, minPrecision, maxPrecision) {
    // 1. Let p be maxPrecision.
    var p = maxPrecision;

    var m = void 0,
        e = void 0;

    // 2. If x = 0, then
    if (x === 0) {
        // a. Let m be the String consisting of p occurrences of the character "0".
        m = arrJoin.call(Array(p + 1), '0');
        // b. Let e be 0.
        e = 0;
    }
    // 3. Else
    else {
            // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
            //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
            //    possible. If there are two such sets of e and n, pick the e and n for
            //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
            e = log10Floor(Math.abs(x));

            // Easier to get to m from here
            var f = Math.round(Math.exp(Math.abs(e - p + 1) * Math.LN10));

            // b. Let m be the String consisting of the digits of the decimal
            //    representation of n (in order, with no leading zeroes)
            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
        }

    // 4. If e ≥ p, then
    if (e >= p)
        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
        return m + arrJoin.call(Array(e - p + 1 + 1), '0');

        // 5. If e = p-1, then
    else if (e === p - 1)
            // a. Return m.
            return m;

            // 6. If e ≥ 0, then
        else if (e >= 0)
                // a. Let m be the concatenation of the first e+1 characters of m, the character
                //    ".", and the remaining p–(e+1) characters of m.
                m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

                // 7. If e < 0, then
            else if (e < 0)
                    // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
                    //    character "0", and the string m.
                    m = '0.' + arrJoin.call(Array(-(e + 1) + 1), '0') + m;

    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
        // a. Let cut be maxPrecision – minPrecision.
        var cut = maxPrecision - minPrecision;

        // b. Repeat while cut > 0 and the last character of m is "0":
        while (cut > 0 && m.charAt(m.length - 1) === '0') {
            //  i. Remove the last character from m.
            m = m.slice(0, -1);

            //  ii. Decrease cut by 1.
            cut--;
        }

        // c. If the last character of m is ".", then
        if (m.charAt(m.length - 1) === '.')
            //    i. Remove the last character from m.
            m = m.slice(0, -1);
    }
    // 9. Return m.
    return m;
}

/**
 * @spec[tc39/ecma402/master/spec/numberformat.html]
 * @clause[sec-torawfixed]
 * When the ToRawFixed abstract operation is called with arguments x (which must
 * be a finite non-negative number), minInteger (which must be an integer between
 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
 * 20) the following steps are taken:
 */
function ToRawFixed(x, minInteger, minFraction, maxFraction) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n be an integer for which the exact mathematical value of n ÷ 10f – x is as close to zero as possible. If there are two such n, pick the larger n.
    var n = Math.pow(10, f) * x; // diverging...
    // 3. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
    var m = n === 0 ? "0" : n.toFixed(0); // divering...

    {
        // this diversion is needed to take into consideration big numbers, e.g.:
        // 1.2344501e+37 -> 12344501000000000000000000000000000000
        var idx = void 0;
        var exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
        if (exp) {
            m = m.slice(0, idx).replace('.', '');
            m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0');
        }
    }

    var int = void 0;
    // 4. If f ≠ 0, then
    if (f !== 0) {
        // a. Let k be the number of characters in m.
        var k = m.length;
        // a. If k ≤ f, then
        if (k <= f) {
            // i. Let z be the String consisting of f+1–k occurrences of the character "0".
            var z = arrJoin.call(Array(f + 1 - k + 1), '0');
            // ii. Let m be the concatenation of Strings z and m.
            m = z + m;
            // iii. Let k be f+1.
            k = f + 1;
        }
        // a. Let a be the first k–f characters of m, and let b be the remaining f characters of m.
        var a = m.substring(0, k - f),
            b = m.substring(k - f, m.length);
        // a. Let m be the concatenation of the three Strings a, ".", and b.
        m = a + "." + b;
        // a. Let int be the number of characters in a.
        int = a.length;
    }
    // 5. Else, let int be the number of characters in m.
    else int = m.length;
    // 6. Let cut be maxFraction – minFraction.
    var cut = maxFraction - minFraction;
    // 7. Repeat while cut > 0 and the last character of m is "0":
    while (cut > 0 && m.slice(-1) === "0") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
        // a. Decrease cut by 1.
        cut--;
    }
    // 8. If the last character of m is ".", then
    if (m.slice(-1) === ".") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
    }
    // 9. If int < minInteger, then
    if (int < minInteger) {
        // a. Let z be the String consisting of minInteger–int occurrences of the character "0".
        var _z = arrJoin.call(Array(minInteger - int + 1), '0');
        // a. Let m be the concatenation of Strings z and m.
        m = _z + m;
    }
    // 10. Return m.
    return m;
}

// Sect 11.3.2 Table 2, Numbering systems
// ======================================
var numSys = {
    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

/**
 * This function provides access to the locale and formatting options computed
 * during initialization of the object.
 *
 * The function returns a new object whose properties and attributes are set as
 * if constructed by an object literal assigning to each of the following
 * properties the value of the corresponding internal property of this
 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
 * useGrouping. Properties whose corresponding internal properties are not present
 * are not assigned.
 */
/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
    configurable: true,
    writable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 11.3_b
        if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

/* jslint esnext: true */

// Match these datetime components in a CLDR pattern, except those in single quotes
var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
// trim patterns after transformations
var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Skip over patterns with these datetime components because we don't have data
// to back them up:
// timezone, weekday, amoung others
var unwantedDTCs = /[rqQASjJgwWIQq]/; // xXVO were removed from this list in favor of computing matches with timeZoneName values but printing as empty string

var dtKeys = ["era", "year", "month", "day", "weekday", "quarter"];
var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];

function isDateFormatOnly(obj) {
    for (var i = 0; i < tmKeys.length; i += 1) {
        if (obj.hasOwnProperty(tmKeys[i])) {
            return false;
        }
    }
    return true;
}

function isTimeFormatOnly(obj) {
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (obj.hasOwnProperty(dtKeys[i])) {
            return false;
        }
    }
    return true;
}

function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
    var o = { _: {} };
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (dateFormatObj[dtKeys[i]]) {
            o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
        }
        if (dateFormatObj._[dtKeys[i]]) {
            o._[dtKeys[i]] = dateFormatObj._[dtKeys[i]];
        }
    }
    for (var j = 0; j < tmKeys.length; j += 1) {
        if (timeFormatObj[tmKeys[j]]) {
            o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
        }
        if (timeFormatObj._[tmKeys[j]]) {
            o._[tmKeys[j]] = timeFormatObj._[tmKeys[j]];
        }
    }
    return o;
}

function computeFinalPatterns(formatObj) {
    // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
    //  'In patterns, two single quotes represents a literal single quote, either
    //   inside or outside single quotes. Text within single quotes is not
    //   interpreted in any way (except for two adjacent single quotes).'
    formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
        return literal ? literal : "'";
    });

    // pattern 12 is always the default. we can produce the 24 by removing {ampm}
    formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
    return formatObj;
}

function expDTComponentsMeta($0, formatObj) {
    switch ($0.charAt(0)) {
        // --- Era
        case 'G':
            formatObj.era = ['short', 'short', 'short', 'long', 'narrow'][$0.length - 1];
            return '{era}';

        // --- Year
        case 'y':
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
            formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
            return '{year}';

        // --- Quarter (not supported in this polyfill)
        case 'Q':
        case 'q':
            formatObj.quarter = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{quarter}';

        // --- Month
        case 'M':
        case 'L':
            formatObj.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{month}';

        // --- Week (not supported in this polyfill)
        case 'w':
            // week of the year
            formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
            return '{weekday}';
        case 'W':
            // week of the month
            formatObj.week = 'numeric';
            return '{weekday}';

        // --- Day
        case 'd':
            // day of the month
            formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
            return '{day}';
        case 'D': // day of the year
        case 'F': // day of the week
        case 'g':
            // 1..n: Modified Julian day
            formatObj.day = 'numeric';
            return '{day}';

        // --- Week Day
        case 'E':
            // day of the week
            formatObj.weekday = ['short', 'short', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'e':
            // local day of the week
            formatObj.weekday = ['numeric', '2-digit', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'c':
            // stand alone local day of the week
            formatObj.weekday = ['numeric', undefined, 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';

        // --- Period
        case 'a': // AM, PM
        case 'b': // am, pm, noon, midnight
        case 'B':
            // flexible day periods
            formatObj.hour12 = true;
            return '{ampm}';

        // --- Hour
        case 'h':
        case 'H':
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';
        case 'k':
        case 'K':
            formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';

        // --- Minute
        case 'm':
            formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
            return '{minute}';

        // --- Second
        case 's':
            formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
            return '{second}';
        case 'S':
        case 'A':
            formatObj.second = 'numeric';
            return '{second}';

        // --- Timezone
        case 'z': // 1..3, 4: specific non-location format
        case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
        case 'O': // 1, 4: miliseconds in day short, long
        case 'v': // 1, 4: generic non-location format
        case 'V': // 1, 2, 3, 4: time zone ID or city
        case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
        case 'x':
            // 1, 2, 3, 4: The ISO8601 varios formats
            // this polyfill only supports much, for now, we are just doing something dummy
            formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
            return '{timeZoneName}';
    }
}

/**
 * Converts the CLDR availableFormats into the objects and patterns required by
 * the ECMAScript Internationalization API specification.
 */
function createDateTimeFormat(skeleton, pattern) {
    // we ignore certain patterns that are unsupported to avoid this expensive op.
    if (unwantedDTCs.test(pattern)) return undefined;

    var formatObj = {
        originalPattern: pattern,
        _: {}
    };

    // Replace the pattern string with the one required by the specification, whilst
    // at the same time evaluating it for the subsets and formats
    formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj._);
    });

    // Match the skeleton string with the one required by the specification
    // this implementation is based on the Date Field Symbol Table:
    // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // Note: we are adding extra data to the formatObject even though this polyfill
    //       might not support it.
    skeleton.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj);
    });

    return computeFinalPatterns(formatObj);
}

/**
 * Processes DateTime formats from CLDR to an easier-to-parse format.
 * the result of this operation should be cached the first time a particular
 * calendar is analyzed.
 *
 * The specification requires we support at least the following subsets of
 * date/time components:
 *
 *   - 'weekday', 'year', 'month', 'day', 'hour', 'minute', 'second'
 *   - 'weekday', 'year', 'month', 'day'
 *   - 'year', 'month', 'day'
 *   - 'year', 'month'
 *   - 'month', 'day'
 *   - 'hour', 'minute', 'second'
 *   - 'hour', 'minute'
 *
 * We need to cherry pick at least these subsets from the CLDR data and convert
 * them into the pattern objects used in the ECMA-402 API.
 */
function createDateTimeFormats(formats) {
    var availableFormats = formats.availableFormats;
    var timeFormats = formats.timeFormats;
    var dateFormats = formats.dateFormats;
    var result = [];
    var skeleton = void 0,
        pattern = void 0,
        computed = void 0,
        i = void 0,
        j = void 0;
    var timeRelatedFormats = [];
    var dateRelatedFormats = [];

    // Map available (custom) formats into a pattern for createDateTimeFormats
    for (skeleton in availableFormats) {
        if (availableFormats.hasOwnProperty(skeleton)) {
            pattern = availableFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                // in some cases, the format is only displaying date specific props
                // or time specific props, in which case we need to also produce the
                // combined formats.
                if (isDateFormatOnly(computed)) {
                    dateRelatedFormats.push(computed);
                } else if (isTimeFormatOnly(computed)) {
                    timeRelatedFormats.push(computed);
                }
            }
        }
    }

    // Map time formats into a pattern for createDateTimeFormats
    for (skeleton in timeFormats) {
        if (timeFormats.hasOwnProperty(skeleton)) {
            pattern = timeFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                timeRelatedFormats.push(computed);
            }
        }
    }

    // Map date formats into a pattern for createDateTimeFormats
    for (skeleton in dateFormats) {
        if (dateFormats.hasOwnProperty(skeleton)) {
            pattern = dateFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                dateRelatedFormats.push(computed);
            }
        }
    }

    // combine custom time and custom date formats when they are orthogonals to complete the
    // formats supported by CLDR.
    // This Algo is based on section "Missing Skeleton Fields" from:
    // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
    for (i = 0; i < timeRelatedFormats.length; i += 1) {
        for (j = 0; j < dateRelatedFormats.length; j += 1) {
            if (dateRelatedFormats[j].month === 'long') {
                pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
            } else if (dateRelatedFormats[j].month === 'short') {
                pattern = formats.medium;
            } else {
                pattern = formats.short;
            }
            computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
            computed.originalPattern = pattern;
            computed.extendedPattern = pattern.replace('{0}', timeRelatedFormats[i].extendedPattern).replace('{1}', dateRelatedFormats[j].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, '');
            result.push(computeFinalPatterns(computed));
        }
    }

    return result;
}

// this represents the exceptions of the rule that are not covered by CLDR availableFormats
// for single property configurations, they play no role when using multiple properties, and
// those that are not in this table, are not exceptions or are not covered by the data we
// provide.
var validSyntheticProps = {
    second: {
        numeric: 's',
        '2-digit': 'ss'
    },
    minute: {
        numeric: 'm',
        '2-digit': 'mm'
    },
    year: {
        numeric: 'y',
        '2-digit': 'yy'
    },
    day: {
        numeric: 'd',
        '2-digit': 'dd'
    },
    month: {
        numeric: 'L',
        '2-digit': 'LL',
        narrow: 'LLLLL',
        short: 'LLL',
        long: 'LLLL'
    },
    weekday: {
        narrow: 'ccccc',
        short: 'ccc',
        long: 'cccc'
    }
};

function generateSyntheticFormat(propName, propValue) {
    if (validSyntheticProps[propName] && validSyntheticProps[propName][propValue]) {
        var _ref2;

        return _ref2 = {
            originalPattern: validSyntheticProps[propName][propValue],
            _: defineProperty$1({}, propName, propValue),
            extendedPattern: "{" + propName + "}"
        }, defineProperty$1(_ref2, propName, propValue), defineProperty$1(_ref2, "pattern12", "{" + propName + "}"), defineProperty$1(_ref2, "pattern", "{" + propName + "}"), _ref2;
    }
}

// An object map of date component keys, saves using a regex later
var dateWidths = objCreate(null, { narrow: {}, short: {}, long: {} });

/**
 * Returns a string for a date component, resolved using multiple inheritance as specified
 * as specified in the Unicode Technical Standard 35.
 */
function resolveDateString(data, ca, component, width, key) {
    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
    // 'In clearly specified instances, resources may inherit from within the same locale.
    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
    var obj = data[ca] && data[ca][component] ? data[ca][component] : data.gregory[component],


    // "sideways" inheritance resolves strings when a key doesn't exist
    alts = {
        narrow: ['short', 'long'],
        short: ['long', 'narrow'],
        long: ['short', 'narrow']
    },


    //
    resolved = hop.call(obj, width) ? obj[width] : hop.call(obj, alts[width][0]) ? obj[alts[width][0]] : obj[alts[width][1]];

    // `key` wouldn't be specified for components 'dayPeriods'
    return key !== null ? resolved[key] : resolved;
}

// Define the DateTimeFormat constructor internally so it cannot be tainted
function DateTimeFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.DateTimeFormat(locales, options);
    }
    return InitializeDateTimeFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'DateTimeFormat', {
    configurable: true,
    writable: true,
    value: DateTimeFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(DateTimeFormatConstructor, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
 * DateTimeFormat object.
 */
function /* 12.1.1.1 */InitializeDateTimeFormat(dateTimeFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(dateTimeFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
    //    value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(dateTimeFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined below) with arguments options, "any", and "date".
    options = ToDateTimeOptions(options, 'any', 'date');

    // 5. Let opt be a new Record.
    var opt = new Record();

    // 6. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
    //    containing the two String values "lookup" and "best fit", and "best fit".
    var matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 7. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 8. Let DateTimeFormat be the standard built-in object that is the initial
    //    value of Intl.DateTimeFormat.
    var DateTimeFormat = internals.DateTimeFormat; // This is what we *really* need

    // 9. Let localeData be the value of the [[localeData]] internal property of
    //    DateTimeFormat.
    var localeData = DateTimeFormat['[[localeData]]'];

    // 10. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //      internal property of DateTimeFormat, and localeData.
    var r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales, opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
    //     r.[[ca]].
    internal['[[calendar]]'] = r['[[ca]]'];

    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
    //     r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let tz be the result of calling the [[Get]] internal method of options with
    //     argument "timeZone".
    var tz = options.timeZone;

    // 16. If tz is not undefined, then
    if (tz !== undefined) {
        // a. Let tz be ToString(tz).
        // b. Convert tz to upper case as described in 6.1.
        //    NOTE: If an implementation accepts additional time zone values, as permitted
        //          under certain conditions by the Conformance clause, different casing
        //          rules apply.
        tz = toLatinUpperCase(tz);

        // c. If tz is not "UTC", then throw a RangeError exception.
        // ###TODO: accept more time zones###
        if (tz !== 'UTC') throw new RangeError('timeZone is not supported.');
    }

    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
    internal['[[timeZone]]'] = tz;

    // 18. Let opt be a new Record.
    opt = new Record();

    // 19. For each row of Table 3, except the header row, do:
    for (var prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, prop)) continue;

        // 20. Let prop be the name given in the Property column of the row.
        // 21. Let value be the result of calling the GetOption abstract operation,
        //     passing as argument options, the name given in the Property column of the
        //     row, "string", a List containing the strings given in the Values column of
        //     the row, and undefined.
        var value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

        // 22. Set opt.[[<prop>]] to value.
        opt['[[' + prop + ']]'] = value;
    }

    // Assigned a value below
    var bestFormat = void 0;

    // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 24. Let formats be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "formats".
    //     Note: we process the CLDR formats into the spec'd structure
    var formats = ToDateTimeFormats(dataLocaleData.formats);

    // 25. Let matcher be the result of calling the GetOption abstract operation with
    //     arguments options, "formatMatcher", "string", a List containing the two String
    //     values "basic" and "best fit", and "best fit".
    matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

    // Optimization: caching the processed formats as a one time operation by
    // replacing the initial structure from localeData
    dataLocaleData.formats = formats;

    // 26. If matcher is "basic", then
    if (matcher === 'basic') {
        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
        //     operation (defined below) with opt and formats.
        bestFormat = BasicFormatMatcher(opt, formats);

        // 28. Else
    } else {
        {
            // diverging
            var _hr = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);
            opt.hour12 = _hr === undefined ? dataLocaleData.hour12 : _hr;
        }
        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
        //     abstract operation (defined below) with opt and formats.
        bestFormat = BestFitFormatMatcher(opt, formats);
    }

    // 30. For each row in Table 3, except the header row, do
    for (var _prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, _prop)) continue;

        // a. Let prop be the name given in the Property column of the row.
        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
        //    bestFormat with argument prop.
        // c. If pDesc is not undefined, then
        if (hop.call(bestFormat, _prop)) {
            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
            //    with argument prop.
            var p = bestFormat[_prop];
            {
                // diverging
                p = bestFormat._ && hop.call(bestFormat._, _prop) ? bestFormat._[_prop] : p;
            }

            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
            internal['[[' + _prop + ']]'] = p;
        }
    }

    var pattern = void 0; // Assigned a value below

    // 31. Let hr12 be the result of calling the GetOption abstract operation with
    //     arguments options, "hour12", "boolean", undefined, and undefined.
    var hr12 = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);

    // 32. If dateTimeFormat has an internal property [[hour]], then
    if (internal['[[hour]]']) {
        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
        //    internal method of dataLocaleData with argument "hour12".
        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
        internal['[[hour12]]'] = hr12;

        // c. If hr12 is true, then
        if (hr12 === true) {
            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
            //    dataLocaleData with argument "hourNo0".
            var hourNo0 = dataLocaleData.hourNo0;

            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
            internal['[[hourNo0]]'] = hourNo0;

            // iii. Let pattern be the result of calling the [[Get]] internal method of
            //      bestFormat with argument "pattern12".
            pattern = bestFormat.pattern12;
        }

        // d. Else
        else
            // i. Let pattern be the result of calling the [[Get]] internal method of
            //    bestFormat with argument "pattern".
            pattern = bestFormat.pattern;
    }

    // 33. Else
    else
        // a. Let pattern be the result of calling the [[Get]] internal method of
        //    bestFormat with argument "pattern".
        pattern = bestFormat.pattern;

    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
    internal['[[pattern]]'] = pattern;

    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
    //     true.
    internal['[[initializedDateTimeFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return dateTimeFormat;
}

/**
 * Several DateTimeFormat algorithms use values from the following table, which provides
 * property names and allowable values for the components of date and time formats:
 */
var dateTimeComponents = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"]
};

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeFormats(formats) {
    if (Object.prototype.toString.call(formats) === '[object Array]') {
        return formats;
    }
    return createDateTimeFormats(formats);
}

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeOptions(options, required, defaults) {
    // 1. If options is undefined, then let options be null, else let options be
    //    ToObject(options).
    if (options === undefined) options = null;else {
        // (#12) options needs to be a Record, but it also needs to inherit properties
        var opt2 = toObject(options);
        options = new Record();

        for (var k in opt2) {
            options[k] = opt2[k];
        }
    }

    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
    var create = objCreate;

    // 3. Let options be the result of calling the [[Call]] internal method of create with
    //    undefined as the this value and an argument list containing the single item
    //    options.
    options = create(options);

    // 4. Let needDefaults be true.
    var needDefaults = true;

    // 5. If required is "date" or "any", then
    if (required === 'date' || required === 'any') {
        // a. For each of the property names "weekday", "year", "month", "day":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined) needDefaults = false;
    }

    // 6. If required is "time" or "any", then
    if (required === 'time' || required === 'any') {
        // a. For each of the property names "hour", "minute", "second":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined) needDefaults = false;
    }

    // 7. If needDefaults is true and defaults is either "date" or "all", then
    if (needDefaults && (defaults === 'date' || defaults === 'all'))
        // a. For each of the property names "year", "month", "day":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.year = options.month = options.day = 'numeric';

    // 8. If needDefaults is true and defaults is either "time" or "all", then
    if (needDefaults && (defaults === 'time' || defaults === 'all'))
        // a. For each of the property names "hour", "minute", "second":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.hour = options.minute = options.second = 'numeric';

    // 9. Return options.
    return options;
}

/**
 * When the BasicFormatMatcher abstract operation is called with two arguments options and
 * formats, the following steps are taken:
 */
function BasicFormatMatcher(options, formats) {
    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, property) ? format[property] : undefined;

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        // 5. If delta = 2, decrease score by longMorePenalty.
                        if (delta === 2) score -= longMorePenalty;

                        // 6. Else if delta = 1, decrease score by shortMorePenalty.
                        else if (delta === 1) score -= shortMorePenalty;

                            // 7. Else if delta = -1, decrease score by shortLessPenalty.
                            else if (delta === -1) score -= shortLessPenalty;

                                // 8. Else if delta = -2, decrease score by longLessPenalty.
                                else if (delta === -2) score -= longLessPenalty;
                    }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;

            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/**
 * When the BestFitFormatMatcher abstract operation is called with two arguments options
 * and formats, it performs implementation dependent steps, which should return a set of
 * component representations that a typical user of the selected locale would perceive as
 * at least as good as the one returned by BasicFormatMatcher.
 *
 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
 * with the addition of bonus points awarded where the requested format is of
 * the same data type as the potentially matching format.
 *
 * This algo relies on the concept of closest distance matching described here:
 * http://unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
 * Typically a “best match” is found using a closest distance match, such as:
 *
 * Symbols requesting a best choice for the locale are replaced.
 *      j → one of {H, k, h, K}; C → one of {a, b, B}
 * -> Covered by cldr.js matching process
 *
 * For fields with symbols representing the same type (year, month, day, etc):
 *     Most symbols have a small distance from each other.
 *         M ≅ L; E ≅ c; a ≅ b ≅ B; H ≅ k ≅ h ≅ K; ...
 *     -> Covered by cldr.js matching process
 *
 *     Width differences among fields, other than those marking text vs numeric, are given small distance from each other.
 *         MMM ≅ MMMM
 *         MM ≅ M
 *     Numeric and text fields are given a larger distance from each other.
 *         MMM ≈ MM
 *     Symbols representing substantial differences (week of year vs week of month) are given much larger a distances from each other.
 *         d ≋ D; ...
 *     Missing or extra fields cause a match to fail. (But see Missing Skeleton Fields).
 *
 *
 * For example,
 *
 *     { month: 'numeric', day: 'numeric' }
 *
 * should match
 *
 *     { month: '2-digit', day: '2-digit' }
 *
 * rather than
 *
 *     { month: 'short', day: 'numeric' }
 *
 * This makes sense because a user requesting a formatted date with numeric parts would
 * not expect to see the returned format containing narrow, short or long part names
 */
function BestFitFormatMatcher(options, formats) {
    /** Diverging: this block implements the hack for single property configuration, eg.:
     *
     *      `new Intl.DateTimeFormat('en', {day: 'numeric'})`
     *
     * should produce a single digit with the day of the month. This is needed because
     * CLDR `availableFormats` data structure doesn't cover these cases.
     */
    {
        var optionsPropNames = [];
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            if (options['[[' + property + ']]'] !== undefined) {
                optionsPropNames.push(property);
            }
        }
        if (optionsPropNames.length === 1) {
            var _bestFormat = generateSyntheticFormat(optionsPropNames[0], options['[[' + optionsPropNames[0] + ']]']);
            if (_bestFormat) {
                return _bestFormat;
            }
        }
    }

    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    var patternPenalty = 2;

    var hour12Penalty = 1;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var _property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, _property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + _property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, _property) ? format[_property] : undefined;

            // Diverging: using the default properties produced by the pattern/skeleton
            // to match it with user options, and apply a penalty
            var patternProp = hop.call(format._, _property) ? format._[_property] : undefined;
            if (optionsProp !== patternProp) {
                score -= patternPenalty;
            }

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        {
                            // diverging from spec
                            // When the bestFit argument is true, subtract additional penalty where data types are not the same
                            if (formatPropIndex <= 1 && optionsPropIndex >= 2 || formatPropIndex >= 2 && optionsPropIndex <= 1) {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 0) score -= longMorePenalty;else if (delta < 0) score -= longLessPenalty;
                            } else {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 1) score -= shortMorePenalty;else if (delta < -1) score -= shortLessPenalty;
                            }
                        }
                    }
        }

        {
            // diverging to also take into consideration differences between 12 or 24 hours
            // which is special for the best fit only.
            if (format._.hour12 !== options.hour12) {
                score -= hour12Penalty;
            }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;
            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/* 12.2.3 */internals.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
 * following steps are taken:
 */
/* 12.2.2 */
defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * DateTimeFormat object.
 */
/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatDateTime
});

function GetFormatDateTime() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 12.3_b
    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 0, that takes the argument date and
        //    performs the following steps:
        var F = function F() {
            var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            //   i. If date is not provided or is undefined, then let x be the
            //      result as if by the expression Date.now() where Date.now is
            //      the standard built-in function defined in ES5, 15.9.4.4.
            //  ii. Else let x be ToNumber(date).
            // iii. Return the result of calling the FormatDateTime abstract
            //      operation (defined below) with arguments this and x.
            var x = date === undefined ? Date.now() : toNumber(date);
            return FormatDateTime(this, x);
        };
        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);
        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts$1() {
    var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.');

    var x = date === undefined ? Date.now() : toNumber(date);
    return FormatToPartsDateTime(this, x);
}

Object.defineProperty(Intl.DateTimeFormat.prototype, 'formatToParts', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: formatToParts$1
});

function CreateDateTimeParts(dateTimeFormat, x) {
    // 1. If x is not a finite Number, then throw a RangeError exception.
    if (!isFinite(x)) throw new RangeError('Invalid valid date passed to format');

    var internal = dateTimeFormat.__getInternalProperties(secret);

    // Creating restore point for properties on the RegExp object... please wait
    /* let regexpRestore = */createRegExpRestore(); // ###TODO: review this

    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
    var locale = internal['[[locale]]'];

    // 3. Let nf be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    var nf = new Intl.NumberFormat([locale], { useGrouping: false });

    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
    // 11.1.3.
    var nf2 = new Intl.NumberFormat([locale], { minimumIntegerDigits: 2, useGrouping: false });

    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
    // and the value of the [[timeZone]] internal property of dateTimeFormat.
    var tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']);

    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
    var pattern = internal['[[pattern]]'];

    // 7.
    var result = new List();

    // 8.
    var index = 0;

    // 9.
    var beginIndex = pattern.indexOf('{');

    // 10.
    var endIndex = 0;

    // Need the locale minus any extensions
    var dataLocale = internal['[[dataLocale]]'];

    // Need the calendar data from CLDR
    var localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars;
    var ca = internal['[[calendar]]'];

    // 11.
    while (beginIndex !== -1) {
        var fv = void 0;
        // a.
        endIndex = pattern.indexOf('}', beginIndex);
        // b.
        if (endIndex === -1) {
            throw new Error('Unclosed pattern');
        }
        // c.
        if (beginIndex > index) {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(index, beginIndex)
            });
        }
        // d.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // e.
        if (dateTimeComponents.hasOwnProperty(p)) {
            //   i. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
            var f = internal['[[' + p + ']]'];
            //  ii. Let v be the value of tm.[[<p>]].
            var v = tm['[[' + p + ']]'];
            // iii. If p is "year" and v ≤ 0, then let v be 1 - v.
            if (p === 'year' && v <= 0) {
                v = 1 - v;
            }
            //  iv. If p is "month", then increase v by 1.
            else if (p === 'month') {
                    v++;
                }
                //   v. If p is "hour" and the value of the [[hour12]] internal property of
                //      dateTimeFormat is true, then
                else if (p === 'hour' && internal['[[hour12]]'] === true) {
                        // 1. Let v be v modulo 12.
                        v = v % 12;
                        // 2. If v is 0 and the value of the [[hourNo0]] internal property of
                        //    dateTimeFormat is true, then let v be 12.
                        if (v === 0 && internal['[[hourNo0]]'] === true) {
                            v = 12;
                        }
                    }

            //  vi. If f is "numeric", then
            if (f === 'numeric') {
                // 1. Let fv be the result of calling the FormatNumber abstract operation
                //    (defined in 11.3.2) with arguments nf and v.
                fv = FormatNumber(nf, v);
            }
            // vii. Else if f is "2-digit", then
            else if (f === '2-digit') {
                    // 1. Let fv be the result of calling the FormatNumber abstract operation
                    //    with arguments nf2 and v.
                    fv = FormatNumber(nf2, v);
                    // 2. If the length of fv is greater than 2, let fv be the substring of fv
                    //    containing the last two characters.
                    if (fv.length > 2) {
                        fv = fv.slice(-2);
                    }
                }
                // viii. Else if f is "narrow", "short", or "long", then let fv be a String
                //     value representing f in the desired form; the String value depends upon
                //     the implementation and the effective locale and calendar of
                //     dateTimeFormat. If p is "month", then the String value may also depend
                //     on whether dateTimeFormat has a [[day]] internal property. If p is
                //     "timeZoneName", then the String value may also depend on the value of
                //     the [[inDST]] field of tm.
                else if (f in dateWidths) {
                        switch (p) {
                            case 'month':
                                fv = resolveDateString(localeData, ca, 'months', f, tm['[[' + p + ']]']);
                                break;

                            case 'weekday':
                                try {
                                    fv = resolveDateString(localeData, ca, 'days', f, tm['[[' + p + ']]']);
                                    // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
                                } catch (e) {
                                    throw new Error('Could not find weekday data for locale ' + locale);
                                }
                                break;

                            case 'timeZoneName':
                                fv = ''; // ###TODO
                                break;

                            case 'era':
                                try {
                                    fv = resolveDateString(localeData, ca, 'eras', f, tm['[[' + p + ']]']);
                                } catch (e) {
                                    throw new Error('Could not find era data for locale ' + locale);
                                }
                                break;

                            default:
                                fv = tm['[[' + p + ']]'];
                        }
                    }
            // ix
            arrPush.call(result, {
                type: p,
                value: fv
            });
            // f.
        } else if (p === 'ampm') {
            // i.
            var _v = tm['[[hour]]'];
            // ii./iii.
            fv = resolveDateString(localeData, ca, 'dayPeriods', _v > 11 ? 'pm' : 'am', null);
            // iv.
            arrPush.call(result, {
                type: 'dayPeriod',
                value: fv
            });
            // g.
        } else {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(beginIndex, endIndex + 1)
            });
        }
        // h.
        index = endIndex + 1;
        // i.
        beginIndex = pattern.indexOf('{', index);
    }
    // 12.
    if (endIndex < pattern.length - 1) {
        arrPush.call(result, {
            type: 'literal',
            value: pattern.substr(endIndex + 1)
        });
    }
    // 13.
    return result;
}

/**
 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
 * value), it returns a String value representing x (interpreted as a time value as
 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
 * options of dateTimeFormat.
 */
function FormatDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = '';

    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result += part.value;
    }
    return result;
}

function FormatToPartsDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = [];
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result.push({
            type: part.type,
            value: part.value
        });
    }
    return result;
}

/**
 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
 * timeZone, the following steps are taken:
 */
function ToLocalTime(date, calendar, timeZone) {
    // 1. Apply calendrical calculations on date for the given calendar and time zone to
    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
    //    The calculations should use best available information about the specified
    //    calendar and time zone. If the calendar is "gregory", then the calculations must
    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
    //    bound by the restrictions on the use of best available information on time zones
    //    for local time zone adjustment and daylight saving time adjustment imposed by
    //    ES5, 15.9.1.7 and 15.9.1.8.
    // ###TODO###
    var d = new Date(date),
        m = 'get' + (timeZone || '');

    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
    //    calculated value.
    return new Record({
        '[[weekday]]': d[m + 'Day'](),
        '[[era]]': +(d[m + 'FullYear']() >= 0),
        '[[year]]': d[m + 'FullYear'](),
        '[[month]]': d[m + 'Month'](),
        '[[day]]': d[m + 'Date'](),
        '[[hour]]': d[m + 'Hours'](),
        '[[minute]]': d[m + 'Minutes'](),
        '[[second]]': d[m + 'Seconds'](),
        '[[inDST]]': false // ###TODO###
    });
}

/**
 * The function returns a new object whose properties and attributes are set as if
 * constructed by an object literal assigning to each of the following properties the
 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
 * properties are not present are not assigned.
 */
/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
    writable: true,
    configurable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 12.3_b
        if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

var ls = Intl.__localeSensitiveProtos = {
    Number: {},
    Date: {}
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.2.1 */ls.Number.toLocaleString = function () {
    // Satisfy test 13.2.1_1
    if (Object.prototype.toString.call(this) !== '[object Number]') throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
    // 2. If locales is not provided, then let locales be undefined.
    // 3. If options is not provided, then let options be undefined.
    // 4. Let numberFormat be the result of creating a new object as if by the
    //    expression new Intl.NumberFormat(locales, options) where
    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    // 5. Return the result of calling the FormatNumber abstract operation
    //    (defined in 11.3.2) with arguments numberFormat and x.
    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.3.1 */ls.Date.toLocaleString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
    options = ToDateTimeOptions(options, 'any', 'all');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleDateString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.2 */ls.Date.toLocaleDateString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0],


    // 4. If options is not provided, then let options be undefined.
    options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
    options = ToDateTimeOptions(options, 'date', 'date');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleTimeString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
    options = ToDateTimeOptions(options, 'time', 'time');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
    writable: true,
    configurable: true,
    value: function value() {
        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });
        // Need this here for IE 8, to avoid the _DontEnum_ bug
        defineProperty(Date.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Date.toLocaleString });

        for (var k in ls.Date) {
            if (hop.call(ls.Date, k)) defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
        }
    }
});

/**
 * Can't really ship a single script with data for hundreds of locales, so we provide
 * this __addLocaleData method as a means for the developer to add the data on an
 * as-needed basis
 */
defineProperty(Intl, '__addLocaleData', {
    value: function value(data) {
        if (!IsStructurallyValidLanguageTag(data.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");

        addLocaleData(data, data.locale);
    }
});

function addLocaleData(data, tag) {
    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
    if (!data.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");

    var locale = void 0,
        locales = [tag],
        parts = tag.split('-');

    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
    if (parts.length > 2 && parts[1].length === 4) arrPush.call(locales, parts[0] + '-' + parts[2]);

    while (locale = arrShift.call(locales)) {
        // Add to NumberFormat internal properties as per 11.2.3
        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
        internals.NumberFormat['[[localeData]]'][locale] = data.number;

        // ...and DateTimeFormat internal properties as per 12.2.3
        if (data.date) {
            data.date.nu = data.number.nu;
            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
        }
    }

    // If this is the first set of locale data added, make it the default
    if (defaultLocale === undefined) setDefaultLocale(tag);
}

defineProperty(Intl, '__disableRegExpRestore', {
    value: function value() {
        internals.disableRegExpRestore = true;
    }
});

module.exports = Intl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5iNDQ2NWM4Mzk1ZTEzMWZkOGQyNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnRsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnRsL2xpYi9jb3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9zZSBgSW50bFBvbHlmaWxsYCBhcyBnbG9iYWwgdG8gYWRkIGxvY2FsZSBkYXRhIGludG8gcnVudGltZSBsYXRlciBvbi5cbmdsb2JhbC5JbnRsUG9seWZpbGwgPSByZXF1aXJlKCcuL2xpYi9jb3JlLmpzJyk7XG5cbi8vIFJlcXVpcmUgYWxsIGxvY2FsZSBkYXRhIGZvciBgSW50bGAuIFRoaXMgbW9kdWxlIHdpbGwgYmVcbi8vIGlnbm9yZWQgd2hlbiBidW5kbGluZyBmb3IgdGhlIGJyb3dzZXIgd2l0aCBCcm93c2VyaWZ5L1dlYnBhY2suXG5yZXF1aXJlKCcuL2xvY2FsZS1kYXRhL2NvbXBsZXRlLmpzJyk7XG5cbi8vIGhhY2sgdG8gZXhwb3J0IHRoZSBwb2x5ZmlsbCBhcyBnbG9iYWwgSW50bCBpZiBuZWVkZWRcbmlmICghZ2xvYmFsLkludGwpIHtcbiAgICBnbG9iYWwuSW50bCA9IGdsb2JhbC5JbnRsUG9seWZpbGw7XG4gICAgZ2xvYmFsLkludGxQb2x5ZmlsbC5fX2FwcGx5TG9jYWxlU2Vuc2l0aXZlUHJvdG90eXBlcygpO1xufVxuXG4vLyBwcm92aWRpbmcgYW4gaWRpb21hdGljIGFwaSBmb3IgdGhlIG5vZGVqcyB2ZXJzaW9uIG9mIHRoaXMgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5JbnRsUG9seWZpbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSB8fCAweGVhYzc7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVSYXdSZWFjdEVsZW1lbnQodHlwZSwgcHJvcHMsIGtleSwgY2hpbGRyZW4pIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcblxuICAgIGlmICghcHJvcHMgJiYgY2hpbGRyZW5MZW5ndGggIT09IDApIHtcbiAgICAgIHByb3BzID0ge307XG4gICAgfVxuXG4gICAgaWYgKHByb3BzICYmIGRlZmF1bHRQcm9wcykge1xuICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwcm9wcykge1xuICAgICAgcHJvcHMgPSBkZWZhdWx0UHJvcHMgfHwge307XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDNdO1xuICAgICAgfVxuXG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBrZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAnJyArIGtleSxcbiAgICAgIHJlZjogbnVsbCxcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIF9vd25lcjogbnVsbFxuICAgIH07XG4gIH07XG59KCk7XG5cbnZhciBhc3luY1RvR2VuZXJhdG9yID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGRlZmluZUVudW1lcmFibGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgZGVzY3MpIHtcbiAgZm9yICh2YXIga2V5IGluIGRlc2NzKSB7XG4gICAgdmFyIGRlc2MgPSBkZXNjc1trZXldO1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZGVzYyk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGRlZmF1bHRzID0gZnVuY3Rpb24gKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTtcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBfaW5zdGFuY2VvZiA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICBpZiAocmlnaHQgIT0gbnVsbCAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHJpZ2h0W1N5bWJvbC5oYXNJbnN0YW5jZV0pIHtcbiAgICByZXR1cm4gcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVmdCBpbnN0YW5jZW9mIHJpZ2h0O1xuICB9XG59O1xuXG52YXIgaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufTtcblxudmFyIGludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXdPYmogPSB7fTtcblxuICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59O1xuXG52YXIgbmV3QXJyb3dDaGVjayA9IGZ1bmN0aW9uIChpbm5lclRoaXMsIGJvdW5kVGhpcykge1xuICBpZiAoaW5uZXJUaGlzICE9PSBib3VuZFRoaXMpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGluc3RhbnRpYXRlIGFuIGFycm93IGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5ID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIHNlbGZHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IGdsb2JhbDtcblxudmFyIHNldCA9IGZ1bmN0aW9uIHNldChvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBzZXQocGFyZW50LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MgJiYgZGVzYy53cml0YWJsZSkge1xuICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2V0dGVyID0gZGVzYy5zZXQ7XG5cbiAgICBpZiAoc2V0dGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldHRlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHNsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBzbGljZWRUb0FycmF5TG9vc2UgPSBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgIHZhciBfYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgICBfYXJyLnB1c2goX3N0ZXAudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cbn07XG5cbnZhciB0YWdnZWRUZW1wbGF0ZUxpdGVyYWwgPSBmdW5jdGlvbiAoc3RyaW5ncywgcmF3KSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn07XG5cbnZhciB0YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZSA9IGZ1bmN0aW9uIChzdHJpbmdzLCByYXcpIHtcbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufTtcblxudmFyIHRlbXBvcmFsUmVmID0gZnVuY3Rpb24gKHZhbCwgbmFtZSwgdW5kZWYpIHtcbiAgaWYgKHZhbCA9PT0gdW5kZWYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobmFtZSArIFwiIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG5cbnZhciB0ZW1wb3JhbFVuZGVmaW5lZCA9IHt9O1xuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6IEFycmF5LmZyb20oYXJyKTtcbn07XG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG5cblxudmFyIGJhYmVsSGVscGVycyQxID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGpzeDoganN4LFxuICBhc3luY1RvR2VuZXJhdG9yOiBhc3luY1RvR2VuZXJhdG9yLFxuICBjbGFzc0NhbGxDaGVjazogY2xhc3NDYWxsQ2hlY2ssXG4gIGNyZWF0ZUNsYXNzOiBjcmVhdGVDbGFzcyxcbiAgZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXM6IGRlZmluZUVudW1lcmFibGVQcm9wZXJ0aWVzLFxuICBkZWZhdWx0czogZGVmYXVsdHMsXG4gIGRlZmluZVByb3BlcnR5OiBkZWZpbmVQcm9wZXJ0eSQxLFxuICBnZXQ6IGdldCxcbiAgaW5oZXJpdHM6IGluaGVyaXRzLFxuICBpbnRlcm9wUmVxdWlyZURlZmF1bHQ6IGludGVyb3BSZXF1aXJlRGVmYXVsdCxcbiAgaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDogaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCxcbiAgbmV3QXJyb3dDaGVjazogbmV3QXJyb3dDaGVjayxcbiAgb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5OiBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHksXG4gIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOiBvYmplY3RXaXRob3V0UHJvcGVydGllcyxcbiAgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjogcG9zc2libGVDb25zdHJ1Y3RvclJldHVybixcbiAgc2VsZkdsb2JhbDogc2VsZkdsb2JhbCxcbiAgc2V0OiBzZXQsXG4gIHNsaWNlZFRvQXJyYXk6IHNsaWNlZFRvQXJyYXksXG4gIHNsaWNlZFRvQXJyYXlMb29zZTogc2xpY2VkVG9BcnJheUxvb3NlLFxuICB0YWdnZWRUZW1wbGF0ZUxpdGVyYWw6IHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCxcbiAgdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2U6IHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlLFxuICB0ZW1wb3JhbFJlZjogdGVtcG9yYWxSZWYsXG4gIHRlbXBvcmFsVW5kZWZpbmVkOiB0ZW1wb3JhbFVuZGVmaW5lZCxcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgdG9Db25zdW1hYmxlQXJyYXk6IHRvQ29uc3VtYWJsZUFycmF5LFxuICB0eXBlb2Y6IF90eXBlb2YsXG4gIGV4dGVuZHM6IF9leHRlbmRzLFxuICBpbnN0YW5jZW9mOiBfaW5zdGFuY2VvZlxufSk7XG5cbnZhciByZWFsRGVmaW5lUHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VudGluZWwgPSBmdW5jdGlvbiBzZW50aW5lbCgpIHt9O1xuICAgIHRyeSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZW50aW5lbCwgJ2EnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZW50aW5lbCwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gc2VudGluZWwuYSA9PT0gMSAmJiBzZW50aW5lbC5wcm90b3R5cGUgaW5zdGFuY2VvZiBPYmplY3Q7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSgpO1xuXG4vLyBOZWVkIGEgd29ya2Fyb3VuZCBmb3IgZ2V0dGVycyBpbiBFUzNcbnZhciBlczMgPSAhcmVhbERlZmluZVByb3AgJiYgIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXztcblxuLy8gV2UgdXNlIHRoaXMgYSBsb3QgKGFuZCBuZWVkIGl0IGZvciBwcm90by1sZXNzIG9iamVjdHMpXG52YXIgaG9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLy8gTmFpdmUgZGVmaW5lUHJvcGVydHkgZm9yIGNvbXBhdGliaWxpdHlcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlYWxEZWZpbmVQcm9wID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gKG9iaiwgbmFtZSwgZGVzYykge1xuICAgIGlmICgnZ2V0JyBpbiBkZXNjICYmIG9iai5fX2RlZmluZUdldHRlcl9fKSBvYmouX19kZWZpbmVHZXR0ZXJfXyhuYW1lLCBkZXNjLmdldCk7ZWxzZSBpZiAoIWhvcC5jYWxsKG9iaiwgbmFtZSkgfHwgJ3ZhbHVlJyBpbiBkZXNjKSBvYmpbbmFtZV0gPSBkZXNjLnZhbHVlO1xufTtcblxuLy8gQXJyYXkucHJvdG90eXBlLmluZGV4T2YsIGFzIGdvb2QgYXMgd2UgbmVlZCBpdCB0byBiZVxudmFyIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiB8fCBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCF0Lmxlbmd0aCkgcmV0dXJuIC0xO1xuXG4gICAgZm9yICh2YXIgaSA9IGFyZ3VtZW50c1sxXSB8fCAwLCBtYXggPSB0Lmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGlmICh0W2ldID09PSBzZWFyY2gpIHJldHVybiBpO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbn07XG5cbi8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3RvdHlwZSAoMm5kIGFyZyByZXF1aXJlZCBmb3IgUmVjb3JkKVxudmFyIG9iakNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKHByb3RvLCBwcm9wcykge1xuICAgIHZhciBvYmogPSB2b2lkIDA7XG5cbiAgICBmdW5jdGlvbiBGKCkge31cbiAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIG9iaiA9IG5ldyBGKCk7XG5cbiAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChob3AuY2FsbChwcm9wcywgaykpIGRlZmluZVByb3BlcnR5KG9iaiwgaywgcHJvcHNba10pO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG4vLyBTbmFwc2hvdCBzb21lIChob3BlZnVsbHkgc3RpbGwpIG5hdGl2ZSBidWlsdC1pbnNcbnZhciBhcnJTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBhcnJDb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIGFyclB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBhcnJKb2luID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG52YXIgYXJyU2hpZnQgPSBBcnJheS5wcm90b3R5cGUuc2hpZnQ7XG5cbi8vIE5haXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGZvciBjb21wYXRpYmlsaXR5XG52YXIgZm5CaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgZnVuY3Rpb24gKHRoaXNPYmopIHtcbiAgICB2YXIgZm4gPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJyU2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgLy8gQWxsIG91ciAocHJlc2VudGx5KSBib3VuZCBmdW5jdGlvbnMgaGF2ZSBlaXRoZXIgMSBvciAwIGFyZ3VtZW50cy4gQnkgcmV0dXJuaW5nXG4gICAgLy8gZGlmZmVyZW50IGZ1bmN0aW9uIHNpZ25hdHVyZXMsIHdlIGNhbiBwYXNzIHNvbWUgdGVzdHMgaW4gRVMzIGVudmlyb25tZW50c1xuICAgIGlmIChmbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzT2JqLCBhcnJDb25jYXQuY2FsbChhcmdzLCBhcnJTbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNPYmosIGFyckNvbmNhdC5jYWxsKGFyZ3MsIGFyclNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG59O1xuXG4vLyBPYmplY3QgaG91c2luZyBpbnRlcm5hbCBwcm9wZXJ0aWVzIGZvciBjb25zdHJ1Y3RvcnNcbnZhciBpbnRlcm5hbHMgPSBvYmpDcmVhdGUobnVsbCk7XG5cbi8vIEtlZXAgaW50ZXJuYWwgcHJvcGVydGllcyBpbnRlcm5hbFxudmFyIHNlY3JldCA9IE1hdGgucmFuZG9tKCk7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGRlYWwgd2l0aCB0aGUgaW5hY2N1cmFjeSBvZiBjYWxjdWxhdGluZyBsb2cxMCBpbiBwcmUtRVM2XG4gKiBKYXZhU2NyaXB0IGVudmlyb25tZW50cy4gTWF0aC5sb2cobnVtKSAvIE1hdGguTE4xMCB3YXMgcmVzcG9uc2libGUgZm9yXG4gKiBjYXVzaW5nIGlzc3VlICM2Mi5cbiAqL1xuZnVuY3Rpb24gbG9nMTBGbG9vcihuKSB7XG4gICAgLy8gRVM2IHByb3ZpZGVzIHRoZSBtb3JlIGFjY3VyYXRlIE1hdGgubG9nMTBcbiAgICBpZiAodHlwZW9mIE1hdGgubG9nMTAgPT09ICdmdW5jdGlvbicpIHJldHVybiBNYXRoLmZsb29yKE1hdGgubG9nMTAobikpO1xuXG4gICAgdmFyIHggPSBNYXRoLnJvdW5kKE1hdGgubG9nKG4pICogTWF0aC5MT0cxMEUpO1xuICAgIHJldHVybiB4IC0gKE51bWJlcignMWUnICsgeCkgPiBuKTtcbn1cblxuLyoqXG4gKiBBIG1hcCB0aGF0IGRvZXNuJ3QgY29udGFpbiBPYmplY3QgaW4gaXRzIHByb3RvdHlwZSBjaGFpblxuICovXG5mdW5jdGlvbiBSZWNvcmQob2JqKSB7XG4gICAgLy8gQ29weSBvbmx5IG93biBwcm9wZXJ0aWVzIG92ZXIgdW5sZXNzIHRoaXMgb2JqZWN0IGlzIGFscmVhZHkgYSBSZWNvcmQgaW5zdGFuY2VcbiAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUmVjb3JkIHx8IGhvcC5jYWxsKG9iaiwgaykpIGRlZmluZVByb3BlcnR5KHRoaXMsIGssIHsgdmFsdWU6IG9ialtrXSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICB9XG59XG5SZWNvcmQucHJvdG90eXBlID0gb2JqQ3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIEFuIG9yZGVyZWQgbGlzdFxuICovXG5mdW5jdGlvbiBMaXN0KCkge1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdsZW5ndGgnLCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogMCB9KTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSBhcnJQdXNoLmFwcGx5KHRoaXMsIGFyclNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG59XG5MaXN0LnByb3RvdHlwZSA9IG9iakNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlc3RvcmUgdGFpbnRlZCBSZWdFeHAgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBjcmVhdGVSZWdFeHBSZXN0b3JlKCkge1xuICAgIGlmIChpbnRlcm5hbHMuZGlzYWJsZVJlZ0V4cFJlc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsvKiBuby1vcCAqL307XG4gICAgfVxuXG4gICAgdmFyIHJlZ0V4cENhY2hlID0ge1xuICAgICAgICBsYXN0TWF0Y2g6IFJlZ0V4cC5sYXN0TWF0Y2ggfHwgJycsXG4gICAgICAgIGxlZnRDb250ZXh0OiBSZWdFeHAubGVmdENvbnRleHQsXG4gICAgICAgIG11bHRpbGluZTogUmVnRXhwLm11bHRpbGluZSxcbiAgICAgICAgaW5wdXQ6IFJlZ0V4cC5pbnB1dFxuICAgIH0sXG4gICAgICAgIGhhcyA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIGEgc25hcHNob3Qgb2YgYWxsIHRoZSAnY2FwdHVyZWQnIHByb3BlcnRpZXNcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgaGFzID0gKHJlZ0V4cENhY2hlWyckJyArIGldID0gUmVnRXhwWyckJyArIGldKSB8fCBoYXM7XG4gICAgfXJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5vdyB3ZSd2ZSBzbmFwc2hvdHRlZCBzb21lIHByb3BlcnRpZXMsIGVzY2FwZSB0aGUgbGFzdE1hdGNoIHN0cmluZ1xuICAgICAgICB2YXIgZXNjID0gL1suPyorXiRbXFxdXFxcXCgpe318LV0vZyxcbiAgICAgICAgICAgIGxtID0gcmVnRXhwQ2FjaGUubGFzdE1hdGNoLnJlcGxhY2UoZXNjLCAnXFxcXCQmJyksXG4gICAgICAgICAgICByZWcgPSBuZXcgTGlzdCgpO1xuXG4gICAgICAgIC8vIElmIGFueSBvZiB0aGUgY2FwdHVyZWQgc3RyaW5ncyB3ZXJlIG5vbi1lbXB0eSwgaXRlcmF0ZSBvdmVyIHRoZW0gYWxsXG4gICAgICAgIGlmIChoYXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPD0gOTsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBtID0gcmVnRXhwQ2FjaGVbJyQnICsgX2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQncyBlbXB0eSwgYWRkIGFuIGVtcHR5IGNhcHR1cmluZyBncm91cFxuICAgICAgICAgICAgICAgIGlmICghbSkgbG0gPSAnKCknICsgbG07XG5cbiAgICAgICAgICAgICAgICAvLyBFbHNlIGZpbmQgdGhlIHN0cmluZyBpbiBsbSBhbmQgZXNjYXBlICYgd3JhcCBpdCB0byBjYXB0dXJlIGl0XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gbS5yZXBsYWNlKGVzYywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG0gPSBsbS5yZXBsYWNlKG0sICcoJyArIG0gKyAnKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQdXNoIGl0IHRvIHRoZSByZWcgYW5kIGNob3AgbG0gdG8gbWFrZSBzdXJlIGZ1cnRoZXIgZ3JvdXBzIGNvbWUgYWZ0ZXJcbiAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVnLCBsbS5zbGljZSgwLCBsbS5pbmRleE9mKCcoJykgKyAxKSk7XG4gICAgICAgICAgICAgICAgbG0gPSBsbS5zbGljZShsbS5pbmRleE9mKCcoJykgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByU3RyID0gYXJySm9pbi5jYWxsKHJlZywgJycpICsgbG07XG5cbiAgICAgICAgLy8gU2hvcnRlbiB0aGUgcmVnZXggYnkgcmVwbGFjaW5nIGVhY2ggcGFydCBvZiB0aGUgZXhwcmVzc2lvbiB3aXRoIGEgbWF0Y2hcbiAgICAgICAgLy8gZm9yIGEgc3RyaW5nIG9mIHRoYXQgZXhhY3QgbGVuZ3RoLiAgVGhpcyBpcyBzYWZlIGZvciB0aGUgdHlwZSBvZlxuICAgICAgICAvLyBleHByZXNzaW9ucyBnZW5lcmF0ZWQgYWJvdmUsIGJlY2F1c2UgdGhlIGV4cHJlc3Npb24gbWF0Y2hlcyB0aGUgd2hvbGVcbiAgICAgICAgLy8gbWF0Y2ggc3RyaW5nLCBzbyB3ZSBrbm93IGVhY2ggZ3JvdXAgYW5kIGVhY2ggc2VnbWVudCBiZXR3ZWVuIGNhcHR1cmluZ1xuICAgICAgICAvLyBncm91cHMgY2FuIGJlIG1hdGNoZWQgYnkgaXRzIGxlbmd0aCBhbG9uZS5cbiAgICAgICAgZXhwclN0ciA9IGV4cHJTdHIucmVwbGFjZSgvKFxcXFxcXCh8XFxcXFxcKXxbXigpXSkrL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuICdbXFxcXHNcXFxcU117JyArIG1hdGNoLnJlcGxhY2UoJ1xcXFwnLCAnJykubGVuZ3RoICsgJ30nO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IHdpbGwgcmVjb25zdHJ1Y3QgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgICAgIHZhciBleHByID0gbmV3IFJlZ0V4cChleHByU3RyLCByZWdFeHBDYWNoZS5tdWx0aWxpbmUgPyAnZ20nIDogJ2cnKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGxhc3RJbmRleCBvZiB0aGUgZ2VuZXJhdGVkIGV4cHJlc3Npb24gdG8gZW5zdXJlIHRoYXQgdGhlIG1hdGNoXG4gICAgICAgIC8vIGlzIGZvdW5kIGluIHRoZSBjb3JyZWN0IGluZGV4LlxuICAgICAgICBleHByLmxhc3RJbmRleCA9IHJlZ0V4cENhY2hlLmxlZnRDb250ZXh0Lmxlbmd0aDtcblxuICAgICAgICBleHByLmV4ZWMocmVnRXhwQ2FjaGUuaW5wdXQpO1xuICAgIH07XG59XG5cbi8qKlxuICogTWltaWNzIEVTNSdzIGFic3RyYWN0IFRvT2JqZWN0KCkgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QoYXJnKSB7XG4gICAgaWYgKGFyZyA9PT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgbnVsbCBvciB1bmRlZmluZWQgdG8gb2JqZWN0Jyk7XG5cbiAgICBpZiAoKHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBiYWJlbEhlbHBlcnMkMVsndHlwZW9mJ10oYXJnKSkgPT09ICdvYmplY3QnKSByZXR1cm4gYXJnO1xuICAgIHJldHVybiBPYmplY3QoYXJnKTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSByZXR1cm4gYXJnO1xuICAgIHJldHVybiBOdW1iZXIoYXJnKTtcbn1cblxuZnVuY3Rpb24gdG9JbnRlZ2VyKGFyZykge1xuICAgIHZhciBudW1iZXIgPSB0b051bWJlcihhcmcpO1xuICAgIGlmIChpc05hTihudW1iZXIpKSByZXR1cm4gMDtcbiAgICBpZiAobnVtYmVyID09PSArMCB8fCBudW1iZXIgPT09IC0wIHx8IG51bWJlciA9PT0gK0luZmluaXR5IHx8IG51bWJlciA9PT0gLUluZmluaXR5KSByZXR1cm4gbnVtYmVyO1xuICAgIGlmIChudW1iZXIgPCAwKSByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKSAqIC0xO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xufVxuXG5mdW5jdGlvbiB0b0xlbmd0aChhcmcpIHtcbiAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKGFyZyk7XG4gICAgaWYgKGxlbiA8PSAwKSByZXR1cm4gMDtcbiAgICBpZiAobGVuID09PSBJbmZpbml0eSkgcmV0dXJuIE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgcmV0dXJuIE1hdGgubWluKGxlbiwgTWF0aC5wb3coMiwgNTMpIC0gMSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBcImludGVybmFsXCIgcHJvcGVydGllcyBmb3IgYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEludGVybmFsUHJvcGVydGllcyhvYmopIHtcbiAgICBpZiAoaG9wLmNhbGwob2JqLCAnX19nZXRJbnRlcm5hbFByb3BlcnRpZXMnKSkgcmV0dXJuIG9iai5fX2dldEludGVybmFsUHJvcGVydGllcyhzZWNyZXQpO1xuXG4gICAgcmV0dXJuIG9iakNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4qIERlZmluZXMgcmVndWxhciBleHByZXNzaW9ucyBmb3IgdmFyaW91cyBvcGVyYXRpb25zIHJlbGF0ZWQgdG8gdGhlIEJDUCA0NyBzeW50YXgsXG4qIGFzIGRlZmluZWQgYXQgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvYmNwNDcjc2VjdGlvbi0yLjFcbiovXG5cbi8vIGV4dGxhbmcgICAgICAgPSAzQUxQSEEgICAgICAgICAgICAgIDsgc2VsZWN0ZWQgSVNPIDYzOSBjb2Rlc1xuLy8gICAgICAgICAgICAgICAgICoyKFwiLVwiIDNBTFBIQSkgICAgICA7IHBlcm1hbmVudGx5IHJlc2VydmVkXG52YXIgZXh0bGFuZyA9ICdbYS16XXszfSg/Oi1bYS16XXszfSl7MCwyfSc7XG5cbi8vIGxhbmd1YWdlICAgICAgPSAyKjNBTFBIQSAgICAgICAgICAgIDsgc2hvcnRlc3QgSVNPIDYzOSBjb2RlXG4vLyAgICAgICAgICAgICAgICAgW1wiLVwiIGV4dGxhbmddICAgICAgIDsgc29tZXRpbWVzIGZvbGxvd2VkIGJ5XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IGV4dGVuZGVkIGxhbmd1YWdlIHN1YnRhZ3Ncbi8vICAgICAgICAgICAgICAgLyA0QUxQSEEgICAgICAgICAgICAgIDsgb3IgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2Vcbi8vICAgICAgICAgICAgICAgLyA1KjhBTFBIQSAgICAgICAgICAgIDsgb3IgcmVnaXN0ZXJlZCBsYW5ndWFnZSBzdWJ0YWdcbnZhciBsYW5ndWFnZSA9ICcoPzpbYS16XXsyLDN9KD86LScgKyBleHRsYW5nICsgJyk/fFthLXpdezR9fFthLXpdezUsOH0pJztcblxuLy8gc2NyaXB0ICAgICAgICA9IDRBTFBIQSAgICAgICAgICAgICAgOyBJU08gMTU5MjQgY29kZVxudmFyIHNjcmlwdCA9ICdbYS16XXs0fSc7XG5cbi8vIHJlZ2lvbiAgICAgICAgPSAyQUxQSEEgICAgICAgICAgICAgIDsgSVNPIDMxNjYtMSBjb2RlXG4vLyAgICAgICAgICAgICAgIC8gM0RJR0lUICAgICAgICAgICAgICA7IFVOIE0uNDkgY29kZVxudmFyIHJlZ2lvbiA9ICcoPzpbYS16XXsyfXxcXFxcZHszfSknO1xuXG4vLyB2YXJpYW50ICAgICAgID0gNSo4YWxwaGFudW0gICAgICAgICA7IHJlZ2lzdGVyZWQgdmFyaWFudHNcbi8vICAgICAgICAgICAgICAgLyAoRElHSVQgM2FscGhhbnVtKVxudmFyIHZhcmlhbnQgPSAnKD86W2EtejAtOV17NSw4fXxcXFxcZFthLXowLTldezN9KSc7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgU2luZ2xlIGFscGhhbnVtZXJpY3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgXCJ4XCIgcmVzZXJ2ZWQgZm9yIHByaXZhdGUgdXNlXG4vLyBzaW5nbGV0b24gICAgID0gRElHSVQgICAgICAgICAgICAgICA7IDAgLSA5XG4vLyAgICAgICAgICAgICAgIC8gJXg0MS01NyAgICAgICAgICAgICA7IEEgLSBXXG4vLyAgICAgICAgICAgICAgIC8gJXg1OS01QSAgICAgICAgICAgICA7IFkgLSBaXG4vLyAgICAgICAgICAgICAgIC8gJXg2MS03NyAgICAgICAgICAgICA7IGEgLSB3XG4vLyAgICAgICAgICAgICAgIC8gJXg3OS03QSAgICAgICAgICAgICA7IHkgLSB6XG52YXIgc2luZ2xldG9uID0gJ1swLTlhLXd5LXpdJztcblxuLy8gZXh0ZW5zaW9uICAgICA9IHNpbmdsZXRvbiAxKihcIi1cIiAoMio4YWxwaGFudW0pKVxudmFyIGV4dGVuc2lvbiA9IHNpbmdsZXRvbiArICcoPzotW2EtejAtOV17Miw4fSkrJztcblxuLy8gcHJpdmF0ZXVzZSAgICA9IFwieFwiIDEqKFwiLVwiICgxKjhhbHBoYW51bSkpXG52YXIgcHJpdmF0ZXVzZSA9ICd4KD86LVthLXowLTldezEsOH0pKyc7XG5cbi8vIGlycmVndWxhciAgICAgPSBcImVuLUdCLW9lZFwiICAgICAgICAgOyBpcnJlZ3VsYXIgdGFncyBkbyBub3QgbWF0Y2hcbi8vICAgICAgICAgICAgICAgLyBcImktYW1pXCIgICAgICAgICAgICAgOyB0aGUgJ2xhbmd0YWcnIHByb2R1Y3Rpb24gYW5kXG4vLyAgICAgICAgICAgICAgIC8gXCJpLWJublwiICAgICAgICAgICAgIDsgd291bGQgbm90IG90aGVyd2lzZSBiZVxuLy8gICAgICAgICAgICAgICAvIFwiaS1kZWZhdWx0XCIgICAgICAgICA7IGNvbnNpZGVyZWQgJ3dlbGwtZm9ybWVkJ1xuLy8gICAgICAgICAgICAgICAvIFwiaS1lbm9jaGlhblwiICAgICAgICA7IFRoZXNlIHRhZ3MgYXJlIGFsbCB2YWxpZCxcbi8vICAgICAgICAgICAgICAgLyBcImktaGFrXCIgICAgICAgICAgICAgOyBidXQgbW9zdCBhcmUgZGVwcmVjYXRlZFxuLy8gICAgICAgICAgICAgICAvIFwiaS1rbGluZ29uXCIgICAgICAgICA7IGluIGZhdm9yIG9mIG1vcmUgbW9kZXJuXG4vLyAgICAgICAgICAgICAgIC8gXCJpLWx1eFwiICAgICAgICAgICAgIDsgc3VidGFncyBvciBzdWJ0YWdcbi8vICAgICAgICAgICAgICAgLyBcImktbWluZ29cIiAgICAgICAgICAgOyBjb21iaW5hdGlvblxuLy8gICAgICAgICAgICAgICAvIFwiaS1uYXZham9cIlxuLy8gICAgICAgICAgICAgICAvIFwiaS1wd25cIlxuLy8gICAgICAgICAgICAgICAvIFwiaS10YW9cIlxuLy8gICAgICAgICAgICAgICAvIFwiaS10YXlcIlxuLy8gICAgICAgICAgICAgICAvIFwiaS10c3VcIlxuLy8gICAgICAgICAgICAgICAvIFwic2duLUJFLUZSXCJcbi8vICAgICAgICAgICAgICAgLyBcInNnbi1CRS1OTFwiXG4vLyAgICAgICAgICAgICAgIC8gXCJzZ24tQ0gtREVcIlxudmFyIGlycmVndWxhciA9ICcoPzplbi1HQi1vZWQnICsgJ3xpLSg/OmFtaXxibm58ZGVmYXVsdHxlbm9jaGlhbnxoYWt8a2xpbmdvbnxsdXh8bWluZ298bmF2YWpvfHB3bnx0YW98dGF5fHRzdSknICsgJ3xzZ24tKD86QkUtRlJ8QkUtTkx8Q0gtREUpKSc7XG5cbi8vIHJlZ3VsYXIgICAgICAgPSBcImFydC1sb2piYW5cIiAgICAgICAgOyB0aGVzZSB0YWdzIG1hdGNoIHRoZSAnbGFuZ3RhZydcbi8vICAgICAgICAgICAgICAgLyBcImNlbC1nYXVsaXNoXCIgICAgICAgOyBwcm9kdWN0aW9uLCBidXQgdGhlaXIgc3VidGFnc1xuLy8gICAgICAgICAgICAgICAvIFwibm8tYm9rXCIgICAgICAgICAgICA7IGFyZSBub3QgZXh0ZW5kZWQgbGFuZ3VhZ2Vcbi8vICAgICAgICAgICAgICAgLyBcIm5vLW55blwiICAgICAgICAgICAgOyBvciB2YXJpYW50IHN1YnRhZ3M6IHRoZWlyIG1lYW5pbmdcbi8vICAgICAgICAgICAgICAgLyBcInpoLWd1b3l1XCIgICAgICAgICAgOyBpcyBkZWZpbmVkIGJ5IHRoZWlyIHJlZ2lzdHJhdGlvblxuLy8gICAgICAgICAgICAgICAvIFwiemgtaGFra2FcIiAgICAgICAgICA7IGFuZCBhbGwgb2YgdGhlc2UgYXJlIGRlcHJlY2F0ZWRcbi8vICAgICAgICAgICAgICAgLyBcInpoLW1pblwiICAgICAgICAgICAgOyBpbiBmYXZvciBvZiBhIG1vcmUgbW9kZXJuXG4vLyAgICAgICAgICAgICAgIC8gXCJ6aC1taW4tbmFuXCIgICAgICAgIDsgc3VidGFnIG9yIHNlcXVlbmNlIG9mIHN1YnRhZ3Ncbi8vICAgICAgICAgICAgICAgLyBcInpoLXhpYW5nXCJcbnZhciByZWd1bGFyID0gJyg/OmFydC1sb2piYW58Y2VsLWdhdWxpc2h8bm8tYm9rfG5vLW55bicgKyAnfHpoLSg/Omd1b3l1fGhha2thfG1pbnxtaW4tbmFufHhpYW5nKSknO1xuXG4vLyBncmFuZGZhdGhlcmVkID0gaXJyZWd1bGFyICAgICAgICAgICA7IG5vbi1yZWR1bmRhbnQgdGFncyByZWdpc3RlcmVkXG4vLyAgICAgICAgICAgICAgIC8gcmVndWxhciAgICAgICAgICAgICA7IGR1cmluZyB0aGUgUkZDIDMwNjYgZXJhXG52YXIgZ3JhbmRmYXRoZXJlZCA9ICcoPzonICsgaXJyZWd1bGFyICsgJ3wnICsgcmVndWxhciArICcpJztcblxuLy8gbGFuZ3RhZyAgICAgICA9IGxhbmd1YWdlXG4vLyAgICAgICAgICAgICAgICAgW1wiLVwiIHNjcmlwdF1cbi8vICAgICAgICAgICAgICAgICBbXCItXCIgcmVnaW9uXVxuLy8gICAgICAgICAgICAgICAgICooXCItXCIgdmFyaWFudClcbi8vICAgICAgICAgICAgICAgICAqKFwiLVwiIGV4dGVuc2lvbilcbi8vICAgICAgICAgICAgICAgICBbXCItXCIgcHJpdmF0ZXVzZV1cbnZhciBsYW5ndGFnID0gbGFuZ3VhZ2UgKyAnKD86LScgKyBzY3JpcHQgKyAnKT8oPzotJyArIHJlZ2lvbiArICcpPyg/Oi0nICsgdmFyaWFudCArICcpKig/Oi0nICsgZXh0ZW5zaW9uICsgJykqKD86LScgKyBwcml2YXRldXNlICsgJyk/JztcblxuLy8gTGFuZ3VhZ2UtVGFnICA9IGxhbmd0YWcgICAgICAgICAgICAgOyBub3JtYWwgbGFuZ3VhZ2UgdGFnc1xuLy8gICAgICAgICAgICAgICAvIHByaXZhdGV1c2UgICAgICAgICAgOyBwcml2YXRlIHVzZSB0YWdcbi8vICAgICAgICAgICAgICAgLyBncmFuZGZhdGhlcmVkICAgICAgIDsgZ3JhbmRmYXRoZXJlZCB0YWdzXG52YXIgZXhwQkNQNDdTeW50YXggPSBSZWdFeHAoJ14oPzonICsgbGFuZ3RhZyArICd8JyArIHByaXZhdGV1c2UgKyAnfCcgKyBncmFuZGZhdGhlcmVkICsgJykkJywgJ2knKTtcblxuLy8gTWF0Y2ggZHVwbGljYXRlIHZhcmlhbnRzIGluIGEgbGFuZ3VhZ2UgdGFnXG52YXIgZXhwVmFyaWFudER1cGVzID0gUmVnRXhwKCdeKD8heCkuKj8tKCcgKyB2YXJpYW50ICsgJyktKD86XFxcXHd7NCw4fS0oPyF4LSkpKlxcXFwxXFxcXGInLCAnaScpO1xuXG4vLyBNYXRjaCBkdXBsaWNhdGUgc2luZ2xldG9ucyBpbiBhIGxhbmd1YWdlIHRhZyAoZXhjZXB0IGluIHByaXZhdGUgdXNlKVxudmFyIGV4cFNpbmdsZXRvbkR1cGVzID0gUmVnRXhwKCdeKD8heCkuKj8tKCcgKyBzaW5nbGV0b24gKyAnKS0oPzpcXFxcdystKD8heC0pKSpcXFxcMVxcXFxiJywgJ2knKTtcblxuLy8gTWF0Y2ggYWxsIGV4dGVuc2lvbiBzZXF1ZW5jZXNcbnZhciBleHBFeHRTZXF1ZW5jZXMgPSBSZWdFeHAoJy0nICsgZXh0ZW5zaW9uLCAnaWcnKTtcblxuLy8gRGVmYXVsdCBsb2NhbGUgaXMgdGhlIGZpcnN0LWFkZGVkIGxvY2FsZSBkYXRhIGZvciB1c1xudmFyIGRlZmF1bHRMb2NhbGUgPSB2b2lkIDA7XG5mdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG59XG5cbi8vIElBTkEgU3VidGFnIFJlZ2lzdHJ5IHJlZHVuZGFudCB0YWcgYW5kIHN1YnRhZyBtYXBzXG52YXIgcmVkdW5kYW50VGFncyA9IHtcbiAgICB0YWdzOiB7XG4gICAgICAgIFwiYXJ0LWxvamJhblwiOiBcImpib1wiLFxuICAgICAgICBcImktYW1pXCI6IFwiYW1pXCIsXG4gICAgICAgIFwiaS1ibm5cIjogXCJibm5cIixcbiAgICAgICAgXCJpLWhha1wiOiBcImhha1wiLFxuICAgICAgICBcImkta2xpbmdvblwiOiBcInRsaFwiLFxuICAgICAgICBcImktbHV4XCI6IFwibGJcIixcbiAgICAgICAgXCJpLW5hdmFqb1wiOiBcIm52XCIsXG4gICAgICAgIFwiaS1wd25cIjogXCJwd25cIixcbiAgICAgICAgXCJpLXRhb1wiOiBcInRhb1wiLFxuICAgICAgICBcImktdGF5XCI6IFwidGF5XCIsXG4gICAgICAgIFwiaS10c3VcIjogXCJ0c3VcIixcbiAgICAgICAgXCJuby1ib2tcIjogXCJuYlwiLFxuICAgICAgICBcIm5vLW55blwiOiBcIm5uXCIsXG4gICAgICAgIFwic2duLUJFLUZSXCI6IFwic2ZiXCIsXG4gICAgICAgIFwic2duLUJFLU5MXCI6IFwidmd0XCIsXG4gICAgICAgIFwic2duLUNILURFXCI6IFwic2dnXCIsXG4gICAgICAgIFwiemgtZ3VveXVcIjogXCJjbW5cIixcbiAgICAgICAgXCJ6aC1oYWtrYVwiOiBcImhha1wiLFxuICAgICAgICBcInpoLW1pbi1uYW5cIjogXCJuYW5cIixcbiAgICAgICAgXCJ6aC14aWFuZ1wiOiBcImhzblwiLFxuICAgICAgICBcInNnbi1CUlwiOiBcImJ6c1wiLFxuICAgICAgICBcInNnbi1DT1wiOiBcImNzblwiLFxuICAgICAgICBcInNnbi1ERVwiOiBcImdzZ1wiLFxuICAgICAgICBcInNnbi1ES1wiOiBcImRzbFwiLFxuICAgICAgICBcInNnbi1FU1wiOiBcInNzcFwiLFxuICAgICAgICBcInNnbi1GUlwiOiBcImZzbFwiLFxuICAgICAgICBcInNnbi1HQlwiOiBcImJmaVwiLFxuICAgICAgICBcInNnbi1HUlwiOiBcImdzc1wiLFxuICAgICAgICBcInNnbi1JRVwiOiBcImlzZ1wiLFxuICAgICAgICBcInNnbi1JVFwiOiBcImlzZVwiLFxuICAgICAgICBcInNnbi1KUFwiOiBcImpzbFwiLFxuICAgICAgICBcInNnbi1NWFwiOiBcIm1mc1wiLFxuICAgICAgICBcInNnbi1OSVwiOiBcIm5jc1wiLFxuICAgICAgICBcInNnbi1OTFwiOiBcImRzZVwiLFxuICAgICAgICBcInNnbi1OT1wiOiBcIm5zbFwiLFxuICAgICAgICBcInNnbi1QVFwiOiBcInBzclwiLFxuICAgICAgICBcInNnbi1TRVwiOiBcInN3bFwiLFxuICAgICAgICBcInNnbi1VU1wiOiBcImFzZVwiLFxuICAgICAgICBcInNnbi1aQVwiOiBcInNmc1wiLFxuICAgICAgICBcInpoLWNtblwiOiBcImNtblwiLFxuICAgICAgICBcInpoLWNtbi1IYW5zXCI6IFwiY21uLUhhbnNcIixcbiAgICAgICAgXCJ6aC1jbW4tSGFudFwiOiBcImNtbi1IYW50XCIsXG4gICAgICAgIFwiemgtZ2FuXCI6IFwiZ2FuXCIsXG4gICAgICAgIFwiemgtd3V1XCI6IFwid3V1XCIsXG4gICAgICAgIFwiemgteXVlXCI6IFwieXVlXCJcbiAgICB9LFxuICAgIHN1YnRhZ3M6IHtcbiAgICAgICAgQlU6IFwiTU1cIixcbiAgICAgICAgREQ6IFwiREVcIixcbiAgICAgICAgRlg6IFwiRlJcIixcbiAgICAgICAgVFA6IFwiVExcIixcbiAgICAgICAgWUQ6IFwiWUVcIixcbiAgICAgICAgWlI6IFwiQ0RcIixcbiAgICAgICAgaGVwbG9jOiBcImFsYWxjOTdcIixcbiAgICAgICAgJ2luJzogXCJpZFwiLFxuICAgICAgICBpdzogXCJoZVwiLFxuICAgICAgICBqaTogXCJ5aVwiLFxuICAgICAgICBqdzogXCJqdlwiLFxuICAgICAgICBtbzogXCJyb1wiLFxuICAgICAgICBheXg6IFwibnVuXCIsXG4gICAgICAgIGJqZDogXCJkcmxcIixcbiAgICAgICAgY2NxOiBcInJraVwiLFxuICAgICAgICBjanI6IFwibW9tXCIsXG4gICAgICAgIGNrYTogXCJjbXJcIixcbiAgICAgICAgY21rOiBcInhjaFwiLFxuICAgICAgICBkcmg6IFwia2hrXCIsXG4gICAgICAgIGRydzogXCJwcnNcIixcbiAgICAgICAgZ2F2OiBcImRldlwiLFxuICAgICAgICBocnI6IFwiamFsXCIsXG4gICAgICAgIGliaTogXCJvcGFcIixcbiAgICAgICAga2doOiBcImttbFwiLFxuICAgICAgICBsY3E6IFwicHByXCIsXG4gICAgICAgIG1zdDogXCJtcnlcIixcbiAgICAgICAgbXl0OiBcIm1yeVwiLFxuICAgICAgICBzY2E6IFwiaGxlXCIsXG4gICAgICAgIHRpZTogXCJyYXNcIixcbiAgICAgICAgdGtrOiBcInR3bVwiLFxuICAgICAgICB0bHc6IFwid2VvXCIsXG4gICAgICAgIHRuZjogXCJwcnNcIixcbiAgICAgICAgeWJkOiBcInJraVwiLFxuICAgICAgICB5bWE6IFwibHJyXCJcbiAgICB9LFxuICAgIGV4dExhbmc6IHtcbiAgICAgICAgYWFvOiBbXCJhYW9cIiwgXCJhclwiXSxcbiAgICAgICAgYWJoOiBbXCJhYmhcIiwgXCJhclwiXSxcbiAgICAgICAgYWJ2OiBbXCJhYnZcIiwgXCJhclwiXSxcbiAgICAgICAgYWNtOiBbXCJhY21cIiwgXCJhclwiXSxcbiAgICAgICAgYWNxOiBbXCJhY3FcIiwgXCJhclwiXSxcbiAgICAgICAgYWN3OiBbXCJhY3dcIiwgXCJhclwiXSxcbiAgICAgICAgYWN4OiBbXCJhY3hcIiwgXCJhclwiXSxcbiAgICAgICAgYWN5OiBbXCJhY3lcIiwgXCJhclwiXSxcbiAgICAgICAgYWRmOiBbXCJhZGZcIiwgXCJhclwiXSxcbiAgICAgICAgYWRzOiBbXCJhZHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFlYjogW1wiYWViXCIsIFwiYXJcIl0sXG4gICAgICAgIGFlYzogW1wiYWVjXCIsIFwiYXJcIl0sXG4gICAgICAgIGFlZDogW1wiYWVkXCIsIFwic2duXCJdLFxuICAgICAgICBhZW46IFtcImFlblwiLCBcInNnblwiXSxcbiAgICAgICAgYWZiOiBbXCJhZmJcIiwgXCJhclwiXSxcbiAgICAgICAgYWZnOiBbXCJhZmdcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFqcDogW1wiYWpwXCIsIFwiYXJcIl0sXG4gICAgICAgIGFwYzogW1wiYXBjXCIsIFwiYXJcIl0sXG4gICAgICAgIGFwZDogW1wiYXBkXCIsIFwiYXJcIl0sXG4gICAgICAgIGFyYjogW1wiYXJiXCIsIFwiYXJcIl0sXG4gICAgICAgIGFycTogW1wiYXJxXCIsIFwiYXJcIl0sXG4gICAgICAgIGFyczogW1wiYXJzXCIsIFwiYXJcIl0sXG4gICAgICAgIGFyeTogW1wiYXJ5XCIsIFwiYXJcIl0sXG4gICAgICAgIGFyejogW1wiYXJ6XCIsIFwiYXJcIl0sXG4gICAgICAgIGFzZTogW1wiYXNlXCIsIFwic2duXCJdLFxuICAgICAgICBhc2Y6IFtcImFzZlwiLCBcInNnblwiXSxcbiAgICAgICAgYXNwOiBbXCJhc3BcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFzcTogW1wiYXNxXCIsIFwic2duXCJdLFxuICAgICAgICBhc3c6IFtcImFzd1wiLCBcInNnblwiXSxcbiAgICAgICAgYXV6OiBbXCJhdXpcIiwgXCJhclwiXSxcbiAgICAgICAgYXZsOiBbXCJhdmxcIiwgXCJhclwiXSxcbiAgICAgICAgYXloOiBbXCJheWhcIiwgXCJhclwiXSxcbiAgICAgICAgYXlsOiBbXCJheWxcIiwgXCJhclwiXSxcbiAgICAgICAgYXluOiBbXCJheW5cIiwgXCJhclwiXSxcbiAgICAgICAgYXlwOiBbXCJheXBcIiwgXCJhclwiXSxcbiAgICAgICAgYmJ6OiBbXCJiYnpcIiwgXCJhclwiXSxcbiAgICAgICAgYmZpOiBbXCJiZmlcIiwgXCJzZ25cIl0sXG4gICAgICAgIGJmazogW1wiYmZrXCIsIFwic2duXCJdLFxuICAgICAgICBiam46IFtcImJqblwiLCBcIm1zXCJdLFxuICAgICAgICBib2c6IFtcImJvZ1wiLCBcInNnblwiXSxcbiAgICAgICAgYnFuOiBbXCJicW5cIiwgXCJzZ25cIl0sXG4gICAgICAgIGJxeTogW1wiYnF5XCIsIFwic2duXCJdLFxuICAgICAgICBidGo6IFtcImJ0alwiLCBcIm1zXCJdLFxuICAgICAgICBidmU6IFtcImJ2ZVwiLCBcIm1zXCJdLFxuICAgICAgICBidmw6IFtcImJ2bFwiLCBcInNnblwiXSxcbiAgICAgICAgYnZ1OiBbXCJidnVcIiwgXCJtc1wiXSxcbiAgICAgICAgYnpzOiBbXCJienNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNkbzogW1wiY2RvXCIsIFwiemhcIl0sXG4gICAgICAgIGNkczogW1wiY2RzXCIsIFwic2duXCJdLFxuICAgICAgICBjank6IFtcImNqeVwiLCBcInpoXCJdLFxuICAgICAgICBjbW46IFtcImNtblwiLCBcInpoXCJdLFxuICAgICAgICBjb2E6IFtcImNvYVwiLCBcIm1zXCJdLFxuICAgICAgICBjcHg6IFtcImNweFwiLCBcInpoXCJdLFxuICAgICAgICBjc2M6IFtcImNzY1wiLCBcInNnblwiXSxcbiAgICAgICAgY3NkOiBbXCJjc2RcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNzZTogW1wiY3NlXCIsIFwic2duXCJdLFxuICAgICAgICBjc2Y6IFtcImNzZlwiLCBcInNnblwiXSxcbiAgICAgICAgY3NnOiBbXCJjc2dcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNzbDogW1wiY3NsXCIsIFwic2duXCJdLFxuICAgICAgICBjc246IFtcImNzblwiLCBcInNnblwiXSxcbiAgICAgICAgY3NxOiBbXCJjc3FcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNzcjogW1wiY3NyXCIsIFwic2duXCJdLFxuICAgICAgICBjemg6IFtcImN6aFwiLCBcInpoXCJdLFxuICAgICAgICBjem86IFtcImN6b1wiLCBcInpoXCJdLFxuICAgICAgICBkb3E6IFtcImRvcVwiLCBcInNnblwiXSxcbiAgICAgICAgZHNlOiBbXCJkc2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIGRzbDogW1wiZHNsXCIsIFwic2duXCJdLFxuICAgICAgICBkdXA6IFtcImR1cFwiLCBcIm1zXCJdLFxuICAgICAgICBlY3M6IFtcImVjc1wiLCBcInNnblwiXSxcbiAgICAgICAgZXNsOiBbXCJlc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGVzbjogW1wiZXNuXCIsIFwic2duXCJdLFxuICAgICAgICBlc286IFtcImVzb1wiLCBcInNnblwiXSxcbiAgICAgICAgZXRoOiBbXCJldGhcIiwgXCJzZ25cIl0sXG4gICAgICAgIGZjczogW1wiZmNzXCIsIFwic2duXCJdLFxuICAgICAgICBmc2U6IFtcImZzZVwiLCBcInNnblwiXSxcbiAgICAgICAgZnNsOiBbXCJmc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGZzczogW1wiZnNzXCIsIFwic2duXCJdLFxuICAgICAgICBnYW46IFtcImdhblwiLCBcInpoXCJdLFxuICAgICAgICBnZHM6IFtcImdkc1wiLCBcInNnblwiXSxcbiAgICAgICAgZ29tOiBbXCJnb21cIiwgXCJrb2tcIl0sXG4gICAgICAgIGdzZTogW1wiZ3NlXCIsIFwic2duXCJdLFxuICAgICAgICBnc2c6IFtcImdzZ1wiLCBcInNnblwiXSxcbiAgICAgICAgZ3NtOiBbXCJnc21cIiwgXCJzZ25cIl0sXG4gICAgICAgIGdzczogW1wiZ3NzXCIsIFwic2duXCJdLFxuICAgICAgICBndXM6IFtcImd1c1wiLCBcInNnblwiXSxcbiAgICAgICAgaGFiOiBbXCJoYWJcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhhZjogW1wiaGFmXCIsIFwic2duXCJdLFxuICAgICAgICBoYWs6IFtcImhha1wiLCBcInpoXCJdLFxuICAgICAgICBoZHM6IFtcImhkc1wiLCBcInNnblwiXSxcbiAgICAgICAgaGppOiBbXCJoamlcIiwgXCJtc1wiXSxcbiAgICAgICAgaGtzOiBbXCJoa3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhvczogW1wiaG9zXCIsIFwic2duXCJdLFxuICAgICAgICBocHM6IFtcImhwc1wiLCBcInNnblwiXSxcbiAgICAgICAgaHNoOiBbXCJoc2hcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhzbDogW1wiaHNsXCIsIFwic2duXCJdLFxuICAgICAgICBoc246IFtcImhzblwiLCBcInpoXCJdLFxuICAgICAgICBpY2w6IFtcImljbFwiLCBcInNnblwiXSxcbiAgICAgICAgaWxzOiBbXCJpbHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGlubDogW1wiaW5sXCIsIFwic2duXCJdLFxuICAgICAgICBpbnM6IFtcImluc1wiLCBcInNnblwiXSxcbiAgICAgICAgaXNlOiBbXCJpc2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIGlzZzogW1wiaXNnXCIsIFwic2duXCJdLFxuICAgICAgICBpc3I6IFtcImlzclwiLCBcInNnblwiXSxcbiAgICAgICAgamFrOiBbXCJqYWtcIiwgXCJtc1wiXSxcbiAgICAgICAgamF4OiBbXCJqYXhcIiwgXCJtc1wiXSxcbiAgICAgICAgamNzOiBbXCJqY3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGpoczogW1wiamhzXCIsIFwic2duXCJdLFxuICAgICAgICBqbHM6IFtcImpsc1wiLCBcInNnblwiXSxcbiAgICAgICAgam9zOiBbXCJqb3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGpzbDogW1wianNsXCIsIFwic2duXCJdLFxuICAgICAgICBqdXM6IFtcImp1c1wiLCBcInNnblwiXSxcbiAgICAgICAga2dpOiBbXCJrZ2lcIiwgXCJzZ25cIl0sXG4gICAgICAgIGtubjogW1wia25uXCIsIFwia29rXCJdLFxuICAgICAgICBrdmI6IFtcImt2YlwiLCBcIm1zXCJdLFxuICAgICAgICBrdms6IFtcImt2a1wiLCBcInNnblwiXSxcbiAgICAgICAga3ZyOiBbXCJrdnJcIiwgXCJtc1wiXSxcbiAgICAgICAga3hkOiBbXCJreGRcIiwgXCJtc1wiXSxcbiAgICAgICAgbGJzOiBbXCJsYnNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGxjZTogW1wibGNlXCIsIFwibXNcIl0sXG4gICAgICAgIGxjZjogW1wibGNmXCIsIFwibXNcIl0sXG4gICAgICAgIGxpdzogW1wibGl3XCIsIFwibXNcIl0sXG4gICAgICAgIGxsczogW1wibGxzXCIsIFwic2duXCJdLFxuICAgICAgICBsc2c6IFtcImxzZ1wiLCBcInNnblwiXSxcbiAgICAgICAgbHNsOiBbXCJsc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGxzbzogW1wibHNvXCIsIFwic2duXCJdLFxuICAgICAgICBsc3A6IFtcImxzcFwiLCBcInNnblwiXSxcbiAgICAgICAgbHN0OiBbXCJsc3RcIiwgXCJzZ25cIl0sXG4gICAgICAgIGxzeTogW1wibHN5XCIsIFwic2duXCJdLFxuICAgICAgICBsdGc6IFtcImx0Z1wiLCBcImx2XCJdLFxuICAgICAgICBsdnM6IFtcImx2c1wiLCBcImx2XCJdLFxuICAgICAgICBsemg6IFtcImx6aFwiLCBcInpoXCJdLFxuICAgICAgICBtYXg6IFtcIm1heFwiLCBcIm1zXCJdLFxuICAgICAgICBtZGw6IFtcIm1kbFwiLCBcInNnblwiXSxcbiAgICAgICAgbWVvOiBbXCJtZW9cIiwgXCJtc1wiXSxcbiAgICAgICAgbWZhOiBbXCJtZmFcIiwgXCJtc1wiXSxcbiAgICAgICAgbWZiOiBbXCJtZmJcIiwgXCJtc1wiXSxcbiAgICAgICAgbWZzOiBbXCJtZnNcIiwgXCJzZ25cIl0sXG4gICAgICAgIG1pbjogW1wibWluXCIsIFwibXNcIl0sXG4gICAgICAgIG1ucDogW1wibW5wXCIsIFwiemhcIl0sXG4gICAgICAgIG1xZzogW1wibXFnXCIsIFwibXNcIl0sXG4gICAgICAgIG1yZTogW1wibXJlXCIsIFwic2duXCJdLFxuICAgICAgICBtc2Q6IFtcIm1zZFwiLCBcInNnblwiXSxcbiAgICAgICAgbXNpOiBbXCJtc2lcIiwgXCJtc1wiXSxcbiAgICAgICAgbXNyOiBbXCJtc3JcIiwgXCJzZ25cIl0sXG4gICAgICAgIG11aTogW1wibXVpXCIsIFwibXNcIl0sXG4gICAgICAgIG16YzogW1wibXpjXCIsIFwic2duXCJdLFxuICAgICAgICBtemc6IFtcIm16Z1wiLCBcInNnblwiXSxcbiAgICAgICAgbXp5OiBbXCJtenlcIiwgXCJzZ25cIl0sXG4gICAgICAgIG5hbjogW1wibmFuXCIsIFwiemhcIl0sXG4gICAgICAgIG5iczogW1wibmJzXCIsIFwic2duXCJdLFxuICAgICAgICBuY3M6IFtcIm5jc1wiLCBcInNnblwiXSxcbiAgICAgICAgbnNpOiBbXCJuc2lcIiwgXCJzZ25cIl0sXG4gICAgICAgIG5zbDogW1wibnNsXCIsIFwic2duXCJdLFxuICAgICAgICBuc3A6IFtcIm5zcFwiLCBcInNnblwiXSxcbiAgICAgICAgbnNyOiBbXCJuc3JcIiwgXCJzZ25cIl0sXG4gICAgICAgIG56czogW1wibnpzXCIsIFwic2duXCJdLFxuICAgICAgICBva2w6IFtcIm9rbFwiLCBcInNnblwiXSxcbiAgICAgICAgb3JuOiBbXCJvcm5cIiwgXCJtc1wiXSxcbiAgICAgICAgb3JzOiBbXCJvcnNcIiwgXCJtc1wiXSxcbiAgICAgICAgcGVsOiBbXCJwZWxcIiwgXCJtc1wiXSxcbiAgICAgICAgcGdhOiBbXCJwZ2FcIiwgXCJhclwiXSxcbiAgICAgICAgcGtzOiBbXCJwa3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIHBybDogW1wicHJsXCIsIFwic2duXCJdLFxuICAgICAgICBwcno6IFtcInByelwiLCBcInNnblwiXSxcbiAgICAgICAgcHNjOiBbXCJwc2NcIiwgXCJzZ25cIl0sXG4gICAgICAgIHBzZDogW1wicHNkXCIsIFwic2duXCJdLFxuICAgICAgICBwc2U6IFtcInBzZVwiLCBcIm1zXCJdLFxuICAgICAgICBwc2c6IFtcInBzZ1wiLCBcInNnblwiXSxcbiAgICAgICAgcHNsOiBbXCJwc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHBzbzogW1wicHNvXCIsIFwic2duXCJdLFxuICAgICAgICBwc3A6IFtcInBzcFwiLCBcInNnblwiXSxcbiAgICAgICAgcHNyOiBbXCJwc3JcIiwgXCJzZ25cIl0sXG4gICAgICAgIHB5czogW1wicHlzXCIsIFwic2duXCJdLFxuICAgICAgICBybXM6IFtcInJtc1wiLCBcInNnblwiXSxcbiAgICAgICAgcnNpOiBbXCJyc2lcIiwgXCJzZ25cIl0sXG4gICAgICAgIHJzbDogW1wicnNsXCIsIFwic2duXCJdLFxuICAgICAgICBzZGw6IFtcInNkbFwiLCBcInNnblwiXSxcbiAgICAgICAgc2ZiOiBbXCJzZmJcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNmczogW1wic2ZzXCIsIFwic2duXCJdLFxuICAgICAgICBzZ2c6IFtcInNnZ1wiLCBcInNnblwiXSxcbiAgICAgICAgc2d4OiBbXCJzZ3hcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNodTogW1wic2h1XCIsIFwiYXJcIl0sXG4gICAgICAgIHNsZjogW1wic2xmXCIsIFwic2duXCJdLFxuICAgICAgICBzbHM6IFtcInNsc1wiLCBcInNnblwiXSxcbiAgICAgICAgc3FrOiBbXCJzcWtcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNxczogW1wic3FzXCIsIFwic2duXCJdLFxuICAgICAgICBzc2g6IFtcInNzaFwiLCBcImFyXCJdLFxuICAgICAgICBzc3A6IFtcInNzcFwiLCBcInNnblwiXSxcbiAgICAgICAgc3NyOiBbXCJzc3JcIiwgXCJzZ25cIl0sXG4gICAgICAgIHN2azogW1wic3ZrXCIsIFwic2duXCJdLFxuICAgICAgICBzd2M6IFtcInN3Y1wiLCBcInN3XCJdLFxuICAgICAgICBzd2g6IFtcInN3aFwiLCBcInN3XCJdLFxuICAgICAgICBzd2w6IFtcInN3bFwiLCBcInNnblwiXSxcbiAgICAgICAgc3l5OiBbXCJzeXlcIiwgXCJzZ25cIl0sXG4gICAgICAgIHRtdzogW1widG13XCIsIFwibXNcIl0sXG4gICAgICAgIHRzZTogW1widHNlXCIsIFwic2duXCJdLFxuICAgICAgICB0c206IFtcInRzbVwiLCBcInNnblwiXSxcbiAgICAgICAgdHNxOiBbXCJ0c3FcIiwgXCJzZ25cIl0sXG4gICAgICAgIHRzczogW1widHNzXCIsIFwic2duXCJdLFxuICAgICAgICB0c3k6IFtcInRzeVwiLCBcInNnblwiXSxcbiAgICAgICAgdHphOiBbXCJ0emFcIiwgXCJzZ25cIl0sXG4gICAgICAgIHVnbjogW1widWduXCIsIFwic2duXCJdLFxuICAgICAgICB1Z3k6IFtcInVneVwiLCBcInNnblwiXSxcbiAgICAgICAgdWtsOiBbXCJ1a2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHVrczogW1widWtzXCIsIFwic2duXCJdLFxuICAgICAgICB1cms6IFtcInVya1wiLCBcIm1zXCJdLFxuICAgICAgICB1em46IFtcInV6blwiLCBcInV6XCJdLFxuICAgICAgICB1enM6IFtcInV6c1wiLCBcInV6XCJdLFxuICAgICAgICB2Z3Q6IFtcInZndFwiLCBcInNnblwiXSxcbiAgICAgICAgdmtrOiBbXCJ2a2tcIiwgXCJtc1wiXSxcbiAgICAgICAgdmt0OiBbXCJ2a3RcIiwgXCJtc1wiXSxcbiAgICAgICAgdnNpOiBbXCJ2c2lcIiwgXCJzZ25cIl0sXG4gICAgICAgIHZzbDogW1widnNsXCIsIFwic2duXCJdLFxuICAgICAgICB2c3Y6IFtcInZzdlwiLCBcInNnblwiXSxcbiAgICAgICAgd3V1OiBbXCJ3dXVcIiwgXCJ6aFwiXSxcbiAgICAgICAgeGtpOiBbXCJ4a2lcIiwgXCJzZ25cIl0sXG4gICAgICAgIHhtbDogW1wieG1sXCIsIFwic2duXCJdLFxuICAgICAgICB4bW06IFtcInhtbVwiLCBcIm1zXCJdLFxuICAgICAgICB4bXM6IFtcInhtc1wiLCBcInNnblwiXSxcbiAgICAgICAgeWRzOiBbXCJ5ZHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIHlzbDogW1wieXNsXCIsIFwic2duXCJdLFxuICAgICAgICB5dWU6IFtcInl1ZVwiLCBcInpoXCJdLFxuICAgICAgICB6aWI6IFtcInppYlwiLCBcInNnblwiXSxcbiAgICAgICAgemxtOiBbXCJ6bG1cIiwgXCJtc1wiXSxcbiAgICAgICAgem1pOiBbXCJ6bWlcIiwgXCJtc1wiXSxcbiAgICAgICAgenNsOiBbXCJ6c2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHpzbTogW1wienNtXCIsIFwibXNcIl1cbiAgICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgb25seSBhLXogdG8gdXBwZXJjYXNlIGFzIHBlciBzZWN0aW9uIDYuMSBvZiB0aGUgc3BlY1xuICovXG5mdW5jdGlvbiB0b0xhdGluVXBwZXJDYXNlKHN0cikge1xuICAgIHZhciBpID0gc3RyLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGNoID0gc3RyLmNoYXJBdChpKTtcblxuICAgICAgICBpZiAoY2ggPj0gXCJhXCIgJiYgY2ggPD0gXCJ6XCIpIHN0ciA9IHN0ci5zbGljZSgwLCBpKSArIGNoLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoaSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVGhlIElzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyBhYnN0cmFjdCBvcGVyYXRpb24gdmVyaWZpZXMgdGhhdCB0aGUgbG9jYWxlXG4gKiBhcmd1bWVudCAod2hpY2ggbXVzdCBiZSBhIFN0cmluZyB2YWx1ZSlcbiAqXG4gKiAtIHJlcHJlc2VudHMgYSB3ZWxsLWZvcm1lZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnIGFzIHNwZWNpZmllZCBpbiBSRkMgNTY0NiBzZWN0aW9uXG4gKiAgIDIuMSwgb3Igc3VjY2Vzc29yLFxuICogLSBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSB2YXJpYW50IHN1YnRhZ3MsIGFuZFxuICogLSBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSBzaW5nbGV0b24gc3VidGFncy5cbiAqXG4gKiBUaGUgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdHJ1ZSBpZiBsb2NhbGUgY2FuIGJlIGdlbmVyYXRlZCBmcm9tIHRoZSBBQk5GXG4gKiBncmFtbWFyIGluIHNlY3Rpb24gMi4xIG9mIHRoZSBSRkMsIHN0YXJ0aW5nIHdpdGggTGFuZ3VhZ2UtVGFnLCBhbmQgZG9lcyBub3RcbiAqIGNvbnRhaW4gZHVwbGljYXRlIHZhcmlhbnQgb3Igc2luZ2xldG9uIHN1YnRhZ3MgKG90aGVyIHRoYW4gYXMgYSBwcml2YXRlIHVzZVxuICogc3VidGFnKS4gSXQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2UuIFRlcm1pbmFsIHZhbHVlIGNoYXJhY3RlcnMgaW4gdGhlIGdyYW1tYXIgYXJlXG4gKiBpbnRlcnByZXRlZCBhcyB0aGUgVW5pY29kZSBlcXVpdmFsZW50cyBvZiB0aGUgQVNDSUkgb2N0ZXQgdmFsdWVzIGdpdmVuLlxuICovXG5mdW5jdGlvbiAvKiA2LjIuMiAqL0lzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyhsb2NhbGUpIHtcbiAgICAvLyByZXByZXNlbnRzIGEgd2VsbC1mb3JtZWQgQkNQIDQ3IGxhbmd1YWdlIHRhZyBhcyBzcGVjaWZpZWQgaW4gUkZDIDU2NDZcbiAgICBpZiAoIWV4cEJDUDQ3U3ludGF4LnRlc3QobG9jYWxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gZG9lcyBub3QgaW5jbHVkZSBkdXBsaWNhdGUgdmFyaWFudCBzdWJ0YWdzLCBhbmRcbiAgICBpZiAoZXhwVmFyaWFudER1cGVzLnRlc3QobG9jYWxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gZG9lcyBub3QgaW5jbHVkZSBkdXBsaWNhdGUgc2luZ2xldG9uIHN1YnRhZ3MuXG4gICAgaWYgKGV4cFNpbmdsZXRvbkR1cGVzLnRlc3QobG9jYWxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGhlIENhbm9uaWNhbGl6ZUxhbmd1YWdlVGFnIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBjYW5vbmljYWwgYW5kIGNhc2UtXG4gKiByZWd1bGFyaXplZCBmb3JtIG9mIHRoZSBsb2NhbGUgYXJndW1lbnQgKHdoaWNoIG11c3QgYmUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpc1xuICogYSBzdHJ1Y3R1cmFsbHkgdmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZyBhcyB2ZXJpZmllZCBieSB0aGVcbiAqIElzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyBhYnN0cmFjdCBvcGVyYXRpb24pLiBJdCB0YWtlcyB0aGUgc3RlcHNcbiAqIHNwZWNpZmllZCBpbiBSRkMgNTY0NiBzZWN0aW9uIDQuNSwgb3Igc3VjY2Vzc29yLCB0byBicmluZyB0aGUgbGFuZ3VhZ2UgdGFnXG4gKiBpbnRvIGNhbm9uaWNhbCBmb3JtLCBhbmQgdG8gcmVndWxhcml6ZSB0aGUgY2FzZSBvZiB0aGUgc3VidGFncywgYnV0IGRvZXMgbm90XG4gKiB0YWtlIHRoZSBzdGVwcyB0byBicmluZyBhIGxhbmd1YWdlIHRhZyBpbnRvIOKAnGV4dGxhbmcgZm9ybeKAnSBhbmQgdG8gcmVvcmRlclxuICogdmFyaWFudCBzdWJ0YWdzLlxuXG4gKiBUaGUgc3BlY2lmaWNhdGlvbnMgZm9yIGV4dGVuc2lvbnMgdG8gQkNQIDQ3IGxhbmd1YWdlIHRhZ3MsIHN1Y2ggYXMgUkZDIDYwNjcsXG4gKiBtYXkgaW5jbHVkZSBjYW5vbmljYWxpemF0aW9uIHJ1bGVzIGZvciB0aGUgZXh0ZW5zaW9uIHN1YnRhZyBzZXF1ZW5jZXMgdGhleVxuICogZGVmaW5lIHRoYXQgZ28gYmV5b25kIHRoZSBjYW5vbmljYWxpemF0aW9uIHJ1bGVzIG9mIFJGQyA1NjQ2IHNlY3Rpb24gNC41LlxuICogSW1wbGVtZW50YXRpb25zIGFyZSBhbGxvd2VkLCBidXQgbm90IHJlcXVpcmVkLCB0byBhcHBseSB0aGVzZSBhZGRpdGlvbmFsIHJ1bGVzLlxuICovXG5mdW5jdGlvbiAvKiA2LjIuMyAqL0Nhbm9uaWNhbGl6ZUxhbmd1YWdlVGFnKGxvY2FsZSkge1xuICAgIHZhciBtYXRjaCA9IHZvaWQgMCxcbiAgICAgICAgcGFydHMgPSB2b2lkIDA7XG5cbiAgICAvLyBBIGxhbmd1YWdlIHRhZyBpcyBpbiAnY2Fub25pY2FsIGZvcm0nIHdoZW4gdGhlIHRhZyBpcyB3ZWxsLWZvcm1lZFxuICAgIC8vIGFjY29yZGluZyB0byB0aGUgcnVsZXMgaW4gU2VjdGlvbnMgMi4xIGFuZCAyLjJcblxuICAgIC8vIFNlY3Rpb24gMi4xIHNheXMgYWxsIHN1YnRhZ3MgdXNlIGxvd2VyY2FzZS4uLlxuICAgIGxvY2FsZSA9IGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gLi4ud2l0aCAyIGV4Y2VwdGlvbnM6ICd0d28tbGV0dGVyIGFuZCBmb3VyLWxldHRlciBzdWJ0YWdzIHRoYXQgbmVpdGhlclxuICAgIC8vIGFwcGVhciBhdCB0aGUgc3RhcnQgb2YgdGhlIHRhZyBub3Igb2NjdXIgYWZ0ZXIgc2luZ2xldG9ucy4gIFN1Y2ggdHdvLWxldHRlclxuICAgIC8vIHN1YnRhZ3MgYXJlIGFsbCB1cHBlcmNhc2UgKGFzIGluIHRoZSB0YWdzIFwiZW4tQ0EteC1jYVwiIG9yIFwic2duLUJFLUZSXCIpIGFuZFxuICAgIC8vIGZvdXItbGV0dGVyIHN1YnRhZ3MgYXJlIHRpdGxlY2FzZSAoYXMgaW4gdGhlIHRhZyBcImF6LUxhdG4teC1sYXRuXCIpLlxuICAgIHBhcnRzID0gbG9jYWxlLnNwbGl0KCctJyk7XG4gICAgZm9yICh2YXIgaSA9IDEsIG1heCA9IHBhcnRzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIC8vIFR3by1sZXR0ZXIgc3VidGFncyBhcmUgYWxsIHVwcGVyY2FzZVxuICAgICAgICBpZiAocGFydHNbaV0ubGVuZ3RoID09PSAyKSBwYXJ0c1tpXSA9IHBhcnRzW2ldLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gRm91ci1sZXR0ZXIgc3VidGFncyBhcmUgdGl0bGVjYXNlXG4gICAgICAgIGVsc2UgaWYgKHBhcnRzW2ldLmxlbmd0aCA9PT0gNCkgcGFydHNbaV0gPSBwYXJ0c1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnRzW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICAvLyBJcyBpdCBhIHNpbmdsZXRvbj9cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnRzW2ldLmxlbmd0aCA9PT0gMSAmJiBwYXJ0c1tpXSAhPT0gJ3gnKSBicmVhaztcbiAgICB9XG4gICAgbG9jYWxlID0gYXJySm9pbi5jYWxsKHBhcnRzLCAnLScpO1xuXG4gICAgLy8gVGhlIHN0ZXBzIGxhaWQgb3V0IGluIFJGQyA1NjQ2IHNlY3Rpb24gNC41IGFyZSBhcyBmb2xsb3dzOlxuXG4gICAgLy8gMS4gIEV4dGVuc2lvbiBzZXF1ZW5jZXMgYXJlIG9yZGVyZWQgaW50byBjYXNlLWluc2Vuc2l0aXZlIEFTQ0lJIG9yZGVyXG4gICAgLy8gICAgIGJ5IHNpbmdsZXRvbiBzdWJ0YWcuXG4gICAgaWYgKChtYXRjaCA9IGxvY2FsZS5tYXRjaChleHBFeHRTZXF1ZW5jZXMpKSAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFRoZSBidWlsdC1pbiBzb3J0KCkgc29ydHMgYnkgQVNDSUkgb3JkZXIsIHNvIHVzZSB0aGF0XG4gICAgICAgIG1hdGNoLnNvcnQoKTtcblxuICAgICAgICAvLyBSZXBsYWNlIGFsbCBleHRlbnNpb25zIHdpdGggdGhlIGpvaW5lZCwgc29ydGVkIGFycmF5XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZS5yZXBsYWNlKFJlZ0V4cCgnKD86JyArIGV4cEV4dFNlcXVlbmNlcy5zb3VyY2UgKyAnKSsnLCAnaScpLCBhcnJKb2luLmNhbGwobWF0Y2gsICcnKSk7XG4gICAgfVxuXG4gICAgLy8gMi4gIFJlZHVuZGFudCBvciBncmFuZGZhdGhlcmVkIHRhZ3MgYXJlIHJlcGxhY2VkIGJ5IHRoZWlyICdQcmVmZXJyZWQtXG4gICAgLy8gICAgIFZhbHVlJywgaWYgdGhlcmUgaXMgb25lLlxuICAgIGlmIChob3AuY2FsbChyZWR1bmRhbnRUYWdzLnRhZ3MsIGxvY2FsZSkpIGxvY2FsZSA9IHJlZHVuZGFudFRhZ3MudGFnc1tsb2NhbGVdO1xuXG4gICAgLy8gMy4gIFN1YnRhZ3MgYXJlIHJlcGxhY2VkIGJ5IHRoZWlyICdQcmVmZXJyZWQtVmFsdWUnLCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgLy8gICAgIEZvciBleHRsYW5ncywgdGhlIG9yaWdpbmFsIHByaW1hcnkgbGFuZ3VhZ2Ugc3VidGFnIGlzIGFsc29cbiAgICAvLyAgICAgcmVwbGFjZWQgaWYgdGhlcmUgaXMgYSBwcmltYXJ5IGxhbmd1YWdlIHN1YnRhZyBpbiB0aGUgJ1ByZWZlcnJlZC1cbiAgICAvLyAgICAgVmFsdWUnLlxuICAgIHBhcnRzID0gbG9jYWxlLnNwbGl0KCctJyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDEsIF9tYXggPSBwYXJ0cy5sZW5ndGg7IF9pIDwgX21heDsgX2krKykge1xuICAgICAgICBpZiAoaG9wLmNhbGwocmVkdW5kYW50VGFncy5zdWJ0YWdzLCBwYXJ0c1tfaV0pKSBwYXJ0c1tfaV0gPSByZWR1bmRhbnRUYWdzLnN1YnRhZ3NbcGFydHNbX2ldXTtlbHNlIGlmIChob3AuY2FsbChyZWR1bmRhbnRUYWdzLmV4dExhbmcsIHBhcnRzW19pXSkpIHtcbiAgICAgICAgICAgIHBhcnRzW19pXSA9IHJlZHVuZGFudFRhZ3MuZXh0TGFuZ1twYXJ0c1tfaV1dWzBdO1xuXG4gICAgICAgICAgICAvLyBGb3IgZXh0bGFuZyB0YWdzLCB0aGUgcHJlZml4IG5lZWRzIHRvIGJlIHJlbW92ZWQgaWYgaXQgaXMgcmVkdW5kYW50XG4gICAgICAgICAgICBpZiAoX2kgPT09IDEgJiYgcmVkdW5kYW50VGFncy5leHRMYW5nW3BhcnRzWzFdXVsxXSA9PT0gcGFydHNbMF0pIHtcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGFyclNsaWNlLmNhbGwocGFydHMsIF9pKyspO1xuICAgICAgICAgICAgICAgIF9tYXggLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnJKb2luLmNhbGwocGFydHMsICctJyk7XG59XG5cbi8qKlxuICogVGhlIERlZmF1bHRMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgYSBTdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZVxuICogc3RydWN0dXJhbGx5IHZhbGlkICg2LjIuMikgYW5kIGNhbm9uaWNhbGl6ZWQgKDYuMi4zKSBCQ1AgNDcgbGFuZ3VhZ2UgdGFnIGZvciB0aGVcbiAqIGhvc3QgZW52aXJvbm1lbnTigJlzIGN1cnJlbnQgbG9jYWxlLlxuICovXG5mdW5jdGlvbiAvKiA2LjIuNCAqL0RlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG59XG5cbi8vIFNlY3QgNi4zIEN1cnJlbmN5IENvZGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgZXhwQ3VycmVuY3lDb2RlID0gL15bQS1aXXszfSQvO1xuXG4vKipcbiAqIFRoZSBJc1dlbGxGb3JtZWRDdXJyZW5jeUNvZGUgYWJzdHJhY3Qgb3BlcmF0aW9uIHZlcmlmaWVzIHRoYXQgdGhlIGN1cnJlbmN5IGFyZ3VtZW50XG4gKiAoYWZ0ZXIgY29udmVyc2lvbiB0byBhIFN0cmluZyB2YWx1ZSkgcmVwcmVzZW50cyBhIHdlbGwtZm9ybWVkIDMtbGV0dGVyIElTTyBjdXJyZW5jeVxuICogY29kZS4gVGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIC8qIDYuMy4xICovSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlKGN1cnJlbmN5KSB7XG4gICAgLy8gMS4gTGV0IGBjYCBiZSBUb1N0cmluZyhjdXJyZW5jeSlcbiAgICB2YXIgYyA9IFN0cmluZyhjdXJyZW5jeSk7XG5cbiAgICAvLyAyLiBMZXQgYG5vcm1hbGl6ZWRgIGJlIHRoZSByZXN1bHQgb2YgbWFwcGluZyBjIHRvIHVwcGVyIGNhc2UgYXMgZGVzY3JpYmVkXG4gICAgLy8gICAgaW4gNi4xLlxuICAgIHZhciBub3JtYWxpemVkID0gdG9MYXRpblVwcGVyQ2FzZShjKTtcblxuICAgIC8vIDMuIElmIHRoZSBzdHJpbmcgbGVuZ3RoIG9mIG5vcm1hbGl6ZWQgaXMgbm90IDMsIHJldHVybiBmYWxzZS5cbiAgICAvLyA0LiBJZiBub3JtYWxpemVkIGNvbnRhaW5zIGFueSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIHJhbmdlIFwiQVwiIHRvIFwiWlwiXG4gICAgLy8gICAgKFUrMDA0MSB0byBVKzAwNUEpLCByZXR1cm4gZmFsc2UuXG4gICAgaWYgKGV4cEN1cnJlbmN5Q29kZS50ZXN0KG5vcm1hbGl6ZWQpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gNS4gUmV0dXJuIHRydWVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGV4cFVuaWNvZGVFeFNlcSA9IC8tdSg/Oi1bMC05YS16XXsyLDh9KSsvZ2k7IC8vIFNlZSBgZXh0ZW5zaW9uYCBiZWxvd1xuXG5mdW5jdGlvbiAvKiA5LjIuMSAqL0Nhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcykge1xuICAgIC8vIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gQ2Fub25pY2FsaXplTG9jYWxlTGlzdCB0YWtlcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuXG4gICAgLy8gMS4gSWYgbG9jYWxlcyBpcyB1bmRlZmluZWQsIHRoZW4gYS4gUmV0dXJuIGEgbmV3IGVtcHR5IExpc3RcbiAgICBpZiAobG9jYWxlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IExpc3QoKTtcblxuICAgIC8vIDIuIExldCBzZWVuIGJlIGEgbmV3IGVtcHR5IExpc3QuXG4gICAgdmFyIHNlZW4gPSBuZXcgTGlzdCgpO1xuXG4gICAgLy8gMy4gSWYgbG9jYWxlcyBpcyBhIFN0cmluZyB2YWx1ZSwgdGhlblxuICAgIC8vICAgIGEuIExldCBsb2NhbGVzIGJlIGEgbmV3IGFycmF5IGNyZWF0ZWQgYXMgaWYgYnkgdGhlIGV4cHJlc3Npb24gbmV3XG4gICAgLy8gICAgQXJyYXkobG9jYWxlcykgd2hlcmUgQXJyYXkgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIHdpdGhcbiAgICAvLyAgICB0aGF0IG5hbWUgYW5kIGxvY2FsZXMgaXMgdGhlIHZhbHVlIG9mIGxvY2FsZXMuXG4gICAgbG9jYWxlcyA9IHR5cGVvZiBsb2NhbGVzID09PSAnc3RyaW5nJyA/IFtsb2NhbGVzXSA6IGxvY2FsZXM7XG5cbiAgICAvLyA0LiBMZXQgTyBiZSBUb09iamVjdChsb2NhbGVzKS5cbiAgICB2YXIgTyA9IHRvT2JqZWN0KGxvY2FsZXMpO1xuXG4gICAgLy8gNS4gTGV0IGxlblZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICBPIHdpdGggdGhlIGFyZ3VtZW50IFwibGVuZ3RoXCIuXG4gICAgLy8gNi4gTGV0IGxlbiBiZSBUb1VpbnQzMihsZW5WYWx1ZSkuXG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcblxuICAgIC8vIDcuIExldCBrIGJlIDAuXG4gICAgdmFyIGsgPSAwO1xuXG4gICAgLy8gOC4gUmVwZWF0LCB3aGlsZSBrIDwgbGVuXG4gICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgLy8gYS4gTGV0IFBrIGJlIFRvU3RyaW5nKGspLlxuICAgICAgICB2YXIgUGsgPSBTdHJpbmcoayk7XG5cbiAgICAgICAgLy8gYi4gTGV0IGtQcmVzZW50IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tIYXNQcm9wZXJ0eV1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBPIHdpdGggYXJndW1lbnQgUGsuXG4gICAgICAgIHZhciBrUHJlc2VudCA9IFBrIGluIE87XG5cbiAgICAgICAgLy8gYy4gSWYga1ByZXNlbnQgaXMgdHJ1ZSwgdGhlblxuICAgICAgICBpZiAoa1ByZXNlbnQpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBrVmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsXG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kIG9mIE8gd2l0aCBhcmd1bWVudCBQay5cbiAgICAgICAgICAgIHZhciBrVmFsdWUgPSBPW1BrXTtcblxuICAgICAgICAgICAgLy8gaWkuIElmIHRoZSB0eXBlIG9mIGtWYWx1ZSBpcyBub3QgU3RyaW5nIG9yIE9iamVjdCwgdGhlbiB0aHJvdyBhXG4gICAgICAgICAgICAvLyAgICAgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChrVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGtWYWx1ZSAhPT0gJ3N0cmluZycgJiYgKHR5cGVvZiBrVmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogYmFiZWxIZWxwZXJzJDFbXCJ0eXBlb2ZcIl0oa1ZhbHVlKSkgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJpbmcgb3IgT2JqZWN0IHR5cGUgZXhwZWN0ZWQnKTtcblxuICAgICAgICAgICAgLy8gaWlpLiBMZXQgdGFnIGJlIFRvU3RyaW5nKGtWYWx1ZSkuXG4gICAgICAgICAgICB2YXIgdGFnID0gU3RyaW5nKGtWYWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIGl2LiBJZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgLy8gICAgIElzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyAoZGVmaW5lZCBpbiA2LjIuMiksIHBhc3NpbmcgdGFnIGFzXG4gICAgICAgICAgICAvLyAgICAgdGhlIGFyZ3VtZW50LCBpcyBmYWxzZSwgdGhlbiB0aHJvdyBhIFJhbmdlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKCFJc1N0cnVjdHVyYWxseVZhbGlkTGFuZ3VhZ2VUYWcodGFnKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInXCIgKyB0YWcgKyBcIicgaXMgbm90IGEgc3RydWN0dXJhbGx5IHZhbGlkIGxhbmd1YWdlIHRhZ1wiKTtcblxuICAgICAgICAgICAgLy8gdi4gTGV0IHRhZyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgLy8gICAgQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcgKGRlZmluZWQgaW4gNi4yLjMpLCBwYXNzaW5nIHRhZyBhcyB0aGVcbiAgICAgICAgICAgIC8vICAgIGFyZ3VtZW50LlxuICAgICAgICAgICAgdGFnID0gQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcodGFnKTtcblxuICAgICAgICAgICAgLy8gdmkuIElmIHRhZyBpcyBub3QgYW4gZWxlbWVudCBvZiBzZWVuLCB0aGVuIGFwcGVuZCB0YWcgYXMgdGhlIGxhc3RcbiAgICAgICAgICAgIC8vICAgICBlbGVtZW50IG9mIHNlZW4uXG4gICAgICAgICAgICBpZiAoYXJySW5kZXhPZi5jYWxsKHNlZW4sIHRhZykgPT09IC0xKSBhcnJQdXNoLmNhbGwoc2VlbiwgdGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGQuIEluY3JlYXNlIGsgYnkgMS5cbiAgICAgICAgaysrO1xuICAgIH1cblxuICAgIC8vIDkuIFJldHVybiBzZWVuLlxuICAgIHJldHVybiBzZWVuO1xufVxuXG4vKipcbiAqIFRoZSBCZXN0QXZhaWxhYmxlTG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvbiBjb21wYXJlcyB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqIGxvY2FsZSwgd2hpY2ggbXVzdCBiZSBhIFN0cmluZyB2YWx1ZSB3aXRoIGEgc3RydWN0dXJhbGx5IHZhbGlkIGFuZFxuICogY2Fub25pY2FsaXplZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLCBhZ2FpbnN0IHRoZSBsb2NhbGVzIGluIGF2YWlsYWJsZUxvY2FsZXMgYW5kXG4gKiByZXR1cm5zIGVpdGhlciB0aGUgbG9uZ2VzdCBub24tZW1wdHkgcHJlZml4IG9mIGxvY2FsZSB0aGF0IGlzIGFuIGVsZW1lbnQgb2ZcbiAqIGF2YWlsYWJsZUxvY2FsZXMsIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnQuIEl0IHVzZXMgdGhlXG4gKiBmYWxsYmFjayBtZWNoYW5pc20gb2YgUkZDIDQ2NDcsIHNlY3Rpb24gMy40LiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogOS4yLjIgKi9CZXN0QXZhaWxhYmxlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIGxvY2FsZSkge1xuICAgIC8vIDEuIExldCBjYW5kaWRhdGUgYmUgbG9jYWxlXG4gICAgdmFyIGNhbmRpZGF0ZSA9IGxvY2FsZTtcblxuICAgIC8vIDIuIFJlcGVhdFxuICAgIHdoaWxlIChjYW5kaWRhdGUpIHtcbiAgICAgICAgLy8gYS4gSWYgYXZhaWxhYmxlTG9jYWxlcyBjb250YWlucyBhbiBlbGVtZW50IGVxdWFsIHRvIGNhbmRpZGF0ZSwgdGhlbiByZXR1cm5cbiAgICAgICAgLy8gY2FuZGlkYXRlLlxuICAgICAgICBpZiAoYXJySW5kZXhPZi5jYWxsKGF2YWlsYWJsZUxvY2FsZXMsIGNhbmRpZGF0ZSkgPiAtMSkgcmV0dXJuIGNhbmRpZGF0ZTtcblxuICAgICAgICAvLyBiLiBMZXQgcG9zIGJlIHRoZSBjaGFyYWN0ZXIgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBcIi1cIlxuICAgICAgICAvLyAoVSswMDJEKSB3aXRoaW4gY2FuZGlkYXRlLiBJZiB0aGF0IGNoYXJhY3RlciBkb2VzIG5vdCBvY2N1ciwgcmV0dXJuXG4gICAgICAgIC8vIHVuZGVmaW5lZC5cbiAgICAgICAgdmFyIHBvcyA9IGNhbmRpZGF0ZS5sYXN0SW5kZXhPZignLScpO1xuXG4gICAgICAgIGlmIChwb3MgPCAwKSByZXR1cm47XG5cbiAgICAgICAgLy8gYy4gSWYgcG9zIOKJpSAyIGFuZCB0aGUgY2hhcmFjdGVyIFwiLVwiIG9jY3VycyBhdCBpbmRleCBwb3MtMiBvZiBjYW5kaWRhdGUsXG4gICAgICAgIC8vICAgIHRoZW4gZGVjcmVhc2UgcG9zIGJ5IDIuXG4gICAgICAgIGlmIChwb3MgPj0gMiAmJiBjYW5kaWRhdGUuY2hhckF0KHBvcyAtIDIpID09PSAnLScpIHBvcyAtPSAyO1xuXG4gICAgICAgIC8vIGQuIExldCBjYW5kaWRhdGUgYmUgdGhlIHN1YnN0cmluZyBvZiBjYW5kaWRhdGUgZnJvbSBwb3NpdGlvbiAwLCBpbmNsdXNpdmUsXG4gICAgICAgIC8vICAgIHRvIHBvc2l0aW9uIHBvcywgZXhjbHVzaXZlLlxuICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUuc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBMb29rdXBNYXRjaGVyIGFic3RyYWN0IG9wZXJhdGlvbiBjb21wYXJlcyByZXF1ZXN0ZWRMb2NhbGVzLCB3aGljaCBtdXN0IGJlXG4gKiBhIExpc3QgYXMgcmV0dXJuZWQgYnkgQ2Fub25pY2FsaXplTG9jYWxlTGlzdCwgYWdhaW5zdCB0aGUgbG9jYWxlcyBpblxuICogYXZhaWxhYmxlTG9jYWxlcyBhbmQgZGV0ZXJtaW5lcyB0aGUgYmVzdCBhdmFpbGFibGUgbGFuZ3VhZ2UgdG8gbWVldCB0aGVcbiAqIHJlcXVlc3QuIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiAvKiA5LjIuMyAqL0xvb2t1cE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIC8vIDEuIExldCBpIGJlIDAuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLy8gMi4gTGV0IGxlbiBiZSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgdmFyIGxlbiA9IHJlcXVlc3RlZExvY2FsZXMubGVuZ3RoO1xuXG4gICAgLy8gMy4gTGV0IGF2YWlsYWJsZUxvY2FsZSBiZSB1bmRlZmluZWQuXG4gICAgdmFyIGF2YWlsYWJsZUxvY2FsZSA9IHZvaWQgMDtcblxuICAgIHZhciBsb2NhbGUgPSB2b2lkIDAsXG4gICAgICAgIG5vRXh0ZW5zaW9uc0xvY2FsZSA9IHZvaWQgMDtcblxuICAgIC8vIDQuIFJlcGVhdCB3aGlsZSBpIDwgbGVuIGFuZCBhdmFpbGFibGVMb2NhbGUgaXMgdW5kZWZpbmVkOlxuICAgIHdoaWxlIChpIDwgbGVuICYmICFhdmFpbGFibGVMb2NhbGUpIHtcbiAgICAgICAgLy8gYS4gTGV0IGxvY2FsZSBiZSB0aGUgZWxlbWVudCBvZiByZXF1ZXN0ZWRMb2NhbGVzIGF0IDAtb3JpZ2luZWQgbGlzdFxuICAgICAgICAvLyAgICBwb3NpdGlvbiBpLlxuICAgICAgICBsb2NhbGUgPSByZXF1ZXN0ZWRMb2NhbGVzW2ldO1xuXG4gICAgICAgIC8vIGIuIExldCBub0V4dGVuc2lvbnNMb2NhbGUgYmUgdGhlIFN0cmluZyB2YWx1ZSB0aGF0IGlzIGxvY2FsZSB3aXRoIGFsbFxuICAgICAgICAvLyAgICBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2VzIHJlbW92ZWQuXG4gICAgICAgIG5vRXh0ZW5zaW9uc0xvY2FsZSA9IFN0cmluZyhsb2NhbGUpLnJlcGxhY2UoZXhwVW5pY29kZUV4U2VxLCAnJyk7XG5cbiAgICAgICAgLy8gYy4gTGV0IGF2YWlsYWJsZUxvY2FsZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlXG4gICAgICAgIC8vICAgIEJlc3RBdmFpbGFibGVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi4yKSB3aXRoXG4gICAgICAgIC8vICAgIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZCBub0V4dGVuc2lvbnNMb2NhbGUuXG4gICAgICAgIGF2YWlsYWJsZUxvY2FsZSA9IEJlc3RBdmFpbGFibGVMb2NhbGUoYXZhaWxhYmxlTG9jYWxlcywgbm9FeHRlbnNpb25zTG9jYWxlKTtcblxuICAgICAgICAvLyBkLiBJbmNyZWFzZSBpIGJ5IDEuXG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyA1LiBMZXQgcmVzdWx0IGJlIGEgbmV3IFJlY29yZC5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IFJlY29yZCgpO1xuXG4gICAgLy8gNi4gSWYgYXZhaWxhYmxlTG9jYWxlIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICBpZiAoYXZhaWxhYmxlTG9jYWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gU2V0IHJlc3VsdC5bW2xvY2FsZV1dIHRvIGF2YWlsYWJsZUxvY2FsZS5cbiAgICAgICAgcmVzdWx0WydbW2xvY2FsZV1dJ10gPSBhdmFpbGFibGVMb2NhbGU7XG5cbiAgICAgICAgLy8gYi4gSWYgbG9jYWxlIGFuZCBub0V4dGVuc2lvbnNMb2NhbGUgYXJlIG5vdCB0aGUgc2FtZSBTdHJpbmcgdmFsdWUsIHRoZW5cbiAgICAgICAgaWYgKFN0cmluZyhsb2NhbGUpICE9PSBTdHJpbmcobm9FeHRlbnNpb25zTG9jYWxlKSkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGV4dGVuc2lvbiBiZSB0aGUgU3RyaW5nIHZhbHVlIGNvbnNpc3Rpbmcgb2YgdGhlIGZpcnN0XG4gICAgICAgICAgICAvLyAgICBzdWJzdHJpbmcgb2YgbG9jYWxlIHRoYXQgaXMgYSBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2UuXG4gICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gbG9jYWxlLm1hdGNoKGV4cFVuaWNvZGVFeFNlcSlbMF07XG5cbiAgICAgICAgICAgIC8vIGlpLiBMZXQgZXh0ZW5zaW9uSW5kZXggYmUgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiBvZiB0aGUgaW5pdGlhbFxuICAgICAgICAgICAgLy8gICAgIFwiLVwiIG9mIHRoZSBmaXJzdCBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2Ugd2l0aGluIGxvY2FsZS5cbiAgICAgICAgICAgIHZhciBleHRlbnNpb25JbmRleCA9IGxvY2FsZS5pbmRleE9mKCctdS0nKTtcblxuICAgICAgICAgICAgLy8gaWlpLiBTZXQgcmVzdWx0LltbZXh0ZW5zaW9uXV0gdG8gZXh0ZW5zaW9uLlxuICAgICAgICAgICAgcmVzdWx0WydbW2V4dGVuc2lvbl1dJ10gPSBleHRlbnNpb247XG5cbiAgICAgICAgICAgIC8vIGl2LiBTZXQgcmVzdWx0LltbZXh0ZW5zaW9uSW5kZXhdXSB0byBleHRlbnNpb25JbmRleC5cbiAgICAgICAgICAgIHJlc3VsdFsnW1tleHRlbnNpb25JbmRleF1dJ10gPSBleHRlbnNpb25JbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA3LiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBTZXQgcmVzdWx0LltbbG9jYWxlXV0gdG8gdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBEZWZhdWx0TG9jYWxlIGFic3RyYWN0XG4gICAgICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA2LjIuNCkuXG4gICAgICAgIHJlc3VsdFsnW1tsb2NhbGVdXSddID0gRGVmYXVsdExvY2FsZSgpO1xuXG4gICAgLy8gOC4gUmV0dXJuIHJlc3VsdFxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIEJlc3RGaXRNYXRjaGVyIGFic3RyYWN0IG9wZXJhdGlvbiBjb21wYXJlcyByZXF1ZXN0ZWRMb2NhbGVzLCB3aGljaCBtdXN0IGJlXG4gKiBhIExpc3QgYXMgcmV0dXJuZWQgYnkgQ2Fub25pY2FsaXplTG9jYWxlTGlzdCwgYWdhaW5zdCB0aGUgbG9jYWxlcyBpblxuICogYXZhaWxhYmxlTG9jYWxlcyBhbmQgZGV0ZXJtaW5lcyB0aGUgYmVzdCBhdmFpbGFibGUgbGFuZ3VhZ2UgdG8gbWVldCB0aGVcbiAqIHJlcXVlc3QuIFRoZSBhbGdvcml0aG0gaXMgaW1wbGVtZW50YXRpb24gZGVwZW5kZW50LCBidXQgc2hvdWxkIHByb2R1Y2UgcmVzdWx0c1xuICogdGhhdCBhIHR5cGljYWwgdXNlciBvZiB0aGUgcmVxdWVzdGVkIGxvY2FsZXMgd291bGQgcGVyY2VpdmUgYXMgYXQgbGVhc3QgYXNcbiAqIGdvb2QgYXMgdGhvc2UgcHJvZHVjZWQgYnkgdGhlIExvb2t1cE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uLiBPcHRpb25zXG4gKiBzcGVjaWZpZWQgdGhyb3VnaCBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2VzIG11c3QgYmUgaWdub3JlZCBieSB0aGVcbiAqIGFsZ29yaXRobS4gSW5mb3JtYXRpb24gYWJvdXQgc3VjaCBzdWJzZXF1ZW5jZXMgaXMgcmV0dXJuZWQgc2VwYXJhdGVseS5cbiAqIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gcmV0dXJucyBhIHJlY29yZCB3aXRoIGEgW1tsb2NhbGVdXSBmaWVsZCwgd2hvc2UgdmFsdWVcbiAqIGlzIHRoZSBsYW5ndWFnZSB0YWcgb2YgdGhlIHNlbGVjdGVkIGxvY2FsZSwgd2hpY2ggbXVzdCBiZSBhbiBlbGVtZW50IG9mXG4gKiBhdmFpbGFibGVMb2NhbGVzLiBJZiB0aGUgbGFuZ3VhZ2UgdGFnIG9mIHRoZSByZXF1ZXN0IGxvY2FsZSB0aGF0IGxlZCB0byB0aGVcbiAqIHNlbGVjdGVkIGxvY2FsZSBjb250YWluZWQgYSBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2UsIHRoZW4gdGhlXG4gKiByZXR1cm5lZCByZWNvcmQgYWxzbyBjb250YWlucyBhbiBbW2V4dGVuc2lvbl1dIGZpZWxkIHdob3NlIHZhbHVlIGlzIHRoZSBmaXJzdFxuICogVW5pY29kZSBsb2NhbGUgZXh0ZW5zaW9uIHNlcXVlbmNlLCBhbmQgYW4gW1tleHRlbnNpb25JbmRleF1dIGZpZWxkIHdob3NlIHZhbHVlXG4gKiBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZSB3aXRoaW4gdGhlIHJlcXVlc3RcbiAqIGxvY2FsZSBsYW5ndWFnZSB0YWcuXG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi40ICovQmVzdEZpdE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIHJldHVybiBMb29rdXBNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xufVxuXG4vKipcbiAqIFRoZSBSZXNvbHZlTG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvbiBjb21wYXJlcyBhIEJDUCA0NyBsYW5ndWFnZSBwcmlvcml0eSBsaXN0XG4gKiByZXF1ZXN0ZWRMb2NhbGVzIGFnYWluc3QgdGhlIGxvY2FsZXMgaW4gYXZhaWxhYmxlTG9jYWxlcyBhbmQgZGV0ZXJtaW5lcyB0aGVcbiAqIGJlc3QgYXZhaWxhYmxlIGxhbmd1YWdlIHRvIG1lZXQgdGhlIHJlcXVlc3QuIGF2YWlsYWJsZUxvY2FsZXMgYW5kXG4gKiByZXF1ZXN0ZWRMb2NhbGVzIG11c3QgYmUgcHJvdmlkZWQgYXMgTGlzdCB2YWx1ZXMsIG9wdGlvbnMgYXMgYSBSZWNvcmQuXG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi41ICovUmVzb2x2ZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zLCByZWxldmFudEV4dGVuc2lvbktleXMsIGxvY2FsZURhdGEpIHtcbiAgICBpZiAoYXZhaWxhYmxlTG9jYWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdObyBsb2NhbGUgZGF0YSBoYXMgYmVlbiBwcm92aWRlZCBmb3IgdGhpcyBvYmplY3QgeWV0LicpO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICAgIC8vIDEuIExldCBtYXRjaGVyIGJlIHRoZSB2YWx1ZSBvZiBvcHRpb25zLltbbG9jYWxlTWF0Y2hlcl1dLlxuICAgIHZhciBtYXRjaGVyID0gb3B0aW9uc1snW1tsb2NhbGVNYXRjaGVyXV0nXTtcblxuICAgIHZhciByID0gdm9pZCAwO1xuXG4gICAgLy8gMi4gSWYgbWF0Y2hlciBpcyBcImxvb2t1cFwiLCB0aGVuXG4gICAgaWYgKG1hdGNoZXIgPT09ICdsb29rdXAnKVxuICAgICAgICAvLyBhLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIExvb2t1cE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi4zKSB3aXRoIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZFxuICAgICAgICAvLyAgICByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICByID0gTG9va3VwTWF0Y2hlcihhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKTtcblxuICAgICAgICAvLyAzLiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEJlc3RGaXRNYXRjaGVyIGFic3RyYWN0XG4gICAgICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuNCkgd2l0aCBhcmd1bWVudHMgYXZhaWxhYmxlTG9jYWxlcyBhbmRcbiAgICAgICAgLy8gICAgcmVxdWVzdGVkTG9jYWxlcy5cbiAgICAgICAgciA9IEJlc3RGaXRNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xuXG4gICAgLy8gNC4gTGV0IGZvdW5kTG9jYWxlIGJlIHRoZSB2YWx1ZSBvZiByLltbbG9jYWxlXV0uXG4gICAgdmFyIGZvdW5kTG9jYWxlID0gclsnW1tsb2NhbGVdXSddO1xuXG4gICAgdmFyIGV4dGVuc2lvblN1YnRhZ3MgPSB2b2lkIDAsXG4gICAgICAgIGV4dGVuc2lvblN1YnRhZ3NMZW5ndGggPSB2b2lkIDA7XG5cbiAgICAvLyA1LiBJZiByIGhhcyBhbiBbW2V4dGVuc2lvbl1dIGZpZWxkLCB0aGVuXG4gICAgaWYgKGhvcC5jYWxsKHIsICdbW2V4dGVuc2lvbl1dJykpIHtcbiAgICAgICAgLy8gYS4gTGV0IGV4dGVuc2lvbiBiZSB0aGUgdmFsdWUgb2Ygci5bW2V4dGVuc2lvbl1dLlxuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gclsnW1tleHRlbnNpb25dXSddO1xuICAgICAgICAvLyBiLiBMZXQgc3BsaXQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIG9iamVjdCBkZWZpbmVkIGluIEVTNSxcbiAgICAgICAgLy8gICAgMTUuNS40LjE0LlxuICAgICAgICB2YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuICAgICAgICAvLyBjLiBMZXQgZXh0ZW5zaW9uU3VidGFncyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBzcGxpdCB3aXRoIGV4dGVuc2lvbiBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnRcbiAgICAgICAgLy8gICAgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBcIi1cIi5cbiAgICAgICAgZXh0ZW5zaW9uU3VidGFncyA9IHNwbGl0LmNhbGwoZXh0ZW5zaW9uLCAnLScpO1xuICAgICAgICAvLyBkLiBMZXQgZXh0ZW5zaW9uU3VidGFnc0xlbmd0aCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV1cbiAgICAgICAgLy8gICAgaW50ZXJuYWwgbWV0aG9kIG9mIGV4dGVuc2lvblN1YnRhZ3Mgd2l0aCBhcmd1bWVudCBcImxlbmd0aFwiLlxuICAgICAgICBleHRlbnNpb25TdWJ0YWdzTGVuZ3RoID0gZXh0ZW5zaW9uU3VidGFncy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gNi4gTGV0IHJlc3VsdCBiZSBhIG5ldyBSZWNvcmQuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBSZWNvcmQoKTtcblxuICAgIC8vIDcuIFNldCByZXN1bHQuW1tkYXRhTG9jYWxlXV0gdG8gZm91bmRMb2NhbGUuXG4gICAgcmVzdWx0WydbW2RhdGFMb2NhbGVdXSddID0gZm91bmRMb2NhbGU7XG5cbiAgICAvLyA4LiBMZXQgc3VwcG9ydGVkRXh0ZW5zaW9uIGJlIFwiLXVcIi5cbiAgICB2YXIgc3VwcG9ydGVkRXh0ZW5zaW9uID0gJy11JztcbiAgICAvLyA5LiBMZXQgaSBiZSAwLlxuICAgIHZhciBpID0gMDtcbiAgICAvLyAxMC4gTGV0IGxlbiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgIHJlbGV2YW50RXh0ZW5zaW9uS2V5cyB3aXRoIGFyZ3VtZW50IFwibGVuZ3RoXCIuXG4gICAgdmFyIGxlbiA9IHJlbGV2YW50RXh0ZW5zaW9uS2V5cy5sZW5ndGg7XG5cbiAgICAvLyAxMSBSZXBlYXQgd2hpbGUgaSA8IGxlbjpcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQga2V5IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAgcmVsZXZhbnRFeHRlbnNpb25LZXlzIHdpdGggYXJndW1lbnQgVG9TdHJpbmcoaSkuXG4gICAgICAgIHZhciBrZXkgPSByZWxldmFudEV4dGVuc2lvbktleXNbaV07XG4gICAgICAgIC8vIGIuIExldCBmb3VuZExvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBsb2NhbGVEYXRhIHdpdGggdGhlIGFyZ3VtZW50IGZvdW5kTG9jYWxlLlxuICAgICAgICB2YXIgZm91bmRMb2NhbGVEYXRhID0gbG9jYWxlRGF0YVtmb3VuZExvY2FsZV07XG4gICAgICAgIC8vIGMuIExldCBrZXlMb2NhbGVEYXRhIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbFxuICAgICAgICAvLyAgICBtZXRob2Qgb2YgZm91bmRMb2NhbGVEYXRhIHdpdGggdGhlIGFyZ3VtZW50IGtleS5cbiAgICAgICAgdmFyIGtleUxvY2FsZURhdGEgPSBmb3VuZExvY2FsZURhdGFba2V5XTtcbiAgICAgICAgLy8gZC4gTGV0IHZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAga2V5TG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IFwiMFwiLlxuICAgICAgICB2YXIgdmFsdWUgPSBrZXlMb2NhbGVEYXRhWycwJ107XG4gICAgICAgIC8vIGUuIExldCBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiBiZSBcIlwiLlxuICAgICAgICB2YXIgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gPSAnJztcbiAgICAgICAgLy8gZi4gTGV0IGluZGV4T2YgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIG9iamVjdCBkZWZpbmVkIGluXG4gICAgICAgIC8vICAgIEVTNSwgMTUuNC40LjE0LlxuICAgICAgICB2YXIgaW5kZXhPZiA9IGFyckluZGV4T2Y7XG5cbiAgICAgICAgLy8gZy4gSWYgZXh0ZW5zaW9uU3VidGFncyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmIChleHRlbnNpb25TdWJ0YWdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBrZXlQb3MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbFxuICAgICAgICAgICAgLy8gICAgbWV0aG9kIG9mIGluZGV4T2Ygd2l0aCBleHRlbnNpb25TdWJ0YWdzIGFzIHRoZSB0aGlzIHZhbHVlIGFuZFxuICAgICAgICAgICAgLy8gYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBrZXkuXG4gICAgICAgICAgICB2YXIga2V5UG9zID0gaW5kZXhPZi5jYWxsKGV4dGVuc2lvblN1YnRhZ3MsIGtleSk7XG5cbiAgICAgICAgICAgIC8vIGlpLiBJZiBrZXlQb3Mg4omgIC0xLCB0aGVuXG4gICAgICAgICAgICBpZiAoa2V5UG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIDEuIElmIGtleVBvcyArIDEgPCBleHRlbnNpb25TdWJ0YWdzTGVuZ3RoIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAgICAgICAgIC8vICAgIGV4dGVuc2lvblN1YnRhZ3Mgd2l0aCBhcmd1bWVudCBUb1N0cmluZyhrZXlQb3MgKzEpIGlzIGdyZWF0ZXJcbiAgICAgICAgICAgICAgICAvLyAgICB0aGFuIDIsIHRoZW5cbiAgICAgICAgICAgICAgICBpZiAoa2V5UG9zICsgMSA8IGV4dGVuc2lvblN1YnRhZ3NMZW5ndGggJiYgZXh0ZW5zaW9uU3VidGFnc1trZXlQb3MgKyAxXS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCByZXF1ZXN0ZWRWYWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgaW50ZXJuYWwgbWV0aG9kIG9mIGV4dGVuc2lvblN1YnRhZ3Mgd2l0aCBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICAvLyAgICBUb1N0cmluZyhrZXlQb3MgKyAxKS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RlZFZhbHVlID0gZXh0ZW5zaW9uU3VidGFnc1trZXlQb3MgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYi4gTGV0IHZhbHVlUG9zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgaW50ZXJuYWwgbWV0aG9kIG9mIGluZGV4T2Ygd2l0aCBrZXlMb2NhbGVEYXRhIGFzIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICBpdGVtIHJlcXVlc3RlZFZhbHVlLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQb3MgPSBpbmRleE9mLmNhbGwoa2V5TG9jYWxlRGF0YSwgcmVxdWVzdGVkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGMuIElmIHZhbHVlUG9zIOKJoCAtMSwgdGhlblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgdmFsdWUgYmUgcmVxdWVzdGVkVmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlcXVlc3RlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWkuIExldCBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiBiZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25jYXRlbmF0aW9uIG9mIFwiLVwiLCBrZXksIFwiLVwiLCBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9ICctJyArIGtleSArICctJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIDIuIEVsc2VcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCB2YWx1ZVBvcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcm5hbCBtZXRob2Qgb2YgaW5kZXhPZiB3aXRoIGtleUxvY2FsZURhdGEgYXMgdGhlIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcInRydWVcIi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdmFsdWVQb3MgPSBpbmRleE9mKGtleUxvY2FsZURhdGEsICd0cnVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGIuIElmIHZhbHVlUG9zIOKJoCAtMSwgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF92YWx1ZVBvcyAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaS4gTGV0IHZhbHVlIGJlIFwidHJ1ZVwiLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaC4gSWYgb3B0aW9ucyBoYXMgYSBmaWVsZCBbWzxrZXk+XV0sIHRoZW5cbiAgICAgICAgaWYgKGhvcC5jYWxsKG9wdGlvbnMsICdbWycgKyBrZXkgKyAnXV0nKSkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IG9wdGlvbnNWYWx1ZSBiZSB0aGUgdmFsdWUgb2Ygb3B0aW9ucy5bWzxrZXk+XV0uXG4gICAgICAgICAgICB2YXIgb3B0aW9uc1ZhbHVlID0gb3B0aW9uc1snW1snICsga2V5ICsgJ11dJ107XG5cbiAgICAgICAgICAgIC8vIGlpLiBJZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZCBvZiBpbmRleE9mXG4gICAgICAgICAgICAvLyAgICAgd2l0aCBrZXlMb2NhbGVEYXRhIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0XG4gICAgICAgICAgICAvLyAgICAgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gb3B0aW9uc1ZhbHVlIGlzIG5vdCAtMSwgdGhlblxuICAgICAgICAgICAgaWYgKGluZGV4T2YuY2FsbChrZXlMb2NhbGVEYXRhLCBvcHRpb25zVmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIDEuIElmIG9wdGlvbnNWYWx1ZSBpcyBub3QgZXF1YWwgdG8gdmFsdWUsIHRoZW5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgdmFsdWUgYmUgb3B0aW9uc1ZhbHVlLlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbnNWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYi4gTGV0IHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uIGJlIFwiXCIuXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGkuIFNldCByZXN1bHQuW1s8a2V5Pl1dIHRvIHZhbHVlLlxuICAgICAgICByZXN1bHRbJ1tbJyArIGtleSArICddXSddID0gdmFsdWU7XG5cbiAgICAgICAgLy8gai4gQXBwZW5kIHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uIHRvIHN1cHBvcnRlZEV4dGVuc2lvbi5cbiAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uICs9IHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uO1xuXG4gICAgICAgIC8vIGsuIEluY3JlYXNlIGkgYnkgMS5cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICAvLyAxMi4gSWYgdGhlIGxlbmd0aCBvZiBzdXBwb3J0ZWRFeHRlbnNpb24gaXMgZ3JlYXRlciB0aGFuIDIsIHRoZW5cbiAgICBpZiAoc3VwcG9ydGVkRXh0ZW5zaW9uLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gYS5cbiAgICAgICAgdmFyIHByaXZhdGVJbmRleCA9IGZvdW5kTG9jYWxlLmluZGV4T2YoXCIteC1cIik7XG4gICAgICAgIC8vIGIuXG4gICAgICAgIGlmIChwcml2YXRlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBpLlxuICAgICAgICAgICAgZm91bmRMb2NhbGUgPSBmb3VuZExvY2FsZSArIHN1cHBvcnRlZEV4dGVuc2lvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpLlxuICAgICAgICAgICAgICAgIHZhciBwcmVFeHRlbnNpb24gPSBmb3VuZExvY2FsZS5zdWJzdHJpbmcoMCwgcHJpdmF0ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBpaS5cbiAgICAgICAgICAgICAgICB2YXIgcG9zdEV4dGVuc2lvbiA9IGZvdW5kTG9jYWxlLnN1YnN0cmluZyhwcml2YXRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vIGlpaS5cbiAgICAgICAgICAgICAgICBmb3VuZExvY2FsZSA9IHByZUV4dGVuc2lvbiArIHN1cHBvcnRlZEV4dGVuc2lvbiArIHBvc3RFeHRlbnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIGQuIGFzc2VydGluZyAtIHNraXBwaW5nXG4gICAgICAgIC8vIGUuXG4gICAgICAgIGZvdW5kTG9jYWxlID0gQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcoZm91bmRMb2NhbGUpO1xuICAgIH1cbiAgICAvLyAxMy4gU2V0IHJlc3VsdC5bW2xvY2FsZV1dIHRvIGZvdW5kTG9jYWxlLlxuICAgIHJlc3VsdFsnW1tsb2NhbGVdXSddID0gZm91bmRMb2NhbGU7XG5cbiAgICAvLyAxNC4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBMb29rdXBTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBzdWJzZXQgb2YgdGhlXG4gKiBwcm92aWRlZCBCQ1AgNDcgbGFuZ3VhZ2UgcHJpb3JpdHkgbGlzdCByZXF1ZXN0ZWRMb2NhbGVzIGZvciB3aGljaFxuICogYXZhaWxhYmxlTG9jYWxlcyBoYXMgYSBtYXRjaGluZyBsb2NhbGUgd2hlbiB1c2luZyB0aGUgQkNQIDQ3IExvb2t1cCBhbGdvcml0aG0uXG4gKiBMb2NhbGVzIGFwcGVhciBpbiB0aGUgc2FtZSBvcmRlciBpbiB0aGUgcmV0dXJuZWQgbGlzdCBhcyBpbiByZXF1ZXN0ZWRMb2NhbGVzLlxuICogVGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi42ICovTG9va3VwU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgLy8gMS4gTGV0IGxlbiBiZSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgdmFyIGxlbiA9IHJlcXVlc3RlZExvY2FsZXMubGVuZ3RoO1xuICAgIC8vIDIuIExldCBzdWJzZXQgYmUgYSBuZXcgZW1wdHkgTGlzdC5cbiAgICB2YXIgc3Vic2V0ID0gbmV3IExpc3QoKTtcbiAgICAvLyAzLiBMZXQgayBiZSAwLlxuICAgIHZhciBrID0gMDtcblxuICAgIC8vIDQuIFJlcGVhdCB3aGlsZSBrIDwgbGVuXG4gICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgLy8gYS4gTGV0IGxvY2FsZSBiZSB0aGUgZWxlbWVudCBvZiByZXF1ZXN0ZWRMb2NhbGVzIGF0IDAtb3JpZ2luZWQgbGlzdFxuICAgICAgICAvLyAgICBwb3NpdGlvbiBrLlxuICAgICAgICB2YXIgbG9jYWxlID0gcmVxdWVzdGVkTG9jYWxlc1trXTtcbiAgICAgICAgLy8gYi4gTGV0IG5vRXh0ZW5zaW9uc0xvY2FsZSBiZSB0aGUgU3RyaW5nIHZhbHVlIHRoYXQgaXMgbG9jYWxlIHdpdGggYWxsXG4gICAgICAgIC8vICAgIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZXMgcmVtb3ZlZC5cbiAgICAgICAgdmFyIG5vRXh0ZW5zaW9uc0xvY2FsZSA9IFN0cmluZyhsb2NhbGUpLnJlcGxhY2UoZXhwVW5pY29kZUV4U2VxLCAnJyk7XG4gICAgICAgIC8vIGMuIExldCBhdmFpbGFibGVMb2NhbGUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZVxuICAgICAgICAvLyAgICBCZXN0QXZhaWxhYmxlTG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuMikgd2l0aFxuICAgICAgICAvLyAgICBhcmd1bWVudHMgYXZhaWxhYmxlTG9jYWxlcyBhbmQgbm9FeHRlbnNpb25zTG9jYWxlLlxuICAgICAgICB2YXIgYXZhaWxhYmxlTG9jYWxlID0gQmVzdEF2YWlsYWJsZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCBub0V4dGVuc2lvbnNMb2NhbGUpO1xuXG4gICAgICAgIC8vIGQuIElmIGF2YWlsYWJsZUxvY2FsZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGFwcGVuZCBsb2NhbGUgdG8gdGhlIGVuZCBvZlxuICAgICAgICAvLyAgICBzdWJzZXQuXG4gICAgICAgIGlmIChhdmFpbGFibGVMb2NhbGUgIT09IHVuZGVmaW5lZCkgYXJyUHVzaC5jYWxsKHN1YnNldCwgbG9jYWxlKTtcblxuICAgICAgICAvLyBlLiBJbmNyZW1lbnQgayBieSAxLlxuICAgICAgICBrKys7XG4gICAgfVxuXG4gICAgLy8gNS4gTGV0IHN1YnNldEFycmF5IGJlIGEgbmV3IEFycmF5IG9iamVjdCB3aG9zZSBlbGVtZW50cyBhcmUgdGhlIHNhbWVcbiAgICAvLyAgICB2YWx1ZXMgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGVsZW1lbnRzIG9mIHN1YnNldC5cbiAgICB2YXIgc3Vic2V0QXJyYXkgPSBhcnJTbGljZS5jYWxsKHN1YnNldCk7XG5cbiAgICAvLyA2LiBSZXR1cm4gc3Vic2V0QXJyYXkuXG4gICAgcmV0dXJuIHN1YnNldEFycmF5O1xufVxuXG4vKipcbiAqIFRoZSBCZXN0Rml0U3VwcG9ydGVkTG9jYWxlcyBhYnN0cmFjdCBvcGVyYXRpb24gcmV0dXJucyB0aGUgc3Vic2V0IG9mIHRoZVxuICogcHJvdmlkZWQgQkNQIDQ3IGxhbmd1YWdlIHByaW9yaXR5IGxpc3QgcmVxdWVzdGVkTG9jYWxlcyBmb3Igd2hpY2hcbiAqIGF2YWlsYWJsZUxvY2FsZXMgaGFzIGEgbWF0Y2hpbmcgbG9jYWxlIHdoZW4gdXNpbmcgdGhlIEJlc3QgRml0IE1hdGNoZXJcbiAqIGFsZ29yaXRobS4gTG9jYWxlcyBhcHBlYXIgaW4gdGhlIHNhbWUgb3JkZXIgaW4gdGhlIHJldHVybmVkIGxpc3QgYXMgaW5cbiAqIHJlcXVlc3RlZExvY2FsZXMuIFRoZSBzdGVwcyB0YWtlbiBhcmUgaW1wbGVtZW50YXRpb24gZGVwZW5kZW50LlxuICovXG5mdW5jdGlvbiAvKjkuMi43ICovQmVzdEZpdFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIC8vICMjI1RPRE86IGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIGFzIGRlc2NyaWJlZCBieSB0aGUgc3BlY2lmaWNhdGlvbiMjI1xuICAgIHJldHVybiBMb29rdXBTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xufVxuXG4vKipcbiAqIFRoZSBTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBzdWJzZXQgb2YgdGhlIHByb3ZpZGVkIEJDUFxuICogNDcgbGFuZ3VhZ2UgcHJpb3JpdHkgbGlzdCByZXF1ZXN0ZWRMb2NhbGVzIGZvciB3aGljaCBhdmFpbGFibGVMb2NhbGVzIGhhcyBhXG4gKiBtYXRjaGluZyBsb2NhbGUuIFR3byBhbGdvcml0aG1zIGFyZSBhdmFpbGFibGUgdG8gbWF0Y2ggdGhlIGxvY2FsZXM6IHRoZSBMb29rdXBcbiAqIGFsZ29yaXRobSBkZXNjcmliZWQgaW4gUkZDIDQ2NDcgc2VjdGlvbiAzLjQsIGFuZCBhbiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAqIGJlc3QtZml0IGFsZ29yaXRobS4gTG9jYWxlcyBhcHBlYXIgaW4gdGhlIHNhbWUgb3JkZXIgaW4gdGhlIHJldHVybmVkIGxpc3QgYXNcbiAqIGluIHJlcXVlc3RlZExvY2FsZXMuIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiAvKjkuMi44ICovU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG1hdGNoZXIgPSB2b2lkIDAsXG4gICAgICAgIHN1YnNldCA9IHZvaWQgMDtcblxuICAgIC8vIDEuIElmIG9wdGlvbnMgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gTGV0IG9wdGlvbnMgYmUgVG9PYmplY3Qob3B0aW9ucykuXG4gICAgICAgIG9wdGlvbnMgPSBuZXcgUmVjb3JkKHRvT2JqZWN0KG9wdGlvbnMpKTtcbiAgICAgICAgLy8gYi4gTGV0IG1hdGNoZXIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICBvcHRpb25zIHdpdGggYXJndW1lbnQgXCJsb2NhbGVNYXRjaGVyXCIuXG4gICAgICAgIG1hdGNoZXIgPSBvcHRpb25zLmxvY2FsZU1hdGNoZXI7XG5cbiAgICAgICAgLy8gYy4gSWYgbWF0Y2hlciBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmIChtYXRjaGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBtYXRjaGVyIGJlIFRvU3RyaW5nKG1hdGNoZXIpLlxuICAgICAgICAgICAgbWF0Y2hlciA9IFN0cmluZyhtYXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gaWkuIElmIG1hdGNoZXIgaXMgbm90IFwibG9va3VwXCIgb3IgXCJiZXN0IGZpdFwiLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvclxuICAgICAgICAgICAgLy8gICAgIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChtYXRjaGVyICE9PSAnbG9va3VwJyAmJiBtYXRjaGVyICE9PSAnYmVzdCBmaXQnKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWF0Y2hlciBzaG91bGQgYmUgXCJsb29rdXBcIiBvciBcImJlc3QgZml0XCInKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAyLiBJZiBtYXRjaGVyIGlzIHVuZGVmaW5lZCBvciBcImJlc3QgZml0XCIsIHRoZW5cbiAgICBpZiAobWF0Y2hlciA9PT0gdW5kZWZpbmVkIHx8IG1hdGNoZXIgPT09ICdiZXN0IGZpdCcpXG4gICAgICAgIC8vIGEuIExldCBzdWJzZXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBCZXN0Rml0U3VwcG9ydGVkTG9jYWxlc1xuICAgICAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjcpIHdpdGggYXJndW1lbnRzXG4gICAgICAgIC8vICAgIGF2YWlsYWJsZUxvY2FsZXMgYW5kIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgICAgIHN1YnNldCA9IEJlc3RGaXRTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xuICAgICAgICAvLyAzLiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBMZXQgc3Vic2V0IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgTG9va3VwU3VwcG9ydGVkTG9jYWxlc1xuICAgICAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjYpIHdpdGggYXJndW1lbnRzXG4gICAgICAgIC8vICAgIGF2YWlsYWJsZUxvY2FsZXMgYW5kIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgICAgIHN1YnNldCA9IExvb2t1cFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG5cbiAgICAvLyA0LiBGb3IgZWFjaCBuYW1lZCBvd24gcHJvcGVydHkgbmFtZSBQIG9mIHN1YnNldCxcbiAgICBmb3IgKHZhciBQIGluIHN1YnNldCkge1xuICAgICAgICBpZiAoIWhvcC5jYWxsKHN1YnNldCwgUCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIGEuIExldCBkZXNjIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRPd25Qcm9wZXJ0eV1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBzdWJzZXQgd2l0aCBQLlxuICAgICAgICAvLyBiLiBTZXQgZGVzYy5bW1dyaXRhYmxlXV0gdG8gZmFsc2UuXG4gICAgICAgIC8vIGMuIFNldCBkZXNjLltbQ29uZmlndXJhYmxlXV0gdG8gZmFsc2UuXG4gICAgICAgIC8vIGQuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2Ygc3Vic2V0IHdpdGggUCwgZGVzYyxcbiAgICAgICAgLy8gICAgYW5kIHRydWUgYXMgYXJndW1lbnRzLlxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShzdWJzZXQsIFAsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiBmYWxzZSwgdmFsdWU6IHN1YnNldFtQXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gXCJGcmVlemVcIiB0aGUgYXJyYXkgc28gbm8gbmV3IGVsZW1lbnRzIGNhbiBiZSBhZGRlZFxuICAgIGRlZmluZVByb3BlcnR5KHN1YnNldCwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuXG4gICAgLy8gNS4gUmV0dXJuIHN1YnNldFxuICAgIHJldHVybiBzdWJzZXQ7XG59XG5cbi8qKlxuICogVGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gZXh0cmFjdHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBuYW1lZFxuICogcHJvcGVydHkgZnJvbSB0aGUgcHJvdmlkZWQgb3B0aW9ucyBvYmplY3QsIGNvbnZlcnRzIGl0IHRvIHRoZSByZXF1aXJlZCB0eXBlLFxuICogY2hlY2tzIHdoZXRoZXIgaXQgaXMgb25lIG9mIGEgTGlzdCBvZiBhbGxvd2VkIHZhbHVlcywgYW5kIGZpbGxzIGluIGEgZmFsbGJhY2tcbiAqIHZhbHVlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gLyo5LjIuOSAqL0dldE9wdGlvbihvcHRpb25zLCBwcm9wZXJ0eSwgdHlwZSwgdmFsdWVzLCBmYWxsYmFjaykge1xuICAgIC8vIDEuIExldCB2YWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgb3B0aW9ucyB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbcHJvcGVydHldO1xuXG4gICAgLy8gMi4gSWYgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIEFzc2VydDogdHlwZSBpcyBcImJvb2xlYW5cIiBvciBcInN0cmluZ1wiLlxuICAgICAgICAvLyBiLiBJZiB0eXBlIGlzIFwiYm9vbGVhblwiLCB0aGVuIGxldCB2YWx1ZSBiZSBUb0Jvb2xlYW4odmFsdWUpLlxuICAgICAgICAvLyBjLiBJZiB0eXBlIGlzIFwic3RyaW5nXCIsIHRoZW4gbGV0IHZhbHVlIGJlIFRvU3RyaW5nKHZhbHVlKS5cbiAgICAgICAgdmFsdWUgPSB0eXBlID09PSAnYm9vbGVhbicgPyBCb29sZWFuKHZhbHVlKSA6IHR5cGUgPT09ICdzdHJpbmcnID8gU3RyaW5nKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgICAgIC8vIGQuIElmIHZhbHVlcyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmICh2YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaS4gSWYgdmFsdWVzIGRvZXMgbm90IGNvbnRhaW4gYW4gZWxlbWVudCBlcXVhbCB0byB2YWx1ZSwgdGhlbiB0aHJvdyBhXG4gICAgICAgICAgICAvLyAgICBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChhcnJJbmRleE9mLmNhbGwodmFsdWVzLCB2YWx1ZSkgPT09IC0xKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidcIiArIHZhbHVlICsgXCInIGlzIG5vdCBhbiBhbGxvd2VkIHZhbHVlIGZvciBgXCIgKyBwcm9wZXJ0eSArICdgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlLiBSZXR1cm4gdmFsdWUuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gRWxzZSByZXR1cm4gZmFsbGJhY2suXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG4vKipcbiAqIFRoZSBHZXROdW1iZXJPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIGV4dHJhY3RzIGEgcHJvcGVydHkgdmFsdWUgZnJvbSB0aGVcbiAqIHByb3ZpZGVkIG9wdGlvbnMgb2JqZWN0LCBjb252ZXJ0cyBpdCB0byBhIE51bWJlciB2YWx1ZSwgY2hlY2tzIHdoZXRoZXIgaXQgaXNcbiAqIGluIHRoZSBhbGxvd2VkIHJhbmdlLCBhbmQgZmlsbHMgaW4gYSBmYWxsYmFjayB2YWx1ZSBpZiBuZWNlc3NhcnkuXG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi4xMCAqL0dldE51bWJlck9wdGlvbihvcHRpb25zLCBwcm9wZXJ0eSwgbWluaW11bSwgbWF4aW11bSwgZmFsbGJhY2spIHtcbiAgICAvLyAxLiBMZXQgdmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgIG9wdGlvbnMgd2l0aCBhcmd1bWVudCBwcm9wZXJ0eS5cbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BlcnR5XTtcblxuICAgIC8vIDIuIElmIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBMZXQgdmFsdWUgYmUgVG9OdW1iZXIodmFsdWUpLlxuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICAgICAgLy8gYi4gSWYgdmFsdWUgaXMgTmFOIG9yIGxlc3MgdGhhbiBtaW5pbXVtIG9yIGdyZWF0ZXIgdGhhbiBtYXhpbXVtLCB0aHJvdyBhXG4gICAgICAgIC8vICAgIFJhbmdlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgbWluaW11bSB8fCB2YWx1ZSA+IG1heGltdW0pIHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSBpcyBub3QgYSBudW1iZXIgb3Igb3V0c2lkZSBhY2NlcHRlZCByYW5nZScpO1xuXG4gICAgICAgIC8vIGMuIFJldHVybiBmbG9vcih2YWx1ZSkuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICB9XG4gICAgLy8gMy4gRWxzZSByZXR1cm4gZmFsbGJhY2suXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG4vLyA4IFRoZSBJbnRsIE9iamVjdFxudmFyIEludGwgPSB7fTtcblxuLy8gOC4yIEZ1bmN0aW9uIFByb3BlcnRpZXMgb2YgdGhlIEludGwgT2JqZWN0XG5cbi8vIDguMi4xXG4vLyBAc3BlY1t0YzM5L2VjbWE0MDIvbWFzdGVyL3NwZWMvaW50bC5odG1sXVxuLy8gQGNsYXVzZVtzZWMtaW50bC5nZXRjYW5vbmljYWxsb2NhbGVzXVxuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsTG9jYWxlcyhsb2NhbGVzKSB7XG4gICAgLy8gMS4gTGV0IGxsIGJlID8gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKS5cbiAgICB2YXIgbGwgPSBDYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpO1xuICAgIC8vIDIuIFJldHVybiBDcmVhdGVBcnJheUZyb21MaXN0KGxsKS5cbiAgICB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICB2YXIgbGVuID0gbGwubGVuZ3RoO1xuICAgICAgICB2YXIgayA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IGxsW2tdO1xuICAgICAgICAgICAgaysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSW50bCwgJ2dldENhbm9uaWNhbExvY2FsZXMnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBnZXRDYW5vbmljYWxMb2NhbGVzXG59KTtcblxuLy8gQ3VycmVuY3kgbWlub3IgdW5pdHMgb3V0cHV0IGZyb20gZ2V0LTQyMTcgZ3J1bnQgdGFzaywgZm9ybWF0dGVkXG52YXIgY3VycmVuY3lNaW5vclVuaXRzID0ge1xuICAgIEJIRDogMywgQllSOiAwLCBYT0Y6IDAsIEJJRjogMCwgWEFGOiAwLCBDTEY6IDQsIENMUDogMCwgS01GOiAwLCBESkY6IDAsXG4gICAgWFBGOiAwLCBHTkY6IDAsIElTSzogMCwgSVFEOiAzLCBKUFk6IDAsIEpPRDogMywgS1JXOiAwLCBLV0Q6IDMsIExZRDogMyxcbiAgICBPTVI6IDMsIFBZRzogMCwgUldGOiAwLCBUTkQ6IDMsIFVHWDogMCwgVVlJOiAwLCBWVVY6IDAsIFZORDogMFxufTtcblxuLy8gRGVmaW5lIHRoZSBOdW1iZXJGb3JtYXQgY29uc3RydWN0b3IgaW50ZXJuYWxseSBzbyBpdCBjYW5ub3QgYmUgdGFpbnRlZFxuZnVuY3Rpb24gTnVtYmVyRm9ybWF0Q29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoIXRoaXMgfHwgdGhpcyA9PT0gSW50bCkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBJbml0aWFsaXplTnVtYmVyRm9ybWF0KHRvT2JqZWN0KHRoaXMpLCBsb2NhbGVzLCBvcHRpb25zKTtcbn1cblxuZGVmaW5lUHJvcGVydHkoSW50bCwgJ051bWJlckZvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IE51bWJlckZvcm1hdENvbnN0cnVjdG9yXG59KTtcblxuLy8gTXVzdCBleHBsaWNpdGx5IHNldCBwcm90b3R5cGVzIGFzIHVud3JpdGFibGVcbmRlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LCAncHJvdG90eXBlJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxufSk7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBJbml0aWFsaXplTnVtYmVyRm9ybWF0IGFjY2VwdHMgdGhlIGFyZ3VtZW50c1xuICogbnVtYmVyRm9ybWF0ICh3aGljaCBtdXN0IGJlIGFuIG9iamVjdCksIGxvY2FsZXMsIGFuZCBvcHRpb25zLiBJdCBpbml0aWFsaXplc1xuICogbnVtYmVyRm9ybWF0IGFzIGEgTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gLyoxMS4xLjEuMSAqL0luaXRpYWxpemVOdW1iZXJGb3JtYXQobnVtYmVyRm9ybWF0LCBsb2NhbGVzLCBvcHRpb25zKSB7XG4gICAgLy8gVGhpcyB3aWxsIGJlIGEgaW50ZXJuYWwgcHJvcGVydGllcyBvYmplY3QgaWYgd2UncmUgbm90IGFscmVhZHkgaW5pdGlhbGl6ZWRcbiAgICB2YXIgaW50ZXJuYWwgPSBnZXRJbnRlcm5hbFByb3BlcnRpZXMobnVtYmVyRm9ybWF0KTtcblxuICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2hvc2UgcHJvcHMgY2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgdmFsdWVzIG9mIFJlZ0V4cCBwcm9wc1xuICAgIHZhciByZWdleHBSZXN0b3JlID0gY3JlYXRlUmVnRXhwUmVzdG9yZSgpO1xuXG4gICAgLy8gMS4gSWYgbnVtYmVyRm9ybWF0IGhhcyBhbiBbW2luaXRpYWxpemVkSW50bE9iamVjdF1dIGludGVybmFsIHByb3BlcnR5IHdpdGhcbiAgICAvLyB2YWx1ZSB0cnVlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgaWYgKGludGVybmFsWydbW2luaXRpYWxpemVkSW50bE9iamVjdF1dJ10gPT09IHRydWUpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCBvYmplY3QgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBhcyBhbiBJbnRsIG9iamVjdCcpO1xuXG4gICAgLy8gTmVlZCB0aGlzIHRvIGFjY2VzcyB0aGUgYGludGVybmFsYCBvYmplY3RcbiAgICBkZWZpbmVQcm9wZXJ0eShudW1iZXJGb3JtYXQsICdfX2dldEludGVybmFsUHJvcGVydGllcycsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgLy8gTk9URTogTm9uLXN0YW5kYXJkLCBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHNlY3JldCkgcmV0dXJuIGludGVybmFsO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAyLiBTZXQgdGhlIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRydWUuXG4gICAgaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9IHRydWU7XG5cbiAgICAvLyAzLiBMZXQgcmVxdWVzdGVkTG9jYWxlcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIENhbm9uaWNhbGl6ZUxvY2FsZUxpc3RcbiAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjEpIHdpdGggYXJndW1lbnQgbG9jYWxlcy5cbiAgICB2YXIgcmVxdWVzdGVkTG9jYWxlcyA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyk7XG5cbiAgICAvLyA0LiBJZiBvcHRpb25zIGlzIHVuZGVmaW5lZCwgdGhlblxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpXG4gICAgICAgIC8vIGEuIExldCBvcHRpb25zIGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgICAgICAvLyBleHByZXNzaW9uIG5ldyBPYmplY3QoKSB3aGVyZSBPYmplY3QgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIHdpdGggdGhhdCBuYW1lLlxuICAgICAgICBvcHRpb25zID0ge307XG5cbiAgICAgICAgLy8gNS4gRWxzZVxuICAgIGVsc2VcbiAgICAgICAgLy8gYS4gTGV0IG9wdGlvbnMgYmUgVG9PYmplY3Qob3B0aW9ucykuXG4gICAgICAgIG9wdGlvbnMgPSB0b09iamVjdChvcHRpb25zKTtcblxuICAgIC8vIDYuIExldCBvcHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgIHZhciBvcHQgPSBuZXcgUmVjb3JkKCksXG5cblxuICAgIC8vIDcuIExldCBtYXRjaGVyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi45KSB3aXRoIHRoZSBhcmd1bWVudHMgb3B0aW9ucywgXCJsb2NhbGVNYXRjaGVyXCIsIFwic3RyaW5nXCIsXG4gICAgLy8gICAgYSBMaXN0IGNvbnRhaW5pbmcgdGhlIHR3byBTdHJpbmcgdmFsdWVzIFwibG9va3VwXCIgYW5kIFwiYmVzdCBmaXRcIiwgYW5kXG4gICAgLy8gICAgXCJiZXN0IGZpdFwiLlxuICAgIG1hdGNoZXIgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2xvY2FsZU1hdGNoZXInLCAnc3RyaW5nJywgbmV3IExpc3QoJ2xvb2t1cCcsICdiZXN0IGZpdCcpLCAnYmVzdCBmaXQnKTtcblxuICAgIC8vIDguIFNldCBvcHQuW1tsb2NhbGVNYXRjaGVyXV0gdG8gbWF0Y2hlci5cbiAgICBvcHRbJ1tbbG9jYWxlTWF0Y2hlcl1dJ10gPSBtYXRjaGVyO1xuXG4gICAgLy8gOS4gTGV0IE51bWJlckZvcm1hdCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gb2JqZWN0IHRoYXQgaXMgdGhlIGluaXRpYWwgdmFsdWVcbiAgICAvLyAgICBvZiBJbnRsLk51bWJlckZvcm1hdC5cbiAgICAvLyAxMC4gTGV0IGxvY2FsZURhdGEgYmUgdGhlIHZhbHVlIG9mIHRoZSBbW2xvY2FsZURhdGFdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgIC8vICAgICBOdW1iZXJGb3JtYXQuXG4gICAgdmFyIGxvY2FsZURhdGEgPSBpbnRlcm5hbHMuTnVtYmVyRm9ybWF0WydbW2xvY2FsZURhdGFdXSddO1xuXG4gICAgLy8gMTEuIExldCByIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgUmVzb2x2ZUxvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgKGRlZmluZWQgaW4gOS4yLjUpIHdpdGggdGhlIFtbYXZhaWxhYmxlTG9jYWxlc11dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgIE51bWJlckZvcm1hdCwgcmVxdWVzdGVkTG9jYWxlcywgb3B0LCB0aGUgW1tyZWxldmFudEV4dGVuc2lvbktleXNdXVxuICAgIC8vICAgICBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBOdW1iZXJGb3JtYXQsIGFuZCBsb2NhbGVEYXRhLlxuICAgIHZhciByID0gUmVzb2x2ZUxvY2FsZShpbnRlcm5hbHMuTnVtYmVyRm9ybWF0WydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHQsIGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV0nXSwgbG9jYWxlRGF0YSk7XG5cbiAgICAvLyAxMi4gU2V0IHRoZSBbW2xvY2FsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB0aGUgdmFsdWUgb2ZcbiAgICAvLyAgICAgci5bW2xvY2FsZV1dLlxuICAgIGludGVybmFsWydbW2xvY2FsZV1dJ10gPSByWydbW2xvY2FsZV1dJ107XG5cbiAgICAvLyAxMy4gU2V0IHRoZSBbW251bWJlcmluZ1N5c3RlbV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB0aGUgdmFsdWVcbiAgICAvLyAgICAgb2Ygci5bW251XV0uXG4gICAgaW50ZXJuYWxbJ1tbbnVtYmVyaW5nU3lzdGVtXV0nXSA9IHJbJ1tbbnVdXSddO1xuXG4gICAgLy8gVGhlIHNwZWNpZmljYXRpb24gZG9lc24ndCB0ZWxsIHVzIHRvIGRvIHRoaXMsIGJ1dCBpdCdzIGhlbHBmdWwgbGF0ZXIgb25cbiAgICBpbnRlcm5hbFsnW1tkYXRhTG9jYWxlXV0nXSA9IHJbJ1tbZGF0YUxvY2FsZV1dJ107XG5cbiAgICAvLyAxNC4gTGV0IGRhdGFMb2NhbGUgYmUgdGhlIHZhbHVlIG9mIHIuW1tkYXRhTG9jYWxlXV0uXG4gICAgdmFyIGRhdGFMb2NhbGUgPSByWydbW2RhdGFMb2NhbGVdXSddO1xuXG4gICAgLy8gMTUuIExldCBzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiB3aXRoIHRoZVxuICAgIC8vICAgICBhcmd1bWVudHMgb3B0aW9ucywgXCJzdHlsZVwiLCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGUgdGhyZWUgU3RyaW5nXG4gICAgLy8gICAgIHZhbHVlcyBcImRlY2ltYWxcIiwgXCJwZXJjZW50XCIsIGFuZCBcImN1cnJlbmN5XCIsIGFuZCBcImRlY2ltYWxcIi5cbiAgICB2YXIgcyA9IEdldE9wdGlvbihvcHRpb25zLCAnc3R5bGUnLCAnc3RyaW5nJywgbmV3IExpc3QoJ2RlY2ltYWwnLCAncGVyY2VudCcsICdjdXJyZW5jeScpLCAnZGVjaW1hbCcpO1xuXG4gICAgLy8gMTYuIFNldCB0aGUgW1tzdHlsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBzLlxuICAgIGludGVybmFsWydbW3N0eWxlXV0nXSA9IHM7XG5cbiAgICAvLyAxNy4gTGV0IGMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImN1cnJlbmN5XCIsIFwic3RyaW5nXCIsIHVuZGVmaW5lZCwgYW5kIHVuZGVmaW5lZC5cbiAgICB2YXIgYyA9IEdldE9wdGlvbihvcHRpb25zLCAnY3VycmVuY3knLCAnc3RyaW5nJyk7XG5cbiAgICAvLyAxOC4gSWYgYyBpcyBub3QgdW5kZWZpbmVkIGFuZCB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlXG4gICAgLy8gICAgIElzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gNi4zLjEpIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnQgYyBpcyBmYWxzZSwgdGhlbiB0aHJvdyBhIFJhbmdlRXJyb3IgZXhjZXB0aW9uLlxuICAgIGlmIChjICE9PSB1bmRlZmluZWQgJiYgIUlzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZShjKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInXCIgKyBjICsgXCInIGlzIG5vdCBhIHZhbGlkIGN1cnJlbmN5IGNvZGVcIik7XG5cbiAgICAvLyAxOS4gSWYgcyBpcyBcImN1cnJlbmN5XCIgYW5kIGMgaXMgdW5kZWZpbmVkLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgaWYgKHMgPT09ICdjdXJyZW5jeScgJiYgYyA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDdXJyZW5jeSBjb2RlIGlzIHJlcXVpcmVkIHdoZW4gc3R5bGUgaXMgY3VycmVuY3knKTtcblxuICAgIHZhciBjRGlnaXRzID0gdm9pZCAwO1xuXG4gICAgLy8gMjAuIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuXG4gICAgaWYgKHMgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgLy8gYS4gTGV0IGMgYmUgdGhlIHJlc3VsdCBvZiBjb252ZXJ0aW5nIGMgdG8gdXBwZXIgY2FzZSBhcyBzcGVjaWZpZWQgaW4gNi4xLlxuICAgICAgICBjID0gYy50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIC8vIGIuIFNldCB0aGUgW1tjdXJyZW5jeV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBjLlxuICAgICAgICBpbnRlcm5hbFsnW1tjdXJyZW5jeV1dJ10gPSBjO1xuXG4gICAgICAgIC8vIGMuIExldCBjRGlnaXRzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQ3VycmVuY3lEaWdpdHMgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50IGMuXG4gICAgICAgIGNEaWdpdHMgPSBDdXJyZW5jeURpZ2l0cyhjKTtcbiAgICB9XG5cbiAgICAvLyAyMS4gTGV0IGNkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiB3aXRoIHRoZVxuICAgIC8vICAgICBhcmd1bWVudHMgb3B0aW9ucywgXCJjdXJyZW5jeURpc3BsYXlcIiwgXCJzdHJpbmdcIiwgYSBMaXN0IGNvbnRhaW5pbmcgdGhlXG4gICAgLy8gICAgIHRocmVlIFN0cmluZyB2YWx1ZXMgXCJjb2RlXCIsIFwic3ltYm9sXCIsIGFuZCBcIm5hbWVcIiwgYW5kIFwic3ltYm9sXCIuXG4gICAgdmFyIGNkID0gR2V0T3B0aW9uKG9wdGlvbnMsICdjdXJyZW5jeURpc3BsYXknLCAnc3RyaW5nJywgbmV3IExpc3QoJ2NvZGUnLCAnc3ltYm9sJywgJ25hbWUnKSwgJ3N5bWJvbCcpO1xuXG4gICAgLy8gMjIuIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuIHNldCB0aGUgW1tjdXJyZW5jeURpc3BsYXldXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgIC8vICAgICBudW1iZXJGb3JtYXQgdG8gY2QuXG4gICAgaWYgKHMgPT09ICdjdXJyZW5jeScpIGludGVybmFsWydbW2N1cnJlbmN5RGlzcGxheV1dJ10gPSBjZDtcblxuICAgIC8vIDIzLiBMZXQgbW5pZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgKGRlZmluZWQgaW4gOS4yLjEwKSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcIm1pbmltdW1JbnRlZ2VyRGlnaXRzXCIsIDEsIDIxLFxuICAgIC8vICAgICBhbmQgMS5cbiAgICB2YXIgbW5pZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWluaW11bUludGVnZXJEaWdpdHMnLCAxLCAyMSwgMSk7XG5cbiAgICAvLyAyNC4gU2V0IHRoZSBbW21pbmltdW1JbnRlZ2VyRGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIG1uaWQuXG4gICAgaW50ZXJuYWxbJ1tbbWluaW11bUludGVnZXJEaWdpdHNdXSddID0gbW5pZDtcblxuICAgIC8vIDI1LiBJZiBzIGlzIFwiY3VycmVuY3lcIiwgdGhlbiBsZXQgbW5mZERlZmF1bHQgYmUgY0RpZ2l0czsgZWxzZSBsZXQgbW5mZERlZmF1bHRcbiAgICAvLyAgICAgYmUgMC5cbiAgICB2YXIgbW5mZERlZmF1bHQgPSBzID09PSAnY3VycmVuY3knID8gY0RpZ2l0cyA6IDA7XG5cbiAgICAvLyAyNi4gTGV0IG1uZmQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXROdW1iZXJPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWluaW11bUZyYWN0aW9uRGlnaXRzXCIsIDAsIDIwLCBhbmQgbW5mZERlZmF1bHQuXG4gICAgdmFyIG1uZmQgPSBHZXROdW1iZXJPcHRpb24ob3B0aW9ucywgJ21pbmltdW1GcmFjdGlvbkRpZ2l0cycsIDAsIDIwLCBtbmZkRGVmYXVsdCk7XG5cbiAgICAvLyAyNy4gU2V0IHRoZSBbW21pbmltdW1GcmFjdGlvbkRpZ2l0c11dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBtbmZkLlxuICAgIGludGVybmFsWydbW21pbmltdW1GcmFjdGlvbkRpZ2l0c11dJ10gPSBtbmZkO1xuXG4gICAgLy8gMjguIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuIGxldCBteGZkRGVmYXVsdCBiZSBtYXgobW5mZCwgY0RpZ2l0cyk7IGVsc2UgaWYgc1xuICAgIC8vICAgICBpcyBcInBlcmNlbnRcIiwgdGhlbiBsZXQgbXhmZERlZmF1bHQgYmUgbWF4KG1uZmQsIDApOyBlbHNlIGxldCBteGZkRGVmYXVsdFxuICAgIC8vICAgICBiZSBtYXgobW5mZCwgMykuXG4gICAgdmFyIG14ZmREZWZhdWx0ID0gcyA9PT0gJ2N1cnJlbmN5JyA/IE1hdGgubWF4KG1uZmQsIGNEaWdpdHMpIDogcyA9PT0gJ3BlcmNlbnQnID8gTWF0aC5tYXgobW5mZCwgMCkgOiBNYXRoLm1heChtbmZkLCAzKTtcblxuICAgIC8vIDI5LiBMZXQgbXhmZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJtYXhpbXVtRnJhY3Rpb25EaWdpdHNcIiwgbW5mZCwgMjAsIGFuZCBteGZkRGVmYXVsdC5cbiAgICB2YXIgbXhmZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWF4aW11bUZyYWN0aW9uRGlnaXRzJywgbW5mZCwgMjAsIG14ZmREZWZhdWx0KTtcblxuICAgIC8vIDMwLiBTZXQgdGhlIFtbbWF4aW11bUZyYWN0aW9uRGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIG14ZmQuXG4gICAgaW50ZXJuYWxbJ1tbbWF4aW11bUZyYWN0aW9uRGlnaXRzXV0nXSA9IG14ZmQ7XG5cbiAgICAvLyAzMS4gTGV0IG1uc2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zXG4gICAgLy8gICAgIHdpdGggYXJndW1lbnQgXCJtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNcIi5cbiAgICB2YXIgbW5zZCA9IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzO1xuXG4gICAgLy8gMzIuIExldCBteHNkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9uc1xuICAgIC8vICAgICB3aXRoIGFyZ3VtZW50IFwibWF4aW11bVNpZ25pZmljYW50RGlnaXRzXCIuXG4gICAgdmFyIG14c2QgPSBvcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cztcblxuICAgIC8vIDMzLiBJZiBtbnNkIGlzIG5vdCB1bmRlZmluZWQgb3IgbXhzZCBpcyBub3QgdW5kZWZpbmVkLCB0aGVuOlxuICAgIGlmIChtbnNkICE9PSB1bmRlZmluZWQgfHwgbXhzZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCBtbnNkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0XG4gICAgICAgIC8vICAgIG9wZXJhdGlvbiB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcIm1pbmltdW1TaWduaWZpY2FudERpZ2l0c1wiLCAxLCAyMSxcbiAgICAgICAgLy8gICAgYW5kIDEuXG4gICAgICAgIG1uc2QgPSBHZXROdW1iZXJPcHRpb24ob3B0aW9ucywgJ21pbmltdW1TaWduaWZpY2FudERpZ2l0cycsIDEsIDIxLCAxKTtcblxuICAgICAgICAvLyBiLiBMZXQgbXhzZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdFxuICAgICAgICAvLyAgICAgb3BlcmF0aW9uIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWF4aW11bVNpZ25pZmljYW50RGlnaXRzXCIsIG1uc2QsXG4gICAgICAgIC8vICAgICAyMSwgYW5kIDIxLlxuICAgICAgICBteHNkID0gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsICdtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMnLCBtbnNkLCAyMSwgMjEpO1xuXG4gICAgICAgIC8vIGMuIFNldCB0aGUgW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXRcbiAgICAgICAgLy8gICAgdG8gbW5zZCwgYW5kIHRoZSBbW21heGltdW1TaWduaWZpY2FudERpZ2l0c11dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgICAgIC8vICAgIG51bWJlckZvcm1hdCB0byBteHNkLlxuICAgICAgICBpbnRlcm5hbFsnW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXSddID0gbW5zZDtcbiAgICAgICAgaW50ZXJuYWxbJ1tbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0nXSA9IG14c2Q7XG4gICAgfVxuICAgIC8vIDM0LiBMZXQgZyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gd2l0aCB0aGVcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwidXNlR3JvdXBpbmdcIiwgXCJib29sZWFuXCIsIHVuZGVmaW5lZCwgYW5kIHRydWUuXG4gICAgdmFyIGcgPSBHZXRPcHRpb24ob3B0aW9ucywgJ3VzZUdyb3VwaW5nJywgJ2Jvb2xlYW4nLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgLy8gMzUuIFNldCB0aGUgW1t1c2VHcm91cGluZ11dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBnLlxuICAgIGludGVybmFsWydbW3VzZUdyb3VwaW5nXV0nXSA9IGc7XG5cbiAgICAvLyAzNi4gTGV0IGRhdGFMb2NhbGVEYXRhIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICAgbG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IGRhdGFMb2NhbGUuXG4gICAgdmFyIGRhdGFMb2NhbGVEYXRhID0gbG9jYWxlRGF0YVtkYXRhTG9jYWxlXTtcblxuICAgIC8vIDM3LiBMZXQgcGF0dGVybnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgICBkYXRhTG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IFwicGF0dGVybnNcIi5cbiAgICB2YXIgcGF0dGVybnMgPSBkYXRhTG9jYWxlRGF0YS5wYXR0ZXJucztcblxuICAgIC8vIDM4LiBBc3NlcnQ6IHBhdHRlcm5zIGlzIGFuIG9iamVjdCAoc2VlIDExLjIuMylcblxuICAgIC8vIDM5LiBMZXQgc3R5bGVQYXR0ZXJucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgIHBhdHRlcm5zIHdpdGggYXJndW1lbnQgcy5cbiAgICB2YXIgc3R5bGVQYXR0ZXJucyA9IHBhdHRlcm5zW3NdO1xuXG4gICAgLy8gNDAuIFNldCB0aGUgW1twb3NpdGl2ZVBhdHRlcm5dXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gdGhlXG4gICAgLy8gICAgIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBzdHlsZVBhdHRlcm5zIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50IFwicG9zaXRpdmVQYXR0ZXJuXCIuXG4gICAgaW50ZXJuYWxbJ1tbcG9zaXRpdmVQYXR0ZXJuXV0nXSA9IHN0eWxlUGF0dGVybnMucG9zaXRpdmVQYXR0ZXJuO1xuXG4gICAgLy8gNDEuIFNldCB0aGUgW1tuZWdhdGl2ZVBhdHRlcm5dXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gdGhlXG4gICAgLy8gICAgIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBzdHlsZVBhdHRlcm5zIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50IFwibmVnYXRpdmVQYXR0ZXJuXCIuXG4gICAgaW50ZXJuYWxbJ1tbbmVnYXRpdmVQYXR0ZXJuXV0nXSA9IHN0eWxlUGF0dGVybnMubmVnYXRpdmVQYXR0ZXJuO1xuXG4gICAgLy8gNDIuIFNldCB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB1bmRlZmluZWQuXG4gICAgaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gNDMuIFNldCB0aGUgW1tpbml0aWFsaXplZE51bWJlckZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0b1xuICAgIC8vICAgICB0cnVlLlxuICAgIGludGVybmFsWydbW2luaXRpYWxpemVkTnVtYmVyRm9ybWF0XV0nXSA9IHRydWU7XG5cbiAgICAvLyBJbiBFUzMsIHdlIG5lZWQgdG8gcHJlLWJpbmQgdGhlIGZvcm1hdCgpIGZ1bmN0aW9uXG4gICAgaWYgKGVzMykgbnVtYmVyRm9ybWF0LmZvcm1hdCA9IEdldEZvcm1hdE51bWJlci5jYWxsKG51bWJlckZvcm1hdCk7XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBSZWdFeHAgcHJvcGVydGllc1xuICAgIHJlZ2V4cFJlc3RvcmUoKTtcblxuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgaW5pdGlhbGlzZWQgb2JqZWN0XG4gICAgcmV0dXJuIG51bWJlckZvcm1hdDtcbn1cblxuZnVuY3Rpb24gQ3VycmVuY3lEaWdpdHMoY3VycmVuY3kpIHtcbiAgICAvLyBXaGVuIHRoZSBDdXJyZW5jeURpZ2l0cyBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYW4gYXJndW1lbnQgY3VycmVuY3lcbiAgICAvLyAod2hpY2ggbXVzdCBiZSBhbiB1cHBlciBjYXNlIFN0cmluZyB2YWx1ZSksIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuXG4gICAgLy8gMS4gSWYgdGhlIElTTyA0MjE3IGN1cnJlbmN5IGFuZCBmdW5kcyBjb2RlIGxpc3QgY29udGFpbnMgY3VycmVuY3kgYXMgYW5cbiAgICAvLyBhbHBoYWJldGljIGNvZGUsIHRoZW4gcmV0dXJuIHRoZSBtaW5vciB1bml0IHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlXG4gICAgLy8gY3VycmVuY3kgZnJvbSB0aGUgbGlzdDsgZWxzZSByZXR1cm4gMi5cbiAgICByZXR1cm4gY3VycmVuY3lNaW5vclVuaXRzW2N1cnJlbmN5XSAhPT0gdW5kZWZpbmVkID8gY3VycmVuY3lNaW5vclVuaXRzW2N1cnJlbmN5XSA6IDI7XG59XG5cbi8qIDExLjIuMyAqL2ludGVybmFscy5OdW1iZXJGb3JtYXQgPSB7XG4gICAgJ1tbYXZhaWxhYmxlTG9jYWxlc11dJzogW10sXG4gICAgJ1tbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV0nOiBbJ251J10sXG4gICAgJ1tbbG9jYWxlRGF0YV1dJzoge31cbn07XG5cbi8qKlxuICogV2hlbiB0aGUgc3VwcG9ydGVkTG9jYWxlc09mIG1ldGhvZCBvZiBJbnRsLk51bWJlckZvcm1hdCBpcyBjYWxsZWQsIHRoZVxuICogZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTEuMi4yICovXG5kZWZpbmVQcm9wZXJ0eShJbnRsLk51bWJlckZvcm1hdCwgJ3N1cHBvcnRlZExvY2FsZXNPZicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZuQmluZC5jYWxsKGZ1bmN0aW9uIChsb2NhbGVzKSB7XG4gICAgICAgIC8vIEJvdW5kIGZ1bmN0aW9ucyBvbmx5IGhhdmUgdGhlIGB0aGlzYCB2YWx1ZSBhbHRlcmVkIGlmIGJlaW5nIHVzZWQgYXMgYSBjb25zdHJ1Y3RvcixcbiAgICAgICAgLy8gdGhpcyBsZXRzIHVzIGltaXRhdGUgYSBuYXRpdmUgZnVuY3Rpb24gdGhhdCBoYXMgbm8gY29uc3RydWN0b3JcbiAgICAgICAgaWYgKCFob3AuY2FsbCh0aGlzLCAnW1thdmFpbGFibGVMb2NhbGVzXV0nKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignc3VwcG9ydGVkTG9jYWxlc09mKCkgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblxuICAgICAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdob3NlIHByb3BzIGNhbiBiZSB1c2VkIHRvIHJlc3RvcmUgdGhlIHZhbHVlcyBvZiBSZWdFeHAgcHJvcHNcbiAgICAgICAgdmFyIHJlZ2V4cFJlc3RvcmUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCksXG5cblxuICAgICAgICAvLyAxLiBJZiBvcHRpb25zIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgb3B0aW9ucyBiZSB1bmRlZmluZWQuXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0sXG5cblxuICAgICAgICAvLyAyLiBMZXQgYXZhaWxhYmxlTG9jYWxlcyBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbYXZhaWxhYmxlTG9jYWxlc11dIGludGVybmFsXG4gICAgICAgIC8vICAgIHByb3BlcnR5IG9mIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBvYmplY3QgdGhhdCBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZlxuICAgICAgICAvLyAgICBJbnRsLk51bWJlckZvcm1hdC5cblxuICAgICAgICBhdmFpbGFibGVMb2NhbGVzID0gdGhpc1snW1thdmFpbGFibGVMb2NhbGVzXV0nXSxcblxuXG4gICAgICAgIC8vIDMuIExldCByZXF1ZXN0ZWRMb2NhbGVzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQ2Fub25pY2FsaXplTG9jYWxlTGlzdFxuICAgICAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjEpIHdpdGggYXJndW1lbnQgbG9jYWxlcy5cbiAgICAgICAgcmVxdWVzdGVkTG9jYWxlcyA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgUmVnRXhwIHByb3BlcnRpZXNcbiAgICAgICAgcmVnZXhwUmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIDQuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFN1cHBvcnRlZExvY2FsZXMgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi44KSB3aXRoIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLFxuICAgICAgICAvLyAgICBhbmQgb3B0aW9ucy5cbiAgICAgICAgcmV0dXJuIFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcywgb3B0aW9ucyk7XG4gICAgfSwgaW50ZXJuYWxzLk51bWJlckZvcm1hdClcbn0pO1xuXG4vKipcbiAqIFRoaXMgbmFtZWQgYWNjZXNzb3IgcHJvcGVydHkgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZm9ybWF0cyBhIG51bWJlclxuICogYWNjb3JkaW5nIHRvIHRoZSBlZmZlY3RpdmUgbG9jYWxlIGFuZCB0aGUgZm9ybWF0dGluZyBvcHRpb25zIG9mIHRoaXNcbiAqIE51bWJlckZvcm1hdCBvYmplY3QuXG4gKi9cbi8qIDExLjMuMiAqL2RlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LnByb3RvdHlwZSwgJ2Zvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBHZXRGb3JtYXROdW1iZXJcbn0pO1xuXG5mdW5jdGlvbiBHZXRGb3JtYXROdW1iZXIoKSB7XG4gICAgdmFyIGludGVybmFsID0gdGhpcyAhPT0gbnVsbCAmJiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXSh0aGlzKSA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgLy8gU2F0aXNmeSB0ZXN0IDExLjNfYlxuICAgIGlmICghaW50ZXJuYWwgfHwgIWludGVybmFsWydbW2luaXRpYWxpemVkTnVtYmVyRm9ybWF0XV0nXSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciBmb3JtYXQoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5OdW1iZXJGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgLy8gVGhlIHZhbHVlIG9mIHRoZSBbW0dldF1dIGF0dHJpYnV0ZSBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIGZvbGxvd2luZ1xuICAgIC8vIHN0ZXBzOlxuXG4gICAgLy8gMS4gSWYgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdCBvYmplY3RcbiAgICAvLyAgICBpcyB1bmRlZmluZWQsIHRoZW46XG4gICAgaWYgKGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCBGIGJlIGEgRnVuY3Rpb24gb2JqZWN0LCB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgc2V0IGFzXG4gICAgICAgIC8vICAgIHNwZWNpZmllZCBmb3IgYnVpbHQtaW4gZnVuY3Rpb25zIGluIEVTNSwgMTUsIG9yIHN1Y2Nlc3NvciwgYW5kIHRoZVxuICAgICAgICAvLyAgICBsZW5ndGggcHJvcGVydHkgc2V0IHRvIDEsIHRoYXQgdGFrZXMgdGhlIGFyZ3VtZW50IHZhbHVlIGFuZFxuICAgICAgICAvLyAgICBwZXJmb3JtcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGkuIElmIHZhbHVlIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgdmFsdWUgYmUgdW5kZWZpbmVkLlxuICAgICAgICAgICAgLy8gaWkuIExldCB4IGJlIFRvTnVtYmVyKHZhbHVlKS5cbiAgICAgICAgICAgIC8vIGlpaS4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0TnVtYmVyIGFic3RyYWN0XG4gICAgICAgICAgICAvLyAgICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBhcmd1bWVudHMgdGhpcyBhbmQgeC5cbiAgICAgICAgICAgIHJldHVybiBGb3JtYXROdW1iZXIodGhpcywgLyogeCA9ICovTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYi4gTGV0IGJpbmQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIG9iamVjdCBkZWZpbmVkIGluIEVTNSxcbiAgICAgICAgLy8gICAgMTUuMy40LjUuXG4gICAgICAgIC8vIGMuIExldCBiZiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICBiaW5kIHdpdGggRiBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nXG4gICAgICAgIC8vICAgIHRoZSBzaW5nbGUgaXRlbSB0aGlzLlxuICAgICAgICB2YXIgYmYgPSBmbkJpbmQuY2FsbChGLCB0aGlzKTtcblxuICAgICAgICAvLyBkLiBTZXQgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdFxuICAgICAgICAvLyAgICBvYmplY3QgdG8gYmYuXG4gICAgICAgIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9IGJmO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpc1xuICAgIC8vIE51bWJlckZvcm1hdCBvYmplY3QuXG4gICAgcmV0dXJuIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cygpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaW50ZXJuYWwgPSB0aGlzICE9PSBudWxsICYmIGJhYmVsSGVscGVycyQxW1widHlwZW9mXCJdKHRoaXMpID09PSAnb2JqZWN0JyAmJiBnZXRJbnRlcm5hbFByb3BlcnRpZXModGhpcyk7XG4gICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgZm9yIGZvcm1hdFRvUGFydHMoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5OdW1iZXJGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiBGb3JtYXROdW1iZXJUb1BhcnRzKHRoaXMsIHgpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSW50bC5OdW1iZXJGb3JtYXQucHJvdG90eXBlLCAnZm9ybWF0VG9QYXJ0cycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZvcm1hdFRvUGFydHNcbn0pO1xuXG4vKlxuICogQHNwZWNbc3Rhc20vZWNtYTQwMi9udW1iZXItZm9ybWF0LXRvLXBhcnRzL3NwZWMvbnVtYmVyZm9ybWF0Lmh0bWxdXG4gKiBAY2xhdXNlW3NlYy1mb3JtYXRudW1iZXJ0b3BhcnRzXVxuICovXG5mdW5jdGlvbiBGb3JtYXROdW1iZXJUb1BhcnRzKG51bWJlckZvcm1hdCwgeCkge1xuICAgIC8vIDEuIExldCBwYXJ0cyBiZSA/IFBhcnRpdGlvbk51bWJlclBhdHRlcm4obnVtYmVyRm9ybWF0LCB4KS5cbiAgICB2YXIgcGFydHMgPSBQYXJ0aXRpb25OdW1iZXJQYXR0ZXJuKG51bWJlckZvcm1hdCwgeCk7XG4gICAgLy8gMi4gTGV0IHJlc3VsdCBiZSBBcnJheUNyZWF0ZSgwKS5cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gMy4gTGV0IG4gYmUgMC5cbiAgICB2YXIgbiA9IDA7XG4gICAgLy8gNC4gRm9yIGVhY2ggcGFydCBpbiBwYXJ0cywgZG86XG4gICAgZm9yICh2YXIgaSA9IDA7IHBhcnRzLmxlbmd0aCA+IGk7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAvLyBhLiBMZXQgTyBiZSBPYmplY3RDcmVhdGUoJU9iamVjdFByb3RvdHlwZSUpLlxuICAgICAgICB2YXIgTyA9IHt9O1xuICAgICAgICAvLyBhLiBQZXJmb3JtID8gQ3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhPLCBcInR5cGVcIiwgcGFydC5bW3R5cGVdXSkuXG4gICAgICAgIE8udHlwZSA9IHBhcnRbJ1tbdHlwZV1dJ107XG4gICAgICAgIC8vIGEuIFBlcmZvcm0gPyBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFwidmFsdWVcIiwgcGFydC5bW3ZhbHVlXV0pLlxuICAgICAgICBPLnZhbHVlID0gcGFydFsnW1t2YWx1ZV1dJ107XG4gICAgICAgIC8vIGEuIFBlcmZvcm0gPyBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KHJlc3VsdCwgPyBUb1N0cmluZyhuKSwgTykuXG4gICAgICAgIHJlc3VsdFtuXSA9IE87XG4gICAgICAgIC8vIGEuIEluY3JlbWVudCBuIGJ5IDEuXG4gICAgICAgIG4gKz0gMTtcbiAgICB9XG4gICAgLy8gNS4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogQHNwZWNbc3Rhc20vZWNtYTQwMi9udW1iZXItZm9ybWF0LXRvLXBhcnRzL3NwZWMvbnVtYmVyZm9ybWF0Lmh0bWxdXG4gKiBAY2xhdXNlW3NlYy1wYXJ0aXRpb25udW1iZXJwYXR0ZXJuXVxuICovXG5mdW5jdGlvbiBQYXJ0aXRpb25OdW1iZXJQYXR0ZXJuKG51bWJlckZvcm1hdCwgeCkge1xuXG4gICAgdmFyIGludGVybmFsID0gZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKG51bWJlckZvcm1hdCksXG4gICAgICAgIGxvY2FsZSA9IGludGVybmFsWydbW2RhdGFMb2NhbGVdXSddLFxuICAgICAgICBudW1zID0gaW50ZXJuYWxbJ1tbbnVtYmVyaW5nU3lzdGVtXV0nXSxcbiAgICAgICAgZGF0YSA9IGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bbG9jYWxlXSxcbiAgICAgICAgaWxkID0gZGF0YS5zeW1ib2xzW251bXNdIHx8IGRhdGEuc3ltYm9scy5sYXRuLFxuICAgICAgICBwYXR0ZXJuID0gdm9pZCAwO1xuXG4gICAgLy8gMS4gSWYgeCBpcyBub3QgTmFOIGFuZCB4IDwgMCwgdGhlbjpcbiAgICBpZiAoIWlzTmFOKHgpICYmIHggPCAwKSB7XG4gICAgICAgIC8vIGEuIExldCB4IGJlIC14LlxuICAgICAgICB4ID0gLXg7XG4gICAgICAgIC8vIGEuIExldCBwYXR0ZXJuIGJlIHRoZSB2YWx1ZSBvZiBudW1iZXJGb3JtYXQuW1tuZWdhdGl2ZVBhdHRlcm5dXS5cbiAgICAgICAgcGF0dGVybiA9IGludGVybmFsWydbW25lZ2F0aXZlUGF0dGVybl1dJ107XG4gICAgfVxuICAgIC8vIDIuIEVsc2UsXG4gICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBhLiBMZXQgcGF0dGVybiBiZSB0aGUgdmFsdWUgb2YgbnVtYmVyRm9ybWF0LltbcG9zaXRpdmVQYXR0ZXJuXV0uXG4gICAgICAgICAgICBwYXR0ZXJuID0gaW50ZXJuYWxbJ1tbcG9zaXRpdmVQYXR0ZXJuXV0nXTtcbiAgICAgICAgfVxuICAgIC8vIDMuIExldCByZXN1bHQgYmUgYSBuZXcgZW1wdHkgTGlzdC5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IExpc3QoKTtcbiAgICAvLyA0LiBMZXQgYmVnaW5JbmRleCBiZSBDYWxsKCVTdHJpbmdQcm90b19pbmRleE9mJSwgcGF0dGVybiwgXCJ7XCIsIDApLlxuICAgIHZhciBiZWdpbkluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd7JywgMCk7XG4gICAgLy8gNS4gTGV0IGVuZEluZGV4IGJlIDAuXG4gICAgdmFyIGVuZEluZGV4ID0gMDtcbiAgICAvLyA2LiBMZXQgbmV4dEluZGV4IGJlIDAuXG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgLy8gNy4gTGV0IGxlbmd0aCBiZSB0aGUgbnVtYmVyIG9mIGNvZGUgdW5pdHMgaW4gcGF0dGVybi5cbiAgICB2YXIgbGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgLy8gOC4gUmVwZWF0IHdoaWxlIGJlZ2luSW5kZXggaXMgYW4gaW50ZWdlciBpbmRleCBpbnRvIHBhdHRlcm46XG4gICAgd2hpbGUgKGJlZ2luSW5kZXggPiAtMSAmJiBiZWdpbkluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIC8vIGEuIFNldCBlbmRJbmRleCB0byBDYWxsKCVTdHJpbmdQcm90b19pbmRleE9mJSwgcGF0dGVybiwgXCJ9XCIsIGJlZ2luSW5kZXgpXG4gICAgICAgIGVuZEluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd9JywgYmVnaW5JbmRleCk7XG4gICAgICAgIC8vIGEuIElmIGVuZEluZGV4ID0gLTEsIHRocm93IG5ldyBFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmIChlbmRJbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAvLyBhLiBJZiBiZWdpbkluZGV4IGlzIGdyZWF0ZXIgdGhhbiBuZXh0SW5kZXgsIHRoZW46XG4gICAgICAgIGlmIChiZWdpbkluZGV4ID4gbmV4dEluZGV4KSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgbGl0ZXJhbCBiZSBhIHN1YnN0cmluZyBvZiBwYXR0ZXJuIGZyb20gcG9zaXRpb24gbmV4dEluZGV4LCBpbmNsdXNpdmUsIHRvIHBvc2l0aW9uIGJlZ2luSW5kZXgsIGV4Y2x1c2l2ZS5cbiAgICAgICAgICAgIHZhciBsaXRlcmFsID0gcGF0dGVybi5zdWJzdHJpbmcobmV4dEluZGV4LCBiZWdpbkluZGV4KTtcbiAgICAgICAgICAgIC8vIGlpLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwibGl0ZXJhbFwiLCBbW3ZhbHVlXV06IGxpdGVyYWwgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2xpdGVyYWwnLCAnW1t2YWx1ZV1dJzogbGl0ZXJhbCB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhLiBMZXQgcCBiZSB0aGUgc3Vic3RyaW5nIG9mIHBhdHRlcm4gZnJvbSBwb3NpdGlvbiBiZWdpbkluZGV4LCBleGNsdXNpdmUsIHRvIHBvc2l0aW9uIGVuZEluZGV4LCBleGNsdXNpdmUuXG4gICAgICAgIHZhciBwID0gcGF0dGVybi5zdWJzdHJpbmcoYmVnaW5JbmRleCArIDEsIGVuZEluZGV4KTtcbiAgICAgICAgLy8gYS4gSWYgcCBpcyBlcXVhbCBcIm51bWJlclwiLCB0aGVuOlxuICAgICAgICBpZiAocCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gaS4gSWYgeCBpcyBOYU4sXG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgbiBiZSBhbiBJTEQgU3RyaW5nIHZhbHVlIGluZGljYXRpbmcgdGhlIE5hTiB2YWx1ZS5cbiAgICAgICAgICAgICAgICB2YXIgbiA9IGlsZC5uYW47XG4gICAgICAgICAgICAgICAgLy8gMi4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcIm5hblwiLCBbW3ZhbHVlXV06IG4gfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICduYW4nLCAnW1t2YWx1ZV1dJzogbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlpLiBFbHNlIGlmIGlzRmluaXRlKHgpIGlzIGZhbHNlLFxuICAgICAgICAgICAgZWxzZSBpZiAoIWlzRmluaXRlKHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCBuIGJlIGFuIElMRCBTdHJpbmcgdmFsdWUgaW5kaWNhdGluZyBpbmZpbml0eS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9uID0gaWxkLmluZmluaXR5O1xuICAgICAgICAgICAgICAgICAgICAvLyAyLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwiaW5maW5pdHlcIiwgW1t2YWx1ZV1dOiBuIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2luZmluaXR5JywgJ1tbdmFsdWVdXSc6IF9uIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpaWkuIEVsc2UsXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBJZiB0aGUgdmFsdWUgb2YgbnVtYmVyRm9ybWF0Lltbc3R5bGVdXSBpcyBcInBlcmNlbnRcIiBhbmQgaXNGaW5pdGUoeCksIGxldCB4IGJlIDEwMCDDlyB4LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFsWydbW3N0eWxlXV0nXSA9PT0gJ3BlcmNlbnQnICYmIGlzRmluaXRlKHgpKSB4ICo9IDEwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9uMiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIElmIHRoZSBudW1iZXJGb3JtYXQuW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXSBhbmQgbnVtYmVyRm9ybWF0LltbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0gYXJlIHByZXNlbnQsIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3AuY2FsbChpbnRlcm5hbCwgJ1tbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0nKSAmJiBob3AuY2FsbChpbnRlcm5hbCwgJ1tbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBuIGJlIFRvUmF3UHJlY2lzaW9uKHgsIG51bWJlckZvcm1hdC5bW21pbmltdW1TaWduaWZpY2FudERpZ2l0c11dLCBudW1iZXJGb3JtYXQuW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXSkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX24yID0gVG9SYXdQcmVjaXNpb24oeCwgaW50ZXJuYWxbJ1tbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0nXSwgaW50ZXJuYWxbJ1tbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBFbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBuIGJlIFRvUmF3Rml4ZWQoeCwgbnVtYmVyRm9ybWF0LltbbWluaW11bUludGVnZXJEaWdpdHNdXSwgbnVtYmVyRm9ybWF0LltbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0sIG51bWJlckZvcm1hdC5bW21heGltdW1GcmFjdGlvbkRpZ2l0c11dKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX24yID0gVG9SYXdGaXhlZCh4LCBpbnRlcm5hbFsnW1ttaW5pbXVtSW50ZWdlckRpZ2l0c11dJ10sIGludGVybmFsWydbW21pbmltdW1GcmFjdGlvbkRpZ2l0c11dJ10sIGludGVybmFsWydbW21heGltdW1GcmFjdGlvbkRpZ2l0c11dJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQuIElmIHRoZSB2YWx1ZSBvZiB0aGUgbnVtYmVyRm9ybWF0LltbbnVtYmVyaW5nU3lzdGVtXV0gbWF0Y2hlcyBvbmUgb2YgdGhlIHZhbHVlcyBpbiB0aGUgXCJOdW1iZXJpbmcgU3lzdGVtXCIgY29sdW1uIG9mIFRhYmxlIDIgYmVsb3csIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1TeXNbbnVtc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZGlnaXRzIGJlIGFuIGFycmF5IHdob3NlIDEwIFN0cmluZyB2YWx1ZWQgZWxlbWVudHMgYXJlIHRoZSBVVEYtMTYgc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgMTAgZGlnaXRzIHNwZWNpZmllZCBpbiB0aGUgXCJEaWdpdHNcIiBjb2x1bW4gb2YgdGhlIG1hdGNoaW5nIHJvdyBpbiBUYWJsZSAyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzID0gbnVtU3lzW251bXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBSZXBsYWNlIGVhY2ggZGlnaXQgaW4gbiB3aXRoIHRoZSB2YWx1ZSBvZiBkaWdpdHNbZGlnaXRdLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbjIgPSBTdHJpbmcoX24yKS5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKGRpZ2l0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlnaXRzW2RpZ2l0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDUuIEVsc2UgdXNlIGFuIGltcGxlbWVudGF0aW9uIGRlcGVuZGVudCBhbGdvcml0aG0gdG8gbWFwIG4gdG8gdGhlIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uIG9mIG4gaW4gdGhlIGdpdmVuIG51bWJlcmluZyBzeXN0ZW0uXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIF9uMiA9IFN0cmluZyhfbjIpOyAvLyAjIyNUT0RPIyMjXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlZ2VyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWN0aW9uID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNi4gTGV0IGRlY2ltYWxTZXBJbmRleCBiZSBDYWxsKCVTdHJpbmdQcm90b19pbmRleE9mJSwgbiwgXCIuXCIsIDApLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2ltYWxTZXBJbmRleCA9IF9uMi5pbmRleE9mKCcuJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA3LiBJZiBkZWNpbWFsU2VwSW5kZXggPiAwLCB0aGVuOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2ltYWxTZXBJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgaW50ZWdlciBiZSB0aGUgc3Vic3RyaW5nIG9mIG4gZnJvbSBwb3NpdGlvbiAwLCBpbmNsdXNpdmUsIHRvIHBvc2l0aW9uIGRlY2ltYWxTZXBJbmRleCwgZXhjbHVzaXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVnZXIgPSBfbjIuc3Vic3RyaW5nKDAsIGRlY2ltYWxTZXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IGZyYWN0aW9uIGJlIHRoZSBzdWJzdHJpbmcgb2YgbiBmcm9tIHBvc2l0aW9uIGRlY2ltYWxTZXBJbmRleCwgZXhjbHVzaXZlLCB0byB0aGUgZW5kIG9mIG4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhY3Rpb24gPSBfbjIuc3Vic3RyaW5nKGRlY2ltYWxTZXBJbmRleCArIDEsIGRlY2ltYWxTZXBJbmRleC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gOC4gRWxzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgaW50ZWdlciBiZSBuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ2VyID0gX24yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZnJhY3Rpb24gYmUgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA5LiBJZiB0aGUgdmFsdWUgb2YgdGhlIG51bWJlckZvcm1hdC5bW3VzZUdyb3VwaW5nXV0gaXMgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbFsnW1t1c2VHcm91cGluZ11dJ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZ3JvdXBTZXBTeW1ib2wgYmUgdGhlIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZ3JvdXBpbmcgc2VwYXJhdG9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncm91cFNlcFN5bWJvbCA9IGlsZC5ncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZ3JvdXBzIGJlIGEgTGlzdCB3aG9zZSBlbGVtZW50cyBhcmUsIGluIGxlZnQgdG8gcmlnaHQgb3JkZXIsIHRoZSBzdWJzdHJpbmdzIGRlZmluZWQgYnkgSUxORCBzZXQgb2YgbG9jYXRpb25zIHdpdGhpbiB0aGUgaW50ZWdlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS0tLT4gaW1wbGVtZW50YXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJpbWFyeSBncm91cCByZXByZXNlbnRzIHRoZSBncm91cCBjbG9zZXN0IHRvIHRoZSBkZWNpbWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBnU2l6ZSA9IGRhdGEucGF0dGVybnMucHJpbWFyeUdyb3VwU2l6ZSB8fCAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlY29uZGFyeSBncm91cCBpcyBldmVyeSBvdGhlciBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZ1NpemUgPSBkYXRhLnBhdHRlcm5zLnNlY29uZGFyeUdyb3VwU2l6ZSB8fCBwZ1NpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JvdXAgb25seSBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZWdlci5sZW5ndGggPiBwZ1NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5kZXggb2YgdGhlIHByaW1hcnkgZ3JvdXBpbmcgc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBpbnRlZ2VyLmxlbmd0aCAtIHBnU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnRpbmcgaW5kZXggZm9yIG91ciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSBlbmQgJSBzZ1NpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGludGVnZXIuc2xpY2UoMCwgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0Lmxlbmd0aCkgYXJyUHVzaC5jYWxsKGdyb3Vwcywgc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIHRvIHNlcGFyYXRlIGludG8gc2Vjb25kYXJ5IGdyb3VwaW5nIGRpZ2l0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaWR4IDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwoZ3JvdXBzLCBpbnRlZ2VyLnNsaWNlKGlkeCwgaWR4ICsgc2dTaXplKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggKz0gc2dTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJpbWFyeSBncm91cGluZyBkaWdpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKGdyb3VwcywgaW50ZWdlci5zbGljZShlbmQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwoZ3JvdXBzLCBpbnRlZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gQXNzZXJ0OiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGdyb3VwcyBMaXN0IGlzIGdyZWF0ZXIgdGhhbiAwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBSZXBlYXQsIHdoaWxlIGdyb3VwcyBMaXN0IGlzIG5vdCBlbXB0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBSZW1vdmUgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSBncm91cHMgYW5kIGxldCBpbnRlZ2VyR3JvdXAgYmUgdGhlIHZhbHVlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGludGVnZXJHcm91cCA9IGFyclNoaWZ0LmNhbGwoZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWkuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJpbnRlZ2VyXCIsIFtbdmFsdWVdXTogaW50ZWdlckdyb3VwIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2ludGVnZXInLCAnW1t2YWx1ZV1dJzogaW50ZWdlckdyb3VwIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpaWkuIElmIGdyb3VwcyBMaXN0IGlzIG5vdCBlbXB0eSwgdGhlbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJncm91cFwiLCBbW3ZhbHVlXV06IGdyb3VwU2VwU3ltYm9sIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdncm91cCcsICdbW3ZhbHVlXV0nOiBncm91cFNlcFN5bWJvbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEwLiBFbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJpbnRlZ2VyXCIsIFtbdmFsdWVdXTogaW50ZWdlciB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdpbnRlZ2VyJywgJ1tbdmFsdWVdXSc6IGludGVnZXIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEuIElmIGZyYWN0aW9uIGlzIG5vdCB1bmRlZmluZWQsIHRoZW46XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBkZWNpbWFsU2VwU3ltYm9sIGJlIHRoZSBJTE5EIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRlY2ltYWwgc2VwYXJhdG9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNpbWFsU2VwU3ltYm9sID0gaWxkLmRlY2ltYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImRlY2ltYWxcIiwgW1t2YWx1ZV1dOiBkZWNpbWFsU2VwU3ltYm9sIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnZGVjaW1hbCcsICdbW3ZhbHVlXV0nOiBkZWNpbWFsU2VwU3ltYm9sIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJmcmFjdGlvblwiLCBbW3ZhbHVlXV06IGZyYWN0aW9uIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnZnJhY3Rpb24nLCAnW1t2YWx1ZV1dJzogZnJhY3Rpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhLiBFbHNlIGlmIHAgaXMgZXF1YWwgXCJwbHVzU2lnblwiLCB0aGVuOlxuICAgICAgICBlbHNlIGlmIChwID09PSBcInBsdXNTaWduXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBpLiBMZXQgcGx1c1NpZ25TeW1ib2wgYmUgdGhlIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcGx1cyBzaWduLlxuICAgICAgICAgICAgICAgIHZhciBwbHVzU2lnblN5bWJvbCA9IGlsZC5wbHVzU2lnbjtcbiAgICAgICAgICAgICAgICAvLyBpaS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcInBsdXNTaWduXCIsIFtbdmFsdWVdXTogcGx1c1NpZ25TeW1ib2wgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdwbHVzU2lnbicsICdbW3ZhbHVlXV0nOiBwbHVzU2lnblN5bWJvbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGEuIEVsc2UgaWYgcCBpcyBlcXVhbCBcIm1pbnVzU2lnblwiLCB0aGVuOlxuICAgICAgICAgICAgZWxzZSBpZiAocCA9PT0gXCJtaW51c1NpZ25cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgbWludXNTaWduU3ltYm9sIGJlIHRoZSBJTE5EIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1pbnVzIHNpZ24uXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW51c1NpZ25TeW1ib2wgPSBpbGQubWludXNTaWduO1xuICAgICAgICAgICAgICAgICAgICAvLyBpaS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcIm1pbnVzU2lnblwiLCBbW3ZhbHVlXV06IG1pbnVzU2lnblN5bWJvbCB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdtaW51c1NpZ24nLCAnW1t2YWx1ZV1dJzogbWludXNTaWduU3ltYm9sIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhLiBFbHNlIGlmIHAgaXMgZXF1YWwgXCJwZXJjZW50U2lnblwiIGFuZCBudW1iZXJGb3JtYXQuW1tzdHlsZV1dIGlzIFwicGVyY2VudFwiLCB0aGVuOlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHAgPT09IFwicGVyY2VudFNpZ25cIiAmJiBpbnRlcm5hbFsnW1tzdHlsZV1dJ10gPT09IFwicGVyY2VudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgcGVyY2VudFNpZ25TeW1ib2wgYmUgdGhlIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcGVyY2VudCBzaWduLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRTaWduU3ltYm9sID0gaWxkLnBlcmNlbnRTaWduO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWkuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJwZXJjZW50U2lnblwiLCBbW3ZhbHVlXV06IHBlcmNlbnRTaWduU3ltYm9sIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdsaXRlcmFsJywgJ1tbdmFsdWVdXSc6IHBlcmNlbnRTaWduU3ltYm9sIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIEVsc2UgaWYgcCBpcyBlcXVhbCBcImN1cnJlbmN5XCIgYW5kIG51bWJlckZvcm1hdC5bW3N0eWxlXV0gaXMgXCJjdXJyZW5jeVwiLCB0aGVuOlxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwID09PSBcImN1cnJlbmN5XCIgJiYgaW50ZXJuYWxbJ1tbc3R5bGVdXSddID09PSBcImN1cnJlbmN5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgY3VycmVuY3kgYmUgdGhlIHZhbHVlIG9mIG51bWJlckZvcm1hdC5bW2N1cnJlbmN5XV0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5ID0gaW50ZXJuYWxbJ1tbY3VycmVuY3ldXSddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWkuIElmIG51bWJlckZvcm1hdC5bW2N1cnJlbmN5RGlzcGxheV1dIGlzIFwiY29kZVwiLCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFsWydbW2N1cnJlbmN5RGlzcGxheV1dJ10gPT09IFwiY29kZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCBjZCBiZSBjdXJyZW5jeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2QgPSBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWlpLiBFbHNlIGlmIG51bWJlckZvcm1hdC5bW2N1cnJlbmN5RGlzcGxheV1dIGlzIFwic3ltYm9sXCIsIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnRlcm5hbFsnW1tjdXJyZW5jeURpc3BsYXldXSddID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBMZXQgY2QgYmUgYW4gSUxEIHN0cmluZyByZXByZXNlbnRpbmcgY3VycmVuY3kgaW4gc2hvcnQgZm9ybS4gSWYgdGhlIGltcGxlbWVudGF0aW9uIGRvZXMgbm90IGhhdmUgc3VjaCBhIHJlcHJlc2VudGF0aW9uIG9mIGN1cnJlbmN5LCB1c2UgY3VycmVuY3kgaXRzZWxmLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2QgPSBkYXRhLmN1cnJlbmNpZXNbY3VycmVuY3ldIHx8IGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl2LiBFbHNlIGlmIG51bWJlckZvcm1hdC5bW2N1cnJlbmN5RGlzcGxheV1dIGlzIFwibmFtZVwiLCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGludGVybmFsWydbW2N1cnJlbmN5RGlzcGxheV1dJ10gPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IGNkIGJlIGFuIElMRCBzdHJpbmcgcmVwcmVzZW50aW5nIGN1cnJlbmN5IGluIGxvbmcgZm9ybS4gSWYgdGhlIGltcGxlbWVudGF0aW9uIGRvZXMgbm90IGhhdmUgc3VjaCBhIHJlcHJlc2VudGF0aW9uIG9mIGN1cnJlbmN5LCB0aGVuIHVzZSBjdXJyZW5jeSBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2QgPSBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2LiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwiY3VycmVuY3lcIiwgW1t2YWx1ZV1dOiBjZCB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2N1cnJlbmN5JywgJ1tbdmFsdWVdXSc6IGNkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gRWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgbGl0ZXJhbCBiZSB0aGUgc3Vic3RyaW5nIG9mIHBhdHRlcm4gZnJvbSBwb3NpdGlvbiBiZWdpbkluZGV4LCBpbmNsdXNpdmUsIHRvIHBvc2l0aW9uIGVuZEluZGV4LCBpbmNsdXNpdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfbGl0ZXJhbCA9IHBhdHRlcm4uc3Vic3RyaW5nKGJlZ2luSW5kZXgsIGVuZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWkuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJsaXRlcmFsXCIsIFtbdmFsdWVdXTogbGl0ZXJhbCB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdsaXRlcmFsJywgJ1tbdmFsdWVdXSc6IF9saXRlcmFsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gYS4gU2V0IG5leHRJbmRleCB0byBlbmRJbmRleCArIDEuXG4gICAgICAgIG5leHRJbmRleCA9IGVuZEluZGV4ICsgMTtcbiAgICAgICAgLy8gYS4gU2V0IGJlZ2luSW5kZXggdG8gQ2FsbCglU3RyaW5nUHJvdG9faW5kZXhPZiUsIHBhdHRlcm4sIFwie1wiLCBuZXh0SW5kZXgpXG4gICAgICAgIGJlZ2luSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ3snLCBuZXh0SW5kZXgpO1xuICAgIH1cbiAgICAvLyA5LiBJZiBuZXh0SW5kZXggaXMgbGVzcyB0aGFuIGxlbmd0aCwgdGhlbjpcbiAgICBpZiAobmV4dEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIC8vIGEuIExldCBsaXRlcmFsIGJlIHRoZSBzdWJzdHJpbmcgb2YgcGF0dGVybiBmcm9tIHBvc2l0aW9uIG5leHRJbmRleCwgaW5jbHVzaXZlLCB0byBwb3NpdGlvbiBsZW5ndGgsIGV4Y2x1c2l2ZS5cbiAgICAgICAgdmFyIF9saXRlcmFsMiA9IHBhdHRlcm4uc3Vic3RyaW5nKG5leHRJbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgLy8gYS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImxpdGVyYWxcIiwgW1t2YWx1ZV1dOiBsaXRlcmFsIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2xpdGVyYWwnLCAnW1t2YWx1ZV1dJzogX2xpdGVyYWwyIH0pO1xuICAgIH1cbiAgICAvLyAxMC4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogQHNwZWNbc3Rhc20vZWNtYTQwMi9udW1iZXItZm9ybWF0LXRvLXBhcnRzL3NwZWMvbnVtYmVyZm9ybWF0Lmh0bWxdXG4gKiBAY2xhdXNlW3NlYy1mb3JtYXRudW1iZXJdXG4gKi9cbmZ1bmN0aW9uIEZvcm1hdE51bWJlcihudW1iZXJGb3JtYXQsIHgpIHtcbiAgICAvLyAxLiBMZXQgcGFydHMgYmUgPyBQYXJ0aXRpb25OdW1iZXJQYXR0ZXJuKG51bWJlckZvcm1hdCwgeCkuXG4gICAgdmFyIHBhcnRzID0gUGFydGl0aW9uTnVtYmVyUGF0dGVybihudW1iZXJGb3JtYXQsIHgpO1xuICAgIC8vIDIuIExldCByZXN1bHQgYmUgYW4gZW1wdHkgU3RyaW5nLlxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAvLyAzLiBGb3IgZWFjaCBwYXJ0IGluIHBhcnRzLCBkbzpcbiAgICBmb3IgKHZhciBpID0gMDsgcGFydHMubGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIC8vIGEuIFNldCByZXN1bHQgdG8gYSBTdHJpbmcgdmFsdWUgcHJvZHVjZWQgYnkgY29uY2F0ZW5hdGluZyByZXN1bHQgYW5kIHBhcnQuW1t2YWx1ZV1dLlxuICAgICAgICByZXN1bHQgKz0gcGFydFsnW1t2YWx1ZV1dJ107XG4gICAgfVxuICAgIC8vIDQuIFJldHVybiByZXN1bHQuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBUb1Jhd1ByZWNpc2lvbiBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIHggKHdoaWNoXG4gKiBtdXN0IGJlIGEgZmluaXRlIG5vbi1uZWdhdGl2ZSBudW1iZXIpLCBtaW5QcmVjaXNpb24sIGFuZCBtYXhQcmVjaXNpb24gKGJvdGhcbiAqIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAxIGFuZCAyMSkgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIFRvUmF3UHJlY2lzaW9uKHgsIG1pblByZWNpc2lvbiwgbWF4UHJlY2lzaW9uKSB7XG4gICAgLy8gMS4gTGV0IHAgYmUgbWF4UHJlY2lzaW9uLlxuICAgIHZhciBwID0gbWF4UHJlY2lzaW9uO1xuXG4gICAgdmFyIG0gPSB2b2lkIDAsXG4gICAgICAgIGUgPSB2b2lkIDA7XG5cbiAgICAvLyAyLiBJZiB4ID0gMCwgdGhlblxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBTdHJpbmcgY29uc2lzdGluZyBvZiBwIG9jY3VycmVuY2VzIG9mIHRoZSBjaGFyYWN0ZXIgXCIwXCIuXG4gICAgICAgIG0gPSBhcnJKb2luLmNhbGwoQXJyYXkocCArIDEpLCAnMCcpO1xuICAgICAgICAvLyBiLiBMZXQgZSBiZSAwLlxuICAgICAgICBlID0gMDtcbiAgICB9XG4gICAgLy8gMy4gRWxzZVxuICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gYS4gTGV0IGUgYW5kIG4gYmUgaW50ZWdlcnMgc3VjaCB0aGF0IDEw4bWW4oG7wrkg4omkIG4gPCAxMOG1liBhbmQgZm9yIHdoaWNoIHRoZVxuICAgICAgICAgICAgLy8gICAgZXhhY3QgbWF0aGVtYXRpY2FsIHZhbHVlIG9mIG4gw5cgMTDhtYnigbvhtZbigbrCuSDigJMgeCBpcyBhcyBjbG9zZSB0byB6ZXJvIGFzXG4gICAgICAgICAgICAvLyAgICBwb3NzaWJsZS4gSWYgdGhlcmUgYXJlIHR3byBzdWNoIHNldHMgb2YgZSBhbmQgbiwgcGljayB0aGUgZSBhbmQgbiBmb3JcbiAgICAgICAgICAgIC8vICAgIHdoaWNoIG4gw5cgMTDhtYnigbvhtZbigbrCuSBpcyBsYXJnZXIuXG4gICAgICAgICAgICBlID0gbG9nMTBGbG9vcihNYXRoLmFicyh4KSk7XG5cbiAgICAgICAgICAgIC8vIEVhc2llciB0byBnZXQgdG8gbSBmcm9tIGhlcmVcbiAgICAgICAgICAgIHZhciBmID0gTWF0aC5yb3VuZChNYXRoLmV4cChNYXRoLmFicyhlIC0gcCArIDEpICogTWF0aC5MTjEwKSk7XG5cbiAgICAgICAgICAgIC8vIGIuIExldCBtIGJlIHRoZSBTdHJpbmcgY29uc2lzdGluZyBvZiB0aGUgZGlnaXRzIG9mIHRoZSBkZWNpbWFsXG4gICAgICAgICAgICAvLyAgICByZXByZXNlbnRhdGlvbiBvZiBuIChpbiBvcmRlciwgd2l0aCBubyBsZWFkaW5nIHplcm9lcylcbiAgICAgICAgICAgIG0gPSBTdHJpbmcoTWF0aC5yb3VuZChlIC0gcCArIDEgPCAwID8geCAqIGYgOiB4IC8gZikpO1xuICAgICAgICB9XG5cbiAgICAvLyA0LiBJZiBlIOKJpSBwLCB0aGVuXG4gICAgaWYgKGUgPj0gcClcbiAgICAgICAgLy8gYS4gUmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIG0gYW5kIGUtcCsxIG9jY3VycmVuY2VzIG9mIHRoZSBjaGFyYWN0ZXIgXCIwXCIuXG4gICAgICAgIHJldHVybiBtICsgYXJySm9pbi5jYWxsKEFycmF5KGUgLSBwICsgMSArIDEpLCAnMCcpO1xuXG4gICAgICAgIC8vIDUuIElmIGUgPSBwLTEsIHRoZW5cbiAgICBlbHNlIGlmIChlID09PSBwIC0gMSlcbiAgICAgICAgICAgIC8vIGEuIFJldHVybiBtLlxuICAgICAgICAgICAgcmV0dXJuIG07XG5cbiAgICAgICAgICAgIC8vIDYuIElmIGUg4omlIDAsIHRoZW5cbiAgICAgICAgZWxzZSBpZiAoZSA+PSAwKVxuICAgICAgICAgICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBmaXJzdCBlKzEgY2hhcmFjdGVycyBvZiBtLCB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgLy8gICAgXCIuXCIsIGFuZCB0aGUgcmVtYWluaW5nIHDigJMoZSsxKSBjaGFyYWN0ZXJzIG9mIG0uXG4gICAgICAgICAgICAgICAgbSA9IG0uc2xpY2UoMCwgZSArIDEpICsgJy4nICsgbS5zbGljZShlICsgMSk7XG5cbiAgICAgICAgICAgICAgICAvLyA3LiBJZiBlIDwgMCwgdGhlblxuICAgICAgICAgICAgZWxzZSBpZiAoZSA8IDApXG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBTdHJpbmcgXCIwLlwiLCDigJMoZSsxKSBvY2N1cnJlbmNlcyBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgY2hhcmFjdGVyIFwiMFwiLCBhbmQgdGhlIHN0cmluZyBtLlxuICAgICAgICAgICAgICAgICAgICBtID0gJzAuJyArIGFyckpvaW4uY2FsbChBcnJheSgtKGUgKyAxKSArIDEpLCAnMCcpICsgbTtcblxuICAgIC8vIDguIElmIG0gY29udGFpbnMgdGhlIGNoYXJhY3RlciBcIi5cIiwgYW5kIG1heFByZWNpc2lvbiA+IG1pblByZWNpc2lvbiwgdGhlblxuICAgIGlmIChtLmluZGV4T2YoXCIuXCIpID49IDAgJiYgbWF4UHJlY2lzaW9uID4gbWluUHJlY2lzaW9uKSB7XG4gICAgICAgIC8vIGEuIExldCBjdXQgYmUgbWF4UHJlY2lzaW9uIOKAkyBtaW5QcmVjaXNpb24uXG4gICAgICAgIHZhciBjdXQgPSBtYXhQcmVjaXNpb24gLSBtaW5QcmVjaXNpb247XG5cbiAgICAgICAgLy8gYi4gUmVwZWF0IHdoaWxlIGN1dCA+IDAgYW5kIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiMFwiOlxuICAgICAgICB3aGlsZSAoY3V0ID4gMCAmJiBtLmNoYXJBdChtLmxlbmd0aCAtIDEpID09PSAnMCcpIHtcbiAgICAgICAgICAgIC8vICBpLiBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gbS5cbiAgICAgICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcblxuICAgICAgICAgICAgLy8gIGlpLiBEZWNyZWFzZSBjdXQgYnkgMS5cbiAgICAgICAgICAgIGN1dC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYy4gSWYgdGhlIGxhc3QgY2hhcmFjdGVyIG9mIG0gaXMgXCIuXCIsIHRoZW5cbiAgICAgICAgaWYgKG0uY2hhckF0KG0ubGVuZ3RoIC0gMSkgPT09ICcuJylcbiAgICAgICAgICAgIC8vICAgIGkuIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSBtLlxuICAgICAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICAvLyA5LiBSZXR1cm4gbS5cbiAgICByZXR1cm4gbTtcbn1cblxuLyoqXG4gKiBAc3BlY1t0YzM5L2VjbWE0MDIvbWFzdGVyL3NwZWMvbnVtYmVyZm9ybWF0Lmh0bWxdXG4gKiBAY2xhdXNlW3NlYy10b3Jhd2ZpeGVkXVxuICogV2hlbiB0aGUgVG9SYXdGaXhlZCBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIHggKHdoaWNoIG11c3RcbiAqIGJlIGEgZmluaXRlIG5vbi1uZWdhdGl2ZSBudW1iZXIpLCBtaW5JbnRlZ2VyICh3aGljaCBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlblxuICogMSBhbmQgMjEpLCBtaW5GcmFjdGlvbiwgYW5kIG1heEZyYWN0aW9uICh3aGljaCBtdXN0IGJlIGludGVnZXJzIGJldHdlZW4gMCBhbmRcbiAqIDIwKSB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9SYXdGaXhlZCh4LCBtaW5JbnRlZ2VyLCBtaW5GcmFjdGlvbiwgbWF4RnJhY3Rpb24pIHtcbiAgICAvLyAxLiBMZXQgZiBiZSBtYXhGcmFjdGlvbi5cbiAgICB2YXIgZiA9IG1heEZyYWN0aW9uO1xuICAgIC8vIDIuIExldCBuIGJlIGFuIGludGVnZXIgZm9yIHdoaWNoIHRoZSBleGFjdCBtYXRoZW1hdGljYWwgdmFsdWUgb2YgbiDDtyAxMGYg4oCTIHggaXMgYXMgY2xvc2UgdG8gemVybyBhcyBwb3NzaWJsZS4gSWYgdGhlcmUgYXJlIHR3byBzdWNoIG4sIHBpY2sgdGhlIGxhcmdlciBuLlxuICAgIHZhciBuID0gTWF0aC5wb3coMTAsIGYpICogeDsgLy8gZGl2ZXJnaW5nLi4uXG4gICAgLy8gMy4gSWYgbiA9IDAsIGxldCBtIGJlIHRoZSBTdHJpbmcgXCIwXCIuIE90aGVyd2lzZSwgbGV0IG0gYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIHRoZSBkaWdpdHMgb2YgdGhlIGRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgbiAoaW4gb3JkZXIsIHdpdGggbm8gbGVhZGluZyB6ZXJvZXMpLlxuICAgIHZhciBtID0gbiA9PT0gMCA/IFwiMFwiIDogbi50b0ZpeGVkKDApOyAvLyBkaXZlcmluZy4uLlxuXG4gICAge1xuICAgICAgICAvLyB0aGlzIGRpdmVyc2lvbiBpcyBuZWVkZWQgdG8gdGFrZSBpbnRvIGNvbnNpZGVyYXRpb24gYmlnIG51bWJlcnMsIGUuZy46XG4gICAgICAgIC8vIDEuMjM0NDUwMWUrMzcgLT4gMTIzNDQ1MDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcbiAgICAgICAgdmFyIGlkeCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGV4cCA9IChpZHggPSBtLmluZGV4T2YoJ2UnKSkgPiAtMSA/IG0uc2xpY2UoaWR4ICsgMSkgOiAwO1xuICAgICAgICBpZiAoZXhwKSB7XG4gICAgICAgICAgICBtID0gbS5zbGljZSgwLCBpZHgpLnJlcGxhY2UoJy4nLCAnJyk7XG4gICAgICAgICAgICBtICs9IGFyckpvaW4uY2FsbChBcnJheShleHAgLSAobS5sZW5ndGggLSAxKSArIDEpLCAnMCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGludCA9IHZvaWQgMDtcbiAgICAvLyA0LiBJZiBmIOKJoCAwLCB0aGVuXG4gICAgaWYgKGYgIT09IDApIHtcbiAgICAgICAgLy8gYS4gTGV0IGsgYmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIG0uXG4gICAgICAgIHZhciBrID0gbS5sZW5ndGg7XG4gICAgICAgIC8vIGEuIElmIGsg4omkIGYsIHRoZW5cbiAgICAgICAgaWYgKGsgPD0gZikge1xuICAgICAgICAgICAgLy8gaS4gTGV0IHogYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIGYrMeKAk2sgb2NjdXJyZW5jZXMgb2YgdGhlIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgICAgIHZhciB6ID0gYXJySm9pbi5jYWxsKEFycmF5KGYgKyAxIC0gayArIDEpLCAnMCcpO1xuICAgICAgICAgICAgLy8gaWkuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIFN0cmluZ3MgeiBhbmQgbS5cbiAgICAgICAgICAgIG0gPSB6ICsgbTtcbiAgICAgICAgICAgIC8vIGlpaS4gTGV0IGsgYmUgZisxLlxuICAgICAgICAgICAgayA9IGYgKyAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIGEuIExldCBhIGJlIHRoZSBmaXJzdCBr4oCTZiBjaGFyYWN0ZXJzIG9mIG0sIGFuZCBsZXQgYiBiZSB0aGUgcmVtYWluaW5nIGYgY2hhcmFjdGVycyBvZiBtLlxuICAgICAgICB2YXIgYSA9IG0uc3Vic3RyaW5nKDAsIGsgLSBmKSxcbiAgICAgICAgICAgIGIgPSBtLnN1YnN0cmluZyhrIC0gZiwgbS5sZW5ndGgpO1xuICAgICAgICAvLyBhLiBMZXQgbSBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgdGhyZWUgU3RyaW5ncyBhLCBcIi5cIiwgYW5kIGIuXG4gICAgICAgIG0gPSBhICsgXCIuXCIgKyBiO1xuICAgICAgICAvLyBhLiBMZXQgaW50IGJlIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBhLlxuICAgICAgICBpbnQgPSBhLmxlbmd0aDtcbiAgICB9XG4gICAgLy8gNS4gRWxzZSwgbGV0IGludCBiZSB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gbS5cbiAgICBlbHNlIGludCA9IG0ubGVuZ3RoO1xuICAgIC8vIDYuIExldCBjdXQgYmUgbWF4RnJhY3Rpb24g4oCTIG1pbkZyYWN0aW9uLlxuICAgIHZhciBjdXQgPSBtYXhGcmFjdGlvbiAtIG1pbkZyYWN0aW9uO1xuICAgIC8vIDcuIFJlcGVhdCB3aGlsZSBjdXQgPiAwIGFuZCB0aGUgbGFzdCBjaGFyYWN0ZXIgb2YgbSBpcyBcIjBcIjpcbiAgICB3aGlsZSAoY3V0ID4gMCAmJiBtLnNsaWNlKC0xKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgLy8gYS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgLy8gYS4gRGVjcmVhc2UgY3V0IGJ5IDEuXG4gICAgICAgIGN1dC0tO1xuICAgIH1cbiAgICAvLyA4LiBJZiB0aGUgbGFzdCBjaGFyYWN0ZXIgb2YgbSBpcyBcIi5cIiwgdGhlblxuICAgIGlmIChtLnNsaWNlKC0xKSA9PT0gXCIuXCIpIHtcbiAgICAgICAgLy8gYS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgLy8gOS4gSWYgaW50IDwgbWluSW50ZWdlciwgdGhlblxuICAgIGlmIChpbnQgPCBtaW5JbnRlZ2VyKSB7XG4gICAgICAgIC8vIGEuIExldCB6IGJlIHRoZSBTdHJpbmcgY29uc2lzdGluZyBvZiBtaW5JbnRlZ2Vy4oCTaW50IG9jY3VycmVuY2VzIG9mIHRoZSBjaGFyYWN0ZXIgXCIwXCIuXG4gICAgICAgIHZhciBfeiA9IGFyckpvaW4uY2FsbChBcnJheShtaW5JbnRlZ2VyIC0gaW50ICsgMSksICcwJyk7XG4gICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIFN0cmluZ3MgeiBhbmQgbS5cbiAgICAgICAgbSA9IF96ICsgbTtcbiAgICB9XG4gICAgLy8gMTAuIFJldHVybiBtLlxuICAgIHJldHVybiBtO1xufVxuXG4vLyBTZWN0IDExLjMuMiBUYWJsZSAyLCBOdW1iZXJpbmcgc3lzdGVtc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBudW1TeXMgPSB7XG4gICAgYXJhYjogW1wi2aBcIiwgXCLZoVwiLCBcItmiXCIsIFwi2aNcIiwgXCLZpFwiLCBcItmlXCIsIFwi2aZcIiwgXCLZp1wiLCBcItmoXCIsIFwi2alcIl0sXG4gICAgYXJhYmV4dDogW1wi27BcIiwgXCLbsVwiLCBcItuyXCIsIFwi27NcIiwgXCLbtFwiLCBcItu1XCIsIFwi27ZcIiwgXCLbt1wiLCBcItu4XCIsIFwi27lcIl0sXG4gICAgYmFsaTogW1wi4a2QXCIsIFwi4a2RXCIsIFwi4a2SXCIsIFwi4a2TXCIsIFwi4a2UXCIsIFwi4a2VXCIsIFwi4a2WXCIsIFwi4a2XXCIsIFwi4a2YXCIsIFwi4a2ZXCJdLFxuICAgIGJlbmc6IFtcIuCnplwiLCBcIuCnp1wiLCBcIuCnqFwiLCBcIuCnqVwiLCBcIuCnqlwiLCBcIuCnq1wiLCBcIuCnrFwiLCBcIuCnrVwiLCBcIuCnrlwiLCBcIuCnr1wiXSxcbiAgICBkZXZhOiBbXCLgpaZcIiwgXCLgpadcIiwgXCLgpahcIiwgXCLgpalcIiwgXCLgpapcIiwgXCLgpatcIiwgXCLgpaxcIiwgXCLgpa1cIiwgXCLgpa5cIiwgXCLgpa9cIl0sXG4gICAgZnVsbHdpZGU6IFtcIu+8kFwiLCBcIu+8kVwiLCBcIu+8klwiLCBcIu+8k1wiLCBcIu+8lFwiLCBcIu+8lVwiLCBcIu+8llwiLCBcIu+8l1wiLCBcIu+8mFwiLCBcIu+8mVwiXSxcbiAgICBndWpyOiBbXCLgq6ZcIiwgXCLgq6dcIiwgXCLgq6hcIiwgXCLgq6lcIiwgXCLgq6pcIiwgXCLgq6tcIiwgXCLgq6xcIiwgXCLgq61cIiwgXCLgq65cIiwgXCLgq69cIl0sXG4gICAgZ3VydTogW1wi4KmmXCIsIFwi4KmnXCIsIFwi4KmoXCIsIFwi4KmpXCIsIFwi4KmqXCIsIFwi4KmrXCIsIFwi4KmsXCIsIFwi4KmtXCIsIFwi4KmuXCIsIFwi4KmvXCJdLFxuICAgIGhhbmlkZWM6IFtcIuOAh1wiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXSxcbiAgICBraG1yOiBbXCLhn6BcIiwgXCLhn6FcIiwgXCLhn6JcIiwgXCLhn6NcIiwgXCLhn6RcIiwgXCLhn6VcIiwgXCLhn6ZcIiwgXCLhn6dcIiwgXCLhn6hcIiwgXCLhn6lcIl0sXG4gICAga25kYTogW1wi4LOmXCIsIFwi4LOnXCIsIFwi4LOoXCIsIFwi4LOpXCIsIFwi4LOqXCIsIFwi4LOrXCIsIFwi4LOsXCIsIFwi4LOtXCIsIFwi4LOuXCIsIFwi4LOvXCJdLFxuICAgIGxhb286IFtcIuC7kFwiLCBcIuC7kVwiLCBcIuC7klwiLCBcIuC7k1wiLCBcIuC7lFwiLCBcIuC7lVwiLCBcIuC7llwiLCBcIuC7l1wiLCBcIuC7mFwiLCBcIuC7mVwiXSxcbiAgICBsYXRuOiBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxuICAgIGxpbWI6IFtcIuGlhlwiLCBcIuGlh1wiLCBcIuGliFwiLCBcIuGliVwiLCBcIuGlilwiLCBcIuGli1wiLCBcIuGljFwiLCBcIuGljVwiLCBcIuGljlwiLCBcIuGlj1wiXSxcbiAgICBtbHltOiBbXCLgtaZcIiwgXCLgtadcIiwgXCLgtahcIiwgXCLgtalcIiwgXCLgtapcIiwgXCLgtatcIiwgXCLgtaxcIiwgXCLgta1cIiwgXCLgta5cIiwgXCLgta9cIl0sXG4gICAgbW9uZzogW1wi4aCQXCIsIFwi4aCRXCIsIFwi4aCSXCIsIFwi4aCTXCIsIFwi4aCUXCIsIFwi4aCVXCIsIFwi4aCWXCIsIFwi4aCXXCIsIFwi4aCYXCIsIFwi4aCZXCJdLFxuICAgIG15bXI6IFtcIuGBgFwiLCBcIuGBgVwiLCBcIuGBglwiLCBcIuGBg1wiLCBcIuGBhFwiLCBcIuGBhVwiLCBcIuGBhlwiLCBcIuGBh1wiLCBcIuGBiFwiLCBcIuGBiVwiXSxcbiAgICBvcnlhOiBbXCLgraZcIiwgXCLgradcIiwgXCLgrahcIiwgXCLgralcIiwgXCLgrapcIiwgXCLgratcIiwgXCLgraxcIiwgXCLgra1cIiwgXCLgra5cIiwgXCLgra9cIl0sXG4gICAgdGFtbGRlYzogW1wi4K+mXCIsIFwi4K+nXCIsIFwi4K+oXCIsIFwi4K+pXCIsIFwi4K+qXCIsIFwi4K+rXCIsIFwi4K+sXCIsIFwi4K+tXCIsIFwi4K+uXCIsIFwi4K+vXCJdLFxuICAgIHRlbHU6IFtcIuCxplwiLCBcIuCxp1wiLCBcIuCxqFwiLCBcIuCxqVwiLCBcIuCxqlwiLCBcIuCxq1wiLCBcIuCxrFwiLCBcIuCxrVwiLCBcIuCxrlwiLCBcIuCxr1wiXSxcbiAgICB0aGFpOiBbXCLguZBcIiwgXCLguZFcIiwgXCLguZJcIiwgXCLguZNcIiwgXCLguZRcIiwgXCLguZVcIiwgXCLguZZcIiwgXCLguZdcIiwgXCLguZhcIiwgXCLguZlcIl0sXG4gICAgdGlidDogW1wi4LygXCIsIFwi4LyhXCIsIFwi4LyiXCIsIFwi4LyjXCIsIFwi4LykXCIsIFwi4LylXCIsIFwi4LymXCIsIFwi4LynXCIsIFwi4LyoXCIsIFwi4LypXCJdXG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBsb2NhbGUgYW5kIGZvcm1hdHRpbmcgb3B0aW9ucyBjb21wdXRlZFxuICogZHVyaW5nIGluaXRpYWxpemF0aW9uIG9mIHRoZSBvYmplY3QuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMgYXJlIHNldCBhc1xuICogaWYgY29uc3RydWN0ZWQgYnkgYW4gb2JqZWN0IGxpdGVyYWwgYXNzaWduaW5nIHRvIGVhY2ggb2YgdGhlIGZvbGxvd2luZ1xuICogcHJvcGVydGllcyB0aGUgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpc1xuICogTnVtYmVyRm9ybWF0IG9iamVjdCAoc2VlIDExLjQpOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgc3R5bGUsIGN1cnJlbmN5LFxuICogY3VycmVuY3lEaXNwbGF5LCBtaW5pbXVtSW50ZWdlckRpZ2l0cywgbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICogbWF4aW11bUZyYWN0aW9uRGlnaXRzLCBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHMsIG1heGltdW1TaWduaWZpY2FudERpZ2l0cywgYW5kXG4gKiB1c2VHcm91cGluZy4gUHJvcGVydGllcyB3aG9zZSBjb3JyZXNwb25kaW5nIGludGVybmFsIHByb3BlcnRpZXMgYXJlIG5vdCBwcmVzZW50XG4gKiBhcmUgbm90IGFzc2lnbmVkLlxuICovXG4vKiAxMS4zLjMgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLk51bWJlckZvcm1hdC5wcm90b3R5cGUsICdyZXNvbHZlZE9wdGlvbnMnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgdmFyIHByb3AgPSB2b2lkIDAsXG4gICAgICAgICAgICBkZXNjcyA9IG5ldyBSZWNvcmQoKSxcbiAgICAgICAgICAgIHByb3BzID0gWydsb2NhbGUnLCAnbnVtYmVyaW5nU3lzdGVtJywgJ3N0eWxlJywgJ2N1cnJlbmN5JywgJ2N1cnJlbmN5RGlzcGxheScsICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsICdtaW5pbXVtRnJhY3Rpb25EaWdpdHMnLCAnbWF4aW11bUZyYWN0aW9uRGlnaXRzJywgJ21pbmltdW1TaWduaWZpY2FudERpZ2l0cycsICdtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMnLCAndXNlR3JvdXBpbmcnXSxcbiAgICAgICAgICAgIGludGVybmFsID0gdGhpcyAhPT0gbnVsbCAmJiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXSh0aGlzKSA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdGlzZnkgdGVzdCAxMS4zX2JcbiAgICAgICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgZm9yIHJlc29sdmVkT3B0aW9ucygpIGlzIG5vdCBhbiBpbml0aWFsaXplZCBJbnRsLk51bWJlckZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1heCA9IHByb3BzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9wLmNhbGwoaW50ZXJuYWwsIHByb3AgPSAnW1snICsgcHJvcHNbaV0gKyAnXV0nKSkgZGVzY3NbcHJvcHNbaV1dID0geyB2YWx1ZTogaW50ZXJuYWxbcHJvcF0sIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpDcmVhdGUoe30sIGRlc2NzKTtcbiAgICB9XG59KTtcblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG4vLyBNYXRjaCB0aGVzZSBkYXRldGltZSBjb21wb25lbnRzIGluIGEgQ0xEUiBwYXR0ZXJuLCBleGNlcHQgdGhvc2UgaW4gc2luZ2xlIHF1b3Rlc1xudmFyIGV4cERUQ29tcG9uZW50cyA9IC8oPzpbRWVjXXsxLDZ9fEd7MSw1fXxbUXFdezEsNX18KD86W3lZdXJdK3xVezEsNX0pfFtNTF17MSw1fXxkezEsMn18RHsxLDN9fEZ7MX18W2FiQl17MSw1fXxbaGtIS117MSwyfXx3ezEsMn18V3sxfXxtezEsMn18c3sxLDJ9fFt6Wk92VnhYXXsxLDR9KSg/PShbXiddKidbXiddKicpKlteJ10qJCkvZztcbi8vIHRyaW0gcGF0dGVybnMgYWZ0ZXIgdHJhbnNmb3JtYXRpb25zXG52YXIgZXhwUGF0dGVyblRyaW1tZXIgPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7XG4vLyBTa2lwIG92ZXIgcGF0dGVybnMgd2l0aCB0aGVzZSBkYXRldGltZSBjb21wb25lbnRzIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBkYXRhXG4vLyB0byBiYWNrIHRoZW0gdXA6XG4vLyB0aW1lem9uZSwgd2Vla2RheSwgYW1vdW5nIG90aGVyc1xudmFyIHVud2FudGVkRFRDcyA9IC9bcnFRQVNqSmd3V0lRcV0vOyAvLyB4WFZPIHdlcmUgcmVtb3ZlZCBmcm9tIHRoaXMgbGlzdCBpbiBmYXZvciBvZiBjb21wdXRpbmcgbWF0Y2hlcyB3aXRoIHRpbWVab25lTmFtZSB2YWx1ZXMgYnV0IHByaW50aW5nIGFzIGVtcHR5IHN0cmluZ1xuXG52YXIgZHRLZXlzID0gW1wiZXJhXCIsIFwieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwid2Vla2RheVwiLCBcInF1YXJ0ZXJcIl07XG52YXIgdG1LZXlzID0gW1wiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcImhvdXIxMlwiLCBcInRpbWVab25lTmFtZVwiXTtcblxuZnVuY3Rpb24gaXNEYXRlRm9ybWF0T25seShvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRtS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHRtS2V5c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUaW1lRm9ybWF0T25seShvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR0S2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGR0S2V5c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gam9pbkRhdGVBbmRUaW1lRm9ybWF0cyhkYXRlRm9ybWF0T2JqLCB0aW1lRm9ybWF0T2JqKSB7XG4gICAgdmFyIG8gPSB7IF86IHt9IH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkdEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGRhdGVGb3JtYXRPYmpbZHRLZXlzW2ldXSkge1xuICAgICAgICAgICAgb1tkdEtleXNbaV1dID0gZGF0ZUZvcm1hdE9ialtkdEtleXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0T2JqLl9bZHRLZXlzW2ldXSkge1xuICAgICAgICAgICAgby5fW2R0S2V5c1tpXV0gPSBkYXRlRm9ybWF0T2JqLl9bZHRLZXlzW2ldXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRtS2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodGltZUZvcm1hdE9ialt0bUtleXNbal1dKSB7XG4gICAgICAgICAgICBvW3RtS2V5c1tqXV0gPSB0aW1lRm9ybWF0T2JqW3RtS2V5c1tqXV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVGb3JtYXRPYmouX1t0bUtleXNbal1dKSB7XG4gICAgICAgICAgICBvLl9bdG1LZXlzW2pdXSA9IHRpbWVGb3JtYXRPYmouX1t0bUtleXNbal1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlRmluYWxQYXR0ZXJucyhmb3JtYXRPYmopIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF9QYXR0ZXJuczpcbiAgICAvLyAgJ0luIHBhdHRlcm5zLCB0d28gc2luZ2xlIHF1b3RlcyByZXByZXNlbnRzIGEgbGl0ZXJhbCBzaW5nbGUgcXVvdGUsIGVpdGhlclxuICAgIC8vICAgaW5zaWRlIG9yIG91dHNpZGUgc2luZ2xlIHF1b3Rlcy4gVGV4dCB3aXRoaW4gc2luZ2xlIHF1b3RlcyBpcyBub3RcbiAgICAvLyAgIGludGVycHJldGVkIGluIGFueSB3YXkgKGV4Y2VwdCBmb3IgdHdvIGFkamFjZW50IHNpbmdsZSBxdW90ZXMpLidcbiAgICBmb3JtYXRPYmoucGF0dGVybjEyID0gZm9ybWF0T2JqLmV4dGVuZGVkUGF0dGVybi5yZXBsYWNlKC8nKFteJ10qKScvZywgZnVuY3Rpb24gKCQwLCBsaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsID8gbGl0ZXJhbCA6IFwiJ1wiO1xuICAgIH0pO1xuXG4gICAgLy8gcGF0dGVybiAxMiBpcyBhbHdheXMgdGhlIGRlZmF1bHQuIHdlIGNhbiBwcm9kdWNlIHRoZSAyNCBieSByZW1vdmluZyB7YW1wbX1cbiAgICBmb3JtYXRPYmoucGF0dGVybiA9IGZvcm1hdE9iai5wYXR0ZXJuMTIucmVwbGFjZSgne2FtcG19JywgJycpLnJlcGxhY2UoZXhwUGF0dGVyblRyaW1tZXIsICcnKTtcbiAgICByZXR1cm4gZm9ybWF0T2JqO1xufVxuXG5mdW5jdGlvbiBleHBEVENvbXBvbmVudHNNZXRhKCQwLCBmb3JtYXRPYmopIHtcbiAgICBzd2l0Y2ggKCQwLmNoYXJBdCgwKSkge1xuICAgICAgICAvLyAtLS0gRXJhXG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLmVyYSA9IFsnc2hvcnQnLCAnc2hvcnQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne2VyYX0nO1xuXG4gICAgICAgIC8vIC0tLSBZZWFyXG4gICAgICAgIGNhc2UgJ3knOlxuICAgICAgICBjYXNlICdZJzpcbiAgICAgICAgY2FzZSAndSc6XG4gICAgICAgIGNhc2UgJ1UnOlxuICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai55ZWFyID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7eWVhcn0nO1xuXG4gICAgICAgIC8vIC0tLSBRdWFydGVyIChub3Qgc3VwcG9ydGVkIGluIHRoaXMgcG9seWZpbGwpXG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai5xdWFydGVyID0gWydudW1lcmljJywgJzItZGlnaXQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne3F1YXJ0ZXJ9JztcblxuICAgICAgICAvLyAtLS0gTW9udGhcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLm1vbnRoID0gWydudW1lcmljJywgJzItZGlnaXQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne21vbnRofSc7XG5cbiAgICAgICAgLy8gLS0tIFdlZWsgKG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBwb2x5ZmlsbClcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAvLyB3ZWVrIG9mIHRoZSB5ZWFyXG4gICAgICAgICAgICBmb3JtYXRPYmoud2VlayA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne3dlZWtkYXl9JztcbiAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAvLyB3ZWVrIG9mIHRoZSBtb250aFxuICAgICAgICAgICAgZm9ybWF0T2JqLndlZWsgPSAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3t3ZWVrZGF5fSc7XG5cbiAgICAgICAgLy8gLS0tIERheVxuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIC8vIGRheSBvZiB0aGUgbW9udGhcbiAgICAgICAgICAgIGZvcm1hdE9iai5kYXkgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3tkYXl9JztcbiAgICAgICAgY2FzZSAnRCc6IC8vIGRheSBvZiB0aGUgeWVhclxuICAgICAgICBjYXNlICdGJzogLy8gZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgIGNhc2UgJ2cnOlxuICAgICAgICAgICAgLy8gMS4ubjogTW9kaWZpZWQgSnVsaWFuIGRheVxuICAgICAgICAgICAgZm9ybWF0T2JqLmRheSA9ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne2RheX0nO1xuXG4gICAgICAgIC8vIC0tLSBXZWVrIERheVxuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgIC8vIGRheSBvZiB0aGUgd2Vla1xuICAgICAgICAgICAgZm9ybWF0T2JqLndlZWtkYXkgPSBbJ3Nob3J0JywgJ3Nob3J0JywgJ3Nob3J0JywgJ2xvbmcnLCAnbmFycm93JywgJ3Nob3J0J11bJDAubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gJ3t3ZWVrZGF5fSc7XG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgLy8gbG9jYWwgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICBmb3JtYXRPYmoud2Vla2RheSA9IFsnbnVtZXJpYycsICcyLWRpZ2l0JywgJ3Nob3J0JywgJ2xvbmcnLCAnbmFycm93JywgJ3Nob3J0J11bJDAubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gJ3t3ZWVrZGF5fSc7XG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgLy8gc3RhbmQgYWxvbmUgbG9jYWwgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICBmb3JtYXRPYmoud2Vla2RheSA9IFsnbnVtZXJpYycsIHVuZGVmaW5lZCwgJ3Nob3J0JywgJ2xvbmcnLCAnbmFycm93JywgJ3Nob3J0J11bJDAubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gJ3t3ZWVrZGF5fSc7XG5cbiAgICAgICAgLy8gLS0tIFBlcmlvZFxuICAgICAgICBjYXNlICdhJzogLy8gQU0sIFBNXG4gICAgICAgIGNhc2UgJ2InOiAvLyBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0XG4gICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgLy8gZmxleGlibGUgZGF5IHBlcmlvZHNcbiAgICAgICAgICAgIGZvcm1hdE9iai5ob3VyMTIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuICd7YW1wbX0nO1xuXG4gICAgICAgIC8vIC0tLSBIb3VyXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai5ob3VyID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7aG91cn0nO1xuICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgICBmb3JtYXRPYmouaG91cjEyID0gdHJ1ZTsgLy8gMTItaG91ci1jeWNsZSB0aW1lIGZvcm1hdHMgKHVzaW5nIGggb3IgSylcbiAgICAgICAgICAgIGZvcm1hdE9iai5ob3VyID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7aG91cn0nO1xuXG4gICAgICAgIC8vIC0tLSBNaW51dGVcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICBmb3JtYXRPYmoubWludXRlID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7bWludXRlfSc7XG5cbiAgICAgICAgLy8gLS0tIFNlY29uZFxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai5zZWNvbmQgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3tzZWNvbmR9JztcbiAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLnNlY29uZCA9ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne3NlY29uZH0nO1xuXG4gICAgICAgIC8vIC0tLSBUaW1lem9uZVxuICAgICAgICBjYXNlICd6JzogLy8gMS4uMywgNDogc3BlY2lmaWMgbm9uLWxvY2F0aW9uIGZvcm1hdFxuICAgICAgICBjYXNlICdaJzogLy8gMS4uMywgNCwgNTogVGhlIElTTzg2MDEgdmFyaW9zIGZvcm1hdHNcbiAgICAgICAgY2FzZSAnTyc6IC8vIDEsIDQ6IG1pbGlzZWNvbmRzIGluIGRheSBzaG9ydCwgbG9uZ1xuICAgICAgICBjYXNlICd2JzogLy8gMSwgNDogZ2VuZXJpYyBub24tbG9jYXRpb24gZm9ybWF0XG4gICAgICAgIGNhc2UgJ1YnOiAvLyAxLCAyLCAzLCA0OiB0aW1lIHpvbmUgSUQgb3IgY2l0eVxuICAgICAgICBjYXNlICdYJzogLy8gMSwgMiwgMywgNDogVGhlIElTTzg2MDEgdmFyaW9zIGZvcm1hdHNcbiAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAvLyAxLCAyLCAzLCA0OiBUaGUgSVNPODYwMSB2YXJpb3MgZm9ybWF0c1xuICAgICAgICAgICAgLy8gdGhpcyBwb2x5ZmlsbCBvbmx5IHN1cHBvcnRzIG11Y2gsIGZvciBub3csIHdlIGFyZSBqdXN0IGRvaW5nIHNvbWV0aGluZyBkdW1teVxuICAgICAgICAgICAgZm9ybWF0T2JqLnRpbWVab25lTmFtZSA9ICQwLmxlbmd0aCA8IDQgPyAnc2hvcnQnIDogJ2xvbmcnO1xuICAgICAgICAgICAgcmV0dXJuICd7dGltZVpvbmVOYW1lfSc7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBDTERSIGF2YWlsYWJsZUZvcm1hdHMgaW50byB0aGUgb2JqZWN0cyBhbmQgcGF0dGVybnMgcmVxdWlyZWQgYnlcbiAqIHRoZSBFQ01BU2NyaXB0IEludGVybmF0aW9uYWxpemF0aW9uIEFQSSBzcGVjaWZpY2F0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZUZvcm1hdChza2VsZXRvbiwgcGF0dGVybikge1xuICAgIC8vIHdlIGlnbm9yZSBjZXJ0YWluIHBhdHRlcm5zIHRoYXQgYXJlIHVuc3VwcG9ydGVkIHRvIGF2b2lkIHRoaXMgZXhwZW5zaXZlIG9wLlxuICAgIGlmICh1bndhbnRlZERUQ3MudGVzdChwYXR0ZXJuKSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIHZhciBmb3JtYXRPYmogPSB7XG4gICAgICAgIG9yaWdpbmFsUGF0dGVybjogcGF0dGVybixcbiAgICAgICAgXzoge31cbiAgICB9O1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgcGF0dGVybiBzdHJpbmcgd2l0aCB0aGUgb25lIHJlcXVpcmVkIGJ5IHRoZSBzcGVjaWZpY2F0aW9uLCB3aGlsc3RcbiAgICAvLyBhdCB0aGUgc2FtZSB0aW1lIGV2YWx1YXRpbmcgaXQgZm9yIHRoZSBzdWJzZXRzIGFuZCBmb3JtYXRzXG4gICAgZm9ybWF0T2JqLmV4dGVuZGVkUGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZShleHBEVENvbXBvbmVudHMsIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAvLyBTZWUgd2hpY2ggc3ltYm9sIHdlJ3JlIGRlYWxpbmcgd2l0aFxuICAgICAgICByZXR1cm4gZXhwRFRDb21wb25lbnRzTWV0YSgkMCwgZm9ybWF0T2JqLl8pO1xuICAgIH0pO1xuXG4gICAgLy8gTWF0Y2ggdGhlIHNrZWxldG9uIHN0cmluZyB3aXRoIHRoZSBvbmUgcmVxdWlyZWQgYnkgdGhlIHNwZWNpZmljYXRpb25cbiAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBEYXRlIEZpZWxkIFN5bWJvbCBUYWJsZTpcbiAgICAvLyBodHRwOi8vdW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICAgIC8vIE5vdGU6IHdlIGFyZSBhZGRpbmcgZXh0cmEgZGF0YSB0byB0aGUgZm9ybWF0T2JqZWN0IGV2ZW4gdGhvdWdoIHRoaXMgcG9seWZpbGxcbiAgICAvLyAgICAgICBtaWdodCBub3Qgc3VwcG9ydCBpdC5cbiAgICBza2VsZXRvbi5yZXBsYWNlKGV4cERUQ29tcG9uZW50cywgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgIC8vIFNlZSB3aGljaCBzeW1ib2wgd2UncmUgZGVhbGluZyB3aXRoXG4gICAgICAgIHJldHVybiBleHBEVENvbXBvbmVudHNNZXRhKCQwLCBmb3JtYXRPYmopO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVGaW5hbFBhdHRlcm5zKGZvcm1hdE9iaik7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VzIERhdGVUaW1lIGZvcm1hdHMgZnJvbSBDTERSIHRvIGFuIGVhc2llci10by1wYXJzZSBmb3JtYXQuXG4gKiB0aGUgcmVzdWx0IG9mIHRoaXMgb3BlcmF0aW9uIHNob3VsZCBiZSBjYWNoZWQgdGhlIGZpcnN0IHRpbWUgYSBwYXJ0aWN1bGFyXG4gKiBjYWxlbmRhciBpcyBhbmFseXplZC5cbiAqXG4gKiBUaGUgc3BlY2lmaWNhdGlvbiByZXF1aXJlcyB3ZSBzdXBwb3J0IGF0IGxlYXN0IHRoZSBmb2xsb3dpbmcgc3Vic2V0cyBvZlxuICogZGF0ZS90aW1lIGNvbXBvbmVudHM6XG4gKlxuICogICAtICd3ZWVrZGF5JywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCdcbiAqICAgLSAnd2Vla2RheScsICd5ZWFyJywgJ21vbnRoJywgJ2RheSdcbiAqICAgLSAneWVhcicsICdtb250aCcsICdkYXknXG4gKiAgIC0gJ3llYXInLCAnbW9udGgnXG4gKiAgIC0gJ21vbnRoJywgJ2RheSdcbiAqICAgLSAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuICogICAtICdob3VyJywgJ21pbnV0ZSdcbiAqXG4gKiBXZSBuZWVkIHRvIGNoZXJyeSBwaWNrIGF0IGxlYXN0IHRoZXNlIHN1YnNldHMgZnJvbSB0aGUgQ0xEUiBkYXRhIGFuZCBjb252ZXJ0XG4gKiB0aGVtIGludG8gdGhlIHBhdHRlcm4gb2JqZWN0cyB1c2VkIGluIHRoZSBFQ01BLTQwMiBBUEkuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRm9ybWF0cyhmb3JtYXRzKSB7XG4gICAgdmFyIGF2YWlsYWJsZUZvcm1hdHMgPSBmb3JtYXRzLmF2YWlsYWJsZUZvcm1hdHM7XG4gICAgdmFyIHRpbWVGb3JtYXRzID0gZm9ybWF0cy50aW1lRm9ybWF0cztcbiAgICB2YXIgZGF0ZUZvcm1hdHMgPSBmb3JtYXRzLmRhdGVGb3JtYXRzO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2tlbGV0b24gPSB2b2lkIDAsXG4gICAgICAgIHBhdHRlcm4gPSB2b2lkIDAsXG4gICAgICAgIGNvbXB1dGVkID0gdm9pZCAwLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBqID0gdm9pZCAwO1xuICAgIHZhciB0aW1lUmVsYXRlZEZvcm1hdHMgPSBbXTtcbiAgICB2YXIgZGF0ZVJlbGF0ZWRGb3JtYXRzID0gW107XG5cbiAgICAvLyBNYXAgYXZhaWxhYmxlIChjdXN0b20pIGZvcm1hdHMgaW50byBhIHBhdHRlcm4gZm9yIGNyZWF0ZURhdGVUaW1lRm9ybWF0c1xuICAgIGZvciAoc2tlbGV0b24gaW4gYXZhaWxhYmxlRm9ybWF0cykge1xuICAgICAgICBpZiAoYXZhaWxhYmxlRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShza2VsZXRvbikpIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBhdmFpbGFibGVGb3JtYXRzW3NrZWxldG9uXTtcbiAgICAgICAgICAgIGNvbXB1dGVkID0gY3JlYXRlRGF0ZVRpbWVGb3JtYXQoc2tlbGV0b24sIHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgICAgIC8vIGluIHNvbWUgY2FzZXMsIHRoZSBmb3JtYXQgaXMgb25seSBkaXNwbGF5aW5nIGRhdGUgc3BlY2lmaWMgcHJvcHNcbiAgICAgICAgICAgICAgICAvLyBvciB0aW1lIHNwZWNpZmljIHByb3BzLCBpbiB3aGljaCBjYXNlIHdlIG5lZWQgdG8gYWxzbyBwcm9kdWNlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvbWJpbmVkIGZvcm1hdHMuXG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZUZvcm1hdE9ubHkoY29tcHV0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVSZWxhdGVkRm9ybWF0cy5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVGltZUZvcm1hdE9ubHkoY29tcHV0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZWxhdGVkRm9ybWF0cy5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXAgdGltZSBmb3JtYXRzIGludG8gYSBwYXR0ZXJuIGZvciBjcmVhdGVEYXRlVGltZUZvcm1hdHNcbiAgICBmb3IgKHNrZWxldG9uIGluIHRpbWVGb3JtYXRzKSB7XG4gICAgICAgIGlmICh0aW1lRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShza2VsZXRvbikpIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aW1lRm9ybWF0c1tza2VsZXRvbl07XG4gICAgICAgICAgICBjb21wdXRlZCA9IGNyZWF0ZURhdGVUaW1lRm9ybWF0KHNrZWxldG9uLCBwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgICAgICB0aW1lUmVsYXRlZEZvcm1hdHMucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZGF0ZSBmb3JtYXRzIGludG8gYSBwYXR0ZXJuIGZvciBjcmVhdGVEYXRlVGltZUZvcm1hdHNcbiAgICBmb3IgKHNrZWxldG9uIGluIGRhdGVGb3JtYXRzKSB7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShza2VsZXRvbikpIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBkYXRlRm9ybWF0c1tza2VsZXRvbl07XG4gICAgICAgICAgICBjb21wdXRlZCA9IGNyZWF0ZURhdGVUaW1lRm9ybWF0KHNrZWxldG9uLCBwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgICAgICBkYXRlUmVsYXRlZEZvcm1hdHMucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21iaW5lIGN1c3RvbSB0aW1lIGFuZCBjdXN0b20gZGF0ZSBmb3JtYXRzIHdoZW4gdGhleSBhcmUgb3J0aG9nb25hbHMgdG8gY29tcGxldGUgdGhlXG4gICAgLy8gZm9ybWF0cyBzdXBwb3J0ZWQgYnkgQ0xEUi5cbiAgICAvLyBUaGlzIEFsZ28gaXMgYmFzZWQgb24gc2VjdGlvbiBcIk1pc3NpbmcgU2tlbGV0b24gRmllbGRzXCIgZnJvbTpcbiAgICAvLyBodHRwOi8vdW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNhdmFpbGFibGVGb3JtYXRzX2FwcGVuZEl0ZW1zXG4gICAgZm9yIChpID0gMDsgaSA8IHRpbWVSZWxhdGVkRm9ybWF0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgZGF0ZVJlbGF0ZWRGb3JtYXRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZVJlbGF0ZWRGb3JtYXRzW2pdLm1vbnRoID09PSAnbG9uZycpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gZGF0ZVJlbGF0ZWRGb3JtYXRzW2pdLndlZWtkYXkgPyBmb3JtYXRzLmZ1bGwgOiBmb3JtYXRzLmxvbmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVSZWxhdGVkRm9ybWF0c1tqXS5tb250aCA9PT0gJ3Nob3J0Jykge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBmb3JtYXRzLm1lZGl1bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGZvcm1hdHMuc2hvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wdXRlZCA9IGpvaW5EYXRlQW5kVGltZUZvcm1hdHMoZGF0ZVJlbGF0ZWRGb3JtYXRzW2pdLCB0aW1lUmVsYXRlZEZvcm1hdHNbaV0pO1xuICAgICAgICAgICAgY29tcHV0ZWQub3JpZ2luYWxQYXR0ZXJuID0gcGF0dGVybjtcbiAgICAgICAgICAgIGNvbXB1dGVkLmV4dGVuZGVkUGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgnezB9JywgdGltZVJlbGF0ZWRGb3JtYXRzW2ldLmV4dGVuZGVkUGF0dGVybikucmVwbGFjZSgnezF9JywgZGF0ZVJlbGF0ZWRGb3JtYXRzW2pdLmV4dGVuZGVkUGF0dGVybikucmVwbGFjZSgvXlssXFxzXSt8WyxcXHNdKyQvZ2ksICcnKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXB1dGVGaW5hbFBhdHRlcm5zKGNvbXB1dGVkKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0aGlzIHJlcHJlc2VudHMgdGhlIGV4Y2VwdGlvbnMgb2YgdGhlIHJ1bGUgdGhhdCBhcmUgbm90IGNvdmVyZWQgYnkgQ0xEUiBhdmFpbGFibGVGb3JtYXRzXG4vLyBmb3Igc2luZ2xlIHByb3BlcnR5IGNvbmZpZ3VyYXRpb25zLCB0aGV5IHBsYXkgbm8gcm9sZSB3aGVuIHVzaW5nIG11bHRpcGxlIHByb3BlcnRpZXMsIGFuZFxuLy8gdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoaXMgdGFibGUsIGFyZSBub3QgZXhjZXB0aW9ucyBvciBhcmUgbm90IGNvdmVyZWQgYnkgdGhlIGRhdGEgd2Vcbi8vIHByb3ZpZGUuXG52YXIgdmFsaWRTeW50aGV0aWNQcm9wcyA9IHtcbiAgICBzZWNvbmQ6IHtcbiAgICAgICAgbnVtZXJpYzogJ3MnLFxuICAgICAgICAnMi1kaWdpdCc6ICdzcydcbiAgICB9LFxuICAgIG1pbnV0ZToge1xuICAgICAgICBudW1lcmljOiAnbScsXG4gICAgICAgICcyLWRpZ2l0JzogJ21tJ1xuICAgIH0sXG4gICAgeWVhcjoge1xuICAgICAgICBudW1lcmljOiAneScsXG4gICAgICAgICcyLWRpZ2l0JzogJ3l5J1xuICAgIH0sXG4gICAgZGF5OiB7XG4gICAgICAgIG51bWVyaWM6ICdkJyxcbiAgICAgICAgJzItZGlnaXQnOiAnZGQnXG4gICAgfSxcbiAgICBtb250aDoge1xuICAgICAgICBudW1lcmljOiAnTCcsXG4gICAgICAgICcyLWRpZ2l0JzogJ0xMJyxcbiAgICAgICAgbmFycm93OiAnTExMTEwnLFxuICAgICAgICBzaG9ydDogJ0xMTCcsXG4gICAgICAgIGxvbmc6ICdMTExMJ1xuICAgIH0sXG4gICAgd2Vla2RheToge1xuICAgICAgICBuYXJyb3c6ICdjY2NjYycsXG4gICAgICAgIHNob3J0OiAnY2NjJyxcbiAgICAgICAgbG9uZzogJ2NjY2MnXG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTeW50aGV0aWNGb3JtYXQocHJvcE5hbWUsIHByb3BWYWx1ZSkge1xuICAgIGlmICh2YWxpZFN5bnRoZXRpY1Byb3BzW3Byb3BOYW1lXSAmJiB2YWxpZFN5bnRoZXRpY1Byb3BzW3Byb3BOYW1lXVtwcm9wVmFsdWVdKSB7XG4gICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICByZXR1cm4gX3JlZjIgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbFBhdHRlcm46IHZhbGlkU3ludGhldGljUHJvcHNbcHJvcE5hbWVdW3Byb3BWYWx1ZV0sXG4gICAgICAgICAgICBfOiBkZWZpbmVQcm9wZXJ0eSQxKHt9LCBwcm9wTmFtZSwgcHJvcFZhbHVlKSxcbiAgICAgICAgICAgIGV4dGVuZGVkUGF0dGVybjogXCJ7XCIgKyBwcm9wTmFtZSArIFwifVwiXG4gICAgICAgIH0sIGRlZmluZVByb3BlcnR5JDEoX3JlZjIsIHByb3BOYW1lLCBwcm9wVmFsdWUpLCBkZWZpbmVQcm9wZXJ0eSQxKF9yZWYyLCBcInBhdHRlcm4xMlwiLCBcIntcIiArIHByb3BOYW1lICsgXCJ9XCIpLCBkZWZpbmVQcm9wZXJ0eSQxKF9yZWYyLCBcInBhdHRlcm5cIiwgXCJ7XCIgKyBwcm9wTmFtZSArIFwifVwiKSwgX3JlZjI7XG4gICAgfVxufVxuXG4vLyBBbiBvYmplY3QgbWFwIG9mIGRhdGUgY29tcG9uZW50IGtleXMsIHNhdmVzIHVzaW5nIGEgcmVnZXggbGF0ZXJcbnZhciBkYXRlV2lkdGhzID0gb2JqQ3JlYXRlKG51bGwsIHsgbmFycm93OiB7fSwgc2hvcnQ6IHt9LCBsb25nOiB7fSB9KTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIGZvciBhIGRhdGUgY29tcG9uZW50LCByZXNvbHZlZCB1c2luZyBtdWx0aXBsZSBpbmhlcml0YW5jZSBhcyBzcGVjaWZpZWRcbiAqIGFzIHNwZWNpZmllZCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgMzUuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVEYXRlU3RyaW5nKGRhdGEsIGNhLCBjb21wb25lbnQsIHdpZHRoLCBrZXkpIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUuaHRtbCNNdWx0aXBsZV9Jbmhlcml0YW5jZTpcbiAgICAvLyAnSW4gY2xlYXJseSBzcGVjaWZpZWQgaW5zdGFuY2VzLCByZXNvdXJjZXMgbWF5IGluaGVyaXQgZnJvbSB3aXRoaW4gdGhlIHNhbWUgbG9jYWxlLlxuICAgIC8vICBGb3IgZXhhbXBsZSwgLi4uIHRoZSBCdWRkaGlzdCBjYWxlbmRhciBpbmhlcml0cyBmcm9tIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIuJ1xuICAgIHZhciBvYmogPSBkYXRhW2NhXSAmJiBkYXRhW2NhXVtjb21wb25lbnRdID8gZGF0YVtjYV1bY29tcG9uZW50XSA6IGRhdGEuZ3JlZ29yeVtjb21wb25lbnRdLFxuXG5cbiAgICAvLyBcInNpZGV3YXlzXCIgaW5oZXJpdGFuY2UgcmVzb2x2ZXMgc3RyaW5ncyB3aGVuIGEga2V5IGRvZXNuJ3QgZXhpc3RcbiAgICBhbHRzID0ge1xuICAgICAgICBuYXJyb3c6IFsnc2hvcnQnLCAnbG9uZyddLFxuICAgICAgICBzaG9ydDogWydsb25nJywgJ25hcnJvdyddLFxuICAgICAgICBsb25nOiBbJ3Nob3J0JywgJ25hcnJvdyddXG4gICAgfSxcblxuXG4gICAgLy9cbiAgICByZXNvbHZlZCA9IGhvcC5jYWxsKG9iaiwgd2lkdGgpID8gb2JqW3dpZHRoXSA6IGhvcC5jYWxsKG9iaiwgYWx0c1t3aWR0aF1bMF0pID8gb2JqW2FsdHNbd2lkdGhdWzBdXSA6IG9ialthbHRzW3dpZHRoXVsxXV07XG5cbiAgICAvLyBga2V5YCB3b3VsZG4ndCBiZSBzcGVjaWZpZWQgZm9yIGNvbXBvbmVudHMgJ2RheVBlcmlvZHMnXG4gICAgcmV0dXJuIGtleSAhPT0gbnVsbCA/IHJlc29sdmVkW2tleV0gOiByZXNvbHZlZDtcbn1cblxuLy8gRGVmaW5lIHRoZSBEYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBpbnRlcm5hbGx5IHNvIGl0IGNhbm5vdCBiZSB0YWludGVkXG5mdW5jdGlvbiBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yKCkge1xuICAgIHZhciBsb2NhbGVzID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKCF0aGlzIHx8IHRoaXMgPT09IEludGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gSW5pdGlhbGl6ZURhdGVUaW1lRm9ybWF0KHRvT2JqZWN0KHRoaXMpLCBsb2NhbGVzLCBvcHRpb25zKTtcbn1cblxuZGVmaW5lUHJvcGVydHkoSW50bCwgJ0RhdGVUaW1lRm9ybWF0Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogRGF0ZVRpbWVGb3JtYXRDb25zdHJ1Y3RvclxufSk7XG5cbi8vIE11c3QgZXhwbGljaXRseSBzZXQgcHJvdG90eXBlcyBhcyB1bndyaXRhYmxlXG5kZWZpbmVQcm9wZXJ0eShEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yLCAncHJvdG90eXBlJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxufSk7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBJbml0aWFsaXplRGF0ZVRpbWVGb3JtYXQgYWNjZXB0cyB0aGUgYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0XG4gKiAod2hpY2ggbXVzdCBiZSBhbiBvYmplY3QpLCBsb2NhbGVzLCBhbmQgb3B0aW9ucy4gSXQgaW5pdGlhbGl6ZXMgZGF0ZVRpbWVGb3JtYXQgYXMgYVxuICogRGF0ZVRpbWVGb3JtYXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiAvKiAxMi4xLjEuMSAqL0luaXRpYWxpemVEYXRlVGltZUZvcm1hdChkYXRlVGltZUZvcm1hdCwgbG9jYWxlcywgb3B0aW9ucykge1xuICAgIC8vIFRoaXMgd2lsbCBiZSBhIGludGVybmFsIHByb3BlcnRpZXMgb2JqZWN0IGlmIHdlJ3JlIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgdmFyIGludGVybmFsID0gZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKGRhdGVUaW1lRm9ybWF0KTtcblxuICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2hvc2UgcHJvcHMgY2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgdmFsdWVzIG9mIFJlZ0V4cCBwcm9wc1xuICAgIHZhciByZWdleHBSZXN0b3JlID0gY3JlYXRlUmVnRXhwUmVzdG9yZSgpO1xuXG4gICAgLy8gMS4gSWYgZGF0ZVRpbWVGb3JtYXQgaGFzIGFuIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgd2l0aFxuICAgIC8vICAgIHZhbHVlIHRydWUsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAoaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9PT0gdHJ1ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIG9iamVjdCBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIGFzIGFuIEludGwgb2JqZWN0Jyk7XG5cbiAgICAvLyBOZWVkIHRoaXMgdG8gYWNjZXNzIHRoZSBgaW50ZXJuYWxgIG9iamVjdFxuICAgIGRlZmluZVByb3BlcnR5KGRhdGVUaW1lRm9ybWF0LCAnX19nZXRJbnRlcm5hbFByb3BlcnRpZXMnLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IE5vbi1zdGFuZGFyZCwgZm9yIGludGVybmFsIHVzZSBvbmx5XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSBzZWNyZXQpIHJldHVybiBpbnRlcm5hbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gMi4gU2V0IHRoZSBbW2luaXRpYWxpemVkSW50bE9iamVjdF1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB0cnVlLlxuICAgIGludGVybmFsWydbW2luaXRpYWxpemVkSW50bE9iamVjdF1dJ10gPSB0cnVlO1xuXG4gICAgLy8gMy4gTGV0IHJlcXVlc3RlZExvY2FsZXMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBDYW5vbmljYWxpemVMb2NhbGVMaXN0XG4gICAgLy8gICAgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi4xKSB3aXRoIGFyZ3VtZW50IGxvY2FsZXMuXG4gICAgdmFyIHJlcXVlc3RlZExvY2FsZXMgPSBDYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpO1xuXG4gICAgLy8gNC4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdFxuICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJhbnlcIiwgYW5kIFwiZGF0ZVwiLlxuICAgIG9wdGlvbnMgPSBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCAnYW55JywgJ2RhdGUnKTtcblxuICAgIC8vIDUuIExldCBvcHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgIHZhciBvcHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyA2LiBMZXQgbWF0Y2hlciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAoZGVmaW5lZCBpbiA5LjIuOSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJsb2NhbGVNYXRjaGVyXCIsIFwic3RyaW5nXCIsIGEgTGlzdFxuICAgIC8vICAgIGNvbnRhaW5pbmcgdGhlIHR3byBTdHJpbmcgdmFsdWVzIFwibG9va3VwXCIgYW5kIFwiYmVzdCBmaXRcIiwgYW5kIFwiYmVzdCBmaXRcIi5cbiAgICB2YXIgbWF0Y2hlciA9IEdldE9wdGlvbihvcHRpb25zLCAnbG9jYWxlTWF0Y2hlcicsICdzdHJpbmcnLCBuZXcgTGlzdCgnbG9va3VwJywgJ2Jlc3QgZml0JyksICdiZXN0IGZpdCcpO1xuXG4gICAgLy8gNy4gU2V0IG9wdC5bW2xvY2FsZU1hdGNoZXJdXSB0byBtYXRjaGVyLlxuICAgIG9wdFsnW1tsb2NhbGVNYXRjaGVyXV0nXSA9IG1hdGNoZXI7XG5cbiAgICAvLyA4LiBMZXQgRGF0ZVRpbWVGb3JtYXQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIG9iamVjdCB0aGF0IGlzIHRoZSBpbml0aWFsXG4gICAgLy8gICAgdmFsdWUgb2YgSW50bC5EYXRlVGltZUZvcm1hdC5cbiAgICB2YXIgRGF0ZVRpbWVGb3JtYXQgPSBpbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXQ7IC8vIFRoaXMgaXMgd2hhdCB3ZSAqcmVhbGx5KiBuZWVkXG5cbiAgICAvLyA5LiBMZXQgbG9jYWxlRGF0YSBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbbG9jYWxlRGF0YV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgRGF0ZVRpbWVGb3JtYXQuXG4gICAgdmFyIGxvY2FsZURhdGEgPSBEYXRlVGltZUZvcm1hdFsnW1tsb2NhbGVEYXRhXV0nXTtcblxuICAgIC8vIDEwLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFJlc29sdmVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgIChkZWZpbmVkIGluIDkuMi41KSB3aXRoIHRoZSBbW2F2YWlsYWJsZUxvY2FsZXNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgIC8vICAgICAgRGF0ZVRpbWVGb3JtYXQsIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgdGhlIFtbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV1cbiAgICAvLyAgICAgIGludGVybmFsIHByb3BlcnR5IG9mIERhdGVUaW1lRm9ybWF0LCBhbmQgbG9jYWxlRGF0YS5cbiAgICB2YXIgciA9IFJlc29sdmVMb2NhbGUoRGF0ZVRpbWVGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgRGF0ZVRpbWVGb3JtYXRbJ1tbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV0nXSwgbG9jYWxlRGF0YSk7XG5cbiAgICAvLyAxMS4gU2V0IHRoZSBbW2xvY2FsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbbG9jYWxlXV0uXG4gICAgaW50ZXJuYWxbJ1tbbG9jYWxlXV0nXSA9IHJbJ1tbbG9jYWxlXV0nXTtcblxuICAgIC8vIDEyLiBTZXQgdGhlIFtbY2FsZW5kYXJdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0byB0aGUgdmFsdWUgb2ZcbiAgICAvLyAgICAgci5bW2NhXV0uXG4gICAgaW50ZXJuYWxbJ1tbY2FsZW5kYXJdXSddID0gclsnW1tjYV1dJ107XG5cbiAgICAvLyAxMy4gU2V0IHRoZSBbW251bWJlcmluZ1N5c3RlbV1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbbnVdXS5cbiAgICBpbnRlcm5hbFsnW1tudW1iZXJpbmdTeXN0ZW1dXSddID0gclsnW1tudV1dJ107XG5cbiAgICAvLyBUaGUgc3BlY2lmaWNhdGlvbiBkb2Vzbid0IHRlbGwgdXMgdG8gZG8gdGhpcywgYnV0IGl0J3MgaGVscGZ1bCBsYXRlciBvblxuICAgIGludGVybmFsWydbW2RhdGFMb2NhbGVdXSddID0gclsnW1tkYXRhTG9jYWxlXV0nXTtcblxuICAgIC8vIDE0LiBMZXQgZGF0YUxvY2FsZSBiZSB0aGUgdmFsdWUgb2Ygci5bW2RhdGFMb2NhbGVdXS5cbiAgICB2YXIgZGF0YUxvY2FsZSA9IHJbJ1tbZGF0YUxvY2FsZV1dJ107XG5cbiAgICAvLyAxNS4gTGV0IHR6IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9ucyB3aXRoXG4gICAgLy8gICAgIGFyZ3VtZW50IFwidGltZVpvbmVcIi5cbiAgICB2YXIgdHogPSBvcHRpb25zLnRpbWVab25lO1xuXG4gICAgLy8gMTYuIElmIHR6IGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICBpZiAodHogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBMZXQgdHogYmUgVG9TdHJpbmcodHopLlxuICAgICAgICAvLyBiLiBDb252ZXJ0IHR6IHRvIHVwcGVyIGNhc2UgYXMgZGVzY3JpYmVkIGluIDYuMS5cbiAgICAgICAgLy8gICAgTk9URTogSWYgYW4gaW1wbGVtZW50YXRpb24gYWNjZXB0cyBhZGRpdGlvbmFsIHRpbWUgem9uZSB2YWx1ZXMsIGFzIHBlcm1pdHRlZFxuICAgICAgICAvLyAgICAgICAgICB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMgYnkgdGhlIENvbmZvcm1hbmNlIGNsYXVzZSwgZGlmZmVyZW50IGNhc2luZ1xuICAgICAgICAvLyAgICAgICAgICBydWxlcyBhcHBseS5cbiAgICAgICAgdHogPSB0b0xhdGluVXBwZXJDYXNlKHR6KTtcblxuICAgICAgICAvLyBjLiBJZiB0eiBpcyBub3QgXCJVVENcIiwgdGhlbiB0aHJvdyBhIFJhbmdlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAvLyAjIyNUT0RPOiBhY2NlcHQgbW9yZSB0aW1lIHpvbmVzIyMjXG4gICAgICAgIGlmICh0eiAhPT0gJ1VUQycpIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lWm9uZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIC8vIDE3LiBTZXQgdGhlIFtbdGltZVpvbmVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0byB0ei5cbiAgICBpbnRlcm5hbFsnW1t0aW1lWm9uZV1dJ10gPSB0ejtcblxuICAgIC8vIDE4LiBMZXQgb3B0IGJlIGEgbmV3IFJlY29yZC5cbiAgICBvcHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyAxOS4gRm9yIGVhY2ggcm93IG9mIFRhYmxlIDMsIGV4Y2VwdCB0aGUgaGVhZGVyIHJvdywgZG86XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkYXRlVGltZUNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIHByb3ApKSBjb250aW51ZTtcblxuICAgICAgICAvLyAyMC4gTGV0IHByb3AgYmUgdGhlIG5hbWUgZ2l2ZW4gaW4gdGhlIFByb3BlcnR5IGNvbHVtbiBvZiB0aGUgcm93LlxuICAgICAgICAvLyAyMS4gTGV0IHZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbixcbiAgICAgICAgLy8gICAgIHBhc3NpbmcgYXMgYXJndW1lbnQgb3B0aW9ucywgdGhlIG5hbWUgZ2l2ZW4gaW4gdGhlIFByb3BlcnR5IGNvbHVtbiBvZiB0aGVcbiAgICAgICAgLy8gICAgIHJvdywgXCJzdHJpbmdcIiwgYSBMaXN0IGNvbnRhaW5pbmcgdGhlIHN0cmluZ3MgZ2l2ZW4gaW4gdGhlIFZhbHVlcyBjb2x1bW4gb2ZcbiAgICAgICAgLy8gICAgIHRoZSByb3csIGFuZCB1bmRlZmluZWQuXG4gICAgICAgIHZhciB2YWx1ZSA9IEdldE9wdGlvbihvcHRpb25zLCBwcm9wLCAnc3RyaW5nJywgZGF0ZVRpbWVDb21wb25lbnRzW3Byb3BdKTtcblxuICAgICAgICAvLyAyMi4gU2V0IG9wdC5bWzxwcm9wPl1dIHRvIHZhbHVlLlxuICAgICAgICBvcHRbJ1tbJyArIHByb3AgKyAnXV0nXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbmVkIGEgdmFsdWUgYmVsb3dcbiAgICB2YXIgYmVzdEZvcm1hdCA9IHZvaWQgMDtcblxuICAgIC8vIDIzLiBMZXQgZGF0YUxvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgICBsb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgZGF0YUxvY2FsZS5cbiAgICB2YXIgZGF0YUxvY2FsZURhdGEgPSBsb2NhbGVEYXRhW2RhdGFMb2NhbGVdO1xuXG4gICAgLy8gMjQuIExldCBmb3JtYXRzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICAgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcImZvcm1hdHNcIi5cbiAgICAvLyAgICAgTm90ZTogd2UgcHJvY2VzcyB0aGUgQ0xEUiBmb3JtYXRzIGludG8gdGhlIHNwZWMnZCBzdHJ1Y3R1cmVcbiAgICB2YXIgZm9ybWF0cyA9IFRvRGF0ZVRpbWVGb3JtYXRzKGRhdGFMb2NhbGVEYXRhLmZvcm1hdHMpO1xuXG4gICAgLy8gMjUuIExldCBtYXRjaGVyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiB3aXRoXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImZvcm1hdE1hdGNoZXJcIiwgXCJzdHJpbmdcIiwgYSBMaXN0IGNvbnRhaW5pbmcgdGhlIHR3byBTdHJpbmdcbiAgICAvLyAgICAgdmFsdWVzIFwiYmFzaWNcIiBhbmQgXCJiZXN0IGZpdFwiLCBhbmQgXCJiZXN0IGZpdFwiLlxuICAgIG1hdGNoZXIgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2Zvcm1hdE1hdGNoZXInLCAnc3RyaW5nJywgbmV3IExpc3QoJ2Jhc2ljJywgJ2Jlc3QgZml0JyksICdiZXN0IGZpdCcpO1xuXG4gICAgLy8gT3B0aW1pemF0aW9uOiBjYWNoaW5nIHRoZSBwcm9jZXNzZWQgZm9ybWF0cyBhcyBhIG9uZSB0aW1lIG9wZXJhdGlvbiBieVxuICAgIC8vIHJlcGxhY2luZyB0aGUgaW5pdGlhbCBzdHJ1Y3R1cmUgZnJvbSBsb2NhbGVEYXRhXG4gICAgZGF0YUxvY2FsZURhdGEuZm9ybWF0cyA9IGZvcm1hdHM7XG5cbiAgICAvLyAyNi4gSWYgbWF0Y2hlciBpcyBcImJhc2ljXCIsIHRoZW5cbiAgICBpZiAobWF0Y2hlciA9PT0gJ2Jhc2ljJykge1xuICAgICAgICAvLyAyNy4gTGV0IGJlc3RGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBCYXNpY0Zvcm1hdE1hdGNoZXIgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBvcHQgYW5kIGZvcm1hdHMuXG4gICAgICAgIGJlc3RGb3JtYXQgPSBCYXNpY0Zvcm1hdE1hdGNoZXIob3B0LCBmb3JtYXRzKTtcblxuICAgICAgICAvLyAyOC4gRWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGRpdmVyZ2luZ1xuICAgICAgICAgICAgdmFyIF9ociA9IEdldE9wdGlvbihvcHRpb25zLCAnaG91cjEyJywgJ2Jvb2xlYW4nIC8qLCB1bmRlZmluZWQsIHVuZGVmaW5lZCovKTtcbiAgICAgICAgICAgIG9wdC5ob3VyMTIgPSBfaHIgPT09IHVuZGVmaW5lZCA/IGRhdGFMb2NhbGVEYXRhLmhvdXIxMiA6IF9ocjtcbiAgICAgICAgfVxuICAgICAgICAvLyAyOS4gTGV0IGJlc3RGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBCZXN0Rml0Rm9ybWF0TWF0Y2hlclxuICAgICAgICAvLyAgICAgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIG9wdCBhbmQgZm9ybWF0cy5cbiAgICAgICAgYmVzdEZvcm1hdCA9IEJlc3RGaXRGb3JtYXRNYXRjaGVyKG9wdCwgZm9ybWF0cyk7XG4gICAgfVxuXG4gICAgLy8gMzAuIEZvciBlYWNoIHJvdyBpbiBUYWJsZSAzLCBleGNlcHQgdGhlIGhlYWRlciByb3csIGRvXG4gICAgZm9yICh2YXIgX3Byb3AgaW4gZGF0ZVRpbWVDb21wb25lbnRzKSB7XG4gICAgICAgIGlmICghaG9wLmNhbGwoZGF0ZVRpbWVDb21wb25lbnRzLCBfcHJvcCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIGEuIExldCBwcm9wIGJlIHRoZSBuYW1lIGdpdmVuIGluIHRoZSBQcm9wZXJ0eSBjb2x1bW4gb2YgdGhlIHJvdy5cbiAgICAgICAgLy8gYi4gTGV0IHBEZXNjIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICBiZXN0Rm9ybWF0IHdpdGggYXJndW1lbnQgcHJvcC5cbiAgICAgICAgLy8gYy4gSWYgcERlc2MgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgICAgICBpZiAoaG9wLmNhbGwoYmVzdEZvcm1hdCwgX3Byb3ApKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgcCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGJlc3RGb3JtYXRcbiAgICAgICAgICAgIC8vICAgIHdpdGggYXJndW1lbnQgcHJvcC5cbiAgICAgICAgICAgIHZhciBwID0gYmVzdEZvcm1hdFtfcHJvcF07XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZGl2ZXJnaW5nXG4gICAgICAgICAgICAgICAgcCA9IGJlc3RGb3JtYXQuXyAmJiBob3AuY2FsbChiZXN0Rm9ybWF0Ll8sIF9wcm9wKSA/IGJlc3RGb3JtYXQuX1tfcHJvcF0gOiBwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpaS4gU2V0IHRoZSBbWzxwcm9wPl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHAuXG4gICAgICAgICAgICBpbnRlcm5hbFsnW1snICsgX3Byb3AgKyAnXV0nXSA9IHA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGF0dGVybiA9IHZvaWQgMDsgLy8gQXNzaWduZWQgYSB2YWx1ZSBiZWxvd1xuXG4gICAgLy8gMzEuIExldCBocjEyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiB3aXRoXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImhvdXIxMlwiLCBcImJvb2xlYW5cIiwgdW5kZWZpbmVkLCBhbmQgdW5kZWZpbmVkLlxuICAgIHZhciBocjEyID0gR2V0T3B0aW9uKG9wdGlvbnMsICdob3VyMTInLCAnYm9vbGVhbicgLyosIHVuZGVmaW5lZCwgdW5kZWZpbmVkKi8pO1xuXG4gICAgLy8gMzIuIElmIGRhdGVUaW1lRm9ybWF0IGhhcyBhbiBpbnRlcm5hbCBwcm9wZXJ0eSBbW2hvdXJdXSwgdGhlblxuICAgIGlmIChpbnRlcm5hbFsnW1tob3VyXV0nXSkge1xuICAgICAgICAvLyBhLiBJZiBocjEyIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgaHIxMiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV1cbiAgICAgICAgLy8gICAgaW50ZXJuYWwgbWV0aG9kIG9mIGRhdGFMb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgXCJob3VyMTJcIi5cbiAgICAgICAgaHIxMiA9IGhyMTIgPT09IHVuZGVmaW5lZCA/IGRhdGFMb2NhbGVEYXRhLmhvdXIxMiA6IGhyMTI7XG5cbiAgICAgICAgLy8gYi4gU2V0IHRoZSBbW2hvdXIxMl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIGhyMTIuXG4gICAgICAgIGludGVybmFsWydbW2hvdXIxMl1dJ10gPSBocjEyO1xuXG4gICAgICAgIC8vIGMuIElmIGhyMTIgaXMgdHJ1ZSwgdGhlblxuICAgICAgICBpZiAoaHIxMiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGhvdXJObzAgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAgICAgLy8gICAgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcImhvdXJObzBcIi5cbiAgICAgICAgICAgIHZhciBob3VyTm8wID0gZGF0YUxvY2FsZURhdGEuaG91ck5vMDtcblxuICAgICAgICAgICAgLy8gaWkuIFNldCB0aGUgW1tob3VyTm8wXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gaG91ck5vMC5cbiAgICAgICAgICAgIGludGVybmFsWydbW2hvdXJObzBdXSddID0gaG91ck5vMDtcblxuICAgICAgICAgICAgLy8gaWlpLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBcInBhdHRlcm4xMlwiLlxuICAgICAgICAgICAgcGF0dGVybiA9IGJlc3RGb3JtYXQucGF0dGVybjEyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZC4gRWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICAvLyBpLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICBiZXN0Rm9ybWF0IHdpdGggYXJndW1lbnQgXCJwYXR0ZXJuXCIuXG4gICAgICAgICAgICBwYXR0ZXJuID0gYmVzdEZvcm1hdC5wYXR0ZXJuO1xuICAgIH1cblxuICAgIC8vIDMzLiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBcInBhdHRlcm5cIi5cbiAgICAgICAgcGF0dGVybiA9IGJlc3RGb3JtYXQucGF0dGVybjtcblxuICAgIC8vIDM0LiBTZXQgdGhlIFtbcGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHBhdHRlcm4uXG4gICAgaW50ZXJuYWxbJ1tbcGF0dGVybl1dJ10gPSBwYXR0ZXJuO1xuXG4gICAgLy8gMzUuIFNldCB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHVuZGVmaW5lZC5cbiAgICBpbnRlcm5hbFsnW1tib3VuZEZvcm1hdF1dJ10gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyAzNi4gU2V0IHRoZSBbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0b1xuICAgIC8vICAgICB0cnVlLlxuICAgIGludGVybmFsWydbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSddID0gdHJ1ZTtcblxuICAgIC8vIEluIEVTMywgd2UgbmVlZCB0byBwcmUtYmluZCB0aGUgZm9ybWF0KCkgZnVuY3Rpb25cbiAgICBpZiAoZXMzKSBkYXRlVGltZUZvcm1hdC5mb3JtYXQgPSBHZXRGb3JtYXREYXRlVGltZS5jYWxsKGRhdGVUaW1lRm9ybWF0KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgcmVnZXhwUmVzdG9yZSgpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBuZXdseSBpbml0aWFsaXNlZCBvYmplY3RcbiAgICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQ7XG59XG5cbi8qKlxuICogU2V2ZXJhbCBEYXRlVGltZUZvcm1hdCBhbGdvcml0aG1zIHVzZSB2YWx1ZXMgZnJvbSB0aGUgZm9sbG93aW5nIHRhYmxlLCB3aGljaCBwcm92aWRlc1xuICogcHJvcGVydHkgbmFtZXMgYW5kIGFsbG93YWJsZSB2YWx1ZXMgZm9yIHRoZSBjb21wb25lbnRzIG9mIGRhdGUgYW5kIHRpbWUgZm9ybWF0czpcbiAqL1xudmFyIGRhdGVUaW1lQ29tcG9uZW50cyA9IHtcbiAgICB3ZWVrZGF5OiBbXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIl0sXG4gICAgZXJhOiBbXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIl0sXG4gICAgeWVhcjogW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIl0sXG4gICAgbW9udGg6IFtcIjItZGlnaXRcIiwgXCJudW1lcmljXCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJdLFxuICAgIGRheTogW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIl0sXG4gICAgaG91cjogW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIl0sXG4gICAgbWludXRlOiBbXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiXSxcbiAgICBzZWNvbmQ6IFtcIjItZGlnaXRcIiwgXCJudW1lcmljXCJdLFxuICAgIHRpbWVab25lTmFtZTogW1wic2hvcnRcIiwgXCJsb25nXCJdXG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgb3B0aW9ucyxcbiAqIHJlcXVpcmVkLCBhbmQgZGVmYXVsdHMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBUb0RhdGVUaW1lRm9ybWF0cyhmb3JtYXRzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmb3JtYXRzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICByZXR1cm4gZm9ybWF0cztcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZURhdGVUaW1lRm9ybWF0cyhmb3JtYXRzKTtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsXG4gKiByZXF1aXJlZCwgYW5kIGRlZmF1bHRzLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9EYXRlVGltZU9wdGlvbnMob3B0aW9ucywgcmVxdWlyZWQsIGRlZmF1bHRzKSB7XG4gICAgLy8gMS4gSWYgb3B0aW9ucyBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgbnVsbCwgZWxzZSBsZXQgb3B0aW9ucyBiZVxuICAgIC8vICAgIFRvT2JqZWN0KG9wdGlvbnMpLlxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSBudWxsO2Vsc2Uge1xuICAgICAgICAvLyAoIzEyKSBvcHRpb25zIG5lZWRzIHRvIGJlIGEgUmVjb3JkLCBidXQgaXQgYWxzbyBuZWVkcyB0byBpbmhlcml0IHByb3BlcnRpZXNcbiAgICAgICAgdmFyIG9wdDIgPSB0b09iamVjdChvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucyA9IG5ldyBSZWNvcmQoKTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIG9wdDIpIHtcbiAgICAgICAgICAgIG9wdGlvbnNba10gPSBvcHQyW2tdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTGV0IGNyZWF0ZSBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LCAxNS4yLjMuNS5cbiAgICB2YXIgY3JlYXRlID0gb2JqQ3JlYXRlO1xuXG4gICAgLy8gMy4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2Qgb2YgY3JlYXRlIHdpdGhcbiAgICAvLyAgICB1bmRlZmluZWQgYXMgdGhlIHRoaXMgdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW1cbiAgICAvLyAgICBvcHRpb25zLlxuICAgIG9wdGlvbnMgPSBjcmVhdGUob3B0aW9ucyk7XG5cbiAgICAvLyA0LiBMZXQgbmVlZERlZmF1bHRzIGJlIHRydWUuXG4gICAgdmFyIG5lZWREZWZhdWx0cyA9IHRydWU7XG5cbiAgICAvLyA1LiBJZiByZXF1aXJlZCBpcyBcImRhdGVcIiBvciBcImFueVwiLCB0aGVuXG4gICAgaWYgKHJlcXVpcmVkID09PSAnZGF0ZScgfHwgcmVxdWlyZWQgPT09ICdhbnknKSB7XG4gICAgICAgIC8vIGEuIEZvciBlYWNoIG9mIHRoZSBwcm9wZXJ0eSBuYW1lcyBcIndlZWtkYXlcIiwgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIjpcbiAgICAgICAgLy8gaS4gSWYgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zIHdpdGggdGhlXG4gICAgICAgIC8vICAgIHByb3BlcnR5IG5hbWUgaXMgbm90IHVuZGVmaW5lZCwgdGhlbiBsZXQgbmVlZERlZmF1bHRzIGJlIGZhbHNlLlxuICAgICAgICBpZiAob3B0aW9ucy53ZWVrZGF5ICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy55ZWFyICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5tb250aCAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZGF5ICE9PSB1bmRlZmluZWQpIG5lZWREZWZhdWx0cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDYuIElmIHJlcXVpcmVkIGlzIFwidGltZVwiIG9yIFwiYW55XCIsIHRoZW5cbiAgICBpZiAocmVxdWlyZWQgPT09ICd0aW1lJyB8fCByZXF1aXJlZCA9PT0gJ2FueScpIHtcbiAgICAgICAgLy8gYS4gRm9yIGVhY2ggb2YgdGhlIHByb3BlcnR5IG5hbWVzIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiOlxuICAgICAgICAvLyBpLiBJZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnMgd2l0aCB0aGVcbiAgICAgICAgLy8gICAgcHJvcGVydHkgbmFtZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGxldCBuZWVkRGVmYXVsdHMgYmUgZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLmhvdXIgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm1pbnV0ZSAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc2Vjb25kICE9PSB1bmRlZmluZWQpIG5lZWREZWZhdWx0cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDcuIElmIG5lZWREZWZhdWx0cyBpcyB0cnVlIGFuZCBkZWZhdWx0cyBpcyBlaXRoZXIgXCJkYXRlXCIgb3IgXCJhbGxcIiwgdGhlblxuICAgIGlmIChuZWVkRGVmYXVsdHMgJiYgKGRlZmF1bHRzID09PSAnZGF0ZScgfHwgZGVmYXVsdHMgPT09ICdhbGwnKSlcbiAgICAgICAgLy8gYS4gRm9yIGVhY2ggb2YgdGhlIHByb3BlcnR5IG5hbWVzIFwieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCI6XG4gICAgICAgIC8vIGkuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9ucyB3aXRoIHRoZVxuICAgICAgICAvLyAgICBwcm9wZXJ0eSBuYW1lLCBQcm9wZXJ0eSBEZXNjcmlwdG9yIHtbW1ZhbHVlXV06IFwibnVtZXJpY1wiLCBbW1dyaXRhYmxlXV06XG4gICAgICAgIC8vICAgIHRydWUsIFtbRW51bWVyYWJsZV1dOiB0cnVlLCBbW0NvbmZpZ3VyYWJsZV1dOiB0cnVlfSwgYW5kIGZhbHNlLlxuICAgICAgICBvcHRpb25zLnllYXIgPSBvcHRpb25zLm1vbnRoID0gb3B0aW9ucy5kYXkgPSAnbnVtZXJpYyc7XG5cbiAgICAvLyA4LiBJZiBuZWVkRGVmYXVsdHMgaXMgdHJ1ZSBhbmQgZGVmYXVsdHMgaXMgZWl0aGVyIFwidGltZVwiIG9yIFwiYWxsXCIsIHRoZW5cbiAgICBpZiAobmVlZERlZmF1bHRzICYmIChkZWZhdWx0cyA9PT0gJ3RpbWUnIHx8IGRlZmF1bHRzID09PSAnYWxsJykpXG4gICAgICAgIC8vIGEuIEZvciBlYWNoIG9mIHRoZSBwcm9wZXJ0eSBuYW1lcyBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIjpcbiAgICAgICAgLy8gaS4gQ2FsbCB0aGUgW1tEZWZpbmVPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zIHdpdGggdGhlXG4gICAgICAgIC8vICAgIHByb3BlcnR5IG5hbWUsIFByb3BlcnR5IERlc2NyaXB0b3Ige1tbVmFsdWVdXTogXCJudW1lcmljXCIsIFtbV3JpdGFibGVdXTpcbiAgICAgICAgLy8gICAgdHJ1ZSwgW1tFbnVtZXJhYmxlXV06IHRydWUsIFtbQ29uZmlndXJhYmxlXV06IHRydWV9LCBhbmQgZmFsc2UuXG4gICAgICAgIG9wdGlvbnMuaG91ciA9IG9wdGlvbnMubWludXRlID0gb3B0aW9ucy5zZWNvbmQgPSAnbnVtZXJpYyc7XG5cbiAgICAvLyA5LiBSZXR1cm4gb3B0aW9ucy5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBCYXNpY0Zvcm1hdE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIHR3byBhcmd1bWVudHMgb3B0aW9ucyBhbmRcbiAqIGZvcm1hdHMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBCYXNpY0Zvcm1hdE1hdGNoZXIob3B0aW9ucywgZm9ybWF0cykge1xuICAgIC8vIDEuIExldCByZW1vdmFsUGVuYWx0eSBiZSAxMjAuXG4gICAgdmFyIHJlbW92YWxQZW5hbHR5ID0gMTIwO1xuXG4gICAgLy8gMi4gTGV0IGFkZGl0aW9uUGVuYWx0eSBiZSAyMC5cbiAgICB2YXIgYWRkaXRpb25QZW5hbHR5ID0gMjA7XG5cbiAgICAvLyAzLiBMZXQgbG9uZ0xlc3NQZW5hbHR5IGJlIDguXG4gICAgdmFyIGxvbmdMZXNzUGVuYWx0eSA9IDg7XG5cbiAgICAvLyA0LiBMZXQgbG9uZ01vcmVQZW5hbHR5IGJlIDYuXG4gICAgdmFyIGxvbmdNb3JlUGVuYWx0eSA9IDY7XG5cbiAgICAvLyA1LiBMZXQgc2hvcnRMZXNzUGVuYWx0eSBiZSA2LlxuICAgIHZhciBzaG9ydExlc3NQZW5hbHR5ID0gNjtcblxuICAgIC8vIDYuIExldCBzaG9ydE1vcmVQZW5hbHR5IGJlIDMuXG4gICAgdmFyIHNob3J0TW9yZVBlbmFsdHkgPSAzO1xuXG4gICAgLy8gNy4gTGV0IGJlc3RTY29yZSBiZSAtSW5maW5pdHkuXG4gICAgdmFyIGJlc3RTY29yZSA9IC1JbmZpbml0eTtcblxuICAgIC8vIDguIExldCBiZXN0Rm9ybWF0IGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgYmVzdEZvcm1hdCA9IHZvaWQgMDtcblxuICAgIC8vIDkuIExldCBpIGJlIDAuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLy8gMTAuIEFzc2VydDogZm9ybWF0cyBpcyBhbiBBcnJheSBvYmplY3QuXG5cbiAgICAvLyAxMS4gTGV0IGxlbiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdHMgd2l0aCBhcmd1bWVudCBcImxlbmd0aFwiLlxuICAgIHZhciBsZW4gPSBmb3JtYXRzLmxlbmd0aDtcblxuICAgIC8vIDEyLiBSZXBlYXQgd2hpbGUgaSA8IGxlbjpcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQgZm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgZm9ybWF0cyB3aXRoIGFyZ3VtZW50IFRvU3RyaW5nKGkpLlxuICAgICAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1tpXTtcblxuICAgICAgICAvLyBiLiBMZXQgc2NvcmUgYmUgMC5cbiAgICAgICAgdmFyIHNjb3JlID0gMDtcblxuICAgICAgICAvLyBjLiBGb3IgZWFjaCBwcm9wZXJ0eSBzaG93biBpbiBUYWJsZSAzOlxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkYXRlVGltZUNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGlmICghaG9wLmNhbGwoZGF0ZVRpbWVDb21wb25lbnRzLCBwcm9wZXJ0eSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBpLiBMZXQgb3B0aW9uc1Byb3AgYmUgb3B0aW9ucy5bWzxwcm9wZXJ0eT5dXS5cbiAgICAgICAgICAgIHZhciBvcHRpb25zUHJvcCA9IG9wdGlvbnNbJ1tbJyArIHByb3BlcnR5ICsgJ11dJ107XG5cbiAgICAgICAgICAgIC8vIGlpLiBMZXQgZm9ybWF0UHJvcERlc2MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldE93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdFxuICAgICAgICAgICAgLy8gICAgIHdpdGggYXJndW1lbnQgcHJvcGVydHkuXG4gICAgICAgICAgICAvLyBpaWkuIElmIGZvcm1hdFByb3BEZXNjIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgICAgIC8vICAgICAxLiBMZXQgZm9ybWF0UHJvcCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdCB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgICAgICAgICAgdmFyIGZvcm1hdFByb3AgPSBob3AuY2FsbChmb3JtYXQsIHByb3BlcnR5KSA/IGZvcm1hdFtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIGl2LiBJZiBvcHRpb25zUHJvcCBpcyB1bmRlZmluZWQgYW5kIGZvcm1hdFByb3AgaXMgbm90IHVuZGVmaW5lZCwgdGhlbiBkZWNyZWFzZSBzY29yZSBieVxuICAgICAgICAgICAgLy8gICAgIGFkZGl0aW9uUGVuYWx0eS5cbiAgICAgICAgICAgIGlmIChvcHRpb25zUHJvcCA9PT0gdW5kZWZpbmVkICYmIGZvcm1hdFByb3AgIT09IHVuZGVmaW5lZCkgc2NvcmUgLT0gYWRkaXRpb25QZW5hbHR5O1xuXG4gICAgICAgICAgICAvLyB2LiBFbHNlIGlmIG9wdGlvbnNQcm9wIGlzIG5vdCB1bmRlZmluZWQgYW5kIGZvcm1hdFByb3AgaXMgdW5kZWZpbmVkLCB0aGVuIGRlY3JlYXNlIHNjb3JlIGJ5XG4gICAgICAgICAgICAvLyAgICByZW1vdmFsUGVuYWx0eS5cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnNQcm9wICE9PSB1bmRlZmluZWQgJiYgZm9ybWF0UHJvcCA9PT0gdW5kZWZpbmVkKSBzY29yZSAtPSByZW1vdmFsUGVuYWx0eTtcblxuICAgICAgICAgICAgICAgIC8vIHZpLiBFbHNlXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBMZXQgdmFsdWVzIGJlIHRoZSBhcnJheSBbXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBcImxvbmdcIl0uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gWycyLWRpZ2l0JywgJ251bWVyaWMnLCAnbmFycm93JywgJ3Nob3J0JywgJ2xvbmcnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gTGV0IG9wdGlvbnNQcm9wSW5kZXggYmUgdGhlIGluZGV4IG9mIG9wdGlvbnNQcm9wIHdpdGhpbiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uc1Byb3BJbmRleCA9IGFyckluZGV4T2YuY2FsbCh2YWx1ZXMsIG9wdGlvbnNQcm9wKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4gTGV0IGZvcm1hdFByb3BJbmRleCBiZSB0aGUgaW5kZXggb2YgZm9ybWF0UHJvcCB3aXRoaW4gdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdFByb3BJbmRleCA9IGFyckluZGV4T2YuY2FsbCh2YWx1ZXMsIGZvcm1hdFByb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA0LiBMZXQgZGVsdGEgYmUgbWF4KG1pbihmb3JtYXRQcm9wSW5kZXggLSBvcHRpb25zUHJvcEluZGV4LCAyKSwgLTIpLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoTWF0aC5taW4oZm9ybWF0UHJvcEluZGV4IC0gb3B0aW9uc1Byb3BJbmRleCwgMiksIC0yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4gSWYgZGVsdGEgPSAyLCBkZWNyZWFzZSBzY29yZSBieSBsb25nTW9yZVBlbmFsdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPT09IDIpIHNjb3JlIC09IGxvbmdNb3JlUGVuYWx0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNi4gRWxzZSBpZiBkZWx0YSA9IDEsIGRlY3JlYXNlIHNjb3JlIGJ5IHNob3J0TW9yZVBlbmFsdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA9PT0gMSkgc2NvcmUgLT0gc2hvcnRNb3JlUGVuYWx0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDcuIEVsc2UgaWYgZGVsdGEgPSAtMSwgZGVjcmVhc2Ugc2NvcmUgYnkgc2hvcnRMZXNzUGVuYWx0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA9PT0gLTEpIHNjb3JlIC09IHNob3J0TGVzc1BlbmFsdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gOC4gRWxzZSBpZiBkZWx0YSA9IC0yLCBkZWNyZWFzZSBzY29yZSBieSBsb25nTGVzc1BlbmFsdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhID09PSAtMikgc2NvcmUgLT0gbG9uZ0xlc3NQZW5hbHR5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkLiBJZiBzY29yZSA+IGJlc3RTY29yZSwgdGhlblxuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBiZXN0U2NvcmUgYmUgc2NvcmUuXG4gICAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcblxuICAgICAgICAgICAgLy8gaWkuIExldCBiZXN0Rm9ybWF0IGJlIGZvcm1hdC5cbiAgICAgICAgICAgIGJlc3RGb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlLiBJbmNyZWFzZSBpIGJ5IDEuXG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyAxMy4gUmV0dXJuIGJlc3RGb3JtYXQuXG4gICAgcmV0dXJuIGJlc3RGb3JtYXQ7XG59XG5cbi8qKlxuICogV2hlbiB0aGUgQmVzdEZpdEZvcm1hdE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIHR3byBhcmd1bWVudHMgb3B0aW9uc1xuICogYW5kIGZvcm1hdHMsIGl0IHBlcmZvcm1zIGltcGxlbWVudGF0aW9uIGRlcGVuZGVudCBzdGVwcywgd2hpY2ggc2hvdWxkIHJldHVybiBhIHNldCBvZlxuICogY29tcG9uZW50IHJlcHJlc2VudGF0aW9ucyB0aGF0IGEgdHlwaWNhbCB1c2VyIG9mIHRoZSBzZWxlY3RlZCBsb2NhbGUgd291bGQgcGVyY2VpdmUgYXNcbiAqIGF0IGxlYXN0IGFzIGdvb2QgYXMgdGhlIG9uZSByZXR1cm5lZCBieSBCYXNpY0Zvcm1hdE1hdGNoZXIuXG4gKlxuICogVGhpcyBwb2x5ZmlsbCBkZWZpbmVzIHRoZSBhbGdvcml0aG0gdG8gYmUgdGhlIHNhbWUgYXMgQmFzaWNGb3JtYXRNYXRjaGVyLFxuICogd2l0aCB0aGUgYWRkaXRpb24gb2YgYm9udXMgcG9pbnRzIGF3YXJkZWQgd2hlcmUgdGhlIHJlcXVlc3RlZCBmb3JtYXQgaXMgb2ZcbiAqIHRoZSBzYW1lIGRhdGEgdHlwZSBhcyB0aGUgcG90ZW50aWFsbHkgbWF0Y2hpbmcgZm9ybWF0LlxuICpcbiAqIFRoaXMgYWxnbyByZWxpZXMgb24gdGhlIGNvbmNlcHQgb2YgY2xvc2VzdCBkaXN0YW5jZSBtYXRjaGluZyBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI01hdGNoaW5nX1NrZWxldG9uc1xuICogVHlwaWNhbGx5IGEg4oCcYmVzdCBtYXRjaOKAnSBpcyBmb3VuZCB1c2luZyBhIGNsb3Nlc3QgZGlzdGFuY2UgbWF0Y2gsIHN1Y2ggYXM6XG4gKlxuICogU3ltYm9scyByZXF1ZXN0aW5nIGEgYmVzdCBjaG9pY2UgZm9yIHRoZSBsb2NhbGUgYXJlIHJlcGxhY2VkLlxuICogICAgICBqIOKGkiBvbmUgb2Yge0gsIGssIGgsIEt9OyBDIOKGkiBvbmUgb2Yge2EsIGIsIEJ9XG4gKiAtPiBDb3ZlcmVkIGJ5IGNsZHIuanMgbWF0Y2hpbmcgcHJvY2Vzc1xuICpcbiAqIEZvciBmaWVsZHMgd2l0aCBzeW1ib2xzIHJlcHJlc2VudGluZyB0aGUgc2FtZSB0eXBlICh5ZWFyLCBtb250aCwgZGF5LCBldGMpOlxuICogICAgIE1vc3Qgc3ltYm9scyBoYXZlIGEgc21hbGwgZGlzdGFuY2UgZnJvbSBlYWNoIG90aGVyLlxuICogICAgICAgICBNIOKJhSBMOyBFIOKJhSBjOyBhIOKJhSBiIOKJhSBCOyBIIOKJhSBrIOKJhSBoIOKJhSBLOyAuLi5cbiAqICAgICAtPiBDb3ZlcmVkIGJ5IGNsZHIuanMgbWF0Y2hpbmcgcHJvY2Vzc1xuICpcbiAqICAgICBXaWR0aCBkaWZmZXJlbmNlcyBhbW9uZyBmaWVsZHMsIG90aGVyIHRoYW4gdGhvc2UgbWFya2luZyB0ZXh0IHZzIG51bWVyaWMsIGFyZSBnaXZlbiBzbWFsbCBkaXN0YW5jZSBmcm9tIGVhY2ggb3RoZXIuXG4gKiAgICAgICAgIE1NTSDiiYUgTU1NTVxuICogICAgICAgICBNTSDiiYUgTVxuICogICAgIE51bWVyaWMgYW5kIHRleHQgZmllbGRzIGFyZSBnaXZlbiBhIGxhcmdlciBkaXN0YW5jZSBmcm9tIGVhY2ggb3RoZXIuXG4gKiAgICAgICAgIE1NTSDiiYggTU1cbiAqICAgICBTeW1ib2xzIHJlcHJlc2VudGluZyBzdWJzdGFudGlhbCBkaWZmZXJlbmNlcyAod2VlayBvZiB5ZWFyIHZzIHdlZWsgb2YgbW9udGgpIGFyZSBnaXZlbiBtdWNoIGxhcmdlciBhIGRpc3RhbmNlcyBmcm9tIGVhY2ggb3RoZXIuXG4gKiAgICAgICAgIGQg4omLIEQ7IC4uLlxuICogICAgIE1pc3Npbmcgb3IgZXh0cmEgZmllbGRzIGNhdXNlIGEgbWF0Y2ggdG8gZmFpbC4gKEJ1dCBzZWUgTWlzc2luZyBTa2VsZXRvbiBGaWVsZHMpLlxuICpcbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqXG4gKiAgICAgeyBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9XG4gKlxuICogc2hvdWxkIG1hdGNoXG4gKlxuICogICAgIHsgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfVxuICpcbiAqIHJhdGhlciB0aGFuXG4gKlxuICogICAgIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAqXG4gKiBUaGlzIG1ha2VzIHNlbnNlIGJlY2F1c2UgYSB1c2VyIHJlcXVlc3RpbmcgYSBmb3JtYXR0ZWQgZGF0ZSB3aXRoIG51bWVyaWMgcGFydHMgd291bGRcbiAqIG5vdCBleHBlY3QgdG8gc2VlIHRoZSByZXR1cm5lZCBmb3JtYXQgY29udGFpbmluZyBuYXJyb3csIHNob3J0IG9yIGxvbmcgcGFydCBuYW1lc1xuICovXG5mdW5jdGlvbiBCZXN0Rml0Rm9ybWF0TWF0Y2hlcihvcHRpb25zLCBmb3JtYXRzKSB7XG4gICAgLyoqIERpdmVyZ2luZzogdGhpcyBibG9jayBpbXBsZW1lbnRzIHRoZSBoYWNrIGZvciBzaW5nbGUgcHJvcGVydHkgY29uZmlndXJhdGlvbiwgZWcuOlxuICAgICAqXG4gICAgICogICAgICBgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywge2RheTogJ251bWVyaWMnfSlgXG4gICAgICpcbiAgICAgKiBzaG91bGQgcHJvZHVjZSBhIHNpbmdsZSBkaWdpdCB3aXRoIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlXG4gICAgICogQ0xEUiBgYXZhaWxhYmxlRm9ybWF0c2AgZGF0YSBzdHJ1Y3R1cmUgZG9lc24ndCBjb3ZlciB0aGVzZSBjYXNlcy5cbiAgICAgKi9cbiAgICB7XG4gICAgICAgIHZhciBvcHRpb25zUHJvcE5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIHByb3BlcnR5KSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zWydbWycgKyBwcm9wZXJ0eSArICddXSddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zUHJvcE5hbWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zUHJvcE5hbWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIF9iZXN0Rm9ybWF0ID0gZ2VuZXJhdGVTeW50aGV0aWNGb3JtYXQob3B0aW9uc1Byb3BOYW1lc1swXSwgb3B0aW9uc1snW1snICsgb3B0aW9uc1Byb3BOYW1lc1swXSArICddXSddKTtcbiAgICAgICAgICAgIGlmIChfYmVzdEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYmVzdEZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDEuIExldCByZW1vdmFsUGVuYWx0eSBiZSAxMjAuXG4gICAgdmFyIHJlbW92YWxQZW5hbHR5ID0gMTIwO1xuXG4gICAgLy8gMi4gTGV0IGFkZGl0aW9uUGVuYWx0eSBiZSAyMC5cbiAgICB2YXIgYWRkaXRpb25QZW5hbHR5ID0gMjA7XG5cbiAgICAvLyAzLiBMZXQgbG9uZ0xlc3NQZW5hbHR5IGJlIDguXG4gICAgdmFyIGxvbmdMZXNzUGVuYWx0eSA9IDg7XG5cbiAgICAvLyA0LiBMZXQgbG9uZ01vcmVQZW5hbHR5IGJlIDYuXG4gICAgdmFyIGxvbmdNb3JlUGVuYWx0eSA9IDY7XG5cbiAgICAvLyA1LiBMZXQgc2hvcnRMZXNzUGVuYWx0eSBiZSA2LlxuICAgIHZhciBzaG9ydExlc3NQZW5hbHR5ID0gNjtcblxuICAgIC8vIDYuIExldCBzaG9ydE1vcmVQZW5hbHR5IGJlIDMuXG4gICAgdmFyIHNob3J0TW9yZVBlbmFsdHkgPSAzO1xuXG4gICAgdmFyIHBhdHRlcm5QZW5hbHR5ID0gMjtcblxuICAgIHZhciBob3VyMTJQZW5hbHR5ID0gMTtcblxuICAgIC8vIDcuIExldCBiZXN0U2NvcmUgYmUgLUluZmluaXR5LlxuICAgIHZhciBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG5cbiAgICAvLyA4LiBMZXQgYmVzdEZvcm1hdCBiZSB1bmRlZmluZWQuXG4gICAgdmFyIGJlc3RGb3JtYXQgPSB2b2lkIDA7XG5cbiAgICAvLyA5LiBMZXQgaSBiZSAwLlxuICAgIHZhciBpID0gMDtcblxuICAgIC8vIDEwLiBBc3NlcnQ6IGZvcm1hdHMgaXMgYW4gQXJyYXkgb2JqZWN0LlxuXG4gICAgLy8gMTEuIExldCBsZW4gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRzIHdpdGggYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICB2YXIgbGVuID0gZm9ybWF0cy5sZW5ndGg7XG5cbiAgICAvLyAxMi4gUmVwZWF0IHdoaWxlIGkgPCBsZW46XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgLy8gYS4gTGV0IGZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdHMgd2l0aCBhcmd1bWVudCBUb1N0cmluZyhpKS5cbiAgICAgICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbaV07XG5cbiAgICAgICAgLy8gYi4gTGV0IHNjb3JlIGJlIDAuXG4gICAgICAgIHZhciBzY29yZSA9IDA7XG5cbiAgICAgICAgLy8gYy4gRm9yIGVhY2ggcHJvcGVydHkgc2hvd24gaW4gVGFibGUgMzpcbiAgICAgICAgZm9yICh2YXIgX3Byb3BlcnR5IGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIF9wcm9wZXJ0eSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBpLiBMZXQgb3B0aW9uc1Byb3AgYmUgb3B0aW9ucy5bWzxwcm9wZXJ0eT5dXS5cbiAgICAgICAgICAgIHZhciBvcHRpb25zUHJvcCA9IG9wdGlvbnNbJ1tbJyArIF9wcm9wZXJ0eSArICddXSddO1xuXG4gICAgICAgICAgICAvLyBpaS4gTGV0IGZvcm1hdFByb3BEZXNjIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRcbiAgICAgICAgICAgIC8vICAgICB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgICAgICAgICAgLy8gaWlpLiBJZiBmb3JtYXRQcm9wRGVzYyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyAgICAgMS4gTGV0IGZvcm1hdFByb3AgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXQgd2l0aCBhcmd1bWVudCBwcm9wZXJ0eS5cbiAgICAgICAgICAgIHZhciBmb3JtYXRQcm9wID0gaG9wLmNhbGwoZm9ybWF0LCBfcHJvcGVydHkpID8gZm9ybWF0W19wcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIERpdmVyZ2luZzogdXNpbmcgdGhlIGRlZmF1bHQgcHJvcGVydGllcyBwcm9kdWNlZCBieSB0aGUgcGF0dGVybi9za2VsZXRvblxuICAgICAgICAgICAgLy8gdG8gbWF0Y2ggaXQgd2l0aCB1c2VyIG9wdGlvbnMsIGFuZCBhcHBseSBhIHBlbmFsdHlcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuUHJvcCA9IGhvcC5jYWxsKGZvcm1hdC5fLCBfcHJvcGVydHkpID8gZm9ybWF0Ll9bX3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zUHJvcCAhPT0gcGF0dGVyblByb3ApIHtcbiAgICAgICAgICAgICAgICBzY29yZSAtPSBwYXR0ZXJuUGVuYWx0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaXYuIElmIG9wdGlvbnNQcm9wIGlzIHVuZGVmaW5lZCBhbmQgZm9ybWF0UHJvcCBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGRlY3JlYXNlIHNjb3JlIGJ5XG4gICAgICAgICAgICAvLyAgICAgYWRkaXRpb25QZW5hbHR5LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNQcm9wID09PSB1bmRlZmluZWQgJiYgZm9ybWF0UHJvcCAhPT0gdW5kZWZpbmVkKSBzY29yZSAtPSBhZGRpdGlvblBlbmFsdHk7XG5cbiAgICAgICAgICAgIC8vIHYuIEVsc2UgaWYgb3B0aW9uc1Byb3AgaXMgbm90IHVuZGVmaW5lZCBhbmQgZm9ybWF0UHJvcCBpcyB1bmRlZmluZWQsIHRoZW4gZGVjcmVhc2Ugc2NvcmUgYnlcbiAgICAgICAgICAgIC8vICAgIHJlbW92YWxQZW5hbHR5LlxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uc1Byb3AgIT09IHVuZGVmaW5lZCAmJiBmb3JtYXRQcm9wID09PSB1bmRlZmluZWQpIHNjb3JlIC09IHJlbW92YWxQZW5hbHR5O1xuXG4gICAgICAgICAgICAgICAgLy8gdmkuIEVsc2VcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCB2YWx1ZXMgYmUgdGhlIGFycmF5IFtcIjItZGlnaXRcIiwgXCJudW1lcmljXCIsIFwibmFycm93XCIsIFwic2hvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFwibG9uZ1wiXS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbJzItZGlnaXQnLCAnbnVtZXJpYycsICduYXJyb3cnLCAnc2hvcnQnLCAnbG9uZyddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBMZXQgb3B0aW9uc1Byb3BJbmRleCBiZSB0aGUgaW5kZXggb2Ygb3B0aW9uc1Byb3Agd2l0aGluIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zUHJvcEluZGV4ID0gYXJySW5kZXhPZi5jYWxsKHZhbHVlcywgb3B0aW9uc1Byb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBMZXQgZm9ybWF0UHJvcEluZGV4IGJlIHRoZSBpbmRleCBvZiBmb3JtYXRQcm9wIHdpdGhpbiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0UHJvcEluZGV4ID0gYXJySW5kZXhPZi5jYWxsKHZhbHVlcywgZm9ybWF0UHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQuIExldCBkZWx0YSBiZSBtYXgobWluKGZvcm1hdFByb3BJbmRleCAtIG9wdGlvbnNQcm9wSW5kZXgsIDIpLCAtMikuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heChNYXRoLm1pbihmb3JtYXRQcm9wSW5kZXggLSBvcHRpb25zUHJvcEluZGV4LCAyKSwgLTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGl2ZXJnaW5nIGZyb20gc3BlY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGJlc3RGaXQgYXJndW1lbnQgaXMgdHJ1ZSwgc3VidHJhY3QgYWRkaXRpb25hbCBwZW5hbHR5IHdoZXJlIGRhdGEgdHlwZXMgYXJlIG5vdCB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXRQcm9wSW5kZXggPD0gMSAmJiBvcHRpb25zUHJvcEluZGV4ID49IDIgfHwgZm9ybWF0UHJvcEluZGV4ID49IDIgJiYgb3B0aW9uc1Byb3BJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDUuIElmIGRlbHRhID0gMiwgZGVjcmVhc2Ugc2NvcmUgYnkgbG9uZ01vcmVQZW5hbHR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPiAwKSBzY29yZSAtPSBsb25nTW9yZVBlbmFsdHk7ZWxzZSBpZiAoZGVsdGEgPCAwKSBzY29yZSAtPSBsb25nTGVzc1BlbmFsdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4gSWYgZGVsdGEgPSAyLCBkZWNyZWFzZSBzY29yZSBieSBsb25nTW9yZVBlbmFsdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA+IDEpIHNjb3JlIC09IHNob3J0TW9yZVBlbmFsdHk7ZWxzZSBpZiAoZGVsdGEgPCAtMSkgc2NvcmUgLT0gc2hvcnRMZXNzUGVuYWx0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGRpdmVyZ2luZyB0byBhbHNvIHRha2UgaW50byBjb25zaWRlcmF0aW9uIGRpZmZlcmVuY2VzIGJldHdlZW4gMTIgb3IgMjQgaG91cnNcbiAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNwZWNpYWwgZm9yIHRoZSBiZXN0IGZpdCBvbmx5LlxuICAgICAgICAgICAgaWYgKGZvcm1hdC5fLmhvdXIxMiAhPT0gb3B0aW9ucy5ob3VyMTIpIHtcbiAgICAgICAgICAgICAgICBzY29yZSAtPSBob3VyMTJQZW5hbHR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZC4gSWYgc2NvcmUgPiBiZXN0U2NvcmUsIHRoZW5cbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgYmVzdFNjb3JlIGJlIHNjb3JlLlxuICAgICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAvLyBpaS4gTGV0IGJlc3RGb3JtYXQgYmUgZm9ybWF0LlxuICAgICAgICAgICAgYmVzdEZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuIEluY3JlYXNlIGkgYnkgMS5cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIDEzLiBSZXR1cm4gYmVzdEZvcm1hdC5cbiAgICByZXR1cm4gYmVzdEZvcm1hdDtcbn1cblxuLyogMTIuMi4zICovaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0ID0ge1xuICAgICdbW2F2YWlsYWJsZUxvY2FsZXNdXSc6IFtdLFxuICAgICdbW3JlbGV2YW50RXh0ZW5zaW9uS2V5c11dJzogWydjYScsICdudSddLFxuICAgICdbW2xvY2FsZURhdGFdXSc6IHt9XG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIHN1cHBvcnRlZExvY2FsZXNPZiBtZXRob2Qgb2YgSW50bC5EYXRlVGltZUZvcm1hdCBpcyBjYWxsZWQsIHRoZVxuICogZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTIuMi4yICovXG5kZWZpbmVQcm9wZXJ0eShJbnRsLkRhdGVUaW1lRm9ybWF0LCAnc3VwcG9ydGVkTG9jYWxlc09mJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZm5CaW5kLmNhbGwoZnVuY3Rpb24gKGxvY2FsZXMpIHtcbiAgICAgICAgLy8gQm91bmQgZnVuY3Rpb25zIG9ubHkgaGF2ZSB0aGUgYHRoaXNgIHZhbHVlIGFsdGVyZWQgaWYgYmVpbmcgdXNlZCBhcyBhIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyB0aGlzIGxldHMgdXMgaW1pdGF0ZSBhIG5hdGl2ZSBmdW5jdGlvbiB0aGF0IGhhcyBubyBjb25zdHJ1Y3RvclxuICAgICAgICBpZiAoIWhvcC5jYWxsKHRoaXMsICdbW2F2YWlsYWJsZUxvY2FsZXNdXScpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdXBwb3J0ZWRMb2NhbGVzT2YoKSBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2hvc2UgcHJvcHMgY2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgdmFsdWVzIG9mIFJlZ0V4cCBwcm9wc1xuICAgICAgICB2YXIgcmVnZXhwUmVzdG9yZSA9IGNyZWF0ZVJlZ0V4cFJlc3RvcmUoKSxcblxuXG4gICAgICAgIC8vIDEuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXSxcblxuXG4gICAgICAgIC8vIDIuIExldCBhdmFpbGFibGVMb2NhbGVzIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1thdmFpbGFibGVMb2NhbGVzXV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgcHJvcGVydHkgb2YgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIG9iamVjdCB0aGF0IGlzIHRoZSBpbml0aWFsIHZhbHVlIG9mXG4gICAgICAgIC8vICAgIEludGwuTnVtYmVyRm9ybWF0LlxuXG4gICAgICAgIGF2YWlsYWJsZUxvY2FsZXMgPSB0aGlzWydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLFxuXG5cbiAgICAgICAgLy8gMy4gTGV0IHJlcXVlc3RlZExvY2FsZXMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBDYW5vbmljYWxpemVMb2NhbGVMaXN0XG4gICAgICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuMSkgd2l0aCBhcmd1bWVudCBsb2NhbGVzLlxuICAgICAgICByZXF1ZXN0ZWRMb2NhbGVzID0gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBSZWdFeHAgcHJvcGVydGllc1xuICAgICAgICByZWdleHBSZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gNC4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgU3VwcG9ydGVkTG9jYWxlcyBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgLy8gICAgKGRlZmluZWQgaW4gOS4yLjgpIHdpdGggYXJndW1lbnRzIGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsXG4gICAgICAgIC8vICAgIGFuZCBvcHRpb25zLlxuICAgICAgICByZXR1cm4gU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zKTtcbiAgICB9LCBpbnRlcm5hbHMuTnVtYmVyRm9ybWF0KVxufSk7XG5cbi8qKlxuICogVGhpcyBuYW1lZCBhY2Nlc3NvciBwcm9wZXJ0eSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBmb3JtYXRzIGEgbnVtYmVyXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGVmZmVjdGl2ZSBsb2NhbGUgYW5kIHRoZSBmb3JtYXR0aW5nIG9wdGlvbnMgb2YgdGhpc1xuICogRGF0ZVRpbWVGb3JtYXQgb2JqZWN0LlxuICovXG4vKiAxMi4zLjIgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZSwgJ2Zvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBHZXRGb3JtYXREYXRlVGltZVxufSk7XG5cbmZ1bmN0aW9uIEdldEZvcm1hdERhdGVUaW1lKCkge1xuICAgIHZhciBpbnRlcm5hbCA9IHRoaXMgIT09IG51bGwgJiYgYmFiZWxIZWxwZXJzJDFbXCJ0eXBlb2ZcIl0odGhpcykgPT09ICdvYmplY3QnICYmIGdldEludGVybmFsUHJvcGVydGllcyh0aGlzKTtcblxuICAgIC8vIFNhdGlzZnkgdGVzdCAxMi4zX2JcbiAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZERhdGVUaW1lRm9ybWF0XV0nXSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciBmb3JtYXQoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5EYXRlVGltZUZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAvLyBUaGUgdmFsdWUgb2YgdGhlIFtbR2V0XV0gYXR0cmlidXRlIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgZm9sbG93aW5nXG4gICAgLy8gc3RlcHM6XG5cbiAgICAvLyAxLiBJZiB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgRGF0ZVRpbWVGb3JtYXQgb2JqZWN0XG4gICAgLy8gICAgaXMgdW5kZWZpbmVkLCB0aGVuOlxuICAgIGlmIChpbnRlcm5hbFsnW1tib3VuZEZvcm1hdF1dJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBMZXQgRiBiZSBhIEZ1bmN0aW9uIG9iamVjdCwgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIHNldCBhc1xuICAgICAgICAvLyAgICBzcGVjaWZpZWQgZm9yIGJ1aWx0LWluIGZ1bmN0aW9ucyBpbiBFUzUsIDE1LCBvciBzdWNjZXNzb3IsIGFuZCB0aGVcbiAgICAgICAgLy8gICAgbGVuZ3RoIHByb3BlcnR5IHNldCB0byAwLCB0aGF0IHRha2VzIHRoZSBhcmd1bWVudCBkYXRlIGFuZFxuICAgICAgICAvLyAgICBwZXJmb3JtcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICAgICAgLy8gICBpLiBJZiBkYXRlIGlzIG5vdCBwcm92aWRlZCBvciBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IHggYmUgdGhlXG4gICAgICAgICAgICAvLyAgICAgIHJlc3VsdCBhcyBpZiBieSB0aGUgZXhwcmVzc2lvbiBEYXRlLm5vdygpIHdoZXJlIERhdGUubm93IGlzXG4gICAgICAgICAgICAvLyAgICAgIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBmdW5jdGlvbiBkZWZpbmVkIGluIEVTNSwgMTUuOS40LjQuXG4gICAgICAgICAgICAvLyAgaWkuIEVsc2UgbGV0IHggYmUgVG9OdW1iZXIoZGF0ZSkuXG4gICAgICAgICAgICAvLyBpaWkuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdERhdGVUaW1lIGFic3RyYWN0XG4gICAgICAgICAgICAvLyAgICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBhcmd1bWVudHMgdGhpcyBhbmQgeC5cbiAgICAgICAgICAgIHZhciB4ID0gZGF0ZSA9PT0gdW5kZWZpbmVkID8gRGF0ZS5ub3coKSA6IHRvTnVtYmVyKGRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdERhdGVUaW1lKHRoaXMsIHgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBiLiBMZXQgYmluZCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LFxuICAgICAgICAvLyAgICAxNS4zLjQuNS5cbiAgICAgICAgLy8gYy4gTGV0IGJmIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJpbmQgd2l0aCBGIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmdcbiAgICAgICAgLy8gICAgdGhlIHNpbmdsZSBpdGVtIHRoaXMuXG4gICAgICAgIHZhciBiZiA9IGZuQmluZC5jYWxsKEYsIHRoaXMpO1xuICAgICAgICAvLyBkLiBTZXQgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdFxuICAgICAgICAvLyAgICBvYmplY3QgdG8gYmYuXG4gICAgICAgIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9IGJmO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpc1xuICAgIC8vIE51bWJlckZvcm1hdCBvYmplY3QuXG4gICAgcmV0dXJuIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cyQxKCkge1xuICAgIHZhciBkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuXG4gICAgdmFyIGludGVybmFsID0gdGhpcyAhPT0gbnVsbCAmJiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXSh0aGlzKSA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWREYXRlVGltZUZvcm1hdF1dJ10pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBmb3IgZm9ybWF0VG9QYXJ0cygpIGlzIG5vdCBhbiBpbml0aWFsaXplZCBJbnRsLkRhdGVUaW1lRm9ybWF0IG9iamVjdC4nKTtcblxuICAgIHZhciB4ID0gZGF0ZSA9PT0gdW5kZWZpbmVkID8gRGF0ZS5ub3coKSA6IHRvTnVtYmVyKGRhdGUpO1xuICAgIHJldHVybiBGb3JtYXRUb1BhcnRzRGF0ZVRpbWUodGhpcywgeCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZSwgJ2Zvcm1hdFRvUGFydHMnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmb3JtYXRUb1BhcnRzJDFcbn0pO1xuXG5mdW5jdGlvbiBDcmVhdGVEYXRlVGltZVBhcnRzKGRhdGVUaW1lRm9ybWF0LCB4KSB7XG4gICAgLy8gMS4gSWYgeCBpcyBub3QgYSBmaW5pdGUgTnVtYmVyLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgaWYgKCFpc0Zpbml0ZSh4KSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdmFsaWQgZGF0ZSBwYXNzZWQgdG8gZm9ybWF0Jyk7XG5cbiAgICB2YXIgaW50ZXJuYWwgPSBkYXRlVGltZUZvcm1hdC5fX2dldEludGVybmFsUHJvcGVydGllcyhzZWNyZXQpO1xuXG4gICAgLy8gQ3JlYXRpbmcgcmVzdG9yZSBwb2ludCBmb3IgcHJvcGVydGllcyBvbiB0aGUgUmVnRXhwIG9iamVjdC4uLiBwbGVhc2Ugd2FpdFxuICAgIC8qIGxldCByZWdleHBSZXN0b3JlID0gKi9jcmVhdGVSZWdFeHBSZXN0b3JlKCk7IC8vICMjI1RPRE86IHJldmlldyB0aGlzXG5cbiAgICAvLyAyLiBMZXQgbG9jYWxlIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1tsb2NhbGVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdC5cbiAgICB2YXIgbG9jYWxlID0gaW50ZXJuYWxbJ1tbbG9jYWxlXV0nXTtcblxuICAgIC8vIDMuIExldCBuZiBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IE51bWJlckZvcm1hdCBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gZXhwcmVzc2lvbiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW2xvY2FsZV0sIHt1c2VHcm91cGluZzogZmFsc2V9KSB3aGVyZVxuICAgIC8vIEludGwuTnVtYmVyRm9ybWF0IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciBkZWZpbmVkIGluIDExLjEuMy5cbiAgICB2YXIgbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW2xvY2FsZV0sIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG4gICAgLy8gNC4gTGV0IG5mMiBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IE51bWJlckZvcm1hdCBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gZXhwcmVzc2lvbiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW2xvY2FsZV0sIHttaW5pbXVtSW50ZWdlckRpZ2l0czogMiwgdXNlR3JvdXBpbmc6XG4gICAgLy8gZmFsc2V9KSB3aGVyZSBJbnRsLk51bWJlckZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpblxuICAgIC8vIDExLjEuMy5cbiAgICB2YXIgbmYyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFtsb2NhbGVdLCB7IG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLCB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cbiAgICAvLyA1LiBMZXQgdG0gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0xvY2FsVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyBiZWxvdykgd2l0aCB4LCB0aGUgdmFsdWUgb2YgdGhlIFtbY2FsZW5kYXJdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCxcbiAgICAvLyBhbmQgdGhlIHZhbHVlIG9mIHRoZSBbW3RpbWVab25lXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gICAgdmFyIHRtID0gVG9Mb2NhbFRpbWUoeCwgaW50ZXJuYWxbJ1tbY2FsZW5kYXJdXSddLCBpbnRlcm5hbFsnW1t0aW1lWm9uZV1dJ10pO1xuXG4gICAgLy8gNi4gTGV0IHJlc3VsdCBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbcGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0LlxuICAgIHZhciBwYXR0ZXJuID0gaW50ZXJuYWxbJ1tbcGF0dGVybl1dJ107XG5cbiAgICAvLyA3LlxuICAgIHZhciByZXN1bHQgPSBuZXcgTGlzdCgpO1xuXG4gICAgLy8gOC5cbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgLy8gOS5cbiAgICB2YXIgYmVnaW5JbmRleCA9IHBhdHRlcm4uaW5kZXhPZigneycpO1xuXG4gICAgLy8gMTAuXG4gICAgdmFyIGVuZEluZGV4ID0gMDtcblxuICAgIC8vIE5lZWQgdGhlIGxvY2FsZSBtaW51cyBhbnkgZXh0ZW5zaW9uc1xuICAgIHZhciBkYXRhTG9jYWxlID0gaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ107XG5cbiAgICAvLyBOZWVkIHRoZSBjYWxlbmRhciBkYXRhIGZyb20gQ0xEUlxuICAgIHZhciBsb2NhbGVEYXRhID0gaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2xvY2FsZURhdGFdXSddW2RhdGFMb2NhbGVdLmNhbGVuZGFycztcbiAgICB2YXIgY2EgPSBpbnRlcm5hbFsnW1tjYWxlbmRhcl1dJ107XG5cbiAgICAvLyAxMS5cbiAgICB3aGlsZSAoYmVnaW5JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdmFyIGZ2ID0gdm9pZCAwO1xuICAgICAgICAvLyBhLlxuICAgICAgICBlbmRJbmRleCA9IHBhdHRlcm4uaW5kZXhPZignfScsIGJlZ2luSW5kZXgpO1xuICAgICAgICAvLyBiLlxuICAgICAgICBpZiAoZW5kSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHBhdHRlcm4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjLlxuICAgICAgICBpZiAoYmVnaW5JbmRleCA+IGluZGV4KSB7XG4gICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXR0ZXJuLnN1YnN0cmluZyhpbmRleCwgYmVnaW5JbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGQuXG4gICAgICAgIHZhciBwID0gcGF0dGVybi5zdWJzdHJpbmcoYmVnaW5JbmRleCArIDEsIGVuZEluZGV4KTtcbiAgICAgICAgLy8gZS5cbiAgICAgICAgaWYgKGRhdGVUaW1lQ29tcG9uZW50cy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgLy8gICBpLiBMZXQgZiBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbPHA+XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gICAgICAgICAgICB2YXIgZiA9IGludGVybmFsWydbWycgKyBwICsgJ11dJ107XG4gICAgICAgICAgICAvLyAgaWkuIExldCB2IGJlIHRoZSB2YWx1ZSBvZiB0bS5bWzxwPl1dLlxuICAgICAgICAgICAgdmFyIHYgPSB0bVsnW1snICsgcCArICddXSddO1xuICAgICAgICAgICAgLy8gaWlpLiBJZiBwIGlzIFwieWVhclwiIGFuZCB2IOKJpCAwLCB0aGVuIGxldCB2IGJlIDEgLSB2LlxuICAgICAgICAgICAgaWYgKHAgPT09ICd5ZWFyJyAmJiB2IDw9IDApIHtcbiAgICAgICAgICAgICAgICB2ID0gMSAtIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgaXYuIElmIHAgaXMgXCJtb250aFwiLCB0aGVuIGluY3JlYXNlIHYgYnkgMS5cbiAgICAgICAgICAgIGVsc2UgaWYgKHAgPT09ICdtb250aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgIHYuIElmIHAgaXMgXCJob3VyXCIgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgW1tob3VyMTJdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgICAgICAgICAgICAgIC8vICAgICAgZGF0ZVRpbWVGb3JtYXQgaXMgdHJ1ZSwgdGhlblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHAgPT09ICdob3VyJyAmJiBpbnRlcm5hbFsnW1tob3VyMTJdXSddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBMZXQgdiBiZSB2IG1vZHVsbyAxMi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB2ICUgMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBJZiB2IGlzIDAgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgW1tob3VyTm8wXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGRhdGVUaW1lRm9ybWF0IGlzIHRydWUsIHRoZW4gbGV0IHYgYmUgMTIuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gMCAmJiBpbnRlcm5hbFsnW1tob3VyTm8wXV0nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgdmkuIElmIGYgaXMgXCJudW1lcmljXCIsIHRoZW5cbiAgICAgICAgICAgIGlmIChmID09PSAnbnVtZXJpYycpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgZnYgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXROdW1iZXIgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgLy8gICAgKGRlZmluZWQgaW4gMTEuMy4yKSB3aXRoIGFyZ3VtZW50cyBuZiBhbmQgdi5cbiAgICAgICAgICAgICAgICBmdiA9IEZvcm1hdE51bWJlcihuZiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2aWkuIEVsc2UgaWYgZiBpcyBcIjItZGlnaXRcIiwgdGhlblxuICAgICAgICAgICAgZWxzZSBpZiAoZiA9PT0gJzItZGlnaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCBmdiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdE51bWJlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgd2l0aCBhcmd1bWVudHMgbmYyIGFuZCB2LlxuICAgICAgICAgICAgICAgICAgICBmdiA9IEZvcm1hdE51bWJlcihuZjIsIHYpO1xuICAgICAgICAgICAgICAgICAgICAvLyAyLiBJZiB0aGUgbGVuZ3RoIG9mIGZ2IGlzIGdyZWF0ZXIgdGhhbiAyLCBsZXQgZnYgYmUgdGhlIHN1YnN0cmluZyBvZiBmdlxuICAgICAgICAgICAgICAgICAgICAvLyAgICBjb250YWluaW5nIHRoZSBsYXN0IHR3byBjaGFyYWN0ZXJzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZnYubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSBmdi5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdmlpaS4gRWxzZSBpZiBmIGlzIFwibmFycm93XCIsIFwic2hvcnRcIiwgb3IgXCJsb25nXCIsIHRoZW4gbGV0IGZ2IGJlIGEgU3RyaW5nXG4gICAgICAgICAgICAgICAgLy8gICAgIHZhbHVlIHJlcHJlc2VudGluZyBmIGluIHRoZSBkZXNpcmVkIGZvcm07IHRoZSBTdHJpbmcgdmFsdWUgZGVwZW5kcyB1cG9uXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoZSBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIGVmZmVjdGl2ZSBsb2NhbGUgYW5kIGNhbGVuZGFyIG9mXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGVUaW1lRm9ybWF0LiBJZiBwIGlzIFwibW9udGhcIiwgdGhlbiB0aGUgU3RyaW5nIHZhbHVlIG1heSBhbHNvIGRlcGVuZFxuICAgICAgICAgICAgICAgIC8vICAgICBvbiB3aGV0aGVyIGRhdGVUaW1lRm9ybWF0IGhhcyBhIFtbZGF5XV0gaW50ZXJuYWwgcHJvcGVydHkuIElmIHAgaXNcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lWm9uZU5hbWVcIiwgdGhlbiB0aGUgU3RyaW5nIHZhbHVlIG1heSBhbHNvIGRlcGVuZCBvbiB0aGUgdmFsdWUgb2ZcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhlIFtbaW5EU1RdXSBmaWVsZCBvZiB0bS5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmIGluIGRhdGVXaWR0aHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSByZXNvbHZlRGF0ZVN0cmluZyhsb2NhbGVEYXRhLCBjYSwgJ21vbnRocycsIGYsIHRtWydbWycgKyBwICsgJ11dJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWtkYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSByZXNvbHZlRGF0ZVN0cmluZyhsb2NhbGVEYXRhLCBjYSwgJ2RheXMnLCBmLCB0bVsnW1snICsgcCArICddXSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ2ID0gcmVzb2x2ZURhdGVTdHJpbmcoY2EuZGF5cywgZilbdG1bJ1tbJysgcCArJ11dJ11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHdlZWtkYXkgZGF0YSBmb3IgbG9jYWxlICcgKyBsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZVpvbmVOYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSAnJzsgLy8gIyMjVE9ET1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VyYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdiA9IHJlc29sdmVEYXRlU3RyaW5nKGxvY2FsZURhdGEsIGNhLCAnZXJhcycsIGYsIHRtWydbWycgKyBwICsgJ11dJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGVyYSBkYXRhIGZvciBsb2NhbGUgJyArIGxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdiA9IHRtWydbWycgKyBwICsgJ11dJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl4XG4gICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogcCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZi5cbiAgICAgICAgfSBlbHNlIGlmIChwID09PSAnYW1wbScpIHtcbiAgICAgICAgICAgIC8vIGkuXG4gICAgICAgICAgICB2YXIgX3YgPSB0bVsnW1tob3VyXV0nXTtcbiAgICAgICAgICAgIC8vIGlpLi9paWkuXG4gICAgICAgICAgICBmdiA9IHJlc29sdmVEYXRlU3RyaW5nKGxvY2FsZURhdGEsIGNhLCAnZGF5UGVyaW9kcycsIF92ID4gMTEgPyAncG0nIDogJ2FtJywgbnVsbCk7XG4gICAgICAgICAgICAvLyBpdi5cbiAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF5UGVyaW9kJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZy5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhdHRlcm4uc3Vic3RyaW5nKGJlZ2luSW5kZXgsIGVuZEluZGV4ICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGguXG4gICAgICAgIGluZGV4ID0gZW5kSW5kZXggKyAxO1xuICAgICAgICAvLyBpLlxuICAgICAgICBiZWdpbkluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd7JywgaW5kZXgpO1xuICAgIH1cbiAgICAvLyAxMi5cbiAgICBpZiAoZW5kSW5kZXggPCBwYXR0ZXJuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwge1xuICAgICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgdmFsdWU6IHBhdHRlcm4uc3Vic3RyKGVuZEluZGV4ICsgMSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIDEzLlxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB0aGUgRm9ybWF0RGF0ZVRpbWUgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIGFyZ3VtZW50cyBkYXRlVGltZUZvcm1hdFxuICogKHdoaWNoIG11c3QgYmUgYW4gb2JqZWN0IGluaXRpYWxpemVkIGFzIGEgRGF0ZVRpbWVGb3JtYXQpIGFuZCB4ICh3aGljaCBtdXN0IGJlIGEgTnVtYmVyXG4gKiB2YWx1ZSksIGl0IHJldHVybnMgYSBTdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHggKGludGVycHJldGVkIGFzIGEgdGltZSB2YWx1ZSBhc1xuICogc3BlY2lmaWVkIGluIEVTNSwgMTUuOS4xLjEpIGFjY29yZGluZyB0byB0aGUgZWZmZWN0aXZlIGxvY2FsZSBhbmQgdGhlIGZvcm1hdHRpbmdcbiAqIG9wdGlvbnMgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIEZvcm1hdERhdGVUaW1lKGRhdGVUaW1lRm9ybWF0LCB4KSB7XG4gICAgdmFyIHBhcnRzID0gQ3JlYXRlRGF0ZVRpbWVQYXJ0cyhkYXRlVGltZUZvcm1hdCwgeCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IHBhcnRzLmxlbmd0aCA+IGk7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICByZXN1bHQgKz0gcGFydC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gRm9ybWF0VG9QYXJ0c0RhdGVUaW1lKGRhdGVUaW1lRm9ybWF0LCB4KSB7XG4gICAgdmFyIHBhcnRzID0gQ3JlYXRlRGF0ZVRpbWVQYXJ0cyhkYXRlVGltZUZvcm1hdCwgeCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBwYXJ0cy5sZW5ndGggPiBpOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogcGFydC50eXBlLFxuICAgICAgICAgICAgdmFsdWU6IHBhcnQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB0aGUgVG9Mb2NhbFRpbWUgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIGFyZ3VtZW50cyBkYXRlLCBjYWxlbmRhciwgYW5kXG4gKiB0aW1lWm9uZSwgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIFRvTG9jYWxUaW1lKGRhdGUsIGNhbGVuZGFyLCB0aW1lWm9uZSkge1xuICAgIC8vIDEuIEFwcGx5IGNhbGVuZHJpY2FsIGNhbGN1bGF0aW9ucyBvbiBkYXRlIGZvciB0aGUgZ2l2ZW4gY2FsZW5kYXIgYW5kIHRpbWUgem9uZSB0b1xuICAgIC8vICAgIHByb2R1Y2Ugd2Vla2RheSwgZXJhLCB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW5kIGluRFNUIHZhbHVlcy5cbiAgICAvLyAgICBUaGUgY2FsY3VsYXRpb25zIHNob3VsZCB1c2UgYmVzdCBhdmFpbGFibGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNwZWNpZmllZFxuICAgIC8vICAgIGNhbGVuZGFyIGFuZCB0aW1lIHpvbmUuIElmIHRoZSBjYWxlbmRhciBpcyBcImdyZWdvcnlcIiwgdGhlbiB0aGUgY2FsY3VsYXRpb25zIG11c3RcbiAgICAvLyAgICBtYXRjaCB0aGUgYWxnb3JpdGhtcyBzcGVjaWZpZWQgaW4gRVM1LCAxNS45LjEsIGV4Y2VwdCB0aGF0IGNhbGN1bGF0aW9ucyBhcmUgbm90XG4gICAgLy8gICAgYm91bmQgYnkgdGhlIHJlc3RyaWN0aW9ucyBvbiB0aGUgdXNlIG9mIGJlc3QgYXZhaWxhYmxlIGluZm9ybWF0aW9uIG9uIHRpbWUgem9uZXNcbiAgICAvLyAgICBmb3IgbG9jYWwgdGltZSB6b25lIGFkanVzdG1lbnQgYW5kIGRheWxpZ2h0IHNhdmluZyB0aW1lIGFkanVzdG1lbnQgaW1wb3NlZCBieVxuICAgIC8vICAgIEVTNSwgMTUuOS4xLjcgYW5kIDE1LjkuMS44LlxuICAgIC8vICMjI1RPRE8jIyNcbiAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICBtID0gJ2dldCcgKyAodGltZVpvbmUgfHwgJycpO1xuXG4gICAgLy8gMi4gUmV0dXJuIGEgUmVjb3JkIHdpdGggZmllbGRzIFtbd2Vla2RheV1dLCBbW2VyYV1dLCBbW3llYXJdXSwgW1ttb250aF1dLCBbW2RheV1dLFxuICAgIC8vICAgIFtbaG91cl1dLCBbW21pbnV0ZV1dLCBbW3NlY29uZF1dLCBhbmQgW1tpbkRTVF1dLCBlYWNoIHdpdGggdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAvLyAgICBjYWxjdWxhdGVkIHZhbHVlLlxuICAgIHJldHVybiBuZXcgUmVjb3JkKHtcbiAgICAgICAgJ1tbd2Vla2RheV1dJzogZFttICsgJ0RheSddKCksXG4gICAgICAgICdbW2VyYV1dJzogKyhkW20gKyAnRnVsbFllYXInXSgpID49IDApLFxuICAgICAgICAnW1t5ZWFyXV0nOiBkW20gKyAnRnVsbFllYXInXSgpLFxuICAgICAgICAnW1ttb250aF1dJzogZFttICsgJ01vbnRoJ10oKSxcbiAgICAgICAgJ1tbZGF5XV0nOiBkW20gKyAnRGF0ZSddKCksXG4gICAgICAgICdbW2hvdXJdXSc6IGRbbSArICdIb3VycyddKCksXG4gICAgICAgICdbW21pbnV0ZV1dJzogZFttICsgJ01pbnV0ZXMnXSgpLFxuICAgICAgICAnW1tzZWNvbmRdXSc6IGRbbSArICdTZWNvbmRzJ10oKSxcbiAgICAgICAgJ1tbaW5EU1RdXSc6IGZhbHNlIC8vICMjI1RPRE8jIyNcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBhcmUgc2V0IGFzIGlmXG4gKiBjb25zdHJ1Y3RlZCBieSBhbiBvYmplY3QgbGl0ZXJhbCBhc3NpZ25pbmcgdG8gZWFjaCBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgdGhlXG4gKiB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIERhdGVUaW1lRm9ybWF0IG9iamVjdCAoc2VlIDEyLjQpOlxuICogbG9jYWxlLCBjYWxlbmRhciwgbnVtYmVyaW5nU3lzdGVtLCB0aW1lWm9uZSwgaG91cjEyLCB3ZWVrZGF5LCBlcmEsIHllYXIsIG1vbnRoLCBkYXksXG4gKiBob3VyLCBtaW51dGUsIHNlY29uZCwgYW5kIHRpbWVab25lTmFtZS4gUHJvcGVydGllcyB3aG9zZSBjb3JyZXNwb25kaW5nIGludGVybmFsXG4gKiBwcm9wZXJ0aWVzIGFyZSBub3QgcHJlc2VudCBhcmUgbm90IGFzc2lnbmVkLlxuICovXG4vKiAxMi4zLjMgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZSwgJ3Jlc29sdmVkT3B0aW9ucycsIHtcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICB2YXIgcHJvcCA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlc2NzID0gbmV3IFJlY29yZCgpLFxuICAgICAgICAgICAgcHJvcHMgPSBbJ2xvY2FsZScsICdjYWxlbmRhcicsICdudW1iZXJpbmdTeXN0ZW0nLCAndGltZVpvbmUnLCAnaG91cjEyJywgJ3dlZWtkYXknLCAnZXJhJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICd0aW1lWm9uZU5hbWUnXSxcbiAgICAgICAgICAgIGludGVybmFsID0gdGhpcyAhPT0gbnVsbCAmJiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXSh0aGlzKSA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdGlzZnkgdGVzdCAxMi4zX2JcbiAgICAgICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWREYXRlVGltZUZvcm1hdF1dJ10pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBmb3IgcmVzb2x2ZWRPcHRpb25zKCkgaXMgbm90IGFuIGluaXRpYWxpemVkIEludGwuRGF0ZVRpbWVGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSBwcm9wcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcC5jYWxsKGludGVybmFsLCBwcm9wID0gJ1tbJyArIHByb3BzW2ldICsgJ11dJykpIGRlc2NzW3Byb3BzW2ldXSA9IHsgdmFsdWU6IGludGVybmFsW3Byb3BdLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqQ3JlYXRlKHt9LCBkZXNjcyk7XG4gICAgfVxufSk7XG5cbnZhciBscyA9IEludGwuX19sb2NhbGVTZW5zaXRpdmVQcm90b3MgPSB7XG4gICAgTnVtYmVyOiB7fSxcbiAgICBEYXRlOiB7fVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kIG9wdGlvbnMsXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMi4xICovbHMuTnVtYmVyLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNhdGlzZnkgdGVzdCAxMy4yLjFfMVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgIT09ICdbb2JqZWN0IE51bWJlcl0nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgbXVzdCBiZSBhIG51bWJlciBmb3IgTnVtYmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZygpJyk7XG5cbiAgICAvLyAxLiBMZXQgeCBiZSB0aGlzIE51bWJlciB2YWx1ZSAoYXMgZGVmaW5lZCBpbiBFUzUsIDE1LjcuNCkuXG4gICAgLy8gMi4gSWYgbG9jYWxlcyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IGxvY2FsZXMgYmUgdW5kZWZpbmVkLlxuICAgIC8vIDMuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICAvLyA0LiBMZXQgbnVtYmVyRm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgIC8vICAgIGV4cHJlc3Npb24gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5OdW1iZXJGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTEuMS4zLlxuICAgIC8vIDUuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdE51bWJlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAoZGVmaW5lZCBpbiAxMS4zLjIpIHdpdGggYXJndW1lbnRzIG51bWJlckZvcm1hdCBhbmQgeC5cbiAgICByZXR1cm4gRm9ybWF0TnVtYmVyKG5ldyBOdW1iZXJGb3JtYXRDb25zdHJ1Y3Rvcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSksIHRoaXMpO1xufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kIG9wdGlvbnMsXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMy4xICovbHMuRGF0ZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTYXRpc2Z5IHRlc3QgMTMuMy4wXzFcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpICE9PSAnW29iamVjdCBEYXRlXScpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBpbnN0YW5jZSBmb3IgRGF0ZS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcoKScpO1xuXG4gICAgLy8gMS4gTGV0IHggYmUgdGhpcyB0aW1lIHZhbHVlIChhcyBkZWZpbmVkIGluIEVTNSwgMTUuOS41KS5cbiAgICB2YXIgeCA9ICt0aGlzO1xuXG4gICAgLy8gMi4gSWYgeCBpcyBOYU4sIHRoZW4gcmV0dXJuIFwiSW52YWxpZCBEYXRlXCIuXG4gICAgaWYgKGlzTmFOKHgpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgbG9jYWxlcyBiZSB1bmRlZmluZWQuXG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHNbMF07XG5cbiAgICAvLyA0LiBJZiBvcHRpb25zIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgb3B0aW9ucyBiZSB1bmRlZmluZWQuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyA1LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDEyLjEuMSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJhbnlcIiwgYW5kIFwiYWxsXCIuXG4gICAgb3B0aW9ucyA9IFRvRGF0ZVRpbWVPcHRpb25zKG9wdGlvbnMsICdhbnknLCAnYWxsJyk7XG5cbiAgICAvLyA2LiBMZXQgZGF0ZVRpbWVGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gICAgZXhwcmVzc2lvbiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKSB3aGVyZVxuICAgIC8vICAgIEludGwuRGF0ZVRpbWVGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTIuMS4zLlxuICAgIHZhciBkYXRlVGltZUZvcm1hdCA9IG5ldyBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yKGxvY2FsZXMsIG9wdGlvbnMpO1xuXG4gICAgLy8gNy4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0RGF0ZVRpbWUgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkXG4gICAgLy8gICAgaW4gMTIuMy4yKSB3aXRoIGFyZ3VtZW50cyBkYXRlVGltZUZvcm1hdCBhbmQgeC5cbiAgICByZXR1cm4gRm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpO1xufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZURhdGVTdHJpbmcgbWV0aG9kIGlzIGNhbGxlZCB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50cyBsb2NhbGVzIGFuZFxuICogb3B0aW9ucywgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbi8qIDEzLjMuMiAqL2xzLkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNhdGlzZnkgdGVzdCAxMy4zLjBfMVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgIT09ICdbb2JqZWN0IERhdGVdJykgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIG11c3QgYmUgYSBEYXRlIGluc3RhbmNlIGZvciBEYXRlLnByb3RvdHlwZS50b0xvY2FsZURhdGVTdHJpbmcoKScpO1xuXG4gICAgLy8gMS4gTGV0IHggYmUgdGhpcyB0aW1lIHZhbHVlIChhcyBkZWZpbmVkIGluIEVTNSwgMTUuOS41KS5cbiAgICB2YXIgeCA9ICt0aGlzO1xuXG4gICAgLy8gMi4gSWYgeCBpcyBOYU4sIHRoZW4gcmV0dXJuIFwiSW52YWxpZCBEYXRlXCIuXG4gICAgaWYgKGlzTmFOKHgpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgbG9jYWxlcyBiZSB1bmRlZmluZWQuXG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHNbMF0sXG5cblxuICAgIC8vIDQuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gNS4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdFxuICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBpbiAxMi4xLjEpIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwiZGF0ZVwiLCBhbmQgXCJkYXRlXCIuXG4gICAgb3B0aW9ucyA9IFRvRGF0ZVRpbWVPcHRpb25zKG9wdGlvbnMsICdkYXRlJywgJ2RhdGUnKTtcblxuICAgIC8vIDYuIExldCBkYXRlVGltZUZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyAgICBleHByZXNzaW9uIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5EYXRlVGltZUZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMi4xLjMuXG4gICAgdmFyIGRhdGVUaW1lRm9ybWF0ID0gbmV3IERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IobG9jYWxlcywgb3B0aW9ucyk7XG5cbiAgICAvLyA3LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyAgICBpbiAxMi4zLjIpIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0IGFuZCB4LlxuICAgIHJldHVybiBGb3JtYXREYXRlVGltZShkYXRlVGltZUZvcm1hdCwgeCk7XG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIHRvTG9jYWxlVGltZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kXG4gKiBvcHRpb25zLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMy4zICovbHMuRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2F0aXNmeSB0ZXN0IDEzLjMuMF8xXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKSAhPT0gJ1tvYmplY3QgRGF0ZV0nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgbXVzdCBiZSBhIERhdGUgaW5zdGFuY2UgZm9yIERhdGUucHJvdG90eXBlLnRvTG9jYWxlVGltZVN0cmluZygpJyk7XG5cbiAgICAvLyAxLiBMZXQgeCBiZSB0aGlzIHRpbWUgdmFsdWUgKGFzIGRlZmluZWQgaW4gRVM1LCAxNS45LjUpLlxuICAgIHZhciB4ID0gK3RoaXM7XG5cbiAgICAvLyAyLiBJZiB4IGlzIE5hTiwgdGhlbiByZXR1cm4gXCJJbnZhbGlkIERhdGVcIi5cbiAgICBpZiAoaXNOYU4oeCkpIHJldHVybiAnSW52YWxpZCBEYXRlJztcblxuICAgIC8vIDMuIElmIGxvY2FsZXMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBsb2NhbGVzIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50c1swXTtcblxuICAgIC8vIDQuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDUuIExldCBvcHRpb25zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgVG9EYXRlVGltZU9wdGlvbnMgYWJzdHJhY3RcbiAgICAvLyAgICBvcGVyYXRpb24gKGRlZmluZWQgaW4gMTIuMS4xKSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcInRpbWVcIiwgYW5kIFwidGltZVwiLlxuICAgIG9wdGlvbnMgPSBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCAndGltZScsICd0aW1lJyk7XG5cbiAgICAvLyA2LiBMZXQgZGF0ZVRpbWVGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gICAgZXhwcmVzc2lvbiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKSB3aGVyZVxuICAgIC8vICAgIEludGwuRGF0ZVRpbWVGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTIuMS4zLlxuICAgIHZhciBkYXRlVGltZUZvcm1hdCA9IG5ldyBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yKGxvY2FsZXMsIG9wdGlvbnMpO1xuXG4gICAgLy8gNy4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0RGF0ZVRpbWUgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkXG4gICAgLy8gICAgaW4gMTIuMy4yKSB3aXRoIGFyZ3VtZW50cyBkYXRlVGltZUZvcm1hdCBhbmQgeC5cbiAgICByZXR1cm4gRm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpO1xufTtcblxuZGVmaW5lUHJvcGVydHkoSW50bCwgJ19fYXBwbHlMb2NhbGVTZW5zaXRpdmVQcm90b3R5cGVzJywge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsICd0b0xvY2FsZVN0cmluZycsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGxzLk51bWJlci50b0xvY2FsZVN0cmluZyB9KTtcbiAgICAgICAgLy8gTmVlZCB0aGlzIGhlcmUgZm9yIElFIDgsIHRvIGF2b2lkIHRoZSBfRG9udEVudW1fIGJ1Z1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShEYXRlLnByb3RvdHlwZSwgJ3RvTG9jYWxlU3RyaW5nJywgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogbHMuRGF0ZS50b0xvY2FsZVN0cmluZyB9KTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIGxzLkRhdGUpIHtcbiAgICAgICAgICAgIGlmIChob3AuY2FsbChscy5EYXRlLCBrKSkgZGVmaW5lUHJvcGVydHkoRGF0ZS5wcm90b3R5cGUsIGssIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGxzLkRhdGVba10gfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBDYW4ndCByZWFsbHkgc2hpcCBhIHNpbmdsZSBzY3JpcHQgd2l0aCBkYXRhIGZvciBodW5kcmVkcyBvZiBsb2NhbGVzLCBzbyB3ZSBwcm92aWRlXG4gKiB0aGlzIF9fYWRkTG9jYWxlRGF0YSBtZXRob2QgYXMgYSBtZWFucyBmb3IgdGhlIGRldmVsb3BlciB0byBhZGQgdGhlIGRhdGEgb24gYW5cbiAqIGFzLW5lZWRlZCBiYXNpc1xuICovXG5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnX19hZGRMb2NhbGVEYXRhJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShkYXRhKSB7XG4gICAgICAgIGlmICghSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnKGRhdGEubG9jYWxlKSkgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IHBhc3NlZCBkb2Vzbid0IGlkZW50aWZ5IGl0c2VsZiB3aXRoIGEgdmFsaWQgbGFuZ3VhZ2UgdGFnXCIpO1xuXG4gICAgICAgIGFkZExvY2FsZURhdGEoZGF0YSwgZGF0YS5sb2NhbGUpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBhZGRMb2NhbGVEYXRhKGRhdGEsIHRhZykge1xuICAgIC8vIEJvdGggTnVtYmVyRm9ybWF0IGFuZCBEYXRlVGltZUZvcm1hdCByZXF1aXJlIG51bWJlciBkYXRhLCBzbyB0aHJvdyBpZiBpdCBpc24ndCBwcmVzZW50XG4gICAgaWYgKCFkYXRhLm51bWJlcikgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IHBhc3NlZCBkb2Vzbid0IGNvbnRhaW4gbG9jYWxlIGRhdGEgZm9yIEludGwuTnVtYmVyRm9ybWF0XCIpO1xuXG4gICAgdmFyIGxvY2FsZSA9IHZvaWQgMCxcbiAgICAgICAgbG9jYWxlcyA9IFt0YWddLFxuICAgICAgICBwYXJ0cyA9IHRhZy5zcGxpdCgnLScpO1xuXG4gICAgLy8gQ3JlYXRlIGZhbGxiYWNrcyBmb3IgbG9jYWxlIGRhdGEgd2l0aCBzY3JpcHRzLCBlLmcuIExhdG4sIEhhbnMsIFZhaWksIGV0Y1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyICYmIHBhcnRzWzFdLmxlbmd0aCA9PT0gNCkgYXJyUHVzaC5jYWxsKGxvY2FsZXMsIHBhcnRzWzBdICsgJy0nICsgcGFydHNbMl0pO1xuXG4gICAgd2hpbGUgKGxvY2FsZSA9IGFyclNoaWZ0LmNhbGwobG9jYWxlcykpIHtcbiAgICAgICAgLy8gQWRkIHRvIE51bWJlckZvcm1hdCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGFzIHBlciAxMS4yLjNcbiAgICAgICAgYXJyUHVzaC5jYWxsKGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIGxvY2FsZSk7XG4gICAgICAgIGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bbG9jYWxlXSA9IGRhdGEubnVtYmVyO1xuXG4gICAgICAgIC8vIC4uLmFuZCBEYXRlVGltZUZvcm1hdCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGFzIHBlciAxMi4yLjNcbiAgICAgICAgaWYgKGRhdGEuZGF0ZSkge1xuICAgICAgICAgICAgZGF0YS5kYXRlLm51ID0gZGF0YS5udW1iZXIubnU7XG4gICAgICAgICAgICBhcnJQdXNoLmNhbGwoaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLCBsb2NhbGUpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2xvY2FsZURhdGFdXSddW2xvY2FsZV0gPSBkYXRhLmRhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBzZXQgb2YgbG9jYWxlIGRhdGEgYWRkZWQsIG1ha2UgaXQgdGhlIGRlZmF1bHRcbiAgICBpZiAoZGVmYXVsdExvY2FsZSA9PT0gdW5kZWZpbmVkKSBzZXREZWZhdWx0TG9jYWxlKHRhZyk7XG59XG5cbmRlZmluZVByb3BlcnR5KEludGwsICdfX2Rpc2FibGVSZWdFeHBSZXN0b3JlJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2FibGVSZWdFeHBSZXN0b3JlID0gdHJ1ZTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRsOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==