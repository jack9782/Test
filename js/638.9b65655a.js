(self["webpackChunkvue_test2"]=self["webpackChunkvue_test2"]||[]).push([[638],{5787:function(t,e,r){var n=r(7854),o=r(7976),i=n.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,r){"use strict";var n,o,i,s=r(4019),a=r(9781),u=r(7854),c=r(614),f=r(111),p=r(2597),l=r(648),d=r(6330),h=r(8880),m=r(8052),E=r(3070).f,y=r(7976),v=r(9518),R=r(7674),g=r(5112),A=r(9711),w=u.Int8Array,O=w&&w.prototype,S=u.Uint8ClampedArray,_=S&&S.prototype,T=w&&v(w),b=O&&v(O),x=Object.prototype,N=u.TypeError,D=g("toStringTag"),C=A("TYPED_ARRAY_TAG"),I=A("TYPED_ARRAY_CONSTRUCTOR"),U=s&&!!R&&"Opera"!==l(u.opera),B=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!f(t))return!1;var e=l(t);return"DataView"===e||p(P,e)||p(L,e)},M=function(t){if(!f(t))return!1;var e=l(t);return p(P,e)||p(L,e)},k=function(t){if(M(t))return t;throw N("Target is not a typed array")},F=function(t){if(c(t)&&(!R||y(T,t)))return t;throw N(d(t)+" is not a typed array constructor")},V=function(t,e,r,n){if(a){if(r)for(var o in P){var i=u[o];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(s){try{i.prototype[t]=e}catch(c){}}}b[t]&&!r||m(b,t,r?e:U&&O[t]||e,n)}},q=function(t,e,r){var n,o;if(a){if(R){if(r)for(n in P)if(o=u[n],o&&p(o,t))try{delete o[t]}catch(i){}if(T[t]&&!r)return;try{return m(T,t,r?e:U&&T[t]||e)}catch(i){}}for(n in P)o=u[n],!o||o[t]&&!r||m(o,t,e)}};for(n in P)o=u[n],i=o&&o.prototype,i?h(i,I,o):U=!1;for(n in L)o=u[n],i=o&&o.prototype,i&&h(i,I,o);if((!U||!c(T)||T===Function.prototype)&&(T=function(){throw N("Incorrect invocation")},U))for(n in P)u[n]&&R(u[n],T);if((!U||!b||b===x)&&(b=T.prototype,U))for(n in P)u[n]&&R(u[n].prototype,b);if(U&&v(_)!==b&&R(_,b),a&&!p(b,D))for(n in B=!0,E(b,D,{get:function(){return f(this)?this[C]:void 0}}),P)u[n]&&h(u[n],C,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:U,TYPED_ARRAY_CONSTRUCTOR:I,TYPED_ARRAY_TAG:B&&C,aTypedArray:k,aTypedArrayConstructor:F,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:q,isView:j,isTypedArray:M,TypedArray:T,TypedArrayPrototype:b}},8544:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9518:function(t,e,r){var n=r(7854),o=r(2597),i=r(614),s=r(7908),a=r(6200),u=r(8544),c=a("IE_PROTO"),f=n.Object,p=f.prototype;t.exports=u?f.getPrototypeOf:function(t){var e=s(t);if(o(e,c))return e[c];var r=e.constructor;return i(r)&&e instanceof r?r.prototype:e instanceof f?p:null}},4590:function(t,e,r){var n=r(7854),o=r(3002),i=n.RangeError;t.exports=function(t,e){var r=o(t);if(r%e)throw i("Wrong offset");return r}},3002:function(t,e,r){var n=r(7854),o=r(9303),i=n.RangeError;t.exports=function(t){var e=o(t);if(e<0)throw i("The argument can't be less than 0");return e}},8675:function(t,e,r){"use strict";var n=r(260),o=r(6244),i=r(9303),s=n.aTypedArray,a=n.exportTypedArrayMethod;a("at",(function(t){var e=s(this),r=o(e),n=i(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}))},3462:function(t,e,r){"use strict";var n=r(7854),o=r(6916),i=r(260),s=r(6244),a=r(4590),u=r(7908),c=r(7293),f=n.RangeError,p=n.Int8Array,l=p&&p.prototype,d=l&&l.set,h=i.aTypedArray,m=i.exportTypedArrayMethod,E=!c((function(){var t=new Uint8ClampedArray(2);return o(d,t,{length:1,0:3},1),3!==t[1]})),y=E&&i.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new p(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){h(this);var e=a(arguments.length>1?arguments[1]:void 0,1),r=u(t);if(E)return o(d,this,r,e);var n=this.length,i=s(r),c=0;if(i+e>n)throw f("Wrong length");while(c<i)this[e+c]=r[c++]}),!E||y)},2801:function(t,e,r){"use strict";var n=r(2109),o=r(5005),i=r(9114),s=r(3070).f,a=r(2597),u=r(5787),c=r(9587),f=r(6277),p=r(3678),l=r(7741),d=r(1913),h="DOMException",m=o("Error"),E=o(h),y=function(){u(this,v);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new E(e,r),o=m(e);return o.name=h,s(n,"stack",i(1,l(o.stack,1))),c(n,this,y),n},v=y.prototype=E.prototype,R="stack"in m(h),g="stack"in new E(1,2),A=R&&!g;n({global:!0,constructor:!0,forced:d||A},{DOMException:A?y:E});var w=o(h),O=w.prototype;if(O.constructor!==w)for(var S in d||s(O,"constructor",i(1,w)),p)if(a(p,S)){var _=p[S],T=_.s;a(w,T)||s(w,T,i(6,_.c))}},6166:function(t,e,r){t.exports=r(9142)},4355:function(t,e,r){"use strict";r(2801);var n=r(2175),o=r(2317),i=r(3347),s=r(8470),a=r(4107),u=r(6280),c=r(8573),f=r(9214),p=r(7431),l=r(3967),d=r(4108);t.exports=function(t){return new Promise((function(e,r){var h,m=t.data,E=t.headers,y=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(h),t.signal&&t.signal.removeEventListener("abort",h)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete E["Content-Type"];var R=new XMLHttpRequest;if(t.auth){var g=t.auth.username||"",A=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";E.Authorization="Basic "+btoa(g+":"+A)}var w=a(t.baseURL,t.url);function O(){if(R){var n="getAllResponseHeaders"in R?u(R.getAllResponseHeaders()):null,i=y&&"text"!==y&&"json"!==y?R.response:R.responseText,s={data:i,status:R.status,statusText:R.statusText,headers:n,config:t,request:R};o((function(t){e(t),v()}),(function(t){r(t),v()}),s),R=null}}if(R.open(t.method.toUpperCase(),s(w,t.params,t.paramsSerializer),!0),R.timeout=t.timeout,"onloadend"in R?R.onloadend=O:R.onreadystatechange=function(){R&&4===R.readyState&&(0!==R.status||R.responseURL&&0===R.responseURL.indexOf("file:"))&&setTimeout(O)},R.onabort=function(){R&&(r(new p("Request aborted",p.ECONNABORTED,t,R)),R=null)},R.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,t,R,R)),R=null},R.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||f;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new p(e,n.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,t,R)),R=null},n.isStandardBrowserEnv()){var S=(t.withCredentials||c(w))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;S&&(E[t.xsrfHeaderName]=S)}"setRequestHeader"in R&&n.forEach(E,(function(t,e){"undefined"===typeof m&&"content-type"===e.toLowerCase()?delete E[e]:R.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(R.withCredentials=!!t.withCredentials),y&&"json"!==y&&(R.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&R.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&R.upload&&R.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(h=function(t){R&&(r(!t||t&&t.type?new l:t),R.abort(),R=null)},t.cancelToken&&t.cancelToken.subscribe(h),t.signal&&(t.signal.aborted?h():t.signal.addEventListener("abort",h))),m||(m=null);var _=d(w);_&&-1===["http","https","file"].indexOf(_)?r(new p("Unsupported protocol "+_+":",p.ERR_BAD_REQUEST,t)):R.send(m)}))}},9142:function(t,e,r){"use strict";var n=r(2175),o=r(2978),i=r(4980),s=r(740),a=r(1378);function u(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r.create=function(e){return u(s(t,e))},r}var c=u(a);c.Axios=i,c.CanceledError=r(3967),c.CancelToken=r(1414),c.isCancel=r(4434),c.VERSION=r(3394).version,c.toFormData=r(8226),c.AxiosError=r(7431),c.Cancel=c.CanceledError,c.all=function(t){return Promise.all(t)},c.spread=r(8758),c.isAxiosError=r(9096),t.exports=c,t.exports["default"]=c},1414:function(t,e,r){"use strict";r(1703);var n=r(3967);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},3967:function(t,e,r){"use strict";var n=r(7431),o=r(2175);function i(t){n.call(this,null==t?"canceled":t,n.ERR_CANCELED),this.name="CanceledError"}o.inherits(i,n,{__CANCEL__:!0}),t.exports=i},4434:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},4980:function(t,e,r){"use strict";var n=r(2175),o=r(8470),i=r(5393),s=r(5216),a=r(740),u=r(4107),c=r(4542),f=c.validators;function p(t){this.defaults=t,this.interceptors={request:new i,response:new i}}p.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,u=[];if(this.interceptors.response.forEach((function(t){u.push(t.fulfilled,t.rejected)})),!o){var p=[s,void 0];Array.prototype.unshift.apply(p,n),p=p.concat(u),i=Promise.resolve(e);while(p.length)i=i.then(p.shift(),p.shift());return i}var l=e;while(n.length){var d=n.shift(),h=n.shift();try{l=d(l)}catch(m){h(m);break}}try{i=s(l)}catch(m){return Promise.reject(m)}while(u.length)i=i.then(u.shift(),u.shift());return i},p.prototype.getUri=function(t){t=a(this.defaults,t);var e=u(t.baseURL,t.url);return o(e,t.params,t.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(t){p.prototype[t]=function(e,r){return this.request(a(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){function e(e){return function(r,n,o){return this.request(a(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}p.prototype[t]=e(),p.prototype[t+"Form"]=e(!0)})),t.exports=p},7431:function(t,e,r){"use strict";r(1703);var n=r(2175);function o(t,e,r,n,o){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}n.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){s[t]={value:t}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(t,e,r,s,a,u){var c=Object.create(i);return n.toFlatObject(t,c,(function(t){return t!==Error.prototype})),o.call(c,t.message,e,r,s,a),c.name=t.name,u&&Object.assign(c,u),c},t.exports=o},5393:function(t,e,r){"use strict";var n=r(2175);function o(){this.handlers=[]}o.prototype.use=function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4107:function(t,e,r){"use strict";var n=r(8612),o=r(1549);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},5216:function(t,e,r){"use strict";var n=r(2175),o=r(1618),i=r(4434),s=r(1378),a=r(3967);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},740:function(t,e,r){"use strict";var n=r(2175);t.exports=function(t,e){e=e||{};var r={};function o(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function i(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(t[r],e[r])}function s(t){if(!n.isUndefined(e[t]))return o(void 0,e[t])}function a(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(void 0,e[r])}function u(r){return r in e?o(t[r],e[r]):r in t?o(void 0,t[r]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);n.isUndefined(o)&&e!==u||(r[t]=o)})),r}},2317:function(t,e,r){"use strict";var n=r(7431);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}},1618:function(t,e,r){"use strict";var n=r(2175),o=r(1378);t.exports=function(t,e,r){var i=this||o;return n.forEach(r,(function(r){t=r.call(i,t,e)})),t}},1378:function(t,e,r){"use strict";var n=r(2175),o=r(5916),i=r(7431),s=r(9214),a=r(8226),u={"Content-Type":"application/x-www-form-urlencoded"};function c(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function f(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=r(4355)),t}function p(t,e,r){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(t)}var l={transitional:s,adapter:f(),transformRequest:[function(t,e){if(o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t))return t;if(n.isArrayBufferView(t))return t.buffer;if(n.isURLSearchParams(t))return c(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r,i=n.isObject(t),s=e&&e["Content-Type"];if((r=n.isFileList(t))||i&&"multipart/form-data"===s){var u=this.env&&this.env.FormData;return a(r?{"files[]":t}:t,u&&new u)}return i||"application/json"===s?(c(e,"application/json"),p(t)):t}],transformResponse:[function(t){var e=this.transitional||l.transitional,r=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s){if("SyntaxError"===a.name)throw i.from(a,i.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r(9519)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){l.headers[t]=n.merge(u)})),t.exports=l},9214:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},3394:function(t){t.exports={version:"0.27.2"}},2978:function(t){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},8470:function(t,e,r){"use strict";var n=r(2175);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var s=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},1549:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},3347:function(t,e,r){"use strict";var n=r(2175);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8612:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},9096:function(t,e,r){"use strict";var n=r(2175);t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}},8573:function(t,e,r){"use strict";var n=r(2175);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},5916:function(t,e,r){"use strict";var n=r(2175);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},9519:function(t){t.exports=null},6280:function(t,e,r){"use strict";var n=r(2175),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,s={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}})),s):s}},4108:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},8758:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},8226:function(t,e,r){"use strict";r(1703);var n=r(2175);function o(t,e){e=e||new FormData;var r=[];function o(t){return null===t?"":n.isDate(t)?t.toISOString():n.isArrayBuffer(t)||n.isTypedArray(t)?"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function i(t,s){if(n.isPlainObject(t)||n.isArray(t)){if(-1!==r.indexOf(t))throw Error("Circular reference detected in "+s);r.push(t),n.forEach(t,(function(t,r){if(!n.isUndefined(t)){var a,u=s?s+"."+r:r;if(t&&!s&&"object"===typeof t)if(n.endsWith(r,"{}"))t=JSON.stringify(t);else if(n.endsWith(r,"[]")&&(a=n.toArray(t)))return void a.forEach((function(t){!n.isUndefined(t)&&e.append(u,o(t))}));i(t,u)}})),r.pop()}else e.append(s,o(t))}return i(t),e}t.exports=o},4542:function(t,e,r){"use strict";var n=r(3394).version,o=r(7431),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));var s={};function a(t,e,r){if("object"!==typeof t)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);var n=Object.keys(t),i=n.length;while(i-- >0){var s=n[i],a=e[s];if(a){var u=t[s],c=void 0===u||a(u,s,t);if(!0!==c)throw new o("option "+s+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}}i.transitional=function(t,e,r){function i(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(r,n,a){if(!1===t)throw new o(i(n," has been removed"+(e?" in "+e:"")),o.ERR_DEPRECATED);return e&&!s[n]&&(s[n]=!0,console.warn(i(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,a)}},t.exports={assertOptions:a,validators:i}},2175:function(t,e,r){"use strict";r(8675),r(3462);var n=r(2978),o=Object.prototype.toString,i=function(t){return function(e){var r=o.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function s(t){return t=t.toLowerCase(),function(e){return i(e)===t}}function a(t){return Array.isArray(t)}function u(t){return"undefined"===typeof t}function c(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var f=s("ArrayBuffer");function p(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}function l(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function m(t){if("object"!==i(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var E=s("Date"),y=s("File"),v=s("Blob"),R=s("FileList");function g(t){return"[object Function]"===o.call(t)}function A(t){return h(t)&&g(t.pipe)}function w(t){var e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||o.call(t)===e||g(t.toString)&&t.toString()===e)}var O=s("URLSearchParams");function S(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function b(){var t={};function e(e,r){m(t[r])&&m(e)?t[r]=b(t[r],e):m(e)?t[r]=b({},e):a(e)?t[r]=e.slice():t[r]=e}for(var r=0,n=arguments.length;r<n;r++)T(arguments[r],e);return t}function x(t,e,r){return T(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t}function N(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}function D(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function C(t,e,r){var n,o,i,s={};e=e||{};do{n=Object.getOwnPropertyNames(t),o=n.length;while(o-- >0)i=n[o],s[i]||(e[i]=t[i],s[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function I(t,e,r){t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return-1!==n&&n===r}function U(t){if(!t)return null;var e=t.length;if(u(e))return null;var r=new Array(e);while(e-- >0)r[e]=t[e];return r}var B=function(t){return function(e){return t&&e instanceof t}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));t.exports={isArray:a,isArrayBuffer:f,isBuffer:c,isFormData:w,isArrayBufferView:p,isString:l,isNumber:d,isObject:h,isPlainObject:m,isUndefined:u,isDate:E,isFile:y,isBlob:v,isFunction:g,isStream:A,isURLSearchParams:O,isStandardBrowserEnv:_,forEach:T,merge:b,extend:x,trim:S,stripBOM:N,inherits:D,toFlatObject:C,kindOf:i,kindOfTest:s,endsWith:I,toArray:U,isTypedArray:B,isFileList:R}},8638:function(t,e,r){"use strict";r.d(e,{I0:function(){return A},Zt:function(){return v},fO:function(){return R},mr:function(){return y},pm:function(){return E},vw:function(){return g}});var n=r(6166),o=r.n(n);const i="https://data.etabus.gov.hk/v1/transport/kmb/route/",s="https://data.etabus.gov.hk/v1/transport/kmb/stop",a="https://data.etabus.gov.hk/v1/transport/kmb/route-stop",u="https://data.etabus.gov.hk/v1/transport/kmb/route-eta/{route}/{service_type}",c=7,f=7,p=7,l=864e5,d=6e4;function h(t,e){let r=Date.parse(t),n=Date.parse(e),o=n-r,i=Math.floor(o/l);return i}function m(t,e){let r=Date.parse(t),n=Date.parse(e),o=n-r,i=Math.floor(o/d);return i}function E(t){let e=m(new Date,t);return e<1&&(e="-"),e}function y(t){let e=new Date(t).getHours();e=String(e).padStart(2,"0");let r=new Date(t).getMinutes();return r=String(r).padStart(2,"0"),e+":"+r}function v(){let t=localStorage.getItem("KMBRouteList_timestamp"),e=localStorage.getItem("KMBRouteList");if(t&&e){let e=c,r=new Date,n=h(t,r);if(n<e)return console.log("No need to download KMBRouteList"),new Promise((t=>{t("Success without download!")}));console.log("KMBRouteList expired and will be updated.")}return new Promise((t=>{o().get(i).then((e=>{let r=e.data,n=r.generated_timestamp,o=JSON.stringify(r.data);localStorage.setItem("KMBRouteList_timestamp",n),localStorage.setItem("KMBRouteList",o),t("Success!")}))}))}function R(){let t=localStorage.getItem("KMBStopList_timestamp"),e=localStorage.getItem("KMBStopList");if(t&&e){let e=f,r=new Date,n=h(t,r);if(n<e)return console.log("No need to download KMBStopList"),new Promise((t=>{t("Success without download!")}))}return new Promise((t=>{o().get(s).then((e=>{let r=e.data,n=r.generated_timestamp,o=JSON.stringify(r.data);localStorage.setItem("KMBStopList_timestamp",n),localStorage.setItem("KMBStopList",o),t("Success!")}))}))}function g(){let t=localStorage.getItem("KMBRouteStopList_timestamp"),e=localStorage.getItem("KMBRouteStopList");if(t&&e){let e=p,r=new Date,n=h(t,r);if(n<e)return console.log("No need to download KMBRouteStopList"),new Promise((t=>{t("Success without download!")}))}return new Promise((t=>{o().get(a).then((e=>{let r=e.data,n=r.generated_timestamp,o=JSON.stringify(r.data);localStorage.setItem("KMBRouteStopList_timestamp",n),localStorage.setItem("KMBRouteStopList",o),t("Success!")}))}))}function A(t,e){let r=u.replace("{route}",t).replace("{service_type}",e);return new Promise((t=>{o().get(r).then((e=>{let r=e.data;t(r)}))}))}}}]);
//# sourceMappingURL=638.9b65655a.js.map