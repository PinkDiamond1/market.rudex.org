(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 2555:
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(2556),
    groupEntries = _require.groupEntries,
    parseData = _require.parseData;

var _require2 = __webpack_require__(2558),
    resolveBlockTimes = _require2.resolveBlockTimes,
    resolveAssets = _require2.resolveAssets;

var _require3 = __webpack_require__(2560)(true),
    getAccountHistoryES = _require3.getAccountHistoryES,
    getAccountHistory = _require3.getAccountHistory;

module.exports = {
    groupEntries: groupEntries,
    parseData: parseData,
    getAccountHistoryES: getAccountHistoryES,
    getAccountHistory: getAccountHistory,
    resolveBlockTimes: resolveBlockTimes,
    resolveAssets: resolveAssets
};


/***/ }),

/***/ 2556:
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__(1066);
var utils = __webpack_require__(2557);

var assetMovements = {};
var runningBalance = {};
var movementTypes = {};
var accountBalances = {};
var transfers = {};
var fills = {};

function getFinalBalance(asset) {
    var sum = 0;
    if (!assetMovements[asset]) return 0;
    assetMovements[asset].forEach(function(movement) {
        sum += movement;
    });
    return sum;
}

function trackMovements(asset, amount, type, timestamp) {
    if (!assetMovements[asset]) assetMovements[asset] = [];
    if (!runningBalance[asset]) runningBalance[asset] = [];

    assetMovements[asset].push(amount);
    runningBalance[asset].push([type, amount, new Date(timestamp)]);

    if (!movementTypes[asset]) movementTypes[asset] = {};
    if (!movementTypes[asset][type])
        movementTypes[asset][type] = {deposit: [], withdrawal: []};

    movementTypes[asset][type][amount > 0 ? "deposit" : "withdrawal"].push(
        amount
    );
}

function addOutputEntry(
    output,
    type,
    buy,
    sell,
    fee,
    date,
    opType,
    comment,
    tradeGroup
) {
    if (!buy) buy = {amount: "", currency: ""};
    if (!sell) sell = {amount: "", currency: ""};
    if (!fee) fee = {amount: "", currency: ""};

    if (buy.amount) trackMovements(buy.currency, buy.amount, opType, date);
    if (sell.amount) trackMovements(sell.currency, -sell.amount, opType, date);
    if (fee.amount) trackMovements(fee.currency, -fee.amount, opType, date);

    output.push([
        type,
        utils.printAmount(buy),
        buy.currency,
        utils.printAmount(sell),
        sell.currency,
        utils.printAmount(fee),
        fee.currency,
        "BTS-DEX",
        tradeGroup || "",
        comment || "",
        date
    ]);

    return output;
}

function filterEntries(entries, FILTER_TYPE, FILTER_DATE) {
    if (!FILTER_TYPE && !FILTER_DATE) return entries;
    var entriesKeys = Object.keys(entries);
    for (var i = entriesKeys.length - 1; i >= 0; i--) {
        var trx_id = entriesKeys[i];
        var _entries$trx_id = entries[trx_id],
            timestamp = _entries$trx_id.timestamp,
            type = _entries$trx_id.type,
            data = _entries$trx_id.data;

        if (!!FILTER_TYPE) {
            if (type !== FILTER_TYPE) {
                delete entries[trx_id];
                continue;
            }
        }

        if (!!FILTER_DATE) {
            if (new Date(timestamp).getTime() < FILTER_DATE) {
                delete entries[trx_id];
                continue;
            }
        }
    }
    console.log(
        "Removed " +
            (entriesKeys.length - Object.keys(entries).length) +
            " entries by filtering"
    );
    return entries;
}

function groupEntries(entries) {
    var previous_fill = {};
    var recordKeys = Object.keys(entries);
    for (var i = recordKeys.length - 1; i >= 0; i--) {
        var trx_id = recordKeys[i];
        var _entries$trx_id2 = entries[trx_id],
            timestamp = _entries$trx_id2.timestamp,
            type = _entries$trx_id2.type,
            data = _entries$trx_id2.data;

        switch (type) {
            case "fill_order":
                var t1 = moment(timestamp);
                var marketId =
                    data.receives.asset_id + "_" + data.pays.asset_id;
                var previous = previous_fill[marketId];
                var t0 = !!previous ? moment(previous.timestamp) : null;

                if (
                    !!previous &&
                    t1.isSame(t0, "day") &&
                    previous.data.pays.asset_id === data.pays.asset_id &&
                    previous.data.receives.asset_id === data.receives.asset_id
                ) {
                    data.pays.amount =
                        parseInt(data.pays.amount, 10) +
                        parseInt(previous.data.pays.amount, 10);
                    data.receives.amount =
                        parseInt(data.receives.amount, 10) +
                        parseInt(previous.data.receives.amount, 10);
                    data.fee.amount =
                        parseInt(data.fee.amount, 10) +
                        parseInt(previous.data.fee.amount, 10);
                    entries[trx_id].data = data;
                    delete entries[previous.trx_id];
                }
                previous_fill[marketId] = {
                    data: data,
                    timestamp: timestamp,
                    trx_id: trx_id
                };
                break;

            default:
                break;
        }
    }
    console.log(
        "Removed " +
            (recordKeys.length - Object.keys(entries).length) +
            " fill_order entries by grouping"
    );
    return entries;
}

function parseData(recordData, accountId, accountName) {
    var out = [];
    out.push([
        "Type",
        "Buy Amount",
        "Buy Currency",
        "Sell Amount",
        "Sell Currency",
        "Fee Amount",
        "Fee Currency",
        "Exchange",
        "Trade Group",
        "Comment",
        "Date"
    ]);

    var typeCounts = {};

    function incrementType(type) {
        if (!typeCounts[type]) typeCounts[type] = 0;
        typeCounts[type]++;
    }

    for (
        var _iterator = Object.keys(recordData),
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
        ;

    ) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var trx_id = _ref;
        var _recordData$trx_id = recordData[trx_id],
            timestamp = _recordData$trx_id.timestamp,
            type = _recordData$trx_id.type,
            data = _recordData$trx_id.data;

        var fee = null;

        switch (type) {
            case "vesting_balance_withdraw":
                var vestingFunds = utils.parseCurrency(data.amount);
                fee = utils.parseCurrency(data.fee);

                out = addOutputEntry(
                    out,
                    data.owner === "1.2.30665" && vestingFunds.amount > 10000
                        ? "Income"
                        : "Deposit",
                    vestingFunds,
                    null,
                    fee, // dev.bitsharesblocks
                    timestamp,
                    type,
                    accountName + " : Vesting balance withdraw"
                );
                incrementType(type);
                break;

            case "balance_claim":
                var balanceClaimFunds = utils.parseCurrency(data.total_claimed);

                out = addOutputEntry(
                    out,
                    "Deposit",
                    balanceClaimFunds,
                    null,
                    null,
                    timestamp,
                    type,
                    accountName + " : Balance claim"
                );

                incrementType(type);
                break;

            case "transfer":
                var funds = utils.parseCurrency(data.amount);
                fee = utils.parseCurrency(data.fee);
                if (data.to == accountId) {
                    // Funds coming in to the account
                    out = addOutputEntry(
                        out,
                        data.to === "1.2.391938" && data.from === "1.2.381086"
                            ? "Income"
                            : "Deposit",
                        funds,
                        null,
                        null, // pay.svk and bitshares-ui
                        timestamp,
                        type,
                        accountName + " : From " + data.from
                    );
                } else {
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        funds,
                        fee,
                        timestamp,
                        type,
                        accountName + ": To " + data.to
                    );
                }
                incrementType(type);
                break;

            case "fill_order":
                var soldFunds = utils.parseCurrency(data.pays);
                var boughtFunds = utils.parseCurrency(data.receives);
                fee = utils.parseCurrency(data.fee);
                if (fee.currency !== "BTS") {
                    if (boughtFunds.currency === fee.currency) {
                        boughtFunds.amount -= fee.amount;
                        fee.amount = 0;
                    } else if (soldFunds.currency === fee.currency) {
                        soldFunds.amount -= fee.amount;
                        fee.amount = 0;
                    }
                }

                out = addOutputEntry(
                    out,
                    "Trade",
                    boughtFunds,
                    soldFunds,
                    fee,
                    timestamp,
                    type
                );

                incrementType(type);
                break;

            case "asset_issue": {
                var issuedFunds = utils.parseCurrency(data.asset_to_issue);
                fee =
                    data.issuer === accountId
                        ? utils.parseCurrency(data.fee)
                        : null;
                if (data.issue_to_account === accountId) {
                    out = addOutputEntry(
                        out,
                        "Deposit",
                        issuedFunds,
                        null,
                        fee,
                        timestamp,
                        type,
                        accountName + " : Issued to account"
                    );
                }
                incrementType(type);
                break;
            }

            case "account_update":
            case "proposal_create":
            case "proposal_update":
            case "account_whitelist":
            case "worker_create":
            case "limit_order_create":
            case "limit_order_cancel":
            case "call_order_update":
                fee = utils.parseCurrency(data.fee);
                if (fee.amount > 0) {
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        fee,
                        null,
                        timestamp,
                        type,
                        type + " fee"
                    );
                    incrementType(type);
                }
                break;

            case "account_create":
                if (data.registrar === accountId) {
                    fee = utils.parseCurrency(data.fee);
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        fee,
                        null,
                        timestamp,
                        type,
                        type + " fee"
                    );
                    incrementType(type);
                }
                break;

            case "asset_fund_fee_pool": {
                fee = utils.parseCurrency(data.fee);
                var fundFunds = utils.parseCurrency({
                    amount: data.amount,
                    asset_id: "1.3.0"
                });

                out = addOutputEntry(
                    out,
                    "Withdrawal",
                    null,
                    fundFunds,
                    fee,
                    timestamp,
                    type,
                    "" + type
                );

                incrementType(type);
                break;
            }

            default: {
                console.log("Unhandled type:", type, data);
            }
        }
    }
    return out;
}

module.exports = {
    parseData: parseData,
    filterEntries: filterEntries,
    groupEntries: groupEntries
};


/***/ }),

/***/ 2557:
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(407),
    ChainStore = _require.ChainStore;

function precisionToRatio(p) {
    if (typeof p !== "number") throw new Error("Input must be a number");
    return Math.pow(10, p);
}

function parseCurrency(amount) {
    var asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {precision: 5};
    }
    var precisionRatio = precisionToRatio(asset.precision);

    var fullAmount = amount.amount / precisionRatio;
    return {
        amount: fullAmount,
        currency: asset.symbol,
        asset_id: amount.asset_id
    };
}

function printAmount(amount) {
    if (!amount.amount || !amount.currency) return "";
    var asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {precision: 5};
    }

    return amount.amount.toFixed(asset.precision);
}

function getIndex(str) {
    var pieces = str.split(".");
    return parseInt(pieces[2], 10);
}

module.exports = {
    parseCurrency: parseCurrency,
    printAmount: printAmount,
    getIndex: getIndex
};


/***/ }),

/***/ 2558:
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(2559);
var bts = __webpack_require__(476);

var _require = __webpack_require__(407),
    ChainTypes = _require.ChainTypes,
    ChainStore = _require.ChainStore,
    FetchChain = _require.FetchChain;

var operations = ChainTypes.operations;

var ops = Object.keys(operations);

var blockData = {};
var assetData = {};

function connect() {
    return new Promise(function(resolve) {
        bts.Apis.instance(config.apiNode, true)
            .init_promise.then(function(res) {
                ChainStore.init(false).then(function() {
                    resolve(res);
                });
            })
            .catch(function(err) {
                console.error("Error connection to node:", err);
            });
    });
}

function disconnect() {
    bts.Apis.instance().close();
}

function getUser(name) {
    return new Promise(function(resolve, reject) {
        var _FetchChain;

        FetchChain(
            "getAccount",
            name,
            undefined,
            ((_FetchChain = {}), (_FetchChain[name] = false), _FetchChain)
        )
            .then(function(result) {
                var account = result.toJS();
                if (!account.balances) account.balances = {};
                if (!account.call_orders) account.call_orders = [];
                var assets = Object.keys(account.balances);

                // account.call_orders.forEach(c => {
                //     let balanceIndex = account.balances.findIndex(b => {
                //         return b.asset_type === c.call_price.base.asset_id;
                //     });
                //     if(balanceIndex !== -1) {
                //         let newBalance = parseInt(account.balances[balanceIndex].balance, 10) +
                //         parseInt(c.collateral, 10);
                //         account.balances[balanceIndex].balance = newBalance;
                //     } else {
                //         assets.push(c.call_price.base.asset_id);
                //         account.balances.push({
                //             balance: c.collateral,
                //             asset_type: c.call_price.base.asset_id
                //         });
                //     }
                // });

                resolve({
                    accountId: account.id,
                    assets: assets,
                    balances: account.balances
                });
            })
            .catch(reject);
    });
}

function getBlockTime(block) {
    return new Promise(function(resolve, reject) {
        if (blockData[block]) return resolve(blockData[block]);

        bts.Apis.instance()
            .db_api()
            .exec("get_block", [block])
            .then(function(result) {
                blockData[block] = new Date(result.timestamp + "Z");
                resolve(blockData[block]);
            })
            .catch(reject);
    });
}

function getAssetData(asset) {
    return new Promise(function(resolve, reject) {
        var _FetchChain2;

        if (assetData[asset]) return resolve(assetData[asset]);

        FetchChain(
            "getObject",
            asset,
            undefined,
            ((_FetchChain2 = {}), (_FetchChain2[asset] = false), _FetchChain2)
        )
            .then(function(result) {
                var a = result.toJS();
                assetData[asset] = {
                    symbol: a.symbol.replace(
                        /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                        ""
                    ),
                    precision: a.precision
                };
                resolve(assetData[asset]);
            })
            .catch(function(err) {
                reject();
            });
    });
}

function resolveBlockTimes(operations) {
    return new Promise(function(resolve, reject) {
        var promises = operations.map(function(op) {
            if (op.block_time)
                blockData[op.block_num] = new Date(op.block_time);
            return getBlockTime(op.block_num);
        });
        Promise.all(promises)
            .then(resolve)
            .catch(reject);
    });
}

function resolveAssets(operations, list) {
    return new Promise(function(resolve, reject) {
        var promises = [];
        var assets = {};
        if (operations) {
            operations.forEach(function(record) {
                var type = ops[record.op[0]];
                switch (type) {
                    case "transfer": {
                        // console.log("transfer record.op:", record.op);
                        assets[record.op[1].amount.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }
                    case "fill_order": {
                        assets[record.op[1].pays.asset_id] = true;
                        assets[record.op[1].receives.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }
                    case "asset_issue": {
                        assets[record.op[1].asset_to_issue.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            });
        }

        if (list) {
            list.forEach(function(entry) {
                assets[entry] = true;
            });
        }

        Object.keys(assets).forEach(function(asset_id) {
            if (!assetData[asset_id] && !!asset_id) {
                promises.push(getAssetData(asset_id));
            }
        });
        Promise.all(promises)
            .then(resolve)
            .catch(reject);
    });
}

function getAsset(id) {
    return assetData[id];
}

function getBlock(block_num) {
    return blockData[block_num];
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getUser: getUser,
    getBlockTime: getBlockTime,
    getAssetData: getAssetData,
    resolveAssets: resolveAssets,
    resolveBlockTimes: resolveBlockTimes,
    getAsset: getAsset,
    getBlock: getBlock
};


/***/ }),

/***/ 2559:
/***/ (function(module, exports) {

module.exports = {
    apiNode: "wss://eu.nodes.bitshares.ws", // wss://eu.nodes.bitshares.ws is an alternative
    useES: true, // use elastic search
    esNode: "https://eswrapper.bitshares.eu",
    botPaymentAccounts: []
};


/***/ }),

/***/ 2560:
/***/ (function(module, exports, __webpack_require__) {

var bts = __webpack_require__(476);
var fetchClient = void 0;

module.exports = function(isBrowser) {
    if (isBrowser) fetchClient = fetch;
    else {
        fetchClient = __webpack_require__(2561);
    }

    function getAccountHistoryES(account_id, limit, start) {
        var esNode =
            arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : "https://eswrapper.bitshares.eu";

        console.log(
            "query",
            esNode +
                "/get_account_history?account_id=" +
                account_id +
                "&from_=" +
                start +
                "&size=" +
                limit +
                "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
        );
        return new Promise(function(resolve, reject) {
            fetchClient(
                esNode +
                    "/get_account_history?account_id=" +
                    account_id +
                    "&from_=" +
                    start +
                    "&size=" +
                    limit +
                    "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
            )
                .then(function(res) {
                    return res.json();
                })
                .then(function(result) {
                    var ops = result.map(function(r) {
                        return {
                            id: r.account_history.operation_id,
                            op: JSON.parse(r.operation_history.op),
                            result: JSON.parse(
                                r.operation_history.operation_result
                            ),
                            block_num: r.block_data.block_num,
                            block_time: r.block_data.block_time + "Z"
                        };
                    });
                    resolve(ops);
                })
                .catch(function() {
                    resolve([]);
                });
        });
    }

    function getAccountHistory(account_id, stop, limit, start) {
        return new Promise(function(resolve, reject) {
            bts.Apis.instance()
                .history_api()
                .exec("get_account_history", [account_id, stop, limit, start])
                .then(function(operations) {
                    resolve(operations);
                })
                .catch(reject);
        });
    }

    return {
        getAccountHistory: getAccountHistory,
        getAccountHistoryES: getAccountHistoryES
    };
};


/***/ }),

/***/ 2561:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50fmRhc2hib2FyZH5kYXNoYm9hcmQtYWNjb3VudHN+ZGVwb3NpdC13aXRoZHJhd350cmFuc2Zlci4zZDFjY2QzOTY2OWI3NzQ1N2FlMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9hcGkvbm9kZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYml0c2hhcmVzLXJlcG9ydC9lcy9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9hcGkvZ2V0QWNjb3VudEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKFwiLi9zcmMvcGFyc2VyXCIpLFxuICAgIGdyb3VwRW50cmllcyA9IF9yZXF1aXJlLmdyb3VwRW50cmllcyxcbiAgICBwYXJzZURhdGEgPSBfcmVxdWlyZS5wYXJzZURhdGE7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKFwiLi9zcmMvYXBpL25vZGVBcGlcIiksXG4gICAgcmVzb2x2ZUJsb2NrVGltZXMgPSBfcmVxdWlyZTIucmVzb2x2ZUJsb2NrVGltZXMsXG4gICAgcmVzb2x2ZUFzc2V0cyA9IF9yZXF1aXJlMi5yZXNvbHZlQXNzZXRzO1xuXG52YXIgX3JlcXVpcmUzID0gcmVxdWlyZShcIi4vc3JjL2FwaS9nZXRBY2NvdW50SGlzdG9yeVwiKSh0cnVlKSxcbiAgICBnZXRBY2NvdW50SGlzdG9yeUVTID0gX3JlcXVpcmUzLmdldEFjY291bnRIaXN0b3J5RVMsXG4gICAgZ2V0QWNjb3VudEhpc3RvcnkgPSBfcmVxdWlyZTMuZ2V0QWNjb3VudEhpc3Rvcnk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdyb3VwRW50cmllczogZ3JvdXBFbnRyaWVzLFxuICAgIHBhcnNlRGF0YTogcGFyc2VEYXRhLFxuICAgIGdldEFjY291bnRIaXN0b3J5RVM6IGdldEFjY291bnRIaXN0b3J5RVMsXG4gICAgZ2V0QWNjb3VudEhpc3Rvcnk6IGdldEFjY291bnRIaXN0b3J5LFxuICAgIHJlc29sdmVCbG9ja1RpbWVzOiByZXNvbHZlQmxvY2tUaW1lcyxcbiAgICByZXNvbHZlQXNzZXRzOiByZXNvbHZlQXNzZXRzXG59O1xuIiwidmFyIG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIGFzc2V0TW92ZW1lbnRzID0ge307XG52YXIgcnVubmluZ0JhbGFuY2UgPSB7fTtcbnZhciBtb3ZlbWVudFR5cGVzID0ge307XG52YXIgYWNjb3VudEJhbGFuY2VzID0ge307XG52YXIgdHJhbnNmZXJzID0ge307XG52YXIgZmlsbHMgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RmluYWxCYWxhbmNlKGFzc2V0KSB7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgaWYgKCFhc3NldE1vdmVtZW50c1thc3NldF0pIHJldHVybiAwO1xuICAgIGFzc2V0TW92ZW1lbnRzW2Fzc2V0XS5mb3JFYWNoKGZ1bmN0aW9uKG1vdmVtZW50KSB7XG4gICAgICAgIHN1bSArPSBtb3ZlbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtO1xufVxuXG5mdW5jdGlvbiB0cmFja01vdmVtZW50cyhhc3NldCwgYW1vdW50LCB0eXBlLCB0aW1lc3RhbXApIHtcbiAgICBpZiAoIWFzc2V0TW92ZW1lbnRzW2Fzc2V0XSkgYXNzZXRNb3ZlbWVudHNbYXNzZXRdID0gW107XG4gICAgaWYgKCFydW5uaW5nQmFsYW5jZVthc3NldF0pIHJ1bm5pbmdCYWxhbmNlW2Fzc2V0XSA9IFtdO1xuXG4gICAgYXNzZXRNb3ZlbWVudHNbYXNzZXRdLnB1c2goYW1vdW50KTtcbiAgICBydW5uaW5nQmFsYW5jZVthc3NldF0ucHVzaChbdHlwZSwgYW1vdW50LCBuZXcgRGF0ZSh0aW1lc3RhbXApXSk7XG5cbiAgICBpZiAoIW1vdmVtZW50VHlwZXNbYXNzZXRdKSBtb3ZlbWVudFR5cGVzW2Fzc2V0XSA9IHt9O1xuICAgIGlmICghbW92ZW1lbnRUeXBlc1thc3NldF1bdHlwZV0pXG4gICAgICAgIG1vdmVtZW50VHlwZXNbYXNzZXRdW3R5cGVdID0ge2RlcG9zaXQ6IFtdLCB3aXRoZHJhd2FsOiBbXX07XG5cbiAgICBtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXVthbW91bnQgPiAwID8gXCJkZXBvc2l0XCIgOiBcIndpdGhkcmF3YWxcIl0ucHVzaChcbiAgICAgICAgYW1vdW50XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWRkT3V0cHV0RW50cnkoXG4gICAgb3V0cHV0LFxuICAgIHR5cGUsXG4gICAgYnV5LFxuICAgIHNlbGwsXG4gICAgZmVlLFxuICAgIGRhdGUsXG4gICAgb3BUeXBlLFxuICAgIGNvbW1lbnQsXG4gICAgdHJhZGVHcm91cFxuKSB7XG4gICAgaWYgKCFidXkpIGJ1eSA9IHthbW91bnQ6IFwiXCIsIGN1cnJlbmN5OiBcIlwifTtcbiAgICBpZiAoIXNlbGwpIHNlbGwgPSB7YW1vdW50OiBcIlwiLCBjdXJyZW5jeTogXCJcIn07XG4gICAgaWYgKCFmZWUpIGZlZSA9IHthbW91bnQ6IFwiXCIsIGN1cnJlbmN5OiBcIlwifTtcblxuICAgIGlmIChidXkuYW1vdW50KSB0cmFja01vdmVtZW50cyhidXkuY3VycmVuY3ksIGJ1eS5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XG4gICAgaWYgKHNlbGwuYW1vdW50KSB0cmFja01vdmVtZW50cyhzZWxsLmN1cnJlbmN5LCAtc2VsbC5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XG4gICAgaWYgKGZlZS5hbW91bnQpIHRyYWNrTW92ZW1lbnRzKGZlZS5jdXJyZW5jeSwgLWZlZS5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XG5cbiAgICBvdXRwdXQucHVzaChbXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHV0aWxzLnByaW50QW1vdW50KGJ1eSksXG4gICAgICAgIGJ1eS5jdXJyZW5jeSxcbiAgICAgICAgdXRpbHMucHJpbnRBbW91bnQoc2VsbCksXG4gICAgICAgIHNlbGwuY3VycmVuY3ksXG4gICAgICAgIHV0aWxzLnByaW50QW1vdW50KGZlZSksXG4gICAgICAgIGZlZS5jdXJyZW5jeSxcbiAgICAgICAgXCJCVFMtREVYXCIsXG4gICAgICAgIHRyYWRlR3JvdXAgfHwgXCJcIixcbiAgICAgICAgY29tbWVudCB8fCBcIlwiLFxuICAgICAgICBkYXRlXG4gICAgXSk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJFbnRyaWVzKGVudHJpZXMsIEZJTFRFUl9UWVBFLCBGSUxURVJfREFURSkge1xuICAgIGlmICghRklMVEVSX1RZUEUgJiYgIUZJTFRFUl9EQVRFKSByZXR1cm4gZW50cmllcztcbiAgICB2YXIgZW50cmllc0tleXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKTtcbiAgICBmb3IgKHZhciBpID0gZW50cmllc0tleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHRyeF9pZCA9IGVudHJpZXNLZXlzW2ldO1xuICAgICAgICB2YXIgX2VudHJpZXMkdHJ4X2lkID0gZW50cmllc1t0cnhfaWRdLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gX2VudHJpZXMkdHJ4X2lkLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIHR5cGUgPSBfZW50cmllcyR0cnhfaWQudHlwZSxcbiAgICAgICAgICAgIGRhdGEgPSBfZW50cmllcyR0cnhfaWQuZGF0YTtcblxuICAgICAgICBpZiAoISFGSUxURVJfVFlQRSkge1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09IEZJTFRFUl9UWVBFKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbdHJ4X2lkXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIUZJTFRFUl9EQVRFKSB7XG4gICAgICAgICAgICBpZiAobmV3IERhdGUodGltZXN0YW1wKS5nZXRUaW1lKCkgPCBGSUxURVJfREFURSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW3RyeF9pZF07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiUmVtb3ZlZCBcIiArXG4gICAgICAgICAgICAoZW50cmllc0tleXMubGVuZ3RoIC0gT2JqZWN0LmtleXMoZW50cmllcykubGVuZ3RoKSArXG4gICAgICAgICAgICBcIiBlbnRyaWVzIGJ5IGZpbHRlcmluZ1wiXG4gICAgKTtcbiAgICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZ3JvdXBFbnRyaWVzKGVudHJpZXMpIHtcbiAgICB2YXIgcHJldmlvdXNfZmlsbCA9IHt9O1xuICAgIHZhciByZWNvcmRLZXlzID0gT2JqZWN0LmtleXMoZW50cmllcyk7XG4gICAgZm9yICh2YXIgaSA9IHJlY29yZEtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHRyeF9pZCA9IHJlY29yZEtleXNbaV07XG4gICAgICAgIHZhciBfZW50cmllcyR0cnhfaWQyID0gZW50cmllc1t0cnhfaWRdLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gX2VudHJpZXMkdHJ4X2lkMi50aW1lc3RhbXAsXG4gICAgICAgICAgICB0eXBlID0gX2VudHJpZXMkdHJ4X2lkMi50eXBlLFxuICAgICAgICAgICAgZGF0YSA9IF9lbnRyaWVzJHRyeF9pZDIuZGF0YTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJmaWxsX29yZGVyXCI6XG4gICAgICAgICAgICAgICAgdmFyIHQxID0gbW9tZW50KHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElkID1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNlaXZlcy5hc3NldF9pZCArIFwiX1wiICsgZGF0YS5wYXlzLmFzc2V0X2lkO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IHByZXZpb3VzX2ZpbGxbbWFya2V0SWRdO1xuICAgICAgICAgICAgICAgIHZhciB0MCA9ICEhcHJldmlvdXMgPyBtb21lbnQocHJldmlvdXMudGltZXN0YW1wKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEhcHJldmlvdXMgJiZcbiAgICAgICAgICAgICAgICAgICAgdDEuaXNTYW1lKHQwLCBcImRheVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5kYXRhLnBheXMuYXNzZXRfaWQgPT09IGRhdGEucGF5cy5hc3NldF9pZCAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5kYXRhLnJlY2VpdmVzLmFzc2V0X2lkID09PSBkYXRhLnJlY2VpdmVzLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGF5cy5hbW91bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5wYXlzLmFtb3VudCwgMTApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHByZXZpb3VzLmRhdGEucGF5cy5hbW91bnQsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNlaXZlcy5hbW91bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5yZWNlaXZlcy5hbW91bnQsIDEwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwcmV2aW91cy5kYXRhLnJlY2VpdmVzLmFtb3VudCwgMTApO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZlZS5hbW91bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5mZWUuYW1vdW50LCAxMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJldmlvdXMuZGF0YS5mZWUuYW1vdW50LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNbdHJ4X2lkXS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbcHJldmlvdXMudHJ4X2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfZmlsbFttYXJrZXRJZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICB0cnhfaWQ6IHRyeF9pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiUmVtb3ZlZCBcIiArXG4gICAgICAgICAgICAocmVjb3JkS2V5cy5sZW5ndGggLSBPYmplY3Qua2V5cyhlbnRyaWVzKS5sZW5ndGgpICtcbiAgICAgICAgICAgIFwiIGZpbGxfb3JkZXIgZW50cmllcyBieSBncm91cGluZ1wiXG4gICAgKTtcbiAgICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRhKHJlY29yZERhdGEsIGFjY291bnRJZCwgYWNjb3VudE5hbWUpIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgb3V0LnB1c2goW1xuICAgICAgICBcIlR5cGVcIixcbiAgICAgICAgXCJCdXkgQW1vdW50XCIsXG4gICAgICAgIFwiQnV5IEN1cnJlbmN5XCIsXG4gICAgICAgIFwiU2VsbCBBbW91bnRcIixcbiAgICAgICAgXCJTZWxsIEN1cnJlbmN5XCIsXG4gICAgICAgIFwiRmVlIEFtb3VudFwiLFxuICAgICAgICBcIkZlZSBDdXJyZW5jeVwiLFxuICAgICAgICBcIkV4Y2hhbmdlXCIsXG4gICAgICAgIFwiVHJhZGUgR3JvdXBcIixcbiAgICAgICAgXCJDb21tZW50XCIsXG4gICAgICAgIFwiRGF0ZVwiXG4gICAgXSk7XG5cbiAgICB2YXIgdHlwZUNvdW50cyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50VHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICghdHlwZUNvdW50c1t0eXBlXSkgdHlwZUNvdW50c1t0eXBlXSA9IDA7XG4gICAgICAgIHR5cGVDb3VudHNbdHlwZV0rKztcbiAgICB9XG5cbiAgICBmb3IgKFxuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXMocmVjb3JkRGF0YSksXG4gICAgICAgICAgICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSxcbiAgICAgICAgICAgIF9pID0gMCxcbiAgICAgICAgICAgIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgO1xuXG4gICAgKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cnhfaWQgPSBfcmVmO1xuICAgICAgICB2YXIgX3JlY29yZERhdGEkdHJ4X2lkID0gcmVjb3JkRGF0YVt0cnhfaWRdLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gX3JlY29yZERhdGEkdHJ4X2lkLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIHR5cGUgPSBfcmVjb3JkRGF0YSR0cnhfaWQudHlwZSxcbiAgICAgICAgICAgIGRhdGEgPSBfcmVjb3JkRGF0YSR0cnhfaWQuZGF0YTtcblxuICAgICAgICB2YXIgZmVlID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXN0aW5nX2JhbGFuY2Vfd2l0aGRyYXdcIjpcbiAgICAgICAgICAgICAgICB2YXIgdmVzdGluZ0Z1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XG5cbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcbiAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm93bmVyID09PSBcIjEuMi4zMDY2NVwiICYmIHZlc3RpbmdGdW5kcy5hbW91bnQgPiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkluY29tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiRGVwb3NpdFwiLFxuICAgICAgICAgICAgICAgICAgICB2ZXN0aW5nRnVuZHMsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZlZSwgLy8gZGV2LmJpdHNoYXJlc2Jsb2Nrc1xuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lICsgXCIgOiBWZXN0aW5nIGJhbGFuY2Ugd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VfY2xhaW1cIjpcbiAgICAgICAgICAgICAgICB2YXIgYmFsYW5jZUNsYWltRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEudG90YWxfY2xhaW1lZCk7XG5cbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcbiAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICBcIkRlcG9zaXRcIixcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUNsYWltRnVuZHMsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgKyBcIiA6IEJhbGFuY2UgY2xhaW1cIlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICB2YXIgZnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuYW1vdW50KTtcbiAgICAgICAgICAgICAgICBmZWUgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50byA9PSBhY2NvdW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuZHMgY29taW5nIGluIHRvIHRoZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50byA9PT0gXCIxLjIuMzkxOTM4XCIgJiYgZGF0YS5mcm9tID09PSBcIjEuMi4zODEwODZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJEZXBvc2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLCAvLyBwYXkuc3ZrIGFuZCBiaXRzaGFyZXMtdWlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSArIFwiIDogRnJvbSBcIiArIGRhdGEuZnJvbVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgKyBcIjogVG8gXCIgKyBkYXRhLnRvXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJmaWxsX29yZGVyXCI6XG4gICAgICAgICAgICAgICAgdmFyIHNvbGRGdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5wYXlzKTtcbiAgICAgICAgICAgICAgICB2YXIgYm91Z2h0RnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEucmVjZWl2ZXMpO1xuICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xuICAgICAgICAgICAgICAgIGlmIChmZWUuY3VycmVuY3kgIT09IFwiQlRTXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdWdodEZ1bmRzLmN1cnJlbmN5ID09PSBmZWUuY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdWdodEZ1bmRzLmFtb3VudCAtPSBmZWUuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLmFtb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc29sZEZ1bmRzLmN1cnJlbmN5ID09PSBmZWUuY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRGdW5kcy5hbW91bnQgLT0gZmVlLmFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZS5hbW91bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXG4gICAgICAgICAgICAgICAgICAgIG91dCxcbiAgICAgICAgICAgICAgICAgICAgXCJUcmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3VnaHRGdW5kcyxcbiAgICAgICAgICAgICAgICAgICAgc29sZEZ1bmRzLFxuICAgICAgICAgICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfaXNzdWVcIjoge1xuICAgICAgICAgICAgICAgIHZhciBpc3N1ZWRGdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5hc3NldF90b19pc3N1ZSk7XG4gICAgICAgICAgICAgICAgZmVlID1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc3N1ZXIgPT09IGFjY291bnRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzc3VlX3RvX2FjY291bnQgPT09IGFjY291bnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVwb3NpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVkRnVuZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lICsgXCIgOiBJc3N1ZWQgdG8gYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3VwZGF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX2NyZWF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX3VwZGF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfd2hpdGVsaXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwid29ya2VyX2NyZWF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcImxpbWl0X29yZGVyX2NyZWF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcImxpbWl0X29yZGVyX2NhbmNlbFwiOlxuICAgICAgICAgICAgY2FzZSBcImNhbGxfb3JkZXJfdXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZlZS5hbW91bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlICsgXCIgZmVlXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZ2lzdHJhciA9PT0gYWNjb3VudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xuICAgICAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2l0aGRyYXdhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSArIFwiIGZlZVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfZnVuZF9mZWVfcG9vbFwiOiB7XG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmRGdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koe1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcbiAgICAgICAgICAgICAgICAgICAgb3V0LFxuICAgICAgICAgICAgICAgICAgICBcIldpdGhkcmF3YWxcIixcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZnVuZEZ1bmRzLFxuICAgICAgICAgICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJcIiArIHR5cGVcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIHR5cGU6XCIsIHR5cGUsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHBhcnNlRGF0YTogcGFyc2VEYXRhLFxuICAgIGZpbHRlckVudHJpZXM6IGZpbHRlckVudHJpZXMsXG4gICAgZ3JvdXBFbnRyaWVzOiBncm91cEVudHJpZXNcbn07XG4iLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKFwiYml0c2hhcmVzanNcIiksXG4gICAgQ2hhaW5TdG9yZSA9IF9yZXF1aXJlLkNoYWluU3RvcmU7XG5cbmZ1bmN0aW9uIHByZWNpc2lvblRvUmF0aW8ocCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICByZXR1cm4gTWF0aC5wb3coMTAsIHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUN1cnJlbmN5KGFtb3VudCkge1xuICAgIHZhciBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYW1vdW50LmFzc2V0X2lkKTtcbiAgICBpZiAoYXNzZXQpIGFzc2V0ID0gYXNzZXQudG9KUygpO1xuICAgIGVsc2Uge1xuICAgICAgICBhc3NldCA9IHtwcmVjaXNpb246IDV9O1xuICAgIH1cbiAgICB2YXIgcHJlY2lzaW9uUmF0aW8gPSBwcmVjaXNpb25Ub1JhdGlvKGFzc2V0LnByZWNpc2lvbik7XG5cbiAgICB2YXIgZnVsbEFtb3VudCA9IGFtb3VudC5hbW91bnQgLyBwcmVjaXNpb25SYXRpbztcbiAgICByZXR1cm4ge1xuICAgICAgICBhbW91bnQ6IGZ1bGxBbW91bnQsXG4gICAgICAgIGN1cnJlbmN5OiBhc3NldC5zeW1ib2wsXG4gICAgICAgIGFzc2V0X2lkOiBhbW91bnQuYXNzZXRfaWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBwcmludEFtb3VudChhbW91bnQpIHtcbiAgICBpZiAoIWFtb3VudC5hbW91bnQgfHwgIWFtb3VudC5jdXJyZW5jeSkgcmV0dXJuIFwiXCI7XG4gICAgdmFyIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhbW91bnQuYXNzZXRfaWQpO1xuICAgIGlmIChhc3NldCkgYXNzZXQgPSBhc3NldC50b0pTKCk7XG4gICAgZWxzZSB7XG4gICAgICAgIGFzc2V0ID0ge3ByZWNpc2lvbjogNX07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFtb3VudC5hbW91bnQudG9GaXhlZChhc3NldC5wcmVjaXNpb24pO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleChzdHIpIHtcbiAgICB2YXIgcGllY2VzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQocGllY2VzWzJdLCAxMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHBhcnNlQ3VycmVuY3k6IHBhcnNlQ3VycmVuY3ksXG4gICAgcHJpbnRBbW91bnQ6IHByaW50QW1vdW50LFxuICAgIGdldEluZGV4OiBnZXRJbmRleFxufTtcbiIsInZhciBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xudmFyIGJ0cyA9IHJlcXVpcmUoXCJiaXRzaGFyZXNqcy13c1wiKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZShcImJpdHNoYXJlc2pzXCIpLFxuICAgIENoYWluVHlwZXMgPSBfcmVxdWlyZS5DaGFpblR5cGVzLFxuICAgIENoYWluU3RvcmUgPSBfcmVxdWlyZS5DaGFpblN0b3JlLFxuICAgIEZldGNoQ2hhaW4gPSBfcmVxdWlyZS5GZXRjaENoYWluO1xuXG52YXIgb3BlcmF0aW9ucyA9IENoYWluVHlwZXMub3BlcmF0aW9ucztcblxudmFyIG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG52YXIgYmxvY2tEYXRhID0ge307XG52YXIgYXNzZXREYXRhID0ge307XG5cbmZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgYnRzLkFwaXMuaW5zdGFuY2UoY29uZmlnLmFwaU5vZGUsIHRydWUpXG4gICAgICAgICAgICAuaW5pdF9wcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5pbml0KGZhbHNlKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW9uIHRvIG5vZGU6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICBidHMuQXBpcy5pbnN0YW5jZSgpLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXIobmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIF9GZXRjaENoYWluO1xuXG4gICAgICAgIEZldGNoQ2hhaW4oXG4gICAgICAgICAgICBcImdldEFjY291bnRcIixcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAoKF9GZXRjaENoYWluID0ge30pLCAoX0ZldGNoQ2hhaW5bbmFtZV0gPSBmYWxzZSksIF9GZXRjaENoYWluKVxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWNjb3VudCA9IHJlc3VsdC50b0pTKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmJhbGFuY2VzKSBhY2NvdW50LmJhbGFuY2VzID0ge307XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNhbGxfb3JkZXJzKSBhY2NvdW50LmNhbGxfb3JkZXJzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0cyA9IE9iamVjdC5rZXlzKGFjY291bnQuYmFsYW5jZXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWNjb3VudC5jYWxsX29yZGVycy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYmFsYW5jZUluZGV4ID0gYWNjb3VudC5iYWxhbmNlcy5maW5kSW5kZXgoYiA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gYi5hc3NldF90eXBlID09PSBjLmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZDtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKGJhbGFuY2VJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBuZXdCYWxhbmNlID0gcGFyc2VJbnQoYWNjb3VudC5iYWxhbmNlc1tiYWxhbmNlSW5kZXhdLmJhbGFuY2UsIDEwKSArXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwYXJzZUludChjLmNvbGxhdGVyYWwsIDEwKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFjY291bnQuYmFsYW5jZXNbYmFsYW5jZUluZGV4XS5iYWxhbmNlID0gbmV3QmFsYW5jZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFzc2V0cy5wdXNoKGMuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFjY291bnQuYmFsYW5jZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmFsYW5jZTogYy5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFzc2V0X3R5cGU6IGMuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiBhc3NldHMsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzOiBhY2NvdW50LmJhbGFuY2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJsb2NrVGltZShibG9jaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKGJsb2NrRGF0YVtibG9ja10pIHJldHVybiByZXNvbHZlKGJsb2NrRGF0YVtibG9ja10pO1xuXG4gICAgICAgIGJ0cy5BcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgLmV4ZWMoXCJnZXRfYmxvY2tcIiwgW2Jsb2NrXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVtibG9ja10gPSBuZXcgRGF0ZShyZXN1bHQudGltZXN0YW1wICsgXCJaXCIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYmxvY2tEYXRhW2Jsb2NrXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2V0RGF0YShhc3NldCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIF9GZXRjaENoYWluMjtcblxuICAgICAgICBpZiAoYXNzZXREYXRhW2Fzc2V0XSkgcmV0dXJuIHJlc29sdmUoYXNzZXREYXRhW2Fzc2V0XSk7XG5cbiAgICAgICAgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgIFwiZ2V0T2JqZWN0XCIsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICgoX0ZldGNoQ2hhaW4yID0ge30pLCAoX0ZldGNoQ2hhaW4yW2Fzc2V0XSA9IGZhbHNlKSwgX0ZldGNoQ2hhaW4yKVxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHJlc3VsdC50b0pTKCk7XG4gICAgICAgICAgICAgICAgYXNzZXREYXRhW2Fzc2V0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBhLnN5bWJvbC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgL09QRU5cXC58QlJJREdFXFwufFJVREVYXFwufEdERVhcXC58QkxPQ0tcXC4vLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGEucHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFzc2V0RGF0YVthc3NldF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQmxvY2tUaW1lcyhvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBvcGVyYXRpb25zLm1hcChmdW5jdGlvbihvcCkge1xuICAgICAgICAgICAgaWYgKG9wLmJsb2NrX3RpbWUpXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhW29wLmJsb2NrX251bV0gPSBuZXcgRGF0ZShvcC5ibG9ja190aW1lKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRCbG9ja1RpbWUob3AuYmxvY2tfbnVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQXNzZXRzKG9wZXJhdGlvbnMsIGxpc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgYXNzZXRzID0ge307XG4gICAgICAgIGlmIChvcGVyYXRpb25zKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBvcHNbcmVjb3JkLm9wWzBdXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHJhbnNmZXIgcmVjb3JkLm9wOlwiLCByZWNvcmQub3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5hbW91bnQuYXNzZXRfaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uZmVlLmFzc2V0X2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbF9vcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLnBheXMuYXNzZXRfaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0ucmVjZWl2ZXMuYXNzZXRfaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uZmVlLmFzc2V0X2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXNzZXRfaXNzdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5hc3NldF90b19pc3N1ZS5hc3NldF9pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5mZWUuYXNzZXRfaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgYXNzZXRzW2VudHJ5XSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGFzc2V0cykuZm9yRWFjaChmdW5jdGlvbihhc3NldF9pZCkge1xuICAgICAgICAgICAgaWYgKCFhc3NldERhdGFbYXNzZXRfaWRdICYmICEhYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGdldEFzc2V0RGF0YShhc3NldF9pZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2V0KGlkKSB7XG4gICAgcmV0dXJuIGFzc2V0RGF0YVtpZF07XG59XG5cbmZ1bmN0aW9uIGdldEJsb2NrKGJsb2NrX251bSkge1xuICAgIHJldHVybiBibG9ja0RhdGFbYmxvY2tfbnVtXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29ubmVjdDogY29ubmVjdCxcbiAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0LFxuICAgIGdldFVzZXI6IGdldFVzZXIsXG4gICAgZ2V0QmxvY2tUaW1lOiBnZXRCbG9ja1RpbWUsXG4gICAgZ2V0QXNzZXREYXRhOiBnZXRBc3NldERhdGEsXG4gICAgcmVzb2x2ZUFzc2V0czogcmVzb2x2ZUFzc2V0cyxcbiAgICByZXNvbHZlQmxvY2tUaW1lczogcmVzb2x2ZUJsb2NrVGltZXMsXG4gICAgZ2V0QXNzZXQ6IGdldEFzc2V0LFxuICAgIGdldEJsb2NrOiBnZXRCbG9ja1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFwaU5vZGU6IFwid3NzOi8vZXUubm9kZXMuYml0c2hhcmVzLndzXCIsIC8vIHdzczovL2V1Lm5vZGVzLmJpdHNoYXJlcy53cyBpcyBhbiBhbHRlcm5hdGl2ZVxuICAgIHVzZUVTOiB0cnVlLCAvLyB1c2UgZWxhc3RpYyBzZWFyY2hcbiAgICBlc05vZGU6IFwiaHR0cHM6Ly9lc3dyYXBwZXIuYml0c2hhcmVzLmV1XCIsXG4gICAgYm90UGF5bWVudEFjY291bnRzOiBbXVxufTtcbiIsInZhciBidHMgPSByZXF1aXJlKFwiYml0c2hhcmVzanMtd3NcIik7XG52YXIgZmV0Y2hDbGllbnQgPSB2b2lkIDA7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNCcm93c2VyKSB7XG4gICAgaWYgKGlzQnJvd3NlcikgZmV0Y2hDbGllbnQgPSBmZXRjaDtcbiAgICBlbHNlIHtcbiAgICAgICAgZmV0Y2hDbGllbnQgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY2NvdW50SGlzdG9yeUVTKGFjY291bnRfaWQsIGxpbWl0LCBzdGFydCkge1xuICAgICAgICB2YXIgZXNOb2RlID1cbiAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBhcmd1bWVudHNbM11cbiAgICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9lc3dyYXBwZXIuYml0c2hhcmVzLmV1XCI7XG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcInF1ZXJ5XCIsXG4gICAgICAgICAgICBlc05vZGUgK1xuICAgICAgICAgICAgICAgIFwiL2dldF9hY2NvdW50X2hpc3Rvcnk/YWNjb3VudF9pZD1cIiArXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZCArXG4gICAgICAgICAgICAgICAgXCImZnJvbV89XCIgK1xuICAgICAgICAgICAgICAgIHN0YXJ0ICtcbiAgICAgICAgICAgICAgICBcIiZzaXplPVwiICtcbiAgICAgICAgICAgICAgICBsaW1pdCArXG4gICAgICAgICAgICAgICAgXCImc29ydF9ieT1ibG9ja19kYXRhLmJsb2NrX3RpbWUmdHlwZT1kYXRhJmFnZ19maWVsZD1vcGVyYXRpb25fdHlwZVwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGZldGNoQ2xpZW50KFxuICAgICAgICAgICAgICAgIGVzTm9kZSArXG4gICAgICAgICAgICAgICAgICAgIFwiL2dldF9hY2NvdW50X2hpc3Rvcnk/YWNjb3VudF9pZD1cIiArXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQgK1xuICAgICAgICAgICAgICAgICAgICBcIiZmcm9tXz1cIiArXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICAgXCImc2l6ZT1cIiArXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0ICtcbiAgICAgICAgICAgICAgICAgICAgXCImc29ydF9ieT1ibG9ja19kYXRhLmJsb2NrX3RpbWUmdHlwZT1kYXRhJmFnZ19maWVsZD1vcGVyYXRpb25fdHlwZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHMgPSByZXN1bHQubWFwKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHIuYWNjb3VudF9oaXN0b3J5Lm9wZXJhdGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcDogSlNPTi5wYXJzZShyLm9wZXJhdGlvbl9oaXN0b3J5Lm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIub3BlcmF0aW9uX2hpc3Rvcnkub3BlcmF0aW9uX3Jlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfbnVtOiByLmJsb2NrX2RhdGEuYmxvY2tfbnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IHIuYmxvY2tfZGF0YS5ibG9ja190aW1lICsgXCJaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9wcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY2NvdW50SGlzdG9yeShhY2NvdW50X2lkLCBzdG9wLCBsaW1pdCwgc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgYnRzLkFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXG4gICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfYWNjb3VudF9oaXN0b3J5XCIsIFthY2NvdW50X2lkLCBzdG9wLCBsaW1pdCwgc3RhcnRdKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcGVyYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRBY2NvdW50SGlzdG9yeTogZ2V0QWNjb3VudEhpc3RvcnksXG4gICAgICAgIGdldEFjY291bnRIaXN0b3J5RVM6IGdldEFjY291bnRIaXN0b3J5RVNcbiAgICB9O1xufTtcbiIsIi8vIGVtcHR5IChudWxsLWxvYWRlcikiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2paQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=