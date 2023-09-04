(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ve}=Object.prototype,{getPrototypeOf:oe}=Object,z=(e=>t=>{const n=Ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:k}=Array,N=J("undefined");function We(e){return e!==null&&!N(e)&&e.constructor!==null&&!N(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=R("ArrayBuffer");function Ke(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const Ge=J("string"),S=J("function"),Re=J("number"),V=e=>e!==null&&typeof e=="object",Xe=e=>e===!0||e===!1,_=e=>{if(z(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qe=R("Date"),Ze=R("File"),Ye=R("Blob"),et=R("FileList"),tt=e=>V(e)&&S(e.pipe),nt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=z(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},rt=R("URLSearchParams"),ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function P(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Le=e=>!N(e)&&e!==Te;function Y(){const{caseless:e}=Le(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ae(t,o)||o;_(t[s])&&_(r)?t[s]=Y(t[s],r):_(r)?t[s]=Y({},r):k(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&P(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(P(t,(o,s)=>{n&&S(o)?e[s]=Se(o,n):e[s]=o},{allOwnKeys:r}),e),it=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),at=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ct=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ut=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ht=R("HTMLFormElement"),mt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yt=R("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};P(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},bt=e=>{Ce(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Et=()=>{},gt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),G="abcdefghijklmnopqrstuvwxyz",de="0123456789",ke={DIGIT:de,ALPHA:G,ALPHA_DIGIT:G+G.toUpperCase()+de},St=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ot(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rt=e=>{const t=new Array(10),n=(r,o)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=k(r)?[]:{};return P(r,(i,l)=>{const f=n(i,o+1);!N(f)&&(s[l]=f)}),t[o]=void 0,s}}return r};return n(e,0)},At=R("AsyncFunction"),Tt=e=>e&&(V(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:k,isArrayBuffer:Oe,isBuffer:We,isFormData:nt,isArrayBufferView:Ke,isString:Ge,isNumber:Re,isBoolean:Xe,isObject:V,isPlainObject:_,isUndefined:N,isDate:Qe,isFile:Ze,isBlob:Ye,isRegExp:yt,isFunction:S,isStream:tt,isURLSearchParams:rt,isTypedArray:dt,isFileList:et,forEach:P,merge:Y,extend:st,trim:ot,stripBOM:it,inherits:at,toFlatObject:ct,kindOf:z,kindOfTest:R,endsWith:lt,toArray:ut,forEachEntry:ft,matchAll:pt,isHTMLForm:ht,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:Ce,freezeMethods:bt,toObjectSet:wt,toCamelCase:mt,noop:Et,toFiniteNumber:gt,findKey:Ae,global:Te,isContextDefined:Le,ALPHABET:ke,generateString:St,isSpecCompliantForm:Ot,toJSONObject:Rt,isAsyncFn:At,isThenable:Tt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(xe,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Lt=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(o,s){return o=Pe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(ee)}const kt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!a.isUndefined(g[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,g){let E=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ct(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(E=a.toArray(d)))return h=Pe(h),E.forEach(function(F,Je){!(a.isUndefined(F)||F===null)&&t.append(i===!0?fe([h],Je,s):i===null?h:h+"[]",c(F))}),!1}return ee(d)?!0:(t.append(fe(g,h,s),c(d)),!1)}const p=[],b=Object.assign(kt,{defaultVisitor:u,convertValue:c,isVisitable:ee});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(E,L){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(L)?L.trim():L,h,b))===!0&&y(E,h?h.concat(L):[L])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&W(e,this,t)}const Be=se.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function xt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||xt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Nt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Nt,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt=typeof URLSearchParams<"u"?URLSearchParams:se,Bt=typeof FormData<"u"?FormData:null,Ft=typeof Blob<"u"?Blob:null,_t=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),vt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:Bt,Blob:Ft},isStandardBrowserEnv:_t,isStandardBrowserWebWorkerEnv:vt,protocols:["http","https","file","blob","url","data"]};function Dt(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function ve(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),f=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=jt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ut(r),o,n,0)}),n}return null}function Mt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:_e,adapter:O.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Mt(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const ae=ie,It=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&It[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function x(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function Ht(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,f,c){const u=x(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||f]=v(l))}const i=(l,f)=>a.forEach(l,(c,u)=>s(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!$t(t)?i(qt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=x(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Ht(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=x(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=x(i),i){const l=a.findKey(r,i);l&&(!n||X(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||X(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=v(o),delete n[s];return}const l=t?zt(s):String(s).trim();l!==s&&delete n[s],n[l]=v(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=x(i);r[l]||(Jt(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(K);const A=K;function Q(e,t){const n=this||ae,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function De(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=O.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),a.isString(s)&&f.push("path="+s),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Kt(t)?Gt(e,t):t}const Xt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[s];i||(i=c),n[o]=f,r[o]=c;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function ye(e,t){let n=0;const r=Zt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,f=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-s)/f:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Yt=typeof XMLHttpRequest<"u",en=Yt&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+d))}const u=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Vt(function(E){n(E),f()},function(E){r(E),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||_e;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||Xt(u))&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=Qt(u);if(b&&O.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},D={http:Lt,xhr:en};a.forEach(D,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?D[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(D,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:D};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function be(e){return Z(e),e.headers=A.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),je.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Z(e),r.data=Q.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return De(r)||(Z(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof A?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(we(c),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||o,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const Me="1.5.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};ce.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Me+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ee[i]&&(Ee[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function tn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],f=l===void 0||i(l,s,e);if(f!==!0)throw new m("option "+s+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const te={assertOptions:tn,validators:ce},T=te.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:te.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=A.concat(i,s);const l=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!f){const d=[be.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),b=d.length,u=Promise.resolve(n);p<b;)u=u.then(d[p++],d[p++]);return u}b=l.length;let y=n;for(p=0;p<b;){const d=l[p++],h=l[p++];try{y=d(y)}catch(g){h.call(this,g);break}}try{u=be.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Ue(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const U=I;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new B(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(o){t=o}),cancel:t}}}const nn=le;function rn(e){return function(n){return e.apply(null,n)}}function on(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const sn=ne;function Ie(e){const t=new U(e),n=Se(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ie(C(e,o))},n}const w=Ie(ae);w.Axios=U;w.CanceledError=B;w.CancelToken=nn;w.isCancel=De;w.VERSION=Me;w.toFormData=W;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=rn;w.isAxiosError=on;w.mergeConfig=C;w.AxiosHeaders=A;w.formToJSON=e=>ve(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=je.getAdapter;w.HttpStatusCode=sn;w.default=w;const qe=w;async function an(e){if(e.toLowerCase()==="all categories"){window.location.href="index.html";return}const n=`https://books-backend.p.goit.global/books/category?category=${e}`;try{const o=(await qe.get(n)).data,s=document.getElementById("result-container");s.innerHTML="";const i=e.split(" ");if(i.length>1){const c=i.pop();i.push(`<span style="color: #4F2EE8;">${c}</span>`)}const l=i.join(" "),f=document.createElement("h2");if(f.classList.add("title_books"),f.innerHTML=l,s.appendChild(f),o.length===0){const c=document.createElement("p");c.classList.add("categoryesNotFound"),c.textContent="Вибраної категорії не існує. Виберіть іншу категорію.",s.appendChild(c)}else{const c=document.createElement("ul");c.className="bestseller",o.forEach(u=>{const p=document.createElement("li");p.className="book-item",p.id=`book-${u._id}`;const b=document.createElement("a");b.href="/book-details.html?id="+u._id;const y=document.createElement("div"),d=document.createElement("img");d.classList.add("book-wrap"),d.src=u.book_image||"../images/plug picture/plug335x485@1x.jpg",d.alt=u.title,y.appendChild(d);const h=document.createElement("div");h.classList.add("noName");const g=document.createElement("p");g.classList.add("book-name"),g.textContent=u.title||"N/A";const E=document.createElement("p");E.classList.add("book-author"),E.textContent=u.author||"N/A",h.appendChild(g),h.appendChild(E),b.appendChild(y),b.appendChild(h),p.appendChild(b),c.appendChild(p)}),s.appendChild(c)}}catch(r){console.error("Error fetching books:",r)}}const j=document.querySelector(".bestseller"),cn="https://books-backend.p.goit.global/books/top-books";async function He(){return(await qe.get(cn)).data}He();async function ln(e){try{(await He(e)).map(n=>un(n))}catch{console.error("Try again!")}}ln();function un(e){const{list_name:t,books:n}=e,r=`
  <div class="best-list">
    <h2 class="best-list-name">${t}</h2>
      <ul class="best-book-category">
         ${n.map(o=>fn(o)).join("")}
      </ul>
      <button type="button" class="see-more" data-category="${t}">SEE MORE</button>
  </div>
  `;j.insertAdjacentHTML("beforeend",r),dn()}function dn(){j._seeMoreBound||(j.addEventListener("click",async e=>{if(e.target.classList.contains("see-more")){const t=e.target.getAttribute("data-category");try{await an(t)}catch(n){console.error("Error handling book click:",n)}}}),j._seeMoreBound=!0)}function fn({book_image:e,title:t,author:n,_id:r}){return`
  <li class="book-item" id="${r}">
    <img class="book-wrap" src="${e}" alt="${t}"/>
      <div>
        <p class="book-name">${t}</p>
        <p class="book-author">${n}</p>
      </div>
  </li>`}const pn=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"medical.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"action.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"sergiy.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"medecins.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"world.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"united.png"}],re=document.querySelector(".found-list"),M=document.querySelector(".found-down");mn();M.addEventListener("click",hn);function hn(){M.matches(".found-down")?re.scrollTo({top:500,behavior:"smooth"}):re.scrollTo({top:0,behavior:"smooth"}),M.classList.toggle("found-down"),M.classList.toggle("found-up")}function mn(){re.innerHTML=yn()}function yn(){return pn.map(bn).join("")}function bn(e,t){return`
        <li class="found-item" value="${t+1}">
            <a href="${e.url}" class="found-link" title="${e.title}" target="_blank"> 
                <img src="/images/found/${e.img}" alt="${e.title}" class="found-logo">
            </a>
        </li>
    `}const q=document.getElementById("switch"),H=document.body;function ge(e){localStorage.setItem("theme",e?"dark":"light")}function wn(){localStorage.getItem("theme")==="dark"?(H.classList.add("dark-theme"),q.checked=!0):(H.classList.remove("dark-theme"),q.checked=!1)}wn();q.addEventListener("change",function(){q.checked?(H.classList.add("dark-theme"),ge(!0)):(H.classList.remove("dark-theme"),ge(!1))});const $e=document.querySelector(".js-menu-container"),$=document.querySelector(".js-open-menu"),En=document.querySelector(".js-close-menu"),ze=()=>{const e=$.getAttribute("aria-expanded")==="true"||!1;$.setAttribute("aria-expanded",!e),$e.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};$.addEventListener("click",ze);En.addEventListener("click",ze);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&($e.classList.remove("is-open"),$.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.querySelector(".mobil-nav-item-home"),n=document.querySelector(".mobil-nav-item-shopping"),r=document.querySelector(".mobil-lock");e.includes("index.html")?(t.classList.add("mobil-nav-item-active"),n.classList.remove("mobil-nav-item-active"),r.classList.remove("mobil-lock-active")):e.includes("shopping-list.html")&&(n.classList.add("mobil-nav-item-active"),t.classList.remove("mobil-nav-item-active"),r.classList.add("mobil-lock-active"))});document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.querySelector(".nav-item-home"),n=document.querySelector(".nav-item-shopping"),r=document.querySelector(".nav-lock");function o(s){s.includes("index.html")?(t.classList.add("nav-item-active"),n.classList.remove("nav-lock-active"),r.classList.remove("nav-lock-active")):s.includes("shopping-list.html")&&(n.classList.add("nav-item-active"),t.classList.remove("nav-item-active"),r.classList.adde("nav-lock-active"))}o(e)});export{qe as a,an as f};
