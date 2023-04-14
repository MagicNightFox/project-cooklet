function c_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function h_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),d_=Symbol.for("react.portal"),f_=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),v_=Symbol.for("react.forward_ref"),w_=Symbol.for("react.suspense"),__=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),Tp=Symbol.iterator;function C_(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function bi(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=bi.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var md=pd.prototype=new gg;md.constructor=pd;pg(md,bi.prototype);md.isPureReactComponent=!0;var Np=Array.isArray,yg=Object.prototype.hasOwnProperty,gd={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,r)&&!vg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fo,type:t,key:s,ref:o,props:i,_owner:gd.current}}function S_(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function k_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k_(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fo:case d_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zu(o,0):r,Np(i)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),_a(i,e,n,"",function(u){return u})):i!=null&&(yd(i)&&(i=S_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zu(s,a);o+=_a(s,e,n,l,i)}else if(l=C_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zu(s,a++),o+=_a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function I_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Ea={transition:null},T_={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:gd};G.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=bi;G.Fragment=f_;G.Profiler=m_;G.PureComponent=pd;G.StrictMode=p_;G.Suspense=w_;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yg.call(e,l)&&!vg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fo,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g_,_context:t},t.Consumer=t};G.createElement=wg;G.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:v_,render:t}};G.isValidElement=yd;G.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:I_}};G.memo=function(t,e){return{$$typeof:__,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return ot.current.useCallback(t,e)};G.useContext=function(t){return ot.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};G.useEffect=function(t,e){return ot.current.useEffect(t,e)};G.useId=function(){return ot.current.useId()};G.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ot.current.useMemo(t,e)};G.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};G.useRef=function(t){return ot.current.useRef(t)};G.useState=function(t){return ot.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return ot.current.useTransition()};G.version="18.2.0";(function(t){t.exports=G})(S);const _g=h_(S.exports),bc=c_({__proto__:null,default:_g},[S.exports]);var Uc={},Eg={exports:{}},Ct={},Cg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,H){var W=A.length;A.push(H);e:for(;0<W;){var ge=W-1>>>1,xe=A[ge];if(0<i(xe,H))A[ge]=H,A[W]=xe,W=ge;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],W=A.pop();if(W!==H){A[0]=W;e:for(var ge=0,xe=A.length,Ho=xe>>>1;ge<Ho;){var ur=2*(ge+1)-1,ju=A[ur],cr=ur+1,Wo=A[cr];if(0>i(ju,W))cr<xe&&0>i(Wo,ju)?(A[ge]=Wo,A[cr]=W,ge=cr):(A[ge]=ju,A[ur]=W,ge=ur);else if(cr<xe&&0>i(Wo,W))A[ge]=Wo,A[cr]=W,ge=cr;else break e}}return H}function i(A,H){var W=A.sortIndex-H.sortIndex;return W!==0?W:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function _(A){if(w=!1,m(A),!v)if(n(l)!==null)v=!0,Vu(N);else{var H=n(u);H!==null&&Bu(_,H.startTime-A)}}function N(A,H){v=!1,w&&(w=!1,g(O),O=-1),y=!0;var W=d;try{for(m(H),h=n(l);h!==null&&(!(h.expirationTime>H)||A&&!Pt());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var xe=ge(h.expirationTime<=H);H=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&r(l),m(H)}else r(l);h=n(l)}if(h!==null)var Ho=!0;else{var ur=n(u);ur!==null&&Bu(_,ur.startTime-H),Ho=!1}return Ho}finally{h=null,d=W,y=!1}}var L=!1,D=null,O=-1,re=5,q=-1;function Pt(){return!(t.unstable_now()-q<re)}function Yi(){if(D!==null){var A=t.unstable_now();q=A;var H=!0;try{H=D(!0,A)}finally{H?Xi():(L=!1,D=null)}}else L=!1}var Xi;if(typeof p=="function")Xi=function(){p(Yi)};else if(typeof MessageChannel<"u"){var Ip=new MessageChannel,u_=Ip.port2;Ip.port1.onmessage=Yi,Xi=function(){u_.postMessage(null)}}else Xi=function(){C(Yi,0)};function Vu(A){D=A,L||(L=!0,Xi())}function Bu(A,H){O=C(function(){A(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Vu(N))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var W=d;d=H;try{return A()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=d;d=A;try{return H()}finally{d=W}},t.unstable_scheduleCallback=function(A,H,W){var ge=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,A){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,A={id:c++,callback:H,priorityLevel:A,startTime:W,expirationTime:xe,sortIndex:-1},W>ge?(A.sortIndex=W,e(u,A),n(l)===null&&A===n(u)&&(w?(g(O),O=-1):w=!0,Bu(_,W-ge))):(A.sortIndex=xe,e(l,A),v||y||(v=!0,Vu(N))),A},t.unstable_shouldYield=Pt,t.unstable_wrapCallback=function(A){var H=d;return function(){var W=d;d=H;try{return A.apply(this,arguments)}finally{d=W}}}})(Sg);(function(t){t.exports=Sg})(Cg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=S.exports,_t=Cg.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,Os={};function Vr(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Os[t]=e,t=0;t<e.length;t++)Ig.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},Rp={};function L_(t){return Fc.call(Rp,t)?!0:Fc.call(xp,t)?!1:N_.test(t)?Rp[t]=!0:(xp[t]=!0,!1)}function x_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R_(t,e,n,r){if(e===null||typeof e>"u"||x_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,wd);Ve[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,wd);Ve[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,wd);Ve[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R_(e,n,i,r)&&(n=null),r||i===null?L_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function Ji(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,Hu;function us(t){if(Hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hu=e&&e[1]||""}return`
`+Hu+t}var Wu=!1;function qu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?us(t):""}function D_(t){switch(t.tag){case 5:return us(t.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case Vc:return"Profiler";case Ed:return"StrictMode";case Bc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ng:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function P_(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=P_(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hc(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function Wc(t,e){Dg(t,e);var n=Yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,Yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var cs=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(cs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yn(n)}}function Ag(t,e){var n=Yn(e.value),r=Yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,Og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O_=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(t){O_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ws[e]=ws[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ws.hasOwnProperty(t)&&ws[t]?(""+e).trim():e+"px"}function $g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var M_=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(M_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xc=null,fi=null,pi=null;function $p(t){if(t=go(t)){if(typeof Xc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Bl(e),Xc(t.stateNode,t.type,e))}}function bg(t){fi?pi?pi.push(t):pi=[t]:fi=t}function Ug(){if(fi){var t=fi,e=pi;if(pi=fi=null,$p(t),e)for(t=0;t<e.length;t++)$p(e[t])}}function Fg(t,e){return t(e)}function Vg(){}var Ku=!1;function Bg(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return Fg(t,e,n)}finally{Ku=!1,(fi!==null||pi!==null)&&(Vg(),Ug())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Jc=!1;if(pn)try{var es={};Object.defineProperty(es,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Jc=!1}function $_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _s=!1,Ba=null,ja=!1,eh=null,b_={onError:function(t){_s=!0,Ba=t}};function U_(t,e,n,r,i,s,o,a,l){_s=!1,Ba=null,$_.apply(b_,arguments)}function F_(t,e,n,r,i,s,o,a,l){if(U_.apply(this,arguments),_s){if(_s){var u=Ba;_s=!1,Ba=null}else throw Error(k(198));ja||(ja=!0,eh=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(Br(t)!==t)throw Error(k(188))}function V_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bp(i),t;if(s===r)return bp(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function zg(t){return t=V_(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=_t.unstable_scheduleCallback,Up=_t.unstable_cancelCallback,B_=_t.unstable_shouldYield,j_=_t.unstable_requestPaint,ve=_t.unstable_now,z_=_t.unstable_getCurrentPriorityLevel,Id=_t.unstable_ImmediatePriority,qg=_t.unstable_UserBlockingPriority,za=_t.unstable_NormalPriority,H_=_t.unstable_LowPriority,Kg=_t.unstable_IdlePriority,bl=null,Gt=null;function W_(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:G_,q_=Math.log,K_=Math.LN2;function G_(t){return t>>>=0,t===0?32:31-(q_(t)/K_|0)|0}var Zo=64,Yo=4194304;function hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hs(a):(s&=o,s!==0&&(r=hs(s)))}else o=n&~i,o!==0?r=hs(o):s!==0&&(r=hs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function Q_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Q_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function Qg(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zg,Nd,Yg,Xg,Jg,nh=!1,Xo=[],Fn=null,Vn=null,Bn=null,bs=new Map,Us=new Map,Rn=[],X_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=go(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function J_(t,e,n,r,i){switch(e){case"focusin":return Fn=ts(Fn,t,e,n,r,i),!0;case"dragenter":return Vn=ts(Vn,t,e,n,r,i),!0;case"mouseover":return Bn=ts(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bs.set(s,ts(bs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,ts(Us.get(s)||null,t,e,n,r,i)),!0}return!1}function e0(t){var e=mr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=jg(n),e!==null){t.blockedOn=e,Jg(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=go(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Vp(t,e,n){Ca(t)&&n.delete(e)}function e4(){nh=!1,Fn!==null&&Ca(Fn)&&(Fn=null),Vn!==null&&Ca(Vn)&&(Vn=null),Bn!==null&&Ca(Bn)&&(Bn=null),bs.forEach(Vp),Us.forEach(Vp)}function ns(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,e4)))}function Fs(t){function e(i){return ns(i,t)}if(0<Xo.length){ns(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fn!==null&&ns(Fn,t),Vn!==null&&ns(Vn,t),Bn!==null&&ns(Bn,t),bs.forEach(e),Us.forEach(e),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)e0(n),n.blockedOn===null&&Rn.shift()}var mi=Sn.ReactCurrentBatchConfig,Wa=!0;function t4(t,e,n,r){var i=ee,s=mi.transition;mi.transition=null;try{ee=1,Ld(t,e,n,r)}finally{ee=i,mi.transition=s}}function n4(t,e,n,r){var i=ee,s=mi.transition;mi.transition=null;try{ee=4,Ld(t,e,n,r)}finally{ee=i,mi.transition=s}}function Ld(t,e,n,r){if(Wa){var i=rh(t,e,n,r);if(i===null)ic(t,e,r,qa,n),Fp(t,r);else if(J_(i,t,e,n,r))r.stopPropagation();else if(Fp(t,r),e&4&&-1<X_.indexOf(t)){for(;i!==null;){var s=go(i);if(s!==null&&Zg(s),s=rh(t,e,n,r),s===null&&ic(t,e,r,qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ic(t,e,r,null,n)}}var qa=null;function rh(t,e,n,r){if(qa=null,t=kd(r),t=mr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function t0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case Id:return 1;case qg:return 4;case za:case H_:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Mn=null,xd=null,Sa=null;function n0(){if(Sa)return Sa;var t,e=xd,n=e.length,r,i="value"in Mn?Mn.value:Mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sa=i.slice(t,1<r?1-r:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Bp(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Bp,this.isPropagationStopped=Bp,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=St(Ui),mo=fe({},Ui,{view:0,detail:0}),r4=St(mo),Qu,Zu,rs,Ul=fe({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==rs&&(rs&&t.type==="mousemove"?(Qu=t.screenX-rs.screenX,Zu=t.screenY-rs.screenY):Zu=Qu=0,rs=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),jp=St(Ul),i4=fe({},Ul,{dataTransfer:0}),s4=St(i4),o4=fe({},mo,{relatedTarget:0}),Yu=St(o4),a4=fe({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),l4=St(a4),u4=fe({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c4=St(u4),h4=fe({},Ui,{data:0}),zp=St(h4),d4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=p4[t])?!!e[t]:!1}function Dd(){return m4}var g4=fe({},mo,{key:function(t){if(t.key){var e=d4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y4=St(g4),v4=fe({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=St(v4),w4=fe({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),_4=St(w4),E4=fe({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),C4=St(E4),S4=fe({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k4=St(S4),I4=[9,13,27,32],Ad=pn&&"CompositionEvent"in window,Es=null;pn&&"documentMode"in document&&(Es=document.documentMode);var T4=pn&&"TextEvent"in window&&!Es,r0=pn&&(!Ad||Es&&8<Es&&11>=Es),Wp=String.fromCharCode(32),qp=!1;function i0(t,e){switch(t){case"keyup":return I4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function N4(t,e){switch(t){case"compositionend":return s0(e);case"keypress":return e.which!==32?null:(qp=!0,Wp);case"textInput":return t=e.data,t===Wp&&qp?null:t;default:return null}}function L4(t,e){if(ei)return t==="compositionend"||!Ad&&i0(t,e)?(t=n0(),Sa=xd=Mn=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r0&&e.locale!=="ko"?null:e.data;default:return null}}var x4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x4[t.type]:e==="textarea"}function o0(t,e,n,r){bg(r),e=Ka(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Cs=null,Vs=null;function R4(t){y0(t,0)}function Fl(t){var e=ri(t);if(Rg(e))return t}function D4(t,e){if(t==="change")return e}var a0=!1;if(pn){var Xu;if(pn){var Ju="oninput"in document;if(!Ju){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Ju=typeof Gp.oninput=="function"}Xu=Ju}else Xu=!1;a0=Xu&&(!document.documentMode||9<document.documentMode)}function Qp(){Cs&&(Cs.detachEvent("onpropertychange",l0),Vs=Cs=null)}function l0(t){if(t.propertyName==="value"&&Fl(Vs)){var e=[];o0(e,Vs,t,kd(t)),Bg(R4,e)}}function A4(t,e,n){t==="focusin"?(Qp(),Cs=e,Vs=n,Cs.attachEvent("onpropertychange",l0)):t==="focusout"&&Qp()}function P4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Vs)}function O4(t,e){if(t==="click")return Fl(e)}function M4(t,e){if(t==="input"||t==="change")return Fl(e)}function $4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:$4;function Bs(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,e){var n=Zp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function u0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function b4(t){var e=c0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u0(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yp(n,s);var o=Yp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U4=pn&&"documentMode"in document&&11>=document.documentMode,ti=null,ih=null,Ss=null,sh=!1;function Xp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||ti==null||ti!==Va(r)||(r=ti,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&Bs(Ss,r)||(Ss=r,r=Ka(ih,"onSelect"),0<r.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ti)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ni={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ec={},h0={};pn&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Vl(t){if(ec[t])return ec[t];if(!ni[t])return t;var e=ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h0)return ec[t]=e[n];return t}var d0=Vl("animationend"),f0=Vl("animationiteration"),p0=Vl("animationstart"),m0=Vl("transitionend"),g0=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){g0.set(t,e),Vr(e,[t])}for(var tc=0;tc<Jp.length;tc++){var nc=Jp[tc],F4=nc.toLowerCase(),V4=nc[0].toUpperCase()+nc.slice(1);rr(F4,"on"+V4)}rr(d0,"onAnimationEnd");rr(f0,"onAnimationIteration");rr(p0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(m0,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function e1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F_(r,e,void 0,t),t.currentTarget=null}function y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;e1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;e1(i,a,u),s=l}}}if(ja)throw t=eh,ja=!1,eh=null,t}function ie(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(v0(e,t,2,!1),n.add(r))}function rc(t,e,n){var r=0;e&&(r|=4),v0(n,t,r,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[ta]){t[ta]=!0,Ig.forEach(function(n){n!=="selectionchange"&&(B4.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,rc("selectionchange",!1,e))}}function v0(t,e,n,r){switch(t0(e)){case 1:var i=t4;break;case 4:i=n4;break;default:i=Ld}n=i.bind(null,e,n,t),i=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ic(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Bg(function(){var u=s,c=kd(n),h=[];e:{var d=g0.get(t);if(d!==void 0){var y=Rd,v=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":y=y4;break;case"focusin":v="focus",y=Yu;break;case"focusout":v="blur",y=Yu;break;case"beforeblur":case"afterblur":y=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=s4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_4;break;case d0:case f0:case p0:y=l4;break;case m0:y=C4;break;case"scroll":y=r4;break;case"wheel":y=k4;break;case"copy":case"cut":case"paste":y=c4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hp}var w=(e&4)!==0,C=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,m;p!==null;){m=p;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,g!==null&&(_=$s(p,g),_!=null&&w.push(zs(p,_,m)))),C)break;p=p.return}0<w.length&&(d=new y(d,v,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Yc&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[mn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?mr(v):null,v!==null&&(C=Br(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=jp,_="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Hp,_="onPointerLeave",g="onPointerEnter",p="pointer"),C=y==null?d:ri(y),m=v==null?d:ri(v),d=new w(_,p+"leave",y,n,c),d.target=C,d.relatedTarget=m,_=null,mr(c)===u&&(w=new w(g,p+"enter",v,n,c),w.target=m,w.relatedTarget=C,_=w),C=_,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=Qr(m))p++;for(m=0,_=g;_;_=Qr(_))m++;for(;0<p-m;)w=Qr(w),p--;for(;0<m-p;)g=Qr(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Qr(w),g=Qr(g)}w=null}else w=null;y!==null&&t1(h,d,y,w,!1),v!==null&&C!==null&&t1(h,C,v,w,!0)}}e:{if(d=u?ri(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var N=D4;else if(Kp(d))if(a0)N=M4;else{N=P4;var L=A4}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=O4);if(N&&(N=N(t,u))){o0(h,N,n,c);break e}L&&L(t,d,u),t==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&qc(d,"number",d.value)}switch(L=u?ri(u):window,t){case"focusin":(Kp(L)||L.contentEditable==="true")&&(ti=L,ih=u,Ss=null);break;case"focusout":Ss=ih=ti=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,Xp(h,n,c);break;case"selectionchange":if(U4)break;case"keydown":case"keyup":Xp(h,n,c)}var D;if(Ad)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ei?i0(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(r0&&n.locale!=="ko"&&(ei||O!=="onCompositionStart"?O==="onCompositionEnd"&&ei&&(D=n0()):(Mn=c,xd="value"in Mn?Mn.value:Mn.textContent,ei=!0)),L=Ka(u,O),0<L.length&&(O=new zp(O,t,null,n,c),h.push({event:O,listeners:L}),D?O.data=D:(D=s0(n),D!==null&&(O.data=D)))),(D=T4?N4(t,n):L4(t,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new zp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}y0(h,e)})}function zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(zs(t,s,i)),s=$s(t,e),s!=null&&r.push(zs(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$s(n,s),l!=null&&o.unshift(zs(n,l,a))):i||(l=$s(n,s),l!=null&&o.push(zs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j4=/\r\n?/g,z4=/\u0000|\uFFFD/g;function n1(t){return(typeof t=="string"?t:""+t).replace(j4,`
`).replace(z4,"")}function na(t,e,n){if(e=n1(e),n1(t)!==e&&n)throw Error(k(425))}function Ga(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,H4=typeof clearTimeout=="function"?clearTimeout:void 0,r1=typeof Promise=="function"?Promise:void 0,W4=typeof queueMicrotask=="function"?queueMicrotask:typeof r1<"u"?function(t){return r1.resolve(null).then(t).catch(q4)}:uh;function q4(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fs(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Fi,Hs="__reactProps$"+Fi,mn="__reactContainer$"+Fi,ch="__reactEvents$"+Fi,K4="__reactListeners$"+Fi,G4="__reactHandles$"+Fi;function mr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i1(t);t!==null;){if(n=t[qt])return n;t=i1(t)}return e}t=n,n=t.parentNode}return null}function go(t){return t=t[qt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Bl(t){return t[Hs]||null}var hh=[],ii=-1;function ir(t){return{current:t}}function oe(t){0>ii||(t.current=hh[ii],hh[ii]=null,ii--)}function te(t,e){ii++,hh[ii]=t.current,t.current=e}var Xn={},Xe=ir(Xn),dt=ir(!1),Nr=Xn;function Si(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Qa(){oe(dt),oe(Xe)}function s1(t,e,n){if(Xe.current!==Xn)throw Error(k(168));te(Xe,e),te(dt,n)}function w0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,A_(t)||"Unknown",i));return fe({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,Nr=Xe.current,te(Xe,t),te(dt,dt.current),!0}function o1(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=w0(t,e,Nr),r.__reactInternalMemoizedMergedChildContext=t,oe(dt),oe(Xe),te(Xe,t)):oe(dt),te(dt,n)}var sn=null,jl=!1,oc=!1;function _0(t){sn===null?sn=[t]:sn.push(t)}function Q4(t){jl=!0,_0(t)}function sr(){if(!oc&&sn!==null){oc=!0;var t=0,e=ee;try{var n=sn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,jl=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Wg(Id,sr),i}finally{ee=e,oc=!1}}return null}var si=[],oi=0,Ya=null,Xa=0,kt=[],It=0,Lr=null,an=1,ln="";function dr(t,e){si[oi++]=Xa,si[oi++]=Ya,Ya=t,Xa=e}function E0(t,e,n){kt[It++]=an,kt[It++]=ln,kt[It++]=Lr,Lr=t;var r=an;t=ln;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-Ft(e)+i|n<<i|r,ln=s+t}else an=1<<s|n<<i|r,ln=t}function Od(t){t.return!==null&&(dr(t,1),E0(t,1,0))}function Md(t){for(;t===Ya;)Ya=si[--oi],si[oi]=null,Xa=si[--oi],si[oi]=null;for(;t===Lr;)Lr=kt[--It],kt[It]=null,ln=kt[--It],kt[It]=null,an=kt[--It],kt[It]=null}var wt=null,gt=null,le=!1,Ut=null;function C0(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,gt=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:an,overflow:ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,gt=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(le){var e=gt;if(e){var n=e;if(!a1(t,e)){if(dh(t))throw Error(k(418));e=jn(n.nextSibling);var r=wt;e&&a1(t,e)?C0(r,n):(t.flags=t.flags&-4097|2,le=!1,wt=t)}}else{if(dh(t))throw Error(k(418));t.flags=t.flags&-4097|2,le=!1,wt=t}}}function l1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ra(t){if(t!==wt)return!1;if(!le)return l1(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=gt)){if(dh(t))throw S0(),Error(k(418));for(;e;)C0(t,e),e=jn(e.nextSibling)}if(l1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=wt?jn(t.stateNode.nextSibling):null;return!0}function S0(){for(var t=gt;t;)t=jn(t.nextSibling)}function ki(){gt=wt=null,le=!1}function $d(t){Ut===null?Ut=[t]:Ut.push(t)}var Z4=Sn.ReactCurrentBatchConfig;function $t(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ja=ir(null),el=null,ai=null,bd=null;function Ud(){bd=ai=el=null}function Fd(t){var e=Ja.current;oe(Ja),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gi(t,e){el=t,bd=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ht=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},ai===null){if(el===null)throw Error(k(308));ai=t,el.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return e}var gr=null;function Vd(t){gr===null?gr=[t]:gr.push(t)}function k0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vd(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,Vd(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function Ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function u1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(y,h,d):v,d==null)break e;h=fe({},h,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=h}}function c1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var T0=new kg.Component().refs;function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Wn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Vt(e,t,i,r),Ia(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Wn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Vt(e,t,i,r),Ia(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Wn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Vt(e,t,r,n),Ia(e,t,r))}};function h1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bs(n,r)||!Bs(i,s):!0}function N0(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=ft(e)?Nr:Xe.current,r=e.contextTypes,s=(r=r!=null)?Si(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function d1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=T0,Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=ft(e)?Nr:Xe.current,i.context=Si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===T0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function ia(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function f1(t){var e=t._init;return e(t._payload)}function L0(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=qn(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,_){return p===null||p.tag!==6?(p=fc(m,g.mode,_),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,_){var N=m.type;return N===Jr?c(g,p,m.props.children,_,m.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ln&&f1(N)===p.type)?(_=i(p,m.props),_.ref=is(g,p,m),_.return=g,_):(_=Da(m.type,m.key,m.props,null,g.mode,_),_.ref=is(g,p,m),_.return=g,_)}function u(g,p,m,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=pc(m,g.mode,_),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,_,N){return p===null||p.tag!==7?(p=Cr(m,g.mode,_,N),p.return=g,p):(p=i(p,m),p.return=g,p)}function h(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fc(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ko:return m=Da(p.type,p.key,p.props,null,g.mode,m),m.ref=is(g,null,p),m.return=g,m;case Xr:return p=pc(p,g.mode,m),p.return=g,p;case Ln:var _=p._init;return h(g,_(p._payload),m)}if(cs(p)||Ji(p))return p=Cr(p,g.mode,m,null),p.return=g,p;ia(g,p)}return null}function d(g,p,m,_){var N=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:a(g,p,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ko:return m.key===N?l(g,p,m,_):null;case Xr:return m.key===N?u(g,p,m,_):null;case Ln:return N=m._init,d(g,p,N(m._payload),_)}if(cs(m)||Ji(m))return N!==null?null:c(g,p,m,_,null);ia(g,m)}return null}function y(g,p,m,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(m)||null,a(p,g,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return g=g.get(_.key===null?m:_.key)||null,l(p,g,_,N);case Xr:return g=g.get(_.key===null?m:_.key)||null,u(p,g,_,N);case Ln:var L=_._init;return y(g,p,m,L(_._payload),N)}if(cs(_)||Ji(_))return g=g.get(m)||null,c(p,g,_,N,null);ia(p,_)}return null}function v(g,p,m,_){for(var N=null,L=null,D=p,O=p=0,re=null;D!==null&&O<m.length;O++){D.index>O?(re=D,D=null):re=D.sibling;var q=d(g,D,m[O],_);if(q===null){D===null&&(D=re);break}t&&D&&q.alternate===null&&e(g,D),p=s(q,p,O),L===null?N=q:L.sibling=q,L=q,D=re}if(O===m.length)return n(g,D),le&&dr(g,O),N;if(D===null){for(;O<m.length;O++)D=h(g,m[O],_),D!==null&&(p=s(D,p,O),L===null?N=D:L.sibling=D,L=D);return le&&dr(g,O),N}for(D=r(g,D);O<m.length;O++)re=y(D,g,O,m[O],_),re!==null&&(t&&re.alternate!==null&&D.delete(re.key===null?O:re.key),p=s(re,p,O),L===null?N=re:L.sibling=re,L=re);return t&&D.forEach(function(Pt){return e(g,Pt)}),le&&dr(g,O),N}function w(g,p,m,_){var N=Ji(m);if(typeof N!="function")throw Error(k(150));if(m=N.call(m),m==null)throw Error(k(151));for(var L=N=null,D=p,O=p=0,re=null,q=m.next();D!==null&&!q.done;O++,q=m.next()){D.index>O?(re=D,D=null):re=D.sibling;var Pt=d(g,D,q.value,_);if(Pt===null){D===null&&(D=re);break}t&&D&&Pt.alternate===null&&e(g,D),p=s(Pt,p,O),L===null?N=Pt:L.sibling=Pt,L=Pt,D=re}if(q.done)return n(g,D),le&&dr(g,O),N;if(D===null){for(;!q.done;O++,q=m.next())q=h(g,q.value,_),q!==null&&(p=s(q,p,O),L===null?N=q:L.sibling=q,L=q);return le&&dr(g,O),N}for(D=r(g,D);!q.done;O++,q=m.next())q=y(D,g,O,q.value,_),q!==null&&(t&&q.alternate!==null&&D.delete(q.key===null?O:q.key),p=s(q,p,O),L===null?N=q:L.sibling=q,L=q);return t&&D.forEach(function(Yi){return e(g,Yi)}),le&&dr(g,O),N}function C(g,p,m,_){if(typeof m=="object"&&m!==null&&m.type===Jr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ko:e:{for(var N=m.key,L=p;L!==null;){if(L.key===N){if(N=m.type,N===Jr){if(L.tag===7){n(g,L.sibling),p=i(L,m.props.children),p.return=g,g=p;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ln&&f1(N)===L.type){n(g,L.sibling),p=i(L,m.props),p.ref=is(g,L,m),p.return=g,g=p;break e}n(g,L);break}else e(g,L);L=L.sibling}m.type===Jr?(p=Cr(m.props.children,g.mode,_,m.key),p.return=g,g=p):(_=Da(m.type,m.key,m.props,null,g.mode,_),_.ref=is(g,p,m),_.return=g,g=_)}return o(g);case Xr:e:{for(L=m.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=pc(m,g.mode,_),p.return=g,g=p}return o(g);case Ln:return L=m._init,C(g,p,L(m._payload),_)}if(cs(m))return v(g,p,m,_);if(Ji(m))return w(g,p,m,_);ia(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=fc(m,g.mode,_),p.return=g,g=p),o(g)):n(g,p)}return C}var Ii=L0(!0),x0=L0(!1),yo={},Qt=ir(yo),Ws=ir(yo),qs=ir(yo);function yr(t){if(t===yo)throw Error(k(174));return t}function jd(t,e){switch(te(qs,e),te(Ws,t),te(Qt,yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}oe(Qt),te(Qt,e)}function Ti(){oe(Qt),oe(Ws),oe(qs)}function R0(t){yr(qs.current);var e=yr(Qt.current),n=Gc(e,t.type);e!==n&&(te(Ws,t),te(Qt,n))}function zd(t){Ws.current===t&&(oe(Qt),oe(Ws))}var he=ir(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function Hd(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Ta=Sn.ReactCurrentDispatcher,lc=Sn.ReactCurrentBatchConfig,xr=0,de=null,ke=null,De=null,rl=!1,ks=!1,Ks=0,Y4=0;function je(){throw Error(k(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function qd(t,e,n,r,i,s){if(xr=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=t===null||t.memoizedState===null?tE:nE,t=n(r,i),ks){s=0;do{if(ks=!1,Ks=0,25<=s)throw Error(k(301));s+=1,De=ke=null,e.updateQueue=null,Ta.current=rE,t=n(r,i)}while(ks)}if(Ta.current=il,e=ke!==null&&ke.next!==null,xr=0,De=ke=de=null,rl=!1,e)throw Error(k(300));return t}function Kd(){var t=Ks!==0;return Ks=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?de.memoizedState=De=t:De=De.next=t,De}function Rt(){if(ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=De===null?de.memoizedState:De.next;if(e!==null)De=e,ke=t;else{if(t===null)throw Error(k(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},De===null?de.memoizedState=De=t:De=De.next=t}return De}function Gs(t,e){return typeof e=="function"?e(t):e}function uc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,de.lanes|=c,Rr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Bt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Rr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function D0(){}function A0(t,e){var n=de,r=Rt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Gd(M0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Qs(9,O0.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(k(349));(xr&30)!==0||P0(n,e,i)}return i}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,$0(e)&&b0(t)}function M0(t,e,n){return n(function(){$0(e)&&b0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function b0(t){var e=gn(t,1);e!==null&&Vt(e,t,1,-1)}function p1(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:t},e.queue=t,t=t.dispatch=eE.bind(null,de,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U0(){return Rt().memoizedState}function Na(t,e,n,r){var i=Wt();de.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Wd(r,o.deps)){i.memoizedState=Qs(e,n,s,r);return}}de.flags|=t,i.memoizedState=Qs(1|e,n,s,r)}function m1(t,e){return Na(8390656,8,t,e)}function Gd(t,e){return Hl(2048,8,t,e)}function F0(t,e){return Hl(4,2,t,e)}function V0(t,e){return Hl(4,4,t,e)}function B0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j0(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,B0.bind(null,e,t),n)}function Qd(){}function z0(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W0(t,e,n){return(xr&21)===0?(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n):(Bt(n,e)||(n=Gg(),de.lanes|=n,Rr|=n,t.baseState=!0),e)}function X4(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=lc.transition;lc.transition={};try{t(!1),e()}finally{ee=n,lc.transition=r}}function q0(){return Rt().memoizedState}function J4(t,e,n){var r=Wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))G0(e,n);else if(n=k0(t,e,n,r),n!==null){var i=it();Vt(n,t,r,i),Q0(n,e,r)}}function eE(t,e,n){var r=Wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))G0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bt(a,o)){var l=e.interleaved;l===null?(i.next=i,Vd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=k0(t,e,i,r),n!==null&&(i=it(),Vt(n,t,r,i),Q0(n,e,r))}}function K0(t){var e=t.alternate;return t===de||e!==null&&e===de}function G0(t,e){ks=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var il={readContext:xt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},tE={readContext:xt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:m1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,B0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=J4.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:p1,useDebugValue:Qd,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=p1(!1),e=t[0];return t=X4.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=Wt();if(le){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ae===null)throw Error(k(349));(xr&30)!==0||P0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,m1(M0.bind(null,r,s,t),[t]),r.flags|=2048,Qs(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Ae.identifierPrefix;if(le){var n=ln,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nE={readContext:xt,useCallback:z0,useContext:xt,useEffect:Gd,useImperativeHandle:j0,useInsertionEffect:F0,useLayoutEffect:V0,useMemo:H0,useReducer:uc,useRef:U0,useState:function(){return uc(Gs)},useDebugValue:Qd,useDeferredValue:function(t){var e=Rt();return W0(e,ke.memoizedState,t)},useTransition:function(){var t=uc(Gs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:A0,useId:q0,unstable_isNewReconciler:!1},rE={readContext:xt,useCallback:z0,useContext:xt,useEffect:Gd,useImperativeHandle:j0,useInsertionEffect:F0,useLayoutEffect:V0,useMemo:H0,useReducer:cc,useRef:U0,useState:function(){return cc(Gs)},useDebugValue:Qd,useDeferredValue:function(t){var e=Rt();return ke===null?e.memoizedState=t:W0(e,ke.memoizedState,t)},useTransition:function(){var t=cc(Gs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:A0,useId:q0,unstable_isNewReconciler:!1};function Ni(t,e){try{var n="",r=e;do n+=D_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function Z0(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,Nh=r),yh(t,e)},n}function Y0(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function g1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vE.bind(null,t,e,n),e.then(t,t))}function y1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var sE=Sn.ReactCurrentOwner,ht=!1;function nt(t,e,n,r){e.child=t===null?x0(e,null,n,r):Ii(e,t.child,n,r)}function w1(t,e,n,r,i){n=n.render;var s=e.ref;return gi(e,i),r=qd(t,e,n,r,s,i),n=Kd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(le&&n&&Od(e),e.flags|=1,nt(t,e,r,i),e.child)}function _1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,r,i)):(t=Da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bs(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ht=!0);else return e.lanes=t.lanes,yn(t,e,i)}return vh(t,e,n,r,i)}function J0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ui,mt),mt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(ui,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(ui,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(ui,mt),mt|=r;return nt(t,e,i,n),e.child}function ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=ft(n)?Nr:Xe.current;return s=Si(e,s),gi(e,i),n=qd(t,e,n,r,s,i),r=Kd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(le&&r&&Od(e),e.flags|=1,nt(t,e,n,i),e.child)}function E1(t,e,n,r,i){if(ft(n)){var s=!0;Za(e)}else s=!1;if(gi(e,i),e.stateNode===null)La(t,e),N0(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=ft(n)?Nr:Xe.current,u=Si(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&d1(e,o,r,u),xn=!1;var d=e.memoizedState;o.state=d,tl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||dt.current||xn?(typeof c=="function"&&(mh(e,n,c,r),l=e.memoizedState),(a=xn||h1(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,I0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$t(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xt(l):(l=ft(n)?Nr:Xe.current,l=Si(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&d1(e,o,r,l),xn=!1,d=e.memoizedState,o.state=d,tl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||dt.current||xn?(typeof y=="function"&&(mh(e,n,y,r),v=e.memoizedState),(u=xn||h1(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){ey(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&o1(e,n,!1),yn(t,e,s);r=e.stateNode,sE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ii(e,t.child,null,s),e.child=Ii(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&o1(e,n,!0),e.child}function ty(t){var e=t.stateNode;e.pendingContext?s1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s1(t,e.context,!1),jd(t,e.containerInfo)}function C1(t,e,n,r,i){return ki(),$d(i),e.flags|=256,nt(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ny(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(he,i&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eh(n),e.memoizedState=_h,t):Zd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qn(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return s=t.child,t=s.sibling,r=qn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,r){return r!==null&&$d(r),Ii(e,t.child,null,n),t=Zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hc(Error(k(422))),sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ii(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=_h,s);if((e.mode&1)===0)return sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=hc(s,r,void 0),sa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Vt(r,t,i,-1))}return nf(),r=hc(Error(k(421))),sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=jn(i.nextSibling),wt=e,le=!0,Ut=null,t!==null&&(kt[It++]=an,kt[It++]=ln,kt[It++]=Lr,an=t.id,ln=t.overflow,Lr=e),e=Zd(e,r.children),e.flags|=4096,e)}function S1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ry(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S1(t,n,e);else if(t.tag===19)S1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(he,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aE(t,e,n){switch(e.tag){case 3:ty(e),ki();break;case 5:R0(e);break;case 1:ft(e.type)&&Za(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(he,he.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?ny(t,e,n):(te(he,he.current&1),t=yn(t,e,n),t!==null?t.sibling:null);te(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return ry(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,n)}return yn(t,e,n)}var iy,Ch,sy,oy;iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};sy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(Qt.current);var s=null;switch(n){case"input":i=Hc(t,i),r=Hc(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(t,i),r=Kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ga)}Qc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Os.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Os.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};oy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ss(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lE(t,e,n){var r=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(e),null;case 1:return ft(e.type)&&Qa(),ze(e),null;case 3:return r=e.stateNode,Ti(),oe(dt),oe(Xe),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ut!==null&&(Rh(Ut),Ut=null))),Ch(t,e),ze(e),null;case 5:zd(e);var i=yr(qs.current);if(n=e.type,t!==null&&e.stateNode!=null)sy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ze(e),null}if(t=yr(Qt.current),ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[Hs]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)ie(ds[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Ap(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Op(r,s),ie("invalid",r)}Qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(r.textContent,a,t),i=["children",""+a]):Os.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Go(r),Pp(r,s,!0);break;case"textarea":Go(r),Mp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[Hs]=r,iy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)ie(ds[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Ap(t,r),i=Hc(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Op(t,r),i=Kc(t,r),ie("invalid",t);break;default:i=r}Qc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Os.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&_d(t,s,l,o))}switch(n){case"input":Go(t),Pp(t,r,!1);break;case"textarea":Go(t),Mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?di(t,!!r.multiple,s,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ze(e),null;case 6:if(t&&e.stateNode!=null)oy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=yr(qs.current),yr(Qt.current),ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return ze(e),null;case 13:if(oe(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&gt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)S0(),ki(),e.flags|=98560,s=!1;else if(s=ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[qt]=e}else ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ze(e),s=!1}else Ut!==null&&(Rh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(he.current&1)!==0?Ie===0&&(Ie=3):nf())),e.updateQueue!==null&&(e.flags|=4),ze(e),null);case 4:return Ti(),Ch(t,e),t===null&&js(e.stateNode.containerInfo),ze(e),null;case 10:return Fd(e.type._context),ze(e),null;case 17:return ft(e.type)&&Qa(),ze(e),null;case 19:if(oe(he),s=e.memoizedState,s===null)return ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ss(s,!1);else{if(Ie!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>Li&&(e.flags|=128,r=!0,ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return ze(e),null}else 2*ve()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,n=he.current,te(he,r?n&1|2:n&1),e):(ze(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(mt&1073741824)!==0&&(ze(e),e.subtreeFlags&6&&(e.flags|=8192)):ze(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function uE(t,e){switch(Md(e),e.tag){case 1:return ft(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ti(),oe(dt),oe(Xe),Hd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(oe(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(he),null;case 4:return Ti(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var oa=!1,Ke=!1,cE=typeof WeakSet=="function"?WeakSet:Set,R=null;function li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Sh(t,e,n){try{n()}catch(r){pe(t,e,r)}}var k1=!1;function hE(t,e){if(oh=Wa,t=c0(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},Wa=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:$t(e.type,w),C);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){pe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return v=k1,k1=!1,v}function Is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sh(e,n,s)}i=i.next}while(i!==r)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ay(t){var e=t.alternate;e!==null&&(t.alternate=null,ay(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[Hs],delete e[ch],delete e[K4],delete e[G4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ly(t){return t.tag===5||t.tag===3||t.tag===4}function I1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ga));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var $e=null,bt=!1;function In(t,e,n){for(n=n.child;n!==null;)uy(t,e,n),n=n.sibling}function uy(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Ke||li(n,e);case 6:var r=$e,i=bt;$e=null,In(t,e,n),$e=r,bt=i,$e!==null&&(bt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(bt?(t=$e,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),Fs(t)):sc($e,n.stateNode));break;case 4:r=$e,i=bt,$e=n.stateNode.containerInfo,bt=!0,In(t,e,n),$e=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Sh(n,e,o),i=i.next}while(i!==r)}In(t,e,n);break;case 1:if(!Ke&&(li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}In(t,e,n);break;case 21:In(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,In(t,e,n),Ke=r):In(t,e,n);break;default:In(t,e,n)}}function T1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cE),e.forEach(function(r){var i=_E.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,bt=!1;break e;case 3:$e=a.stateNode.containerInfo,bt=!0;break e;case 4:$e=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if($e===null)throw Error(k(160));uy(s,o,i),$e=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cy(e,t),e=e.sibling}function cy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),Ht(t),r&4){try{Is(3,t,t.return),Wl(3,t)}catch(w){pe(t,t.return,w)}try{Is(5,t,t.return)}catch(w){pe(t,t.return,w)}}break;case 1:Ot(e,t),Ht(t),r&512&&n!==null&&li(n,n.return);break;case 5:if(Ot(e,t),Ht(t),r&512&&n!==null&&li(n,n.return),t.flags&32){var i=t.stateNode;try{Ms(i,"")}catch(w){pe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dg(i,s),Zc(a,o);var u=Zc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?$g(i,h):c==="dangerouslySetInnerHTML"?Og(i,h):c==="children"?Ms(i,h):_d(i,c,h,u)}switch(a){case"input":Wc(i,s);break;case"textarea":Ag(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?di(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hs]=s}catch(w){pe(t,t.return,w)}}break;case 6:if(Ot(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){pe(t,t.return,w)}}break;case 3:if(Ot(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fs(e.containerInfo)}catch(w){pe(t,t.return,w)}break;case 4:Ot(e,t),Ht(t);break;case 13:Ot(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jd=ve())),r&4&&T1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Ot(e,t),Ke=u):Ot(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,y=d.child,d.tag){case 0:case 11:case 14:case 15:Is(4,d,d.return);break;case 1:li(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){pe(r,n,w)}}break;case 5:li(d,d.return);break;case 22:if(d.memoizedState!==null){L1(h);continue}}y!==null?(y.return=d,R=y):L1(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mg("display",o))}catch(w){pe(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){pe(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ot(e,t),Ht(t),r&4&&T1(t);break;case 21:break;default:Ot(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ly(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var s=I1(t);Th(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=I1(t);Ih(t,a,o);break;default:throw Error(k(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dE(t,e,n){R=t,hy(t)}function hy(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=oa;var u=Ke;if(oa=o,(Ke=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?x1(i):l!==null?(l.return=o,R=l):x1(i);for(;s!==null;)R=s,hy(s),s=s.sibling;R=i,oa=a,Ke=u}N1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,R=s):N1(t)}}function N1(t){for(;R!==null;){var e=R;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ke||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&c1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ke||e.flags&512&&kh(e)}catch(d){pe(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function L1(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function x1(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{kh(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{kh(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var fE=Math.ceil,sl=Sn.ReactCurrentDispatcher,Yd=Sn.ReactCurrentOwner,Nt=Sn.ReactCurrentBatchConfig,Z=0,Ae=null,Ee=null,Ue=0,mt=0,ui=ir(0),Ie=0,Zs=null,Rr=0,ql=0,Xd=0,Ts=null,ut=null,Jd=0,Li=1/0,rn=null,ol=!1,Nh=null,Hn=null,aa=!1,$n=null,al=0,Ns=0,Lh=null,xa=-1,Ra=0;function it(){return(Z&6)!==0?ve():xa!==-1?xa:xa=ve()}function Wn(t){return(t.mode&1)===0?1:(Z&2)!==0&&Ue!==0?Ue&-Ue:Z4.transition!==null?(Ra===0&&(Ra=Gg()),Ra):(t=ee,t!==0||(t=window.event,t=t===void 0?16:t0(t.type)),t)}function Vt(t,e,n,r){if(50<Ns)throw Ns=0,Lh=null,Error(k(185));po(t,n,r),((Z&2)===0||t!==Ae)&&(t===Ae&&((Z&2)===0&&(ql|=n),Ie===4&&Dn(t,Ue)),pt(t,r),n===1&&Z===0&&(e.mode&1)===0&&(Li=ve()+500,jl&&sr()))}function pt(t,e){var n=t.callbackNode;Z_(t,e);var r=Ha(t,t===Ae?Ue:0);if(r===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?Q4(R1.bind(null,t)):_0(R1.bind(null,t)),W4(function(){(Z&6)===0&&sr()}),n=null;else{switch(Qg(r)){case 1:n=Id;break;case 4:n=qg;break;case 16:n=za;break;case 536870912:n=Kg;break;default:n=za}n=wy(n,dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dy(t,e){if(xa=-1,Ra=0,(Z&6)!==0)throw Error(k(327));var n=t.callbackNode;if(yi()&&t.callbackNode!==n)return null;var r=Ha(t,t===Ae?Ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ll(t,r);else{e=r;var i=Z;Z|=2;var s=py();(Ae!==t||Ue!==e)&&(rn=null,Li=ve()+500,Er(t,e));do try{gE();break}catch(a){fy(t,a)}while(1);Ud(),sl.current=s,Z=i,Ee!==null?e=0:(Ae=null,Ue=0,e=Ie)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=xh(t,i))),e===1)throw n=Zs,Er(t,0),Dn(t,r),pt(t,ve()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!pE(i)&&(e=ll(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=xh(t,s))),e===1))throw n=Zs,Er(t,0),Dn(t,r),pt(t,ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:fr(t,ut,rn);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=Jd+500-ve(),10<e)){if(Ha(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(fr.bind(null,t,ut,rn),e);break}fr(t,ut,rn);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fE(r/1960))-r,10<r){t.timeoutHandle=uh(fr.bind(null,t,ut,rn),r);break}fr(t,ut,rn);break;case 5:fr(t,ut,rn);break;default:throw Error(k(329))}}}return pt(t,ve()),t.callbackNode===n?dy.bind(null,t):null}function xh(t,e){var n=Ts;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=ll(t,e),t!==2&&(e=ut,ut=n,e!==null&&Rh(e)),t}function Rh(t){ut===null?ut=t:ut.push.apply(ut,t)}function pE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~Xd,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function R1(t){if((Z&6)!==0)throw Error(k(327));yi();var e=Ha(t,0);if((e&1)===0)return pt(t,ve()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=Zs,Er(t,0),Dn(t,e),pt(t,ve()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,ut,rn),pt(t,ve()),null}function ef(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Li=ve()+500,jl&&sr())}}function Dr(t){$n!==null&&$n.tag===0&&(Z&6)===0&&yi();var e=Z;Z|=1;var n=Nt.transition,r=ee;try{if(Nt.transition=null,ee=1,t)return t()}finally{ee=r,Nt.transition=n,Z=e,(Z&6)===0&&sr()}}function tf(){mt=ui.current,oe(ui)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,H4(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Ti(),oe(dt),oe(Xe),Hd();break;case 5:zd(r);break;case 4:Ti();break;case 13:oe(he);break;case 19:oe(he);break;case 10:Fd(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Ae=t,Ee=t=qn(t.current,null),Ue=mt=e,Ie=0,Zs=null,Xd=ql=Rr=0,ut=Ts=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gr=null}return t}function fy(t,e){do{var n=Ee;try{if(Ud(),Ta.current=il,rl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(xr=0,De=ke=de=null,ks=!1,Ks=0,Yd.current=null,n===null||n.return===null){Ie=1,Zs=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=y1(o);if(y!==null){y.flags&=-257,v1(y,o,a,s,e),y.mode&1&&g1(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){g1(s,u,e),nf();break e}l=Error(k(426))}}else if(le&&a.mode&1){var C=y1(o);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),v1(C,o,a,s,e),$d(Ni(l,a));break e}}s=l=Ni(l,a),Ie!==4&&(Ie=2),Ts===null?Ts=[s]:Ts.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Z0(s,l,e);u1(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Y0(s,a,e);u1(s,_);break e}}s=s.return}while(s!==null)}gy(n)}catch(N){e=N,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function py(){var t=sl.current;return sl.current=il,t===null?il:t}function nf(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||(Rr&268435455)===0&&(ql&268435455)===0||Dn(Ae,Ue)}function ll(t,e){var n=Z;Z|=2;var r=py();(Ae!==t||Ue!==e)&&(rn=null,Er(t,e));do try{mE();break}catch(i){fy(t,i)}while(1);if(Ud(),Z=n,sl.current=r,Ee!==null)throw Error(k(261));return Ae=null,Ue=0,Ie}function mE(){for(;Ee!==null;)my(Ee)}function gE(){for(;Ee!==null&&!B_();)my(Ee)}function my(t){var e=vy(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?gy(t):Ee=e,Yd.current=null}function gy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=lE(n,e,mt),n!==null){Ee=n;return}}else{if(n=uE(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,Ee=null;return}}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);Ie===0&&(Ie=5)}function fr(t,e,n){var r=ee,i=Nt.transition;try{Nt.transition=null,ee=1,yE(t,e,n,r)}finally{Nt.transition=i,ee=r}return null}function yE(t,e,n,r){do yi();while($n!==null);if((Z&6)!==0)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y_(t,s),t===Ae&&(Ee=Ae=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||aa||(aa=!0,wy(za,function(){return yi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Nt.transition,Nt.transition=null;var o=ee;ee=1;var a=Z;Z|=4,Yd.current=null,hE(t,n),cy(n,t),b4(ah),Wa=!!oh,ah=oh=null,t.current=n,dE(n),j_(),Z=a,ee=o,Nt.transition=s}else t.current=n;if(aa&&(aa=!1,$n=t,al=i),s=t.pendingLanes,s===0&&(Hn=null),W_(n.stateNode),pt(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=Nh,Nh=null,t;return(al&1)!==0&&t.tag!==0&&yi(),s=t.pendingLanes,(s&1)!==0?t===Lh?Ns++:(Ns=0,Lh=t):Ns=0,sr(),null}function yi(){if($n!==null){var t=Qg(al),e=Nt.transition,n=ee;try{if(Nt.transition=null,ee=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,al=0,(Z&6)!==0)throw Error(k(331));var i=Z;for(Z|=4,R=t.current;R!==null;){var s=R,o=s.child;if((R.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Is(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,y=c.return;if(ay(c),c===u){R=null;break}if(d!==null){d.return=y,R=d;break}R=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}R=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Is(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,R=m;else e:for(o=p;R!==null;){if(a=R,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a)}}catch(N){pe(a,a.return,N)}if(a===o){R=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,R=_;break e}R=a.return}}if(Z=i,sr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{ee=n,Nt.transition=e}}return!1}function D1(t,e,n){e=Ni(n,e),e=Z0(t,e,1),t=zn(t,e,1),e=it(),t!==null&&(po(t,1,e),pt(t,e))}function pe(t,e,n){if(t.tag===3)D1(t,t,n);else for(;e!==null;){if(e.tag===3){D1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Ni(n,t),t=Y0(e,t,1),e=zn(e,t,1),t=it(),e!==null&&(po(e,1,t),pt(e,t));break}}e=e.return}}function vE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Ue&n)===n&&(Ie===4||Ie===3&&(Ue&130023424)===Ue&&500>ve()-Jd?Er(t,0):Xd|=n),pt(t,e)}function yy(t,e){e===0&&((t.mode&1)===0?e=1:(e=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var n=it();t=gn(t,e),t!==null&&(po(t,e,n),pt(t,n))}function wE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yy(t,n)}function _E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),yy(t,n)}var vy;vy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ht=!1,aE(t,e,n);ht=(t.flags&131072)!==0}else ht=!1,le&&(e.flags&1048576)!==0&&E0(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;La(t,e),t=e.pendingProps;var i=Si(e,Xe.current);gi(e,n),i=qd(null,e,r,t,i,n);var s=Kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(e),i.updater=zl,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,le&&s&&Od(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(La(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CE(r),t=$t(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=E1(null,e,r,t,n);break e;case 11:e=w1(null,e,r,t,n);break e;case 14:e=_1(null,e,r,$t(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),E1(t,e,r,i,n);case 3:e:{if(ty(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,I0(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ni(Error(k(423)),e),e=C1(t,e,r,n,i);break e}else if(r!==i){i=Ni(Error(k(424)),e),e=C1(t,e,r,n,i);break e}else for(gt=jn(e.stateNode.containerInfo.firstChild),wt=e,le=!0,Ut=null,n=x0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=yn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&fh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),ey(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&fh(e),null;case 13:return ny(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ii(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),w1(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(Ja,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!dt.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gi(e,n),i=xt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),_1(t,e,r,i,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),La(t,e),e.tag=1,ft(r)?(t=!0,Za(e)):t=!1,gi(e,n),N0(e,r,i),gh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return ry(t,e,n);case 22:return J0(t,e,n)}throw Error(k(156,e.tag))};function wy(t,e){return Wg(t,e)}function EE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new EE(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CE(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===Sd)return 14}return 2}function qn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Cr(n.children,i,s,e);case Ed:o=8,i|=8;break;case Vc:return t=Tt(12,n,e,i|2),t.elementType=Vc,t.lanes=s,t;case Bc:return t=Tt(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case jc:return t=Tt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case Lg:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ng:o=9;break e;case Cd:o=11;break e;case Sd:o=14;break e;case Ln:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,i,s,o,a,l){return t=new SE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function kE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _y(t){if(!t)return Xn;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ft(n))return w0(t,n,e)}return e}function Ey(t,e,n,r,i,s,o,a,l){return t=sf(n,r,!0,t,i,s,o,a,l),t.context=_y(null),n=t.current,r=it(),i=Wn(n),s=dn(r,i),s.callback=e!=null?e:null,zn(n,s,i),t.current.lanes=i,po(t,i,r),pt(t,r),t}function Gl(t,e,n,r){var i=e.current,s=it(),o=Wn(i);return n=_y(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Vt(t,i,o,s),Ia(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function A1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){A1(t,e),(t=t.alternate)&&A1(t,e)}function IE(){return null}var Cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}Ql.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Gl(t,e,null,null)};Ql.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Gl(null,t,null,null)}),e[mn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&e0(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function P1(){}function TE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ul(o);s.call(u)}}var o=Ey(e,r,t,0,null,!1,!1,"",P1);return t._reactRootContainer=o,t[mn]=o.current,js(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ul(l);a.call(u)}}var l=sf(t,0,!1,null,null,!1,!1,"",P1);return t._reactRootContainer=l,t[mn]=l.current,js(t.nodeType===8?t.parentNode:t),Dr(function(){Gl(e,l,n,r)}),l}function Yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ul(o);a.call(l)}}Gl(e,o,t,i)}else o=TE(n,e,t,i,r);return ul(o)}Zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hs(e.pendingLanes);n!==0&&(Td(e,n|1),pt(e,ve()),(Z&6)===0&&(Li=ve()+500,sr()))}break;case 13:Dr(function(){var r=gn(t,1);if(r!==null){var i=it();Vt(r,t,1,i)}}),of(t,1)}};Nd=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=it();Vt(e,t,134217728,n)}of(t,134217728)}};Yg=function(t){if(t.tag===13){var e=Wn(t),n=gn(t,e);if(n!==null){var r=it();Vt(n,t,e,r)}of(t,e)}};Xg=function(){return ee};Jg=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Xc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bl(r);if(!i)throw Error(k(90));Rg(r),Wc(r,i)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};Fg=ef;Vg=Dr;var NE={usingClientEntryPoint:!1,Events:[go,ri,Bl,bg,Ug,ef]},os={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LE={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{bl=la.inject(LE),Gt=la}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NE;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(k(200));return kE(t,e,null,n)};Ct.createRoot=function(t,e){if(!lf(t))throw Error(k(299));var n=!1,r="",i=Cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,js(t.nodeType===8?t.parentNode:t),new af(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Dr(t)};Ct.hydrate=function(t,e,n){if(!Zl(e))throw Error(k(200));return Yl(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ey(e,null,t,1,n!=null?n:null,i,!1,s,o),t[mn]=e.current,js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};Ct.render=function(t,e,n){if(!Zl(e))throw Error(k(200));return Yl(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(k(40));return t._reactRootContainer?(Dr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};Ct.unstable_batchedUpdates=ef;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Yl(t,e,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ct})(Eg);var O1=Eg.exports;Uc.createRoot=O1.createRoot,Uc.hydrateRoot=O1.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ys.apply(this,arguments)}var bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bn||(bn={}));const M1="popstate";function xE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=jr(i.location.hash.substr(1));return Dh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:cl(s))}function r(i,s){Xl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return DE(e,n,r,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RE(){return Math.random().toString(36).substr(2,8)}function $1(t,e){return{usr:t.state,key:t.key,idx:e}}function Dh(t,e,n,r){return n===void 0&&(n=null),Ys({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?jr(e):e,{state:n,key:e&&e.key||r||RE()})}function cl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=bn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ys({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=bn.Pop;let C=c(),g=C==null?null:C-u;u=C,l&&l({action:a,location:w.location,delta:g})}function d(C,g){a=bn.Push;let p=Dh(w.location,C,g);n&&n(p,C),u=c()+1;let m=$1(p,u),_=w.createHref(p);try{o.pushState(m,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function y(C,g){a=bn.Replace;let p=Dh(w.location,C,g);n&&n(p,C),u=c();let m=$1(p,u),_=w.createHref(p);o.replaceState(m,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function v(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:cl(C);return Se(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(M1,h),l=C,()=>{i.removeEventListener(M1,h),l=null}},createHref(C){return e(i,C)},createURL:v,encodeLocation(C){let g=v(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:y,go(C){return o.go(C)}};return w}var b1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(b1||(b1={}));function AE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?jr(e):e,i=uf(r.pathname||"/",n);if(i==null)return null;let s=Sy(t);PE(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jE(s[a],WE(i));return o}function Sy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sy(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VE(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ky(s.path))i(s,o,l)}),e}function ky(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ky(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OE=/^:\w+$/,ME=3,$E=2,bE=1,UE=10,FE=-2,U1=t=>t==="*";function VE(t,e){let n=t.split("/"),r=n.length;return n.some(U1)&&(r+=FE),e&&(r+=$E),n.filter(i=>!U1(i)).reduce((i,s)=>i+(OE.test(s)?ME:s===""?bE:UE),r)}function BE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=zE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:QE(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function zE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=qE(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function HE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WE(t){try{return decodeURI(t)}catch(e){return Xl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qE(t,e){try{return decodeURIComponent(t)}catch(n){return Xl(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function uf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function KE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?jr(t):t;return{pathname:n?n.startsWith("/")?n:GE(n,e):e,search:ZE(r),hash:YE(i)}}function GE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ty(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=jr(t):(i=Ys({},t),Se(!i.pathname||!i.pathname.includes("?"),mc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),mc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),mc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=KE(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),QE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JE=["post","put","patch","delete"];[...JE];var Jl={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eC=S.exports,tC=Symbol.for("react.element"),nC=Symbol.for("react.fragment"),rC=Object.prototype.hasOwnProperty,iC=eC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sC={key:!0,ref:!0,__self:!0,__source:!0};function Ny(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rC.call(e,r)&&!sC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tC,type:t,key:s,ref:o,props:i,_owner:iC.current}}eu.Fragment=nC;eu.jsx=Ny;eu.jsxs=Ny;(function(t){t.exports=eu})(Jl);const vo=Jl.exports.Fragment,f=Jl.exports.jsx,T=Jl.exports.jsxs;/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const aC=typeof Object.is=="function"?Object.is:oC,{useState:lC,useEffect:uC,useLayoutEffect:cC,useDebugValue:hC}=bc;function dC(t,e,n){const r=e(),[{inst:i},s]=lC({inst:{value:r,getSnapshot:e}});return cC(()=>{i.value=r,i.getSnapshot=e,gc(i)&&s({inst:i})},[t,r,e]),uC(()=>(gc(i)&&s({inst:i}),t(()=>{gc(i)&&s({inst:i})})),[t]),hC(r),r}function gc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!aC(n,r)}catch{return!0}}function fC(t,e,n){return e()}const pC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mC=!pC,gC=mC?fC:dC;"useSyncExternalStore"in bc&&(t=>t.useSyncExternalStore)(bc);const Ly=S.exports.createContext(null),cf=S.exports.createContext(null),wo=S.exports.createContext(null),tu=S.exports.createContext(null),zr=S.exports.createContext({outlet:null,matches:[]}),xy=S.exports.createContext(null);function Ah(){return Ah=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ah.apply(this,arguments)}function yC(t,e){let{relative:n}=e===void 0?{}:e;Vi()||Se(!1);let{basename:r,navigator:i}=S.exports.useContext(wo),{hash:s,pathname:o,search:a}=Dy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Vi(){return S.exports.useContext(tu)!=null}function nu(){return Vi()||Se(!1),S.exports.useContext(tu).location}function Bi(){Vi()||Se(!1);let{basename:t,navigator:e}=S.exports.useContext(wo),{matches:n}=S.exports.useContext(zr),{pathname:r}=nu(),i=JSON.stringify(Iy(n).map(a=>a.pathnameBase)),s=S.exports.useRef(!1);return S.exports.useEffect(()=>{s.current=!0}),S.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Ty(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Kn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Ry(){let{matches:t}=S.exports.useContext(zr),e=t[t.length-1];return e?e.params:{}}function Dy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.exports.useContext(zr),{pathname:i}=nu(),s=JSON.stringify(Iy(r).map(o=>o.pathnameBase));return S.exports.useMemo(()=>Ty(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vC(t,e){Vi()||Se(!1);let{navigator:n}=S.exports.useContext(wo),r=S.exports.useContext(cf),{matches:i}=S.exports.useContext(zr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=nu(),u;if(e){var c;let w=typeof e=="string"?jr(e):e;a==="/"||((c=w.pathname)==null?void 0:c.startsWith(a))||Se(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",y=AE(t,{pathname:d}),v=CC(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Kn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Kn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?f(tu.Provider,{value:{location:Ah({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bn.Pop},children:v}):v}function wC(){let t=TC(),e=XE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return T(vo,{children:[f("h2",{children:"Unexpected Application Error!"}),f("h3",{style:{fontStyle:"italic"},children:e}),n?f("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class _C extends S.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?f(zr.Provider,{value:this.props.routeContext,children:f(xy.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function EC(t){let{routeContext:e,match:n,children:r}=t,i=S.exports.useContext(Ly);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),f(zr.Provider,{value:e,children:r})}function CC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Se(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=S.exports.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=f(wC,{}));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=S.exports.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),f(EC,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?f(_C,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var F1;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(F1||(F1={}));var hl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(hl||(hl={}));function SC(t){let e=S.exports.useContext(cf);return e||Se(!1),e}function kC(t){let e=S.exports.useContext(zr);return e||Se(!1),e}function IC(t){let e=kC(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function TC(){var t;let e=S.exports.useContext(xy),n=SC(hl.UseRouteError),r=IC(hl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function NC(t){let{to:e,replace:n,state:r,relative:i}=t;Vi()||Se(!1);let s=S.exports.useContext(cf),o=Bi();return S.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Nn(t){Se(!1)}function LC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:s,static:o=!1}=t;Vi()&&Se(!1);let a=e.replace(/^\/*/,"/"),l=S.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=jr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,v=S.exports.useMemo(()=>{let w=uf(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:y},navigationType:i}},[a,u,c,h,d,y,i]);return v==null?null:f(wo.Provider,{value:l,children:f(tu.Provider,{children:n,value:v})})}function xC(t){let{children:e,location:n}=t,r=S.exports.useContext(Ly),i=r&&!e?r.router.routes:Ph(e);return vC(i,n)}var V1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(V1||(V1={}));new Promise(()=>{});function Ph(t,e){e===void 0&&(e=[]);let n=[];return S.exports.Children.forEach(t,(r,i)=>{if(!S.exports.isValidElement(r))return;let s=[...e,i];if(r.type===S.exports.Fragment){n.push.apply(n,Ph(r.props.children,s));return}r.type!==Nn&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ph(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function RC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AC(t,e){return t.button===0&&(!e||e==="_self")&&!DC(t)}const PC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function OC(t){let{basename:e,children:n,window:r}=t,i=S.exports.useRef();i.current==null&&(i.current=xE({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.exports.useState({action:s.action,location:s.location});return S.exports.useLayoutEffect(()=>s.listen(a),[s]),f(LC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const MC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$C=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ci=S.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=RC(e,PC),{basename:d}=S.exports.useContext(wo),y,v=!1;if(typeof u=="string"&&$C.test(u)&&(y=u,MC)){let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=uf(m.pathname,d);m.origin===p.origin&&_!=null?u=_+m.search+m.hash:v=!0}let w=yC(u,{relative:i}),C=bC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||C(p)}return f("a",{...h,href:y||w,onClick:v||s?r:g,ref:n,target:l})});var B1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(B1||(B1={}));var j1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(j1||(j1={}));function bC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Bi(),l=nu(),u=Dy(t,{relative:o});return S.exports.useCallback(c=>{if(AC(c,n)){c.preventDefault();let h=r!==void 0?r:cl(l)===cl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var UC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(UC);const FC="_nav_1q9lm_17",VC="_icon_1q9lm_37",BC="_logo_1q9lm_45",jC="_subitem_1q9lm_57",zC="_link_1q9lm_67",Mt={nav:FC,icon:VC,logo:BC,subitem:jC,link:zC},HC="_backdrop_jy82e_3",WC="_modal_jy82e_23",z1={backdrop:HC,modal:WC};function ru({children:t,onClose:e}){return T(vo,{children:[f("div",{className:z1.backdrop,onClick:e}),f("dialog",{open:!0,className:z1.modal,children:t})]})}const qC="_body_1a2fx_1",KC="_centered_1a2fx_17",GC="_profileInfo_1a2fx_29",QC="_subtitle_1a2fx_41",ZC="_profilePic_1a2fx_51",YC="_account_btn_container_1a2fx_63",XC="_account_btn_1a2fx_63",JC="_recipeSlideOut_1a2fx_1",e3="_divider_1a2fx_115",t3="_line_1a2fx_133",We={body:qC,centered:KC,profileInfo:GC,subtitle:QC,profilePic:ZC,account_btn_container:YC,account_btn:XC,recipeSlideOut:JC,divider:e3,line:t3};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n3=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new r3;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i3=function(t){const e=Ay(t);return Py.encodeByteArray(e,!0)},dl=function(t){return i3(t).replace(/\./g,"")},Oy=function(t){try{return Py.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=()=>s3().__FIREBASE_DEFAULTS__,a3=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oy(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return o3()||a3()||l3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},My=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$y=t=>{const e=My(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u3=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},by=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function h3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function d3(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p3(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m3(){try{return typeof indexedDB=="object"}catch{return!1}}function g3(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=y3,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?v3(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function v3(t,e){return t.replace(w3,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w3=/\{\$([^}]+)}/g;function _3(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(H1(s)&&H1(o)){if(!fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function H1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function E3(t,e){const n=new C3(t,e);return n.subscribe.bind(n)}class C3{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S3(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S3(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T3(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I3(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I3(t){return t===pr?void 0:t}function T3(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k3(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const L3={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},x3=X.INFO,R3={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},D3=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=R3[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=x3,this._logHandler=D3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L3[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const A3=(t,e)=>e.some(n=>t instanceof n);let W1,q1;function P3(){return W1||(W1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O3(){return q1||(q1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fy=new WeakMap,Oh=new WeakMap,Vy=new WeakMap,vc=new WeakMap,ff=new WeakMap;function M3(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fy.set(n,t)}).catch(()=>{}),ff.set(e,t),e}function $3(t){if(Oh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b3(t){Mh=t(Mh)}function U3(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return Vy.set(r,e.sort?e.sort():[e]),Gn(r)}:O3().includes(t)?function(...e){return t.apply(wc(this),e),Gn(Fy.get(this))}:function(...e){return Gn(t.apply(wc(this),e))}}function F3(t){return typeof t=="function"?U3(t):(t instanceof IDBTransaction&&$3(t),A3(t,P3())?new Proxy(t,Mh):t)}function Gn(t){if(t instanceof IDBRequest)return M3(t);if(vc.has(t))return vc.get(t);const e=F3(t);return e!==t&&(vc.set(t,e),ff.set(e,t)),e}const wc=t=>ff.get(t);function V3(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const B3=["get","getKey","getAll","getAllKeys","count"],j3=["put","add","delete","clear"],_c=new Map;function K1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=j3.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||B3.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _c.set(e,s),s}b3(t=>({...t,get:(e,n,r)=>K1(e,n)||t.get(e,n,r),has:(e,n)=>!!K1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H3(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H3(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",G1="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new df("@firebase/app"),W3="@firebase/app-compat",q3="@firebase/analytics-compat",K3="@firebase/analytics",G3="@firebase/app-check-compat",Q3="@firebase/app-check",Z3="@firebase/auth",Y3="@firebase/auth-compat",X3="@firebase/database",J3="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/firestore-compat",pS="firebase",mS="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="[DEFAULT]",gS={[$h]:"fire-core",[W3]:"fire-core-compat",[K3]:"fire-analytics",[q3]:"fire-analytics-compat",[Q3]:"fire-app-check",[G3]:"fire-app-check-compat",[Z3]:"fire-auth",[Y3]:"fire-auth-compat",[X3]:"fire-rtdb",[J3]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[fS]:"fire-fst-compat","fire-js":"fire-js",[pS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map,Uh=new Map;function yS(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pr(t){const e=t.name;if(Uh.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of pl.values())yS(n,t);return!0}function iu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new _o("app","Firebase",vS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=mS;function By(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=u3()),!n)throw Qn.create("no-options");const s=pl.get(i);if(s){if(fl(n,s.options)&&fl(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new N3(i);for(const l of Uh.values())o.addComponent(l);const a=new wS(n,r,o);return pl.set(i,a),a}function pf(t=bh){const e=pl.get(t);if(!e&&t===bh)return By();if(!e)throw Qn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=gS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}Pr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="firebase-heartbeat-database",ES=1,Xs="firebase-heartbeat-store";let Ec=null;function jy(){return Ec||(Ec=V3(_S,ES,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function CS(t){try{return(await jy()).transaction(Xs).objectStore(Xs).get(zy(t))}catch(e){if(e instanceof nn)Ar.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function Q1(t,e){try{const r=(await jy()).transaction(Xs,"readwrite");return await r.objectStore(Xs).put(e,zy(t)),r.done}catch(n){if(n instanceof nn)Ar.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function zy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1024,kS=30*24*60*60*1e3;class IS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Z1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Z1(),{heartbeatsToSend:n,unsentEntries:r}=TS(this._heartbeatsCache.heartbeats),i=dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Z1(){return new Date().toISOString().substring(0,10)}function TS(t,e=SS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Y1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Y1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m3()?g3().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Q1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Q1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Y1(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){Pr(new Jn("platform-logger",e=>new z3(e),"PRIVATE")),Pr(new Jn("heartbeat",e=>new IS(e),"PRIVATE")),Zt($h,G1,t),Zt($h,G1,"esm2017"),Zt("fire-js","")}LS("");var xS="firebase",RS="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(xS,RS,"app");function mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DS=Hy,Wy=new _o("auth","Firebase",Hy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new df("@firebase/auth");function Aa(t,...e){X1.logLevel<=X.ERROR&&X1.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw gf(t,...e)}function Yt(t,...e){return gf(t,...e)}function qy(t,e,n){const r=Object.assign(Object.assign({},DS()),{[e]:n});return new _o("auth","Firebase",r).create(e,{appName:t.name})}function Ky(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),qy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wy.create(t,...e)}function F(t,e,...n){if(!t)throw gf(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function vn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=new Map;function cn(t){vn(t instanceof Function,"Expected a class definition");let e=J1.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J1.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e){const n=iu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fl(s,e!=null?e:{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function PS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gy(){return em()==="http:"||em()==="https:"}function em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gy()||d3()||"connection"in navigator)?navigator.onLine:!0}function MS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=h3()||f3()}get(){return OS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new Co(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,i={}){return Zy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qy.fetch()(Yy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$S),e);try{const i=new US(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ua(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qy(t,c,u);Dt(t,c)}}catch(i){if(i instanceof nn)throw i;Dt(t,"network-request-failed",{message:String(i)})}}async function So(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Yy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}class US{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),bS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function VS(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BS(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=vf(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ls(Cc(i.auth_time)),issuedAtTime:Ls(Cc(i.iat)),expirationTime:Ls(Cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oy(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jS(t){const e=vf(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&zS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Or(t,VS(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KS(s.providerUserInfo):[],a=qS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function WS(t){const e=ne(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KS(t){return t.map(e=>{var{providerId:n}=e,r=mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){const n=await Zy(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Yy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Or(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BS(this,e)}reload(){return WS(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Or(this,FS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:N,providerData:L,stsTokenManager:D}=n;F(m&&D,e,"internal-error");const O=Js.fromJSON(this.name,D);F(typeof m=="string",e,"internal-error"),Tn(h,e.name),Tn(d,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof N=="boolean",e,"internal-error"),Tn(y,e.name),Tn(v,e.name),Tn(w,e.name),Tn(C,e.name),Tn(g,e.name),Tn(p,e.name);const re=new Sr({uid:m,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:O,createdAt:g,lastLoginAt:p});return L&&Array.isArray(L)&&(re.providerData=L.map(q=>Object.assign({},q))),C&&(re._redirectEventId=C),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jy.type="NONE";const tm=Jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vi(cn(tm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||cn(tm);const o=Pa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iv(e))return"Blackberry";if(sv(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||tv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ev(t=Je()){return/firefox\//i.test(t)}function wf(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tv(t=Je()){return/crios\//i.test(t)}function nv(t=Je()){return/iemobile/i.test(t)}function rv(t=Je()){return/android/i.test(t)}function iv(t=Je()){return/blackberry/i.test(t)}function sv(t=Je()){return/webos/i.test(t)}function su(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QS(t=Je()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZS(){return p3()&&document.documentMode===10}function ov(t=Je()){return su(t)||rv(t)||sv(t)||iv(t)||/windows phone/i.test(t)||nv(t)}function YS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e=[]){let n;switch(t){case"Browser":n=nm(Je());break;case"Worker":n=`${nm(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new XS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Hi(t){return ne(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=E3(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ek(t,e,n){const r=Hi(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=lv(e),{host:o,port:a}=tk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nk()}function lv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tk(t){const e=lv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:im(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:im(o)}}}function im(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function uv(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function sk(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends _f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ik(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sk(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="http://localhost";class Mr extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lk(t){const e=fs(ps(t)).link,n=e?fs(ps(e)).deep_link_id:null,r=fs(ps(t)).deep_link_id;return(r?fs(ps(r)).link:null)||r||n||e||t}class Ef{constructor(e){var n,r,i,s,o,a;const l=fs(ps(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ak((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lk(e);try{return new Ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,n){return eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ef.parseLink(n);return F(r,"argument-error"),eo._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ko{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ko{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ko{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return So(t,"POST","/v1/accounts:signUp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=sm(r);return new $r({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sm(r);return new $r({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yl(e,n,r,i)}}function cv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,s,e,r):s})}async function ck(t,e,n=!1){const r=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Or(t,cv(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=vf(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),$r._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(t,e,n=!1){const r="signIn",i=await cv(t,r,e),s=await $r._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hk(t,e){return dv(Hi(t),e)}async function Cf(t,e){return hv(ne(t),e)}async function dk(t,e,n){const r=Hi(t),i=await uk(r,{returnSecureToken:!0,email:e,password:n}),s=await $r._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function fk(t,e,n){return hk(ne(t),kn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){return Hr(t,"POST","/v1/accounts:createAuthUri",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){const n=Gy()?ml():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pk(ne(t),r);return i||[]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Or(r,gk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yk(t,e){return fv(ne(t),e,null)}function vk(t,e){return fv(ne(t),null,e)}async function fv(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Or(t,uv(r,s));await t._updateTokensIfNecessary(o,!0)}function wk(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function _k(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function Ek(t){return ne(t).signOut()}const vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(){const t=Je();return wf(t)||su(t)}const Sk=1e3,kk=10;class mv extends pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ck()&&YS(),this.fallbackToPolling=ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mv.type="LOCAL";const Ik=mv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv extends pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gv.type="SESSION";const yv=gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Tk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function Lk(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return vv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebaseLocalStorageDb",Ak=1,wl="firebaseLocalStorage",_v="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lu(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function Pk(){const t=indexedDB.deleteDatabase(wv);return new Io(t).toPromise()}function Vh(){const t=indexedDB.open(wv,Ak);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:_v})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await Pk(),e(await Vh()))})})}async function om(t,e,n){const r=lu(t,!0).put({[_v]:e,value:n});return new Io(r).toPromise()}async function Ok(t,e){const n=lu(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function am(t,e){const n=lu(t,!0).delete(e);return new Io(n).toPromise()}const Mk=800,$k=3;class Ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$k)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=au._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new Nk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await om(e,vl,"1"),await am(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>om(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ok(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>am(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lu(i,!1).getAll();return new Io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ev.type="LOCAL";const bk=Ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Uk().appendChild(r)})}function Vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){return e?cn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return dv(t.auth,new If(t),t.bypassAuthState)}function jk(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),hv(n,new If(t),t.bypassAuthState)}async function zk(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),ck(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return zk;case"reauthViaPopup":case"reauthViaRedirect":return jk;default:Dt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new Co(2e3,1e4);async function Sv(t,e,n){const r=Hi(t);Ky(t,e,ou);const i=kf(r,n);return new Un(r,"signInViaPopup",e,i).executeNotNull()}async function Wk(t,e,n){const r=ne(t);Ky(r.auth,e,ou);const i=kf(r.auth,n);return new Un(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}class Un extends Cv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hk.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="pendingRedirect",Oa=new Map;class Kk extends Cv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await Gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gk(t,e){const n=Yk(e),r=Zk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qk(t,e){Oa.set(t._key(),e)}function Zk(t){return cn(t._redirectPersistence)}function Yk(t){return Pa(qk,t.config.apiKey,t.name)}async function Xk(t,e,n=!1){const r=Hi(t),i=kf(r,e),o=await new Kk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=10*60*1e3;class e6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!t6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function t6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n6(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i6=/^https?/;async function s6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await n6(t);for(const n of e)try{if(o6(n))return}catch{}Dt(t,"unauthorized-domain")}function o6(t){const e=ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!i6.test(n))return!1;if(r6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a6=new Co(3e4,6e4);function um(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l6(t){return new Promise((e,n)=>{var r,i,s;function o(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(Yt(t,"network-request-failed"))},timeout:a6.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xt().gapi)===null||s===void 0)&&s.load)o();else{const a=Vk("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},Fk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function u6(t){return Ma=Ma||l6(t),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=new Co(5e3,15e3),h6="__/auth/iframe",d6="emulator/auth/iframe",f6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m6(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,d6):`https://${t.config.authDomain}/${h6}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=p6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function g6(t){const e=await u6(t),n=Xt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:m6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=Xt().setTimeout(()=>{s(o)},c6.get());function l(){Xt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v6=500,w6=600,_6="_blank",E6="http://localhost";class cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C6(t,e,n,r=v6,i=w6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},y6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=tv(u)?_6:n),ev(u)&&(e=e||E6,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,v])=>`${d}${y}=${v},`,"");if(QS(u)&&a!=="_self")return S6(e||"",a),new cm(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new cm(h)}function S6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6="__/auth/handler",I6="emulator/auth/handler";function hm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_3(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ko){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${T6(t)}?${Eo(a).slice(1)}`}function T6({config:t}){return t.emulator?yf(t,I6):`https://${t.authDomain}/${k6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class N6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yv,this._completeRedirectFn=Xk,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=hm(e,n,r,ml(),i);return C6(e,o,Sf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Lk(hm(e,n,r,ml(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await g6(e),r=new e6(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sc];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=s6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ov()||wf()||su()}}const L6=N6;var dm="@firebase/auth",fm="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function D6(t){Pr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:av(t)},c=new JS(a,l,u);return PS(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pr(new Jn("auth-internal",e=>{const n=Hi(e.getProvider("auth").getImmediate());return(r=>new x6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(dm,fm,R6(t)),Zt(dm,fm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6=5*60,P6=by("authIdTokenMaxAge")||A6;let pm=null;const O6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P6)return;const i=n==null?void 0:n.token;pm!==i&&(pm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function M6(t=pf()){const e=iu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AS(t,{popupRedirectResolver:L6,persistence:[bk,Ik,yv]}),r=by("authTokenSyncURL");if(r){const s=O6(r);_k(n,s,()=>s(n.currentUser)),wk(n,o=>s(o))}const i=My("auth");return i&&ek(n,`http://${i}`),n}D6("Browser");var $6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Tf=Tf||{},B=$6||self;function _l(){}function uu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function To(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function b6(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++U6)}var kc="closure_uid_"+(1e9*Math.random()>>>0),U6=0;function F6(t,e,n){return t.call.apply(t.bind,arguments)}function V6(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=F6:Ze=V6,Ze.apply(null,arguments)}function ca(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var B6=0;or.prototype.s=!1;or.prototype.na=function(){!this.s&&(this.s=!0,this.M(),B6!=0)&&b6(this)};or.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Nf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function mm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var j6=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",_l,e),B.removeEventListener("test",_l,e)}catch{}return t}();function El(t){return/^[\s\xa0]*$/.test(t)}var gm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ic(t,e){return t<e?-1:t>e?1:0}function cu(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return cu().indexOf(t)!=-1}function Lf(t){return Lf[" "](t),t}Lf[" "]=_l;function z6(t){var e=q6;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var H6=Kt("Opera"),xi=Kt("Trident")||Kt("MSIE"),Tv=Kt("Edge"),Bh=Tv||xi,Nv=Kt("Gecko")&&!(cu().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),W6=cu().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function Lv(){var t=B.document;return t?t.documentMode:void 0}var Cl;e:{var Tc="",Nc=function(){var t=cu();if(Nv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tv)return/Edge\/([\d\.]+)/.exec(t);if(xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(W6)return/WebKit\/(\S+)/.exec(t);if(H6)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Tc=Nc?Nc[1]:""),xi){var Lc=Lv();if(Lc!=null&&Lc>parseFloat(Tc)){Cl=String(Lc);break e}}Cl=Tc}var q6={};function K6(){return z6(function(){let t=0;const e=gm(String(Cl)).split("."),n=gm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ic(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ic(i[2].length==0,s[2].length==0)||Ic(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var jh;if(B.document&&xi){var ym=Lv();jh=ym||parseInt(Cl,10)||void 0}else jh=void 0;var G6=jh;function to(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nv){e:{try{Lf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Q6[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.X.h.call(this)}}Be(to,Ye);var Q6={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var No="closure_listenable_"+(1e6*Math.random()|0),Z6=0;function Y6(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++Z6,this.ba=this.ea=!1}function hu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xv(t){const e={};for(const n in t)e[n]=t[n];return e}const vm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<vm.length;s++)n=vm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function du(t){this.src=t,this.g={},this.h=0}du.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Y6(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function zh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Iv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Rf="closure_lm_"+(1e6*Math.random()|0),xc={};function Dv(t,e,n,r,i){if(r&&r.once)return Pv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dv(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[No]?t.N(e,n,To(r)?!!r.capture:!!r,i):Av(t,e,n,!1,r,i)}function Av(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=To(i)?!!i.capture:!!i,a=Af(t);if(a||(t[Rf]=a=new du(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=X6(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)j6||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Mv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function X6(){function t(n){return e.call(t.src,t.listener,n)}const e=J6;return t}function Pv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Pv(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[No]?t.O(e,n,To(r)?!!r.capture:!!r,i):Av(t,e,n,!0,r,i)}function Ov(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ov(t,e[s],n,r,i);else r=To(r)?!!r.capture:!!r,n=Pf(n),t&&t[No]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hh(s,n,r,i),-1<n&&(hu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Af(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hh(e,n,r,i)),(n=-1<t?e[t]:null)&&Df(n))}function Df(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[No])zh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Af(e))?(zh(n,t),n.h==0&&(n.src=null,e[Rf]=null)):hu(t)}}}function Mv(t){return t in xc?xc[t]:xc[t]="on"+t}function J6(t,e){if(t.ba)t=!0;else{e=new to(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Df(t),t=n.call(r,e)}return t}function Af(t){return t=t[Rf],t instanceof du?t:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pf(t){return typeof t=="function"?t:(t[Rc]||(t[Rc]=function(e){return t.handleEvent(e)}),t[Rc])}function Pe(){or.call(this),this.i=new du(this),this.P=this,this.I=null}Be(Pe,or);Pe.prototype[No]=!0;Pe.prototype.removeEventListener=function(t,e,n,r){Ov(this,t,e,n,r)};function Fe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),Rv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ha(o,r,!0,e)&&i}if(o=e.g=t,i=ha(o,r,!0,e)&&i,i=ha(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ha(o,r,!1,e)&&i}Pe.prototype.M=function(){if(Pe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hu(n[r]);delete t.g[e],t.h--}}this.I=null};Pe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Pe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ha(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&zh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Of=B.JSON.stringify;function eI(){var t=Uv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tI{constructor(){this.h=this.g=null}add(e,n){const r=$v.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $v=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nI,t=>t.reset());class nI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rI(t){B.setTimeout(()=>{throw t},0)}function bv(t,e){Wh||iI(),qh||(Wh(),qh=!0),Uv.add(t,e)}var Wh;function iI(){var t=B.Promise.resolve(void 0);Wh=function(){t.then(sI)}}var qh=!1,Uv=new tI;function sI(){for(var t;t=eI();){try{t.h.call(t.g)}catch(n){rI(n)}var e=$v;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qh=!1}function fu(t,e){Pe.call(this),this.h=t||1,this.g=e||B,this.j=Ze(this.lb,this),this.l=Date.now()}Be(fu,Pe);M=fu.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Fe(this,"tick"),this.ca&&(Mf(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){fu.X.M.call(this),Mf(this),delete this.g};function $f(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function Fv(t){t.g=$f(()=>{t.g=null,t.i&&(t.i=!1,Fv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oI extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fv(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function no(t){or.call(this),this.h=t,this.g={}}Be(no,or);var wm=[];function Vv(t,e,n,r){Array.isArray(n)||(n&&(wm[0]=n.toString()),n=wm);for(var i=0;i<n.length;i++){var s=Dv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Bv(t){xf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Df(e)},t),t.g={}}no.prototype.M=function(){no.X.M.call(this),Bv(this)};no.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pu(){this.g=!0}pu.prototype.Aa=function(){this.g=!1};function aI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function lI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cI(t,n)+(r?" "+r:"")})}function uI(t,e){t.info(function(){return"TIMEOUT: "+e})}pu.prototype.info=function(){};function cI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Of(n)}catch{return e}}var Wr={},_m=null;function mu(){return _m=_m||new Pe}Wr.Pa="serverreachability";function jv(t){Ye.call(this,Wr.Pa,t)}Be(jv,Ye);function ro(t){const e=mu();Fe(e,new jv(e))}Wr.STAT_EVENT="statevent";function zv(t,e){Ye.call(this,Wr.STAT_EVENT,t),this.stat=e}Be(zv,Ye);function rt(t){const e=mu();Fe(e,new zv(e,t))}Wr.Qa="timingevent";function Hv(t,e){Ye.call(this,Wr.Qa,t),this.size=e}Be(Hv,Ye);function Lo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var gu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bf(){}bf.prototype.h=null;function Em(t){return t.h||(t.h=t.i())}function qv(){}var xo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Uf(){Ye.call(this,"d")}Be(Uf,Ye);function Ff(){Ye.call(this,"c")}Be(Ff,Ye);var Kh;function yu(){}Be(yu,bf);yu.prototype.g=function(){return new XMLHttpRequest};yu.prototype.i=function(){return{}};Kh=new yu;function Ro(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new no(this),this.O=hI,t=Bh?125:void 0,this.T=new fu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kv}function Kv(){this.i=null,this.g="",this.h=!1}var hI=45e3,Gh={},Sl={};M=Ro.prototype;M.setTimeout=function(t){this.O=t};function Qh(t,e,n){t.K=1,t.v=wu(wn(e)),t.s=n,t.P=!0,Gv(t,null)}function Gv(t,e){t.F=Date.now(),Do(t),t.A=wn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),n2(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Kv,t.g=S2(t.l,n?e:null,!t.s),0<t.N&&(t.L=new oI(Ze(t.La,t,t.g),t.N)),Vv(t.S,t.g,"readystatechange",t.ib),e=t.H?xv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ro(),aI(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&hn(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const c=hn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Bh||this.g&&(this.h.h||this.g.fa()||Im(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ro(3):ro(2)),vu(this);var n=this.g.aa();this.Y=n;t:if(Qv(this)){var r=Im(this.g);t="";var i=r.length,s=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),xs(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,lI(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!El(a)){var u=a;break t}}u=null}if(n=u)hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zh(this,n);else{this.i=!1,this.o=3,rt(12),vr(this),xs(this);break e}}this.P?(Zv(this,c,o),Bh&&this.i&&c==3&&(Vv(this.S,this.T,"tick",this.hb),this.T.start())):(hi(this.j,this.m,o,null),Zh(this,o)),c==4&&vr(this),this.i&&!this.I&&(c==4?w2(this.l,this):(this.i=!1,Do(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),vr(this),xs(this)}}}catch{}finally{}};function Qv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Zv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=dI(t,n),i==Sl){e==4&&(t.o=4,rt(14),r=!1),hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gh){t.o=4,rt(15),hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hi(t.j,t.m,i,null),Zh(t,i);Qv(t)&&i!=Sl&&i!=Gh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qf(e),e.K=!0,rt(11))):(hi(t.j,t.m,n,"[Invalid Chunked Response]"),vr(t),xs(t))}M.hb=function(){if(this.g){var t=hn(this.g),e=this.g.fa();this.C<e.length&&(vu(this),Zv(this,t,e),this.i&&t!=4&&Do(this))}};function dI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Sl:(n=Number(e.substring(n,r)),isNaN(n)?Gh:(r+=1,r+n>e.length?Sl:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,vr(this)};function Do(t){t.V=Date.now()+t.O,Yv(t,t.O)}function Yv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Lo(Ze(t.gb,t),e)}function vu(t){t.B&&(B.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uI(this.j,this.A),this.K!=2&&(ro(),rt(17)),vr(this),this.o=2,xs(this)):Yv(this,this.V-t)};function xs(t){t.l.G==0||t.I||w2(t.l,t)}function vr(t){vu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Mf(t.T),Bv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yh(n.h,t))){if(!t.J&&Yh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Tl(n),Cu(n);else break e;Wf(n),rt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Lo(Ze(n.cb,n),6e3));if(1>=s2(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else wr(n,11)}else if((t.J||n.g==t)&&Tl(n),!El(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vf(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ue(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=C2(r,r.H?r.ka:null,r.V),o.J){o2(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(vu(a),Do(a)),r.g=o}else y2(r);0<n.i.length&&Su(n)}else u[0]!="stop"&&u[0]!="close"||wr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wr(n,7):Hf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ro(4)}catch{}}function fI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pI(t),r=fI(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Jv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function kr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=e!==void 0?e:t.h,kl(this,t.j),this.s=t.s,this.g=t.g,Il(this,t.m),this.l=t.l,e=t.i;var n=new io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cm(this,n),this.o=t.o}else t&&(n=String(t).match(Jv))?(this.h=!!e,kl(this,n[1]||"",!0),this.s=ms(n[2]||""),this.g=ms(n[3]||"",!0),Il(this,n[4]),this.l=ms(n[5]||"",!0),Cm(this,n[6]||"",!0),this.o=ms(n[7]||"")):(this.h=!!e,this.i=new io(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gs(e,Sm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gs(e,Sm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gs(n,n.charAt(0)=="/"?vI:yI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gs(n,_I)),t.join("")};function wn(t){return new kr(t)}function kl(t,e,n){t.j=n?ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Il(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cm(t,e,n){e instanceof io?(t.i=e,EI(t.i,t.h)):(n||(e=gs(e,wI)),t.i=new io(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function wu(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sm=/[#\/\?@]/g,yI=/[#\?:]/g,vI=/[#\?]/g,wI=/[#\?@]/g,_I=/#/g;function io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new Map,t.h=0,t.i&&mI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=io.prototype;M.add=function(t,e){ar(this),this.i=null,t=Wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function e2(t,e){ar(t),e=Wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function t2(t,e){return ar(t),e=Wi(t,e),t.g.has(e)}M.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.oa=function(){ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.W=function(t){ar(this);let e=[];if(typeof t=="string")t2(this,t)&&(e=e.concat(this.g.get(Wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ar(this),this.i=null,t=Wi(this,t),t2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function n2(t,e,n){e2(t,e),0<n.length&&(t.i=null,t.g.set(Wi(t,e),Nf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function EI(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(e2(this,r),n2(this,i,n))},t)),t.j=e}var CI=class{constructor(t,e){this.h=t,this.g=e}};function r2(t){this.l=t||SI,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SI=10;function i2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function s2(t){return t.h?1:t.g?t.g.size:0}function Yh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vf(t,e){t.g?t.g.add(e):t.h=e}function o2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}r2.prototype.cancel=function(){if(this.i=a2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function a2(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Nf(t.i)}function Bf(){}Bf.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};Bf.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function kI(){this.g=new Bf}function II(t,e,n){const r=n||"";try{Xv(t,function(i,s){let o=i;To(i)&&(o=Of(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function TI(t,e){const n=new pu;if(B.Image){const r=new Image;r.onload=ca(da,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ca(da,n,r,"TestLoadImage: error",!1,e),r.onabort=ca(da,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ca(da,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function da(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ao(t){this.l=t.ac||null,this.j=t.jb||!1}Be(Ao,bf);Ao.prototype.g=function(){return new _u(this.l,this.j)};Ao.prototype.i=function(t){return function(){return t}}({});function _u(t,e){Pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(_u,Pe);var jf=0;M=_u.prototype;M.open=function(t,e){if(this.readyState!=jf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,so(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=jf};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;l2(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function l2(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Po(this):so(this),this.readyState==3&&l2(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,Po(this))};M.Ua=function(t){this.g&&(this.response=t,Po(this))};M.ga=function(){this.g&&Po(this)};function Po(t){t.readyState=4,t.l=null,t.j=null,t.A=null,so(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function so(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NI=B.JSON.parse;function me(t){Pe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=u2,this.K=this.L=!1}Be(me,Pe);var u2="",LI=/^https?$/i,xI=["POST","PUT"];M=me.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kh.g(),this.C=this.u?Em(this.u):Em(Kh),this.g.onreadystatechange=Ze(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){km(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=Iv(xI,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{d2(this),0<this.B&&((this.K=RI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.qa,this)):this.A=$f(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){km(this,s)}};function RI(t){return xi&&K6()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof Tf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function km(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,c2(t),Eu(t)}function c2(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),Eu(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eu(this,!0)),me.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?h2(this):this.fb())};M.fb=function(){h2(this)};function h2(t){if(t.h&&typeof Tf<"u"&&(!t.C[1]||hn(t)!=4||t.aa()!=2)){if(t.v&&hn(t)==4)$f(t.Ha,0,t);else if(Fe(t,"readystatechange"),hn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Jv)[1]||null;if(!i&&B.self&&B.self.location){var s=B.self.location.protocol;i=s.substr(0,s.length-1)}r=!LI.test(i?i.toLowerCase():"")}n=r}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",c2(t)}}finally{Eu(t)}}}}function Eu(t,e){if(t.g){d2(t);const n=t.g,r=t.C[0]?_l:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function d2(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function hn(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NI(e)}};function Im(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case u2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function f2(t){let e="";return xf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=f2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function as(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function p2(t){this.Ca=0,this.i=[],this.j=new pu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=as("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=as("baseRetryDelayMs",5e3,t),this.bb=as("retryDelaySeedMs",1e4,t),this.$a=as("forwardChannelMaxRetries",2,t),this.ta=as("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new r2(t&&t.concurrentRequestLimit),this.Fa=new kI,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=p2.prototype;M.ma=8;M.G=1;function Hf(t){if(m2(t),t.G==3){var e=t.U++,n=wn(t.F);ue(n,"SID",t.I),ue(n,"RID",e),ue(n,"TYPE","terminate"),Oo(t,n),e=new Ro(t,t.j,e,void 0),e.K=2,e.v=wu(wn(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=S2(e.l,null),e.g.da(e.v)),e.F=Date.now(),Do(e)}E2(t)}function Cu(t){t.g&&(qf(t),t.g.cancel(),t.g=null)}function m2(t){Cu(t),t.u&&(B.clearTimeout(t.u),t.u=null),Tl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Su(t){i2(t.h)||t.m||(t.m=!0,bv(t.Ja,t),t.C=0)}function DI(t,e){return s2(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Lo(Ze(t.Ja,t,e),_2(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ro(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=xv(s),Rv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=g2(this,i,e),n=wn(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Oo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(f2(s)))+"&"+e:this.o&&zf(n,this.o,s)),Vf(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",e),ue(n,"SID","null"),i.Z=!0,Qh(i,n,null)):Qh(i,n,e),this.G=2}}else this.G==3&&(t?Tm(this,t):this.i.length==0||i2(this.h)||Tm(this))};function Tm(t,e){var n;e?n=e.m:n=t.U++;const r=wn(t.F);ue(r,"SID",t.I),ue(r,"RID",n),ue(r,"AID",t.T),Oo(t,r),t.o&&t.s&&zf(r,t.o,t.s),n=new Ro(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=g2(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Vf(t.h,n),Qh(n,r,e)}function Oo(t,e){t.ia&&xf(t.ia,function(n,r){ue(e,r,n)}),t.l&&Xv({},function(n,r){ue(e,r,n)})}function g2(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ze(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{II(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function y2(t){t.g||t.u||(t.Z=1,bv(t.Ia,t),t.A=0)}function Wf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Lo(Ze(t.Ia,t),_2(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,v2(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Lo(Ze(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rt(10),Cu(this),v2(this))};function qf(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function v2(t){t.g=new Ro(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wn(t.sa);ue(e,"RID","rpc"),ue(e,"SID",t.I),ue(e,"CI",t.L?"0":"1"),ue(e,"AID",t.T),ue(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&zf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wu(wn(e)),n.s=null,n.P=!0,Gv(n,t)}M.cb=function(){this.v!=null&&(this.v=null,Cu(this),Wf(this),rt(19))};function Tl(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function w2(t,e){var n=null;if(t.g==e){Tl(t),qf(t),t.g=null;var r=2}else if(Yh(t.h,e))n=e.D,o2(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=mu(),Fe(r,new Hv(r,n)),Su(t)}else y2(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&DI(t,e)||r==2&&Wf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}}function _2(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function wr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ze(t.kb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||kl(n,"https"),wu(n)),TI(n.toString(),r)}else rt(2);t.G=0,t.l&&t.l.va(e),E2(t),m2(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function E2(t){if(t.G=0,t.la=[],t.l){const e=a2(t.h);(e.length!=0||t.i.length!=0)&&(mm(t.la,e),mm(t.la,t.i),t.h.i.length=0,Nf(t.i),t.i.length=0),t.l.ua()}}function C2(t,e,n){var r=n instanceof kr?wn(n):new kr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Il(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new kr(null,void 0);r&&kl(s,r),e&&(s.g=e),i&&Il(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ue(r,n,e),ue(r,"VER",t.ma),Oo(t,r),r}function S2(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new me(new Ao({jb:!0})):new me(t.ra),e.Ka(t.H),e}function k2(){}M=k2.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Nl(){if(xi&&!(10<=Number(G6)))throw Error("Environmental error: no available transport.")}Nl.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){Pe.call(this),this.g=new p2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!El(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!El(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qi(this)}Be(Et,Pe);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=C2(t,null,t.V),Su(t)};Et.prototype.close=function(){Hf(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Of(t),t=n);e.i.push(new CI(e.ab++,t)),e.G==3&&Su(e)};Et.prototype.M=function(){this.g.l=null,delete this.j,Hf(this.g),delete this.g,Et.X.M.call(this)};function I2(t){Uf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(I2,Uf);function T2(){Ff.call(this),this.status=1}Be(T2,Ff);function qi(t){this.g=t}Be(qi,k2);qi.prototype.xa=function(){Fe(this.g,"a")};qi.prototype.wa=function(t){Fe(this.g,new I2(t))};qi.prototype.va=function(t){Fe(this.g,new T2)};qi.prototype.ua=function(){Fe(this.g,"b")};Nl.prototype.createWebChannel=Nl.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;gu.NO_ERROR=0;gu.TIMEOUT=8;gu.HTTP_ERROR=6;Wv.COMPLETE="complete";qv.EventType=xo;xo.OPEN="a";xo.CLOSE="b";xo.ERROR="c";xo.MESSAGE="d";Pe.prototype.listen=Pe.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.Oa;me.prototype.getLastErrorCode=me.prototype.Ea;me.prototype.getStatus=me.prototype.aa;me.prototype.getResponseJson=me.prototype.Sa;me.prototype.getResponseText=me.prototype.fa;me.prototype.send=me.prototype.da;me.prototype.setWithCredentials=me.prototype.Ka;var AI=function(){return new Nl},PI=function(){return mu()},Dc=gu,OI=Wv,MI=Wr,Nm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$I=Ao,fa=qv,bI=me;const Lm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new df("@firebase/firestore");function xm(){return br.logLevel}function $(t,...e){if(br.logLevel<=X.DEBUG){const n=e.map(Kf);br.debug(`Firestore (${Ki}): ${t}`,...n)}}function _n(t,...e){if(br.logLevel<=X.ERROR){const n=e.map(Kf);br.error(`Firestore (${Ki}): ${t}`,...n)}}function Ll(t,...e){if(br.logLevel<=X.WARN){const n=e.map(Kf);br.warn(`Firestore (${Ki}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function ae(t,e){t||V()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class FI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VI{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new N2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new qe(e)}}class BI{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new BI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.T=n.token,new zI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Ri(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Te(0,0))}static max(){return new j(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends oo{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends oo{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return qI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(se.fromString(e))}static fromName(e){return new b(se.fromString(e).popFirst(5))}static empty(){return new b(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new se(e.slice()))}}function KI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new er(i,b.empty(),e)}function GI(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(j.min(),b.empty(),-1)}static max(){return new er(j.max(),b.empty(),-1)}}function QI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==ZI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Gf.ct=-1;function ku(t){return t==null}function xl(t){return t===0&&1/t==-1/0}function XI(t){return typeof t=="number"&&Number.isInteger(t)&&!xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:be.RED,this.left=i!=null?i:be.EMPTY,this.right=s!=null?s:be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ne(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Ne(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new JI("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const e8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=e8.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function D2(t){const e=t.mapValue.fields.__previous_value__;return R2(e)?D2(e):e}function ao(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?R2(t)?4:n8(t)?9007199254740991:10:V()}function en(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tr(r.timestampValue),o=tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Di(r.bytesValue).isEqual(Di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=_e(r.doubleValue),o=_e(i.doubleValue);return s===o?xl(s)===xl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ri(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Rm(s)!==Rm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!en(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function uo(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Ai(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=_e(i.integerValue||i.doubleValue),a=_e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Am(t.timestampValue,e.timestampValue);case 4:return Am(ao(t),ao(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Di(i),a=Di(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=J(o[l],a[l]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(_e(i.latitude),_e(s.latitude));return o!==0?o:J(_e(i.longitude),_e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ai(o[l],a[l]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ma.mapValue&&s===ma.mapValue)return 0;if(i===ma.mapValue)return 1;if(s===ma.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=J(a[c],u[c]);if(h!==0)return h;const d=Ai(o[a[c]],l[u[c]]);if(d!==0)return d}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function Am(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=tr(t),r=tr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Pi(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xh(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function Pm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Om(t){return!!t&&"nullValue"in t}function Mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function Rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Rs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n8(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Rs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$a(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Rs(this.value))}}function A2(t){const e=[];return qr(t.fields,(n,r)=>{const i=new Qe([n]);if($a(r)){const s=A2(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,j.min(),j.min(),j.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,j.min(),j.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,j.min(),j.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function $m(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=Ai(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function r8(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{}class Ce extends P2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new s8(e,n,r):n==="array-contains"?new l8(e,r):n==="in"?new u8(e,r):n==="not-in"?new c8(e,r):n==="array-contains-any"?new h8(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o8(e,r):new a8(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ai(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends P2{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new jt(e,n)}matches(e){return O2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function O2(t){return t.op==="and"}function M2(t){return i8(t)&&O2(t)}function i8(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function ed(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(M2(t))return t.filters.map(e=>ed(e)).join(",");{const e=t.filters.map(n=>ed(n)).join(",");return`${t.op}(${e})`}}function $2(t,e){return t instanceof Ce?function(n,r){return r instanceof Ce&&n.op===r.op&&n.field.isEqual(r.field)&&en(n.value,r.value)}(t,e):t instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&$2(s,r.filters[o]),!0):!1}(t,e):void V()}function b2(t){return t instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Pi(e.value)}`}(t):t instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(b2).join(" ,")+"}"}(t):"Filter"}class s8 extends Ce{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class o8 extends Ce{constructor(e,n){super(e,"in",n),this.keys=U2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a8 extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=U2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class l8 extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&uo(n.arrayValue,this.value)}}class u8 extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class c8 extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class h8 extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d8{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Um(t,e=null,n=[],r=[],i=null,s=null,o=null){return new d8(t,e,n,r,i,s,o)}function Zf(t){const e=z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.ft=n}return e.ft}function Yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r8(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bm(t.startAt,e.startAt)&&bm(t.endAt,e.endAt)}function td(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function f8(t,e,n,r,i,s,o,a){return new bo(t,e,n,r,i,s,o,a)}function Xf(t){return new bo(t)}function Fm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function V2(t){return t.collectionGroup!==null}function _i(t){const e=z(t);if(e.dt===null){e.dt=[];const n=Jf(e),r=F2(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ds(n)),e.dt.push(new Ds(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ds(Qe.keyField(),s))}}}return e.dt}function En(t){const e=z(t);if(!e.wt)if(e.limitType==="F")e.wt=Um(e.path,e.collectionGroup,_i(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of _i(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ds(s.field,o))}const r=e.endAt?new Rl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rl(e.startAt.position,e.startAt.inclusive):null;e.wt=Um(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function nd(t,e){e.getFirstInequalityField(),Jf(t);const n=t.filters.concat([e]);return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rd(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return Yf(En(t),En(e))&&t.limitType===e.limitType}function B2(t){return`${Zf(En(t))}|lt:${t.limitType}`}function id(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>b2(r)).join(", ")}]`),ku(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),`Target(${n})`}(En(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of _i(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=$m(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,_i(n),r)||n.endAt&&!function(i,s,o){const a=$m(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,_i(n),r))}(t,e)}function p8(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function j2(t){return(e,n)=>{let r=!1;for(const i of _i(t)){const s=m8(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function m8(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ai(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g8=new Le(b.comparator);function Cn(){return g8}const z2=new Le(b.comparator);function ys(...t){let e=z2;for(const n of t)e=e.insert(n.key,n);return e}function H2(t){let e=z2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return As()}function W2(){return As()}function As(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const y8=new Le(b.comparator),v8=new Ne(b.comparator);function K(...t){let e=v8;for(const n of t)e=e.add(n);return e}const w8=new Ne(J);function q2(){return w8}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function G2(t){return{integerValue:""+t}}function _8(t,e){return XI(e)?G2(e):K2(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this._=void 0}}function E8(t,e,n){return t instanceof Dl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof co?Z2(t,e):t instanceof ho?Y2(t,e):function(r,i){const s=Q2(r,i),o=Vm(s)+Vm(r._t);return Jh(s)&&Jh(r._t)?G2(o):K2(r.serializer,o)}(t,e)}function C8(t,e,n){return t instanceof co?Z2(t,e):t instanceof ho?Y2(t,e):n}function Q2(t,e){return t instanceof Al?Jh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Dl extends Nu{}class co extends Nu{constructor(e){super(),this.elements=e}}function Z2(t,e){const n=X2(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class ho extends Nu{constructor(e){super(),this.elements=e}}function Y2(t,e){let n=X2(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class Al extends Nu{constructor(e,n){super(),this.serializer=e,this._t=n}}function Vm(t){return _e(t.integerValue||t.doubleValue)}function X2(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function S8(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof co&&r instanceof co||n instanceof ho&&r instanceof ho?Ri(n.elements,r.elements,en):n instanceof Al&&r instanceof Al?en(n._t,r._t):n instanceof Dl&&r instanceof Dl}(t.transform,e.transform)}class k8{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function J2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ep(t.key,Lt.none()):new Uo(t.key,t.data,Lt.none());{const n=t.data,r=ct.empty();let i=new Ne(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lr(t.key,r,new yt(i.toArray()),Lt.none())}}function I8(t,e,n){t instanceof Uo?function(r,i,s){const o=r.value.clone(),a=jm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,s){if(!ba(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=jm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ew(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,r){return t instanceof Uo?function(i,s,o,a){if(!ba(i.precondition,s))return o;const l=i.value.clone(),u=zm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,s,o,a){if(!ba(i.precondition,s))return o;const l=zm(i.fieldTransforms,a,s),u=s.data;return u.setAll(ew(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ba(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function T8(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q2(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ri(n,r,(i,s)=>S8(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ew(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jm(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,C8(o,a,n[i]))}return r}function zm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,E8(s,o,e))}return r}class ep extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N8 extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L8{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I8(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W2();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=J2(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&Ri(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=y8;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x8{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,Q;function D8(t){switch(t){default:return V();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function tw(t){if(t===void 0)return _n("GRPC error has no .code"),E.UNKNOWN;switch(t){case we.OK:return E.OK;case we.CANCELLED:return E.CANCELLED;case we.UNKNOWN:return E.UNKNOWN;case we.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case we.INTERNAL:return E.INTERNAL;case we.UNAVAILABLE:return E.UNAVAILABLE;case we.UNAUTHENTICATED:return E.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case we.NOT_FOUND:return E.NOT_FOUND;case we.ALREADY_EXISTS:return E.ALREADY_EXISTS;case we.PERMISSION_DENIED:return E.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case we.ABORTED:return E.ABORTED;case we.OUT_OF_RANGE:return E.OUT_OF_RANGE;case we.UNIMPLEMENTED:return E.UNIMPLEMENTED;case we.DATA_LOSS:return E.DATA_LOSS;default:return V()}}(Q=we||(we={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ga}static getOrCreateInstance(){return ga===null&&(ga=new np),ga}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ga=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xu(j.min(),i,q2(),Cn(),K())}}class Fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class nw{constructor(e,n){this.targetId=e,this.Et=n}}class rw{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hm{constructor(){this.At=0,this.Rt=qm(),this.vt=et.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=K(),n=K(),r=K();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Fo(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=qm()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class A8{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Cn(),this.qt=Wm(),this.Ut=new Ne(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(td(o))if(i===0){const a=new b(o.path);this.Qt(r,a,Ge.newNoDocument(a,j.min()))}else ae(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=np.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&td(a.target)){const l=new b(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Ge.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=K();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new xu(e,n,this.Ut,this.Lt,r);return this.Lt=Cn(),this.qt=Wm(),this.Ut=new Ne(J),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Hm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ne(J),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Hm),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Wm(){return new Le(b.comparator)}function qm(){return new Le(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P8=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),O8=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),M8=(()=>({and:"AND",or:"OR"}))();class $8{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b8(t,e){return Pl(t,e.toTimestamp())}function Jt(t){return ae(!!t),j.fromTimestamp(function(e){const n=tr(e);return new Te(n.seconds,n.nanos)}(t))}function rp(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sw(t){const e=se.fromString(t);return ae(uw(e)),e}function sd(t,e){return rp(t.databaseId,e.path)}function Ac(t,e){const n=sw(e);if(n.get(1)!==t.databaseId.projectId)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(ow(n))}function od(t,e){return rp(t.databaseId,e)}function U8(t){const e=sw(t);return e.length===4?se.emptyPath():ow(e)}function ad(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ow(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Km(t,e,n){return{name:sd(t,e),fields:n.value.mapValue.fields}}function F8(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ae(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(ae(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:tw(l.code);return new P(u,l.message||"")}(o);n=new rw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ac(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):j.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ua(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ac(t,r.document),s=r.readTime?Jt(r.readTime):j.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ac(t,r.document),s=r.removedTargetIds||[];n=new Ua([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new R8(i),o=r.targetId;n=new nw(o,s)}}return n}function V8(t,e){let n;if(e instanceof Uo)n={update:Km(t,e.key,e.value)};else if(e instanceof ep)n={delete:sd(t,e.key)};else if(e instanceof lr)n={update:Km(t,e.key,e.data),updateMask:Q8(e.fieldMask)};else{if(!(e instanceof N8))return V();n={verify:sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Dl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof co)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ho)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Al)return{fieldPath:s.field.canonicalString(),increment:o._t};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:b8(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function B8(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Jt(r.updateTime):Jt(i);return s.isEqual(j.min())&&(s=Jt(i)),new k8(s,r.transformResults||[])}(n,e))):[]}function j8(t,e){return{documents:[od(t,e.path)]}}function z8(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=od(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=od(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lw(jt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Zr(c.field),direction:q8(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||ku(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function H8(t){let e=U8(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=aw(c);return h instanceof jt&&M2(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ds(Yr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ku(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Rl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Rl(d,h)}(n.endAt)),f8(e,i,o,s,a,"F",l,u)}function W8(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function aw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Yr(e.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Yr(e.unaryFilter.field);return Ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(e.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Yr(e.unaryFilter.field);return Ce.create(s,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(e){return Ce.create(Yr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>aw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(t):V()}function q8(t){return P8[t]}function K8(t){return O8[t]}function G8(t){return M8[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return Qe.fromServerFormat(t.fieldPath)}function lw(t){return t instanceof Ce?function(e){if(e.op==="=="){if(Mm(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(Om(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mm(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(Om(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:K8(e.op),value:e.value}}}(t):t instanceof jt?function(e){const n=e.getFilters().map(r=>lw(r));return n.length===1?n[0]:{compositeFilter:{op:G8(e.op),filters:n}}}(t):V()}function Q8(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,i,s=j.min(),o=j.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z8{constructor(e){this.se=e}}function Y8(t){const e=H8({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X8{constructor(){this.He=new J8}addToCollectionParentIndex(e,n){return this.He.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(er.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class J8{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ne(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ne(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Oi(0)}static bn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ps(r.mutation,i,yt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ys();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Cn();const o=As(),a=As();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof lr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ps(c.mutation,u,c.mutation.getFieldMask(),Te.now())):o.set(u.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new tT(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=As();let i=new Le((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=W2();c.forEach(d=>{if(!s.has(d)){const y=J2(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(_r());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:H2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ys();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new bo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ge.newInvalidDocument(u)))});let o=ys();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ps(u.mutation,l,yt.empty(),Te.now()),Tu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Jt(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Y8(r.bundledQuery),readTime:Jt(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.overlays=new Le(b.comparator),this.ts=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=_r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=_r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new x8(n,r));let s=this.ts.get(n);s===void 0&&(s=K(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.es=new Ne(Re.ns),this.ss=new Ne(Re.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Re(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Re(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new b(new se([])),r=new Re(n,e),i=new Re(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new b(new se([])),r=new Re(n,e),i=new Re(n,e+1);let s=K();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Re(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return b.comparator(e.key,n.key)||J(e.ds,n.ds)}static rs(e,n){return J(e.ds,n.ds)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ne(Re.ns)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new L8(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Re(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ne(J);return n.forEach(i=>{const s=new Re(i,0),o=new Re(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),I.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new Re(new b(s),0);let a=new Ne(J);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),I.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return I.forEach(n.mutations,i=>{const s=new Re(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Re(n,0),i=this._s.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.Ts=e,this.docs=new Le(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,a=new b(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QI(GI(c),r)<=0||(i.has(c.key)||Tu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}Es(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aT(this)}getSize(e){return I.resolve(this.size)}}class aT extends eT{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.persistence=e,this.As=new Gi(n=>Zf(n),Yf),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ip,this.targetCount=0,this.bs=Oi.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),I.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Sn(n),I.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Gf(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new lT(this),this.indexManager=new X8,this.remoteDocumentCache=function(r){return new oT(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new Z8(n),this.xs=new rT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new sT(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new cT(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return I.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class cT extends YI{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.$s=new ip,this.Ms=null}static Fs(e){return new sp(e)}get Bs(){if(this.Ms)return this.Ms;throw V()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),I.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Bs,r=>{const i=b.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return I.or([()=>I.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new op(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Fm(n))return I.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rd(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,rd(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return Fm(n)||i.isEqual(j.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(xm()<=X.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),id(n)),this.Fi(e,o,n,KI(i,-1)))})}$i(e,n){let r=new Ne(j2(e));return n.forEach((i,s)=>{Tu(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return xm()<=X.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",id(n)),this.xi.getDocumentsMatchingQuery(e,n,er.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Le(J),this.qi=new Gi(s=>Zf(s),Yf),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nT(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function fT(t,e,n,r){return new dT(t,e,n,r)}async function cw(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function pT(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=I.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(v=>{const w=l.docVersions.get(y);ae(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hw(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function mT(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(et.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(v,w,C){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,y,c)&&a.push(n.Ds.updateTargetData(s,y))});let l=Cn(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gT(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(j.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function gT(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function yT(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vT(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Ir(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function ld(t,e,n){const r=z(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Gm(t,e,n){const r=z(t);let i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.qi.get(u);return h!==void 0?I.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,En(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:K())).next(a=>(wT(r,p8(e),a),{documents:a,Wi:s})))}function wT(t,e,n){let r=t.Ui.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class Qm{constructor(){this.activeTargetIds=q2()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _T{constructor(){this.Br=new Qm,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Qm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya=null;function Pc(){return ya===null?ya=268435456+Math.round(2147483648*Math.random()):ya++,"0x"+ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class kT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Pc(),a=this.ao(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>($("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ll("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ki,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=CT[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Pc();return new Promise((o,a)=>{const l=new bI;l.setWithCredentials(!0),l.listenOnce(OI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Dc.NO_ERROR:const c=l.getResponseJson();$(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Dc.TIMEOUT:$(He,`RPC '${e}' ${s} timed out`),a(new P(E.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const h=l.getStatus();if($(He,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const v=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(C)>=0?C:E.UNKNOWN}(y.status);a(new P(v,y.message))}else a(new P(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(E.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{$(He,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(He,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Pc(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AI(),a=PI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new $I({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");$(He,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const y=new ST({Wr:w=>{d?$(He,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||($(He,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),$(He,`RPC '${e}' stream ${i} sending:`,w),c.send(w))},Hr:()=>c.close()}),v=(w,C,g)=>{w.listen(C,p=>{try{g(p)}catch(m){setTimeout(()=>{throw m},0)}})};return v(c,fa.EventType.OPEN,()=>{d||$(He,`RPC '${e}' stream ${i} transport opened.`)}),v(c,fa.EventType.CLOSE,()=>{d||(d=!0,$(He,`RPC '${e}' stream ${i} transport closed`),y.so())}),v(c,fa.EventType.ERROR,w=>{d||(d=!0,Ll(He,`RPC '${e}' stream ${i} transport errored:`,w),y.so(new P(E.UNAVAILABLE,"The operation could not be completed")))}),v(c,fa.EventType.MESSAGE,w=>{var C;if(!d){const g=w.data[0];ae(!!g);const p=g,m=p.error||((C=p[0])===null||C===void 0?void 0:C.error);if(m){$(He,`RPC '${e}' stream ${i} received error:`,m);const _=m.status;let N=function(D){const O=we[D];if(O!==void 0)return tw(O)}(_),L=m.message;N===void 0&&(N=E.INTERNAL,L="Unknown error status: "+_+" with message "+m.message),d=!0,y.so(new P(N,L)),c.close()}else $(He,`RPC '${e}' stream ${i} received:`,g),y.io(g)}}),v(a,MI.STAT_EVENT,w=>{w.stat===Nm.PROXY?$(He,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Nm.NOPROXY&&$(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.no()},0),y}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return new $8(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new dw(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new P(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IT extends fw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=F8(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?Jt(s.readTime):j.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=ad(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=td(a)?{documents:j8(i,a)}:{query:z8(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=iw(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Pl(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=W8(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=ad(this.serializer),n.removeTarget=e,this.Fo(n)}}class TT extends fw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=B8(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.Zo(r,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ad(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>V8(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(E.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(E.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class LT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(_n(n),this.ru=!1):$("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Kr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.du.add(4),await Vo(l),l.mu.set("Unknown"),l.du.delete(4),await Du(l)}(this))})}),this.mu=new LT(r,i)}}async function Du(t){if(Kr(t))for(const e of t.wu)await e(!0)}async function Vo(t){for(const e of t.wu)await e(!1)}function pw(t,e){const n=z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),up(n)?lp(n):Qi(n).No()&&ap(n,e))}function mw(t,e){const n=z(t),r=Qi(n);n.fu.delete(e),r.No()&&gw(n,e),n.fu.size===0&&(r.No()?r.$o():Kr(n)&&n.mu.set("Unknown"))}function ap(t,e){t.gu.Ot(e.targetId),Qi(t).jo(e)}function gw(t,e){t.gu.Ot(e),Qi(t).Wo(e)}function lp(t){t.gu=new A8({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Qi(t).start(),t.mu.ou()}function up(t){return Kr(t)&&!Qi(t).xo()&&t.fu.size>0}function Kr(t){return z(t).du.size===0}function yw(t){t.gu=void 0}async function RT(t){t.fu.forEach((e,n)=>{ap(t,e)})}async function DT(t,e){yw(t),up(t)?(t.mu.au(e),lp(t)):t.mu.set("Unknown")}async function AT(t,e,n){if(t.mu.set("Online"),e instanceof rw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Ua?t.gu.Kt(e):e instanceof nw?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(j.min()))try{const r=await hw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),gw(i,a);const u=new Ir(l.target,a,1,l.sequenceNumber);ap(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!$o(e))throw e;t.du.add(1),await Vo(t),t.mu.set("Offline"),n||(n=()=>hw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Du(t)})}function vw(t,e){return e().catch(n=>Ol(t,n,e))}async function Au(t){const e=z(t),n=nr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;PT(e);)try{const i=await yT(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,OT(e,i)}catch(i){await Ol(e,i)}ww(e)&&_w(e)}function PT(t){return Kr(t)&&t.lu.length<10}function OT(t,e){t.lu.push(e);const n=nr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function ww(t){return Kr(t)&&!nr(t).xo()&&t.lu.length>0}function _w(t){nr(t).start()}async function MT(t){nr(t).tu()}async function $T(t){const e=nr(t);for(const n of t.lu)e.Yo(n.mutations)}async function bT(t,e,n){const r=t.lu.shift(),i=tp.from(r,e,n);await vw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Au(t)}async function UT(t,e){e&&nr(t).Jo&&await async function(n,r){if(i=r.code,D8(i)&&i!==E.ABORTED){const s=n.lu.shift();nr(n).Oo(),await vw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Au(n)}var i}(t,e),ww(t)&&_w(t)}async function Ym(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.du.add(3),await Vo(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Du(n)}async function FT(t,e){const n=z(t);e?(n.du.delete(2),await Du(n)):e||(n.du.add(2),await Vo(n),n.mu.set("Unknown"))}function Qi(t){return t.yu||(t.yu=function(e,n,r){const i=z(e);return i.nu(),new IT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:RT.bind(null,t),Zr:DT.bind(null,t),zo:AT.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),up(t)?lp(t):t.mu.set("Unknown")):(await t.yu.stop(),yw(t))})),t.yu}function nr(t){return t.pu||(t.pu=function(e,n,r){const i=z(e);return i.nu(),new TT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:MT.bind(null,t),Zr:UT.bind(null,t),Xo:$T.bind(null,t),Zo:bT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Au(t)):(await t.pu.stop(),t.lu.length>0&&($("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(_n("AsyncQueue",`${e}: ${t}`),$o(t))return new P(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=ys(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.Iu=new Le(b.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):V():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mi(e,n,Ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.Eu=void 0,this.listeners=[]}}class BT{constructor(){this.queries=new Gi(e=>B2(e),Iu),this.onlineState="Unknown",this.Au=new Set}}async function Ew(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new VT),i)try{s.Eu=await n.onListen(r)}catch(o){const a=hp(o,`Initialization of query '${id(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&dp(n)}async function Cw(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jT(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&dp(n)}function zT(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dp(t){t.Au.forEach(e=>{e.next()})}class Sw{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.key=e}}class Iw{constructor(e){this.key=e}}class HT{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=K(),this.mutatedKeys=K(),this.Ku=j2(e),this.Gu=new Ei(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Xm,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=Tu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;d&&y?d.data.isEqual(y.data)?v!==w&&(r.track({type:3,doc:y}),C=!0):this.Wu(d,y)||(r.track({type:2,doc:y}),C=!0,(l&&this.Ku(y,l)>0||u&&this.Ku(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),C=!0):d&&!y&&(r.track({type:1,doc:d}),C=!0,(l||u)&&(a=!0)),C&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return y(h)-y(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Mi(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Xm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=K(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new Iw(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new kw(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=K();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Mi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class WT{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qT{constructor(e){this.key=e,this.ec=!1}}class KT{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Gi(a=>B2(a),Iu),this.ic=new Map,this.rc=new Set,this.oc=new Le(b.comparator),this.uc=new Map,this.cc=new ip,this.ac={},this.hc=new Map,this.lc=Oi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function GT(t,e){const n=i9(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await vT(n.localStore,En(e));n.isPrimaryClient&&pw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await QT(n,e,r,a==="current",o.resumeToken)}return i}async function QT(t,e,n,r,i){t.dc=(h,d,y)=>async function(v,w,C,g){let p=w.view.zu(C);p.Mi&&(p=await Gm(v.localStore,w.query,!1).then(({documents:N})=>w.view.zu(N,p)));const m=g&&g.targetChanges.get(w.targetId),_=w.view.applyChanges(p,v.isPrimaryClient,m);return eg(v,w.targetId,_.Yu),_.snapshot}(t,h,d,y);const s=await Gm(t.localStore,e,!0),o=new HT(e,s.Wi),a=o.zu(s.documents),l=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);eg(t,n,u.Yu);const c=new WT(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function ZT(t,e){const n=z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Iu(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ld(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mw(n.remoteStore,r.targetId),ud(n,r.targetId)}).catch(Mo)):(ud(n,r.targetId),await ld(n.localStore,r.targetId,!0))}async function YT(t,e,n){const r=s9(t);try{const i=await function(s,o){const a=z(s),l=Te.now(),u=o.reduce((d,y)=>d.add(y.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=Cn(),v=K();return a.Ki.getEntries(d,u).next(w=>{y=w,y.forEach((C,g)=>{g.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(w=>{c=w;const C=[];for(const g of o){const p=T8(g,c.get(g.key).overlayedDocument);p!=null&&C.push(new lr(g.key,p,A2(p.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,C,o)}).next(w=>{h=w;const C=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,C)})}).then(()=>({batchId:h.batchId,changes:H2(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Le(J)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Bo(r,i.changes),await Au(r.remoteStore)}catch(i){const s=hp(i,"Failed to persist write");n.reject(s)}}async function Tw(t,e){const n=z(t);try{const r=await mT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ae(o.ec):i.removedDocuments.size>0&&(ae(o.ec),o.ec=!1))}),await Bo(n,r,e)}catch(r){await Mo(r)}}function Jm(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&dp(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XT(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Le(b.comparator);o=o.insert(s,Ge.newNoDocument(s,j.min()));const a=K().add(s),l=new xu(j.min(),new Map,new Ne(J),o,a);await Tw(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),fp(r)}else await ld(r.localStore,e,!1).then(()=>ud(r,e,n)).catch(Mo)}async function JT(t,e){const n=z(t),r=e.batch.batchId;try{const i=await pT(n.localStore,e);Lw(n,r,null),Nw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bo(n,i)}catch(i){await Mo(i)}}async function e9(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ae(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Lw(r,e,n),Nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bo(r,i)}catch(i){await Mo(i)}}function Nw(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Lw(t,e,n){const r=z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||xw(t,r)})}function xw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(mw(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),fp(t))}function eg(t,e,n){for(const r of n)r instanceof kw?(t.cc.addReference(r.key,e),t9(t,r)):r instanceof Iw?($("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||xw(t,r.key)):V()}function t9(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||($("SyncEngine","New document in limbo: "+n),t.rc.add(r),fp(t))}function fp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new b(se.fromString(e)),r=t.lc.next();t.uc.set(r,new qT(n)),t.oc=t.oc.insert(n,r),pw(t.remoteStore,new Ir(En(Xf(n.path)),r,2,Gf.ct))}}async function Bo(t,e,n){const r=z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=op.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$o(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),y=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(y);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function n9(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await cw(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new P(E.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bo(n,r.Qi)}}function r9(t,e){const n=z(t),r=n.uc.get(e);if(r&&r.ec)return K().add(r.key);{let i=K();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function i9(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XT.bind(null,e),e.nc.zo=jT.bind(null,e.eventManager),e.nc.wc=zT.bind(null,e.eventManager),e}function s9(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e9.bind(null,e),e}class tg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fT(this.persistence,new hT,e.initialUser,this.serializer)}createPersistence(e){return new uT(sp.Fs,this.serializer)}createSharedClientState(e){return new _T}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o9{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=n9.bind(null,this.syncEngine),await FT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BT}createDatastore(e){const n=Ru(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new kT(i));var i;return function(s,o,a,l){return new NT(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Jm(this.syncEngine,a,0),o=Zm.D()?new Zm:new ET,new xT(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new KT(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);$("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Vo(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=L2.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ng(t,e){t.asyncQueue.verifyOperationInProgress();const n=await u9(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ym(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ym(e.remoteStore,s)),t._onlineComponents=e}function l9(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function u9(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!l9(n))throw n;Ll("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new tg)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new tg);return t._offlineComponents}async function Dw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await ng(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await ng(t,new o9))),t._onlineComponents}function c9(t){return Dw(t).then(e=>e.syncEngine)}async function Aw(t){const e=await Dw(t),n=e.eventManager;return n.onListen=GT.bind(null,e.syncEngine),n.onUnlisten=ZT.bind(null,e.syncEngine),n}function h9(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rw({next:h=>{s.enqueueAndForget(()=>Cw(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new P(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Sw(Xf(o.path),u,{includeMetadataChanges:!0,xu:!0});return Ew(i,c)}(await Aw(t),t.asyncQueue,e,n,r)),r.promise}function d9(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rw({next:h=>{s.enqueueAndForget(()=>Cw(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Sw(o,u,{includeMetadataChanges:!0,xu:!0});return Ew(i,c)}(await Aw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e,n){if(!n)throw new P(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f9(t,e,n,r){if(e===!0&&r===!0)throw new P(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ig(t){if(!b.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sg(t){if(b.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new P(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,f9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UI;switch(n.type){case"firstParty":return new jI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rg.get(e);n&&($("ComponentProvider","Removing Datastore"),rg.delete(e),n.terminate())}(this),Promise.resolve()}}function p9(t,e,n,r={}){var i;const s=(t=zt(t,Ou))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ll("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qe.MOCK_USER;else{o=Uy(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qe(l)}t._authCredentials=new FI(new N2(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class Zi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zi(this.firestore,e,this._query)}}class Zn extends Zi{constructor(e,n,r){super(e,n,Xf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new b(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function cd(t,e,...n){if(t=ne(t),Pw("collection","path",e),t instanceof Ou){const r=se.fromString(e,...n);return sg(r),new Zn(t,null,r)}{if(!(t instanceof st||t instanceof Zn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return sg(r),new Zn(t.firestore,null,r)}}function tn(t,e,...n){if(t=ne(t),arguments.length===1&&(e=L2.A()),Pw("doc","path",e),t instanceof Ou){const r=se.fromString(e,...n);return ig(r),new st(t,null,new b(r))}{if(!(t instanceof st||t instanceof Zn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return ig(r),new st(t.firestore,t instanceof Zn?t.converter:null,new b(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m9{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new dw(this,"async_queue_retry"),this.qc=()=>{const n=Oc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new fn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$o(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=cp.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&V()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Gr extends Ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new m9,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ow(this),this._firestoreClient.terminate()}}function g9(t,e){const n=typeof t=="object"?t:pf(),r=typeof t=="string"?t:e||"(default)",i=iu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$y("firestore");s&&p9(i,...s)}return i}function pp(t){return t._firestoreClient||Ow(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ow(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new t8(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new a9(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(et.fromBase64String(e))}catch(n){throw new P(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $i(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y9=/^__.*__$/;class v9{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class Mw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class yp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ml(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if($w(this.Yc)&&y9.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class w9{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ru(e)}ua(e,n,r,i=!1){return new yp({Yc:e,methodName:n,oa:r,path:Qe.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $u(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new w9(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bw(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);vp("Data must be an object, but it was:",o,r);const a=Uw(r,o);let l,u;if(s.merge)l=new yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=hd(e,h,n);if(!o.contains(d))throw new P(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Vw(c,d)||c.push(d)}l=new yt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new v9(new ct(a),l,u)}class bu extends mp{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function _9(t,e,n,r){const i=t.ua(1,e,n);vp("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();qr(r,(l,u)=>{const c=wp(e,l,n);u=ne(u);const h=i.na(c);if(u instanceof bu)s.push(c);else{const d=jo(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new yt(s);return new Mw(o,a,i.fieldTransforms)}function E9(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[hd(e,r,n)],l=[i];if(s.length%2!=0)throw new P(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(hd(e,s[d])),l.push(s[d+1]);const u=[],c=ct.empty();for(let d=a.length-1;d>=0;--d)if(!Vw(u,a[d])){const y=a[d];let v=l[d];v=ne(v);const w=o.na(y);if(v instanceof bu)u.push(y);else{const C=jo(v,w);C!=null&&(u.push(y),c.set(y,C))}}const h=new yt(u);return new Mw(c,h,o.fieldTransforms)}function C9(t,e,n,r=!1){return jo(n,t.ua(r?4:3,e))}function jo(t,e){if(Fw(t=ne(t)))return vp("Unsupported field value:",e,t),Uw(t,e);if(t instanceof mp)return function(n,r){if(!$w(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=jo(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _8(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:Pl(r.serializer,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pl(r.serializer,i)}}if(n instanceof gp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $i)return{bytesValue:iw(r.serializer,n._byteString)};if(n instanceof st){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Pu(n)}`)}(t,e)}function Uw(t,e){const n={};return x2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,i)=>{const s=jo(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof gp||t instanceof $i||t instanceof st||t instanceof mp)}function vp(t,e,n){if(!Fw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Pu(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function hd(t,e,n){if((e=ne(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return wp(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const S9=new RegExp("[~\\*/\\[\\]]");function wp(t,e,n){if(e.search(S9)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(E.INVALID_ARGUMENT,a+t+l)}function Vw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new k9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_p("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class k9 extends Bw{data(){return super.data()}}function _p(t,e){return typeof e=="string"?wp(t,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I9(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}class T9 extends Ep{}function N9(t,e,...n){let r=[];e instanceof Ep&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Cp).length,o=i.filter(a=>a instanceof Uu).length;if(s>1||s>0&&o>0)throw new P(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Uu extends T9{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uu(e,n,r)}_apply(e){const n=this._parse(e);return jw(e._query,n),new Zi(e.firestore,e.converter,nd(e._query,n))}_parse(e){const n=$u(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){lg(c,u);const d=[];for(const y of c)d.push(ag(a,i,y));h={arrayValue:{values:d}}}else h=ag(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||lg(c,u),h=C9(o,s,c,u==="in"||u==="not-in");return Ce.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function L9(t,e,n){const r=e,i=_p("where",t);return Uu._create(i,r,n)}class Cp extends Ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)jw(s,a),s=nd(s,a)}(e._query,n),new Zi(e.firestore,e.converter,nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ag(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new P(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V2(e)&&n.indexOf("/")!==-1)throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!b.isDocumentKey(r))throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pm(t,new b(r))}if(n instanceof st)return Pm(t,n._key);throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(n)}.`)}function lg(t,e){if(!Array.isArray(t)||t.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jw(t,e){if(e.isInequality()){const r=Jf(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new P(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=F2(t);s!==null&&x9(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function x9(t,e,n){if(!n.isEqual(e))throw new P(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class R9{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return qr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gp(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=D2(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);ae(uw(r));const i=new lo(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hw extends Bw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_p("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends Hw{data(e={}){return super.data(e)}}class D9{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:A9(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function A9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){t=zt(t,st);const e=zt(t.firestore,Gr);return h9(pp(e),t._key).then(n=>O9(e,t,n))}class Ww extends R9{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function qw(t){t=zt(t,Zi);const e=zt(t.firestore,Gr),n=pp(e),r=new Ww(e);return I9(t._query),d9(n,t._query).then(i=>new D9(e,r,t,i))}function dd(t,e,n){t=zt(t,st);const r=zt(t.firestore,Gr),i=zw(t.converter,e,n);return Fu(r,[bw($u(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function $l(t,e,n,...r){t=zt(t,st);const i=zt(t.firestore,Gr),s=$u(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Mu?E9(s,"updateDoc",t._key,e,n,r):_9(s,"updateDoc",t._key,e),Fu(i,[o.toMutation(t._key,Lt.exists(!0))])}function P9(t){return Fu(zt(t.firestore,Gr),[new ep(t._key,Lt.none())])}function Kw(t,e){const n=zt(t.firestore,Gr),r=tn(t),i=zw(t.converter,e);return Fu(n,[bw($u(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Fu(t,e){return function(n,r){const i=new fn;return n.asyncQueue.enqueueAndForget(async()=>YT(await c9(n),r,i)),i.promise}(pp(t),e)}function O9(t,e,n){const r=n.docs.get(e._key),i=new Ww(t);return new Hw(t,i,e._key,r,new vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ki=n})(ji),Pr(new Jn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Gr(new VI(n.getProvider("auth-internal")),new HI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Zt(Lm,"3.10.0",t),Zt(Lm,"3.10.0","esm2017")})();const M9="AIzaSyBfxDvt2E0BJ_eI8QuoYGwTcUHY2gMUOgQ",$9="cookletproject.firebaseapp.com",b9="cookletproject",U9="cookletproject.appspot.com",F9="864282756881",V9="1:864282756881:web:efc85796621e49624eeeb0",B9={apiKey:M9,authDomain:$9,projectId:b9,storageBucket:U9,messagingSenderId:parseInt(F9),appId:V9},Gw=By(B9),Y=M6(Gw),Sp=new on,At=g9(Gw),j9="_form_container_12nln_3",z9="_title_container_12nln_37",H9="_title_12nln_37",W9="_subtitle_12nln_67",q9="_input_container_12nln_83",K9="_icon_12nln_101",G9="_input_label_12nln_117",Q9="_input_field_12nln_129",Z9="_change_btn_12nln_165",Y9="_divider_12nln_187",X9="_line_12nln_205",x={form_container:j9,title_container:z9,title:H9,subtitle:W9,input_container:q9,icon:K9,input_label:G9,input_field:Q9,change_btn:Z9,divider:Y9,line:X9};function J9({onSent:t}){const[e,n]=S.exports.useState(""),[r,i]=S.exports.useState("");function s(o){o.preventDefault();const a=Y.currentUser,l=kn.credential(Y.currentUser.email,r);mk(Y,e).then(async u=>{u.length>0?(console.error("Email address is already in use"),alert("Emailov\xE1 adresa je ji\u017E pou\u017E\xEDvan\xE1.")):Cf(a,l).then(()=>{yk(a,e).then(async()=>{await $l(tn(At,"users",a.uid),{email:e}),t()}).catch(c=>{console.error("error updating email: ",c)})}).catch(c=>{c.code=="auth/wrong-password"?alert("\u0160patn\xE9 heslo"):c.code=="auth/too-many-requests"?alert("V\xE1\u0161 \xFA\u010Det byl na n\u011Bjakou dobu pozastaven z d\u016Fvodu n\u011Bkolika nepoveden\xFDch pokus\u016F o p\u0159ihl\xE1\u0161en\xED, zkuste to pros\xEDm pozd\u011Bji."):console.error("Error confirming current user: ",c)})}).catch(u=>{console.error(u)})}return f("div",{className:x.body,children:T("div",{className:x.form_container,children:[T("div",{className:x.title_container,children:[f("p",{className:x.title,children:"Change Email"}),f("div",{className:x.subtitle,children:"Zadejte pros\xEDm sv\u016Fj nov\xFD email a potvr\u010Fte heslem."})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"email_field",children:"Email"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"name@mail.com",title:"Input title",name:"input-name",type:"email",className:x.input_field,id:"email_field",required:!0,onChange:o=>n(o.target.value),value:e})]}),T("div",{className:x.divider,children:[f("hr",{className:x.line}),f("div",{children:"Confirmation"}),f("hr",{className:x.line})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"password_field",children:"Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Password",title:"Input title",name:"input-name",type:"password",className:x.input_field,id:"password_field",required:!0,onChange:o=>i(o.target.value),value:r})]}),f("button",{title:"Change email",onClick:s,className:x.change_btn,children:f("span",{children:"Change email"})})]})})}function e5({onSent:t}){const[e,n]=S.exports.useState(""),[r,i]=S.exports.useState(""),[s,o]=S.exports.useState("");function a(l){l.preventDefault();const u=Y.currentUser,c=kn.credential(Y.currentUser.email,r);e==s?Cf(u,c).then(()=>{vk(u,e).then(async()=>{t()}).catch(h=>{console.error("error updating email: ",h)})}).catch(h=>{h.code=="auth/wrong-password"?alert("\u0160patn\xE9 aktu\xE1ln\xED (potvrzovac\xED) heslo"):h.code=="auth/too-many-requests"?alert("V\xE1\u0161 \xFA\u010Det byl na n\u011Bjakou dobu pozastaven z d\u016Fvodu n\u011Bkolika nepoveden\xFDch pokus\u016F o p\u0159ihl\xE1\u0161en\xED, zkuste to pros\xEDm pozd\u011Bji."):console.error("Error confirming current user: ",h)}):alert("Hesla se mus\xED b\xFDt toto\u017En\xE1")}return f("div",{className:x.body,children:T("div",{className:x.form_container,children:[T("div",{className:x.title_container,children:[f("p",{className:x.title,children:"Change Password"}),f("div",{className:x.subtitle,children:"Zadejte pros\xEDm nov\xE9 heslo a potvr\u010Fte st\xE1vaj\xEDc\xEDm heslem."})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"newPassword_field",children:"New Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"New Password",title:"Input title",name:"input-name",type:"password",className:x.input_field,id:"newPassword_field",required:!0,onChange:l=>n(l.target.value),value:e})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"confirm_new_password_field",children:"Confirm password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Confirm New Password",title:"Input title",name:"input-name",type:"password",className:x.input_field,id:"confirm_new_password_field",required:!0,onChange:l=>o(l.target.value),value:s})]}),T("div",{className:x.divider,children:[f("hr",{className:x.line}),f("div",{children:"Confirmation"}),f("hr",{className:x.line})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"confirm_password_field",children:"Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Confirm Password",title:"Input title",name:"input-name",type:"password",className:x.input_field,id:"confirm_password_field",required:!0,onChange:l=>i(l.target.value),value:r})]}),f("button",{title:"Change password",onClick:a,className:x.change_btn,children:f("span",{children:"Change password"})})]})})}function t5({providerIsGoogle:t}){const[e,n]=S.exports.useState(""),[r,i]=S.exports.useState(""),s=Bi(),o=Y.currentUser;function a(u){u.preventDefault();const c=kn.credential(Y.currentUser.email,r);Cf(o,c).then(async()=>{e.trim().length>3?(await $l(tn(At,"users",o.uid),{username:e}),await Fh(o,{displayName:e}),s(0)):alert("Del\u0161\xED jm\xE9no, alespo\u0148 4 p\xEDsmena")}).catch(h=>{h.code=="auth/wrong-password"?alert("\u0160patn\xE9 heslo"):h.code=="auth/too-many-requests"?alert("V\xE1\u0161 \xFA\u010Det byl na n\u011Bjakou dobu pozastaven z d\u016Fvodu n\u011Bkolika nepoveden\xFDch pokus\u016F o p\u0159ihl\xE1\u0161en\xED, zkuste to pros\xEDm pozd\u011Bji."):console.error("Error confirming current user: ",h)})}function l(u){Wk(o,Sp).then(async()=>{e.trim().length>3?(await Fh(o,{displayName:e}),await $l(tn(At,"users",o.uid),{username:e}),s(0)):alert("Del\u0161\xED jm\xE9no, alespo\u0148 4 p\xEDsmena")}),u.preventDefault()}return f("div",{className:x.body,children:t?T("div",{className:x.form_container,children:[T("div",{className:x.title_container,children:[f("p",{className:x.title,children:"Change Username"}),f("div",{className:x.subtitle,children:"Zadejte pros\xEDm sv\xE9 nov\xE9 jm\xE9no a potvr\u010Fte google \xFA\u010Dtem."})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"username_field",children:"Username"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"Username",title:"Input title",name:"input-name",type:"text",className:x.input_field,id:"username_field",required:!0,onChange:u=>n(u.target.value),value:e})]}),T("div",{className:x.divider,children:[f("hr",{className:x.line}),f("div",{children:"Confirmation"}),f("hr",{className:x.line})]}),f("button",{title:"Confirm",onClick:l,className:x.sign_in_ggl,children:f("div",{children:"Confirm with Google"})})]}):T("div",{className:x.form_container,children:[T("div",{className:x.title_container,children:[f("p",{className:x.title,children:"Change Username"}),f("div",{className:x.subtitle,children:"Zadejte pros\xEDm sv\xE9 nov\xE9 jm\xE9no a potvr\u010Fte heslem."})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"username_field",children:"Username"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"Username",title:"Input title",name:"input-name",type:"text",className:x.input_field,id:"username_field",required:!0,maxLength:"30",onChange:u=>n(u.target.value),value:e})]}),T("div",{className:x.divider,children:[f("hr",{className:x.line}),f("div",{children:"Confirmation"}),f("hr",{className:x.line})]}),T("div",{className:x.input_container,children:[f("label",{className:x.input_label,htmlFor:"password_field",children:"Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:x.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Password",title:"Input title",name:"input-name",type:"password",className:x.input_field,id:"password_field",required:!0,onChange:u=>i(u.target.value),value:r})]}),f("button",{title:"Change username",onClick:a,className:x.change_btn,children:f("span",{children:"Change Username"})})]})})}function n5(){const[t,e]=S.exports.useState(null),[n,r]=S.exports.useState(!0),[i,s]=S.exports.useState(),o=Bi(),a=async()=>{try{await Ek(Y)}catch(y){console.error("Error signing out user:",y)}};function l(){Y.onAuthStateChanged(async function(y){y!=null?(await zo(tn(At,"users",y.uid)).then(v=>{v.exists()?e(v.data()):console.error("No user of this email!")}),y.providerData[0].providerId!="google.com"?r(!1):r(!0)):(e(null),o("/",{replace:!0}))})}S.exports.useEffect(()=>{l()},[Y]);const[u,c]=S.exports.useState(!1);function h(){c(!1)}function d(){c(!0)}return f("div",{className:We.Account,children:t==null?null:T("div",{className:We.body,children:[T("div",{className:We.profileInfo,children:[f("h1",{children:"My Account"}),f("img",{className:We.profilePic,src:"https://img.icons8.com/ios/100/null/test-account.png"}),T("div",{children:[f("h2",{children:t.username}),f("p",{children:t.email}),T("div",{className:We.account_btn_container,children:[f("button",{className:We.account_btn,onClick:a,children:"Log Out"}),T("div",{className:We.divider,children:[f("hr",{className:We.line}),f("div",{children:"Settings"}),f("hr",{className:We.line})]}),f("button",{className:We.account_btn,onClick:()=>{s(f(t5,{providerIsGoogle:n,onSent:()=>{l(),h()}})),d()},children:"Change username"}),n?f("div",{className:We.subtitle,children:"*We can't change your gmail or gmail password, sorry!"}):T("div",{children:[f("button",{className:We.account_btn,onClick:()=>{s(f(J9,{onSent:()=>{l(),h()}})),d()},children:"Change email"}),f("br",{}),f("button",{className:We.account_btn,onClick:()=>{s(f(e5,{onSent:()=>{l(),h()}})),d()},children:"Change password"})]})]})]})]}),u?f(ru,{onClose:h,children:i}):null]})})}const r5="_form_container_ad5wd_3",i5="_title_container_ad5wd_37",s5="_title_ad5wd_37",o5="_subtitle_ad5wd_67",a5="_input_container_ad5wd_83",l5="_icon_ad5wd_101",u5="_input_label_ad5wd_117",c5="_input_field_ad5wd_129",h5="_sign_in_btn_ad5wd_165",d5="_sign_in_ggl_ad5wd_187",f5="_divider_ad5wd_219",p5="_line_ad5wd_237",m5="_note_ad5wd_253",g5="_link_ad5wd_263",U={form_container:r5,title_container:i5,title:s5,subtitle:o5,input_container:a5,icon:l5,input_label:u5,input_field:c5,sign_in_btn:h5,sign_in_ggl:d5,divider:f5,line:p5,note:m5,link:g5};function Qw({switchToRegister:t}){const[e,n]=S.exports.useState(""),[r,i]=S.exports.useState(""),s=async()=>{try{await fk(Y,e,r),window.location.reload()}catch(a){a.code==="auth/invalid-email"?alert("Invalid email address"):a.code==="auth/wrong-password"?alert("Wrong password"):a.code==="auth/missing-password"?alert("Where password?"):a.code==="auth/user-not-found"?alert("User not found"):a.code=="auth/too-many-requests"?alert("Your account has been temporarily disabled due to too many failed log-in attempts. Please try again later."):console.error("Error logging in user:",a)}},o=async()=>{try{await Sv(Y,Sp);const a=Y.currentUser,l=a.uid,u=a.email,c=a.displayName,h=tn(At,"users",l);(await zo(h)).exists()?window.location.reload():dd(h,{username:c,email:u})}catch(a){console.error("Error signing in user:",a)}};return f("div",{children:T("div",{className:U.form_container,children:[T("div",{className:U.title_container,children:[f("p",{className:U.title,children:"Login to your Account"}),f("div",{className:U.subtitle,children:"P\u0159idejte se k n\xE1m, vytvo\u0159te si u n\xE1s \xFA\u010Det a sd\xEDlejte s n\xE1mi sv\xE9 recepty!"})]}),f("br",{}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"email_field",children:"Email"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"name@mail.com",title:"Input title",name:"input-name",type:"email",className:U.input_field,id:"email_field",onChange:a=>n(a.target.value),value:e})]}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"password_field",children:"Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Password",title:"Input title",name:"input-name",type:"password",className:U.input_field,id:"password_field",onChange:a=>i(a.target.value),value:r})]}),f("button",{title:"Sign In",onClick:s,className:U.sign_in_btn,children:f("span",{children:"Sign In"})}),T("p",{className:U.subtitle,children:["Don't have an account? ",f("span",{className:U.link,onClick:()=>t(),children:"Create one!"})]}),T("div",{className:U.divider,children:[f("hr",{className:U.line}),f("div",{children:"Or"}),f("hr",{className:U.line})]}),f("button",{title:"Sign In",onClick:o,className:U.sign_in_ggl,children:f("div",{children:"Sign In with Google"})}),f("p",{className:U.note,children:"Terms of use & Conditions"})]})})}function Zw({switchToLogin:t}){const[e,n]=S.exports.useState(""),[r,i]=S.exports.useState(""),[s,o]=S.exports.useState(""),[a,l]=S.exports.useState(e),u=async()=>{try{if(r==s)if(a.trim().length>3){const{user:h}=await dk(Y,e,r);await dd(tn(At,"users",h.uid),{username:a,email:e}),await Fh(h,{displayName:a}),window.location.reload()}else alert("Del\u0161\xED jm\xE9no, alespo\u0148 4 p\xEDsmena");else alert("Hesla se mus\xED b\xFDt toto\u017En\xE1")}catch(h){h.code==="auth/email-already-in-use"?alert("Email is already in use"):h.code==="auth/invalid-email"?alert("Invalid email address"):h.code==="auth/weak-password"?alert("Password is too weak"):h.code==="auth/missing-password"?alert("You need a password dude"):console.error("Error signing in user:",h)}},c=async()=>{try{await Sv(Y,Sp);const h=Y.currentUser,d=h.uid,y=h.email,v=h.displayName,w=tn(At,"users",d);(await zo(w)).exists()||dd(w,{username:v,email:y}),window.location.reload()}catch(h){console.error("Error signing in user:",h)}};return T("div",{className:U.form_container,children:[T("div",{className:U.title_container,children:[f("p",{className:U.title,children:"Create an Account"}),f("div",{className:U.subtitle,children:"P\u0159idejte se k n\xE1m, vytvo\u0159te si u n\xE1s \xFA\u010Det a sd\xEDlejte s n\xE1mi sv\xE9 recepty!"})]}),f("br",{}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"username_field",children:"Username"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"Username",title:"Input title",name:"input-name",type:"text",className:U.input_field,id:"username_field",required:!0,maxLength:"30",onChange:h=>l(h.target.value),value:a})]}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"email_field",children:"Email"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"}),f("path",{strokeLinejoin:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"})]}),f("input",{placeholder:"name@mail.com",title:"Input title",name:"input-name",type:"email",className:U.input_field,id:"email_field",required:!0,onChange:h=>n(h.target.value),value:e})]}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"password_field",children:"Password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Password",title:"Input title",name:"input-name",type:"password",className:U.input_field,id:"password_field",required:!0,onChange:h=>i(h.target.value),value:r})]}),T("div",{className:U.input_container,children:[f("label",{className:U.input_label,htmlFor:"confirm_password_field",children:"Confirm password"}),T("svg",{fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",className:U.icon,children:[f("path",{strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"}),f("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#141B34",d:"M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"}),f("path",{fill:"#141B34",d:"M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"})]}),f("input",{placeholder:"Confirm password",title:"Input title",name:"input-name",type:"password",className:U.input_field,id:"confirm_password_field",required:!0,onChange:h=>o(h.target.value),value:s})]}),f("button",{title:"Sign In",onClick:u,className:U.sign_in_btn,children:f("span",{children:"Create an accout"})}),T("p",{className:U.subtitle,children:["Already have an account? ",f("span",{className:U.link,onClick:t,children:"Log in!"})]}),T("div",{className:U.divider,children:[f("hr",{className:U.line}),f("div",{children:"Or"}),f("hr",{className:U.line})]}),f("button",{title:"Sign In",onClick:c,className:U.sign_in_ggl,children:f("div",{children:"Sign In with Google"})}),f("p",{className:U.note,children:"Terms of use & Conditions"})]})}function y5(){const[t,e]=S.exports.useState(!0);function n(){e(!t)}return f("div",{children:t?f(Qw,{switchToRegister:n}):f(Zw,{switchToLogin:n})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebasestorage.googleapis.com",Xw="storageBucket",v5=2*60*1e3,w5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends nn{constructor(e,n,r=0){super($c(e),`Firebase Storage: ${n} (${$c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function $c(t){return"storage/"+t}function Jw(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Oe.UNKNOWN,t)}function _5(t){return new Me(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function E5(t){return new Me(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function C5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Oe.UNAUTHENTICATED,t)}function S5(){return new Me(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function k5(t){return new Me(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function I5(){return new Me(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T5(){return new Me(Oe.CANCELED,"User canceled the upload/download.")}function N5(t){return new Me(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function L5(t){return new Me(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function x5(){return new Me(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xw+"' property when initializing the app?")}function R5(){return new Me(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fd(t){return new Me(Oe.INVALID_ARGUMENT,t)}function e_(){return new Me(Oe.APP_DELETED,"The Firebase app was deleted.")}function D5(t){return new Me(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ls(t){throw new Me(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vt.makeFromUrl(e,n)}catch{return new vt(e,"")}if(r.path==="")return r;throw L5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},w=n===Yw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${C}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<m.length;_++){const N=m[_],L=N.regex.exec(e);if(L){const D=L[N.indices.bucket];let O=L[N.indices.path];O||(O=""),r=new vt(D,O),N.postModify(r);break}}if(r==null)throw N5(e);return r}}class A5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function h(C){i=setTimeout(()=>{i=null,t(y,l())},C)}function d(){s&&clearTimeout(s)}function y(C,...g){if(u){d();return}if(C){d(),c.call(null,C,...g);return}if(l()||o){d(),c.call(null,C,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let v=!1;function w(C){v||(v=!0,d(),!u&&(i!==null?(C||(a=2),clearTimeout(i),h(0)):C||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function O5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M5(t){return t!==void 0}function $5(t){return typeof t=="object"&&!Array.isArray(t)}function t_(t){return typeof t=="string"||t instanceof String}function ug(t,e,n,r){if(r<e)throw fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function r_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Tr||(Tr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b5(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new va(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Tr.NO_ERROR,l=s.getStatus();if(!a||b5(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Tr.ABORT;r(!1,new va(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new va(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());M5(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Jw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?e_():T5();o(l)}else{const l=I5();o(l)}};this.canceled_?n(!1,new va(!1,null,!0)):this.backoffId_=P5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&O5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class va{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function F5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function V5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function B5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function j5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function z5(t,e,n,r,i,s,o=!0){const a=r_(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return B5(u,e),F5(u,n),V5(u,s),j5(u,r),new U5(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){let e;try{e=JSON.parse(t)}catch{return null}return $5(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function W5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function s_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q5(t,e){return e}class tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||q5}}let wa=null;function K5(t){return!t_(t)||t.length<2?t:s_(t)}function G5(){if(wa)return wa;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(s,o){return K5(o)}const n=new tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new tt("size");return i.xform=r,t.push(i),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),wa=t,wa}function Q5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new vt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Z5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Q5(r,t),r}function Y5(t,e,n){const r=i_(e);return r===null?null:Z5(t,r,n)}function X5(t,e,n,r){const i=i_(e);if(i===null||!t_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),y=n_(d,n,r),v=r_({alt:"media",token:u});return y+v})[0]}class J5{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e7(t){if(!t)throw Jw()}function t7(t,e){function n(r,i){const s=Y5(t,i,e);return e7(s!==null),X5(s,i,t.host,t._protocol)}return n}function n7(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=S5():i=C5():n.getStatus()===402?i=E5(t.bucket):n.getStatus()===403?i=k5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function r7(t){const e=n7(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=_5(t.path)),s.serverResponse=i.serverResponse,s}return n}function i7(t,e,n){const r=e.fullServerUrl(),i=n_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new J5(i,s,t7(t,n),o);return a.errorHandler=r7(e),a}class s7{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Tr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Tr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Tr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ls("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class o7 extends s7{initXhr(){this.xhr_.responseType="text"}}function a7(){return new o7}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this._service=e,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fr(e,n)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s_(this._location.path)}get storage(){return this._service}get parent(){const e=H5(this._location.path);if(e===null)return null;const n=new vt(this._location.bucket,e);return new Fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw D5(e)}}function l7(t){t._throwIfRoot("getDownloadURL");const e=i7(t.storage,t._location,G5());return t.storage.makeRequestWithTokens(e,a7).then(n=>{if(n===null)throw R5();return n})}function u7(t,e){const n=W5(t._location.path,e),r=new vt(t._location.bucket,n);return new Fr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c7(t){return/^[A-Za-z]+:\/\//.test(t)}function h7(t,e){return new Fr(t,e)}function o_(t,e){if(t instanceof kp){const n=t;if(n._bucket==null)throw x5();const r=new Fr(n,n._bucket);return e!=null?o_(r,e):r}else return e!==void 0?u7(t,e):t}function d7(t,e){if(e&&c7(e)){if(t instanceof kp)return h7(t,e);throw fd("To use ref(service, url), the first argument must be a Storage instance.")}else return o_(t,e)}function cg(t,e){const n=e==null?void 0:e[Xw];return n==null?null:vt.makeFromBucketSpec(n,t)}function f7(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Uy(i,t.app.options.projectId))}class kp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Yw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v5,this._maxUploadRetryTime=w5,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ug("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ug("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new A5(e_());{const o=z5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const hg="@firebase/storage",dg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="storage";function p7(t){return t=ne(t),l7(t)}function m7(t,e){return t=ne(t),d7(t,e)}function g7(t=pf(),e){t=ne(t);const r=iu(t,a_).getImmediate({identifier:e}),i=$y("storage");return i&&y7(r,...i),r}function y7(t,e,n,r={}){f7(t,e,n,r)}function v7(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kp(n,r,i,e,ji)}function w7(){Pr(new Jn(a_,v7,"PUBLIC").setMultipleInstances(!0)),Zt(hg,dg,""),Zt(hg,dg,"esm2017")}w7();function _7(){const[t,e]=S.exports.useState(""),[n,r]=S.exports.useState();S.exports.useEffect(()=>{Y.onAuthStateChanged(async function(u){r(u?Y.currentUser.displayName:null)})},[Y]),S.exports.useEffect(()=>{const u=g7(),c=m7(u,"gs://cookletproject.appspot.com/logo2.png");p7(c).then(h=>{e(h)}).catch(h=>{console.error(h)})},[]);const[i,s]=S.exports.useState(!1);function o(){s(!1)}function a(){Y.currentUser==null,s(!0)}const l=n===null?f("div",{className:Mt.link,onClick:a,children:"ACCOUNT"}):f("div",{className:Mt.link,children:f(ci,{to:"/Account",className:Mt.link,children:n})});return T(vo,{children:[f("nav",{children:T("div",{className:Mt.nav,children:[f("div",{className:Mt.item,children:f(ci,{to:"/",children:f("img",{className:Mt.logo,src:t,alt:"Logo"})})}),T("div",{className:Mt.menu,children:[f("div",{className:Mt.subitem,children:f(ci,{to:"/",className:Mt.link,children:"HOME"})}),n?T("div",{className:Mt.subitem,children:[" ",f(ci,{to:"/MyRecipes",className:Mt.link,children:"MY RECIPES"})]}):null]}),l]})}),i?f(ru,{onClose:o,children:f(y5,{})}):null]})}const E7="_recipesGrid_1pcq1_3",C7="_addRecipeSmall_1pcq1_21",S7="_recipeSlideOut_1pcq1_1",k7="_recipeSmall_1pcq1_71",I7="_recipeInfoSmall_1pcq1_111",T7="_recipeNameSmall_1pcq1_149",N7="_recipeAuthorSmall_1pcq1_201",L7="_myRecipes_1pcq1_217",x7="_body_1pcq1_217",lt={recipesGrid:E7,addRecipeSmall:C7,recipeSlideOut:S7,recipeSmall:k7,recipeInfoSmall:I7,recipeNameSmall:T7,recipeAuthorSmall:N7,myRecipes:L7,body:x7},R7="_newRecipe_12xaf_3",D7="_form_container_12xaf_57",A7="_title_container_12xaf_91",P7="_title_12xaf_91",O7="_subtitle_12xaf_121",M7="_input_container_12xaf_137",$7="_input_label_12xaf_165",b7="_input_label_ingredient_12xaf_177",U7="_input_field_12xaf_191",F7="_addIngredient_btn_12xaf_227",V7="_newRecipe_btn_12xaf_257",ce={newRecipe:R7,form_container:D7,title_container:A7,title:P7,subtitle:O7,input_container:M7,input_label:$7,input_label_ingredient:b7,input_field:U7,addIngredient_btn:F7,newRecipe_btn:V7};function l_({onSent:t,onAddRecipe:e}){const[n,r]=S.exports.useState(""),[i,s]=S.exports.useState(""),[o,a]=S.exports.useState(""),[l,u]=S.exports.useState([""]),c=(y,v)=>{const w=[...l];w[y]=v.target.value,u(w)},h=()=>{const y=[...l];y.push(""),u(y)};return f(vo,{children:f("div",{className:ce.body,children:f("div",{className:ce.newRecipe,children:T("form",{styles:ce.form_container,onSubmit:d,children:[T("div",{className:ce.title_container,children:[f("p",{className:ce.title,children:"Add a recipe!"}),f("div",{className:ce.subtitle,children:"Add your very own unique recipe, you will be able to add more information to the recipe when editting"})]}),T("div",{className:ce.input_container,children:[f("label",{className:ce.input_label,htmlFor:"recipeName_field",children:"Recipe Name"}),f("input",{placeholder:"Recipe Name",title:"Input title",name:"input-name",type:"text",className:ce.input_field,id:"recipeName_field",required:!0,maxLength:"50",onChange:y=>r(y.target.value),value:n})]}),T("div",{className:ce.input_container,children:[f("label",{className:ce.input_label,htmlFor:"recipeDescription_field",children:"Short Description"}),f("input",{placeholder:"Short Description (max 75 characters)",title:"Input title",name:"input-description",type:"text",className:ce.input_field,id:"recipeDescription_field",required:!0,maxLength:"75",onChange:y=>s(y.target.value),value:i})]}),T("div",{children:[f("label",{className:ce.input_label,htmlFor:"ingredients",children:"Ingredients:"}),l.map((y,v)=>T("div",{className:ce.input_container,children:[f("label",{className:ce.input_label_ingredient,htmlFor:`ingredient${v}`}),f("input",{className:ce.input_field,placeholder:`#${v+1} ingredient`,type:"text",id:`ingredient${v}`,name:`ingredient${v}`,value:y,onChange:w=>c(v,w),required:!0})]},v)),f("div",{className:ce.title_container,children:f("div",{className:ce.subtitle,children:"*input empty space to discard ingredient"})}),f("button",{className:ce.addIngredient_btn,type:"button",onClick:h,children:"Add Ingredient"})]}),T("div",{className:ce.input_container,children:[f("label",{className:ce.input_label,htmlFor:"recipeInstructions_field",children:"Instructions"}),f("textarea",{cols:30,rows:10,placeholder:"Instructions",title:"Input title",name:"input-instructions",type:"text",className:ce.input_field,id:"recipeInstructions_field",required:!0,onChange:y=>a(y.target.value),value:o})]}),f("input",{className:ce.newRecipe_btn,id:"submitButton",type:"submit",value:"Post Recipe"})]})})})});function d(y){var w;y.preventDefault();const v=l.filter(C=>C.trim()!=="");if(n.trim().length===0||i.trim().length===0||o.trim().length===0||v.length===0)alert("pol\xED\u010Dka musej\xED b\xFDt vypln\u011Bna, mezera se nepo\u010D\xEDt\xE1");else{const C={name:n,description:i,instructions:o,ingredients:v,userId:(w=Y==null?void 0:Y.currentUser)==null?void 0:w.uid};e(C),t()}}}function B7(){const[t,e]=S.exports.useState(null);S.exports.useEffect(()=>{Y.onAuthStateChanged(async function(h){e(h||null)})},[Y]);const[n,r]=S.exports.useState([]),i=cd(At,"recipes"),s=async()=>{try{const d=(await qw(i)).docs.map(y=>({...y.data(),id:y.id}));r(d)}catch(h){console.error("Error retrieving Docs from database: ",h)}};S.exports.useEffect(()=>{s()},[]);async function o(h){try{await Kw(i,h),s()}catch(d){console.error("Error retrieving Docs from database: ",d)}}const[a,l]=S.exports.useState(!1);function u(){l(!1)}function c(){l(!0)}return T("div",{className:lt.body,children:[f("div",{className:lt.recipesGrid,children:n.map(h=>f("div",{children:f(ci,{to:`/Recipe/${h.id}`,children:T("div",{className:lt.recipeSmall,children:[f("div",{className:lt.recipeNameSmall,children:f("h2",{children:h.name})}),f("div",{className:lt.recipeInfoSmall,children:f("p",{children:h.description})})]})})},h.id))}),f("br",{}),T("div",{children:[f("hr",{}),a?f(ru,{onClose:u,children:f(l_,{onSent:u,onAddRecipe:o})}):null,t?f("div",{className:lt.addRecipeSmall,children:f("button",{onClick:c,children:"P\u0159idej vlastn\xED recept!"})}):null]})]})}function j7(){return f("div",{className:We.body,children:f(B7,{})})}function z7(){const[t,e]=S.exports.useState();function n(){Y.onAuthStateChanged(async function(h){e(h?Y.currentUser:null)})}const[r,i]=S.exports.useState([]);S.exports.useEffect(()=>{n(),s()},[]);const s=async()=>{try{if(Y.currentUser){const h=N9(cd(At,"recipes"),L9("userId","==",Y.currentUser.uid));qw(h).then(d=>{const y=d.docs.map(v=>({...v.data(),id:v.id}));i(y)})}}catch(h){console.error("Error retrieving Docs from database: ",h)}};async function o(h){try{const d=cd(At,"recipes");await Kw(d,h),s()}catch(d){console.error("Error retrieving Docs from database: ",d)}}const[a,l]=S.exports.useState(!1);function u(){l(!1)}function c(){l(!0)}return f("div",{className:lt.myRecipes,children:T("div",{className:lt.body,children:[f("div",{className:lt.recipesGrid,children:r.map(h=>f("div",{children:f(ci,{to:`/Recipe/${h.id}`,children:T("div",{className:lt.recipeSmall,children:[f("div",{className:lt.recipeNameSmall,children:f("h2",{children:h.name})}),T("div",{className:lt.recipeInfoSmall,children:[f("p",{children:h.description}),f("p",{className:lt.recipeAuthorSmall,children:h.author})]})]})})},h.id))}),f("br",{}),T("div",{children:[f("hr",{}),a?f(ru,{onClose:u,children:f(l_,{onSent:u,onAddRecipe:o})}):null,t?f("div",{className:lt.addRecipeSmall,children:f("button",{onClick:c,children:"P\u0159idej vlastn\xED recept!"})}):null]})]})})}const H7="_body_3ayzt_1",W7="_recipe_3ayzt_15",q7="_recipeConfig_3ayzt_31",K7="_recipeSlideOut_3ayzt_1",hr={body:H7,recipe:W7,recipeConfig:q7,recipeSlideOut:K7};function G7(){const t=Bi(),{recipeId:e}=Ry(),[n,r]=S.exports.useState(null),[i,s]=S.exports.useState(),[o,a]=S.exports.useState("nothing"),l=tn(At,"recipes",e);async function u(){try{const h=await zo(l);h.exists()?(r(h.data()),Y.currentUser!=null&&h.data().userId==Y.currentUser.uid?(s(!0),a(h.id)):s(!1)):t("/",{replace:!0})}catch(h){console.error("Error retrieving Docs from database: ",h)}}S.exports.useEffect(()=>{u()},[]);async function c(){try{await P9(l),t("/",{replace:!0})}catch(h){console.error("Error retrieving Docs from database: ",h)}}return T("div",{className:hr.body,children:[T("div",{className:hr.recipe,children:[f("h2",{className:hr.recipeName,children:n!=null&&n.name}),f("p",{className:hr.recipeDesc,children:n!=null&&n.description}),T("div",{className:hr.recipeIngredients,children:[f("h3",{children:"Ingredience: "}),f("div",{children:f("ul",{children:n!=null&&n.ingredients.map((h,d)=>f("div",{children:f("li",{children:h})},d))})})]}),T("div",{className:hr.recipeInstructions,children:[f("h3",{children:"Postup:"}),f("p",{children:n!=null&&n.instructions})]})]}),f("hr",{}),i?T("div",{className:hr.recipeConfig,children:[f("button",{onClick:()=>{t(`/Recipe/edit/${o}`,{replace:!0})},children:"Edit"}),f("button",{onClick:c,children:"Delete"})]}):null]})}function Q7(){const[t,e]=S.exports.useState(!0);function n(){e(!t)}return f("div",{className:We.body,children:f("div",{className:We.centered,children:t?f(Qw,{switchToRegister:n}):f(Zw,{switchToLogin:n})})})}const Z7="_body_1wveh_1",Y7="_form_container_1wveh_25",X7="_title_container_1wveh_59",J7="_title_1wveh_59",eN="_subtitle_1wveh_89",tN="_input_container_1wveh_105",nN="_input_label_1wveh_133",rN="_input_label_ingredient_1wveh_145",iN="_input_field_1wveh_159",sN="_addIngredient_btn_1wveh_193",oN="_newRecipe_btn_1wveh_223",ye={body:Z7,form_container:Y7,title_container:X7,title:J7,subtitle:eN,input_container:tN,input_label:nN,input_label_ingredient:rN,input_field:iN,addIngredient_btn:sN,newRecipe_btn:oN};function aN(){const{recipeId:t}=Ry(),[e,n]=S.exports.useState(null),[r,i]=S.exports.useState(),[s,o]=S.exports.useState();S.exports.useState();const[a,l]=S.exports.useState(),[u,c]=S.exports.useState([]),[h,d]=S.exports.useState(!1),y=Bi(),v=tn(At,"recipes",t);async function w(){try{const m=await zo(v);m.exists()?Y.currentUser!=null&&m.data().userId==Y.currentUser.uid?(d(!0),n(m.data()),i(m.data().name),o(m.data().description),l(m.data().instructions),c(m.data().ingredients)):(d(!1),y(`/Recipe/${t}`,{replace:!0})):y("/",{replace:!0})}catch(m){console.error("Error retrieving Docs from database: ",m)}}S.exports.useEffect(()=>{w()},[]);const C=(m,_)=>{const N=[...u];N[_]=m,c(N)},g=()=>{const m=[...u];m.push(""),c(m)};function p(m){const _=u.filter(N=>N.trim()!=="");r.trim().length===0||s.trim().length===0||a.trim().length===0||_.length===0?alert("pol\xED\u010Dka musej\xED b\xFDt vypln\u011Bna, mezera se nepo\u010D\xEDt\xE1"):(m.preventDefault(),$l(v,{name:r,description:s,instructions:a,ingredients:_}),y(`/Recipe/${t}`,{replace:!0}))}return f("div",{className:ye.body,children:h?T("form",{onSubmit:p,children:[T("div",{className:ye.title_container,children:[f("p",{className:ye.title,children:"Edditing recipe"}),f("div",{className:ye.subtitle,children:"Add your very own unique recipe, you will be able to add more information to the recipe when editting"})]}),T("div",{className:ye.input_container,children:[f("label",{className:ye.input_label,htmlFor:"recipeName_field",children:"Recipe Name"}),f("input",{placeholder:"Recipe Name",title:"Input title",name:"input-name",type:"text",className:ye.input_field,id:"recipeName_field",required:!0,maxLength:"50",onChange:m=>{i(m.target.value)},value:r})]}),f("br",{}),T("div",{className:ye.input_container,children:[f("label",{className:ye.input_label,htmlFor:"recipeDescription_field",children:"Short Description"}),f("input",{placeholder:"Short Description (max 75 characters)",title:"Input title",name:"input-description",type:"text",className:ye.input_field,id:"recipeDescription_field",required:!0,maxLength:"75",onChange:m=>{o(m.target.value)},value:s})]}),f("br",{}),f("br",{}),f("label",{className:ye.input_label,htmlFor:"ingredients",children:"Ingredients:"}),T("div",{className:ye.ingredients,children:[e!=null&&u.map((m,_)=>f("div",{className:ye.input_container,children:f("input",{className:ye.input_field,id:"ingredients",type:"text",required:!0,onChange:N=>{C(N.target.value,_)},value:m})},_)),f("div",{className:ye.title_container,children:f("div",{className:ye.subtitle,children:"*input empty space to discard ingredient"})}),f("button",{className:ye.addIngredient_btn,type:"button",onClick:g,children:"Add Ingredient"})]}),f("br",{}),T("div",{className:ye.input_container,children:[f("label",{className:ye.input_label,htmlFor:"recipeInstructions_field",children:"Instructions"}),f("textarea",{className:ye.input_field,id:"instructions",cols:30,rows:10,required:!0,onChange:m=>{l(m.target.value)},value:a}),f("input",{className:ye.newRecipe_btn,id:"submitButton",type:"submit",value:"Post Recipe"})]})]}):null})}const lN={};function uN(){return f(vo,{children:f("footer",{children:f("div",{className:lN.foot,children:f("p",{children:"Str\xE1nka slou\u017E\xED pouze jako univerzitn\xED projekt. | Nikola Trpkov\xE1"})})})})}function cN(){return T("div",{children:[f(_7,{}),T(xC,{children:[f(Nn,{path:"/",element:f(j7,{})}),f(Nn,{path:"/Account",element:f(n5,{})}),f(Nn,{path:"/MyRecipes",element:f(z7,{})}),f(Nn,{path:"/Recipe/:recipeId",element:f(G7,{})}),f(Nn,{path:"/NotLogged",element:f(Q7,{})}),f(Nn,{path:"Recipe/edit/:recipeId",element:f(aN,{})}),f(Nn,{path:"*",element:f(NC,{to:"/",replace:!0})})]}),f(uN,{})]})}Uc.createRoot(document.getElementById("root")).render(f(_g.StrictMode,{children:f(OC,{children:f(cN,{})})}));
