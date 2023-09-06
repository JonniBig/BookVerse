import"./mobileMenuBurger-9c65e612.js";/* empty css               */function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Qe}=Object.prototype,{getPrototypeOf:se}=Object,J=(e=>t=>{const n=Qe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),L=e=>(e=e.toLowerCase(),t=>J(t)===e),z=e=>t=>typeof t===e,{isArray:B}=Array,D=z("undefined");function Ye(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=L("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const et=z("string"),O=z("function"),Le=z("number"),W=e=>e!==null&&typeof e=="object",tt=e=>e===!0||e===!1,j=e=>{if(J(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=L("Date"),ot=L("File"),rt=L("Blob"),st=L("FileList"),it=e=>W(e)&&O(e.pipe),at=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=J(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},ct=L("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,r;if(typeof e!="object"&&(e=[e]),B(e))for(o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(o=0;o<i;o++)l=s[o],t.call(null,e[l],l,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let o=n.length,r;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!D(e)&&e!==Ce;function te(){const{caseless:e}=Te(this)&&this||{},t={},n=(o,r)=>{const s=e&&Re(t,r)||r;j(t[s])&&j(o)?t[s]=te(t[s],o):j(o)?t[s]=te({},o):B(o)?t[s]=o.slice():t[s]=o};for(let o=0,r=arguments.length;o<r;o++)arguments[o]&&F(arguments[o],n);return t}const ut=(e,t,n,{allOwnKeys:o}={})=>(F(t,(r,s)=>{n&&O(r)?e[s]=Oe(r,n):e[s]=r},{allOwnKeys:o}),e),dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ft=(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pt=(e,t,n,o)=>{let r,s,i;const l={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)i=r[s],(!o||o(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return o!==-1&&o===n},ht=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),bt=(e,t)=>{const o=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=o.next())&&!r.done;){const s=r.value;t.call(e,s[0],s[1])}},Et=(e,t)=>{let n;const o=[];for(;(n=e.exec(t))!==null;)o.push(n);return o},wt=L("HTMLFormElement"),gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,r){return o.toUpperCase()+r}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),St=L("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};F(n,(r,s)=>{let i;(i=t(r,s,e))!==!1&&(o[s]=i||r)}),Object.defineProperties(e,o)},kt=e=>{xe(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(O(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ot=(e,t)=>{const n={},o=r=>{r.forEach(s=>{n[s]=!0})};return B(e)?o(e):o(String(e).split(t)),n},At=()=>{},Lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Be={DIGIT:pe,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+pe},Rt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:o}=t;for(;e--;)n+=t[Math.random()*o|0];return n};function Ct(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(o,r)=>{if(W(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[r]=o;const s=B(o)?[]:{};return F(o,(i,l)=>{const f=n(i,r+1);!D(f)&&(s[l]=f)}),t[r]=void 0,s}}return o};return n(e,0)},xt=L("AsyncFunction"),Bt=e=>e&&(W(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:B,isArrayBuffer:Ae,isBuffer:Ye,isFormData:at,isArrayBufferView:Ze,isString:et,isNumber:Le,isBoolean:tt,isObject:W,isPlainObject:j,isUndefined:D,isDate:nt,isFile:ot,isBlob:rt,isRegExp:St,isFunction:O,isStream:it,isURLSearchParams:ct,isTypedArray:yt,isFileList:st,forEach:F,merge:te,extend:ut,trim:lt,stripBOM:dt,inherits:ft,toFlatObject:pt,kindOf:J,kindOfTest:L,endsWith:mt,toArray:ht,forEachEntry:bt,matchAll:Et,isHTMLForm:wt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:xe,freezeMethods:kt,toObjectSet:Ot,toCamelCase:gt,noop:At,toFiniteNumber:Lt,findKey:Re,global:Ce,isContextDefined:Te,ALPHABET:Be,generateString:Rt,isSpecCompliantForm:Ct,toJSONObject:Tt,isAsyncFn:xt,isThenable:Bt};function h(e,t,n,o,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),r&&(this.response=r)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=h.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(h,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});h.from=(e,t,n,o,r,s)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),h.call(i,e.message,t,n,o,r),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Nt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function _e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function me(e,t,n){return e?e.concat(t).map(function(r,s){return r=_e(r),!n&&s?"["+r+"]":r}).join(n?".":""):t}function Pt(e){return a.isArray(e)&&!e.some(ne)}const _t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,S){return!a.isUndefined(S[p])});const o=n.metaTokens,r=n.visitor||u,s=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(r))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,p,S){let g=d;if(d&&!S&&typeof d=="object"){if(a.endsWith(p,"{}"))p=o?p:p.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Pt(d)||(a.isFileList(d)||a.endsWith(p,"[]"))&&(g=a.toArray(d)))return p=_e(p),g.forEach(function(C,N){!(a.isUndefined(C)||C===null)&&t.append(i===!0?me([p],N,s):i===null?p:p+"[]",c(C))}),!1}return ne(d)?!0:(t.append(me(S,p,s),c(d)),!1)}const m=[],b=Object.assign(_t,{defaultVisitor:u,convertValue:c,isVisitable:ne});function y(d,p){if(!a.isUndefined(d)){if(m.indexOf(d)!==-1)throw Error("Circular reference detected in "+p.join("."));m.push(d),a.forEach(d,function(g,k){(!(a.isUndefined(g)||g===null)&&r.call(t,g,a.isString(k)?k.trim():k,p,b))===!0&&y(g,p?p.concat(k):[k])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function ie(e,t){this._pairs=[],e&&V(e,this,t)}const De=ie.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(o){return t.call(this,o,he)}:he;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Dt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const o=n&&n.encode||Dt,r=n&&n.serialize;let s;if(r?s=r(t,n):s=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(o),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ft{constructor(){this.handlers=[]}use(t,n,o){return this.handlers.push({fulfilled:t,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(o){o!==null&&t(o)})}}const ye=Ft,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams<"u"?URLSearchParams:ie,jt=typeof FormData<"u"?FormData:null,vt=typeof Blob<"u"?Blob:null,Mt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),It=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:jt,Blob:vt},isStandardBrowserEnv:Mt,isStandardBrowserWebWorkerEnv:It,protocols:["http","https","file","blob","url","data"]};function qt(e,t){return V(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,o,r,s){return A.isNode&&a.isBuffer(n)?(this.append(o,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Ht(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $t(e){const t={},n=Object.keys(e);let o;const r=n.length;let s;for(o=0;o<r;o++)s=n[o],t[s]=e[s];return t}function je(e){function t(n,o,r,s){let i=n[s++];const l=Number.isFinite(+i),f=s>=n.length;return i=!i&&a.isArray(r)?r.length:i,f?(a.hasOwnProp(r,i)?r[i]=[r[i],o]:r[i]=o,!l):((!r[i]||!a.isObject(r[i]))&&(r[i]=[]),t(n,o,r[i],s)&&a.isArray(r[i])&&(r[i]=$t(r[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(o,r)=>{t(Ht(o),r,n,0)}),n}return null}function Jt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const ae={transitional:Ue,adapter:A.isNode?"http":"xhr",transformRequest:[function(t,n){const o=n.getContentType()||"",r=o.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return r&&r?JSON.stringify(je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return qt(t,this.formSerializer).toString();if((l=a.isFileList(t))||o.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const n=this.transitional||ae.transitional,o=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&a.isString(t)&&(o&&!this.responseType||r)){const i=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ae.headers[e]={}});const ce=ae,zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wt=e=>{const t={};let n,o,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),n=i.substring(0,r).trim().toLowerCase(),o=i.substring(r+1).trim(),!(!n||t[n]&&zt[n])&&(n==="set-cookie"?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)}),t},be=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function Vt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}const Kt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,o,r){if(a.isFunction(o))return o.call(this,t,n);if(r&&(t=n),!!a.isString(t)){if(a.isString(o))return t.indexOf(o)!==-1;if(a.isRegExp(o))return o.test(t)}}function Gt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,o)=>n.toUpperCase()+o)}function Xt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(r,s,i){return this[o].call(this,t,r,s,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,o){const r=this;function s(l,f,c){const u=P(f);if(!u)throw new Error("header name must be a non-empty string");const m=a.findKey(r,u);(!m||r[m]===void 0||c===!0||c===void 0&&r[m]!==!1)&&(r[m||f]=v(l))}const i=(l,f)=>a.forEach(l,(c,u)=>s(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Kt(t)?i(Wt(t),n):t!=null&&s(n,t,o),this}get(t,n){if(t=P(t),t){const o=a.findKey(this,t);if(o){const r=this[o];if(!n)return r;if(n===!0)return Vt(r);if(a.isFunction(n))return n.call(this,r,o);if(a.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const o=a.findKey(this,t);return!!(o&&this[o]!==void 0&&(!n||Y(this,this[o],o,n)))}return!1}delete(t,n){const o=this;let r=!1;function s(i){if(i=P(i),i){const l=a.findKey(o,i);l&&(!n||Y(o,o[l],l,n))&&(delete o[l],r=!0)}}return a.isArray(t)?t.forEach(s):s(t),r}clear(t){const n=Object.keys(this);let o=n.length,r=!1;for(;o--;){const s=n[o];(!t||Y(this,this[s],s,t,!0))&&(delete this[s],r=!0)}return r}normalize(t){const n=this,o={};return a.forEach(this,(r,s)=>{const i=a.findKey(o,s);if(i){n[i]=v(r),delete n[s];return}const l=t?Gt(s):String(s).trim();l!==s&&delete n[s],n[l]=v(r),o[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(o,r)=>{o!=null&&o!==!1&&(n[r]=t&&a.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const o=new this(t);return n.forEach(r=>o.set(r)),o}static accessor(t){const o=(this[be]=this[be]={accessors:{}}).accessors,r=this.prototype;function s(i){const l=P(i);o[l]||(Xt(r,i),o[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[n]=o}}});a.freezeMethods(K);const R=K;function Z(e,t){const n=this||ce,o=t||n,r=R.from(o.headers);let s=o.data;return a.forEach(e,function(l){s=l.call(n,s,r.normalize(),t?t.status:void 0)}),r.normalize(),s}function ve(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,h,{__CANCEL__:!0});function Qt(e,t,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yt=A.isStandardBrowserEnv?function(){return{write:function(n,o,r,s,i,l){const f=[];f.push(n+"="+encodeURIComponent(o)),a.isNumber(r)&&f.push("expires="+new Date(r).toGMTString()),a.isString(s)&&f.push("path="+s),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const o=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function en(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!Zt(t)?en(e,t):t}const tn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let o;function r(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return o=r(window.location.href),function(i){const l=a.isString(i)?r(i):i;return l.protocol===o.protocol&&l.host===o.host}}():function(){return function(){return!0}}();function nn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function on(e,t){e=e||10;const n=new Array(e),o=new Array(e);let r=0,s=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=o[s];i||(i=c),n[r]=f,o[r]=c;let m=s,b=0;for(;m!==r;)b+=n[m++],m=m%e;if(r=(r+1)%e,r===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function Ee(e,t){let n=0;const o=on(50,250);return r=>{const s=r.loaded,i=r.lengthComputable?r.total:void 0,l=s-n,f=o(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-s)/f:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}const rn=typeof XMLHttpRequest<"u",sn=rn&&function(e){return new Promise(function(n,o){let r=e.data;const s=R.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(r)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+d))}const u=Me(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const y=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Qt(function(g){n(g),f()},function(g){o(g),f()},p),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(o(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ue;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),o(new h(d,p.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const y=(e.withCredentials||tn(u))&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(d,p){c.setRequestHeader(p,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(o(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=nn(u);if(b&&A.protocols.indexOf(b)===-1){o(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}c.send(r||null)})},M={http:Nt,xhr:sn};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ie={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,o;for(let r=0;r<t&&(n=e[r],!(o=a.isString(n)?M[n.toLowerCase()]:n));r++);if(!o)throw o===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(o))throw new TypeError("adapter is not a function");return o},adapters:M};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function we(e){return ee(e),e.headers=R.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ie.getAdapter(e.adapter||ce.adapter)(e).then(function(o){return ee(e),o.data=Z.call(e,e.transformResponse,o),o.headers=R.from(o.headers),o},function(o){return ve(o)||(ee(e),o&&o.response&&(o.response.data=Z.call(e,e.transformResponse,o.response),o.response.headers=R.from(o.response.headers))),Promise.reject(o)})}const ge=e=>e instanceof R?e.toJSON():e;function x(e,t){t=t||{};const n={};function o(c,u,m){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:m},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function r(c,u,m){if(a.isUndefined(u)){if(!a.isUndefined(c))return o(void 0,c,m)}else return o(c,u,m)}function s(c,u){if(!a.isUndefined(u))return o(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return o(void 0,c)}else return o(void 0,u)}function l(c,u,m){if(m in t)return o(c,u);if(m in e)return o(void 0,c)}const f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>r(ge(c),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const m=f[u]||r,b=m(e[u],t[u],u);a.isUndefined(b)&&m!==l||(n[u]=b)}),n}const qe="1.5.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});const Se={};le.transitional=function(t,n,o){function r(s,i){return"[Axios v"+qe+"] Transitional option '"+s+"'"+i+(o?". "+o:"")}return(s,i,l)=>{if(t===!1)throw new h(r(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Se[i]&&(Se[i]=!0,console.warn(r(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function an(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let r=o.length;for(;r-- >0;){const s=o[r],i=t[s];if(i){const l=e[s],f=l===void 0||i(l,s,e);if(f!==!0)throw new h("option "+s+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const oe={assertOptions:an,validators:le},T=oe.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:o,paramsSerializer:r,headers:s}=n;o!==void 0&&oe.assertOptions(o,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),r!=null&&(a.isFunction(r)?n.paramsSerializer={serialize:r}:oe.assertOptions(r,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=R.concat(i,s);const l=[];let f=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(f=f&&p.synchronous,l.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let u,m=0,b;if(!f){const d=[we.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),b=d.length,u=Promise.resolve(n);m<b;)u=u.then(d[m++],d[m++]);return u}b=l.length;let y=n;for(m=0;m<b;){const d=l[m++],p=l[m++];try{y=d(y)}catch(S){p.call(this,S);break}}try{u=we.call(this,y)}catch(d){return Promise.reject(d)}for(m=0,b=c.length;m<b;)u=u.then(c[m++],c[m++]);return u}getUri(t){t=x(this.defaults,t);const n=Me(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,o){return this.request(x(o||{},{method:t,url:n,data:(o||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(o){return function(s,i,l){return this.request(x(l||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const I=$;class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const o=this;this.promise.then(r=>{if(!o._listeners)return;let s=o._listeners.length;for(;s-- >0;)o._listeners[s](r);o._listeners=null}),this.promise.then=r=>{let s;const i=new Promise(l=>{o.subscribe(l),s=l}).then(r);return i.cancel=function(){o.unsubscribe(s)},i},t(function(s,i,l){o.reason||(o.reason=new U(s,i,l),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(r){t=r}),cancel:t}}}const cn=ue;function ln(e){return function(n){return e.apply(null,n)}}function un(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const dn=re;function He(e){const t=new I(e),n=Oe(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return He(x(e,r))},n}const w=He(ce);w.Axios=I;w.CanceledError=U;w.CancelToken=cn;w.isCancel=ve;w.VERSION=qe;w.toFormData=V;w.AxiosError=h;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=ln;w.isAxiosError=un;w.mergeConfig=x;w.AxiosHeaders=R;w.formToJSON=e=>je(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Ie.getAdapter;w.HttpStatusCode=dn;w.default=w;const G=w;async function $e(e){if(e.toLowerCase()==="all categories"){window.location.href="index.html";return}const n=`https://books-backend.p.goit.global/books/category?category=${e}`;try{const r=(await G.get(n)).data,s=document.getElementById("result-container");s.innerHTML="";const i=e.split(" ");if(i.length>1){const u=i.pop();i.push(`<span style="color: #4F2EE8;">${u}</span>`)}const l=i.join(" "),f=document.createElement("h2");if(f.classList.add("title-books"),f.innerHTML=l,s.appendChild(f),r.length===0){const u=document.createElement("p");u.classList.add("categoryesNotFound"),u.textContent="Вибраної категорії не існує. Виберіть іншу категорію.",s.appendChild(u)}else{const u=document.createElement("ul");u.className="bestseller",s.appendChild(u);const m=250;async function b(y){if(y<r.length){const d=r[y],p=document.createElement("li");p.className="book-item",p.id=d._id,p.style.opacity="0";const S=document.createElement("a");S.classList.add("best-img-link"),S.href="/book-details.html?id="+d._id;const g=document.createElement("img");g.classList.add("book-wrap"),g.src=d.book_image||"../images/plug picture/plug335x485@1x.jpg",g.alt=d.title;const k=document.createElement("div");k.classList.add("book-info-block");const C=document.createElement("p");C.classList.add("book-name"),C.textContent=d.title||"N/A";const N=document.createElement("p");N.classList.add("view"),N.textContent="quick view";const X=document.createElement("p");X.classList.add("book-author"),X.textContent=d.author||"N/A",k.appendChild(N),k.appendChild(C),k.appendChild(X),S.appendChild(g),S.appendChild(k),p.appendChild(S),u.appendChild(p),window.scrollTo(0,document.body.scrollHeight),p.style.transition="opacity 0.8s",p.style.opacity="1",setTimeout(()=>{b(y+1)},m)}}b(0)}const c=document.querySelector(`li[data-category="${e}"]`);c&&c.classList.add("active-category")}catch(o){console.error("Error fetching books:",o)}}const Je=document.querySelector(".bestseller"),fn="https://books-backend.p.goit.global/books/top-books";async function ze(){return(await G.get(fn)).data}ze();async function pn(e){try{(await ze(e)).map(n=>mn(n))}catch{console.error("Try again!")}}pn();function mn(e){const{list_name:t,books:n}=e,o=`
  <div class="best-list">
    <h3 class="best-list-name">${t}</h3>
      <ul class="best-book-category books-is-hidden">
         ${n.map(r=>yn(r)).join("")}
      </ul>
      <div class="btn-see-more">
        <button type="button" class="see-more" data-category="${t}">SEE MORE</button>
      </div>
  </div>
  `;Je.insertAdjacentHTML("beforeend",o),hn()}function hn(){if(Je._seeMoreBound)return;document.querySelectorAll(".see-more").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-category");$e(n),document.querySelectorAll(".categories .category_link").forEach(r=>{r.textContent===n?r.classList.add("active-category"):r.classList.remove("active-category")})})})}function yn({book_image:e,title:t,author:n,_id:o}){return`
  <li class="book-item" id="${o}">
    <a href="" class="best-img-link">
      <img class="book-wrap" src="${e}" alt="${t}" loading="lazy"/>
        <div class="book-info-block">
          <p class="view">quick view</p>
          <p class="book-name">${t}</p>
          <p class="book-author">${n}</p>
        </div>
    </a>
  </li>`}const _={scrollPosition:0,disabledScroll(){_.scrollPosition=window.scrollY,document.body.style.cssText=`
      overflow: hidden;
      position: fixed;
      top: -${_.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth-document.body.offsetWidth}px
    `},enabledScroll(){document.body.style.cssText="",window.scroll({top:_.scrollPosition})}};let We=null,q=0,H=[];localStorage.getItem("ListOfBooks")===null&&localStorage.setItem("ListOfBooks",JSON.stringify(H));const E={openModal:document.querySelector(".right-wrapper"),closeModal:document.querySelector(".modalWindow-close"),modalWindow:document.querySelector("#modalWindow"),modalCard:document.querySelector(".modal-card"),modalBtnAddEl:document.querySelector(".modalWindow-btn-1"),modalBtnDelEl:document.querySelector(".modalWindow-btn-2"),modaltextBottom:document.querySelector(".modalWindow-text"),markupCard:document.querySelector(".modal-card")};E.openModal.addEventListener("click",bn);E.closeModal.addEventListener("click",de);function bn(e){e.preventDefault();const n=e.target.closest(".book-item");if(!n)return;E.modalWindow.classList.remove("is-hidden"),_.disabledScroll(),window.addEventListener("keydown",Ke),E.modalWindow.addEventListener("click",Ve),q=n.id,JSON.parse(localStorage.getItem("ListOfBooks")).find(r=>r._id===q)?(E.modalBtnAddEl.classList.add("is-hidden"),E.modalBtnDelEl.classList.remove("is-hidden"),E.modaltextBottom.classList.remove("is-hidden")):(E.modalBtnAddEl.classList.remove("is-hidden"),E.modalBtnDelEl.classList.add("is-hidden"),E.modaltextBottom.classList.add("is-hidden")),En(q).then(r=>{Sn(r),We=r})}function de(e){E.modalWindow.classList.add("is-hidden"),_.enabledScroll(),window.removeEventListener("keydown",Ke),modalWindow.removeEventListener("click",Ve)}function Ve(e){e.currentTarget===e.target&&de()}function Ke(e){const t="Escape";e.code===t&&de()}async function En(e){const t="https://books-backend.p.goit.global/books/";try{return(await G.get(`${t}${e}`)).data}catch(n){console.log(n)}}E.modalBtnAddEl.addEventListener("click",wn);function wn(e){e.preventDefault(),H=JSON.parse(localStorage.getItem("ListOfBooks")),H.push(We),localStorage.setItem("ListOfBooks",JSON.stringify(H)),E.modalBtnAddEl.classList.add("is-hidden"),E.modalBtnDelEl.classList.remove("is-hidden"),E.modaltextBottom.classList.remove("is-hidden")}E.modalBtnDelEl.addEventListener("click",gn);function gn(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("ListOfBooks")),n=t.findIndex(o=>o._id===q);t.splice(n,1),localStorage.setItem("ListOfBooks",JSON.stringify(t)),E.modalBtnAddEl.classList.remove("is-hidden"),E.modalBtnDelEl.classList.add("is-hidden"),E.modaltextBottom.classList.add("is-hidden")}function Sn(e){E.markupCard.innerHTML="";const{book_image:t,title:n,description:o,author:r,buy_links:s}=e,i=`    <img
             src="${t}"
             alt="${n}"
             class="modal-book-img"
             loading="lazy"
             width="287px"
             height: 408px;
             />         
          <div class="modal-info-box">
           <h3 class="modal-book-title">${n}</h3>
           <p class="modal-book-author">${r}</p>
           <p class="modal-book-deskr" id="style-4">${o}</p>  
             <div class="modal-book-links">
               <a href="${s[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon-62.png" alt="Logo Amazon" width="62px" class="link-1"/>
               </a>
               <a href="${s[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" alt="Logo Apple book store" width="28px" class="link-2"/>
               </a>
               <a href="${s[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop-62.png" alt="Logo book shop" width="32px" class="link-3"/>
               </a>
             </div>
          </div>`;E.markupCard.insertAdjacentHTML("beforeend",i)}const kn="https://books-backend.p.goit.global/",ke=document.querySelector(".categories");async function On(){try{const{data:e}=await G.get(`${kn}books/category-list`),t={list_name:"All categories"};e.sort((o,r)=>o.list_name.localeCompare(r.list_name)),e.unshift(t),An(e);const n=e[0].categoryLink;n&&n.classList.add("active-category")}catch(e){console.error("Помилка при отриманні категорій:",e)}}async function An(e){ke.innerHTML="";const t=document.createElement("ul");t.classList.add("book_list"),e.forEach(n=>{const{list_name:o}=n,r=document.createElement("li");r.classList.add("category_item");const s=document.createElement("a");s.textContent=o,s.addEventListener("click",async()=>{await $e(o),e.forEach(i=>i.categoryLink.classList.remove("active-category")),s.classList.add("active-category")}),s.classList.add("category_link"),["focus","blur","mouseover","mouseout"].forEach(i=>{s.addEventListener(i,()=>{i==="focus"||i==="mouseover"?s.classList.add("uppercase"):s.classList.remove("uppercase")})}),n.categoryLink=s,r.appendChild(s),t.appendChild(r)}),ke.appendChild(t)}On();const Ge=document.querySelector(".go-top");window.addEventListener("scroll",Ln);Ge.addEventListener("click",Xe);function Ln(){const e=document.documentElement.scrollTop,t=document.documentElement.clientHeight;Ge.classList.toggle("show",e>t)}function Xe(){document.documentElement.scrollTop>0&&(window.scrollBy(0,-120),requestAnimationFrame(Xe))}
