(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 2790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(2791);
var config = __webpack_require__(2792);
var utils = __webpack_require__(2809);

module.exports = {
  api: api,
  config: config,
  utils: utils
};

/***/ }),

/***/ 2791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(440);

var _events2 = _interopRequireDefault(_events);

var _config = __webpack_require__(2792);

var _config2 = _interopRequireDefault(_config);

var _methods = __webpack_require__(2801);

var _methods2 = _interopRequireDefault(_methods);

var _transports = __webpack_require__(2802);

var _transports2 = _interopRequireDefault(_transports);

var _utils = __webpack_require__(2809);

var _http = __webpack_require__(2803);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Promise from 'bluebird';

// import {
//     hash
// } from '../auth/ecc';
// import {
//     ops
// } from '../auth/serializer';


var Steem = function (_EventEmitter) {
    _inherits(Steem, _EventEmitter);

    function Steem() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Steem);

        var _this = _possibleConstructorReturn(this, (Steem.__proto__ || Object.getPrototypeOf(Steem)).call(this, options));

        _this._setTransport(options);
        _this._setLogger(options);
        _this.options = options;
        _this.seqNo = 0; // used for rpc calls
        _methods2.default.forEach(function (method) {
            var methodName = method.method_name || (0, _utils.camelCase)(method.method);
            var methodParams = method.params || [];

            _this[methodName + 'With'] = function (options, callback) {
                return new Promise(function (resolve, reject) {
                    _this.send(method.api, {
                        method: method.method,
                        params: methodParams.map(function (param) {
                            return options[param];
                        })
                    }, function (err, res) {
                        if (err) reject(err);else {
                            resolve(res);
                        }
                    });
                });
            };

            _this[methodName] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var options = methodParams.reduce(function (memo, param, i) {
                    memo[param] = args[i]; // eslint-disable-line no-param-reassign
                    return memo;
                }, {});
                var callback = args[methodParams.length];
                return _this[methodName + 'With'](options, callback);
            };

            //   this[`${methodName}WithAsync`] = Promise.promisify(this[`${methodName}With`]);
            // this[`${methodName}Async`] = Promise.promisify(this[methodName]);
        });
        // this.callAsync = Promise.promisify(this.call);
        return _this;
    }

    _createClass(Steem, [{
        key: '_setTransport',
        value: function _setTransport(options) {
            if (options.url && options.url.match('^((http|https)?:\/\/)')) {
                options.uri = options.url;
                options.transport = 'http';
                this._transportType = options.transport;
                this.options = options;
                this.transport = new _transports2.default.http(options);
            } else if (options.url && options.url.match('^((ws|wss)?:\/\/)')) {
                options.websocket = options.url;
                options.transport = 'ws';
                this._transportType = options.transport;
                this.options = options;
                this.transport = new _transports2.default.ws(options);
            } else if (options.transport) {
                if (this.transport && this._transportType !== options.transport) {
                    this.transport.stop();
                }

                this._transportType = options.transport;

                if (typeof options.transport === 'string') {
                    if (!_transports2.default[options.transport]) {
                        throw new TypeError('Invalid `transport`, valid values are `http`, `ws` or a class');
                    }
                    this.transport = new _transports2.default[options.transport](options);
                } else {
                    this.transport = new options.transport(options);
                }
            } else {
                this.transport = new _transports2.default.ws(options);
            }
        }
    }, {
        key: '_setLogger',
        value: function _setLogger(options) {
            if (options.hasOwnProperty('logger')) {
                switch (_typeof(options.logger)) {
                    case 'function':
                        this.__logger = {
                            log: options.logger
                        };
                        break;
                    case 'object':
                        if (typeof options.logger.log !== 'function') {
                            throw new Error('setOptions({logger:{}}) must have a property .log of type function');
                        }
                        this.__logger = options.logger;
                        break;
                    case 'undefined':
                        if (this.__logger) break;
                    default:
                        this.__logger = false;
                }
            }
        }
    }, {
        key: 'log',
        value: function log(logLevel) {
            if (this.__logger) {
                if (arguments.length > 1 && typeof this.__logger[logLevel] === 'function') {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this.__logger[logLevel].apply(this.__logger, args);
                } else {
                    this.__logger.log.apply(this.__logger, arguments);
                }
            }
        }
    }, {
        key: 'start',
        value: function start() {
            return this.transport.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            return this.transport.stop();
        }
    }, {
        key: 'send',
        value: function send(api, data, callback) {
            var cb = callback;
            if (this.__logger) {
                var id = Math.random();
                var self = this;
                this.log('xmit:' + id + ':', data);
                cb = function cb(e, d) {
                    if (e) {
                        self.log('error', 'rsp:' + id + ':\n\n', e, d);
                    } else {
                        self.log('rsp:' + id + ':', d);
                    }
                    if (callback) {
                        callback.apply(self, arguments);
                    }
                };
            }
            return this.transport.send(api, data, cb);
        }
    }, {
        key: 'call',
        value: function call(method, params, callback) {
            if (this._transportType !== 'http') {
                callback(new Error('RPC methods can only be called when using http transport'));
                return;
            }
            var id = ++this.seqNo;
            (0, _http.jsonRpc)(this.options.uri, { method: method, params: params, id: id }).then(function (res) {
                callback(null, res);
            }, function (err) {
                callback(err);
            });
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            Object.assign(this.options, options);
            this._setLogger(options);
            this._setTransport(options);
            this.transport.setOptions(options);
        }
    }, {
        key: 'setWebSocket',
        value: function setWebSocket(url) {
            this.setOptions({
                websocket: url
            });
        }
    }, {
        key: 'setUri',
        value: function setUri(url) {
            this.setOptions({
                uri: url
            });
        }

        // broadcastTransactionSynchronousWith(options, callback) {
        // const trx = options.trx;
        // return this.send(
        //     'network_broadcast_api', {
        //         method: 'broadcast_transaction_synchronous',
        //         params: [trx],
        //     },
        //     (err, result) => {
        //         if (err) {
        //             const {
        //                 signed_transaction
        //             } = ops;
        //             // console.log('-- broadcastTransactionSynchronous -->', JSON.stringify(signed_transaction.toObject(trx), null, 2));
        //             // toObject converts objects into serializable types
        //             const trObject = signed_transaction.toObject(trx);
        //             const buf = signed_transaction.toBuffer(trx);
        //             err.digest = hash.sha256(buf).toString('hex');
        //             err.transaction_id = buf.toString('hex');
        //             err.transaction = JSON.stringify(trObject);
        //             callback(err, '');
        //         } else {
        //             callback('', result);
        //         }
        //     },
        // );
        //
        // }

    }]);

    return Steem;
}(_events2.default);

// Export singleton instance


var steem = new Steem(_config2.default);
exports = module.exports = steem;
exports.Steem = Steem;

/***/ }),

/***/ 2792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(2793);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = __webpack_require__(2800);

var Config = function () {
  function Config(c) {
    var _this = this;

    _classCallCheck(this, Config);

    (0, _each2.default)(c, function (value, key) {
      _this[key] = value;
    });
  }

  _createClass(Config, [{
    key: 'get',
    value: function get(k) {
      return this[k];
    }
  }, {
    key: 'set',
    value: function set(k, v) {
      this[k] = v;
    }
  }]);

  return Config;
}();

module.exports = new Config(defaultConfig);
if (typeof module.exports.Config !== 'undefined') {
  throw new Error("default config.json file may not contain a property 'Config'");
}
module.exports.Config = Config;

/***/ }),

/***/ 2793:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2794);


/***/ }),

/***/ 2794:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(2795),
    baseEach = __webpack_require__(2796),
    castFunction = __webpack_require__(2799),
    isArray = __webpack_require__(1239);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ 2795:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 2796:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(2797),
    createBaseEach = __webpack_require__(2798);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 2797:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(1426),
    keys = __webpack_require__(1734);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 2798:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(1440);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 2799:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(1458);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 2800:
/***/ (function(module) {

module.exports = {"transport":"http","websocket":"wss://gtg.steem.house:8090","uri":"https://api.steemit.com","url":"","dev_uri":"https://api.steemitdev.com","stage_uri":"https://api.steemitstage.com","address_prefix":"STM","chain_id":"0000000000000000000000000000000000000000000000000000000000000000"};

/***/ }),

/***/ 2801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "api": "database_api",
  "method": "set_subscribe_callback",
  "params": ["callback", "clearFilter"]
}, {
  "api": "database_api",
  "method": "set_pending_transaction_callback",
  "params": ["cb"]
}, {
  "api": "database_api",
  "method": "set_block_applied_callback",
  "params": ["cb"]
}, {
  "api": "database_api",
  "method": "cancel_all_subscriptions"
}, {
  "api": "database_api",
  "method": "get_trending_tags",
  "params": ["afterTag", "limit"]
}, {
  "api": "database_api",
  "method": "get_tags_used_by_author",
  "params": ["author"]
}, {
  "api": "database_api",
  "method": "get_post_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_comment_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_trending",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_trending30",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_created",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_active",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_cashout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_votes",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_children",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_hot",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_feed",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_blog",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_comments",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_promoted",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_block_header",
  "params": ["blockNum"]
}, {
  "api": "database_api",
  "method": "get_block",
  "params": ["blockNum"]
}, {
  "api": "database_api",
  "method": "get_ops_in_block",
  "params": ["blockNum", "onlyVirtual"]
}, {
  "api": "database_api",
  "method": "get_state",
  "params": ["path"]
}, {
  "api": "database_api",
  "method": "get_trending_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_best_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_active_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_recent_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_config"
}, {
  "api": "database_api",
  "method": "get_dynamic_global_properties"
}, {
  "api": "database_api",
  "method": "get_chain_properties"
}, {
  "api": "database_api",
  "method": "get_feed_history"
}, {
  "api": "database_api",
  "method": "get_current_median_history_price"
}, {
  "api": "database_api",
  "method": "get_witness_schedule"
}, {
  "api": "database_api",
  "method": "get_hardfork_version"
}, {
  "api": "database_api",
  "method": "get_next_scheduled_hardfork"
}, {
  "api": "account_by_key_api",
  "method": "get_key_references",
  "params": ["key"]
}, {
  "api": "database_api",
  "method": "get_accounts",
  "params": ["names"]
}, {
  "api": "database_api",
  "method": "get_account_references",
  "params": ["accountId"]
}, {
  "api": "database_api",
  "method": "lookup_account_names",
  "params": ["accountNames"]
}, {
  "api": "database_api",
  "method": "lookup_accounts",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "database_api",
  "method": "get_account_count"
}, {
  "api": "database_api",
  "method": "get_conversion_requests",
  "params": ["accountName"]
}, {
  "api": "database_api",
  "method": "get_account_history",
  "params": ["account", "from", "limit"]
}, {
  "api": "database_api",
  "method": "get_owner_history",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_recovery_request",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_escrow",
  "params": ["from", "escrowId"]
}, {
  "api": "database_api",
  "method": "get_withdraw_routes",
  "params": ["account", "withdrawRouteType"]
}, {
  "api": "database_api",
  "method": "get_account_bandwidth",
  "params": ["account", "bandwidthType"]
}, {
  "api": "database_api",
  "method": "get_savings_withdraw_from",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_savings_withdraw_to",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_order_book",
  "params": ["limit"]
}, {
  "api": "database_api",
  "method": "get_open_orders",
  "params": ["owner"]
}, {
  "api": "database_api",
  "method": "get_liquidity_queue",
  "params": ["startAccount", "limit"]
}, {
  "api": "database_api",
  "method": "get_transaction_hex",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "get_transaction",
  "params": ["trxId"]
}, {
  "api": "database_api",
  "method": "get_required_signatures",
  "params": ["trx", "availableKeys"]
}, {
  "api": "database_api",
  "method": "get_potential_signatures",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "verify_authority",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "verify_account_authority",
  "params": ["nameOrId", "signers"]
}, {
  "api": "database_api",
  "method": "get_active_votes",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_account_votes",
  "params": ["voter"]
}, {
  "api": "database_api",
  "method": "get_content",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_content_replies",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_author_before_date",
  "params": ["author", "startPermlink", "beforeDate", "limit"]
}, {
  "api": "database_api",
  "method": "get_replies_by_last_update",
  "params": ["startAuthor", "startPermlink", "limit"]
}, {
  "api": "database_api",
  "method": "get_witnesses",
  "params": ["witnessIds"]
}, {
  "api": "database_api",
  "method": "get_witness_by_account",
  "params": ["accountName"]
}, {
  "api": "database_api",
  "method": "get_witnesses_by_vote",
  "params": ["from", "limit"]
}, {
  "api": "database_api",
  "method": "lookup_witness_accounts",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "database_api",
  "method": "get_witness_count"
}, {
  "api": "database_api",
  "method": "get_active_witnesses"
}, {
  "api": "database_api",
  "method": "get_miner_queue"
}, {
  "api": "database_api",
  "method": "get_reward_fund",
  "params": ["name"]
}, {
  "api": "database_api",
  "method": "get_vesting_delegations",
  "params": ["account", "from", "limit"]
}, {
  "api": "login_api",
  "method": "login",
  "params": ["username", "password"]
}, {
  "api": "login_api",
  "method": "get_api_by_name",
  "params": ["database_api"]
}, {
  "api": "login_api",
  "method": "get_version"
}, {
  "api": "follow_api",
  "method": "get_followers",
  "params": ["following", "startFollower", "followType", "limit"]
}, {
  "api": "follow_api",
  "method": "get_following",
  "params": ["follower", "startFollowing", "followType", "limit"]
}, {
  "api": "follow_api",
  "method": "get_follow_count",
  "params": ["account"]
}, {
  "api": "follow_api",
  "method": "get_feed_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_feed",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_blog_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_blog",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_account_reputations",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "follow_api",
  "method": "get_reblogged_by",
  "params": ["author", "permlink"]
}, {
  "api": "follow_api",
  "method": "get_blog_authors",
  "params": ["blogAccount"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction",
  "params": ["trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction_with_callback",
  "params": ["confirmationCallback", "trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction_synchronous",
  "params": ["trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_block",
  "params": ["b"]
}, {
  "api": "network_broadcast_api",
  "method": "set_max_block_age",
  "params": ["maxBlockAge"]
}, {
  "api": "market_history_api",
  "method": "get_ticker",
  "params": []
}, {
  "api": "market_history_api",
  "method": "get_volume",
  "params": []
}, {
  "api": "market_history_api",
  "method": "get_order_book",
  "method_name": "getMarketOrderBook",
  "params": ["limit"]
}, {
  "api": "market_history_api",
  "method": "get_trade_history",
  "params": ["start", "end", "limit"]
}, {
  "api": "market_history_api",
  "method": "get_recent_trades",
  "params": ["limit"]
}, {
  "api": "market_history_api",
  "method": "get_market_history",
  "params": ["bucket_seconds", "start", "end"]
}, {
  "api": "market_history_api",
  "method": "get_market_history_buckets",
  "params": []
}];

/***/ }),

/***/ 2802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(2803);

var _http2 = _interopRequireDefault(_http);

var _ws = __webpack_require__(2806);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  http: _http2.default,
  ws: _ws2.default
};

/***/ }),

/***/ 2803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.jsonRpc = jsonRpc;

var _crossFetch = __webpack_require__(2804);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _debug = __webpack_require__(2000);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2805);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _debug2.default)('steem:http');

var RPCError = function (_Error) {
  _inherits(RPCError, _Error);

  function RPCError(rpcError) {
    _classCallCheck(this, RPCError);

    var _this = _possibleConstructorReturn(this, (RPCError.__proto__ || Object.getPrototypeOf(RPCError)).call(this, rpcError.message));

    _this.name = 'RPCError';
    _this.code = rpcError.code;
    _this.data = rpcError.data;
    return _this;
  }

  return RPCError;
}(Error);

function jsonRpc(uri, _ref) {
  var method = _ref.method,
      id = _ref.id,
      params = _ref.params;

  var payload = { id: id, jsonrpc: '2.0', method: method, params: params };
  return (0, _crossFetch2.default)(uri, {
    body: JSON.stringify(payload),
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    if (!res.ok) {
      throw new Error('HTTP ' + res.status + ': ' + res.statusText);
    }
    return res.json();
  }).then(function (rpcRes) {
    if (rpcRes.id !== id) {
      throw new Error('Invalid response id: ' + rpcRes.id);
    }
    if (rpcRes.error) {
      throw new RPCError(rpcRes.error);
    }
    return rpcRes.result;
  });
}

var HttpTransport = function (_Transport) {
  _inherits(HttpTransport, _Transport);

  function HttpTransport() {
    _classCallCheck(this, HttpTransport);

    return _possibleConstructorReturn(this, (HttpTransport.__proto__ || Object.getPrototypeOf(HttpTransport)).apply(this, arguments));
  }

  _createClass(HttpTransport, [{
    key: 'send',
    value: function send(api, data, callback) {
      if (this.options.useAppbaseApi) {
        api = 'condenser_api';
      }
      debug('Steem::send', api, data);
      var id = data.id || this.id++;
      var params = [api, data.method, data.params];
      jsonRpc(this.options.uri, { method: 'call', id: id, params: params }).then(function (res) {
        callback(null, res);
      }, function (err) {
        callback(err);
      });
    }
  }]);

  return HttpTransport;
}(_base2.default);

exports.default = HttpTransport;

/***/ }),

/***/ 2804:
/***/ (function(module, exports) {

var self = {};
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/*
 * Rollup wraps up the whatwg-fetch code on ponyfill mode in
 * order to prevent it from adding fetch to the global object.
 */

      var fetch = self.fetch;

      fetch.fetch = fetch;
      fetch.Response = self.Response;
      fetch.Headers = self.Headers;
      fetch.Request = self.Request;

      // fetch now can be imported as the default object
      module.exports = fetch;
    


/***/ }),

/***/ 2805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(440);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transport = function (_EventEmitter) {
  _inherits(Transport, _EventEmitter);

  function Transport() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Transport);

    var _this = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, options));

    _this.options = options;
    _this.id = 0;
    return _this;
  }

  _createClass(Transport, [{
    key: 'setOptions',
    value: function setOptions(options) {
      Object.assign(this.options, options);
      this.stop();
    }
  }, {
    key: 'listenTo',
    value: function listenTo(target, eventName, callback) {
      if (target.addEventListener) target.addEventListener(eventName, callback);else target.on(eventName, callback);

      return function () {
        if (target.removeEventListener) target.removeEventListener(eventName, callback);else target.removeListener(eventName, callback);
      };
    }
  }, {
    key: 'send',
    value: function send() {}
  }, {
    key: 'start',
    value: function start() {}
  }, {
    key: 'stop',
    value: function stop() {}
  }]);

  return Transport;
}(_events2.default);

exports.default = Transport;

/***/ }),

/***/ 2806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detectNode = __webpack_require__(2807);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _debug = __webpack_require__(2000);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2805);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebSocket = void 0;
if (_detectNode2.default) {
  WebSocket = __webpack_require__(2808); // eslint-disable-line global-require
} else if (typeof window !== 'undefined') {
  WebSocket = window.WebSocket;
} else {
  throw new Error("Couldn't decide on a `WebSocket` class");
}

var debug = (0, _debug2.default)('steem:ws');

var WsTransport = function (_Transport) {
  _inherits(WsTransport, _Transport);

  function WsTransport() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsTransport);

    var _this = _possibleConstructorReturn(this, (WsTransport.__proto__ || Object.getPrototypeOf(WsTransport)).call(this, Object.assign({ id: 0 }, options)));

    _this._requests = new Map();
    _this.inFlight = 0;
    _this.isOpen = false;
    return _this;
  }

  _createClass(WsTransport, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      if (this.startPromise) {
        return this.startPromise;
      }

      this.startPromise = new Promise(function (resolve, reject) {
        _this2.ws = new WebSocket(_this2.options.websocket);
        _this2.ws.onerror = function (err) {
          _this2.startPromise = null;
          reject(err);
        };
        _this2.ws.onopen = function () {
          _this2.isOpen = true;
          _this2.ws.onerror = _this2.onError.bind(_this2);
          _this2.ws.onmessage = _this2.onMessage.bind(_this2);
          _this2.ws.onclose = _this2.onClose.bind(_this2);
          resolve();
        };
      });
      return this.startPromise;
    }
  }, {
    key: 'stop',
    value: function stop() {
      debug('Stopping...');

      this.startPromise = null;
      this.isOpen = false;
      this._requests.clear();

      if (this.ws) {
        this.ws.onerror = this.ws.onmessage = this.ws.onclose = null;
        this.ws.close();
        this.ws = null;
      }
    }
  }, {
    key: 'send',
    value: function send(api, data, callback) {
      var _this3 = this;

      debug('Steem::send', api, data);
      return this.start().then(function () {
        var deferral = {};
        new Promise(function (resolve, reject) {
          deferral.resolve = function (val) {
            resolve(val);
            callback(null, val);
          };
          deferral.reject = function (val) {
            reject(val);
            callback(val);
          };
        });

        if (_this3.options.useAppbaseApi) {
          api = 'condenser_api';
        }

        var _request = {
          deferral: deferral,
          startedAt: Date.now(),
          message: {
            id: data.id || _this3.id++,
            method: 'call',
            jsonrpc: '2.0',
            params: [api, data.method, data.params]
          }
        };
        _this3.inFlight++;
        _this3._requests.set(_request.message.id, _request);
        _this3.ws.send(JSON.stringify(_request.message));
        return deferral;
      });
    }
  }, {
    key: 'onError',
    value: function onError(error) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._requests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _request = _step.value;

          _request.deferral.reject(error);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.stop();
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      var error = new Error('Connection was closed');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._requests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _request = _step2.value;

          _request.deferral.reject(error);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._requests.clear();
    }
  }, {
    key: 'onMessage',
    value: function onMessage(websocketMessage) {
      var message = JSON.parse(websocketMessage.data);
      debug('-- Steem.onMessage -->', message.id);
      if (!this._requests.has(message.id)) {
        throw new Error('Panic: no request in queue for message id ' + message.id);
      }
      var _request = this._requests.get(message.id);
      this._requests.delete(message.id);

      var errorCause = message.error;
      if (errorCause) {
        var err = new Error(
        // eslint-disable-next-line prefer-template
        (errorCause.message || 'Failed to complete operation') + ' (see err.payload for the full error payload)');
        err.payload = message;
        _request.deferral.reject(err);
      } else {
        this.emit('track-performance', _request.message.method, Date.now() - _request.startedAt);
        _request.deferral.resolve(message.result);
      }
    }
  }]);

  return WsTransport;
}(_base2.default);

exports.default = WsTransport;

/***/ }),

/***/ 2807:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),

/***/ 2809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCase = camelCase;
var snakeCaseRe = /_([a-z])/g;
function camelCase(str) {
  return str.replace(snakeCaseRe, function (_m, l) {
    return l.toUpperCase();
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35uZXdzLmUyZGYwMmRmMDAyYjAyMjA5NDE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGVlbS1qcy1hcGkvbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9mb3JFYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VFYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy9odHRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvYXBpL3RyYW5zcG9ydHMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy93cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGV0ZWN0LW5vZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi9hcGknKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpOiBhcGksXG4gIGNvbmZpZzogY29uZmlnLFxuICB1dGlsczogdXRpbHNcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbnZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cbnZhciBfbWV0aG9kcyA9IHJlcXVpcmUoJy4vbWV0aG9kcycpO1xuXG52YXIgX21ldGhvZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWV0aG9kcyk7XG5cbnZhciBfdHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cycpO1xuXG52YXIgX3RyYW5zcG9ydHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNwb3J0cyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX2h0dHAgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaHR0cCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG4vLyBpbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5cbi8vIGltcG9ydCB7XG4vLyAgICAgaGFzaFxuLy8gfSBmcm9tICcuLi9hdXRoL2VjYyc7XG4vLyBpbXBvcnQge1xuLy8gICAgIG9wc1xuLy8gfSBmcm9tICcuLi9hdXRoL3NlcmlhbGl6ZXInO1xuXG5cbnZhciBTdGVlbSA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gICAgX2luaGVyaXRzKFN0ZWVtLCBfRXZlbnRFbWl0dGVyKTtcblxuICAgIGZ1bmN0aW9uIFN0ZWVtKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0ZWVtKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RlZW0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGVlbSkpLmNhbGwodGhpcywgb3B0aW9ucykpO1xuXG4gICAgICAgIF90aGlzLl9zZXRUcmFuc3BvcnQob3B0aW9ucyk7XG4gICAgICAgIF90aGlzLl9zZXRMb2dnZXIob3B0aW9ucyk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5zZXFObyA9IDA7IC8vIHVzZWQgZm9yIHJwYyBjYWxsc1xuICAgICAgICBfbWV0aG9kczIuZGVmYXVsdC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbWV0aG9kLm1ldGhvZF9uYW1lIHx8ICgwLCBfdXRpbHMuY2FtZWxDYXNlKShtZXRob2QubWV0aG9kKTtcbiAgICAgICAgICAgIHZhciBtZXRob2RQYXJhbXMgPSBtZXRob2QucGFyYW1zIHx8IFtdO1xuXG4gICAgICAgICAgICBfdGhpc1ttZXRob2ROYW1lICsgJ1dpdGgnXSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlbmQobWV0aG9kLmFwaSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBtZXRob2RQYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zW3BhcmFtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF90aGlzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBtZXRob2RQYXJhbXMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBwYXJhbSwgaSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1vW3BhcmFtXSA9IGFyZ3NbaV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3NbbWV0aG9kUGFyYW1zLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzW21ldGhvZE5hbWUgKyAnV2l0aCddKG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vICAgdGhpc1tgJHttZXRob2ROYW1lfVdpdGhBc3luY2BdID0gUHJvbWlzZS5wcm9taXNpZnkodGhpc1tgJHttZXRob2ROYW1lfVdpdGhgXSk7XG4gICAgICAgICAgICAvLyB0aGlzW2Ake21ldGhvZE5hbWV9QXN5bmNgXSA9IFByb21pc2UucHJvbWlzaWZ5KHRoaXNbbWV0aG9kTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5jYWxsQXN5bmMgPSBQcm9taXNlLnByb21pc2lmeSh0aGlzLmNhbGwpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN0ZWVtLCBbe1xuICAgICAgICBrZXk6ICdfc2V0VHJhbnNwb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRUcmFuc3BvcnQob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXJsICYmIG9wdGlvbnMudXJsLm1hdGNoKCdeKChodHRwfGh0dHBzKT86XFwvXFwvKScpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmkgPSBvcHRpb25zLnVybDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRyYW5zcG9ydCA9ICdodHRwJztcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRUeXBlID0gb3B0aW9ucy50cmFuc3BvcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBfdHJhbnNwb3J0czIuZGVmYXVsdC5odHRwKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnVybCAmJiBvcHRpb25zLnVybC5tYXRjaCgnXigod3N8d3NzKT86XFwvXFwvKScpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy53ZWJzb2NrZXQgPSBvcHRpb25zLnVybDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRyYW5zcG9ydCA9ICd3cyc7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwb3J0VHlwZSA9IG9wdGlvbnMudHJhbnNwb3J0O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgX3RyYW5zcG9ydHMyLmRlZmF1bHQud3Mob3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0ICYmIHRoaXMuX3RyYW5zcG9ydFR5cGUgIT09IG9wdGlvbnMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRUeXBlID0gb3B0aW9ucy50cmFuc3BvcnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNwb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90cmFuc3BvcnRzMi5kZWZhdWx0W29wdGlvbnMudHJhbnNwb3J0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBgdHJhbnNwb3J0YCwgdmFsaWQgdmFsdWVzIGFyZSBgaHR0cGAsIGB3c2Agb3IgYSBjbGFzcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IF90cmFuc3BvcnRzMi5kZWZhdWx0W29wdGlvbnMudHJhbnNwb3J0XShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBvcHRpb25zLnRyYW5zcG9ydChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IF90cmFuc3BvcnRzMi5kZWZhdWx0LndzKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2V0TG9nZ2VyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRMb2dnZXIob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2xvZ2dlcicpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfdHlwZW9mKG9wdGlvbnMubG9nZ2VyKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fbG9nZ2VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogb3B0aW9ucy5sb2dnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2dnZXIubG9nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRPcHRpb25zKHtsb2dnZXI6e319KSBtdXN0IGhhdmUgYSBwcm9wZXJ0eSAubG9nIG9mIHR5cGUgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19sb2dnZXIgPSBvcHRpb25zLmxvZ2dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19sb2dnZXIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2xvZ2dlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvZyhsb2dMZXZlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX19sb2dnZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIHRoaXMuX19sb2dnZXJbbG9nTGV2ZWxdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2xvZ2dlcltsb2dMZXZlbF0uYXBwbHkodGhpcy5fX2xvZ2dlciwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2xvZ2dlci5sb2cuYXBwbHkodGhpcy5fX2xvZ2dlciwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChhcGksIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY2IgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbG9nZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coJ3htaXQ6JyArIGlkICsgJzonLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjYiA9IGZ1bmN0aW9uIGNiKGUsIGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9nKCdlcnJvcicsICdyc3A6JyArIGlkICsgJzpcXG5cXG4nLCBlLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9nKCdyc3A6JyArIGlkICsgJzonLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoYXBpLCBkYXRhLCBjYik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbChtZXRob2QsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90cmFuc3BvcnRUeXBlICE9PSAnaHR0cCcpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1JQQyBtZXRob2RzIGNhbiBvbmx5IGJlIGNhbGxlZCB3aGVuIHVzaW5nIGh0dHAgdHJhbnNwb3J0JykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9ICsrdGhpcy5zZXFObztcbiAgICAgICAgICAgICgwLCBfaHR0cC5qc29uUnBjKSh0aGlzLm9wdGlvbnMudXJpLCB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbXM6IHBhcmFtcywgaWQ6IGlkIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0TG9nZ2VyKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0VHJhbnNwb3J0KG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0V2ViU29ja2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFdlYlNvY2tldCh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgd2Vic29ja2V0OiB1cmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRVcmknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VXJpKHVybCkge1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICB1cmk6IHVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBicm9hZGNhc3RUcmFuc2FjdGlvblN5bmNocm9ub3VzV2l0aChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBjb25zdCB0cnggPSBvcHRpb25zLnRyeDtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2VuZChcbiAgICAgICAgLy8gICAgICduZXR3b3JrX2Jyb2FkY2FzdF9hcGknLCB7XG4gICAgICAgIC8vICAgICAgICAgbWV0aG9kOiAnYnJvYWRjYXN0X3RyYW5zYWN0aW9uX3N5bmNocm9ub3VzJyxcbiAgICAgICAgLy8gICAgICAgICBwYXJhbXM6IFt0cnhdLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2lnbmVkX3RyYW5zYWN0aW9uXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gPSBvcHM7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCctLSBicm9hZGNhc3RUcmFuc2FjdGlvblN5bmNocm9ub3VzIC0tPicsIEpTT04uc3RyaW5naWZ5KHNpZ25lZF90cmFuc2FjdGlvbi50b09iamVjdCh0cngpLCBudWxsLCAyKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRvT2JqZWN0IGNvbnZlcnRzIG9iamVjdHMgaW50byBzZXJpYWxpemFibGUgdHlwZXNcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdHJPYmplY3QgPSBzaWduZWRfdHJhbnNhY3Rpb24udG9PYmplY3QodHJ4KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgYnVmID0gc2lnbmVkX3RyYW5zYWN0aW9uLnRvQnVmZmVyKHRyeCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVyci5kaWdlc3QgPSBoYXNoLnNoYTI1NihidWYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZXJyLnRyYW5zYWN0aW9uX2lkID0gYnVmLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZXJyLnRyYW5zYWN0aW9uID0gSlNPTi5zdHJpbmdpZnkodHJPYmplY3QpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjayhlcnIsICcnKTtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjaygnJywgcmVzdWx0KTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyApO1xuICAgICAgICAvL1xuICAgICAgICAvLyB9XG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RlZW07XG59KF9ldmVudHMyLmRlZmF1bHQpO1xuXG4vLyBFeHBvcnQgc2luZ2xldG9uIGluc3RhbmNlXG5cblxudmFyIHN0ZWVtID0gbmV3IFN0ZWVtKF9jb25maWcyLmRlZmF1bHQpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3RlZW07XG5leHBvcnRzLlN0ZWVtID0gU3RlZW07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2VhY2ggPSByZXF1aXJlKCdsb2Rhc2gvZWFjaCcpO1xuXG52YXIgX2VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWFjaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBkZWZhdWx0Q29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzb24nKTtcblxudmFyIENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29uZmlnKGMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmZpZyk7XG5cbiAgICAoMCwgX2VhY2gyLmRlZmF1bHQpKGMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBfdGhpc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29uZmlnLCBbe1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrKSB7XG4gICAgICByZXR1cm4gdGhpc1trXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoaywgdikge1xuICAgICAgdGhpc1trXSA9IHY7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZpZztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQ29uZmlnKGRlZmF1bHRDb25maWcpO1xuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cy5Db25maWcgIT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImRlZmF1bHQgY29uZmlnLmpzb24gZmlsZSBtYXkgbm90IGNvbnRhaW4gYSBwcm9wZXJ0eSAnQ29uZmlnJ1wiKTtcbn1cbm1vZHVsZS5leHBvcnRzLkNvbmZpZyA9IENvbmZpZzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZm9yRWFjaCcpO1xuIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBjYXN0RnVuY3Rpb24gPSByZXF1aXJlKCcuL19jYXN0RnVuY3Rpb24nKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBlbGVtZW50LlxuICogVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiAqKk5vdGU6KiogQXMgd2l0aCBvdGhlciBcIkNvbGxlY3Rpb25zXCIgbWV0aG9kcywgb2JqZWN0cyB3aXRoIGEgXCJsZW5ndGhcIlxuICogcHJvcGVydHkgYXJlIGl0ZXJhdGVkIGxpa2UgYXJyYXlzLiBUbyBhdm9pZCB0aGlzIGJlaGF2aW9yIHVzZSBgXy5mb3JJbmBcbiAqIG9yIGBfLmZvck93bmAgZm9yIG9iamVjdCBpdGVyYXRpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGFsaWFzIGVhY2hcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICogQHNlZSBfLmZvckVhY2hSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZvckVhY2goWzEsIDJdLCBmdW5jdGlvbih2YWx1ZSkge1xuICogICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgYDFgIHRoZW4gYDJgLlxuICpcbiAqIF8uZm9yRWFjaCh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAqICAgY29uc29sZS5sb2coa2V5KTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyAnYScgdGhlbiAnYicgKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCkuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlFYWNoIDogYmFzZUVhY2g7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGNhc3RGdW5jdGlvbihpdGVyYXRlZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBiYXNlRWFjaGAgb3IgYGJhc2VFYWNoUmlnaHRgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUVhY2goZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVbaW5kZXhdLCBpbmRleCwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUVhY2g7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBgaWRlbnRpdHlgIGlmIGl0J3Mgbm90IGEgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgY2FzdCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FzdEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogaWRlbnRpdHk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEZ1bmN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBbe1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcInNldF9zdWJzY3JpYmVfY2FsbGJhY2tcIixcbiAgXCJwYXJhbXNcIjogW1wiY2FsbGJhY2tcIiwgXCJjbGVhckZpbHRlclwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcInNldF9wZW5kaW5nX3RyYW5zYWN0aW9uX2NhbGxiYWNrXCIsXG4gIFwicGFyYW1zXCI6IFtcImNiXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwic2V0X2Jsb2NrX2FwcGxpZWRfY2FsbGJhY2tcIixcbiAgXCJwYXJhbXNcIjogW1wiY2JcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJjYW5jZWxfYWxsX3N1YnNjcmlwdGlvbnNcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF90cmVuZGluZ190YWdzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFmdGVyVGFnXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdGFnc191c2VkX2J5X2F1dGhvclwiLFxuICBcInBhcmFtc1wiOiBbXCJhdXRob3JcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfcG9zdF9kaXNjdXNzaW9uc19ieV9wYXlvdXRcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfY29tbWVudF9kaXNjdXNzaW9uc19ieV9wYXlvdXRcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfdHJlbmRpbmdcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfdHJlbmRpbmczMFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9jcmVhdGVkXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2FjdGl2ZVwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9jYXNob3V0XCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X3BheW91dFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV92b3Rlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9jaGlsZHJlblwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9ob3RcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfZmVlZFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9ibG9nXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2NvbW1lbnRzXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X3Byb21vdGVkXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Jsb2NrX2hlYWRlclwiLFxuICBcInBhcmFtc1wiOiBbXCJibG9ja051bVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9ibG9ja1wiLFxuICBcInBhcmFtc1wiOiBbXCJibG9ja051bVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9vcHNfaW5fYmxvY2tcIixcbiAgXCJwYXJhbXNcIjogW1wiYmxvY2tOdW1cIiwgXCJvbmx5VmlydHVhbFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9zdGF0ZVwiLFxuICBcInBhcmFtc1wiOiBbXCJwYXRoXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3RyZW5kaW5nX2NhdGVnb3JpZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWZ0ZXJcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9iZXN0X2NhdGVnb3JpZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWZ0ZXJcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY3RpdmVfY2F0ZWdvcmllc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhZnRlclwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3JlY2VudF9jYXRlZ29yaWVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFmdGVyXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfY29uZmlnXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZHluYW1pY19nbG9iYWxfcHJvcGVydGllc1wiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2NoYWluX3Byb3BlcnRpZXNcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9mZWVkX2hpc3RvcnlcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9jdXJyZW50X21lZGlhbl9oaXN0b3J5X3ByaWNlXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfd2l0bmVzc19zY2hlZHVsZVwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2hhcmRmb3JrX3ZlcnNpb25cIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9uZXh0X3NjaGVkdWxlZF9oYXJkZm9ya1wiXG59LCB7XG4gIFwiYXBpXCI6IFwiYWNjb3VudF9ieV9rZXlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2tleV9yZWZlcmVuY2VzXCIsXG4gIFwicGFyYW1zXCI6IFtcImtleVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50c1wiLFxuICBcInBhcmFtc1wiOiBbXCJuYW1lc1wiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X3JlZmVyZW5jZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudElkXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwibG9va3VwX2FjY291bnRfbmFtZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudE5hbWVzXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwibG9va3VwX2FjY291bnRzXCIsXG4gIFwicGFyYW1zXCI6IFtcImxvd2VyQm91bmROYW1lXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYWNjb3VudF9jb3VudFwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2NvbnZlcnNpb25fcmVxdWVzdHNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudE5hbWVcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYWNjb3VudF9oaXN0b3J5XCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIiwgXCJmcm9tXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfb3duZXJfaGlzdG9yeVwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3JlY292ZXJ5X3JlcXVlc3RcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9lc2Nyb3dcIixcbiAgXCJwYXJhbXNcIjogW1wiZnJvbVwiLCBcImVzY3Jvd0lkXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3dpdGhkcmF3X3JvdXRlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCIsIFwid2l0aGRyYXdSb3V0ZVR5cGVcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYWNjb3VudF9iYW5kd2lkdGhcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImJhbmR3aWR0aFR5cGVcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfc2F2aW5nc193aXRoZHJhd19mcm9tXCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfc2F2aW5nc193aXRoZHJhd190b1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X29yZGVyX2Jvb2tcIixcbiAgXCJwYXJhbXNcIjogW1wibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfb3Blbl9vcmRlcnNcIixcbiAgXCJwYXJhbXNcIjogW1wib3duZXJcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfbGlxdWlkaXR5X3F1ZXVlXCIsXG4gIFwicGFyYW1zXCI6IFtcInN0YXJ0QWNjb3VudFwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3RyYW5zYWN0aW9uX2hleFwiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdHJhbnNhY3Rpb25cIixcbiAgXCJwYXJhbXNcIjogW1widHJ4SWRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfcmVxdWlyZWRfc2lnbmF0dXJlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhcIiwgXCJhdmFpbGFibGVLZXlzXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3BvdGVudGlhbF9zaWduYXR1cmVzXCIsXG4gIFwicGFyYW1zXCI6IFtcInRyeFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcInZlcmlmeV9hdXRob3JpdHlcIixcbiAgXCJwYXJhbXNcIjogW1widHJ4XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwidmVyaWZ5X2FjY291bnRfYXV0aG9yaXR5XCIsXG4gIFwicGFyYW1zXCI6IFtcIm5hbWVPcklkXCIsIFwic2lnbmVyc1wiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY3RpdmVfdm90ZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYXV0aG9yXCIsIFwicGVybWxpbmtcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYWNjb3VudF92b3Rlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJ2b3RlclwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9jb250ZW50XCIsXG4gIFwicGFyYW1zXCI6IFtcImF1dGhvclwiLCBcInBlcm1saW5rXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2NvbnRlbnRfcmVwbGllc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhdXRob3JcIiwgXCJwZXJtbGlua1wiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9hdXRob3JfYmVmb3JlX2RhdGVcIixcbiAgXCJwYXJhbXNcIjogW1wiYXV0aG9yXCIsIFwic3RhcnRQZXJtbGlua1wiLCBcImJlZm9yZURhdGVcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9yZXBsaWVzX2J5X2xhc3RfdXBkYXRlXCIsXG4gIFwicGFyYW1zXCI6IFtcInN0YXJ0QXV0aG9yXCIsIFwic3RhcnRQZXJtbGlua1wiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3dpdG5lc3Nlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJ3aXRuZXNzSWRzXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3dpdG5lc3NfYnlfYWNjb3VudFwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50TmFtZVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF93aXRuZXNzZXNfYnlfdm90ZVwiLFxuICBcInBhcmFtc1wiOiBbXCJmcm9tXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJsb29rdXBfd2l0bmVzc19hY2NvdW50c1wiLFxuICBcInBhcmFtc1wiOiBbXCJsb3dlckJvdW5kTmFtZVwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3dpdG5lc3NfY291bnRcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY3RpdmVfd2l0bmVzc2VzXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfbWluZXJfcXVldWVcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9yZXdhcmRfZnVuZFwiLFxuICBcInBhcmFtc1wiOiBbXCJuYW1lXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3Zlc3RpbmdfZGVsZWdhdGlvbnNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImZyb21cIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImxvZ2luX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImxvZ2luXCIsXG4gIFwicGFyYW1zXCI6IFtcInVzZXJuYW1lXCIsIFwicGFzc3dvcmRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJsb2dpbl9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYXBpX2J5X25hbWVcIixcbiAgXCJwYXJhbXNcIjogW1wiZGF0YWJhc2VfYXBpXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibG9naW5fYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3ZlcnNpb25cIlxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZm9sbG93ZXJzXCIsXG4gIFwicGFyYW1zXCI6IFtcImZvbGxvd2luZ1wiLCBcInN0YXJ0Rm9sbG93ZXJcIiwgXCJmb2xsb3dUeXBlXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2ZvbGxvd2luZ1wiLFxuICBcInBhcmFtc1wiOiBbXCJmb2xsb3dlclwiLCBcInN0YXJ0Rm9sbG93aW5nXCIsIFwiZm9sbG93VHlwZVwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9mb2xsb3dfY291bnRcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZmVlZF9lbnRyaWVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIiwgXCJlbnRyeUlkXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2ZlZWRcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImVudHJ5SWRcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYmxvZ19lbnRyaWVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIiwgXCJlbnRyeUlkXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Jsb2dcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImVudHJ5SWRcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYWNjb3VudF9yZXB1dGF0aW9uc1wiLFxuICBcInBhcmFtc1wiOiBbXCJsb3dlckJvdW5kTmFtZVwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9yZWJsb2dnZWRfYnlcIixcbiAgXCJwYXJhbXNcIjogW1wiYXV0aG9yXCIsIFwicGVybWxpbmtcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Jsb2dfYXV0aG9yc1wiLFxuICBcInBhcmFtc1wiOiBbXCJibG9nQWNjb3VudFwiXVxufSwge1xuICBcImFwaVwiOiBcIm5ldHdvcmtfYnJvYWRjYXN0X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImJyb2FkY2FzdF90cmFuc2FjdGlvblwiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJuZXR3b3JrX2Jyb2FkY2FzdF9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJicm9hZGNhc3RfdHJhbnNhY3Rpb25fd2l0aF9jYWxsYmFja1wiLFxuICBcInBhcmFtc1wiOiBbXCJjb25maXJtYXRpb25DYWxsYmFja1wiLCBcInRyeFwiXVxufSwge1xuICBcImFwaVwiOiBcIm5ldHdvcmtfYnJvYWRjYXN0X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImJyb2FkY2FzdF90cmFuc2FjdGlvbl9zeW5jaHJvbm91c1wiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJuZXR3b3JrX2Jyb2FkY2FzdF9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJicm9hZGNhc3RfYmxvY2tcIixcbiAgXCJwYXJhbXNcIjogW1wiYlwiXVxufSwge1xuICBcImFwaVwiOiBcIm5ldHdvcmtfYnJvYWRjYXN0X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcInNldF9tYXhfYmxvY2tfYWdlXCIsXG4gIFwicGFyYW1zXCI6IFtcIm1heEJsb2NrQWdlXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibWFya2V0X2hpc3RvcnlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3RpY2tlclwiLFxuICBcInBhcmFtc1wiOiBbXVxufSwge1xuICBcImFwaVwiOiBcIm1hcmtldF9oaXN0b3J5X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF92b2x1bWVcIixcbiAgXCJwYXJhbXNcIjogW11cbn0sIHtcbiAgXCJhcGlcIjogXCJtYXJrZXRfaGlzdG9yeV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfb3JkZXJfYm9va1wiLFxuICBcIm1ldGhvZF9uYW1lXCI6IFwiZ2V0TWFya2V0T3JkZXJCb29rXCIsXG4gIFwicGFyYW1zXCI6IFtcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibWFya2V0X2hpc3RvcnlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3RyYWRlX2hpc3RvcnlcIixcbiAgXCJwYXJhbXNcIjogW1wic3RhcnRcIiwgXCJlbmRcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcIm1hcmtldF9oaXN0b3J5X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9yZWNlbnRfdHJhZGVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibWFya2V0X2hpc3RvcnlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X21hcmtldF9oaXN0b3J5XCIsXG4gIFwicGFyYW1zXCI6IFtcImJ1Y2tldF9zZWNvbmRzXCIsIFwic3RhcnRcIiwgXCJlbmRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJtYXJrZXRfaGlzdG9yeV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfbWFya2V0X2hpc3RvcnlfYnVja2V0c1wiLFxuICBcInBhcmFtc1wiOiBbXVxufV07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2h0dHAgPSByZXF1aXJlKCcuL2h0dHAnKTtcblxudmFyIF9odHRwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h0dHApO1xuXG52YXIgX3dzID0gcmVxdWlyZSgnLi93cycpO1xuXG52YXIgX3dzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBodHRwOiBfaHR0cDIuZGVmYXVsdCxcbiAgd3M6IF93czIuZGVmYXVsdFxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuanNvblJwYyA9IGpzb25ScGM7XG5cbnZhciBfY3Jvc3NGZXRjaCA9IHJlcXVpcmUoJ2Nyb3NzLWZldGNoJyk7XG5cbnZhciBfY3Jvc3NGZXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZldGNoKTtcblxudmFyIF9kZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5cbnZhciBfZGVidWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWcpO1xuXG52YXIgX2Jhc2UgPSByZXF1aXJlKCcuL2Jhc2UnKTtcblxudmFyIF9iYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBkZWJ1ZyA9ICgwLCBfZGVidWcyLmRlZmF1bHQpKCdzdGVlbTpodHRwJyk7XG5cbnZhciBSUENFcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzKFJQQ0Vycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFJQQ0Vycm9yKHJwY0Vycm9yKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJQQ0Vycm9yKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSUENFcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJQQ0Vycm9yKSkuY2FsbCh0aGlzLCBycGNFcnJvci5tZXNzYWdlKSk7XG5cbiAgICBfdGhpcy5uYW1lID0gJ1JQQ0Vycm9yJztcbiAgICBfdGhpcy5jb2RlID0gcnBjRXJyb3IuY29kZTtcbiAgICBfdGhpcy5kYXRhID0gcnBjRXJyb3IuZGF0YTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gUlBDRXJyb3I7XG59KEVycm9yKTtcblxuZnVuY3Rpb24ganNvblJwYyh1cmksIF9yZWYpIHtcbiAgdmFyIG1ldGhvZCA9IF9yZWYubWV0aG9kLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XG5cbiAgdmFyIHBheWxvYWQgPSB7IGlkOiBpZCwganNvbnJwYzogJzIuMCcsIG1ldGhvZDogbWV0aG9kLCBwYXJhbXM6IHBhcmFtcyB9O1xuICByZXR1cm4gKDAsIF9jcm9zc0ZldGNoMi5kZWZhdWx0KSh1cmksIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgJyArIHJlcy5zdGF0dXMgKyAnOiAnICsgcmVzLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfSkudGhlbihmdW5jdGlvbiAocnBjUmVzKSB7XG4gICAgaWYgKHJwY1Jlcy5pZCAhPT0gaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBpZDogJyArIHJwY1Jlcy5pZCk7XG4gICAgfVxuICAgIGlmIChycGNSZXMuZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBSUENFcnJvcihycGNSZXMuZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcnBjUmVzLnJlc3VsdDtcbiAgfSk7XG59XG5cbnZhciBIdHRwVHJhbnNwb3J0ID0gZnVuY3Rpb24gKF9UcmFuc3BvcnQpIHtcbiAgX2luaGVyaXRzKEh0dHBUcmFuc3BvcnQsIF9UcmFuc3BvcnQpO1xuXG4gIGZ1bmN0aW9uIEh0dHBUcmFuc3BvcnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEh0dHBUcmFuc3BvcnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIdHRwVHJhbnNwb3J0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSHR0cFRyYW5zcG9ydCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEh0dHBUcmFuc3BvcnQsIFt7XG4gICAga2V5OiAnc2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoYXBpLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VBcHBiYXNlQXBpKSB7XG4gICAgICAgIGFwaSA9ICdjb25kZW5zZXJfYXBpJztcbiAgICAgIH1cbiAgICAgIGRlYnVnKCdTdGVlbTo6c2VuZCcsIGFwaSwgZGF0YSk7XG4gICAgICB2YXIgaWQgPSBkYXRhLmlkIHx8IHRoaXMuaWQrKztcbiAgICAgIHZhciBwYXJhbXMgPSBbYXBpLCBkYXRhLm1ldGhvZCwgZGF0YS5wYXJhbXNdO1xuICAgICAganNvblJwYyh0aGlzLm9wdGlvbnMudXJpLCB7IG1ldGhvZDogJ2NhbGwnLCBpZDogaWQsIHBhcmFtczogcGFyYW1zIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEh0dHBUcmFuc3BvcnQ7XG59KF9iYXNlMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSHR0cFRyYW5zcG9ydDsiLCJ2YXIgc2VsZiA9IHt9O1xuKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9O1xuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXTtcblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9O1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge307XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdO1xuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKTsgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKTsgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTsgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXTtcblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0O1xuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0JztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGw7XG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpO1xuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMDtcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJztcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJyc7XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpO1xuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfTtcblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pO1xuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InO1xuICAgIHJldHVybiByZXNwb25zZVxuICB9O1xuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XTtcblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9O1xuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnM7XG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KTtcbiAgICB9KVxuICB9O1xuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuLypcbiAqIFJvbGx1cCB3cmFwcyB1cCB0aGUgd2hhdHdnLWZldGNoIGNvZGUgb24gcG9ueWZpbGwgbW9kZSBpblxuICogb3JkZXIgdG8gcHJldmVudCBpdCBmcm9tIGFkZGluZyBmZXRjaCB0byB0aGUgZ2xvYmFsIG9iamVjdC5cbiAqL1xuXG4gICAgICB2YXIgZmV0Y2ggPSBzZWxmLmZldGNoO1xuXG4gICAgICBmZXRjaC5mZXRjaCA9IGZldGNoO1xuICAgICAgZmV0Y2guUmVzcG9uc2UgPSBzZWxmLlJlc3BvbnNlO1xuICAgICAgZmV0Y2guSGVhZGVycyA9IHNlbGYuSGVhZGVycztcbiAgICAgIGZldGNoLlJlcXVlc3QgPSBzZWxmLlJlcXVlc3Q7XG5cbiAgICAgIC8vIGZldGNoIG5vdyBjYW4gYmUgaW1wb3J0ZWQgYXMgdGhlIGRlZmF1bHQgb2JqZWN0XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZldGNoO1xuICAgIFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG52YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUcmFuc3BvcnQgPSBmdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICBfaW5oZXJpdHMoVHJhbnNwb3J0LCBfRXZlbnRFbWl0dGVyKTtcblxuICBmdW5jdGlvbiBUcmFuc3BvcnQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zcG9ydCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVHJhbnNwb3J0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVHJhbnNwb3J0KSkuY2FsbCh0aGlzLCBvcHRpb25zKSk7XG5cbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy5pZCA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRyYW5zcG9ydCwgW3tcbiAgICBrZXk6ICdzZXRPcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsaXN0ZW5UbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlblRvKHRhcmdldCwgZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtlbHNlIHRhcmdldC5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtlbHNlIHRhcmdldC5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnc3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhbnNwb3J0O1xufShfZXZlbnRzMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNwb3J0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXRlY3ROb2RlID0gcmVxdWlyZSgnZGV0ZWN0LW5vZGUnKTtcblxudmFyIF9kZXRlY3ROb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdE5vZGUpO1xuXG52YXIgX2RlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcblxudmFyIF9kZWJ1ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Zyk7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG52YXIgX2Jhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFdlYlNvY2tldCA9IHZvaWQgMDtcbmlmIChfZGV0ZWN0Tm9kZTIuZGVmYXVsdCkge1xuICBXZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIFdlYlNvY2tldCA9IHdpbmRvdy5XZWJTb2NrZXQ7XG59IGVsc2Uge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBkZWNpZGUgb24gYSBgV2ViU29ja2V0YCBjbGFzc1wiKTtcbn1cblxudmFyIGRlYnVnID0gKDAsIF9kZWJ1ZzIuZGVmYXVsdCkoJ3N0ZWVtOndzJyk7XG5cbnZhciBXc1RyYW5zcG9ydCA9IGZ1bmN0aW9uIChfVHJhbnNwb3J0KSB7XG4gIF9pbmhlcml0cyhXc1RyYW5zcG9ydCwgX1RyYW5zcG9ydCk7XG5cbiAgZnVuY3Rpb24gV3NUcmFuc3BvcnQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdzVHJhbnNwb3J0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChXc1RyYW5zcG9ydC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFdzVHJhbnNwb3J0KSkuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHsgaWQ6IDAgfSwgb3B0aW9ucykpKTtcblxuICAgIF90aGlzLl9yZXF1ZXN0cyA9IG5ldyBNYXAoKTtcbiAgICBfdGhpcy5pbkZsaWdodCA9IDA7XG4gICAgX3RoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdzVHJhbnNwb3J0LCBbe1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuc3RhcnRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzMi53cyA9IG5ldyBXZWJTb2NrZXQoX3RoaXMyLm9wdGlvbnMud2Vic29ja2V0KTtcbiAgICAgICAgX3RoaXMyLndzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgX3RoaXMyLnN0YXJ0UHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzMi53cy5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgX3RoaXMyLndzLm9uZXJyb3IgPSBfdGhpczIub25FcnJvci5iaW5kKF90aGlzMik7XG4gICAgICAgICAgX3RoaXMyLndzLm9ubWVzc2FnZSA9IF90aGlzMi5vbk1lc3NhZ2UuYmluZChfdGhpczIpO1xuICAgICAgICAgIF90aGlzMi53cy5vbmNsb3NlID0gX3RoaXMyLm9uQ2xvc2UuYmluZChfdGhpczIpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQcm9taXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgZGVidWcoJ1N0b3BwaW5nLi4uJyk7XG5cbiAgICAgIHRoaXMuc3RhcnRQcm9taXNlID0gbnVsbDtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXF1ZXN0cy5jbGVhcigpO1xuXG4gICAgICBpZiAodGhpcy53cykge1xuICAgICAgICB0aGlzLndzLm9uZXJyb3IgPSB0aGlzLndzLm9ubWVzc2FnZSA9IHRoaXMud3Mub25jbG9zZSA9IG51bGw7XG4gICAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoYXBpLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGRlYnVnKCdTdGVlbTo6c2VuZCcsIGFwaSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcy5zdGFydCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVmZXJyYWwgPSB7fTtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGRlZmVycmFsLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZGVmZXJyYWwucmVqZWN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmVqZWN0KHZhbCk7XG4gICAgICAgICAgICBjYWxsYmFjayh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfdGhpczMub3B0aW9ucy51c2VBcHBiYXNlQXBpKSB7XG4gICAgICAgICAgYXBpID0gJ2NvbmRlbnNlcl9hcGknO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9yZXF1ZXN0ID0ge1xuICAgICAgICAgIGRlZmVycmFsOiBkZWZlcnJhbCxcbiAgICAgICAgICBzdGFydGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgaWQ6IGRhdGEuaWQgfHwgX3RoaXMzLmlkKyssXG4gICAgICAgICAgICBtZXRob2Q6ICdjYWxsJyxcbiAgICAgICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICAgICAgcGFyYW1zOiBbYXBpLCBkYXRhLm1ldGhvZCwgZGF0YS5wYXJhbXNdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpczMuaW5GbGlnaHQrKztcbiAgICAgICAgX3RoaXMzLl9yZXF1ZXN0cy5zZXQoX3JlcXVlc3QubWVzc2FnZS5pZCwgX3JlcXVlc3QpO1xuICAgICAgICBfdGhpczMud3Muc2VuZChKU09OLnN0cmluZ2lmeShfcmVxdWVzdC5tZXNzYWdlKSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJhbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5fcmVxdWVzdHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9yZXF1ZXN0ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBfcmVxdWVzdC5kZWZlcnJhbC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gd2FzIGNsb3NlZCcpO1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLl9yZXF1ZXN0c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfcmVxdWVzdCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgIF9yZXF1ZXN0LmRlZmVycmFsLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVxdWVzdHMuY2xlYXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lc3NhZ2Uod2Vic29ja2V0TWVzc2FnZSkge1xuICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKHdlYnNvY2tldE1lc3NhZ2UuZGF0YSk7XG4gICAgICBkZWJ1ZygnLS0gU3RlZW0ub25NZXNzYWdlIC0tPicsIG1lc3NhZ2UuaWQpO1xuICAgICAgaWYgKCF0aGlzLl9yZXF1ZXN0cy5oYXMobWVzc2FnZS5pZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYW5pYzogbm8gcmVxdWVzdCBpbiBxdWV1ZSBmb3IgbWVzc2FnZSBpZCAnICsgbWVzc2FnZS5pZCk7XG4gICAgICB9XG4gICAgICB2YXIgX3JlcXVlc3QgPSB0aGlzLl9yZXF1ZXN0cy5nZXQobWVzc2FnZS5pZCk7XG4gICAgICB0aGlzLl9yZXF1ZXN0cy5kZWxldGUobWVzc2FnZS5pZCk7XG5cbiAgICAgIHZhciBlcnJvckNhdXNlID0gbWVzc2FnZS5lcnJvcjtcbiAgICAgIGlmIChlcnJvckNhdXNlKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgICAgICAgKGVycm9yQ2F1c2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGNvbXBsZXRlIG9wZXJhdGlvbicpICsgJyAoc2VlIGVyci5wYXlsb2FkIGZvciB0aGUgZnVsbCBlcnJvciBwYXlsb2FkKScpO1xuICAgICAgICBlcnIucGF5bG9hZCA9IG1lc3NhZ2U7XG4gICAgICAgIF9yZXF1ZXN0LmRlZmVycmFsLnJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KCd0cmFjay1wZXJmb3JtYW5jZScsIF9yZXF1ZXN0Lm1lc3NhZ2UubWV0aG9kLCBEYXRlLm5vdygpIC0gX3JlcXVlc3Quc3RhcnRlZEF0KTtcbiAgICAgICAgX3JlcXVlc3QuZGVmZXJyYWwucmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdzVHJhbnNwb3J0O1xufShfYmFzZTIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFdzVHJhbnNwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cbi8vIE9ubHkgTm9kZS5KUyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcbnRyeSB7XG4gbW9kdWxlLmV4cG9ydHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgXG59IGNhdGNoKGUpIHt9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xudmFyIHNuYWtlQ2FzZVJlID0gL18oW2Etel0pL2c7XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShzbmFrZUNhc2VSZSwgZnVuY3Rpb24gKF9tLCBsKSB7XG4gICAgcmV0dXJuIGwudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==