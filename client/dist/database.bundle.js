(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(k([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=m,s(x,"constructor",m),s(m,"constructor",g),g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(B),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),B(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;B(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var e=r(757),n=r.n(e);let o,i;const a=new WeakMap,c=new WeakMap,s=new WeakMap,u=new WeakMap,f=new WeakMap;let l={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return c.get(t);if("objectStoreNames"===e)return t.objectStoreNames||s.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return p(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(d(this),t),p(a.get(this))}:function(...t){return p(e.apply(d(this),t))}:function(t,...r){const n=e.call(d(this),t,...r);return s.set(n,t.sort?t.sort():[t]),p(n)}:(t instanceof IDBTransaction&&function(t){if(c.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),n()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));c.set(t,e)}(t),r=t,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>r instanceof t))?new Proxy(t,l):t);var e,r}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(p(t.result)),n()},i=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&a.set(e,t)})).catch((()=>{})),f.set(e,t),e}(t);if(u.has(t))return u.get(t);const e=h(t);return e!==t&&(u.set(t,e),f.set(e,t)),e}const d=t=>f.get(t);function v(t,e,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=p(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(p(a.result),t.oldVersion,t.newVersion,p(a.transaction))})),r&&a.addEventListener("blocked",(()=>r())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const y=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],m=new Map;function w(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(m.get(e))return m.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=g.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!y.includes(r))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[r](...e),o&&i.done]))[0]};return m.set(e,i),i}var b;b=l,l={...b,get:(t,e,r)=>w(t,e)||b.get(t,e,r),has:(t,e)=>!!w(t,e)||b.has(t,e)},function(){var e,r=(e=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("JATE database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("JATE database created"))}}));case 1:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,s,"next",e)}function s(e){t(a,o,i,c,s,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}()()})()})();