"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[581],{259:(e,t,s)=>{s.d(t,{B:()=>n}),s(913);class n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}},3125:(e,t,s)=>{s.d(t,{V:()=>n}),s(913);class n extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}},7524:(e,t,s)=>{s(3125),s(913)},7594:(e,t,s)=>{function n(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}async function a(e,t,s,a){const r=n(t.url,s);if(t.url===r)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c)if(r===n(t.url,s))return e.match(t,a)}s.d(t,{F:()=>a}),s(913)},2536:(e,t,s)=>{s.d(t,{x:()=>r}),s(913);const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),r={updateDetails:e=>{(e=>{for(const t of Object.keys(n))e(t)})((t=>{"string"==typeof e[t]&&(n[t]=e[t])}))},getGoogleAnalyticsName:e=>e||a(n.googleAnalytics),getPrecacheName:e=>e||a(n.precache),getPrefix:()=>n.prefix,getRuntimeName:e=>e||a(n.runtime),getSuffix:()=>n.suffix}},3123:(e,t,s)=>{let n;function a(){if(void 0===n){const e=new Response("");if("body"in e)try{new Response(e.body),n=!0}catch(e){n=!1}n=!1}return n}s.d(t,{x:()=>a}),s(913)},7327:(e,t,s)=>{function n(e){e.then((()=>{}))}s.d(t,{f:()=>n}),s(913)},5632:(e,t,s)=>{s.d(t,{Y:()=>a}),s(120);var n=s(7565);async function a(){for(const e of n.f)await e()}s(913)},3119:(e,t,s)=>{s.d(t,{C:()=>n}),s(913);const n=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},120:(e,t,s)=>{s.d(t,{k:()=>n}),s(913);const n=null},6902:(e,t,s)=>{function n(e){return new Promise((t=>setTimeout(t,e)))}s.d(t,{V:()=>n}),s(913)},5392:(e,t,s)=>{function n(e,t){const s=t();return e.waitUntil(s),s}s.d(t,{A:()=>n}),s(913)},913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},1194:(e,t,s)=>{s.d(t,{S:()=>r});var n=s(3123),a=s(3125);async function r(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new a.V("cross-origin-copy-response",{origin:s});const r=e.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},c=t?t(i):i,o=(0,n.x)()?r.body:await r.blob();return new Response(o,c)}s(913)},7565:(e,t,s)=>{s.d(t,{f:()=>n}),s(913);const n=new Set},6303:(e,t,s)=>{s.d(t,{t:()=>a}),s(120),s(7524);var n=s(7565);function a(e){n.f.add(e)}s(913)},6550:()=>{try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},7977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},4989:(e,t,s)=>{s.d(t,{t:()=>a}),s(7524),s(120);var n=s(5188);s(9080);class a extends n.A{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},5188:(e,t,s)=>{s.d(t,{A:()=>r}),s(7524);var n=s(1505),a=s(8179);s(9080);class r{constructor(e,t,s=n.g){this.handler=(0,a.M)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=(0,a.M)(e)}}},1491:(e,t,s)=>{s.d(t,{F:()=>i}),s(7524),s(3119);var n=s(1505),a=(s(120),s(8179)),r=s(3125);s(9080);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t=n.g){this._defaultHandlerMap.set(t,(0,a.M)(e))}setCatchHandler(e){this._catchHandler=(0,a.M)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r.V("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r.V("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},9080:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},5917:(e,t,s)=>{s.d(t,{X:()=>c}),s(120);var n=s(3125),a=s(5188),r=s(4989),i=s(3486);function c(e,t,s){let c;if("string"==typeof e){const n=new URL(e,location.href),r=({url:e})=>e.href===n.href;c=new a.A(r,t,s)}else if(e instanceof RegExp)c=new r.t(e,t,s);else if("function"==typeof e)c=new a.A(e,t,s);else{if(!(e instanceof a.A))throw new n.V("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return(0,i.u)().registerRoute(c),c}s(9080)},1505:(e,t,s)=>{s.d(t,{g:()=>n}),s(9080);const n="GET"},3486:(e,t,s)=>{s.d(t,{u:()=>r});var n=s(1491);let a;s(9080);const r=()=>(a||(a=new n.F,a.addFetchListener(),a.addCacheListener()),a)},8179:(e,t,s)=>{s.d(t,{M:()=>n}),s(7524),s(9080);const n=e=>e&&"object"==typeof e?e:{handle:e}},951:(e,t,s)=>{s.d(t,{_:()=>i});var n=s(2536),a=s(3125),r=(s(120),s(3119),s(3333));s(6873);class i{constructor(e={}){this.cacheName=n.x.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new r.G(this,{event:t,request:s,params:n}),i=this._getResponse(a,s,t);return[i,this._awaitComplete(i,a,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new a.V("no-response",{url:t.url})}catch(a){if(a instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:a,event:s,request:t}),n)break;if(!n)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))n=await a({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}},3333:(e,t,s)=>{s.d(t,{G:()=>l}),s(7524);var n=s(7594),a=s(259),r=s(5632),i=s(3119),c=(s(120),s(6902)),o=s(3125);function h(e){return"string"==typeof e?new Request(e):e}s(6873);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new a.B,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new o.V("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await(0,c.V)(0);const a=await this.getCacheKey(s,"write");if(!t)throw new o.V("cache-put-with-no-response",{url:(0,i.C)(a.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:d}=this._strategy,f=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),g=p?await(0,n.F)(f,a.clone(),["__WB_REVISION__"],d):null;try{await f.put(a,p?l.clone():l)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await(0,r.Y)(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=h(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},6873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}},4634:(e,t,s)=>{s.d(t,{wW:()=>a,Li:()=>r}),s(6303),s(7524);var n=s(2536);function a(){self.addEventListener("activate",(()=>self.clients.claim()))}function r(e){n.x.updateDetails(e)}s(7594),s(913),s(3123),s(7327),s(259),s(5632),s(3119),s(120),s(6902),s(5392),s(3125),s(1194)},4798:(e,t,s)=>{s.d(t,{Q:()=>q}),s(7524);var n=s(7327),a=(s(120),s(3125));let r,i;const c=new WeakMap,o=new WeakMap,h=new WeakMap,l=new WeakMap,u=new WeakMap;let d={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return p(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(c.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...s){const n=t.call(g(this),e,...s);return h.set(n,e.sort?e.sort():[e]),p(n)}:(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));o.set(e,t)}(e),s=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>s instanceof e))?new Proxy(e,d):e);var t,s}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(p(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),u.set(t,e)),t}const g=e=>u.get(e),m=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],y=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=w.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!m.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return y.set(t,r),r}var v;v=d,d={...v,get:(e,t,s)=>_(e,t)||v.get(e,t,s),has:(e,t)=>!!_(e,t)||v.has(e,t)},s(6550);const b="cache-entries",R=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class x{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(b,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),p(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=R(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(b,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(b,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(b).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const e of a)await s.delete(b,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+R(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=p(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(p(i.result),e.oldVersion,e.newVersion,p(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class C{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new x(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,(0,n.f)(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var L=s(2536),k=(s(3119),s(6303));class q{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);(0,n.f)(i.expireEntries());const c=i.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return r?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(0,k.t)((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===L.x.getRuntimeName())throw new a.V("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new C(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}},522:(e,t,s)=>{s.d(t,{aB:()=>y,Zo:()=>_}),s(7524);var n=s(2536),a=(s(120),s(3125)),r=s(5392);function i(e){if(!e)throw new a.V("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a.V("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}s(7977);class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class o{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}var h=s(1194),l=(s(3119),s(951));class u extends l._{constructor(e={}){e.cacheName=n.x.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new a.V("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const a=n.integrity,r=e.integrity,i=!r||r===a;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||a:void 0})),a&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a.V("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==u.copyRedirectedCacheableResponsesPlugin&&(n===u.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}u.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},u.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await(0,h.S)(e):e};class d{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:n.x.getPrecacheName(e),plugins:[...t,new o({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=i(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a.V("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a.V("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return(0,r.A)(e,(async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return(0,r.A)(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new a.V("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let f;const p=()=>(f||(f=new d),f);var g=s(5917),m=s(5188);class w extends m.A{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function y(){self.addEventListener("activate",(e=>{const t=n.x.getPrecacheName();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))}))}function _(e,t){!function(e){p().precache(e)}(e),function(e){const t=p(),s=new w(t,e);(0,g.X)(s)}(t)}},89:(e,t,s)=>{s.d(t,{X0:()=>n.X}),s(7524),s(120),s(5188),s(9080),s(4989);var n=s(5917);s(1491),s(3486)},6362:(e,t,s)=>{s.d(t,{bo:()=>r,ne:()=>c}),s(7524),s(120);var n=s(3125),a=s(951);s(3119),s(6873);class r extends a._{async _handle(e,t){let s,a=await t.cacheMatch(e);if(a);else try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new n.V("no-response",{url:e.url,error:s});return a}}const i={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class c extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(i),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let r;if(this._networkTimeoutSeconds){const{id:n,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=n,a.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});a.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await i)());if(!c)throw new n.V("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let a,r;try{r=await n.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&r||(r=await n.cacheMatch(t)),r}}s(6902),s(3333)}}]);
//# sourceMappingURL=581.bundle.js.map