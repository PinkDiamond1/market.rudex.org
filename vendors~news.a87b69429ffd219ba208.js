(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 2712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(2713);
var config = __webpack_require__(2714);
var utils = __webpack_require__(2731);

module.exports = {
  api: api,
  config: config,
  utils: utils
};

/***/ }),

/***/ 2713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(449);

var _events2 = _interopRequireDefault(_events);

var _config = __webpack_require__(2714);

var _config2 = _interopRequireDefault(_config);

var _methods = __webpack_require__(2723);

var _methods2 = _interopRequireDefault(_methods);

var _transports = __webpack_require__(2724);

var _transports2 = _interopRequireDefault(_transports);

var _utils = __webpack_require__(2731);

var _http = __webpack_require__(2725);

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

/***/ 2714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(2715);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = __webpack_require__(2722);

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

/***/ 2715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2716);


/***/ }),

/***/ 2716:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(2717),
    baseEach = __webpack_require__(2718),
    castFunction = __webpack_require__(2721),
    isArray = __webpack_require__(1780);

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

/***/ 2717:
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

/***/ 2718:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(2719),
    createBaseEach = __webpack_require__(2720);

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

/***/ 2719:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(1954),
    keys = __webpack_require__(2248);

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

/***/ 2720:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(1968);

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

/***/ 2721:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(1986);

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

/***/ 2722:
/***/ (function(module) {

module.exports = {"transport":"http","websocket":"wss://gtg.steem.house:8090","uri":"https://api.steemit.com","url":"","dev_uri":"https://api.steemitdev.com","stage_uri":"https://api.steemitstage.com","address_prefix":"STM","chain_id":"0000000000000000000000000000000000000000000000000000000000000000"};

/***/ }),

/***/ 2723:
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

/***/ 2724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(2725);

var _http2 = _interopRequireDefault(_http);

var _ws = __webpack_require__(2728);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  http: _http2.default,
  ws: _ws2.default
};

/***/ }),

/***/ 2725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.jsonRpc = jsonRpc;

var _crossFetch = __webpack_require__(2726);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _debug = __webpack_require__(1034);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2727);

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

/***/ 2726:
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

/***/ 2727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(449);

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

/***/ 2728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detectNode = __webpack_require__(2729);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _debug = __webpack_require__(1034);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2727);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebSocket = void 0;
if (_detectNode2.default) {
  WebSocket = __webpack_require__(2730); // eslint-disable-line global-require
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

/***/ 2729:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),

/***/ 2731:
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
//# sourceMappingURL=vendors~news.js.map