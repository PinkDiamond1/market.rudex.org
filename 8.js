webpackJsonp([8],{1230:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(111),u=n(40),l=n(39),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance")),t=this.props.balance.get("asset_type");return c.a.createElement(s.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo,replace:this.props.replace})}}]),t}(c.a.Component);f.propTypes={balance:u.a.ChainObject.isRequired,assetInfo:c.a.PropTypes.node},t.a=n.i(l.a)(f,{keep_updating:!0})},1284:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,c=n(1),s=n.n(c),u=n(48),l=n.n(u),p=n(6),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",loading:!0},e}return o(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/dictionary.json").then(function(t){return t.json().then(function(t){i=new Set(t.en.split(",")),e.setState({loading:!1})})}).catch(function(e){console.log("fetch dictionary error:",e)})}},{key:"_checkBrainKey",value:function(){var e=this.state.brnkey.split(" "),t=[];e.forEach(function(e,n){if(""!==e){var r=e.toLowerCase();r=r.match(/[a-z]+/),null===r||i.has(r[0])?t.push(s.a.createElement("span",{key:n,style:{padding:"1px",margin:"1px"}},e)):t.push(s.a.createElement(y,{key:n},e))}});var n=void 0,r=!0,a=!0;return t.length>0&&(this.state.brnkey.length<50?(n=this.state.brnkey.length+" characters (50 minimum)",a=!1):t.length<16?n=t.length+" words (16 recommended)":(n=t.length+" words",r=!1)),{warn:r,valid:a,word_count_label:n,checked_words:t}}},{key:"render",value:function(){if(this.state.loading||!i)return s.a.createElement("div",{style:{padding:20}},"Fetching dictionary....");var e=this._checkBrainKey(),t=e.warn,n=e.word_count_label,r=e.checked_words;return s.a.createElement("span",{className:""},s.a.createElement("div",null,s.a.createElement("textarea",{tabIndex:this.props.tabIndex||1,onChange:this.formChange.bind(this),value:this.state.brnkey,id:"brnkey",style:{height:100,minWidth:450}}),s.a.createElement("div",{style:{textAlign:"left"},className:"grid-content no-padding no-overflow"},r),this.state.check_digits&&!this.props.hideCheckDigits?s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("pre",{className:"no-overflow"},this.state.check_digits," * Check Digits"),s.a.createElement("br",null)):null,s.a.createElement("p",null,s.a.createElement("i",{className:l()({error:t})},n))))}},{key:"formChange",value:function(e){var t=e.target,n=t.id,r=t.value,a=this._checkBrainKey(),o=a.valid,i={};if(i[n]=r,"brnkey"===n){var c=p.d.normalize_brainKey(r);this.props.onChange(c.length<50?null:c),i.check_digits=c.length<50?null:p.n.sha1(c).toString("hex").substring(0,4)}this.setState(i),this.props.errorCallback&&this.props.errorCallback(o)}}]),t}(c.Component);h.propTypes={onChange:c.PropTypes.func.isRequired},t.a=h;var y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){return s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000",padding:"1px",margin:"1px"}},s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000"}},this.props.children))}}]),t}(c.Component)},1387:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(10),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"setBrainkey",value:function(e){return e}}]),e}(),c=a.a.createActions(i);t.a=c},1463:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(1230),u=n(264),l=n(40),p=n(39),f=n(78),h=n(6),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),y(t,[{key:"onCardClick",value:function(e){e.preventDefault();var t=this.props.account.get("name");this.context.router.push("/account/"+t+"/overview/")}},{key:"render",value:function(){var e=null,t=null,n=!1;if(this.props.account){e=this.props.account.get("name");var r=this.props.account.get("balances");r&&(t=r.map(function(e){return h.b.getObject(e).get("balance")?c.a.createElement("li",{key:e},c.a.createElement(s.a,{balance:e})):null}).toArray()),n=f.a.isMyAccount(this.props.account)}return c.a.createElement("div",{className:"grid-content account-card",onClick:this.onCardClick.bind(this)},c.a.createElement("div",{className:"card"+(n?" my-account":"")},c.a.createElement("h4",{className:"text-center"},e),c.a.createElement("div",{className:"card-content clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement(u.a,{account:e,size:{height:64,width:64}})),c.a.createElement("ul",{className:"balances"},t))))}}]),t}(c.a.Component);b.contextTypes={router:c.a.PropTypes.object.isRequired},b.propTypes={account:l.a.ChainAccount.isRequired},t.a=n.i(p.a)(b)},1514:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return{private_key:e,public_string:e.toPublicKey().toPublicKeyString()}}var c=n(10),s=n(26),u=n.n(s),l=n(6),p=n(67),f=n(1387),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(){function e(){o(this,e)}return h(e,null,[{key:"getInstance",value:function(t){var n=e.instances.get(t);n||(n=c.a.createStore(b,"BrainkeyStore"),e.instances.set(t,n));var r=t+" subscribed_instance";if(!e.instances.get(r)){var a=n.chainStoreUpdate.bind(n);l.b.subscribe(a),e.instances.set(r,a)}return n}},{key:"closeInstance",value:function(t){var n=e.instances.get(t);if(!n)throw new Error("unknown instance "+t);var r=t+" subscribed_instance",a=e.instances.get(r);e.instances.delete(r),l.b.unsubscribe(a),n.clearCache()}}]),e}();y.instances=new Map,t.a=y;var b=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clearCache(),e.bindListeners({onSetBrainkey:f.a.setBrainkey}),e._export("inSync","chainStoreUpdate","clearCache"),e}return a(t,e),h(t,[{key:"clearCache",value:function(){this.state={brnkey:"",account_ids:u.a.Set()},this.derived_keys=new Array,this.account_ids_by_key=null}},{key:"onSetBrainkey",value:function(e){this.clearCache(),this.setState({brnkey:e}),this.deriveKeys(e),this.chainStoreUpdate()}},{key:"inSync",value:function(){return this.derived_keys.forEach(function(e){if(d(e))return!1}),!0}},{key:"chainStoreUpdate",value:function(){this.derived_keys.length&&this.account_ids_by_key!==l.b.account_ids_by_key&&(this.account_ids_by_key=l.b.account_ids_by_key,this.updateAccountIds())}},{key:"deriveKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.brnkey,t=this.derived_keys.length,n=l.d.get_brainPrivateKey(e,t),r=i(n);this.derived_keys.push(r),this.derived_keys.length<10&&this.deriveKeys(e)}},{key:"updateAccountIds",value:function(){var e=this,t=u.a.Set().withMutations(function(t){var n=function(e){var n=l.b.getAccountRefsOfKey(e);n&&n.forEach(function(e){t.add(e)})};e.derived_keys.forEach(function(e){return n(e.public_string)})});t.equals(this.state.account_ids)||(this.state.account_ids=t,this.setState({account_ids:t}))}}]),t}(p.a),d=function(e){return void 0===l.b.getAccountRefsOfKey(e.public_string)}},416:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"BrainkeyInputAccept",function(){return P});var i=n(1),c=n.n(i),s=n(65),u=(n.n(s),n(26)),l=n.n(u),p=n(48),f=n.n(p),h=n(1387),y=n(1514),b=n(39),d=n(40),v=n(1284),m=n(114),_=(n.n(m),n(19)),g=n.n(_),k=n(1463),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E={listenTo:function(){return[y.a.getInstance("wmc")]},getProps:function(){return y.a.getInstance("wmc").getState()}},O=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"componentWillUnmount",value:function(){y.a.closeInstance("wmc")}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement("h3",null,c.a.createElement(g.a,{content:"wallet.brainkey"})),c.a.createElement(P,null,c.a.createElement(j,null)))}}]),t}(i.Component);O=n.i(s.connect)(O,E),t.default=O;var j=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"render",value:function(){var e=this.props.brnkey.substring(0,10);return c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement("span",{className:""},e),"…"),c.a.createElement("p",null),this.props.account_ids.size?c.a.createElement(C,{accounts:l.a.List(this.props.account_ids.toArray())}):c.a.createElement("h5",null,c.a.createElement(g.a,{content:"wallet.no_accounts"})))}}]),t}(i.Component);j=n.i(s.connect)(j,E);var C=function(){function e(){r(this,e)}return w(e,[{key:"render",value:function(){var e=n.i(m.pairs)(this.props.accounts).filter(function(e){return!!e[1]}).map(function(e){return e[1].get("name")}).sort().map(function(e){return c.a.createElement(k.a,{key:e,account:e})});return c.a.createElement("span",null,e)}}]),e}();C.propTypes={accounts:d.a.ChainAccountsList.isRequired},C=n.i(b.a)(C,{keep_updating:!0});var P=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",accept:!1},e}return o(t,e),w(t,[{key:"render",value:function(){if(this.state.accept)return c.a.createElement("span",null,this.props.children);var e=this.state.brnkey&&""!==this.state.brnkey;return c.a.createElement("span",{className:"grid-container"},c.a.createElement("div",null,c.a.createElement(v.a,{onChange:this.onBrainkeyChange.bind(this)})),c.a.createElement("div",{className:f()("button success",{disabled:!e}),onClick:this.onAccept.bind(this)},c.a.createElement(g.a,{content:"wallet.accept"})))}},{key:"onBrainkeyChange",value:function(e){this.setState({brnkey:e})}},{key:"onAccept",value:function(){this.setState({accept:!0}),h.a.setBrainkey(this.state.brnkey)}}]),t}(i.Component)}});
//# sourceMappingURL=8.js.map