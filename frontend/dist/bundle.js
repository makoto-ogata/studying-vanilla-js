(()=>{var t={337:()=>{!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,r=n(e);r;)r=n(e=r.ownerDocument);return e}(),e=[],r=null,o=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return r||(r=function(t,r){o=t&&r?f(t,r):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),r},s._resetCrossOriginUpdater=function(){r=null,o=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var r=e.defaultView;if(r&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,s=null;if(this.POLL_INTERVAL?i=r.setInterval(o,this.POLL_INTERVAL):(a(r,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(s=new r.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),h(t,"resize",o,!0)),h(e,"scroll",o,!0),s&&s.disconnect()})),e!=(this.root&&this.root.ownerDocument||t)){var u=n(e);u&&this._monitorIntersections(u.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var r=this._monitoringDocuments.indexOf(e);if(-1!=r){var o=this.root&&this.root.ownerDocument||t;if(!this._observationTargets.some((function(t){var r=t.element.ownerDocument;if(r==e)return!0;for(;r&&r!=o;){var i=n(r);if((r=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),i(),e!=o){var s=n(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!r||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var n=o.element,s=u(n),a=this._rootContainsTarget(n),h=o.entry,c=t&&a&&this._computeTargetAndRootIntersection(n,s,e),f=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:s,rootBounds:r&&!this.root?null:e,intersectionRect:c});h?t&&a?this._hasCrossedThreshold(h,f)&&this._queuedEntries.push(f):h&&h.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,n,i){if("none"!=window.getComputedStyle(e).display){for(var s,a,h,c,l,p,y,b,m=n,g=d(e),w=!1;!w&&g;){var v=null,_=1==g.nodeType?window.getComputedStyle(g):{};if("none"==_.display)return null;if(g==this.root||9==g.nodeType)if(w=!0,g==this.root||g==t)r&&!this.root?!o||0==o.width&&0==o.height?(g=null,v=null,m=null):v=o:v=i;else{var E=d(g),T=E&&u(E),I=E&&this._computeTargetAndRootIntersection(E,T,i);T&&I?(g=E,v=f(T,I)):(g=null,m=null)}else{var A=g.ownerDocument;g!=A.body&&g!=A.documentElement&&"visible"!=_.overflow&&(v=u(g))}if(v&&(s=v,a=m,h=void 0,c=void 0,l=void 0,p=void 0,y=void 0,b=void 0,h=Math.max(s.top,a.top),c=Math.min(s.bottom,a.bottom),l=Math.max(s.left,a.left),p=Math.min(s.right,a.right),b=c-h,m=(y=p-l)>=0&&b>=0&&{top:h,bottom:c,left:l,right:p,width:y,height:b}||null),!m)break;g=g&&d(g)}return m}},s.prototype._getRootRect=function(){var e;if(this.root)e=u(this.root);else{var r=t.documentElement,o=t.body;e={top:0,left:0,right:r.clientWidth||o.clientWidth,width:r.clientWidth||o.clientWidth,bottom:r.clientHeight||o.clientHeight,height:r.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},s.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var n=0;n<this.thresholds.length;n++){var i=this.thresholds[n];if(i==r||i==o||i<r!=i<o)return!0}},s.prototype._rootIsInDom=function(){return!this.root||l(t,this.root)},s.prototype._rootContainsTarget=function(e){return l(this.root||t,e)&&(!this.root||this.root.ownerDocument==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function n(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=c(t.rootBounds),this.boundingClientRect=c(t.boundingClientRect),this.intersectionRect=c(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,o=this.intersectionRect,n=o.width*o.height;this.intersectionRatio=r?Number((n/r).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var r,o,n,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,n=null,function(){n||(n=setTimeout((function(){r(),n=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,r,o){"function"==typeof t.addEventListener?t.addEventListener(e,r,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function h(t,e,r,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var r=e.top-t.top,o=e.left-t.left;return{top:r,left:o,height:e.height,width:e.width,bottom:r+e.height,right:o+e.width}}function l(t,e){for(var r=e;r;){if(r==t)return!0;r=d(r)}return!1}function d(e){var r=e.parentNode;return 9==e.nodeType&&e!=t?n(e):r&&11==r.nodeType&&r.host?r.host:r&&r.assignedSlot?r.assignedSlot.parentNode:r}}()}},e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}(()=>{"use strict";var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==t&&t,e="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var r;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&n&&((r=t)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=d(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(y)}),this.text=function(){var t,e,r,o=d(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[u(t)]},l.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},l.prototype.set=function(t,e){this.map[u(t)]=c(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),g.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},m.call(w.prototype),m.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];_.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var T=t.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function I(e,r){return new Promise((function(o,i){var a=new w(e,r);if(a.signal&&a.signal.aborted)return i(new T("Aborted","AbortError"));var h=new XMLHttpRequest;function u(){h.abort()}h.onload=function(){var t,e,r={status:h.status,statusText:h.statusText,headers:(t=h.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in h?h.responseURL:r.headers.get("X-Request-URL");var n="response"in h?h.response:h.responseText;setTimeout((function(){o(new _(n,r))}),0)},h.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},h.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},h.onabort=function(){setTimeout((function(){i(new T("Aborted","AbortError"))}),0)},h.open(a.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?h.withCredentials=!0:"omit"===a.credentials&&(h.withCredentials=!1),"responseType"in h&&(n?h.responseType="blob":s&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(h.responseType="arraybuffer")),!r||"object"!=typeof r.headers||r.headers instanceof l?a.headers.forEach((function(t,e){h.setRequestHeader(e,t)})):Object.getOwnPropertyNames(r.headers).forEach((function(t){h.setRequestHeader(t,c(r.headers[t]))})),a.signal&&(a.signal.addEventListener("abort",u),h.onreadystatechange=function(){4===h.readyState&&a.signal.removeEventListener("abort",u)}),h.send(void 0===a._bodyInit?null:a._bodyInit)}))}I.polyfill=!0,t.fetch||(t.fetch=I,t.Headers=l,t.Request=w,t.Response=_),r(337);var A=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("show")}))}),{rootMargin:"-400px"});document.querySelectorAll(".message-box").forEach((function(t){A.observe(t)}));var R=fetch("http://coinbaby8.com/udemy_js_api/api/udemy_js",{method:"GET"}).then((function(t){return t.json()}));console.log(R),document.getElementById("button").addEventListener("click",(function(){var t=document.forms.post_form,e=new FormData(t);fetch("http://coinbaby8.com/udemy_js_api/api/udemy_js",{method:"post",body:e}).then((function(t){return t.ok?t.text():new Error})).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}))}))})()})();