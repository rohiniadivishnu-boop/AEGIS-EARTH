(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function b0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},Rl={},ym={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),A0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),O0=Symbol.for("react.lazy"),Lf=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=Lf&&t[Lf]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=Ds.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var gd=md.prototype=new wm;gd.constructor=md;Mm(gd,Ds.prototype);gd.isPureReactComponent=!0;var Pf=Array.isArray,Tm=Object.prototype.hasOwnProperty,xd={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fa,type:t,key:s,ref:a,props:r,_owner:xd.current}}function k0(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function z0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Df=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z0(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fa:case A0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tc(a,0):i,Pf(r)?(n="",t!=null&&(n=t.replace(Df,"$&/")+"/"),ko(r,e,n,"",function(u){return u})):r!=null&&(vd(r)&&(r=k0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Df,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Pf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tc(s,o);a+=ko(s,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,o++),a+=ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},zo={transition:null},j0={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:zo,ReactCurrentOwner:xd};function Cm(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Ds;Ke.Fragment=C0;Ke.Profiler=N0;Ke.PureComponent=md;Ke.StrictMode=R0;Ke.Suspense=I0;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;Ke.act=Cm;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=xd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:P0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L0,_context:t},t.Consumer=t};Ke.createElement=Am;Ke.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:D0,render:t}};Ke.isValidElement=vd;Ke.lazy=function(t){return{$$typeof:O0,_payload:{_status:-1,_result:t},_init:B0}};Ke.memo=function(t,e){return{$$typeof:U0,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};Ke.unstable_act=Cm;Ke.useCallback=function(t,e){return tn.current.useCallback(t,e)};Ke.useContext=function(t){return tn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return tn.current.useEffect(t,e)};Ke.useId=function(){return tn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return tn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Ke.useRef=function(t){return tn.current.useRef(t)};Ke.useState=function(t){return tn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return tn.current.useTransition()};Ke.version="18.3.1";ym.exports=Ke;var Me=ym.exports;const H0=b0(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=Me,V0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),X0=Object.prototype.hasOwnProperty,Y0=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)X0.call(e,i)&&!$0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V0,type:t,key:s,ref:a,props:r,_owner:Y0.current}}Rl.Fragment=W0;Rl.jsx=Rm;Rl.jsxs=Rm;_m.exports=Rl;var c=_m.exports,ou={},Nm={exports:{}},_n={},Lm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var b=U.length;U.push(j);e:for(;0<b;){var T=b-1>>>1,V=U[T];if(0<r(V,j))U[T]=j,U[b]=V,b=T;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],b=U.pop();if(b!==j){U[0]=b;e:for(var T=0,V=U.length,$=V>>>1;T<$;){var P=2*(T+1)-1,k=U[P],K=P+1,te=U[K];if(0>r(k,b))K<V&&0>r(te,k)?(U[T]=te,U[K]=b,T=K):(U[T]=k,U[P]=b,T=P);else if(K<V&&0>r(te,b))U[T]=te,U[K]=b,T=K;else break e}}return j}function r(U,j){var b=U.sortIndex-j.sortIndex;return b!==0?b:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,p=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=U)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(U){if(y=!1,x(U),!_)if(n(l)!==null)_=!0,q(L);else{var j=n(u);j!==null&&ee(E,j.startTime-U)}}function L(U,j){_=!1,y&&(y=!1,d(I),I=-1),g=!0;var b=p;try{for(x(j),h=n(l);h!==null&&(!(h.expirationTime>j)||U&&!N());){var T=h.callback;if(typeof T=="function"){h.callback=null,p=h.priorityLevel;var V=T(h.expirationTime<=j);j=t.unstable_now(),typeof V=="function"?h.callback=V:h===n(l)&&i(l),x(j)}else i(l);h=n(l)}if(h!==null)var $=!0;else{var P=n(u);P!==null&&ee(E,P.startTime-j),$=!1}return $}finally{h=null,p=b,g=!1}}var C=!1,A=null,I=-1,J=5,S=-1;function N(){return!(t.unstable_now()-S<J)}function oe(){if(A!==null){var U=t.unstable_now();S=U;var j=!0;try{j=A(!0,U)}finally{j?ne():(C=!1,A=null)}}else C=!1}var ne;if(typeof v=="function")ne=function(){v(oe)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Z=D.port2;D.port1.onmessage=oe,ne=function(){Z.postMessage(null)}}else ne=function(){m(oe,0)};function q(U){A=U,C||(C=!0,ne())}function ee(U,j){I=m(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,q(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var b=p;p=j;try{return U()}finally{p=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var b=p;p=U;try{return j()}finally{p=b}},t.unstable_scheduleCallback=function(U,j,b){var T=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?T+b:T):b=T,U){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=b+V,U={id:f++,callback:j,priorityLevel:U,startTime:b,expirationTime:V,sortIndex:-1},b>T?(U.sortIndex=b,e(u,U),n(l)===null&&U===n(u)&&(y?(d(I),I=-1):y=!0,ee(E,b-T))):(U.sortIndex=V,e(l,U),_||g||(_=!0,q(L))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var j=p;return function(){var b=p;p=j;try{return U.apply(this,arguments)}finally{p=b}}}})(Pm);Lm.exports=Pm;var q0=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=Me,vn=q0;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,ga={};function Rr(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(ga[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},Uf={};function Q0(t){return lu.call(Uf,t)?!0:lu.call(If,t)?!1:Z0.test(t)?Uf[t]=!0:(If[t]=!0,!1)}function J0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ev(t,e,n,i){if(e===null||typeof e>"u"||J0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,yd);Ot[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,yd);Ot[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,yd);Ot[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ev(e,n,r,i)&&(n=null),i||r===null?Q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),Of=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=Of&&t[Of]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,nc;function ta(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function tv(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Qr:return"Portal";case cu:return"Profiler";case Md:return"StrictMode";case uu:return"Suspense";case du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Um:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case Ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wd:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iv(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=iv(t))}function km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&Sd(t,"checked",e,!1)}function pu(t,e){zm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&mu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mu(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(na(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function Bm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sv=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vu(t,e){if(e){if(sv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function _u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function Td(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Su=null,ms=null,gs=null;function jf(t){if(t=Ba(t)){if(typeof Su!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Il(e),Su(t.stateNode,t.type,e))}}function Wm(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Xm(){if(ms){var t=ms,e=gs;if(gs=ms=null,jf(t),e)for(t=0;t<e.length;t++)jf(e[t])}}function Ym(t,e){return t(e)}function $m(){}var sc=!1;function qm(t,e,n){if(sc)return t(e,n);sc=!0;try{return Ym(t,e,n)}finally{sc=!1,(ms!==null||gs!==null)&&($m(),Xm())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Mu=!1;if(pi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Mu=!1}function av(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var aa=!1,Qo=null,Jo=!1,Eu=null,ov={onError:function(t){aa=!0,Qo=t}};function lv(t,e,n,i,r,s,a,o,l){aa=!1,Qo=null,av.apply(ov,arguments)}function cv(t,e,n,i,r,s,a,o,l){if(lv.apply(this,arguments),aa){if(aa){var u=Qo;aa=!1,Qo=null}else throw Error(ce(198));Jo||(Jo=!0,Eu=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hf(t){if(Nr(t)!==t)throw Error(ce(188))}function uv(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hf(r),t;if(s===i)return Hf(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Zm(t){return t=uv(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=vn.unstable_scheduleCallback,Gf=vn.unstable_cancelCallback,dv=vn.unstable_shouldYield,fv=vn.unstable_requestPaint,_t=vn.unstable_now,hv=vn.unstable_getCurrentPriorityLevel,bd=vn.unstable_ImmediatePriority,eg=vn.unstable_UserBlockingPriority,el=vn.unstable_NormalPriority,pv=vn.unstable_LowPriority,tg=vn.unstable_IdlePriority,Nl=null,Kn=null;function mv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:vv,gv=Math.log,xv=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(gv(t)/xv|0)|0}var eo=64,to=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_v(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rg,Cd,sg,ag,og,Tu=!1,no=[],Ii=null,Ui=null,Oi=null,_a=new Map,ya=new Map,Ci=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ev(t,e,n,i,r){switch(e){case"focusin":return Ii=Hs(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=Hs(Ui,t,e,n,i,r),!0;case"mouseover":return Oi=Hs(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,Hs(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Hs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function lg(t){var e=hr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,og(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yu=i,n.target.dispatchEvent(i),yu=null}else return e=Ba(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wf(t,e,n){Bo(t)&&n.delete(e)}function wv(){Tu=!1,Ii!==null&&Bo(Ii)&&(Ii=null),Ui!==null&&Bo(Ui)&&(Ui=null),Oi!==null&&Bo(Oi)&&(Oi=null),_a.forEach(Wf),ya.forEach(Wf)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Tu||(Tu=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,wv)))}function Sa(t){function e(r){return Gs(r,t)}if(0<no.length){Gs(no[0],t);for(var n=1;n<no.length;n++){var i=no[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Gs(Ii,t),Ui!==null&&Gs(Ui,t),Oi!==null&&Gs(Oi,t),_a.forEach(e),ya.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Ci.shift()}var xs=vi.ReactCurrentBatchConfig,nl=!0;function Tv(t,e,n,i){var r=et,s=xs.transition;xs.transition=null;try{et=1,Rd(t,e,n,i)}finally{et=r,xs.transition=s}}function bv(t,e,n,i){var r=et,s=xs.transition;xs.transition=null;try{et=4,Rd(t,e,n,i)}finally{et=r,xs.transition=s}}function Rd(t,e,n,i){if(nl){var r=bu(t,e,n,i);if(r===null)gc(t,e,i,il,n),Vf(t,i);else if(Ev(r,t,e,n,i))i.stopPropagation();else if(Vf(t,i),e&4&&-1<Mv.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&rg(s),s=bu(t,e,n,i),s===null&&gc(t,e,i,il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var il=null;function bu(t,e,n,i){if(il=null,t=Td(i),t=hr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case bd:return 1;case eg:return 4;case el:case pv:return 16;case tg:return 536870912;default:return 16}default:return 16}}var Li=null,Nd=null,jo=null;function ug(){if(jo)return jo;var t,e=Nd,n=e.length,i,r="value"in Li?Li.value:Li.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function Xf(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:Xf,this.isPropagationStopped=Xf,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=yn(Is),za=gt({},Is,{view:0,detail:0}),Av=yn(za),oc,lc,Vs,Ll=gt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(oc=t.screenX-Vs.screenX,lc=t.screenY-Vs.screenY):lc=oc=0,Vs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Yf=yn(Ll),Cv=gt({},Ll,{dataTransfer:0}),Rv=yn(Cv),Nv=gt({},za,{relatedTarget:0}),cc=yn(Nv),Lv=gt({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=yn(Lv),Dv=gt({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iv=yn(Dv),Uv=gt({},Is,{data:0}),$f=yn(Uv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kv[t])?!!e[t]:!1}function Pd(){return zv}var Bv=gt({},za,{key:function(t){if(t.key){var e=Ov[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=yn(Bv),Hv=gt({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=yn(Hv),Gv=gt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),Vv=yn(Gv),Wv=gt({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=yn(Wv),Yv=gt({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=yn(Yv),qv=[9,13,27,32],Dd=pi&&"CompositionEvent"in window,oa=null;pi&&"documentMode"in document&&(oa=document.documentMode);var Kv=pi&&"TextEvent"in window&&!oa,dg=pi&&(!Dd||oa&&8<oa&&11>=oa),Kf=" ",Zf=!1;function fg(t,e){switch(t){case"keyup":return qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Zv(t,e){switch(t){case"compositionend":return hg(e);case"keypress":return e.which!==32?null:(Zf=!0,Kf);case"textInput":return t=e.data,t===Kf&&Zf?null:t;default:return null}}function Qv(t,e){if(es)return t==="compositionend"||!Dd&&fg(t,e)?(t=ug(),jo=Nd=Li=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jv[t.type]:e==="textarea"}function pg(t,e,n,i){Wm(i),e=rl(e,"onChange"),0<e.length&&(n=new Ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,Ma=null;function e_(t){Tg(t,0)}function Pl(t){var e=is(t);if(km(e))return t}function t_(t,e){if(t==="change")return e}var mg=!1;if(pi){var uc;if(pi){var dc="oninput"in document;if(!dc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),dc=typeof Jf.oninput=="function"}uc=dc}else uc=!1;mg=uc&&(!document.documentMode||9<document.documentMode)}function eh(){la&&(la.detachEvent("onpropertychange",gg),Ma=la=null)}function gg(t){if(t.propertyName==="value"&&Pl(Ma)){var e=[];pg(e,Ma,t,Td(t)),qm(e_,e)}}function n_(t,e,n){t==="focusin"?(eh(),la=e,Ma=n,la.attachEvent("onpropertychange",gg)):t==="focusout"&&eh()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(Ma)}function r_(t,e){if(t==="click")return Pl(e)}function s_(t,e){if(t==="input"||t==="change")return Pl(e)}function a_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:a_;function Ea(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nh(t,e){var n=th(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=th(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o_(t){var e=vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&Id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=nh(n,s);var a=nh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=pi&&"documentMode"in document&&11>=document.documentMode,ts=null,Au=null,ca=null,Cu=!1;function ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||ts==null||ts!==Zo(i)||(i=ts,"selectionStart"in i&&Id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ea(ca,i)||(ca=i,i=rl(Au,"onSelect"),0<i.length&&(e=new Ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},fc={},_g={};pi&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Dl(t){if(fc[t])return fc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return fc[t]=e[n];return t}var yg=Dl("animationend"),Sg=Dl("animationiteration"),Mg=Dl("animationstart"),Eg=Dl("transitionend"),wg=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){wg.set(t,e),Rr(e,[t])}for(var hc=0;hc<rh.length;hc++){var pc=rh[hc],c_=pc.toLowerCase(),u_=pc[0].toUpperCase()+pc.slice(1);qi(c_,"on"+u_)}qi(yg,"onAnimationEnd");qi(Sg,"onAnimationIteration");qi(Mg,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Eg,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function sh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cv(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;sh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;sh(r,o,u),s=l}}}if(Jo)throw t=Eu,Jo=!1,Eu=null,t}function st(t,e){var n=e[Du];n===void 0&&(n=e[Du]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[so]){t[so]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(d_.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,mc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(cg(e)){case 1:var r=Tv;break;case 4:r=bv;break;default:r=Rd}n=r.bind(null,e,n,t),r=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}qm(function(){var u=s,f=Td(n),h=[];e:{var p=wg.get(t);if(p!==void 0){var g=Ld,_=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=jv;break;case"focusin":_="focus",g=cc;break;case"focusout":_="blur",g=cc;break;case"beforeblur":case"afterblur":g=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vv;break;case yg:case Sg:case Mg:g=Pv;break;case Eg:g=Xv;break;case"scroll":g=Av;break;case"wheel":g=$v;break;case"copy":case"cut":case"paste":g=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=qf}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var v=u,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,d!==null&&(E=va(v,d),E!=null&&y.push(Ta(v,E,x)))),m)break;v=v.return}0<y.length&&(p=new g(p,_,null,n,f),h.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==yu&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[mi]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?hr(_):null,_!==null&&(m=Nr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Yf,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=qf,E="onPointerLeave",d="onPointerEnter",v="pointer"),m=g==null?p:is(g),x=_==null?p:is(_),p=new y(E,v+"leave",g,n,f),p.target=m,p.relatedTarget=x,E=null,hr(f)===u&&(y=new y(d,v+"enter",_,n,f),y.target=x,y.relatedTarget=m,E=y),m=E,g&&_)t:{for(y=g,d=_,v=0,x=y;x;x=Pr(x))v++;for(x=0,E=d;E;E=Pr(E))x++;for(;0<v-x;)y=Pr(y),v--;for(;0<x-v;)d=Pr(d),x--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=Pr(y),d=Pr(d)}y=null}else y=null;g!==null&&ah(h,p,g,y,!1),_!==null&&m!==null&&ah(h,m,_,y,!0)}}e:{if(p=u?is(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var L=t_;else if(Qf(p))if(mg)L=s_;else{L=i_;var C=n_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=r_);if(L&&(L=L(t,u))){pg(h,L,n,f);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&mu(p,"number",p.value)}switch(C=u?is(u):window,t){case"focusin":(Qf(C)||C.contentEditable==="true")&&(ts=C,Au=u,ca=null);break;case"focusout":ca=Au=ts=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,ih(h,n,f);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":ih(h,n,f)}var A;if(Dd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else es?fg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(dg&&n.locale!=="ko"&&(es||I!=="onCompositionStart"?I==="onCompositionEnd"&&es&&(A=ug()):(Li=f,Nd="value"in Li?Li.value:Li.textContent,es=!0)),C=rl(u,I),0<C.length&&(I=new $f(I,t,null,n,f),h.push({event:I,listeners:C}),A?I.data=A:(A=hg(n),A!==null&&(I.data=A)))),(A=Kv?Zv(t,n):Qv(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(f=new $f("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}Tg(h,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=va(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=va(n,s),l!=null&&a.unshift(Ta(n,l,o))):r||(l=va(n,s),l!=null&&a.push(Ta(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var f_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(h_,"")}function ao(t,e,n){if(e=oh(e),oh(t)!==e&&n)throw Error(ce(425))}function sl(){}var Ru=null,Nu=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(g_)}:Pu;function g_(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),$n="__reactFiber$"+Us,ba="__reactProps$"+Us,mi="__reactContainer$"+Us,Du="__reactEvents$"+Us,x_="__reactListeners$"+Us,v_="__reactHandles$"+Us;function hr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ch(t);t!==null;){if(n=t[$n])return n;t=ch(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[$n]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Il(t){return t[ba]||null}var Iu=[],rs=-1;function Ki(t){return{current:t}}function ot(t){0>rs||(t.current=Iu[rs],Iu[rs]=null,rs--)}function rt(t,e){rs++,Iu[rs]=t.current,t.current=e}var Xi={},Vt=Ki(Xi),on=Ki(!1),Mr=Xi;function Es(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function al(){ot(on),ot(Vt)}function uh(t,e,n){if(Vt.current!==Xi)throw Error(ce(168));rt(Vt,e),rt(on,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,nv(t)||"Unknown",r));return gt({},n,i)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Mr=Vt.current,rt(Vt,t),rt(on,on.current),!0}function dh(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Ag(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,ot(on),ot(Vt),rt(Vt,t)):ot(on),rt(on,n)}var li=null,Ul=!1,vc=!1;function Cg(t){li===null?li=[t]:li.push(t)}function __(t){Ul=!0,Cg(t)}function Zi(){if(!vc&&li!==null){vc=!0;var t=0,e=et;try{var n=li;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Ul=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Jm(bd,Zi),r}finally{et=e,vc=!1}}return null}var ss=[],as=0,ll=null,cl=0,wn=[],Tn=0,Er=null,ui=1,di="";function or(t,e){ss[as++]=cl,ss[as++]=ll,ll=t,cl=e}function Rg(t,e,n){wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Er,Er=t;var i=ui;t=di;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Bn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function Ud(t){t.return!==null&&(or(t,1),Rg(t,1,0))}function Od(t){for(;t===ll;)ll=ss[--as],ss[as]=null,cl=ss[--as],ss[as]=null;for(;t===Er;)Er=wn[--Tn],wn[Tn]=null,di=wn[--Tn],wn[Tn]=null,ui=wn[--Tn],wn[Tn]=null}var xn=null,gn=null,dt=!1,On=null;function Ng(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,gn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,gn=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(dt){var e=gn;if(e){var n=e;if(!fh(t,e)){if(Uu(t))throw Error(ce(418));e=Fi(n.nextSibling);var i=xn;e&&fh(t,e)?Ng(i,n):(t.flags=t.flags&-4097|2,dt=!1,xn=t)}}else{if(Uu(t))throw Error(ce(418));t.flags=t.flags&-4097|2,dt=!1,xn=t}}}function hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function oo(t){if(t!==xn)return!1;if(!dt)return hh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=gn)){if(Uu(t))throw Lg(),Error(ce(418));for(;e;)Ng(t,e),e=Fi(e.nextSibling)}if(hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=xn?Fi(t.stateNode.nextSibling):null;return!0}function Lg(){for(var t=gn;t;)t=Fi(t.nextSibling)}function ws(){gn=xn=null,dt=!1}function Fd(t){On===null?On=[t]:On.push(t)}var y_=vi.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ph(t){var e=t._init;return e(t._payload)}function Pg(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=ji(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,E){return v===null||v.tag!==6?(v=Tc(x,d.mode,E),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,E){var L=x.type;return L===Jr?f(d,v,x.props.children,E,x.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===bi&&ph(L)===v.type)?(E=r(v,x.props),E.ref=Ws(d,v,x),E.return=d,E):(E=qo(x.type,x.key,x.props,null,d.mode,E),E.ref=Ws(d,v,x),E.return=d,E)}function u(d,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=bc(x,d.mode,E),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function f(d,v,x,E,L){return v===null||v.tag!==7?(v=_r(x,d.mode,E,L),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return x=qo(v.type,v.key,v.props,null,d.mode,x),x.ref=Ws(d,null,v),x.return=d,x;case Qr:return v=bc(v,d.mode,x),v.return=d,v;case bi:var E=v._init;return h(d,E(v._payload),x)}if(na(v)||Bs(v))return v=_r(v,d.mode,x,null),v.return=d,v;lo(d,v)}return null}function p(d,v,x,E){var L=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:o(d,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===L?l(d,v,x,E):null;case Qr:return x.key===L?u(d,v,x,E):null;case bi:return L=x._init,p(d,v,L(x._payload),E)}if(na(x)||Bs(x))return L!==null?null:f(d,v,x,E,null);lo(d,x)}return null}function g(d,v,x,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(x)||null,o(v,d,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Za:return d=d.get(E.key===null?x:E.key)||null,l(v,d,E,L);case Qr:return d=d.get(E.key===null?x:E.key)||null,u(v,d,E,L);case bi:var C=E._init;return g(d,v,x,C(E._payload),L)}if(na(E)||Bs(E))return d=d.get(x)||null,f(v,d,E,L,null);lo(v,E)}return null}function _(d,v,x,E){for(var L=null,C=null,A=v,I=v=0,J=null;A!==null&&I<x.length;I++){A.index>I?(J=A,A=null):J=A.sibling;var S=p(d,A,x[I],E);if(S===null){A===null&&(A=J);break}t&&A&&S.alternate===null&&e(d,A),v=s(S,v,I),C===null?L=S:C.sibling=S,C=S,A=J}if(I===x.length)return n(d,A),dt&&or(d,I),L;if(A===null){for(;I<x.length;I++)A=h(d,x[I],E),A!==null&&(v=s(A,v,I),C===null?L=A:C.sibling=A,C=A);return dt&&or(d,I),L}for(A=i(d,A);I<x.length;I++)J=g(A,d,I,x[I],E),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?I:J.key),v=s(J,v,I),C===null?L=J:C.sibling=J,C=J);return t&&A.forEach(function(N){return e(d,N)}),dt&&or(d,I),L}function y(d,v,x,E){var L=Bs(x);if(typeof L!="function")throw Error(ce(150));if(x=L.call(x),x==null)throw Error(ce(151));for(var C=L=null,A=v,I=v=0,J=null,S=x.next();A!==null&&!S.done;I++,S=x.next()){A.index>I?(J=A,A=null):J=A.sibling;var N=p(d,A,S.value,E);if(N===null){A===null&&(A=J);break}t&&A&&N.alternate===null&&e(d,A),v=s(N,v,I),C===null?L=N:C.sibling=N,C=N,A=J}if(S.done)return n(d,A),dt&&or(d,I),L;if(A===null){for(;!S.done;I++,S=x.next())S=h(d,S.value,E),S!==null&&(v=s(S,v,I),C===null?L=S:C.sibling=S,C=S);return dt&&or(d,I),L}for(A=i(d,A);!S.done;I++,S=x.next())S=g(A,d,I,S.value,E),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?I:S.key),v=s(S,v,I),C===null?L=S:C.sibling=S,C=S);return t&&A.forEach(function(oe){return e(d,oe)}),dt&&or(d,I),L}function m(d,v,x,E){if(typeof x=="object"&&x!==null&&x.type===Jr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var L=x.key,C=v;C!==null;){if(C.key===L){if(L=x.type,L===Jr){if(C.tag===7){n(d,C.sibling),v=r(C,x.props.children),v.return=d,d=v;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===bi&&ph(L)===C.type){n(d,C.sibling),v=r(C,x.props),v.ref=Ws(d,C,x),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}x.type===Jr?(v=_r(x.props.children,d.mode,E,x.key),v.return=d,d=v):(E=qo(x.type,x.key,x.props,null,d.mode,E),E.ref=Ws(d,v,x),E.return=d,d=E)}return a(d);case Qr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=bc(x,d.mode,E),v.return=d,d=v}return a(d);case bi:return C=x._init,m(d,v,C(x._payload),E)}if(na(x))return _(d,v,x,E);if(Bs(x))return y(d,v,x,E);lo(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=Tc(x,d.mode,E),v.return=d,d=v),a(d)):n(d,v)}return m}var Ts=Pg(!0),Dg=Pg(!1),ul=Ki(null),dl=null,os=null,kd=null;function zd(){kd=os=dl=null}function Bd(t){var e=ul.current;ot(ul),t._currentValue=e}function Fu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){dl=t,kd=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(dl===null)throw Error(ce(308));os=t,dl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var pr=null;function jd(t){pr===null?pr=[t]:pr.push(t)}function Ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}function mh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(p=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(g,h,p);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(g,h,p):_,p==null)break e;h=gt({},h,p);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=h}}function gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ja={},Zn=Ki(ja),Aa=Ki(ja),Ca=Ki(ja);function mr(t){if(t===ja)throw Error(ce(174));return t}function Gd(t,e){switch(rt(Ca,e),rt(Aa,t),rt(Zn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}ot(Zn),rt(Zn,e)}function bs(){ot(Zn),ot(Aa),ot(Ca)}function Og(t){mr(Ca.current);var e=mr(Zn.current),n=xu(e,t.type);e!==n&&(rt(Aa,t),rt(Zn,n))}function Vd(t){Aa.current===t&&(ot(Zn),ot(Aa))}var pt=Ki(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Wd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var Vo=vi.ReactCurrentDispatcher,yc=vi.ReactCurrentBatchConfig,wr=0,mt=null,Mt=null,Ct=null,pl=!1,ua=!1,Ra=0,S_=0;function zt(){throw Error(ce(321))}function Xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Yd(t,e,n,i,r,s){if(wr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?T_:b_,t=n(i,r),ua){s=0;do{if(ua=!1,Ra=0,25<=s)throw Error(ce(301));s+=1,Ct=Mt=null,e.updateQueue=null,Vo.current=A_,t=n(i,r)}while(ua)}if(Vo.current=ml,e=Mt!==null&&Mt.next!==null,wr=0,Ct=Mt=mt=null,pl=!1,e)throw Error(ce(300));return t}function $d(){var t=Ra!==0;return Ra=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?mt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Rn(){if(Mt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Ct===null?mt.memoizedState:Ct.next;if(e!==null)Ct=e,Mt=t;else{if(t===null)throw Error(ce(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Ct===null?mt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Na(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((wr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,mt.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function kg(t,e){var n=mt,i=Rn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,qd(jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,La(9,Bg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ce(349));wr&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Gg(t)}function jg(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Gg(t){var e=gi(t,1);e!==null&&jn(e,t,1,-1)}function xh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=w_.bind(null,mt,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return Rn().memoizedState}function Wo(t,e,n,i){var r=Wn();mt.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Ol(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Xd(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}mt.flags|=t,r.memoizedState=La(1|e,n,s,i)}function vh(t,e){return Wo(8390656,8,t,e)}function qd(t,e){return Ol(2048,8,t,e)}function Wg(t,e){return Ol(4,2,t,e)}function Xg(t,e){return Ol(4,4,t,e)}function Yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,Yg.bind(null,e,t),n)}function Kd(){}function qg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zg(t,e,n){return wr&21?(Hn(n,e)||(n=ng(),mt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function M_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{et=n,yc.transition=i}}function Qg(){return Rn().memoizedState}function E_(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(t))ex(e,n);else if(n=Ig(t,e,n,i),n!==null){var r=Qt();jn(n,t,i,r),tx(n,e,i)}}function w_(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(t))ex(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ig(t,e,r,i),n!==null&&(r=Qt(),jn(n,t,i,r),tx(n,e,i))}}function Jg(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function ex(t,e){ua=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}var ml={readContext:Cn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},T_={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:vh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,Yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E_.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:xh,useDebugValue:Kd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=xh(!1),e=t[0];return t=M_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Wn();if(dt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Rt===null)throw Error(ce(349));wr&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vh(jg.bind(null,i,s,t),[t]),i.flags|=2048,La(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Rt.identifierPrefix;if(dt){var n=di,i=ui;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b_={readContext:Cn,useCallback:qg,useContext:Cn,useEffect:qd,useImperativeHandle:$g,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:Kg,useReducer:Sc,useRef:Vg,useState:function(){return Sc(Na)},useDebugValue:Kd,useDeferredValue:function(t){var e=Rn();return Zg(e,Mt.memoizedState,t)},useTransition:function(){var t=Sc(Na)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:kg,useId:Qg,unstable_isNewReconciler:!1},A_={readContext:Cn,useCallback:qg,useContext:Cn,useEffect:qd,useImperativeHandle:$g,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:Kg,useReducer:Mc,useRef:Vg,useState:function(){return Mc(Na)},useDebugValue:Kd,useDeferredValue:function(t){var e=Rn();return Mt===null?e.memoizedState=t:Zg(e,Mt.memoizedState,t)},useTransition:function(){var t=Mc(Na)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:kg,useId:Qg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Bi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(jn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Bi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(jn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Bi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(jn(e,t,i,n),Go(e,t,i))}};function _h(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function nx(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=ln(e)?Mr:Vt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=ln(e)?Mr:Vt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fl.enqueueReplaceState(r,r.state,null),fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=tv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function ix(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,Ku=i),Bu(t,e)},n}function rx(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H_.bind(null,t,e,n),e.then(t,t))}function Mh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var R_=vi.ReactCurrentOwner,an=!1;function $t(t,e,n,i){e.child=t===null?Dg(e,null,n,i):Ts(e,t.child,n,i)}function wh(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=Yd(t,e,n,i,s,r),n=$d(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(dt&&n&&Ud(e),e.flags|=1,$t(t,e,i,r),e.child)}function Th(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sx(t,e,s,i,r)):(t=qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function sx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,xi(t,e,r)}return ju(t,e,n,i,r)}function ax(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(cs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(cs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(cs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(cs,pn),pn|=i;return $t(t,e,r,n),e.child}function ox(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ju(t,e,n,i,r){var s=ln(n)?Mr:Vt.current;return s=Es(e,s),vs(e,r),n=Yd(t,e,n,i,s,r),i=$d(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(dt&&i&&Ud(e),e.flags|=1,$t(t,e,n,r),e.child)}function bh(t,e,n,i,r){if(ln(n)){var s=!0;ol(e)}else s=!1;if(vs(e,r),e.stateNode===null)Xo(t,e),nx(e,n,i),zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=ln(n)?Mr:Vt.current,u=Es(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&yh(e,a,i,u),Ai=!1;var p=e.memoizedState;a.state=p,fl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||on.current||Ai?(typeof f=="function"&&(ku(e,n,f,i),l=e.memoizedState),(o=Ai||_h(e,n,o,i,p,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ug(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:In(e.type,o),a.props=u,h=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=ln(n)?Mr:Vt.current,l=Es(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==l)&&yh(e,a,i,l),Ai=!1,p=e.memoizedState,a.state=p,fl(e,i,a,r);var _=e.memoizedState;o!==h||p!==_||on.current||Ai?(typeof g=="function"&&(ku(e,n,g,i),_=e.memoizedState),(u=Ai||_h(e,n,u,i,p,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Hu(t,e,n,i,s,r)}function Hu(t,e,n,i,r,s){ox(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&dh(e,n,!1),xi(t,e,s);i=e.stateNode,R_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&dh(e,n,!0),e.child}function lx(t){var e=t.stateNode;e.pendingContext?uh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uh(t,e.context,!1),Gd(t,e.containerInfo)}function Ah(t,e,n,i,r){return ws(),Fd(r),e.flags|=256,$t(t,e,n,i),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cx(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Bl(a,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vu(n),e.memoizedState=Gu,t):Zd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return N_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=_r(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Gu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,i){return i!==null&&Fd(i),Ts(e,t.child,null,n),t=Zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ce(422))),co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=Vu(a),e.memoizedState=Gu,s);if(!(e.mode&1))return co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Ec(s,i,void 0),co(t,e,a,i)}if(o=(a&t.childLanes)!==0,an||o){if(i=Rt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),jn(i,t,r,-1))}return rf(),i=Ec(Error(ce(421))),co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=G_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Fi(r.nextSibling),xn=e,dt=!0,On=null,t!==null&&(wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Er,ui=t.id,di=t.overflow,Er=e),e=Zd(e,i.children),e.flags|=4096,e)}function Ch(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fu(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ux(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ch(t,n,e);else if(t.tag===19)Ch(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function L_(t,e,n){switch(e.tag){case 3:lx(e),ws();break;case 5:Og(e);break;case 1:ln(e.type)&&ol(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?cx(t,e,n):(rt(pt,pt.current&1),t=xi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ux(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return xi(t,e,n)}var dx,Wu,fx,hx;dx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wu=function(){};fx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Zn.current);var s=null;switch(n){case"input":r=hu(t,r),i=hu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=gu(t,r),i=gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}vu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function P_(t,e,n){var i=e.pendingProps;switch(Od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return ln(e.type)&&al(),Bt(e),null;case 3:return i=e.stateNode,bs(),ot(on),ot(Vt),Wd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Ju(On),On=null))),Wu(t,e),Bt(e),null;case 5:Vd(e);var r=mr(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)fx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Bt(e),null}if(t=mr(Zn.current),oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Ff(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":zf(i,s),st("invalid",i)}vu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":Qa(i),kf(i,s,!0);break;case"textarea":Qa(i),Bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[ba]=i,dx(t,e,!1,!1),e.stateNode=t;e:{switch(a=_u(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Ff(t,i),r=hu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),st("invalid",t);break;case"textarea":zf(t,i),r=gu(t,i),st("invalid",t);break;default:r=i}vu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Sd(t,s,l,a))}switch(n){case"input":Qa(t),kf(t,i,!1);break;case"textarea":Qa(t),Bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)hx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=mr(Ca.current),mr(Zn.current),oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Bt(e),null;case 13:if(ot(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&gn!==null&&e.mode&1&&!(e.flags&128))Lg(),ws(),e.flags|=98560,s=!1;else if(s=oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[$n]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else On!==null&&(Ju(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Et===0&&(Et=3):rf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return bs(),Wu(t,e),t===null&&wa(e.stateNode.containerInfo),Bt(e),null;case 10:return Bd(e.type._context),Bt(e),null;case 17:return ln(e.type)&&al(),Bt(e),null;case 19:if(ot(pt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=hl(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Cs&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=hl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Bt(e),null}else 2*_t()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function D_(t,e){switch(Od(e),e.tag){case 1:return ln(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ot(on),ot(Vt),Wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vd(e),null;case 13:if(ot(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(pt),null;case 4:return bs(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var uo=!1,Gt=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Te=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Xu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Rh=!1;function U_(t,e){if(Ru=nl,t=vg(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},nl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){xt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=Rh,Rh=!1,_}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xu(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function px(t){var e=t.alternate;e!==null&&(t.alternate=null,px(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[ba],delete e[Du],delete e[x_],delete e[v_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mx(t){return t.tag===5||t.tag===3||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var Pt=null,Un=!1;function _i(t,e,n){for(n=n.child;n!==null;)gx(t,e,n),n=n.sibling}function gx(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Gt||ls(n,e);case 6:var i=Pt,r=Un;Pt=null,_i(t,e,n),Pt=i,Un=r,Pt!==null&&(Un?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Un?(t=Pt,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),Sa(t)):xc(Pt,n.stateNode));break;case 4:i=Pt,r=Un,Pt=n.stateNode.containerInfo,Un=!0,_i(t,e,n),Pt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Xu(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Gt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,_i(t,e,n),Gt=i):_i(t,e,n);break;default:_i(t,e,n)}}function Lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I_),e.forEach(function(i){var r=V_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Un=!1;break e;case 3:Pt=o.stateNode.containerInfo,Un=!0;break e;case 4:Pt=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(Pt===null)throw Error(ce(160));gx(s,a,r),Pt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xx(e,t),e=e.sibling}function xx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Vn(t),i&4){try{da(3,t,t.return),kl(3,t)}catch(y){xt(t,t.return,y)}try{da(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Nn(e,t),Vn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Nn(e,t),Vn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),_u(o,a);var u=_u(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Vm(r,h):f==="dangerouslySetInnerHTML"?Hm(r,h):f==="children"?xa(r,h):Sd(r,f,h,u)}switch(o){case"input":pu(r,s);break;case"textarea":Bm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ps(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Nn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Nn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Nn(e,t),Vn(t);break;case 13:Nn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ef=_t())),i&4&&Lh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Nn(e,t),Gt=u):Nn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(h=Te=f;Te!==null;){switch(p=Te,g=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:ls(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:ls(p,p.return);break;case 22:if(p.memoizedState!==null){Dh(h);continue}}g!==null?(g.return=p,Te=g):Dh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Gm("display",a))}catch(y){xt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){xt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Vn(t),i&4&&Lh(t);break;case 21:break;default:Nn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mx(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=Nh(t);qu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Nh(t);$u(t,o,a);break;default:throw Error(ce(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O_(t,e,n){Te=t,vx(t)}function vx(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=uo;var u=Gt;if(uo=a,(Gt=l)&&!u)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Ih(r):l!==null?(l.return=a,Te=l):Ih(r);for(;s!==null;)Te=s,vx(s),s=s.sibling;Te=r,uo=o,Gt=u}Ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ph(t)}}function Ph(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Gt||e.flags&512&&Yu(e)}catch(p){xt(e,e.return,p)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Dh(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Ih(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Yu(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Yu(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var F_=Math.ceil,gl=vi.ReactCurrentDispatcher,Qd=vi.ReactCurrentOwner,An=vi.ReactCurrentBatchConfig,Je=0,Rt=null,St=null,Ut=0,pn=0,cs=Ki(0),Et=0,Pa=null,Tr=0,zl=0,Jd=0,fa=null,sn=null,ef=0,Cs=1/0,oi=null,xl=!1,Ku=null,zi=null,fo=!1,Pi=null,vl=0,ha=0,Zu=null,Yo=-1,$o=0;function Qt(){return Je&6?_t():Yo!==-1?Yo:Yo=_t()}function Bi(t){return t.mode&1?Je&2&&Ut!==0?Ut&-Ut:y_.transition!==null?($o===0&&($o=ng()),$o):(t=et,t!==0||(t=window.event,t=t===void 0?16:cg(t.type)),t):1}function jn(t,e,n,i){if(50<ha)throw ha=0,Zu=null,Error(ce(185));ka(t,n,i),(!(Je&2)||t!==Rt)&&(t===Rt&&(!(Je&2)&&(zl|=n),Et===4&&Ri(t,Ut)),cn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Cs=_t()+500,Ul&&Zi()))}function cn(t,e){var n=t.callbackNode;yv(t,e);var i=tl(t,t===Rt?Ut:0);if(i===0)n!==null&&Gf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gf(n),e===1)t.tag===0?__(Uh.bind(null,t)):Cg(Uh.bind(null,t)),m_(function(){!(Je&6)&&Zi()}),n=null;else{switch(ig(i)){case 1:n=bd;break;case 4:n=eg;break;case 16:n=el;break;case 536870912:n=tg;break;default:n=el}n=bx(n,_x.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _x(t,e){if(Yo=-1,$o=0,Je&6)throw Error(ce(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=tl(t,t===Rt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_l(t,i);else{e=i;var r=Je;Je|=2;var s=Sx();(Rt!==t||Ut!==e)&&(oi=null,Cs=_t()+500,vr(t,e));do try{B_();break}catch(o){yx(t,o)}while(!0);zd(),gl.current=s,Je=r,St!==null?e=0:(Rt=null,Ut=0,e=Et)}if(e!==0){if(e===2&&(r=wu(t),r!==0&&(i=r,e=Qu(t,r))),e===1)throw n=Pa,vr(t,0),Ri(t,i),cn(t,_t()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!k_(r)&&(e=_l(t,i),e===2&&(s=wu(t),s!==0&&(i=s,e=Qu(t,s))),e===1))throw n=Pa,vr(t,0),Ri(t,i),cn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:lr(t,sn,oi);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=ef+500-_t(),10<e)){if(tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pu(lr.bind(null,t,sn,oi),e);break}lr(t,sn,oi);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F_(i/1960))-i,10<i){t.timeoutHandle=Pu(lr.bind(null,t,sn,oi),i);break}lr(t,sn,oi);break;case 5:lr(t,sn,oi);break;default:throw Error(ce(329))}}}return cn(t,_t()),t.callbackNode===n?_x.bind(null,t):null}function Qu(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=sn,sn=n,e!==null&&Ju(e)),t}function Ju(t){sn===null?sn=t:sn.push.apply(sn,t)}function k_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Jd,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Uh(t){if(Je&6)throw Error(ce(327));_s();var e=tl(t,0);if(!(e&1))return cn(t,_t()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var i=wu(t);i!==0&&(e=i,n=Qu(t,i))}if(n===1)throw n=Pa,vr(t,0),Ri(t,e),cn(t,_t()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,sn,oi),cn(t,_t()),null}function tf(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Cs=_t()+500,Ul&&Zi())}}function br(t){Pi!==null&&Pi.tag===0&&!(Je&6)&&_s();var e=Je;Je|=1;var n=An.transition,i=et;try{if(An.transition=null,et=1,t)return t()}finally{et=i,An.transition=n,Je=e,!(Je&6)&&Zi()}}function nf(){pn=cs.current,ot(cs)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p_(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&al();break;case 3:bs(),ot(on),ot(Vt),Wd();break;case 5:Vd(i);break;case 4:bs();break;case 13:ot(pt);break;case 19:ot(pt);break;case 10:Bd(i.type._context);break;case 22:case 23:nf()}n=n.return}if(Rt=t,St=t=ji(t.current,null),Ut=pn=e,Et=0,Pa=null,Jd=zl=Tr=0,sn=fa=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function yx(t,e){do{var n=St;try{if(zd(),Vo.current=ml,pl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(wr=0,Ct=Mt=mt=null,ua=!1,Ra=0,Qd.current=null,n===null||n.return===null){Et=1,Pa=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ut,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Mh(a);if(g!==null){g.flags&=-257,Eh(g,a,o,s,e),g.mode&1&&Sh(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Sh(s,u,e),rf();break e}l=Error(ce(426))}}else if(dt&&o.mode&1){var m=Mh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Eh(m,a,o,s,e),Fd(As(l,o));break e}}s=l=As(l,o),Et!==4&&(Et=2),fa===null?fa=[s]:fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ix(s,l,e);mh(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zi===null||!zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=rx(s,o,e);mh(s,E);break e}}s=s.return}while(s!==null)}Ex(n)}catch(L){e=L,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Sx(){var t=gl.current;return gl.current=ml,t===null?ml:t}function rf(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||!(Tr&268435455)&&!(zl&268435455)||Ri(Rt,Ut)}function _l(t,e){var n=Je;Je|=2;var i=Sx();(Rt!==t||Ut!==e)&&(oi=null,vr(t,e));do try{z_();break}catch(r){yx(t,r)}while(!0);if(zd(),Je=n,gl.current=i,St!==null)throw Error(ce(261));return Rt=null,Ut=0,Et}function z_(){for(;St!==null;)Mx(St)}function B_(){for(;St!==null&&!dv();)Mx(St)}function Mx(t){var e=Tx(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Ex(t):St=e,Qd.current=null}function Ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=P_(n,e,pn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function lr(t,e,n){var i=et,r=An.transition;try{An.transition=null,et=1,j_(t,e,n,i)}finally{An.transition=r,et=i}return null}function j_(t,e,n,i){do _s();while(Pi!==null);if(Je&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sv(t,s),t===Rt&&(St=Rt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,bx(el,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=et;et=1;var o=Je;Je|=4,Qd.current=null,U_(t,n),xx(n,t),o_(Nu),nl=!!Ru,Nu=Ru=null,t.current=n,O_(n),fv(),Je=o,et=a,An.transition=s}else t.current=n;if(fo&&(fo=!1,Pi=t,vl=r),s=t.pendingLanes,s===0&&(zi=null),mv(n.stateNode),cn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xl)throw xl=!1,t=Ku,Ku=null,t;return vl&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Zu?ha++:(ha=0,Zu=t):ha=0,Zi(),null}function _s(){if(Pi!==null){var t=ig(vl),e=An.transition,n=et;try{if(An.transition=null,et=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,vl=0,Je&6)throw Error(ce(331));var r=Je;for(Je|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:da(8,f,s)}var h=f.child;if(h!==null)h.return=f,Te=h;else for(;Te!==null;){f=Te;var p=f.sibling,g=f.return;if(px(f),f===u){Te=null;break}if(p!==null){p.return=g,Te=p;break}Te=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){a=Te;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Te=x;else e:for(a=v;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kl(9,o)}}catch(L){xt(o,o.return,L)}if(o===a){Te=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Te=E;break e}Te=o.return}}if(Je=r,Zi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Nl,t)}catch{}i=!0}return i}finally{et=n,An.transition=e}}return!1}function Oh(t,e,n){e=As(n,e),e=ix(t,e,1),t=ki(t,e,1),e=Qt(),t!==null&&(ka(t,1,e),cn(t,e))}function xt(t,e,n){if(t.tag===3)Oh(t,t,n);else for(;e!==null;){if(e.tag===3){Oh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=As(n,t),t=rx(e,t,1),e=ki(e,t,1),t=Qt(),e!==null&&(ka(e,1,t),cn(e,t));break}}e=e.return}}function H_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Ut&n)===n&&(Et===4||Et===3&&(Ut&130023424)===Ut&&500>_t()-ef?vr(t,0):Jd|=n),cn(t,e)}function wx(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Qt();t=gi(t,e),t!==null&&(ka(t,e,n),cn(t,n))}function G_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wx(t,n)}function V_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),wx(t,n)}var Tx;Tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,L_(t,e,n);an=!!(t.flags&131072)}else an=!1,dt&&e.flags&1048576&&Rg(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=Es(e,Vt.current);vs(e,n),r=Yd(null,e,i,t,r,n);var s=$d();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hd(e),r.updater=Fl,e.stateNode=r,r._reactInternals=e,zu(e,i,t,n),e=Hu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Ud(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X_(i),t=In(i,t),r){case 0:e=ju(null,e,i,t,n);break e;case 1:e=bh(null,e,i,t,n);break e;case 11:e=wh(null,e,i,t,n);break e;case 14:e=Th(null,e,i,In(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),bh(t,e,i,r,n);case 3:e:{if(lx(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(t,e),fl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ce(423)),e),e=Ah(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ce(424)),e),e=Ah(t,e,i,n,r);break e}else for(gn=Fi(e.stateNode.containerInfo.firstChild),xn=e,dt=!0,On=null,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&Ou(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Lu(i,r)?a=null:s!==null&&Lu(i,s)&&(e.flags|=32),ox(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return cx(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),wh(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(ul,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!on.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Th(t,e,i,r,n);case 15:return sx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Xo(t,e),e.tag=1,ln(i)?(t=!0,ol(e)):t=!1,vs(e,n),nx(e,i,r),zu(e,i,r,n),Hu(null,e,i,!0,t,n);case 19:return ux(t,e,n);case 22:return ax(t,e,n)}throw Error(ce(156,e.tag))};function bx(t,e){return Jm(t,e)}function W_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new W_(t,e,n,i)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ed)return 11;if(t===wd)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")sf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Jr:return _r(n.children,r,s,e);case Md:a=8,r|=8;break;case cu:return t=bn(12,n,e,r|2),t.elementType=cu,t.lanes=s,t;case uu:return t=bn(13,n,e,r),t.elementType=uu,t.lanes=s,t;case du:return t=bn(19,n,e,r),t.elementType=du,t.lanes=s,t;case Om:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:a=10;break e;case Um:a=9;break e;case Ed:a=11;break e;case wd:a=14;break e;case bi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function af(t,e,n,i,r,s,a,o,l){return t=new Y_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(s),t}function $_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ax(t){if(!t)return Xi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(ln(n))return Ag(t,n,e)}return e}function Cx(t,e,n,i,r,s,a,o,l){return t=af(n,i,!0,t,r,s,a,o,l),t.context=Ax(null),n=t.current,i=Qt(),r=Bi(n),s=hi(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,ka(t,r,i),cn(t,i),t}function jl(t,e,n,i){var r=e.current,s=Qt(),a=Bi(r);return n=Ax(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(jn(t,r,a,s),Go(t,r,a)),a}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){Fh(t,e),(t=t.alternate)&&Fh(t,e)}function q_(){return null}var Rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}Hl.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));jl(t,e,null,null)};Hl.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){jl(null,t,null,null)}),e[mi]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&lg(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kh(){}function K_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yl(a);s.call(u)}}var a=Cx(e,i,t,0,null,!1,!1,"",kh);return t._reactRootContainer=a,t[mi]=a.current,wa(t.nodeType===8?t.parentNode:t),br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=yl(l);o.call(u)}}var l=af(t,0,!1,null,null,!1,!1,"",kh);return t._reactRootContainer=l,t[mi]=l.current,wa(t.nodeType===8?t.parentNode:t),br(function(){jl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=yl(a);o.call(l)}}jl(e,a,t,r)}else a=K_(n,e,t,r,i);return yl(a)}rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Ad(e,n|1),cn(e,_t()),!(Je&6)&&(Cs=_t()+500,Zi()))}break;case 13:br(function(){var i=gi(t,1);if(i!==null){var r=Qt();jn(i,t,1,r)}}),of(t,1)}};Cd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Qt();jn(e,t,134217728,n)}of(t,134217728)}};sg=function(t){if(t.tag===13){var e=Bi(t),n=gi(t,e);if(n!==null){var i=Qt();jn(n,t,e,i)}of(t,e)}};ag=function(){return et};og=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Su=function(t,e,n){switch(e){case"input":if(pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(ce(90));km(i),pu(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Ym=tf;$m=br;var Z_={usingClientEntryPoint:!1,Events:[Ba,is,Il,Wm,Xm,tf]},Ys={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q_={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Nl=ho.inject(Q_),Kn=ho}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(ce(200));return $_(t,e,null,n)};_n.createRoot=function(t,e){if(!cf(t))throw Error(ce(299));var n=!1,i="",r=Rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,wa(t.nodeType===8?t.parentNode:t),new lf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return br(t)};_n.hydrate=function(t,e,n){if(!Gl(e))throw Error(ce(200));return Vl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Cx(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hl(e)};_n.render=function(t,e,n){if(!Gl(e))throw Error(ce(200));return Vl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(ce(40));return t._reactRootContainer?(br(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};_n.unstable_batchedUpdates=tf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Vl(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function Nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx)}catch(t){console.error(t)}}Nx(),Nm.exports=_n;var J_=Nm.exports,zh=J_;ou.createRoot=zh.createRoot,ou.hydrateRoot=zh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="162",ey=0,Bh=1,ty=2,Lx=1,ny=2,ai=3,Yi=0,Jt=1,Fn=2,Hi=0,ys=1,jh=2,Hh=3,Gh=4,iy=5,dr=100,ry=101,sy=102,Vh=103,Wh=104,ay=200,oy=201,ly=202,cy=203,ed=204,td=205,uy=206,dy=207,fy=208,hy=209,py=210,my=211,gy=212,xy=213,vy=214,_y=0,yy=1,Sy=2,Sl=3,My=4,Ey=5,wy=6,Ty=7,df=0,by=1,Ay=2,Gi=0,Cy=1,Ry=2,Ny=3,Px=4,Ly=5,Py=6,Dy=7,Dx=300,Rs=301,Ns=302,nd=303,id=304,Wl=306,rd=1e3,kn=1001,sd=1002,qt=1003,Xh=1004,$s=1005,rn=1006,Ac=1007,gr=1008,Vi=1009,Iy=1010,Uy=1011,ff=1012,Ix=1013,Di=1014,ci=1015,Da=1016,Ux=1017,Ox=1018,yr=1020,Oy=1021,zn=1023,Fy=1024,ky=1025,Sr=1026,Ls=1027,zy=1028,Fx=1029,By=1030,kx=1031,zx=1033,Cc=33776,Rc=33777,Nc=33778,Lc=33779,Yh=35840,$h=35841,qh=35842,Kh=35843,Bx=36196,Zh=37492,Qh=37496,Jh=37808,ep=37809,tp=37810,np=37811,ip=37812,rp=37813,sp=37814,ap=37815,op=37816,lp=37817,cp=37818,up=37819,dp=37820,fp=37821,Pc=36492,hp=36494,pp=36495,jy=36283,mp=36284,gp=36285,xp=36286,Hy=3200,Gy=3201,jx=0,Vy=1,Ni="",Xn="srgb",Qi="srgb-linear",hf="display-p3",Xl="display-p3-linear",Ml="linear",at="srgb",El="rec709",wl="p3",Dr=7680,vp=519,Wy=512,Xy=513,Yy=514,Hx=515,$y=516,qy=517,Ky=518,Zy=519,_p=35044,yp="300 es",ad=1035,fi=2e3,Tl=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const pa=Math.PI/180,Ia=180/Math.PI;function Fs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Dt(t,e,n){return Math.max(e,Math.min(n,t))}function pf(t,e){return(t%e+e)%e}function Qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Jy(t,e,n){return t!==e?(n-t)/(e-t):0}function ma(t,e,n){return(1-n)*t+n*e}function e1(t,e,n,i){return ma(t,e,1-Math.exp(-n*i))}function t1(t,e=1){return e-Math.abs(pf(t,e*2)-e)}function n1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function i1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function r1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function s1(t,e){return t+Math.random()*(e-t)}function a1(t){return t*(.5-Math.random())}function o1(t){t!==void 0&&(Sp=t);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l1(t){return t*pa}function c1(t){return t*Ia}function od(t){return(t&t-1)===0&&t!==0}function u1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function d1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*p,o*u);break;case"YZY":t.set(l*p,o*f,l*h,o*u);break;case"ZXZ":t.set(l*h,l*p,o*f,o*u);break;case"XZX":t.set(o*f,l*_,l*g,o*u);break;case"YXY":t.set(l*g,o*f,l*_,o*u);break;case"ZYZ":t.set(l*_,l*g,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ir={DEG2RAD:pa,RAD2DEG:Ia,generateUUID:Fs,clamp:Dt,euclideanModulo:pf,mapLinear:Qy,inverseLerp:Jy,lerp:ma,damp:e1,pingpong:t1,smoothstep:n1,smootherstep:i1,randInt:r1,randFloat:s1,randFloatSpread:a1,seededRandom:o1,degToRad:l1,radToDeg:c1,isPowerOfTwo:od,ceilPowerOfTwo:u1,floorPowerOfTwo:bl,setQuaternionFromProperEuler:d1,normalize:Xt,denormalize:Kr};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,a,o,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],p=i[2],g=i[5],_=i[8],y=r[0],m=r[3],d=r[6],v=r[1],x=r[4],E=r[7],L=r[2],C=r[5],A=r[8];return s[0]=a*y+o*v+l*L,s[3]=a*m+o*x+l*C,s[6]=a*d+o*E+l*A,s[1]=u*y+f*v+h*L,s[4]=u*m+f*x+h*C,s[7]=u*d+f*E+h*A,s[2]=p*y+g*v+_*L,s[5]=p*m+g*x+_*C,s[8]=p*d+g*E+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,p=o*l-f*s,g=u*s-a*l,_=n*h+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Xe;function Gx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){const t=Al("canvas");return t.style.display="block",t}const Mp={};function h1(t){t in Mp||(Mp[t]=!0,console.warn(t))}const Ep=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[Qi]:{transfer:Ml,primaries:El,toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:at,primaries:El,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xl]:{transfer:Ml,primaries:wl,toReference:t=>t.applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep)},[hf]:{transfer:at,primaries:wl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep).convertLinearToSRGB()}},p1=new Set([Qi,Xl]),tt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!p1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=po[e].toReference,r=po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return po[t].primaries},getTransfer:function(t){return t===Ni?Ml:po[t].transfer}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class Vx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Al("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ss(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m1=0;class Wx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;class en extends Os{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=kn,r=kn,s=rn,a=gr,o=zn,l=Vi,u=en.DEFAULT_ANISOTROPY,f=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Fs(),this.name="",this.source=new Wx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Dx;en.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],g=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,E=(g+1)/2,L=(d+1)/2,C=(f+p)/4,A=(h+y)/4,I=(_+m)/4;return x>E&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=I/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=I/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(p-f)*(p-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-y)/v,this.z=(p-f)/v,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x1 extends Os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends x1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xx extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v1 extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==p||u!==g||f!==_){let m=1-o;const d=l*p+u*g+f*_+h*y,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,d*v);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const E=o*v;if(l=l*m+p*E,u=u*m+g*E,f=f*m+_*E,h=h*m+y*E,m===1-o){const L=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=L,u*=L,f*=L,h*=L}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*g-u*p,e[n+1]=l*_+f*p+u*h-o*g,e[n+2]=u*_+f*g+o*p-l*h,e[n+3]=f*_-o*h-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*f*h+u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h-p*g*_;break;case"YXZ":this._x=p*f*h+u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h+p*g*_;break;case"ZXY":this._x=p*f*h-u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h-p*g*_;break;case"ZYX":this._x=p*f*h-u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h+p*g*_;break;case"YZX":this._x=p*f*h+u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h-p*g*_;break;case"XZY":this._x=p*f*h-u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],p=i+o+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*f,this.y=i+l*f+o*u-s*h,this.z=r+l*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new z,Tp=new Ha;class Ga{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),go.subVectors(this.max,qs),Or.subVectors(e.a,qs),Fr.subVectors(e.b,qs),kr.subVectors(e.c,qs),yi.subVectors(Fr,Or),Si.subVectors(kr,Fr),tr.subVectors(Or,kr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-tr.z,tr.y,yi.z,0,-yi.x,Si.z,0,-Si.x,tr.z,0,-tr.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-tr.y,tr.x,0];return!Fc(n,Or,Fr,kr,go)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,Or,Fr,kr,go))?!1:(xo.crossVectors(yi,Si),n=[xo.x,xo.y,xo.z],Fc(n,Or,Fr,kr,go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,mo=new Ga,Or=new z,Fr=new z,kr=new z,yi=new z,Si=new z,tr=new z,qs=new z,go=new z,xo=new z,nr=new z;function Fc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const _1=new Ga,Ks=new z,kc=new z;class Va{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(kc)),this.expandByPoint(Ks.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new z,zc=new z,vo=new z,Mi=new z,Bc=new z,_o=new z,jc=new z;class mf{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zc.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(zc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vo),o=Mi.dot(this.direction),l=-Mi.dot(vo),u=Mi.lengthSq(),f=Math.abs(1-a*a);let h,p,g,_;if(f>0)if(h=a*l-o,p=a*o-l,_=s*f,h>=0)if(p>=-_)if(p<=_){const y=1/f;h*=y,p*=y,g=h*(h+a*p+2*o)+p*(a*h+p+2*l)+u}else p=s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p=-s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p<=-_?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u):p<=_?(h=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zc).addScaledVector(vo,p),g}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Bc.subVectors(n,e),_o.subVectors(i,e),jc.crossVectors(Bc,_o);let a=this.direction.dot(jc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(_o.crossVectors(Mi,_o));if(l<0)return null;const u=o*this.direction.dot(Bc.cross(Mi));if(u<0||l+u>a)return null;const f=-o*Mi.dot(jc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,m)}set(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+_*u,n[5]=p-y*u,n[9]=-o*l,n[2]=y-p*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*f,g=l*h,_=u*f,y=u*h;n[0]=p+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*f,g=l*h,_=u*f,y=u*h;n[0]=p-y*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=_*u-g,n[8]=p*u+y,n[1]=l*h,n[5]=y*u+p,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=y-p*h,n[8]=_*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*h+_,n[10]=p-y*h}else if(e.order==="XZY"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=p*h+y,n[5]=a*f,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*f,n[10]=y*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,S1)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ei.crossVectors(i,fn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ei.crossVectors(i,fn)),Ei.normalize(),yo.crossVectors(fn,Ei),r[0]=Ei.x,r[4]=yo.x,r[8]=fn.x,r[1]=Ei.y,r[5]=yo.y,r[9]=fn.y,r[2]=Ei.z,r[6]=yo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],p=i[9],g=i[13],_=i[2],y=i[6],m=i[10],d=i[14],v=i[3],x=i[7],E=i[11],L=i[15],C=r[0],A=r[4],I=r[8],J=r[12],S=r[1],N=r[5],oe=r[9],ne=r[13],D=r[2],Z=r[6],q=r[10],ee=r[14],U=r[3],j=r[7],b=r[11],T=r[15];return s[0]=a*C+o*S+l*D+u*U,s[4]=a*A+o*N+l*Z+u*j,s[8]=a*I+o*oe+l*q+u*b,s[12]=a*J+o*ne+l*ee+u*T,s[1]=f*C+h*S+p*D+g*U,s[5]=f*A+h*N+p*Z+g*j,s[9]=f*I+h*oe+p*q+g*b,s[13]=f*J+h*ne+p*ee+g*T,s[2]=_*C+y*S+m*D+d*U,s[6]=_*A+y*N+m*Z+d*j,s[10]=_*I+y*oe+m*q+d*b,s[14]=_*J+y*ne+m*ee+d*T,s[3]=v*C+x*S+E*D+L*U,s[7]=v*A+x*N+E*Z+L*j,s[11]=v*I+x*oe+E*q+L*b,s[15]=v*J+x*ne+E*ee+L*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],p=e[10],g=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*h-r*u*h-s*o*p+i*u*p+r*o*g-i*l*g)+y*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*f-s*l*f)+m*(+n*u*h-n*o*g-s*a*h+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*l*h+n*o*p+r*a*h-i*a*p+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],p=e[10],g=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=h*m*u-y*p*u+y*l*g-o*m*g-h*l*d+o*p*d,x=_*p*u-f*m*u-_*l*g+a*m*g+f*l*d-a*p*d,E=f*y*u-_*h*u+_*o*g-a*y*g-f*o*d+a*h*d,L=_*h*l-f*y*l-_*o*p+a*y*p+f*o*m-a*h*m,C=n*v+i*x+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(y*p*s-h*m*s-y*r*g+i*m*g+h*r*d-i*p*d)*A,e[2]=(o*m*s-y*l*s+y*r*u-i*m*u-o*r*d+i*l*d)*A,e[3]=(h*l*s-o*p*s-h*r*u+i*p*u+o*r*g-i*l*g)*A,e[4]=x*A,e[5]=(f*m*s-_*p*s+_*r*g-n*m*g-f*r*d+n*p*d)*A,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*d-n*l*d)*A,e[7]=(a*p*s-f*l*s+f*r*u-n*p*u-a*r*g+n*l*g)*A,e[8]=E*A,e[9]=(_*h*s-f*y*s-_*i*g+n*y*g+f*i*d-n*h*d)*A,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*d+n*o*d)*A,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*g-n*o*g)*A,e[12]=L*A,e[13]=(f*y*r-_*h*r+_*i*p-n*y*p-f*i*m+n*h*m)*A,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*A,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*p+n*o*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,h=o+o,p=s*u,g=s*f,_=s*h,y=a*f,m=a*h,d=o*h,v=l*u,x=l*f,E=l*h,L=i.x,C=i.y,A=i.z;return r[0]=(1-(y+d))*L,r[1]=(g+E)*L,r[2]=(_-x)*L,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(p+d))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+x)*A,r[9]=(m-v)*A,r[10]=(1-(p+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,f=1/a,h=1/o;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===fi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Tl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),p=(n+e)*u,g=(i+r)*f;let _,y;if(o===fi)_=(a+s)*h,y=-2*h;else if(o===Tl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new z,Pn=new lt,y1=new z(0,0,0),S1=new z(1,1,1),Ei=new z,yo=new z,fn=new z,bp=new lt,Ap=new Ha;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";let Yx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M1=0;const Cp=new z,Br=new Ha,ii=new lt,So=new z,Zs=new z,E1=new z,w1=new Ha,Rp=new z(1,0,0),Np=new z(0,1,0),Lp=new z(0,0,1),T1={type:"added"},b1={type:"removed"},Hc={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Nt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,n=new Qn,i=new Ha,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Xe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Zs,So,this.up):ii.lookAt(So,Zs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ii),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(T1),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b1),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,E1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new z,ri=new z,Vc=new z,si=new z,jr=new z,Hr=new z,Pp=new z,Wc=new z,Xc=new z,Yc=new z;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ri.subVectors(i,n),Vc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ri),l=Dn.dot(Vc),u=ri.dot(ri),f=ri.dot(Vc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(u*l-o*f)*p,_=(a*f-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ri.subVectors(e,n),Dn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Hr.subVectors(s,i),Wc.subVectors(e,i);const l=jr.dot(Wc),u=Hr.dot(Wc);if(l<=0&&u<=0)return n.copy(i);Xc.subVectors(e,r);const f=jr.dot(Xc),h=Hr.dot(Xc);if(f>=0&&h<=f)return n.copy(r);const p=l*h-f*u;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(jr,a);Yc.subVectors(e,s);const g=jr.dot(Yc),_=Hr.dot(Yc);if(_>=0&&g<=_)return n.copy(s);const y=g*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Hr,o);const m=f*_-g*h;if(m<=0&&h-f>=0&&g-_>=0)return Pp.subVectors(s,r),o=(h-f)/(h-f+(g-_)),n.copy(r).addScaledVector(Pp,o);const d=1/(m+y+p);return a=y*d,o=p*d,n.copy(i).addScaledVector(jr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=pf(e,1),n=Dt(n,0,1),i=Dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=$x[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return tt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Dt(Ht.r*255,0,255))*65536+Math.round(Dt(Ht.g*255,0,255))*256+Math.round(Dt(Ht.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Xn){tt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(Mo);const i=ma(wi.h,Mo.h,n),r=ma(wi.s,Mo.s,n),s=ma(wi.l,Mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new qe;qe.NAMES=$x;let A1=0;class Lr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=ys,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class us extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,Eo=new $e;class Zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return h1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class qx extends Zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kx extends Zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends Zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let C1=0;const En=new lt,qc=new Nt,Gr=new z,hn=new Ga,Qs=new Ga,At=new z;class It extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gx(e)?Kx:qx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(hn.min,Qs.min),hn.expandByPoint(At),At.addVectors(hn.max,Qs.max),hn.expandByPoint(At)):(hn.expandByPoint(Qs.min),hn.expandByPoint(Qs.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)At.fromBufferAttribute(o,u),l&&(Gr.fromBufferAttribute(e,u),At.add(Gr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new z,l[I]=new z;const u=new z,f=new z,h=new z,p=new $e,g=new $e,_=new $e,y=new z,m=new z;function d(I,J,S){u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,J),h.fromBufferAttribute(i,S),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,J),_.fromBufferAttribute(s,S),f.sub(u),h.sub(u),g.sub(p),_.sub(p);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(N),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(N),o[I].add(y),o[J].add(y),o[S].add(y),l[I].add(m),l[J].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,J=v.length;I<J;++I){const S=v[I],N=S.start,oe=S.count;for(let ne=N,D=N+oe;ne<D;ne+=3)d(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const x=new z,E=new z,L=new z,C=new z;function A(I){L.fromBufferAttribute(r,I),C.copy(L);const J=o[I];x.copy(J),x.sub(L.multiplyScalar(L.dot(J))).normalize(),E.crossVectors(C,J);const N=E.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,J=v.length;I<J;++I){const S=v[I],N=S.start,oe=S.count;for(let ne=N,D=N+oe;ne<D;ne+=3)A(e.getX(ne+0)),A(e.getX(ne+1)),A(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,f=new z,h=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,p=new u.constructor(l.length*f);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let d=0;d<f;d++)p[_++]=u[g++]}return new Zt(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new It,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const p=u[f],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,p=u.length;h<p;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new lt,ir=new mf,wo=new Va,Ip=new z,Vr=new z,Wr=new z,Xr=new z,Kc=new z,To=new z,bo=new $e,Ao=new $e,Co=new $e,Up=new z,Op=new z,Fp=new z,Ro=new z,No=new z;class Kt extends Nt{constructor(e=new It,n=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){To.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Kc.fromBufferAttribute(h,e),a?To.addScaledVector(Kc,f):To.addScaledVector(Kc.sub(n),f))}n.add(To)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(wo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(wo,Ip)===null||ir.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,L=x;E<L;E+=3){const C=o.getX(E),A=o.getX(E+1),I=o.getX(E+2);r=Lo(this,d,e,i,u,f,h,C,A,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const v=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);r=Lo(this,a,e,i,u,f,h,v,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,L=x;E<L;E+=3){const C=E,A=E+1,I=E+2;r=Lo(this,d,e,i,u,f,h,C,A,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const v=m,x=m+1,E=m+2;r=Lo(this,a,e,i,u,f,h,v,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function R1(t,e,n,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;No.copy(o),No.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(No);return u<n.near||u>n.far?null:{distance:u,point:No.clone(),object:t}}function Lo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Vr),t.getVertexPosition(l,Wr),t.getVertexPosition(u,Xr);const f=R1(t,e,n,i,Vr,Wr,Xr,Ro);if(f){r&&(bo.fromBufferAttribute(r,o),Ao.fromBufferAttribute(r,l),Co.fromBufferAttribute(r,u),f.uv=qn.getInterpolation(Ro,Vr,Wr,Xr,bo,Ao,Co,new $e)),s&&(bo.fromBufferAttribute(s,o),Ao.fromBufferAttribute(s,l),Co.fromBufferAttribute(s,u),f.uv1=qn.getInterpolation(Ro,Vr,Wr,Xr,bo,Ao,Co,new $e)),a&&(Up.fromBufferAttribute(a,o),Op.fromBufferAttribute(a,l),Fp.fromBufferAttribute(a,u),f.normal=qn.getInterpolation(Ro,Vr,Wr,Xr,Up,Op,Fp,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new z,materialIndex:0};qn.getNormal(Vr,Wr,Xr,h.normal),f.face=h}return f}class Wa extends It{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(h,2));function _(y,m,d,v,x,E,L,C,A,I,J){const S=E/A,N=L/I,oe=E/2,ne=L/2,D=C/2,Z=A+1,q=I+1;let ee=0,U=0;const j=new z;for(let b=0;b<q;b++){const T=b*N-ne;for(let V=0;V<Z;V++){const $=V*S-oe;j[y]=$*v,j[m]=T*x,j[d]=D,u.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[d]=C>0?1:-1,f.push(j.x,j.y,j.z),h.push(V/A),h.push(1-b/I),ee+=1}}for(let b=0;b<I;b++)for(let T=0;T<A;T++){const V=p+T+Z*b,$=p+T+Z*(b+1),P=p+(T+1)+Z*(b+1),k=p+(T+1)+Z*b;l.push(V,$,k),l.push($,P,k),U+=6}o.addGroup(g,U,J),g+=U,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function N1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zx(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const L1={clone:Ps,merge:Yt};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=N1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Qx=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ti=new z,kp=new $e,zp=new $e;class mn extends Qx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,kp,zp),n.subVectors(zp,kp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class I1 extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new mn(Yr,$r,e,n);s.layers=this.layers,this.add(s);const a=new mn(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new mn(Yr,$r,e,n);o.layers=this.layers,this.add(o);const l=new mn(Yr,$r,e,n);l.layers=this.layers,this.add(l);const u=new mn(Yr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jx extends en{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U1 extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wa(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Hi});s.uniforms.tEquirect.value=n;const a=new Kt(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=rn),new I1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Zc=new z,O1=new z,F1=new Xe;class cr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(O1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||F1.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Va,Po=new z;class gf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],_=r[9],y=r[10],m=r[11],d=r[12],v=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,p-u,m-g,E-d).normalize(),i[1].setComponents(l+s,p+u,m+g,E+d).normalize(),i[2].setComponents(l+a,p+f,m+_,E+v).normalize(),i[3].setComponents(l-a,p-f,m-_,E-v).normalize(),i[4].setComponents(l-o,p-h,m-y,E-x).normalize(),n===fi)i[5].setComponents(l+o,p+h,m+y,E+x).normalize();else if(n===Tl)i[5].setComponents(o,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function k1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,p=u.usage,g=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const p=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,u),g.count===-1&&_.length===0&&t.bufferSubData(h,0,p),_.length!==0){for(let y=0,m=_.length;y<m;y++){const d=_[y];n?t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:l}}class Xa extends It{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,h=e/o,p=n/l,g=[],_=[],y=[],m=[];for(let d=0;d<f;d++){const v=d*p-a;for(let x=0;x<u;x++){const E=x*h-s;_.push(E,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+u*d,E=v+u*(d+1),L=v+1+u*(d+1),C=v+1+u*d;g.push(x,E,C),g.push(E,L,C)}this.setIndex(g),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,CS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,US=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,YM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:z1,alphahash_pars_fragment:B1,alphamap_fragment:j1,alphamap_pars_fragment:H1,alphatest_fragment:G1,alphatest_pars_fragment:V1,aomap_fragment:W1,aomap_pars_fragment:X1,batching_pars_vertex:Y1,batching_vertex:$1,begin_vertex:q1,beginnormal_vertex:K1,bsdfs:Z1,iridescence_fragment:Q1,bumpmap_pars_fragment:J1,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:aS,color_vertex:oS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:dS,displacementmap_vertex:fS,emissivemap_fragment:hS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:xS,envmap_common_pars_fragment:vS,envmap_pars_fragment:_S,envmap_pars_vertex:yS,envmap_physical_pars_fragment:PS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:wS,fog_pars_fragment:TS,gradientmap_pars_fragment:bS,lightmap_fragment:AS,lightmap_pars_fragment:CS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:NS,lights_pars_begin:LS,lights_toon_fragment:DS,lights_toon_pars_fragment:IS,lights_phong_fragment:US,lights_phong_pars_fragment:OS,lights_physical_fragment:FS,lights_physical_pars_fragment:kS,lights_fragment_begin:zS,lights_fragment_maps:BS,lights_fragment_end:jS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:GS,logdepthbuf_pars_vertex:VS,logdepthbuf_vertex:WS,map_fragment:XS,map_pars_fragment:YS,map_particle_fragment:$S,map_particle_pars_fragment:qS,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphinstance_vertex:QS,morphcolor_vertex:JS,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:aM,normal_vertex:oM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:fM,opaque_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:xM,dithering_pars_fragment:vM,roughnessmap_fragment:_M,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:MM,shadowmap_vertex:EM,shadowmask_pars_fragment:wM,skinbase_vertex:TM,skinning_pars_vertex:bM,skinning_vertex:AM,skinnormal_vertex:CM,specularmap_fragment:RM,specularmap_pars_fragment:NM,tonemapping_fragment:LM,tonemapping_pars_fragment:PM,transmission_fragment:DM,transmission_pars_fragment:IM,uv_pars_fragment:UM,uv_pars_vertex:OM,uv_vertex:FM,worldpos_vertex:kM,background_vert:zM,background_frag:BM,backgroundCube_vert:jM,backgroundCube_frag:HM,cube_vert:GM,cube_frag:VM,depth_vert:WM,depth_frag:XM,distanceRGBA_vert:YM,distanceRGBA_frag:$M,equirect_vert:qM,equirect_frag:KM,linedashed_vert:ZM,linedashed_frag:QM,meshbasic_vert:JM,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:sE,meshnormal_frag:aE,meshphong_vert:oE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:xE,sprite_frag:vE},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Yn={basic:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Yn.physical={uniforms:Yt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Do={r:0,b:0,g:0},sr=new Qn,_E=new lt;function yE(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,u,f,h=null,p=0,g=null;function _(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Wl)?(f===void 0&&(f=new Kt(new Wa(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ps(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(d.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(sr)),f.material.toneMapped=tt.getTransfer(x.colorSpace)!==at,(h!==x||p!==x.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=x,p=x.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Kt(new Xa(2,2),new $i({name:"BackgroundMaterial",uniforms:Ps(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=tt.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,d){m.getRGB(Do,Zx(t)),i.buffers.color.setClear(Do.r,Do.g,Do.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function SE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,f=!1;function h(D,Z,q,ee,U){let j=!1;if(a){const b=y(ee,q,Z);u!==b&&(u=b,g(u.object)),j=d(D,ee,q,U),j&&v(D,ee,q,U)}else{const b=Z.wireframe===!0;(u.geometry!==ee.id||u.program!==q.id||u.wireframe!==b)&&(u.geometry=ee.id,u.program=q.id,u.wireframe=b,j=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,I(D,Z,q,ee),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,Z,q){const ee=q.wireframe===!0;let U=o[D.id];U===void 0&&(U={},o[D.id]=U);let j=U[Z.id];j===void 0&&(j={},U[Z.id]=j);let b=j[ee];return b===void 0&&(b=m(p()),j[ee]=b),b}function m(D){const Z=[],q=[],ee=[];for(let U=0;U<r;U++)Z[U]=0,q[U]=0,ee[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:q,attributeDivisors:ee,object:D,attributes:{},index:null}}function d(D,Z,q,ee){const U=u.attributes,j=Z.attributes;let b=0;const T=q.getAttributes();for(const V in T)if(T[V].location>=0){const P=U[V];let k=j[V];if(k===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),P===void 0||P.attribute!==k||k&&P.data!==k.data)return!0;b++}return u.attributesNum!==b||u.index!==ee}function v(D,Z,q,ee){const U={},j=Z.attributes;let b=0;const T=q.getAttributes();for(const V in T)if(T[V].location>=0){let P=j[V];P===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(P=D.instanceColor));const k={};k.attribute=P,P&&P.data&&(k.data=P.data),U[V]=k,b++}u.attributes=U,u.attributesNum=b,u.index=ee}function x(){const D=u.newAttributes;for(let Z=0,q=D.length;Z<q;Z++)D[Z]=0}function E(D){L(D,0)}function L(D,Z){const q=u.newAttributes,ee=u.enabledAttributes,U=u.attributeDivisors;q[D]=1,ee[D]===0&&(t.enableVertexAttribArray(D),ee[D]=1),U[D]!==Z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,Z),U[D]=Z)}function C(){const D=u.newAttributes,Z=u.enabledAttributes;for(let q=0,ee=Z.length;q<ee;q++)Z[q]!==D[q]&&(t.disableVertexAttribArray(q),Z[q]=0)}function A(D,Z,q,ee,U,j,b){b===!0?t.vertexAttribIPointer(D,Z,q,U,j):t.vertexAttribPointer(D,Z,q,ee,U,j)}function I(D,Z,q,ee){if(i.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=ee.attributes,j=q.getAttributes(),b=Z.defaultAttributeValues;for(const T in j){const V=j[T];if(V.location>=0){let $=U[T];if($===void 0&&(T==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),T==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const P=$.normalized,k=$.itemSize,K=n.get($);if(K===void 0)continue;const te=K.buffer,se=K.type,ae=K.bytesPerElement,Ce=i.isWebGL2===!0&&(se===t.INT||se===t.UNSIGNED_INT||$.gpuType===Ix);if($.isInterleavedBufferAttribute){const _e=$.data,O=_e.stride,He=$.offset;if(_e.isInstancedInterleavedBuffer){for(let fe=0;fe<V.locationSize;fe++)L(V.location+fe,_e.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let fe=0;fe<V.locationSize;fe++)E(V.location+fe);t.bindBuffer(t.ARRAY_BUFFER,te);for(let fe=0;fe<V.locationSize;fe++)A(V.location+fe,k/V.locationSize,se,P,O*ae,(He+k/V.locationSize*fe)*ae,Ce)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)L(V.location+_e,$.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<V.locationSize;_e++)E(V.location+_e);t.bindBuffer(t.ARRAY_BUFFER,te);for(let _e=0;_e<V.locationSize;_e++)A(V.location+_e,k/V.locationSize,se,P,k*ae,k/V.locationSize*_e*ae,Ce)}}else if(b!==void 0){const P=b[T];if(P!==void 0)switch(P.length){case 2:t.vertexAttrib2fv(V.location,P);break;case 3:t.vertexAttrib3fv(V.location,P);break;case 4:t.vertexAttrib4fv(V.location,P);break;default:t.vertexAttrib1fv(V.location,P)}}}}C()}function J(){oe();for(const D in o){const Z=o[D];for(const q in Z){const ee=Z[q];for(const U in ee)_(ee[U].object),delete ee[U];delete Z[q]}delete o[D]}}function S(D){if(o[D.id]===void 0)return;const Z=o[D.id];for(const q in Z){const ee=Z[q];for(const U in ee)_(ee[U].object),delete ee[U];delete Z[q]}delete o[D.id]}function N(D){for(const Z in o){const q=o[Z];if(q[D.id]===void 0)continue;const ee=q[D.id];for(const U in ee)_(ee[U].object),delete ee[U];delete q[D.id]}}function oe(){ne(),f=!0,u!==l&&(u=l,g(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:oe,resetDefaultState:ne,dispose:J,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function ME(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,p){if(p===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,h,p),n.update(h,s,p)}function u(f,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(f[_],h[_]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=h[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function EE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,E=a||e.has("OES_texture_float"),L=x&&E,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:C}}function wE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||i!==0||r;return r=p,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,g){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,x=v*4;let E=d.clippingState||null;l.value=E,E=f(_,p,x,g);for(let L=0;L!==x;++L)E[L]=n[L];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,g,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=g+y*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=g;x!==y;++x,E+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function TE(t){let e=new WeakMap;function n(a,o){return o===nd?a.mapping=Rs:o===id&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===nd||o===id)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new U1(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class t0 extends Qx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Bp=[.125,.215,.35,.446,.526,.582],fr=20,Qc=new t0,jp=new qe;let Jc=null,eu=0,tu=0;const ur=(1+Math.sqrt(5))/2,qr=1/ur,Hp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ur,qr),new z(0,ur,-qr),new z(qr,0,ur),new z(-qr,0,ur),new z(ur,qr,0),new z(-ur,qr,0)];class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Da,format:zn,colorSpace:Qi,depthBuffer:!1},r=Vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bE(s)),this._blurMaterial=AE(s,e,n)}return r}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,Qc)}_sceneToCubeUV(e,n,i,r){const o=new mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(jp),f.toneMapping=Gi,f.autoClear=!1;const g=new us({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Kt(new Wa,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(jp),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const x=this._cubeSize;Io(r,v*x,d>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Io(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Qc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hp[(r-1)%Hp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Kt(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const d=[];let v=0;for(let A=0;A<fr;++A){const I=A/y,J=Math.exp(-I*I/2);d.push(J),A===0?v+=J:A<m&&(v+=2*J)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const E=this._sizeLods[r],L=3*E*(r>x-ds?r-x+ds:0),C=4*(this._cubeSize-E);Io(n,L,C,3*E,2*E),l.setRenderTarget(n),l.render(h,Qc)}}function bE(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Bp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ds?l=Bp[a-t+ds-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*g),x=new Float32Array(m*_*g),E=new Float32Array(d*_*g);for(let C=0;C<g;C++){const A=C%3*2/3-1,I=C>2?0:-1,J=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(J,y*_*C),x.set(p,m*_*C);const S=[C,C,C,C,C,C];E.set(S,d*_*C)}const L=new It;L.setAttribute("position",new Zt(v,y)),L.setAttribute("uv",new Zt(x,m)),L.setAttribute("faceIndex",new Zt(E,d)),e.push(L),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AE(t,e,n){const i=new Float32Array(fr),r=new z(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Wp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Xp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===nd||l===id,f=l===Rs||l===Ns;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Gp(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Gp(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function RE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NE(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const y=p.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const p=[],g=h.index,_=h.attributes.position;let y=0;if(g!==null){const v=g.array;y=g.version;for(let x=0,E=v.length;x<E;x+=3){const L=v[x+0],C=v[x+1],A=v[x+2];p.push(L,C,C,A,A,L)}}else if(_!==void 0){const v=_.array;y=_.version;for(let x=0,E=v.length/3-1;x<E;x+=3){const L=x+0,C=x+1,A=x+2;p.push(L,C,C,A,A,L)}}else return;const m=new(Gx(p)?Kx:qx)(p,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function LE(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function h(g,_,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,g*l,y),n.update(_,s,y)}function p(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(g[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let d=0;for(let v=0;v<y;v++)d+=_[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function PE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DE(t,e){return t[0]-e[0]}function IE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function UE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,h){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let ne=function(){N.dispose(),s.delete(f),f.removeEventListener("dispose",ne)};var g=ne;m!==void 0&&m.texture.dispose();const d=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let A=0;d===!0&&(A=1),v===!0&&(A=2),x===!0&&(A=3);let I=f.attributes.position.count*A,J=1;I>e.maxTextureSize&&(J=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const S=new Float32Array(I*J*4*y),N=new Xx(S,I,J,y);N.type=ci,N.needsUpdate=!0;const oe=A*4;for(let D=0;D<y;D++){const Z=E[D],q=L[D],ee=C[D],U=I*J*4*D;for(let j=0;j<Z.count;j++){const b=j*oe;d===!0&&(a.fromBufferAttribute(Z,j),S[U+b+0]=a.x,S[U+b+1]=a.y,S[U+b+2]=a.z,S[U+b+3]=0),v===!0&&(a.fromBufferAttribute(q,j),S[U+b+4]=a.x,S[U+b+5]=a.y,S[U+b+6]=a.z,S[U+b+7]=0),x===!0&&(a.fromBufferAttribute(ee,j),S[U+b+8]=a.x,S[U+b+9]=a.y,S[U+b+10]=a.z,S[U+b+11]=ee.itemSize===4?a.w:1)}}m={count:y,texture:N,size:new $e(I,J)},s.set(f,m),f.addEventListener("dispose",ne)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let d=0;for(let x=0;x<p.length;x++)d+=p[x];const v=f.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",p)}h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[f.id]=y}for(let E=0;E<_;E++){const L=y[E];L[0]=E,L[1]=p[E]}y.sort(IE);for(let E=0;E<8;E++)E<_&&y[E][1]?(o[E][0]=y[E][0],o[E][1]=y[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(DE);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const L=o[E],C=L[0],A=L[1];C!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+E)!==m[C]&&f.setAttribute("morphTarget"+E,m[C]),d&&f.getAttribute("morphNormal"+E)!==d[C]&&f.setAttribute("morphNormal"+E,d[C]),r[E]=A,v+=A):(m&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),d&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const x=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function OE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class n0 extends en{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:Sr,f!==Sr&&f!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Sr&&(i=Di),i===void 0&&f===Ls&&(i=yr),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const i0=new en,r0=new n0(1,1);r0.compareFunction=Hx;const s0=new Xx,a0=new v1,o0=new Jx,Yp=[],$p=[],qp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Yp[r];if(s===void 0&&(s=new Float32Array(r),Yp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),Tt(n,i)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),Tt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;qp.set(i),t.uniformMatrix4fv(this.addr,!1,qp),Tt(n,i)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function $E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?r0:i0;n.setTexture2D(e||s,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||a0,r)}function ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||o0,r)}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s0,r)}function nw(t){switch(t){case 5126:return FE;case 35664:return kE;case 35665:return zE;case 35666:return BE;case 35674:return jE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return YE;case 5125:return $E;case 36294:return qE;case 36295:return KE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(t,e){t.uniform1fv(this.addr,e)}function rw(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function sw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function aw(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function ow(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lw(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cw(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uw(t,e){t.uniform1iv(this.addr,e)}function dw(t,e){t.uniform2iv(this.addr,e)}function fw(t,e){t.uniform3iv(this.addr,e)}function hw(t,e){t.uniform4iv(this.addr,e)}function pw(t,e){t.uniform1uiv(this.addr,e)}function mw(t,e){t.uniform2uiv(this.addr,e)}function gw(t,e){t.uniform3uiv(this.addr,e)}function xw(t,e){t.uniform4uiv(this.addr,e)}function vw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||i0,s[a])}function _w(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||a0,s[a])}function yw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||o0,s[a])}function Sw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||s0,s[a])}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return aw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nw(n.type)}}class ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mw(n.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Qp(t,e){t.seq.push(e),t.map[e.id]=e}function bw(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Qp(n,u===void 0?new Ew(o,t,e):new ww(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Tw(o),Qp(n,h)),n=h}}}class Ko{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);bw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Aw=37297;let Cw=0;function Rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Nw(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===wl&&n===El?i="LinearDisplayP3ToLinearSRGB":e===El&&n===wl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Xl:return[i,"LinearTransferOETF"];case Xn:case hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Rw(t.getShaderSource(e),a)}else return r}function Lw(t,e){const n=Nw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Pw(t,e){let n;switch(e){case Cy:n="Linear";break;case Ry:n="Reinhard";break;case Ny:n="OptimizedCineon";break;case Px:n="ACESFilmic";break;case Py:n="AgX";break;case Dy:n="Neutral";break;case Ly:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Dw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function Iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Uw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ow(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fs(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(t){return t.replace(Fw,zw)}const kw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zw(t,e){let n=We[e];if(n===void 0){const i=kw.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(Bw,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ny?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ns:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Ww(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case df:e="ENVMAP_BLENDING_MULTIPLY";break;case by:e="ENVMAP_BLENDING_MIX";break;case Ay:e="ENVMAP_BLENDING_ADD";break}return e}function Xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Yw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Hw(n),u=Gw(n),f=Vw(n),h=Ww(n),p=Xw(n),g=n.isWebGL2?"":Dw(n),_=Iw(n),y=Uw(s),m=r.createProgram();let d,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(fs).join(`
`),d.length>0&&(d+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(fs).join(`
`),v.length>0&&(v+=`
`)):(d=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),v=[g,rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?We.tonemapping_pars_fragment:"",n.toneMapping!==Gi?Pw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Lw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),a=ld(a),a=tm(a,n),a=nm(a,n),o=ld(o),o=tm(o,n),o=nm(o,n),a=im(a),o=im(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=x+d+a,L=x+v+o,C=Jp(r,r.VERTEX_SHADER,E),A=Jp(r,r.FRAGMENT_SHADER,L);r.attachShader(m,C),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function I(oe){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(A).trim();let q=!0,ee=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,A);else{const U=em(r,C,"vertex"),j=em(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+oe.name+`
Material Type: `+oe.type+`

Program Info Log: `+ne+`
`+U+`
`+j)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(D===""||Z==="")&&(ee=!1);ee&&(oe.diagnostics={runnable:q,programLog:ne,vertexShader:{log:D,prefix:d},fragmentShader:{log:Z,prefix:v}})}r.deleteShader(C),r.deleteShader(A),J=new Ko(r,m),S=Ow(r,m)}let J;this.getUniforms=function(){return J===void 0&&I(this),J};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,Aw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}let $w=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Kw(e),n.set(e,i)),i}}class Kw{constructor(e){this.id=$w++,this.code=e,this.usedTimes=0}}function Zw(t,e,n,i,r,s,a){const o=new Yx,l=new qw,u=new Set,f=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,N,oe,ne,D){const Z=ne.fog,q=D.geometry,ee=S.isMeshStandardMaterial?ne.environment:null,U=(S.isMeshStandardMaterial?n:e).get(S.envMap||ee),j=U&&U.mapping===Wl?U.image.height:null,b=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const T=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,V=T!==void 0?T.length:0;let $=0;q.morphAttributes.position!==void 0&&($=1),q.morphAttributes.normal!==void 0&&($=2),q.morphAttributes.color!==void 0&&($=3);let P,k,K,te;if(b){const nt=Yn[b];P=nt.vertexShader,k=nt.fragmentShader}else P=S.vertexShader,k=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),te=l.getFragmentShaderID(S);const se=t.getRenderTarget(),ae=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,_e=!!S.map,O=!!S.matcap,He=!!U,fe=!!S.aoMap,Re=!!S.lightMap,Ae=!!S.bumpMap,De=!!S.normalMap,Le=!!S.displacementMap,Fe=!!S.emissiveMap,Qe=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,Y=S.clearcoat>0,Q=S.iridescence>0,re=S.sheen>0,ie=S.transmission>0,ze=M&&!!S.anisotropyMap,Ie=Y&&!!S.clearcoatMap,pe=Y&&!!S.clearcoatNormalMap,ve=Y&&!!S.clearcoatRoughnessMap,ke=Q&&!!S.iridescenceMap,he=Q&&!!S.iridescenceThicknessMap,ue=re&&!!S.sheenColorMap,Ee=re&&!!S.sheenRoughnessMap,ge=!!S.specularMap,le=!!S.specularColorMap,de=!!S.specularIntensityMap,be=ie&&!!S.transmissionMap,Ue=ie&&!!S.thicknessMap,ct=!!S.gradientMap,F=!!S.alphaMap,ye=S.alphaTest>0,G=!!S.alphaHash,me=!!S.extensions;let Se=Gi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Se=t.toneMapping);const Ze={isWebGL2:h,shaderID:b,shaderType:S.type,shaderName:S.name,vertexShader:P,fragmentShader:k,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ce,instancing:ae,instancingColor:ae&&D.instanceColor!==null,instancingMorph:ae&&D.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:O,envMap:He,envMapMode:He&&U.mapping,envMapCubeUVHeight:j,aoMap:fe,lightMap:Re,bumpMap:Ae,normalMap:De,displacementMap:g&&Le,emissiveMap:Fe,normalMapObjectSpace:De&&S.normalMapType===Vy,normalMapTangentSpace:De&&S.normalMapType===jx,metalnessMap:Qe,roughnessMap:R,anisotropy:M,anisotropyMap:ze,clearcoat:Y,clearcoatMap:Ie,clearcoatNormalMap:pe,clearcoatRoughnessMap:ve,iridescence:Q,iridescenceMap:ke,iridescenceThicknessMap:he,sheen:re,sheenColorMap:ue,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:le,specularIntensityMap:de,transmission:ie,transmissionMap:be,thicknessMap:Ue,gradientMap:ct,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:ye,alphaHash:G,combine:S.combine,mapUv:_e&&m(S.map.channel),aoMapUv:fe&&m(S.aoMap.channel),lightMapUv:Re&&m(S.lightMap.channel),bumpMapUv:Ae&&m(S.bumpMap.channel),normalMapUv:De&&m(S.normalMap.channel),displacementMapUv:Le&&m(S.displacementMap.channel),emissiveMapUv:Fe&&m(S.emissiveMap.channel),metalnessMapUv:Qe&&m(S.metalnessMap.channel),roughnessMapUv:R&&m(S.roughnessMap.channel),anisotropyMapUv:ze&&m(S.anisotropyMap.channel),clearcoatMapUv:Ie&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(S.sheenRoughnessMap.channel),specularMapUv:ge&&m(S.specularMap.channel),specularColorMapUv:le&&m(S.specularColorMap.channel),specularIntensityMapUv:de&&m(S.specularIntensityMap.channel),transmissionMapUv:be&&m(S.transmissionMap.channel),thicknessMapUv:Ue&&m(S.thicknessMap.channel),alphaMapUv:F&&m(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(De||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(_e||F),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&oe.length>0,shadowMapType:t.shadowMap.type,toneMapping:Se,useLegacyLights:t._useLegacyLights,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fn,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function v(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const oe in S.defines)N.push(oe),N.push(S.defines[oe]);return S.isRawShaderMaterial===!1&&(x(N,S),E(N,S),N.push(t.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function x(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function E(S,N){o.disableAll(),N.isWebGL2&&o.enable(0),N.supportsVertexTextures&&o.enable(1),N.instancing&&o.enable(2),N.instancingColor&&o.enable(3),N.instancingMorph&&o.enable(4),N.matcap&&o.enable(5),N.envMap&&o.enable(6),N.normalMapObjectSpace&&o.enable(7),N.normalMapTangentSpace&&o.enable(8),N.clearcoat&&o.enable(9),N.iridescence&&o.enable(10),N.alphaTest&&o.enable(11),N.vertexColors&&o.enable(12),N.vertexAlphas&&o.enable(13),N.vertexUv1s&&o.enable(14),N.vertexUv2s&&o.enable(15),N.vertexUv3s&&o.enable(16),N.vertexTangents&&o.enable(17),N.anisotropy&&o.enable(18),N.alphaHash&&o.enable(19),N.batching&&o.enable(20),S.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.skinning&&o.enable(4),N.morphTargets&&o.enable(5),N.morphNormals&&o.enable(6),N.morphColors&&o.enable(7),N.premultipliedAlpha&&o.enable(8),N.shadowMapEnabled&&o.enable(9),N.useLegacyLights&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.alphaToCoverage&&o.enable(20),S.push(o.mask)}function L(S){const N=y[S.type];let oe;if(N){const ne=Yn[N];oe=L1.clone(ne.uniforms)}else oe=S.uniforms;return oe}function C(S,N){let oe;for(let ne=0,D=f.length;ne<D;ne++){const Z=f[ne];if(Z.cacheKey===N){oe=Z,++oe.usedTimes;break}}return oe===void 0&&(oe=new Yw(t,N,S,s),f.push(oe)),oe}function A(S){if(--S.usedTimes===0){const N=f.indexOf(S);f[N]=f[f.length-1],f.pop(),S.destroy()}}function I(S){l.remove(S)}function J(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:I,programs:f,dispose:J}}function Qw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Jw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,g,_,y,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:g,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function o(h,p,g,_,y,m){const d=a(h,p,g,_,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(h,p,g,_,y,m){const d=a(h,p,g,_,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||Jw),i.length>1&&i.sort(p||sm),r.length>1&&r.sort(p||sm)}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function e2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new am,t.set(i,[a])):r>=s.length?(a=new am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function t2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new qe};break;case"SpotLight":n={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function n2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let i2=0;function r2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function s2(t,e){const n=new t2,i=n2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new z);const s=new z,a=new lt,o=new lt;function l(f,h){let p=0,g=0,_=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let y=0,m=0,d=0,v=0,x=0,E=0,L=0,C=0,A=0,I=0,J=0;f.sort(r2);const S=h===!0?Math.PI:1;for(let oe=0,ne=f.length;oe<ne;oe++){const D=f[oe],Z=D.color,q=D.intensity,ee=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=Z.r*q*S,g+=Z.g*q*S,_+=Z.b*q*S;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],q);J++}else if(D.isDirectionalLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const b=D.shadow,T=i.get(D);T.shadowBias=b.bias,T.shadowNormalBias=b.normalBias,T.shadowRadius=b.radius,T.shadowMapSize=b.mapSize,r.directionalShadow[y]=T,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=D.shadow.matrix,E++}r.directional[y]=j,y++}else if(D.isSpotLight){const j=n.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(Z).multiplyScalar(q*S),j.distance=ee,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[d]=j;const b=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,b.updateMatrices(D),D.castShadow&&I++),r.spotLightMatrix[d]=b.matrix,D.castShadow){const T=i.get(D);T.shadowBias=b.bias,T.shadowNormalBias=b.normalBias,T.shadowRadius=b.radius,T.shadowMapSize=b.mapSize,r.spotShadow[d]=T,r.spotShadowMap[d]=U,C++}d++}else if(D.isRectAreaLight){const j=n.get(D);j.color.copy(Z).multiplyScalar(q),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=j,v++}else if(D.isPointLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),j.distance=D.distance,j.decay=D.decay,D.castShadow){const b=D.shadow,T=i.get(D);T.shadowBias=b.bias,T.shadowNormalBias=b.normalBias,T.shadowRadius=b.radius,T.shadowMapSize=b.mapSize,T.shadowCameraNear=b.camera.near,T.shadowCameraFar=b.camera.far,r.pointShadow[m]=T,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,L++}r.point[m]=j,m++}else if(D.isHemisphereLight){const j=n.get(D);j.skyColor.copy(D.color).multiplyScalar(q*S),j.groundColor.copy(D.groundColor).multiplyScalar(q*S),r.hemi[x]=j,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const N=r.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==E||N.numPointShadows!==L||N.numSpotShadows!==C||N.numSpotMaps!==A||N.numLightProbes!==J)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=J,N.directionalLength=y,N.pointLength=m,N.spotLength=d,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=E,N.numPointShadows=L,N.numSpotShadows=C,N.numSpotMaps=A,N.numLightProbes=J,r.version=i2++)}function u(f,h){let p=0,g=0,_=0,y=0,m=0;const d=h.matrixWorldInverse;for(let v=0,x=f.length;v<x;v++){const E=f[v];if(E.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),p++}else if(E.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),g++}else if(E.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function om(t,e){const n=new s2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function a2(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new om(t,e),n.set(s,[l])):a>=o.length?(l=new om(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class o2 extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l2 extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d2(t,e,n){let i=new gf;const r=new $e,s=new $e,a=new ft,o=new o2({depthPacking:Gy}),l=new l2,u={},f=n.maxTextureSize,h={[Yi]:Jt,[Jt]:Yi,[Fn]:Fn},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Kt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lx;let d=this.type;this.render=function(C,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const J=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(Hi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=d!==ai&&this.type===ai,D=d===ai&&this.type!==ai;for(let Z=0,q=C.length;Z<q;Z++){const ee=C[Z],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const j=U.getFrameExtents();if(r.multiply(j),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,U.mapSize.y=s.y)),U.map===null||ne===!0||D===!0){const T=this.type!==ai?{minFilter:qt,magFilter:qt}:{};U.map!==null&&U.map.dispose(),U.map=new Ar(r.x,r.y,T),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const b=U.getViewportCount();for(let T=0;T<b;T++){const V=U.getViewport(T);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),oe.viewport(a),U.updateMatrices(ee,T),i=U.getFrustum(),E(A,I,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===ai&&v(U,I),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(J,S,N)};function v(C,A){const I=e.update(y);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,I,p,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,I,g,y,null)}function x(C,A,I,J){let S=null;const N=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const oe=S.uuid,ne=A.uuid;let D=u[oe];D===void 0&&(D={},u[oe]=D);let Z=D[ne];Z===void 0&&(Z=S.clone(),D[ne]=Z,A.addEventListener("dispose",L)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,J===ai?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const oe=t.properties.get(S);oe.light=I}return S}function E(C,A,I,J,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),D=C.material;if(Array.isArray(D)){const Z=ne.groups;for(let q=0,ee=Z.length;q<ee;q++){const U=Z[q],j=D[U.materialIndex];if(j&&j.visible){const b=x(C,j,J,S);C.onBeforeShadow(t,C,A,I,ne,b,U),t.renderBufferDirect(I,null,ne,b,C,U),C.onAfterShadow(t,C,A,I,ne,b,U)}}}else if(D.visible){const Z=x(C,D,J,S);C.onBeforeShadow(t,C,A,I,ne,Z,null),t.renderBufferDirect(I,null,ne,Z,C,null),C.onAfterShadow(t,C,A,I,ne,Z,null)}}const oe=C.children;for(let ne=0,D=oe.length;ne<D;ne++)E(oe[ne],A,I,J,S)}function L(C){C.target.removeEventListener("dispose",L);for(const I in u){const J=u[I],S=C.target.uuid;S in J&&(J[S].dispose(),delete J[S])}}}function f2(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const ye=new ft;let G=null;const me=new ft(0,0,0,0);return{setMask:function(Se){G!==Se&&!F&&(t.colorMask(Se,Se,Se,Se),G=Se)},setLocked:function(Se){F=Se},setClear:function(Se,Ze,nt,Lt,Sn){Sn===!0&&(Se*=Lt,Ze*=Lt,nt*=Lt),ye.set(Se,Ze,nt,Lt),me.equals(ye)===!1&&(t.clearColor(Se,Ze,nt,Lt),me.copy(ye))},reset:function(){F=!1,G=null,me.set(-1,0,0,0)}}}function s(){let F=!1,ye=null,G=null,me=null;return{setTest:function(Se){Se?ae(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Se){ye!==Se&&!F&&(t.depthMask(Se),ye=Se)},setFunc:function(Se){if(G!==Se){switch(Se){case _y:t.depthFunc(t.NEVER);break;case yy:t.depthFunc(t.ALWAYS);break;case Sy:t.depthFunc(t.LESS);break;case Sl:t.depthFunc(t.LEQUAL);break;case My:t.depthFunc(t.EQUAL);break;case Ey:t.depthFunc(t.GEQUAL);break;case wy:t.depthFunc(t.GREATER);break;case Ty:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=Se}},setLocked:function(Se){F=Se},setClear:function(Se){me!==Se&&(t.clearDepth(Se),me=Se)},reset:function(){F=!1,ye=null,G=null,me=null}}}function a(){let F=!1,ye=null,G=null,me=null,Se=null,Ze=null,nt=null,Lt=null,Sn=null;return{setTest:function(it){F||(it?ae(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(it){ye!==it&&!F&&(t.stencilMask(it),ye=it)},setFunc:function(it,Wt,Gn){(G!==it||me!==Wt||Se!==Gn)&&(t.stencilFunc(it,Wt,Gn),G=it,me=Wt,Se=Gn)},setOp:function(it,Wt,Gn){(Ze!==it||nt!==Wt||Lt!==Gn)&&(t.stencilOp(it,Wt,Gn),Ze=it,nt=Wt,Lt=Gn)},setLocked:function(it){F=it},setClear:function(it){Sn!==it&&(t.clearStencil(it),Sn=it)},reset:function(){F=!1,ye=null,G=null,me=null,Se=null,Ze=null,nt=null,Lt=null,Sn=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,y=[],m=null,d=!1,v=null,x=null,E=null,L=null,C=null,A=null,I=null,J=new qe(0,0,0),S=0,N=!1,oe=null,ne=null,D=null,Z=null,q=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const b=t.getParameter(t.VERSION);b.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(b)[1]),U=j>=1):b.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),U=j>=2);let T=null,V={};const $=t.getParameter(t.SCISSOR_BOX),P=t.getParameter(t.VIEWPORT),k=new ft().fromArray($),K=new ft().fromArray(P);function te(F,ye,G,me){const Se=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(F,Ze),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<G;nt++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ye,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(ye+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ze}const se={};se[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ae(t.DEPTH_TEST),l.setFunc(Sl),Le(!1),Fe(Bh),ae(t.CULL_FACE),Ae(Hi);function ae(F){p[F]!==!0&&(t.enable(F),p[F]=!0)}function Ce(F){p[F]!==!1&&(t.disable(F),p[F]=!1)}function _e(F,ye){return g[F]!==ye?(t.bindFramebuffer(F,ye),g[F]=ye,i&&(F===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ye),F===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ye)),!0):!1}function O(F,ye){let G=y,me=!1;if(F){G=_.get(ye),G===void 0&&(G=[],_.set(ye,G));const Se=F.textures;if(G.length!==Se.length||G[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,nt=Se.length;Ze<nt;Ze++)G[Ze]=t.COLOR_ATTACHMENT0+Ze;G.length=Se.length,me=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,me=!0);if(me)if(n.isWebGL2)t.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function He(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const fe={[dr]:t.FUNC_ADD,[ry]:t.FUNC_SUBTRACT,[sy]:t.FUNC_REVERSE_SUBTRACT};if(i)fe[Vh]=t.MIN,fe[Wh]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(fe[Vh]=F.MIN_EXT,fe[Wh]=F.MAX_EXT)}const Re={[ay]:t.ZERO,[oy]:t.ONE,[ly]:t.SRC_COLOR,[ed]:t.SRC_ALPHA,[py]:t.SRC_ALPHA_SATURATE,[fy]:t.DST_COLOR,[uy]:t.DST_ALPHA,[cy]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[hy]:t.ONE_MINUS_DST_COLOR,[dy]:t.ONE_MINUS_DST_ALPHA,[my]:t.CONSTANT_COLOR,[gy]:t.ONE_MINUS_CONSTANT_COLOR,[xy]:t.CONSTANT_ALPHA,[vy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(F,ye,G,me,Se,Ze,nt,Lt,Sn,it){if(F===Hi){d===!0&&(Ce(t.BLEND),d=!1);return}if(d===!1&&(ae(t.BLEND),d=!0),F!==iy){if(F!==v||it!==N){if((x!==dr||C!==dr)&&(t.blendEquation(t.FUNC_ADD),x=dr,C=dr),it)switch(F){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jh:t.blendFunc(t.ONE,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,L=null,A=null,I=null,J.set(0,0,0),S=0,v=F,N=it}return}Se=Se||ye,Ze=Ze||G,nt=nt||me,(ye!==x||Se!==C)&&(t.blendEquationSeparate(fe[ye],fe[Se]),x=ye,C=Se),(G!==E||me!==L||Ze!==A||nt!==I)&&(t.blendFuncSeparate(Re[G],Re[me],Re[Ze],Re[nt]),E=G,L=me,A=Ze,I=nt),(Lt.equals(J)===!1||Sn!==S)&&(t.blendColor(Lt.r,Lt.g,Lt.b,Sn),J.copy(Lt),S=Sn),v=F,N=!1}function De(F,ye){F.side===Fn?Ce(t.CULL_FACE):ae(t.CULL_FACE);let G=F.side===Jt;ye&&(G=!G),Le(G),F.blending===ys&&F.transparent===!1?Ae(Hi):Ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const me=F.stencilWrite;u.setTest(me),me&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),R(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(F){oe!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),oe=F)}function Fe(F){F!==ey?(ae(t.CULL_FACE),F!==ne&&(F===Bh?t.cullFace(t.BACK):F===ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),ne=F}function Qe(F){F!==D&&(U&&t.lineWidth(F),D=F)}function R(F,ye,G){F?(ae(t.POLYGON_OFFSET_FILL),(Z!==ye||q!==G)&&(t.polygonOffset(ye,G),Z=ye,q=G)):Ce(t.POLYGON_OFFSET_FILL)}function M(F){F?ae(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Y(F){F===void 0&&(F=t.TEXTURE0+ee-1),T!==F&&(t.activeTexture(F),T=F)}function Q(F,ye,G){G===void 0&&(T===null?G=t.TEXTURE0+ee-1:G=T);let me=V[G];me===void 0&&(me={type:void 0,texture:void 0},V[G]=me),(me.type!==F||me.texture!==ye)&&(T!==G&&(t.activeTexture(G),T=G),t.bindTexture(F,ye||se[F]),me.type=F,me.texture=ye)}function re(){const F=V[T];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(F){k.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),k.copy(F))}function de(F){K.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function be(F,ye){let G=h.get(ye);G===void 0&&(G=new WeakMap,h.set(ye,G));let me=G.get(F);me===void 0&&(me=t.getUniformBlockIndex(ye,F.name),G.set(F,me))}function Ue(F,ye){const me=h.get(ye).get(F);f.get(ye)!==me&&(t.uniformBlockBinding(ye,me,F.__bindingPointIndex),f.set(ye,me))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},T=null,V={},g={},_=new WeakMap,y=[],m=null,d=!1,v=null,x=null,E=null,L=null,C=null,A=null,I=null,J=new qe(0,0,0),S=0,N=!1,oe=null,ne=null,D=null,Z=null,q=null,k.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ae,disable:Ce,bindFramebuffer:_e,drawBuffers:O,useProgram:He,setBlending:Ae,setMaterial:De,setFlipSided:Le,setCullFace:Fe,setLineWidth:Qe,setPolygonOffset:R,setScissorTest:M,activeTexture:Y,bindTexture:Q,unbindTexture:re,compressedTexImage2D:ie,compressedTexImage3D:ze,texImage2D:Ee,texImage3D:ge,updateUBOMapping:be,uniformBlockBinding:Ue,texStorage2D:he,texStorage3D:ue,texSubImage2D:Ie,texSubImage3D:pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:ke,scissor:le,viewport:de,reset:ct}}function h2(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $e,h=new WeakMap;let p;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return _?new OffscreenCanvas(R,M):Al("canvas")}function m(R,M,Y,Q){let re=1;const ie=Qe(R);if((ie.width>Q||ie.height>Q)&&(re=Q/Math.max(ie.width,ie.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ze=M?bl:Math.floor,Ie=ze(re*ie.width),pe=ze(re*ie.height);p===void 0&&(p=y(Ie,pe));const ve=Y?y(Ie,pe):p;return ve.width=Ie,ve.height=pe,ve.getContext("2d").drawImage(R,0,0,Ie,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Ie+"x"+pe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function d(R){const M=Qe(R);return od(M.width)&&od(M.height)}function v(R){return o?!1:R.wrapS!==kn||R.wrapT!==kn||R.minFilter!==qt&&R.minFilter!==rn}function x(R,M){return R.generateMipmaps&&M&&R.minFilter!==qt&&R.minFilter!==rn}function E(R){t.generateMipmap(R)}function L(R,M,Y,Q,re=!1){if(o===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=M;if(M===t.RED&&(Y===t.FLOAT&&(ie=t.R32F),Y===t.HALF_FLOAT&&(ie=t.R16F),Y===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ie=t.R8UI),Y===t.UNSIGNED_SHORT&&(ie=t.R16UI),Y===t.UNSIGNED_INT&&(ie=t.R32UI),Y===t.BYTE&&(ie=t.R8I),Y===t.SHORT&&(ie=t.R16I),Y===t.INT&&(ie=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(ie=t.RG32F),Y===t.HALF_FLOAT&&(ie=t.RG16F),Y===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ie=t.RG8UI),Y===t.UNSIGNED_SHORT&&(ie=t.RG16UI),Y===t.UNSIGNED_INT&&(ie=t.RG32UI),Y===t.BYTE&&(ie=t.RG8I),Y===t.SHORT&&(ie=t.RG16I),Y===t.INT&&(ie=t.RG32I)),M===t.RGBA){const ze=re?Ml:tt.getTransfer(Q);Y===t.FLOAT&&(ie=t.RGBA32F),Y===t.HALF_FLOAT&&(ie=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ie=ze===at?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(R,M,Y){return x(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===qt||R===Xh||R===$s?t.NEAREST:t.LINEAR}function I(R){const M=R.target;M.removeEventListener("dispose",I),S(M),M.isVideoTexture&&h.delete(M)}function J(R){const M=R.target;M.removeEventListener("dispose",J),oe(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const Y=R.source,Q=g.get(Y);if(Q){const re=Q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(R),Object.keys(Q).length===0&&g.delete(Y)}i.remove(R)}function N(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const Y=R.source,Q=g.get(Y);delete Q[M.__cacheKey],a.memory.textures--}function oe(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let re=0;re<M.__webglFramebuffer[Q].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[Q][re]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=R.textures;for(let Q=0,re=Y.length;Q<re;Q++){const ie=i.get(Y[Q]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(Y[Q])}i.remove(R)}let ne=0;function D(){ne=0}function Z(){const R=ne;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),ne+=1,R}function q(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ee(R,M){const Y=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,R,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function U(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){K(Y,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function j(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){K(Y,R,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function b(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){te(Y,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const T={[rd]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[sd]:t.MIRRORED_REPEAT},V={[qt]:t.NEAREST,[Xh]:t.NEAREST_MIPMAP_NEAREST,[$s]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Ac]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},$={[Wy]:t.NEVER,[Zy]:t.ALWAYS,[Xy]:t.LESS,[Hx]:t.LEQUAL,[Yy]:t.EQUAL,[Ky]:t.GEQUAL,[$y]:t.GREATER,[qy]:t.NOTEQUAL};function P(R,M,Y){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Ac||M.magFilter===$s||M.magFilter===gr||M.minFilter===rn||M.minFilter===Ac||M.minFilter===$s||M.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(R,t.TEXTURE_WRAP_S,T[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,T[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,T[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,V[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,V[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==qt&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==$s&&M.minFilter!==gr||M.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function k(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",I));const Q=M.source;let re=g.get(Q);re===void 0&&(re={},g.set(Q,re));const ie=q(M);if(ie!==R.__cacheKey){re[ie]===void 0&&(re[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[ie].usedTimes++;const ze=re[R.__cacheKey];ze!==void 0&&(re[R.__cacheKey].usedTimes--,ze.usedTimes===0&&N(M)),R.__cacheKey=ie,R.__webglTexture=re[ie].texture}return Y}function K(R,M,Y){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const re=k(R,M),ie=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+Y);const ze=i.get(ie);if(ie.version!==ze.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const Ie=tt.getPrimaries(tt.workingColorSpace),pe=M.colorSpace===Ni?null:tt.getPrimaries(M.colorSpace),ve=M.colorSpace===Ni||Ie===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ke=v(M)&&d(M.image)===!1;let he=m(M.image,ke,!1,r.maxTextureSize);he=Fe(M,he);const ue=d(he)||o,Ee=s.convert(M.format,M.colorSpace);let ge=s.convert(M.type),le=L(M.internalFormat,Ee,ge,M.colorSpace,M.isVideoTexture);P(Q,M,ue);let de;const be=M.mipmaps,Ue=o&&M.isVideoTexture!==!0&&le!==Bx,ct=ze.__version===void 0||re===!0,F=ie.dataReady,ye=C(M,he,ue);if(M.isDepthTexture)le=t.DEPTH_COMPONENT,o?M.type===ci?le=t.DEPTH_COMPONENT32F:M.type===Di?le=t.DEPTH_COMPONENT24:M.type===yr?le=t.DEPTH24_STENCIL8:le=t.DEPTH_COMPONENT16:M.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Sr&&le===t.DEPTH_COMPONENT&&M.type!==ff&&M.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Di,ge=s.convert(M.type)),M.format===Ls&&le===t.DEPTH_COMPONENT&&(le=t.DEPTH_STENCIL,M.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=yr,ge=s.convert(M.type))),ct&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,le,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,le,he.width,he.height,0,Ee,ge,null));else if(M.isDataTexture)if(be.length>0&&ue){Ue&&ct&&n.texStorage2D(t.TEXTURE_2D,ye,le,be[0].width,be[0].height);for(let G=0,me=be.length;G<me;G++)de=be[G],Ue?F&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,de.width,de.height,Ee,ge,de.data):n.texImage2D(t.TEXTURE_2D,G,le,de.width,de.height,0,Ee,ge,de.data);M.generateMipmaps=!1}else Ue?(ct&&n.texStorage2D(t.TEXTURE_2D,ye,le,he.width,he.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Ee,ge,he.data)):n.texImage2D(t.TEXTURE_2D,0,le,he.width,he.height,0,Ee,ge,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,le,be[0].width,be[0].height,he.depth);for(let G=0,me=be.length;G<me;G++)de=be[G],M.format!==zn?Ee!==null?Ue?F&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,he.depth,Ee,de.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,le,de.width,de.height,he.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,he.depth,Ee,ge,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,le,de.width,de.height,he.depth,0,Ee,ge,de.data)}else{Ue&&ct&&n.texStorage2D(t.TEXTURE_2D,ye,le,be[0].width,be[0].height);for(let G=0,me=be.length;G<me;G++)de=be[G],M.format!==zn?Ee!==null?Ue?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,de.width,de.height,Ee,de.data):n.compressedTexImage2D(t.TEXTURE_2D,G,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?F&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,de.width,de.height,Ee,ge,de.data):n.texImage2D(t.TEXTURE_2D,G,le,de.width,de.height,0,Ee,ge,de.data)}else if(M.isDataArrayTexture)Ue?(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,le,he.width,he.height,he.depth),F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ee,ge,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,he.width,he.height,he.depth,0,Ee,ge,he.data);else if(M.isData3DTexture)Ue?(ct&&n.texStorage3D(t.TEXTURE_3D,ye,le,he.width,he.height,he.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ee,ge,he.data)):n.texImage3D(t.TEXTURE_3D,0,le,he.width,he.height,he.depth,0,Ee,ge,he.data);else if(M.isFramebufferTexture){if(ct)if(Ue)n.texStorage2D(t.TEXTURE_2D,ye,le,he.width,he.height);else{let G=he.width,me=he.height;for(let Se=0;Se<ye;Se++)n.texImage2D(t.TEXTURE_2D,Se,le,G,me,0,Ee,ge,null),G>>=1,me>>=1}}else if(be.length>0&&ue){if(Ue&&ct){const G=Qe(be[0]);n.texStorage2D(t.TEXTURE_2D,ye,le,G.width,G.height)}for(let G=0,me=be.length;G<me;G++)de=be[G],Ue?F&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Ee,ge,de):n.texImage2D(t.TEXTURE_2D,G,le,Ee,ge,de);M.generateMipmaps=!1}else if(Ue){if(ct){const G=Qe(he);n.texStorage2D(t.TEXTURE_2D,ye,le,G.width,G.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,ge,he)}else n.texImage2D(t.TEXTURE_2D,0,le,Ee,ge,he);x(M,ue)&&E(Q),ze.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,Y){if(M.image.length!==6)return;const Q=k(R,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Y);const ie=i.get(re);if(re.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+Y);const ze=tt.getPrimaries(tt.workingColorSpace),Ie=M.colorSpace===Ni?null:tt.getPrimaries(M.colorSpace),pe=M.colorSpace===Ni||ze===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,he=[];for(let G=0;G<6;G++)!ve&&!ke?he[G]=m(M.image[G],!1,!0,r.maxCubemapSize):he[G]=ke?M.image[G].image:M.image[G],he[G]=Fe(M,he[G]);const ue=he[0],Ee=d(ue)||o,ge=s.convert(M.format,M.colorSpace),le=s.convert(M.type),de=L(M.internalFormat,ge,le,M.colorSpace),be=o&&M.isVideoTexture!==!0,Ue=ie.__version===void 0||Q===!0,ct=re.dataReady;let F=C(M,ue,Ee);P(t.TEXTURE_CUBE_MAP,M,Ee);let ye;if(ve){be&&Ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,de,ue.width,ue.height);for(let G=0;G<6;G++){ye=he[G].mipmaps;for(let me=0;me<ye.length;me++){const Se=ye[me];M.format!==zn?ge!==null?be?ct&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me,0,0,Se.width,Se.height,ge,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me,de,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me,0,0,Se.width,Se.height,ge,le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me,de,Se.width,Se.height,0,ge,le,Se.data)}}}else{if(ye=M.mipmaps,be&&Ue){ye.length>0&&F++;const G=Qe(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,de,G.width,G.height)}for(let G=0;G<6;G++)if(ke){be?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,he[G].width,he[G].height,ge,le,he[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,he[G].width,he[G].height,0,ge,le,he[G].data);for(let me=0;me<ye.length;me++){const Ze=ye[me].image[G].image;be?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me+1,0,0,Ze.width,Ze.height,ge,le,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me+1,de,Ze.width,Ze.height,0,ge,le,Ze.data)}}else{be?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ge,le,he[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,ge,le,he[G]);for(let me=0;me<ye.length;me++){const Se=ye[me];be?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me+1,0,0,ge,le,Se.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,me+1,de,ge,le,Se.image[G])}}}x(M,Ee)&&E(t.TEXTURE_CUBE_MAP),ie.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function se(R,M,Y,Q,re,ie){const ze=s.convert(Y.format,Y.colorSpace),Ie=s.convert(Y.type),pe=L(Y.internalFormat,ze,Ie,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const ke=Math.max(1,M.width>>ie),he=Math.max(1,M.height>>ie);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ie,pe,ke,he,M.depth,0,ze,Ie,null):n.texImage2D(re,ie,pe,ke,he,0,ze,Ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),De(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,re,i.get(Y).__webglTexture,0,Ae(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,re,i.get(Y).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||De(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===ci?Q=t.DEPTH_COMPONENT32F:re.type===Di&&(Q=t.DEPTH_COMPONENT24));const ie=Ae(M);De(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,Q,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,Q,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Ae(M);Y&&De(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):De(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let re=0;re<Q.length;re++){const ie=Q[re],ze=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),pe=L(ie.internalFormat,ze,Ie,ie.colorSpace),ve=Ae(M);Y&&De(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,pe,M.width,M.height):De(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,re=Ae(M);if(M.depthTexture.format===Sr)De(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ls)De(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function _e(R){const M=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[Q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(R,M,Y){const Q=i.get(R);M!==void 0&&se(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&_e(R)}function He(R){const M=R.texture,Y=i.get(R),Q=i.get(M);R.addEventListener("dispose",J);const re=R.textures,ie=R.isWebGLCubeRenderTarget===!0,ze=re.length>1,Ie=d(R)||o;if(ze||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,a.memory.textures++),ie){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)Y.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else Y.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ze)if(r.drawBuffers)for(let pe=0,ve=re.length;pe<ve;pe++){const ke=i.get(re[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&De(R)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const ve=re[pe];Y.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const ke=s.convert(ve.format,ve.colorSpace),he=s.convert(ve.type),ue=L(ve.internalFormat,ke,he,ve.colorSpace,R.isXRRenderTarget===!0),Ee=Ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,ue,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(Y.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),P(t.TEXTURE_CUBE_MAP,M,Ie);for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(Y.__webglFramebuffer[pe][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else se(Y.__webglFramebuffer[pe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(M,Ie)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let pe=0,ve=re.length;pe<ve;pe++){const ke=re[pe],he=i.get(ke);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),P(t.TEXTURE_2D,ke,Ie),se(Y.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),x(ke,Ie)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,Q.__webglTexture),P(pe,M,Ie),o&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(Y.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,pe,ve);else se(Y.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,pe,0);x(M,Ie)&&E(pe),n.unbindTexture()}R.depthBuffer&&_e(R)}function fe(R){const M=d(R)||o,Y=R.textures;for(let Q=0,re=Y.length;Q<re;Q++){const ie=Y[Q];if(x(ie,M)){const ze=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(ie).__webglTexture;n.bindTexture(ze,Ie),E(ze),n.unbindTexture()}}}function Re(R){if(o&&R.samples>0&&De(R)===!1){const M=R.textures,Y=R.width,Q=R.height;let re=t.COLOR_BUFFER_BIT;const ie=[],ze=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),pe=M.length>1;if(pe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){ie.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&ie.push(ze);const ke=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ze]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ze])),pe){const he=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,re,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]);const ke=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function De(R){const M=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Fe(R,M){const Y=R.colorSpace,Q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ad||Y!==Qi&&Y!==Ni&&(tt.getTransfer(Y)===at?o===!1?e.has("EXT_sRGB")===!0&&Q===zn?(R.format=ad,R.minFilter=rn,R.generateMipmaps=!1):M=Vx.sRGBToLinear(M):(Q!==zn||re!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=U,this.setTexture3D=j,this.setTextureCube=b,this.rebindTextures=O,this.setupRenderTarget=He,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=se,this.useMultisampledRTT=De}function p2(t,e,n){const i=n.isWebGL2;function r(s,a=Ni){let o;const l=tt.getTransfer(a);if(s===Vi)return t.UNSIGNED_BYTE;if(s===Ux)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ox)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Iy)return t.BYTE;if(s===Uy)return t.SHORT;if(s===ff)return t.UNSIGNED_SHORT;if(s===Ix)return t.INT;if(s===Di)return t.UNSIGNED_INT;if(s===ci)return t.FLOAT;if(s===Da)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Oy)return t.ALPHA;if(s===zn)return t.RGBA;if(s===Fy)return t.LUMINANCE;if(s===ky)return t.LUMINANCE_ALPHA;if(s===Sr)return t.DEPTH_COMPONENT;if(s===Ls)return t.DEPTH_STENCIL;if(s===ad)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zy)return t.RED;if(s===Fx)return t.RED_INTEGER;if(s===By)return t.RG;if(s===kx)return t.RG_INTEGER;if(s===zx)return t.RGBA_INTEGER;if(s===Cc||s===Rc||s===Nc||s===Lc)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Cc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Cc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===$h||s===qh||s===Kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zh||s===Qh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zh)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Qh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===dp||s===fp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Jh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ip)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ap)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===op)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pc||s===hp||s===pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Pc)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jy||s===mp||s===gp||s===xp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Pc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class m2 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g2={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,_=.005;u.inputState.pinching&&p>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new $i({extensions:{fragDepth:!0},vertexShader:x2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Kt(new Xa(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class y2 extends Os{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,p=null,g=null,_=null;const y=new _2,m=n.getContextAttributes();let d=null,v=null;const x=[],E=[],L=new $e;let C=null;const A=new mn;A.layers.enable(1),A.viewport=new ft;const I=new mn;I.layers.enable(2),I.viewport=new ft;const J=[A,I],S=new m2;S.layers.enable(1),S.layers.enable(2);let N=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let k=x[P];return k===void 0&&(k=new iu,x[P]=k),k.getTargetRaySpace()},this.getControllerGrip=function(P){let k=x[P];return k===void 0&&(k=new iu,x[P]=k),k.getGripSpace()},this.getHand=function(P){let k=x[P];return k===void 0&&(k=new iu,x[P]=k),k.getHandSpace()};function ne(P){const k=E.indexOf(P.inputSource);if(k===-1)return;const K=x[k];K!==void 0&&(K.update(P.inputSource,P.frame,u||a),K.dispatchEvent({type:P.type,data:P.inputSource}))}function D(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",Z);for(let P=0;P<x.length;P++){const k=E[P];k!==null&&(E[P]=null,x[P].disconnect(k))}N=null,oe=null,y.reset(),e.setRenderTarget(d),g=null,p=null,h=null,r=null,v=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",D),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Ar(g.framebufferWidth,g.framebufferHeight,{format:zn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,K=null,te=null;m.depth&&(te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=m.stencil?Ls:Sr,K=m.stencil?yr:Di);const se={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Ar(p.textureWidth,p.textureHeight,{format:zn,type:Vi,depthTexture:new n0(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ae=e.properties.get(v);ae.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(P){for(let k=0;k<P.removed.length;k++){const K=P.removed[k],te=E.indexOf(K);te>=0&&(E[te]=null,x[te].disconnect(K))}for(let k=0;k<P.added.length;k++){const K=P.added[k];let te=E.indexOf(K);if(te===-1){for(let ae=0;ae<x.length;ae++)if(ae>=E.length){E.push(K),te=ae;break}else if(E[ae]===null){E[ae]=K,te=ae;break}if(te===-1)break}const se=x[te];se&&se.connect(K)}}const q=new z,ee=new z;function U(P,k,K){q.setFromMatrixPosition(k.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const te=q.distanceTo(ee),se=k.projectionMatrix.elements,ae=K.projectionMatrix.elements,Ce=se[14]/(se[10]-1),_e=se[14]/(se[10]+1),O=(se[9]+1)/se[5],He=(se[9]-1)/se[5],fe=(se[8]-1)/se[0],Re=(ae[8]+1)/ae[0],Ae=Ce*fe,De=Ce*Re,Le=te/(-fe+Re),Fe=Le*-fe;k.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Fe),P.translateZ(Le),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Qe=Ce+Le,R=_e+Le,M=Ae-Fe,Y=De+(te-Fe),Q=O*_e/R*Qe,re=He*_e/R*Qe;P.projectionMatrix.makePerspective(M,Y,Q,re,Qe,R),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function j(P,k){k===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(k.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;y.texture!==null&&(P.near=y.depthNear,P.far=y.depthFar),S.near=I.near=A.near=P.near,S.far=I.far=A.far=P.far,(N!==S.near||oe!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,oe=S.far,A.near=N,A.far=oe,I.near=N,I.far=oe,A.updateProjectionMatrix(),I.updateProjectionMatrix(),P.updateProjectionMatrix());const k=P.parent,K=S.cameras;j(S,k);for(let te=0;te<K.length;te++)j(K[te],k);K.length===2?U(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),b(P,S,k)};function b(P,k,K){K===null?P.matrix.copy(k.matrixWorld):(P.matrix.copy(K.matrixWorld),P.matrix.invert(),P.matrix.multiply(k.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(k.projectionMatrix),P.projectionMatrixInverse.copy(k.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Ia*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(P){l=P,p!==null&&(p.fixedFoveation=P),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null};let T=null;function V(P,k){if(f=k.getViewerPose(u||a),_=k,f!==null){const K=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let te=!1;K.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let ae=0;ae<K.length;ae++){const Ce=K[ae];let _e=null;if(g!==null)_e=g.getViewport(Ce);else{const He=h.getViewSubImage(p,Ce);_e=He.viewport,ae===0&&(e.setRenderTargetTextures(v,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(v))}let O=J[ae];O===void 0&&(O=new mn,O.layers.enable(ae),O.viewport=new ft,J[ae]=O),O.matrix.fromArray(Ce.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ce.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(_e.x,_e.y,_e.width,_e.height),ae===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(O)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const ae=h.getDepthInformation(K[0]);ae&&ae.isValid&&ae.texture&&y.init(e,ae,r.renderState)}}for(let K=0;K<x.length;K++){const te=E[K],se=x[K];te!==null&&se!==void 0&&se.update(te,k,u||a)}y.render(e,S),T&&T(P,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const $=new e0;$.setAnimationLoop(V),this.setAnimationLoop=function(P){T=P},this.dispose=function(){}}}const ar=new Qn,S2=new lt;function M2(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Zx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,E=v.envMapRotation;if(x&&(m.envMap.value=x,ar.copy(E),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(ar)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const L=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*L,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function E2(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const E=x.program;i.uniformBlockBinding(v,E)}function u(v,x){let E=r[v.id];E===void 0&&(_(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(v,L);const C=e.render.frame;s[v.id]!==C&&(p(v),s[v.id]=C)}function f(v){const x=h();v.__bindingPointIndex=x;const E=t.createBuffer(),L=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],E=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,A=E.length;C<A;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let J=0,S=I.length;J<S;J++){const N=I[J];if(g(N,C,J,L)===!0){const oe=N.__offset,ne=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let Z=0;Z<ne.length;Z++){const q=ne[Z],ee=y(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,oe+D,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,D),D+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,oe,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,E,L){const C=v.value,A=x+"_"+E;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const I=L[A];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return L[A]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(v){const x=v.uniforms;let E=0;const L=16;for(let A=0,I=x.length;A<I;A++){const J=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,N=J.length;S<N;S++){const oe=J[S],ne=Array.isArray(oe.value)?oe.value:[oe.value];for(let D=0,Z=ne.length;D<Z;D++){const q=ne[D],ee=y(q),U=E%L;U!==0&&L-U<ee.boundary&&(E+=L-U),oe.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=E,E+=ee.storage}}}const C=E%L;return C>0&&(E+=L-C),v.__size=E,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class l0{constructor(e={}){const{canvas:n=f1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let E=!1,L=0,C=0,A=null,I=-1,J=null;const S=new ft,N=new ft;let oe=null;const ne=new qe(0);let D=0,Z=n.width,q=n.height,ee=1,U=null,j=null;const b=new ft(0,0,Z,q),T=new ft(0,0,Z,q);let V=!1;const $=new gf;let P=!1,k=!1,K=null;const te=new lt,se=new $e,ae=new z,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return A===null?ee:1}let O=i;function He(w,B){for(let W=0;W<w.length;W++){const X=w[W],H=n.getContext(X,B);if(H!==null)return H}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ye,!1),O===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),O=He(B,w),O===null)throw He(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let fe,Re,Ae,De,Le,Fe,Qe,R,M,Y,Q,re,ie,ze,Ie,pe,ve,ke,he,ue,Ee,ge,le,de;function be(){fe=new RE(O),Re=new EE(O,fe,e),fe.init(Re),ge=new p2(O,fe,Re),Ae=new f2(O,fe,Re),De=new PE(O),Le=new Qw,Fe=new h2(O,fe,Ae,Le,Re,ge,De),Qe=new TE(x),R=new CE(x),M=new k1(O,Re),le=new SE(O,fe,M,Re),Y=new NE(O,M,De,le),Q=new OE(O,Y,M,De),he=new UE(O,Re,Fe),pe=new wE(Le),re=new Zw(x,Qe,R,fe,Re,le,pe),ie=new M2(x,Le),ze=new e2,Ie=new a2(fe,Re),ke=new yE(x,Qe,R,Ae,Q,p,l),ve=new d2(x,Q,Re),de=new E2(O,De,Re,Ae),ue=new ME(O,fe,De,Re),Ee=new LE(O,fe,De,Re),De.programs=re.programs,x.capabilities=Re,x.extensions=fe,x.properties=Le,x.renderLists=ze,x.shadowMap=ve,x.state=Ae,x.info=De}be();const Ue=new y2(x,O);this.xr=Ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(Z,q,!1))},this.getSize=function(w){return w.set(Z,q)},this.setSize=function(w,B,W=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,q=B,n.width=Math.floor(w*ee),n.height=Math.floor(B*ee),W===!0&&(n.style.width=w+"px",n.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Z*ee,q*ee).floor()},this.setDrawingBufferSize=function(w,B,W){Z=w,q=B,ee=W,n.width=Math.floor(w*W),n.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(b)},this.setViewport=function(w,B,W,X){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,B,W,X),Ae.viewport(S.copy(b).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(T)},this.setScissor=function(w,B,W,X){w.isVector4?T.set(w.x,w.y,w.z,w.w):T.set(w,B,W,X),Ae.scissor(N.copy(T).multiplyScalar(ee).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Ae.setScissorTest(V=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(w=!0,B=!0,W=!0){let X=0;if(w){let H=!1;if(A!==null){const we=A.texture.format;H=we===zx||we===kx||we===Fx}if(H){const we=A.texture.type,Pe=we===Vi||we===Di||we===ff||we===yr||we===Ux||we===Ox,Oe=ke.getClearColor(),Be=ke.getClearAlpha(),Ye=Oe.r,je=Oe.g,Ge=Oe.b;Pe?(g[0]=Ye,g[1]=je,g[2]=Ge,g[3]=Be,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ye,_[1]=je,_[2]=Ge,_[3]=Be,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ze.dispose(),Ie.dispose(),Le.dispose(),Qe.dispose(),R.dispose(),Q.dispose(),le.dispose(),de.dispose(),re.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Sn),Ue.removeEventListener("sessionend",it),K&&(K.dispose(),K=null),Wt.stop()};function ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=De.autoReset,B=ve.enabled,W=ve.autoUpdate,X=ve.needsUpdate,H=ve.type;be(),De.autoReset=w,ve.enabled=B,ve.autoUpdate=W,ve.needsUpdate=X,ve.type=H}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function G(w){const B=w.target;B.removeEventListener("dispose",G),me(B)}function me(w){Se(w),Le.remove(w)}function Se(w){const B=Le.get(w).programs;B!==void 0&&(B.forEach(function(W){re.releaseProgram(W)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,X,H,we){B===null&&(B=Ce);const Pe=H.isMesh&&H.matrixWorld.determinant()<0,Oe=M0(w,B,W,X,H);Ae.setMaterial(X,Pe);let Be=W.index,Ye=1;if(X.wireframe===!0){if(Be=Y.getWireframeAttribute(W),Be===void 0)return;Ye=2}const je=W.drawRange,Ge=W.attributes.position;let vt=je.start*Ye,dn=(je.start+je.count)*Ye;we!==null&&(vt=Math.max(vt,we.start*Ye),dn=Math.min(dn,(we.start+we.count)*Ye)),Be!==null?(vt=Math.max(vt,0),dn=Math.min(dn,Be.count)):Ge!=null&&(vt=Math.max(vt,0),dn=Math.min(dn,Ge.count));const bt=dn-vt;if(bt<0||bt===1/0)return;le.setup(H,X,Oe,W,Be);let ei,ht=ue;if(Be!==null&&(ei=M.get(Be),ht=Ee,ht.setIndex(ei)),H.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*_e()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(H.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),Ae.setLineWidth(Ve*_e()),H.isLineSegments?ht.setMode(O.LINES):H.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else H.isPoints?ht.setMode(O.POINTS):H.isSprite&&ht.setMode(O.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(vt,bt,H.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Zl=Math.min(W.instanceCount,Ve);ht.renderInstances(vt,bt,Zl)}else ht.render(vt,bt)};function Ze(w,B,W){w.transparent===!0&&w.side===Fn&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,qa(w,B,W),w.side=Yi,w.needsUpdate=!0,qa(w,B,W),w.side=Fn):qa(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),m=Ie.get(W),m.init(),v.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const X=new Set;return w.traverse(function(H){const we=H.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Oe=we[Pe];Ze(Oe,W,H),X.add(Oe)}else Ze(we,W,H),X.add(we)}),v.pop(),m=null,X},this.compileAsync=function(w,B,W=null){const X=this.compile(w,B,W);return new Promise(H=>{function we(){if(X.forEach(function(Pe){Le.get(Pe).currentProgram.isReady()&&X.delete(Pe)}),X.size===0){H(w);return}setTimeout(we,10)}fe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let nt=null;function Lt(w){nt&&nt(w)}function Sn(){Wt.stop()}function it(){Wt.start()}const Wt=new e0;Wt.setAnimationLoop(Lt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){nt=w,Ue.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},Ue.addEventListener("sessionstart",Sn),Ue.addEventListener("sessionend",it),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(B),B=Ue.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,A),m=Ie.get(w,v.length),m.init(),v.push(m),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(te),k=this.localClippingEnabled,P=pe.init(this.clippingPlanes,k),y=ze.get(w,d.length),y.init(),d.push(y),Gn(w,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(U,j),this.info.render.frame++,P===!0&&pe.beginShadows();const W=m.state.shadowsArray;if(ve.render(W,w,B),P===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1)&&ke.render(y,w),m.setupLights(x._useLegacyLights),B.isArrayCamera){const X=B.cameras;for(let H=0,we=X.length;H<we;H++){const Pe=X[H];Tf(y,w,Pe,Pe.viewport)}}else Tf(y,w,B);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,B),le.resetDefaultState(),I=-1,J=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Gn(w,B,W,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){X&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const Pe=Q.update(w),Oe=w.material;Oe.visible&&y.push(w,Pe,Oe,W,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const Pe=Q.update(w),Oe=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ae.copy(Pe.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(Oe)){const Be=Pe.groups;for(let Ye=0,je=Be.length;Ye<je;Ye++){const Ge=Be[Ye],vt=Oe[Ge.materialIndex];vt&&vt.visible&&y.push(w,Pe,vt,W,ae.z,Ge)}}else Oe.visible&&y.push(w,Pe,Oe,W,ae.z,null)}}const we=w.children;for(let Pe=0,Oe=we.length;Pe<Oe;Pe++)Gn(we[Pe],B,W,X)}function Tf(w,B,W,X){const H=w.opaque,we=w.transmissive,Pe=w.transparent;m.setupLightsView(W),P===!0&&pe.setGlobalState(x.clippingPlanes,W),we.length>0&&S0(H,we,B,W),X&&Ae.viewport(S.copy(X)),H.length>0&&$a(H,B,W),we.length>0&&$a(we,B,W),Pe.length>0&&$a(Pe,B,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function S0(w,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const we=Re.isWebGL2;K===null&&(K=new Ar(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Da:Vi,minFilter:gr,samples:we?4:0})),x.getDrawingBufferSize(se),we?K.setSize(se.x,se.y):K.setSize(bl(se.x),bl(se.y));const Pe=x.getRenderTarget();x.setRenderTarget(K),x.getClearColor(ne),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Oe=x.toneMapping;x.toneMapping=Gi,$a(w,W,X),Fe.updateMultisampleRenderTarget(K),Fe.updateRenderTargetMipmap(K);let Be=!1;for(let Ye=0,je=B.length;Ye<je;Ye++){const Ge=B[Ye],vt=Ge.object,dn=Ge.geometry,bt=Ge.material,ei=Ge.group;if(bt.side===Fn&&vt.layers.test(X.layers)){const ht=bt.side;bt.side=Jt,bt.needsUpdate=!0,bf(vt,W,X,dn,bt,ei),bt.side=ht,bt.needsUpdate=!0,Be=!0}}Be===!0&&(Fe.updateMultisampleRenderTarget(K),Fe.updateRenderTargetMipmap(K)),x.setRenderTarget(Pe),x.setClearColor(ne,D),x.toneMapping=Oe}function $a(w,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,we=w.length;H<we;H++){const Pe=w[H],Oe=Pe.object,Be=Pe.geometry,Ye=X===null?Pe.material:X,je=Pe.group;Oe.layers.test(W.layers)&&bf(Oe,B,W,Be,Ye,je)}}function bf(w,B,W,X,H,we){w.onBeforeRender(x,B,W,X,H,we),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,B,W,X,w,we),H.transparent===!0&&H.side===Fn&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,w,we),H.side=Yi,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,w,we),H.side=Fn):x.renderBufferDirect(W,B,X,H,w,we),w.onAfterRender(x,B,W,X,H,we)}function qa(w,B,W){B.isScene!==!0&&(B=Ce);const X=Le.get(w),H=m.state.lights,we=m.state.shadowsArray,Pe=H.state.version,Oe=re.getParameters(w,H.state,we,B,W),Be=re.getProgramCacheKey(Oe);let Ye=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?R:Qe).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",G),Ye=new Map,X.programs=Ye);let je=Ye.get(Be);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Pe)return Cf(w,Oe),je}else Oe.uniforms=re.getUniforms(w),w.onBuild(W,Oe,x),w.onBeforeCompile(Oe,x),je=re.acquireProgram(Oe,Be),Ye.set(Be,je),X.uniforms=Oe.uniforms;const Ge=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),Cf(w,Oe),X.needsLights=w0(w),X.lightsStateVersion=Pe,X.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function Af(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Ko.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Cf(w,B){const W=Le.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function M0(w,B,W,X,H){B.isScene!==!0&&(B=Ce),Fe.resetTextureUnits();const we=B.fog,Pe=X.isMeshStandardMaterial?B.environment:null,Oe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi,Be=(X.isMeshStandardMaterial?R:Qe).get(X.envMap||Pe),Ye=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ge=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,dn=!!W.morphAttributes.color;let bt=Gi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=x.toneMapping);const ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=ei!==void 0?ei.length:0,Ve=Le.get(X),Zl=m.state.lights;if(P===!0&&(k===!0||w!==J)){const Mn=w===J&&X.id===I;pe.setState(X,w,Mn)}let ut=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Zl.state.version||Ve.outputColorSpace!==Oe||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Be||X.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Ye||Ve.vertexTangents!==je||Ve.morphTargets!==Ge||Ve.morphNormals!==vt||Ve.morphColors!==dn||Ve.toneMapping!==bt||Re.isWebGL2===!0&&Ve.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Ve.__version=X.version);let Ji=Ve.currentProgram;ut===!0&&(Ji=qa(X,B,H));let Rf=!1,zs=!1,Ql=!1;const kt=Ji.getUniforms(),er=Ve.uniforms;if(Ae.useProgram(Ji.program)&&(Rf=!0,zs=!0,Ql=!0),X.id!==I&&(I=X.id,zs=!0),Rf||J!==w){kt.setValue(O,"projectionMatrix",w.projectionMatrix),kt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Mn=kt.map.cameraPosition;Mn!==void 0&&Mn.setValue(O,ae.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&kt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,zs=!0,Ql=!0)}if(H.isSkinnedMesh){kt.setOptional(O,H,"bindMatrix"),kt.setOptional(O,H,"bindMatrixInverse");const Mn=H.skeleton;Mn&&(Re.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),kt.setValue(O,"boneTexture",Mn.boneTexture,Fe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(kt.setOptional(O,H,"batchingTexture"),kt.setValue(O,"batchingTexture",H._matricesTexture,Fe));const Jl=W.morphAttributes;if((Jl.position!==void 0||Jl.normal!==void 0||Jl.color!==void 0&&Re.isWebGL2===!0)&&he.update(H,W,Ji),(zs||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,kt.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(er.envMap.value=Be,er.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),zs&&(kt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&E0(er,Ql),we&&X.fog===!0&&ie.refreshFogUniforms(er,we),ie.refreshMaterialUniforms(er,X,ee,q,K),Ko.upload(O,Af(Ve),er,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ko.upload(O,Af(Ve),er,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&kt.setValue(O,"center",H.center),kt.setValue(O,"modelViewMatrix",H.modelViewMatrix),kt.setValue(O,"normalMatrix",H.normalMatrix),kt.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Mn=X.uniformsGroups;for(let ec=0,T0=Mn.length;ec<T0;ec++)if(Re.isWebGL2){const Nf=Mn[ec];de.update(Nf,Ji),de.bind(Nf,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function E0(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function w0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,B,W){Le.get(w.texture).__webglTexture=B,Le.get(w.depthTexture).__webglTexture=W;const X=Le.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const W=Le.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,W=0){A=w,L=B,C=W;let X=!0,H=null,we=!1,Pe=!1;if(w){const Be=Le.get(w);Be.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):Be.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):Be.__hasExternalTextures&&Fe.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);const Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const je=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[B])?H=je[B][W]:H=je[B],we=!0):Re.isWebGL2&&w.samples>0&&Fe.useMultisampledRTT(w)===!1?H=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[W]:H=je,S.copy(w.viewport),N.copy(w.scissor),oe=w.scissorTest}else S.copy(b).multiplyScalar(ee).floor(),N.copy(T).multiplyScalar(ee).floor(),oe=V;if(Ae.bindFramebuffer(O.FRAMEBUFFER,H)&&Re.drawBuffers&&X&&Ae.drawBuffers(w,H),Ae.viewport(S),Ae.scissor(N),Ae.setScissorTest(oe),we){const Be=Le.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,W)}else if(Pe){const Be=Le.get(w.texture),Ye=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,W||0,Ye)}I=-1},this.readRenderTargetPixels=function(w,B,W,X,H,we,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){Ae.bindFramebuffer(O.FRAMEBUFFER,Oe);try{const Be=w.texture,Ye=Be.format,je=Be.type;if(Ye!==zn&&ge.convert(Ye)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=je===Da&&(fe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&fe.has("EXT_color_buffer_float"));if(je!==Vi&&ge.convert(je)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===ci&&(Re.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&W>=0&&W<=w.height-H&&O.readPixels(B,W,X,H,ge.convert(Ye),ge.convert(je),we)}finally{const Be=A!==null?Le.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(w,B,W=0){const X=Math.pow(2,-W),H=Math.floor(B.image.width*X),we=Math.floor(B.image.height*X);Fe.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,w.x,w.y,H,we),Ae.unbindTexture()},this.copyTextureToTexture=function(w,B,W,X=0){const H=B.image.width,we=B.image.height,Pe=ge.convert(W.format),Oe=ge.convert(W.type);Fe.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,H,we,Pe,Oe,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,Pe,Oe,B.image),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,B,W,X,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(w.max.x-w.min.x),Pe=Math.round(w.max.y-w.min.y),Oe=w.max.z-w.min.z+1,Be=ge.convert(X.format),Ye=ge.convert(X.type);let je;if(X.isData3DTexture)Fe.setTexture3D(X,0),je=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Fe.setTexture2DArray(X,0),je=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Ge=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=O.getParameter(O.UNPACK_SKIP_PIXELS),bt=O.getParameter(O.UNPACK_SKIP_ROWS),ei=O.getParameter(O.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[H]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(je,H,B.x,B.y,B.z,we,Pe,Oe,Be,Ye,ht.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(je,H,B.x,B.y,B.z,we,Pe,Oe,Be,ht.data):O.texSubImage3D(je,H,B.x,B.y,B.z,we,Pe,Oe,Be,Ye,ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ge),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ei),H===0&&X.generateMipmaps&&O.generateMipmap(je),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,Ae.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===hf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Xl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class w2 extends l0{}w2.prototype.isWebGL1Renderer=!0;class vf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new vf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class T2 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class c0 extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lm=new z,cm=new z,um=new lt,ru=new mf,Uo=new Va;class b2 extends Nt{constructor(e=new It,n=new c0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)lm.fromBufferAttribute(n,r-1),cm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=lm.distanceTo(cm);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;um.copy(r).invert(),ru.copy(e.ray).applyMatrix4(um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new z,f=new z,h=new z,p=new z,g=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=d,E=v-1;x<E;x+=g){const L=_.getX(x),C=_.getX(x+1);if(u.fromBufferAttribute(m,L),f.fromBufferAttribute(m,C),ru.distanceSqToSegment(u,f,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(p);I<e.near||I>e.far||n.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=d,E=v-1;x<E;x+=g){if(u.fromBufferAttribute(m,x),f.fromBufferAttribute(m,x+1),ru.distanceSqToSegment(u,f,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(p);C<e.near||C>e.far||n.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Zr extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new lt,cd=new mf,Oo=new Va,Fo=new z;class Js extends Nt{constructor(e=new It,n=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;dm.copy(r).invert(),cd.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,y=g;_<y;_++){const m=u.getX(_);Fo.fromBufferAttribute(h,m),fm(Fo,m,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,y=g;_<y;_++)Fo.fromBufferAttribute(h,_),fm(Fo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fm(t,e,n,i,r,s,a){const o=cd.distanceSqToPoint(t);if(o<n){const l=new z;cd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class A2 extends en{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class C2{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=i[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const f=i[r],p=i[r+1]-f,g=(a-f)/p;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new $e:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new z,r=[],s=[],a=[],o=new z,l=new lt;for(let g=0;g<=e;g++){const _=g/e;r[g]=this.getTangentAt(_,new z)}s[0]=new z,a[0]=new z;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);f<=u&&(u=f,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),p<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Dt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Dt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],g*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class R2 extends C2{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new $e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,g=u-this.aY;l=p*f-g*h+this.aX,u=p*h+g*f+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _f extends It{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],f=[];let h=e;const p=(n-e)/r,g=new z,_=new $e;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const d=s+m/i*a;g.x=h*Math.cos(d),g.y=h*Math.sin(d),l.push(g.x,g.y,g.z),u.push(0,0,1),_.x=(g.x/n+1)/2,_.y=(g.y/n+1)/2,f.push(_.x,_.y)}h+=p}for(let y=0;y<r;y++){const m=y*(i+1);for(let d=0;d<i;d++){const v=d+m,x=v,E=v+i+1,L=v+i+2,C=v+1;o.push(x,E,C),o.push(E,L,C)}}this.setIndex(o),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _f(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hs extends It{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],h=new z,p=new z,g=[],_=[],y=[],m=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let E=0;d===0&&a===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){const C=L/n;h.x=-e*Math.cos(r+C*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+x*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),m.push(C+E,1-x),v.push(u++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const x=f[d][v+1],E=f[d][v],L=f[d+1][v],C=f[d+1][v+1];(d!==0||a>0)&&g.push(x,E,C),(d!==i-1||l<Math.PI)&&g.push(E,L,C)}this.setIndex(g),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hm extends Lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jx,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yf extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const su=new lt,pm=new z,mm=new z;class u0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gm=new lt,ea=new z,au=new z;class N2 extends u0{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),au.copy(i.position),au.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(au),i.updateMatrixWorld(),r.makeTranslation(-ea.x,-ea.y,-ea.z),gm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}}class xm extends yf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new N2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class L2 extends u0{constructor(){super(new t0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P2 extends yf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new L2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class D2 extends yf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}let I2=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=vm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function vm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);function U2({mode:t="earth"}){const e=Me.useRef(null),n=Me.useRef(t);return Me.useEffect(()=>{n.current=t},[t]),Me.useEffect(()=>{const i=e.current;if(!i)return;const r=new T2;r.fog=new vf(658983,.015);const s=new mn(45,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,2,16);const a=new l0({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.toneMapping=Px,a.toneMappingExposure=1.2,i.appendChild(a.domElement);const o=new xr;r.add(o);const l=5.2,u=new hs(l,64,64),h=(()=>{const ue=document.createElement("canvas");ue.width=1024,ue.height=512;const Ee=ue.getContext("2d");Ee.fillStyle="#061329",Ee.fillRect(0,0,1024,512),Ee.fillStyle="#0a2e4e",[{x:250,y:180,r:120},{x:300,y:320,r:90},{x:520,y:200,r:100},{x:550,y:300,r:130},{x:750,y:220,r:160},{x:820,y:380,r:80}].forEach(le=>{Ee.beginPath(),Ee.arc(le.x,le.y,le.r,0,Math.PI*2),Ee.fill();for(let de=0;de<6;de++)Ee.beginPath(),Ee.arc(le.x+(Math.random()-.5)*le.r,le.y+(Math.random()-.5)*le.r,le.r*.5,0,Math.PI*2),Ee.fill()}),Ee.fillStyle="#4da8ff";for(let le=0;le<400;le++){const de=Math.random()*1024,be=Math.random()*512;Ee.fillRect(de,be,2,2)}return new A2(ue)})(),p=new hm({map:h,bumpScale:.15,specular:new qe(3368652),shininess:30,emissive:new qe(264984)}),g=new Kt(u,p);o.add(g);const _=new hs(l*1.005,36,18),y=new us({color:5089535,wireframe:!0,transparent:!0,opacity:.12}),m=new Kt(_,y);o.add(m);const d=new hs(l*1.12,48,48),v=new us({color:5089535,transparent:!0,opacity:.18,side:Jt}),x=new Kt(d,v);o.add(x);const E=new xr,L=[{lat:37.77,lng:-122.41,color:16726876,label:"SF Flood"},{lat:34.05,lng:-118.24,color:16747586,label:"LA Fire"},{lat:35.67,lng:139.65,color:16765503,label:"Tokyo Tremor"},{lat:-22.9,lng:-43.17,color:55715,label:"Rio Monitored"}],C=(ue,Ee,ge)=>{const le=(90-ue)*(Math.PI/180),de=(Ee+180)*(Math.PI/180);return new z(-(ge*Math.sin(le)*Math.cos(de)),ge*Math.cos(le),ge*Math.sin(le)*Math.sin(de))},A=[];L.forEach(ue=>{const Ee=C(ue.lat,ue.lng,l*1.01),ge=new hs(.3,16,16),le=new us({color:ue.color,transparent:!0,opacity:.9}),de=new Kt(ge,le);de.position.copy(Ee),E.add(de),A.push({mesh:de,baseColor:ue.color})}),o.add(E);const I=new xr;for(let ue=0;ue<3;ue++){const ge=new R2(0,0,l*1.4+ue*.4,l*1.25+ue*.3,0,Math.PI*2).getPoints(100),le=new It().setFromPoints(ge.map(Ue=>new z(Ue.x,Ue.y,(ue-1)*1.2))),de=new c0({color:5089535,transparent:!0,opacity:.3}),be=new b2(le,de);be.rotation.x=Math.PI/(3+ue),be.rotation.y=ue*.9,I.add(be)}o.add(I);const J=400,S=new It,N=new Float32Array(J*3);for(let ue=0;ue<J;ue++){const Ee=Math.random()*Math.PI*2,ge=Math.acos(Math.random()*2-1),le=l*1.08+Math.random()*2.2;N[ue*3]=le*Math.sin(ge)*Math.cos(Ee),N[ue*3+1]=le*Math.sin(ge)*Math.sin(Ee),N[ue*3+2]=le*Math.cos(ge)}S.setAttribute("position",new Zt(N,3));const oe=new Zr({color:5089535,size:.09,transparent:!0,opacity:.7}),ne=new Js(S,oe);o.add(ne);const D=1800,Z=new It,q=new Float32Array(D*3);for(let ue=0;ue<D;ue++)q[ue*3]=(Math.random()-.5)*45,q[ue*3+1]=(Math.random()-.5)*45,q[ue*3+2]=(Math.random()-.5)*35;Z.setAttribute("position",new Zt(q,3));const ee=new Zr({color:5089535,size:.15,transparent:!0,opacity:0}),U=new Js(Z,ee);r.add(U);const j=new Xa(60,60,32,32),b=new hm({color:26316,emissive:4403,transparent:!0,opacity:0,side:Fn,wireframe:!0}),T=new Kt(j,b);T.rotation.x=-Math.PI/2,T.position.y=-8,r.add(T);const V=1200,$=new It,P=new Float32Array(V*3);for(let ue=0;ue<V;ue++)P[ue*3]=(Math.random()-.5)*40,P[ue*3+1]=-15+Math.random()*35,P[ue*3+2]=(Math.random()-.5)*30;$.setAttribute("position",new Zt(P,3));const k=new Zr({color:16737792,size:.22,transparent:!0,opacity:0}),K=new Js($,k);r.add(K);const te=1500,se=new It,ae=new Float32Array(te*3);for(let ue=0;ue<te;ue++){const Ee=1.5+Math.random()*16,ge=Math.random()*Math.PI*2;ae[ue*3]=Math.cos(ge)*Ee,ae[ue*3+1]=(Math.random()-.5)*5,ae[ue*3+2]=Math.sin(ge)*Ee}se.setAttribute("position",new Zt(ae,3));const Ce=new Zr({color:55715,size:.18,transparent:!0,opacity:0}),_e=new Js(se,Ce);r.add(_e);const O=new _f(.5,8,48),He=new us({color:16726876,side:Fn,transparent:!0,opacity:0,wireframe:!0}),fe=new Kt(O,He);fe.rotation.x=Math.PI/2,fe.position.y=-5,r.add(fe);const Re=600,Ae=new It,De=new Float32Array(Re*3);for(let ue=0;ue<Re;ue++)De[ue*3]=(Math.random()-.5)*35,De[ue*3+1]=-10+Math.random()*30,De[ue*3+2]=(Math.random()-.5)*25;Ae.setAttribute("position",new Zt(De,3));const Le=new Zr({color:16765503,size:.18,transparent:!0,opacity:0}),Fe=new Js(Ae,Le);r.add(Fe);const Qe=new D2(16777215,.6);r.add(Qe);const R=new P2(5089535,2);R.position.set(25,20,25),r.add(R);const M=new xm(16726876,3,40);M.position.set(-12,8,12),r.add(M);const Y=new xm(16777215,0,100);Y.position.set(0,15,10),r.add(Y);let Q=!1,re={x:0,y:0};const ie=ue=>{Q=!0,re={x:ue.clientX,y:ue.clientY}},ze=ue=>{if(!Q)return;const Ee=ue.clientX-re.x,ge=ue.clientY-re.y;o.rotation.y+=Ee*.005,o.rotation.x+=ge*.005,re={x:ue.clientX,y:ue.clientY}},Ie=()=>{Q=!1};window.addEventListener("mousedown",ie),window.addEventListener("mousemove",ze),window.addEventListener("mouseup",Ie);const pe=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",pe);const ve=new I2;let ke;const he=()=>{ke=requestAnimationFrame(he);const ue=ve.getDelta(),Ee=ve.getElapsedTime(),ge=n.current;Q||(o.rotation.y+=ue*.15),A.forEach((de,be)=>{const Ue=1+Math.sin(Ee*5+be*2)*.4;de.mesh.scale.set(Ue,Ue,Ue)}),I.rotation.z+=ue*.08,ne.rotation.y+=ue*.2;const le=ue*2;if(ge==="flood"){ee.opacity=Math.min(.9,ee.opacity+le),b.opacity=Math.min(.65,b.opacity+le);const de=Z.attributes.position.array;for(let be=0;be<D;be++)de[be*3+1]-=ue*30,de[be*3]+=ue*4,de[be*3+1]<-22&&(de[be*3+1]=22);Z.attributes.position.needsUpdate=!0,Math.random()<.03?Y.intensity=8:Y.intensity*=.85,r.fog.color.setHex(267051),s.position.z=Ir.lerp(s.position.z,13,.05)}else ee.opacity=Math.max(0,ee.opacity-le),b.opacity=Math.max(0,b.opacity-le),Y.intensity=0;if(ge==="earthquake"){He.opacity=Math.min(.85,He.opacity+le);const de=1+Ee*2.5%3*1.8;fe.scale.set(de,de,de),s.position.x=(Math.random()-.5)*.15,s.position.y=2+(Math.random()-.5)*.15,r.fog.color.setHex(1706258),s.position.z=Ir.lerp(s.position.z,14,.05)}else He.opacity=Math.max(0,He.opacity-le),ge!=="flood"&&ge!=="wildfire"&&ge!=="cyclone"&&ge!=="recovery"&&(s.position.x=0,s.position.y=2);if(ge==="wildfire"){k.opacity=Math.min(.9,k.opacity+le);const de=$.attributes.position.array;for(let be=0;be<V;be++)de[be*3+1]+=ue*15,de[be*3]+=Math.sin(Ee*2+be)*.08,de[be*3+1]>22&&(de[be*3+1]=-15);$.attributes.position.needsUpdate=!0,r.fog.color.setHex(1706499),s.position.z=Ir.lerp(s.position.z,14,.05)}else k.opacity=Math.max(0,k.opacity-le);if(ge==="cyclone"?(Ce.opacity=Math.min(.9,Ce.opacity+le),_e.rotation.y+=ue*2.5,r.fog.color.setHex(400408),s.position.z=Ir.lerp(s.position.z,13.5,.05)):Ce.opacity=Math.max(0,Ce.opacity-le),ge==="recovery"){Le.opacity=Math.min(.95,Le.opacity+le);const de=Ae.attributes.position.array;for(let be=0;be<Re;be++)de[be*3+1]+=ue*3,de[be*3]+=Math.cos(Ee+be)*.05,de[be*3+1]>18&&(de[be*3+1]=-10);Ae.attributes.position.needsUpdate=!0,r.fog.color.setHex(861213),s.position.z=Ir.lerp(s.position.z,15,.05)}else Le.opacity=Math.max(0,Le.opacity-le);ge==="earth"&&(r.fog.color.setHex(658983),s.position.z=Ir.lerp(s.position.z,16,.05)),a.render(r,s)};return he(),()=>{cancelAnimationFrame(ke),window.removeEventListener("mousedown",ie),window.removeEventListener("mousemove",ze),window.removeEventListener("mouseup",Ie),window.removeEventListener("resize",pe),i.contains(a.domElement)&&i.removeChild(a.domElement),a.dispose()}},[]),c.jsx("div",{ref:e,className:"fixed inset-0 pointer-events-auto z-0 overflow-hidden",style:{touchAction:"none"}})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ne=(t,e)=>{const n=Me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},f)=>Me.createElement("svg",{ref:f,...O2,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${F2(t)}`,o].join(" "),...u},[...e.map(([h,p])=>Me.createElement(h,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=Ne("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=Ne("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=Ne("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=Ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=Ne("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=Ne("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=Ne("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=Ne("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Ne("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=Ne("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Ne("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=Ne("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=Ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=Ne("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Ne("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=Ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=Ne("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=Ne("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Ne("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Ne("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=Ne("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Ne("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Ne("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=Ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=Ne("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Ne("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=Ne("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Ne("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=Ne("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Ne("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=Ne("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=Ne("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=Ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=Ne("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=Ne("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Ne("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=Ne("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=Ne("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Ne("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=Ne("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=Ne("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Ne("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Ne("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=Ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=Ne("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Ne("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=Ne("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=Ne("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=Ne("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=Ne("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=Ne("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Ne("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Ne("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Ne("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=Ne("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function mT({activeMode:t,setActiveMode:e,userRole:n,setUserRole:i,onTriggerAlert:r,onOpenLogin:s,metrics:a,audioEnabled:o,setAudioEnabled:l}){const u=[{id:"earth",label:"Global Earth",icon:$l,activeClass:"bg-info/30 text-info border-info/50 shadow-glow"},{id:"flood",label:"Flood",icon:v0,activeClass:"bg-blue-600/30 text-blue-400 border-blue-400/60 shadow-glow"},{id:"earthquake",label:"Earthquake",icon:Ua,activeClass:"bg-amber-600/30 text-amber-400 border-amber-400/60 shadow-glow"},{id:"wildfire",label:"Wildfire",icon:X2,activeClass:"bg-red-600/30 text-red-400 border-red-400/60 shadow-glow"},{id:"cyclone",label:"Cyclone",icon:_0,activeClass:"bg-emerald-600/30 text-emerald-400 border-emerald-400/60 shadow-glow"},{id:"recovery",label:"Recovery",icon:oT,activeClass:"bg-yellow-500/30 text-yellow-300 border-yellow-300/60 shadow-glow"}],f=["Citizen","Volunteer","Authority","First Responder"];return c.jsxs("header",{className:"fixed top-0 left-0 right-0 h-16 z-40 glass-panel border-b border-white/10 px-4 py-2 flex items-center justify-between gap-3 bg-space-deep/80 backdrop-blur-xl",children:[c.jsxs("div",{className:"flex items-center space-x-3 flex-shrink-0",children:[c.jsxs("div",{className:"relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emergency/30 via-info/30 to-ai/30 border border-white/20 shadow-lg",children:[c.jsx(Kl,{className:"w-5 h-5 text-info animate-pulse"}),c.jsxs("span",{className:"absolute -top-1 -right-1 flex h-2.5 w-2.5",children:[c.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"}),c.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emergency"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("h1",{className:"text-base font-bold tracking-wider text-white uppercase font-heading",children:"AEGIS EARTH"}),c.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-mono tracking-widest bg-ai/20 text-ai border border-ai/30 rounded-full font-semibold",children:"v4.2"})]}),c.jsxs("p",{className:"text-[10px] text-gray-400 font-mono flex items-center gap-1",children:[c.jsx(iT,{className:"w-3 h-3 text-safe animate-pulse"}),"MULTI-DISASTER COMMAND"]})]})]}),c.jsxs("div",{className:"hidden xl:flex items-center bg-space-surface/90 border border-white/10 rounded-full px-4 py-1 space-x-3 text-[11px] font-mono shadow-inner",children:[c.jsxs("div",{className:"flex items-center space-x-1 text-emergency font-semibold",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emergency animate-ping"}),c.jsxs("span",{children:[a.active_reports||1247," Active Reports"]})]}),c.jsx("span",{className:"text-gray-600",children:"|"}),c.jsx("div",{className:"flex items-center space-x-1 text-safe",children:c.jsxs("span",{children:[a.open_shelters||89," Shelters Open"]})}),c.jsx("span",{className:"text-gray-600",children:"|"}),c.jsx("div",{className:"flex items-center space-x-1 text-info",children:c.jsxs("span",{children:[a.deployed_volunteers||3412," Volunteers"]})})]}),c.jsxs("div",{className:"flex items-center space-x-2 flex-shrink-0",children:[c.jsx("div",{className:"flex items-center bg-space-surface/90 border border-white/15 rounded-xl p-1 space-x-1 shadow-lg",children:u.map(h=>{const p=h.icon,g=t===h.id;return c.jsxs("button",{onClick:()=>e(h.id),className:`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${g?`${h.activeClass} scale-105 shadow-md`:"bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-white/10"}`,title:`Morph 3D background to ${h.label} mode`,children:[c.jsx(p,{className:"w-4 h-4 flex-shrink-0"}),c.jsx("span",{className:"hidden lg:inline",children:h.label})]},h.id)})}),c.jsxs("div",{className:"hidden sm:flex items-center bg-space-surface/90 border border-white/15 rounded-xl px-2 py-1 space-x-1 shadow-lg",children:[c.jsx(dT,{className:"w-4 h-4 text-ai"}),c.jsx("select",{value:n,onChange:h=>i(h.target.value),className:"bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer pr-1",children:f.map(h=>c.jsx("option",{value:h,className:"bg-space-deep text-white",children:h},h))})]}),c.jsx("button",{onClick:s,className:"px-3 py-1.5 bg-ai/20 text-ai border border-ai/40 rounded-xl text-xs font-extrabold hover:bg-ai/30 transition-all flex items-center space-x-1 shadow-md",children:c.jsx("span",{children:"LOGIN"})}),c.jsx("button",{onClick:()=>l(!o),className:`p-2 rounded-xl border transition-all ${o?"bg-info/20 text-info border-info/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}`,title:o?"Mute Alert Audio":"Enable Alert Audio",children:o?c.jsx(fT,{className:"w-4 h-4"}):c.jsx(hT,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:r,className:"btn-3d btn-ripple px-3 py-1.5 text-xs font-extrabold bg-gradient-to-r from-emergency to-red-600 text-white rounded-xl shadow-lg border border-emergency/40 flex items-center space-x-1 animate-pulse",children:[c.jsx(Ua,{className:"w-3.5 h-3.5"}),c.jsx("span",{className:"hidden sm:inline",children:"TEST SOS"})]})]})]})}function gT({activeTab:t,setActiveTab:e,userRole:n}){const i=[{id:"dashboard",label:"My Safe Zone",icon:K2,badge:null},{id:"prediction",label:"AI Risk Engine",icon:ud,badge:"AI"},{id:"live-map",label:"3D Disaster Map",icon:Cr,badge:"LIVE"},{id:"alerts",label:"Emergency Alerts",icon:Ua,badge:"3"},{id:"report",label:"Report Incident",icon:Cl,badge:"AR"},{id:"shelters",label:"Shelter Network",icon:ql,badge:null},{id:"relief",label:"Relief Marketplace",icon:hd,badge:null},{id:"evacuation",label:"Evacuation AI",icon:Oa,badge:null},{id:"rescue",label:"Rescue Dispatch",icon:p0,badge:"REQ",roleRestricted:["Authority","First Responder"]},{id:"community",label:"The Pulse Feed",icon:m0,badge:null},{id:"recovery",label:"Damage & Recovery",icon:y0,badge:null},{id:"settings",label:"Settings",icon:g0,badge:null}];return c.jsxs(c.Fragment,{children:[c.jsxs("aside",{className:"hidden md:flex flex-col fixed left-0 top-16 bottom-0 w-64 glass-panel border-r border-white/10 z-30 py-3 px-3 overflow-y-auto space-y-1",children:[c.jsx("div",{className:"px-2 pb-1.5 text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold",children:"NAVIGATION COMMAND"}),i.map(r=>{if(r.roleRestricted&&!r.roleRestricted.includes(n))return null;const s=r.icon,a=t===r.id;return c.jsxs("button",{onClick:()=>e(r.id),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-xs transition-all ${a?"bg-gradient-to-r from-info/25 via-space-surface to-info/10 text-white border border-info/40 shadow-lg font-semibold scale-[1.02]":"text-gray-300 hover:text-white hover:bg-white/10"}`,children:[c.jsxs("div",{className:"flex items-center space-x-2.5 truncate",children:[c.jsx(s,{className:`w-4 h-4 flex-shrink-0 ${a?"text-info":"text-gray-400"}`}),c.jsx("span",{className:"truncate",children:r.label})]}),r.badge&&c.jsx("span",{className:`px-1.5 py-0.5 text-[9px] font-mono rounded font-bold flex-shrink-0 ml-1 ${r.badge==="AI"?"bg-ai/20 text-ai border border-ai/30":r.badge==="LIVE"?"bg-emergency/20 text-emergency border border-emergency/30 animate-pulse":"bg-info/20 text-info border border-info/30"}`,children:r.badge})]},r.id)}),c.jsx("div",{className:"pt-4 px-2 mt-auto",children:c.jsxs("div",{className:"glass-card p-3 rounded-xl border border-white/15 text-center bg-space-deep/80",children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"ROLE PRIVILEGE"}),c.jsx("div",{className:"text-xs font-extrabold text-ai mt-0.5",children:n.toUpperCase()}),c.jsxs("div",{className:"text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1 font-mono",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"SECURE SESSION"]})]})})]}),c.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 z-40 px-2 py-2 flex items-center justify-around overflow-x-auto bg-space-deep/90",children:i.slice(0,5).map(r=>{const s=r.icon,a=t===r.id;return c.jsxs("button",{onClick:()=>e(r.id),className:`flex flex-col items-center p-1.5 rounded-lg text-[10px] font-medium transition-all ${a?"text-info font-bold scale-105":"text-gray-400"}`,children:[c.jsx(s,{className:"w-5 h-5 mb-0.5"}),c.jsx("span",{children:r.label.split(" ")[0]})]},r.id)})})]})}var wf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),T=b.getContext("2d");T.fillRect(0,0,1,1);var V=b.transferToImageBitmap();T.createPattern(V,"no-repeat")}catch{return!1}return!0}();function l(){}function u(b){var T=n.exports.Promise,V=T!==void 0?T:e.Promise;return typeof V=="function"?new V(b):(b(l,l),null)}var f=function(b,T){return{transform:function(V){if(b)return V;if(T.has(V))return T.get(V);var $=new OffscreenCanvas(V.width,V.height),P=$.getContext("2d");return P.drawImage(V,0,0),T.set(V,$),$},clear:function(){T.clear()}}}(o,new Map),h=function(){var b=Math.floor(16.666666666666668),T,V,$={},P=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(k){var K=Math.random();return $[K]=requestAnimationFrame(function te(se){P===se||P+b-1<se?(P=se,delete $[K],k()):$[K]=requestAnimationFrame(te)}),K},V=function(k){$[k]&&cancelAnimationFrame($[k])}):(T=function(k){return setTimeout(k,b)},V=function(k){return clearTimeout(k)}),{frame:T,cancel:V}}(),p=function(){var b,T,V={};function $(P){function k(K,te){P.postMessage({options:K||{},callback:te})}P.init=function(te){var se=te.transferControlToOffscreen();P.postMessage({canvas:se},[se])},P.fire=function(te,se,ae){if(T)return k(te,null),T;var Ce=Math.random().toString(36).slice(2);return T=u(function(_e){function O(He){He.data.callback===Ce&&(delete V[Ce],P.removeEventListener("message",O),T=null,f.clear(),ae(),_e())}P.addEventListener("message",O),k(te,Ce),V[Ce]=O.bind(null,{data:{callback:Ce}})}),T},P.reset=function(){P.postMessage({reset:!0});for(var te in V)V[te](),delete V[te]}}return function(){if(b)return b;if(!i&&s){var P=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([P])))}catch(k){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",k),null}$(b)}return b}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(b,T){return T?T(b):b}function y(b){return b!=null}function m(b,T,V){return _(b&&y(b[T])?b[T]:g[T],V)}function d(b){return b<0?0:Math.floor(b)}function v(b,T){return Math.floor(Math.random()*(T-b))+b}function x(b){return parseInt(b,16)}function E(b){return b.map(L)}function L(b){var T=String(b).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:x(T.substring(0,2)),g:x(T.substring(2,4)),b:x(T.substring(4,6))}}function C(b){var T=m(b,"origin",Object);return T.x=m(T,"x",Number),T.y=m(T,"y",Number),T}function A(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function I(b){var T=b.getBoundingClientRect();b.width=T.width,b.height=T.height}function J(b){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=b,T}function S(b,T,V,$,P,k,K,te,se){b.save(),b.translate(T,V),b.rotate(k),b.scale($,P),b.arc(0,0,1,K,te,se),b.restore()}function N(b){var T=b.angle*(Math.PI/180),V=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-T+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function oe(b,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var V=T.tick++/T.totalTicks,$=T.x+T.random*T.tiltCos,P=T.y+T.random*T.tiltSin,k=T.wobbleX+T.random*T.tiltCos,K=T.wobbleY+T.random*T.tiltSin;if(b.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-V)+")",b.beginPath(),a&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))b.fill(ee(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(k-$)*.1,Math.abs(K-P)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var te=Math.PI/10*T.wobble,se=Math.abs(k-$)*.1,ae=Math.abs(K-P)*.1,Ce=T.shape.bitmap.width*T.scalar,_e=T.shape.bitmap.height*T.scalar,O=new DOMMatrix([Math.cos(te)*se,Math.sin(te)*se,-Math.sin(te)*ae,Math.cos(te)*ae,T.x,T.y]);O.multiplySelf(new DOMMatrix(T.shape.matrix));var He=b.createPattern(f.transform(T.shape.bitmap),"no-repeat");He.setTransform(O),b.globalAlpha=1-V,b.fillStyle=He,b.fillRect(T.x-Ce/2,T.y-_e/2,Ce,_e),b.globalAlpha=1}else if(T.shape==="circle")b.ellipse?b.ellipse(T.x,T.y,Math.abs(k-$)*T.ovalScalar,Math.abs(K-P)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):S(b,T.x,T.y,Math.abs(k-$)*T.ovalScalar,Math.abs(K-P)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var fe=Math.PI/2*3,Re=4*T.scalar,Ae=8*T.scalar,De=T.x,Le=T.y,Fe=5,Qe=Math.PI/Fe;Fe--;)De=T.x+Math.cos(fe)*Ae,Le=T.y+Math.sin(fe)*Ae,b.lineTo(De,Le),fe+=Qe,De=T.x+Math.cos(fe)*Re,Le=T.y+Math.sin(fe)*Re,b.lineTo(De,Le),fe+=Qe;else b.moveTo(Math.floor(T.x),Math.floor(T.y)),b.lineTo(Math.floor(T.wobbleX),Math.floor(P)),b.lineTo(Math.floor(k),Math.floor(K)),b.lineTo(Math.floor($),Math.floor(T.wobbleY));return b.closePath(),b.fill(),T.tick<T.totalTicks}function ne(b,T,V,$,P){var k=T.slice(),K=b.getContext("2d"),te,se,ae=u(function(Ce){function _e(){te=se=null,K.clearRect(0,0,$.width,$.height),f.clear(),P(),Ce()}function O(){i&&!($.width===r.width&&$.height===r.height)&&($.width=b.width=r.width,$.height=b.height=r.height),!$.width&&!$.height&&(V(b),$.width=b.width,$.height=b.height),K.clearRect(0,0,$.width,$.height),k=k.filter(function(He){return oe(K,He)}),k.length?te=h.frame(O):_e()}te=h.frame(O),se=_e});return{addFettis:function(Ce){return k=k.concat(Ce),ae},canvas:b,promise:ae,reset:function(){te&&h.cancel(te),se&&se()}}}function D(b,T){var V=!b,$=!!m(T||{},"resize"),P=!1,k=m(T,"disableForReducedMotion",Boolean),K=s&&!!m(T||{},"useWorker"),te=K?p():null,se=V?A:I,ae=b&&te?!!b.__confetti_initialized:!1,Ce=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_e;function O(fe,Re,Ae){for(var De=m(fe,"particleCount",d),Le=m(fe,"angle",Number),Fe=m(fe,"spread",Number),Qe=m(fe,"startVelocity",Number),R=m(fe,"decay",Number),M=m(fe,"gravity",Number),Y=m(fe,"drift",Number),Q=m(fe,"colors",E),re=m(fe,"ticks",Number),ie=m(fe,"shapes"),ze=m(fe,"scalar"),Ie=!!m(fe,"flat"),pe=C(fe),ve=De,ke=[],he=b.width*pe.x,ue=b.height*pe.y;ve--;)ke.push(N({x:he,y:ue,angle:Le,spread:Fe,startVelocity:Qe,color:Q[ve%Q.length],shape:ie[v(0,ie.length)],ticks:re,decay:R,gravity:M,drift:Y,scalar:ze,flat:Ie}));return _e?_e.addFettis(ke):(_e=ne(b,ke,se,Re,Ae),_e.promise)}function He(fe){var Re=k||m(fe,"disableForReducedMotion",Boolean),Ae=m(fe,"zIndex",Number);if(Re&&Ce)return u(function(Qe){Qe()});V&&_e?b=_e.canvas:V&&!b&&(b=J(Ae),document.body.appendChild(b)),$&&!ae&&se(b);var De={width:b.width,height:b.height};te&&!ae&&te.init(b),ae=!0,te&&(b.__confetti_initialized=!0);function Le(){if(te){var Qe={getBoundingClientRect:function(){if(!V)return b.getBoundingClientRect()}};se(Qe),te.postMessage({resize:{width:Qe.width,height:Qe.height}});return}De.width=De.height=null}function Fe(){_e=null,$&&(P=!1,e.removeEventListener("resize",Le)),V&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,ae=!1)}return $&&!P&&(P=!0,e.addEventListener("resize",Le,!1)),te?te.fire(fe,De,Fe):O(fe,De,Fe)}return He.reset=function(){te&&te.reset(),_e&&_e.reset()},He}var Z;function q(){return Z||(Z=D(null,{useWorker:!0,resize:!0})),Z}function ee(b,T,V,$,P,k,K){var te=new Path2D(b),se=new Path2D;se.addPath(te,new DOMMatrix(T));var ae=new Path2D;return ae.addPath(se,new DOMMatrix([Math.cos(K)*P,Math.sin(K)*P,-Math.sin(K)*k,Math.cos(K)*k,V,$])),ae}function U(b){if(!a)throw new Error("path confetti are not supported in this browser");var T,V;typeof b=="string"?T=b:(T=b.path,V=b.matrix);var $=new Path2D(T),P=document.createElement("canvas"),k=P.getContext("2d");if(!V){for(var K=1e3,te=K,se=K,ae=0,Ce=0,_e,O,He=0;He<K;He+=2)for(var fe=0;fe<K;fe+=2)k.isPointInPath($,He,fe,"nonzero")&&(te=Math.min(te,He),se=Math.min(se,fe),ae=Math.max(ae,He),Ce=Math.max(Ce,fe));_e=ae-te,O=Ce-se;var Re=10,Ae=Math.min(Re/_e,Re/O);V=[Ae,0,0,Ae,-Math.round(_e/2+te)*Ae,-Math.round(O/2+se)*Ae]}return{type:"path",path:T,matrix:V}}function j(b){var T,V=1,$="#000000",P='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?T=b:(T=b.text,V="scalar"in b?b.scalar:V,P="fontFamily"in b?b.fontFamily:P,$="color"in b?b.color:$);var k=10*V,K=""+k+"px "+P,te=new OffscreenCanvas(k,k),se=te.getContext("2d");se.font=K;var ae=se.measureText(T),Ce=Math.ceil(ae.actualBoundingBoxRight+ae.actualBoundingBoxLeft),_e=Math.ceil(ae.actualBoundingBoxAscent+ae.actualBoundingBoxDescent),O=2,He=ae.actualBoundingBoxLeft+O,fe=ae.actualBoundingBoxAscent+O;Ce+=O+O,_e+=O+O,te=new OffscreenCanvas(Ce,_e),se=te.getContext("2d"),se.font=K,se.fillStyle=$,se.fillText(T,He,fe);var Re=1/V;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[Re,0,0,Re,-Ce*Re/2,-_e*Re/2]}}n.exports=function(){return q().apply(this,arguments)},n.exports.reset=function(){q().reset()},n.exports.create=D,n.exports.shapeFromPath=U,n.exports.shapeFromText=j})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),wf,!1);const Jn=wf.exports;wf.exports.create;function xT({isOpen:t,onClose:e,currentProfile:n,onSaveProfile:i}){const[r,s]=Me.useState((n==null?void 0:n.full_name)||"Cmdr. K. Rajesh Sharma"),[a,o]=Me.useState((n==null?void 0:n.email)||"rajesh.sharma@ap.gov.in"),[l,u]=Me.useState((n==null?void 0:n.phone)||"+91 866 247-4999"),[f,h]=Me.useState((n==null?void 0:n.locationName)||"Vijayawada, Andhra Pradesh, India"),[p,g]=Me.useState((n==null?void 0:n.role)||"Authority"),[_,y]=Me.useState(!1);if(Me.useEffect(()=>{n&&(n.full_name&&s(n.full_name),n.email&&o(n.email),n.phone&&u(n.phone),n.locationName&&h(n.locationName),n.role&&g(n.role))},[n]),!t)return null;const m=()=>{y(!0),setTimeout(()=>{h("Detected: Vijayawada, Andhra Pradesh (16.5062° N, 80.6480° E)"),y(!1)},800)},d=v=>{v.preventDefault(),i({full_name:r,email:a,phone:l,locationName:f,role:p}),Jn({particleCount:50,spread:60}),e()};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-deep/90 backdrop-blur-md",children:c.jsxs("div",{className:"glass-panel border-glow-ai rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Kl,{className:"w-6 h-6 text-ai"}),c.jsx("h2",{className:"text-base font-bold text-white font-heading",children:"EASY QUICK LOGIN & AUTO-SAVE"})]}),c.jsx("button",{onClick:e,className:"text-xs text-gray-400 hover:text-white",children:"✕"})]}),c.jsxs("form",{onSubmit:d,className:"space-y-3.5 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1 font-semibold",children:"User Role Privilege"}),c.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Citizen","Volunteer","Authority","First Responder"].map(v=>c.jsx("button",{type:"button",onClick:()=>g(v),className:`p-2 rounded-xl border text-center font-bold transition-all ${p===v?"bg-ai/20 border-ai text-white shadow-md":"bg-white/5 border-white/10 text-gray-400"}`,children:v},v))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1 font-semibold",children:"Full Name"}),c.jsxs("div",{className:"relative",children:[c.jsx(x0,{className:"w-4 h-4 absolute left-3 top-2.5 text-gray-400"}),c.jsx("input",{type:"text",value:r,onChange:v=>s(v.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1 font-semibold",children:"Email Address"}),c.jsxs("div",{className:"relative",children:[c.jsx(Z2,{className:"w-4 h-4 absolute left-3 top-2.5 text-gray-400"}),c.jsx("input",{type:"email",value:a,onChange:v=>o(v.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1 font-semibold",children:"Phone Number"}),c.jsxs("div",{className:"relative",children:[c.jsx(eT,{className:"w-4 h-4 absolute left-3 top-2.5 text-gray-400"}),c.jsx("input",{type:"text",value:l,onChange:v=>u(v.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1 font-semibold",children:"Home Telemetry Zone / Location"}),c.jsxs("div",{className:"flex space-x-2",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Cr,{className:"w-4 h-4 absolute left-3 top-2.5 text-info"}),c.jsx("input",{type:"text",value:f,onChange:v=>h(v.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-info focus:outline-none"})]}),c.jsx("button",{type:"button",onClick:m,className:"px-3 py-2 bg-info/20 text-info border border-info/40 rounded-xl font-bold hover:bg-info/30",children:_?"Locating...":"GPS"})]})]}),c.jsxs("button",{type:"submit",className:"w-full btn-3d py-3 bg-gradient-to-r from-safe via-info to-ai text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase mt-2",children:[c.jsx(Ya,{className:"w-4 h-4"}),c.jsx("span",{children:"SAVE TO MY DEVICE & INITIALIZE"})]})]})]})})}function vT({alert:t,onClose:e,onAutoSOS:n}){const[i,r]=Me.useState(!1);if(!t)return null;const s=()=>{Jn({particleCount:50,spread:60,origin:{y:.6}}),e()},a=()=>{r(!0),n&&n()};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-red-950/90 backdrop-blur-xl screen-emergency-alert overflow-y-auto",children:c.jsxs("div",{className:"max-w-2xl w-full glass-panel border-2 border-emergency rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative text-center",children:[c.jsxs("div",{className:"flex flex-col items-center justify-center space-y-3",children:[c.jsx("div",{className:"relative flex items-center justify-center w-20 h-20 rounded-full bg-emergency/30 border-2 border-emergency animate-bounce shadow-2xl",children:c.jsx(k2,{className:"w-12 h-12 text-emergency animate-pulse"})}),c.jsxs("div",{children:[c.jsxs("span",{className:"px-3 py-1 bg-emergency text-white text-xs font-mono font-black tracking-widest rounded-full uppercase",children:[t.severity||"CRITICAL EMERGENCY"," OVERRIDE"]}),c.jsxs("h2",{className:"text-2xl md:text-4xl font-extrabold text-white uppercase tracking-wider font-heading mt-2",children:[t.type||"MULTI-HAZARD"," DISASTER WARNING"]})]})]}),c.jsxs("div",{className:"bg-space-deep/90 border border-emergency/40 rounded-2xl p-4 md:p-6 text-left space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-gray-300 border-b border-white/10 pb-2",children:[c.jsxs("div",{children:["AFFECTED ZONE: ",c.jsx("span",{className:"text-emergency font-bold",children:t.affected_area||"San Francisco & Bay Sector"})]}),c.jsxs("div",{children:["ETA: ",c.jsx("span",{className:"text-warning font-bold",children:t.eta||"IMMEDIATE IMPACT"})]})]}),c.jsx("p",{className:"text-sm md:text-base text-white font-medium leading-relaxed",children:t.message||"Severe disaster telemetry detected. Take immediate shelter or follow emergency evacuation routes immediately."}),c.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border border-white/10 text-xs text-gray-300 space-y-1",children:[c.jsxs("div",{className:"font-bold text-ai flex items-center gap-1.5",children:[c.jsx(Sf,{className:"w-4 h-4 text-ai"})," RECOMMENDED ACTIONS:"]}),c.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-200",children:[c.jsx("li",{children:"Immediately move to higher ground or assigned 3D shelter."}),c.jsx("li",{children:"Keep emergency comms open and monitor Aegis live telemetry."}),c.jsx("li",{children:"Ensure emergency kit is secured before evacuation."})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("button",{onClick:a,disabled:i,className:`btn-3d py-3.5 px-4 font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg transition-all ${i?"bg-safe/30 text-safe border border-safe/40":"bg-gradient-to-r from-red-600 to-amber-600 text-white border border-red-500 animate-pulse"}`,children:[c.jsx(dd,{className:"w-5 h-5"}),c.jsx("span",{children:i?"AUTO-SOS BROADCAST SENT":"TRIGGER AUTO-SOS BROADCAST"})]}),c.jsxs("button",{onClick:s,className:"btn-3d py-3.5 px-4 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg border border-safe/40",children:[c.jsx(d0,{className:"w-5 h-5"}),c.jsx("span",{children:"ACKNOWLEDGE & CONFIRM SAFE"})]})]}),i&&c.jsxs("div",{className:"text-xs text-safe font-mono animate-pulse flex items-center justify-center gap-2",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-safe animate-ping"}),"GPS Coordinates & Distress Payload Sent to Local Dispatch & Emergency Contacts!"]})]})})}function _T({profile:t,onNavigate:e,alerts:n,reports:i}){const r=(t==null?void 0:t.safety_score)||96,s=(t==null?void 0:t.locationName)||"Vijayawada, Andhra Pradesh, India",a=(t==null?void 0:t.emergency_contacts)||[{name:"AP State Disaster Helpline (APSDRF)",phone:"1070 / +91 863 2377107",relation:"State Emergency Control"},{name:"Vijayawada Collectorate Control Room",phone:"+91 866 2474999",relation:"District Command"},{name:"Govt General Hospital Vijayawada",phone:"+91 94401 88220",relation:"Emergency Medical"}];return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-info flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-safe animate-ping"}),c.jsx("span",{className:"text-xs font-mono text-safe uppercase font-bold tracking-widest",children:"ACTIVE TELEMETRY MONITORED"})]}),c.jsxs("h2",{className:"text-2xl font-bold text-white font-heading",children:["MY SAFE ZONE COMMAND — ",s]}),c.jsx("p",{className:"text-xs text-gray-300",children:"Real-time Krishna river basin flood risk, Prakasam barrage surge, emergency action triggers, and preparedness telemetry."})]}),c.jsxs("div",{className:"glass-card p-4 rounded-xl border border-white/10 flex items-center space-x-4",children:[c.jsx("div",{className:"relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-safe/20 to-info/20 border border-safe/40 shadow-inner",children:c.jsxs("span",{className:"text-xl font-extrabold text-white font-mono",children:[r,"%"]})}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400 uppercase",children:"SAFETY PREPAREDNESS SCORE"}),c.jsx("div",{className:"text-xs font-bold text-safe",children:"HIGHLY PROTECTED"}),c.jsx("div",{className:"text-[10px] text-gray-400 mt-0.5",children:"Contacts verified • Shelter pre-registered"})]})]})]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{label:"REPORT INCIDENT",icon:Cl,color:"from-emergency to-red-600",action:()=>e("report")},{label:"FIND NEARBY SHELTER",icon:ql,color:"from-info to-blue-600",action:()=>e("shelters")},{label:"EVACUATION ROUTE",icon:Oa,color:"from-warning to-amber-600",action:()=>e("evacuation")},{label:"VOLUNTEER MISSIONS",icon:Ef,color:"from-ai to-purple-600",action:()=>e("relief")}].map((o,l)=>{const u=o.icon;return c.jsxs("button",{onClick:o.action,className:`btn-3d btn-ripple p-4 bg-gradient-to-r ${o.color} text-white rounded-2xl shadow-lg border border-white/20 text-left space-y-2 group`,children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx(u,{className:"w-6 h-6 text-white group-hover:scale-110 transition-transform"}),c.jsx(z2,{className:"w-4 h-4 opacity-70 group-hover:opacity-100"})]}),c.jsx("div",{className:"text-xs font-extrabold font-heading tracking-wide uppercase",children:o.label})]},l)})}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-white/10 space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx($l,{className:"w-5 h-5 text-emergency"}),c.jsx("h3",{className:"text-sm font-bold text-white uppercase font-heading",children:"VIJAYAWADA RISK METRICS"})]}),c.jsx("span",{className:"text-[10px] font-mono text-warning bg-warning/20 px-2 py-0.5 rounded-full border border-warning/30",children:"ELEVATED"})]}),c.jsx("div",{className:"space-y-3",children:[{type:"Krishna River Flood Risk",level:"72%",status:"Prakasam Barrage Surge (High)",color:"bg-emergency"},{type:"Cyclone & Wind Risk",level:"45%",status:"Bay of Bengal Storm (Watch)",color:"bg-warning"},{type:"Seismic Tremor Risk",level:"12%",status:"Stable Crust (Low Advisory)",color:"bg-safe"}].map((o,l)=>c.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border border-white/10 space-y-1.5",children:[c.jsxs("div",{className:"flex justify-between text-xs",children:[c.jsx("span",{className:"font-semibold text-gray-200",children:o.type}),c.jsx("span",{className:"font-mono font-bold text-white",children:o.level})]}),c.jsx("div",{className:"w-full bg-space-deep h-2 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full ${o.color}`,style:{width:o.level}})}),c.jsx("div",{className:"text-[10px] text-gray-400 font-mono text-right",children:o.status})]},l))})]}),c.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-white/10 space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(B2,{className:"w-5 h-5 text-ai"}),c.jsx("h3",{className:"text-sm font-bold text-white uppercase font-heading",children:"COMMUNITY IMPACT"})]}),c.jsx("span",{className:"text-[10px] font-mono text-ai bg-ai/20 px-2 py-0.5 rounded-full border border-ai/30",children:"LVL 4 RESCUER"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center",children:[c.jsxs("div",{className:"glass-card p-3 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-2xl font-extrabold text-ai font-mono",children:"280"}),c.jsx("div",{className:"text-[10px] font-mono text-gray-400 uppercase mt-0.5",children:"PEOPLE HELPED"})]}),c.jsxs("div",{className:"glass-card p-3 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-2xl font-extrabold text-safe font-mono",children:"24"}),c.jsx("div",{className:"text-[10px] font-mono text-gray-400 uppercase mt-0.5",children:"MISSIONS COMPLETED"})]})]}),c.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border border-white/10 space-y-2",children:[c.jsxs("div",{className:"text-xs font-bold text-white flex items-center justify-between",children:[c.jsx("span",{children:"CURRENT MISSION ASSIGNMENT"}),c.jsx("span",{className:"text-[10px] text-info font-mono",children:"EN ROUTE"})]}),c.jsx("p",{className:"text-xs text-gray-300",children:"APSDRF 10th Battalion — Clean drinking water distribution & power rescue boat deployment at Singh Nagar, Vijayawada."})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-white/10 space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(dd,{className:"w-5 h-5 text-safe"}),c.jsx("h3",{className:"text-sm font-bold text-white uppercase font-heading",children:"EMERGENCY HELPLINES"})]}),c.jsx("button",{onClick:()=>e("settings"),className:"text-[10px] font-mono text-info hover:underline",children:"+ EDIT CONTACTS"})]}),c.jsx("div",{className:"space-y-2",children:a.map((o,l)=>c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold text-white",children:o.name}),c.jsxs("div",{className:"text-[10px] text-gray-400",children:[o.relation," • ",o.phone]})]}),c.jsxs("a",{href:`tel:${o.phone}`,className:"px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-lg text-xs font-bold hover:bg-safe/30 flex items-center gap-1",children:[c.jsx(dd,{className:"w-3 h-3"}),c.jsx("span",{children:"DIAL"})]})]},l))})]})]})]})}function yT(){const[t,e]=Me.useState("flood"),n=[{id:"flood",title:"72% Chance of Severe Atmospheric River Flooding",timeframe:"Within Next 48 Hours",confidence:91,severity:"Emergency",reasoning:"AI models detected strong atmospheric river moisture transport (IVT > 1000 kg/m/s) stalling over coastal river basins during spring high tide surge.",rainfall:"142 mm / 24h",wind:"42 knots SE",temp:"14°C",seismic:"0.1 Mag ambient",timeline:[{hour:"0h",risk:35},{hour:"12h",risk:65},{hour:"24h",risk:92},{hour:"36h",risk:78},{hour:"48h",risk:40}]},{id:"earthquake",title:"38% Probability of Moderate Tremor (M4.5+)",timeframe:"Within Next 72 Hours",confidence:76,severity:"Watch",reasoning:"Deep strain gauge telemetry along the Hayward Fault indicates micro-seismic swarm migration towards shallow fault asperities.",rainfall:"12 mm",wind:"14 knots",temp:"18°C",seismic:"4.2 Richter foreshock",timeline:[{hour:"0h",risk:20},{hour:"12h",risk:55},{hour:"24h",risk:48},{hour:"36h",risk:30},{hour:"48h",risk:15}]},{id:"wildfire",title:"64% Elevated Wildfire Flame Spread Danger",timeframe:"Next 24 Hours",confidence:88,severity:"Warning",reasoning:"Relative humidity dropping below 12% combined with Diablo wind gusts exceeding 45 mph across dry vegetation canopy.",rainfall:"0 mm",wind:"48 knots NW",temp:"32°C",seismic:"0.0 Mag",timeline:[{hour:"0h",risk:40},{hour:"12h",risk:85},{hour:"24h",risk:90},{hour:"36h",risk:50},{hour:"48h",risk:20}]},{id:"cyclone",title:"15% Tropical Storm System Trajectory Watch",timeframe:"Next 5 Days",confidence:82,severity:"Advisory",reasoning:"Low-pressure tropical wave maintaining warm sea surface temperature energy feed (SST 29.5°C).",rainfall:"45 mm",wind:"28 knots",temp:"26°C",seismic:"0.0 Mag",timeline:[{hour:"0h",risk:10},{hour:"12h",risk:25},{hour:"24h",risk:40},{hour:"36h",risk:35},{hour:"48h",risk:15}]},{id:"industrial",title:"98% Safe Standard Industrial Telemetry",timeframe:"Stable Operations",confidence:96,severity:"Safe",reasoning:"Chemical refinery sensors reporting zero volatile gas leakage and normal pressure vessel containment.",rainfall:"5 mm",wind:"10 knots",temp:"20°C",seismic:"0.0 Mag",timeline:[{hour:"0h",risk:5},{hour:"12h",risk:5},{hour:"24h",risk:5},{hour:"36h",risk:5},{hour:"48h",risk:5}]}],i=n.find(r=>r.id===t)||n[0];return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(ud,{className:"w-5 h-5 text-ai animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-ai font-bold uppercase tracking-widest",children:"NEURAL DISASTER FORECAST SYSTEM"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"AI DISASTER PREDICTION ENGINE"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Real-time satellite radar, seismic fault sensors, and deep learning meteorology models predicting disaster impact before occurrence."})]}),c.jsxs("div",{className:"glass-card p-4 rounded-xl border border-ai/40 flex items-center space-x-4",children:[c.jsx("div",{className:"relative flex items-center justify-center w-16 h-16 rounded-full bg-ai/20 border-2 border-ai shadow-glow",children:c.jsxs("span",{className:"text-xl font-extrabold text-ai font-mono",children:[i.confidence,"%"]})}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400 uppercase",children:"MODEL CONFIDENCE SCORE"}),c.jsx("div",{className:"text-xs font-bold text-white",children:"HIGH PRECISION MODEL"}),c.jsx("div",{className:"text-[10px] text-ai font-mono",children:"100,000+ Data Nodes Synthesized"})]})]})]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-3",children:n.map(r=>{const s=t===r.id;return c.jsxs("button",{onClick:()=>e(r.id),className:`p-3 rounded-2xl border text-left transition-all ${s?"bg-ai/20 border-ai text-white shadow-xl scale-105":"bg-space-surface/80 border-white/10 text-gray-400 hover:border-white/30"}`,children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono mb-1",children:[c.jsx("span",{className:"uppercase font-bold",children:r.id}),c.jsx("span",{className:`px-1.5 py-0.5 rounded font-bold ${r.severity==="Emergency"?"bg-emergency/20 text-emergency":r.severity==="Warning"?"bg-warning/20 text-warning":r.severity==="Watch"?"bg-alert/20 text-alert":"bg-safe/20 text-safe"}`,children:r.severity})]}),c.jsxs("div",{className:"text-lg font-mono font-bold text-white",children:[r.confidence,"%"]}),c.jsx("div",{className:"text-[10px] text-gray-400 truncate mt-1",children:r.title})]},r.id)})}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-4",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-xs font-mono text-ai font-bold uppercase",children:[i.id," INSIGHT"]}),c.jsx("h3",{className:"text-lg font-bold text-white font-heading",children:i.title})]}),c.jsxs("span",{className:"px-3 py-1 bg-emergency/20 text-emergency border border-emergency/40 rounded-full text-xs font-mono font-bold flex items-center gap-1",children:[c.jsx(f0,{className:"w-3.5 h-3.5"}),i.timeframe]})]}),c.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/10 space-y-2",children:[c.jsxs("div",{className:"text-xs font-bold text-ai font-mono flex items-center gap-1.5",children:[c.jsx(ud,{className:"w-4 h-4"})," AI SYNTHESIS & REASONING:"]}),c.jsx("p",{className:"text-xs text-gray-200 leading-relaxed font-sans",children:i.reasoning})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("span",{className:"text-xs font-bold text-white font-heading uppercase flex items-center gap-1.5",children:[c.jsx(cT,{className:"w-4 h-4 text-info"})," PREDICTED RISK SURGE TIMELINE"]}),c.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"PEAK AT +24 HOURS"})]}),c.jsx("div",{className:"grid grid-cols-5 gap-2 pt-2",children:i.timeline.map((r,s)=>c.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[c.jsxs("div",{className:"w-full bg-space-deep h-32 rounded-xl p-1 relative flex items-end border border-white/10",children:[c.jsx("div",{className:`w-full rounded-lg transition-all duration-500 ${r.risk>75?"bg-gradient-to-t from-emergency to-red-400":r.risk>45?"bg-gradient-to-t from-warning to-amber-400":"bg-gradient-to-t from-info to-blue-400"}`,style:{height:`${r.risk}%`}}),c.jsxs("span",{className:"absolute top-2 left-0 right-0 text-center text-[10px] font-mono font-bold text-white",children:[r.risk,"%"]})]}),c.jsx("span",{className:"text-[10px] font-mono text-gray-400 font-semibold",children:r.hour})]},s))})]})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-xs font-bold text-white uppercase font-heading flex items-center gap-1.5 border-b border-white/10 pb-3",children:[c.jsx($l,{className:"w-4 h-4 text-safe"})," REALTIME TELEMETRY FEED"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-400",children:[c.jsx(V2,{className:"w-4 h-4 text-info"}),c.jsx("span",{children:"RAINFALL"})]}),c.jsx("div",{className:"text-sm font-mono font-bold text-white mt-1",children:i.rainfall})]}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-400",children:[c.jsx(_0,{className:"w-4 h-4 text-safe"}),c.jsx("span",{children:"WIND SPEED"})]}),c.jsx("div",{className:"text-sm font-mono font-bold text-white mt-1",children:i.wind})]}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-400",children:[c.jsx(pT,{className:"w-4 h-4 text-warning"}),c.jsx("span",{children:"SEISMIC"})]}),c.jsx("div",{className:"text-sm font-mono font-bold text-white mt-1",children:i.seismic})]}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-400",children:[c.jsx(lT,{className:"w-4 h-4 text-emergency"}),c.jsx("span",{children:"TEMP"})]}),c.jsx("div",{className:"text-sm font-mono font-bold text-white mt-1",children:i.temp})]})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-white/10 space-y-3",children:[c.jsx("div",{className:"text-xs font-bold text-white uppercase font-heading border-b border-white/10 pb-2",children:"10-YEAR HISTORICAL PATTERN ANALYSIS"}),c.jsx("p",{className:"text-[11px] text-gray-300",children:"Bay Area atmospheric river floods recur on average every 3.2 years during La Niña winters."}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10 text-[10px] font-mono text-ai space-y-1",children:[c.jsx("div",{children:"• 2023: 120mm Atmospheric River (Severe)"}),c.jsx("div",{children:"• 2019: 98mm Cresting Surge (Moderate)"}),c.jsx("div",{children:"• 2017: 154mm Flash Flood Event (Critical)"})]})]})]})]})]})}function ST({shelters:t,reports:e,alerts:n}){const[i,r]=Me.useState(!1),[s,a]=Me.useState(24),[o,l]=Me.useState({shelters:!0,dangerZones:!0,rescueTeams:!0,blockedRoads:!0,heatmaps:!0}),[u,f]=Me.useState(null),h=g=>{l(_=>({..._,[g]:!_[g]}))},p=[{id:"m1",type:"shelter",title:"Civic Auditorium Shelter",lat:37.778,lng:-122.417,status:"Open (342/500 Occupied)",color:"bg-safe",icon:ql},{id:"m2",type:"dangerZone",title:"Low-Lying Coastal Flood Zone",lat:37.769,lng:-122.446,status:"Active Inundation - Lvl 4",color:"bg-emergency",icon:v0},{id:"m3",type:"rescueTeam",title:"Alpha Water Rescue Unit",lat:37.768,lng:-122.438,status:"En Route to SOS Mission",color:"bg-info",icon:$l},{id:"m4",type:"blockedRoad",title:"Market St Sector 3 Blocked",lat:37.785,lng:-122.415,status:"Impassable Water & Debris",color:"bg-warning",icon:Ua}];return c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-white/10 shadow-xl",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Cr,{className:"w-5 h-5 text-info animate-bounce"}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-base font-bold text-white font-heading uppercase",children:"3D TACTICAL DISASTER MAP"}),c.jsx("div",{className:"text-[10px] text-gray-400 font-mono",children:"REAL-TIME ELEVATION & HAZARD LAYERS"})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-xs font-mono",children:[c.jsxs("span",{className:"text-gray-400 text-[10px] mr-1 flex items-center gap-1",children:[c.jsx(q2,{className:"w-3.5 h-3.5"})," LAYERS:"]}),[{key:"shelters",label:"Shelters",color:"text-safe"},{key:"dangerZones",label:"Danger Zones",color:"text-emergency"},{key:"rescueTeams",label:"Rescue Teams",color:"text-info"},{key:"blockedRoads",label:"Blocked Roads",color:"text-warning"},{key:"heatmaps",label:"3D Heat Domes",color:"text-ai"}].map(g=>c.jsx("button",{onClick:()=>h(g.key),className:`px-2.5 py-1 rounded-lg border transition-all ${o[g.key]?"bg-white/15 border-white/30 text-white font-bold":"bg-white/5 border-white/10 text-gray-500 line-through"}`,children:c.jsx("span",{className:g.color,children:g.label})},g.key))]})]}),c.jsxs("div",{className:"relative w-full h-[520px] rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl bg-gradient-to-b from-[#091026] via-[#0b1739] to-[#080d21]",children:[c.jsx("div",{className:"absolute inset-0 opacity-20 pointer-events-none",style:{backgroundImage:"radial-gradient(#4da8ff 1px, transparent 1px), radial-gradient(#ff3b5c 1px, transparent 1px)",backgroundSize:"40px 40px",backgroundPosition:"0 0, 20px 20px"}}),o.heatmaps&&c.jsx("div",{className:"absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-emergency/20 blur-3xl animate-pulse pointer-events-none"}),o.heatmaps&&c.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-warning/20 blur-3xl animate-pulse pointer-events-none"}),c.jsx("div",{className:"absolute inset-0 p-8 flex items-center justify-center",children:c.jsxs("div",{className:"relative w-full h-full border border-white/10 rounded-2xl bg-black/30 backdrop-blur-xs flex items-center justify-center",children:[c.jsxs("div",{className:"text-center space-y-2 pointer-events-none",children:[c.jsx("div",{className:"text-xs font-mono text-info tracking-widest uppercase",children:"TACTICAL 3D HIGH-RESOLUTION GRID OPERATIONAL"}),c.jsx("div",{className:"text-sm font-bold text-gray-300",children:"Lat: 37.7749° N | Lng: -122.4194° W | Elev: 16m"})]}),p.map(g=>{if(!o[g.type]&&g.type!=="dangerZone"||g.type==="dangerZone"&&!o.dangerZones)return null;const _=g.icon;return c.jsxs("button",{onClick:()=>f(g),className:`absolute btn-3d p-2 rounded-xl border border-white/30 ${g.color} text-white shadow-2xl flex items-center space-x-2 transition-transform hover:scale-110`,style:{top:g.id==="m1"?"25%":g.id==="m2"?"55%":g.id==="m3"?"40%":"70%",left:g.id==="m1"?"30%":g.id==="m2"?"60%":g.id==="m3"?"45%":"75%"},children:[c.jsx(_,{className:"w-4 h-4 animate-pulse"}),c.jsx("span",{className:"text-[10px] font-mono font-bold hidden sm:inline",children:g.title})]},g.id)})]})}),u&&c.jsxs("div",{className:"absolute bottom-16 left-6 max-w-sm w-full glass-panel border-glow-ai rounded-2xl p-4 space-y-2 shadow-2xl z-30 animate-fadeIn",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-2",children:[c.jsx("div",{className:"text-xs font-bold text-white font-heading",children:u.title}),c.jsx("button",{onClick:()=>f(null),className:"text-xs text-gray-400 hover:text-white",children:"✕"})]}),c.jsx("div",{className:"text-xs text-gray-300",children:u.status}),c.jsxs("div",{className:"text-[10px] font-mono text-ai",children:["Lat: ",u.lat," | Lng: ",u.lng]})]}),c.jsxs("div",{className:"absolute top-4 right-4 glass-card p-3 rounded-2xl border border-white/20 flex items-center space-x-3 shadow-xl",children:[c.jsx(Y2,{className:"w-6 h-6 text-ai animate-spin",style:{animationDuration:"12s"}}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"GLOBAL CONTEXT"}),c.jsx("div",{className:"text-xs font-bold text-white",children:"PACIFIC SECTOR"})]})]}),c.jsxs("div",{className:"absolute bottom-4 left-4 right-4 glass-panel rounded-2xl p-3 flex items-center space-x-4 border border-white/20 shadow-2xl",children:[c.jsxs("button",{onClick:()=>r(!i),className:"p-2 bg-info/20 text-info border border-info/40 rounded-xl hover:bg-info/30 text-xs font-bold flex items-center space-x-1",children:[i?c.jsx(J2,{className:"w-4 h-4"}):c.jsx(tT,{className:"w-4 h-4"}),c.jsx("span",{className:"hidden sm:inline",children:i?"PAUSE":"PLAY 24H EVOLUTION"})]}),c.jsxs("div",{className:"flex-1 flex items-center space-x-3",children:[c.jsx("span",{className:"text-[10px] font-mono text-gray-400",children:"-24 Hours"}),c.jsx("input",{type:"range",min:"0",max:"24",value:s,onChange:g=>a(Number(g.target.value)),className:"flex-1 accent-info cursor-pointer"}),c.jsxs("span",{className:"text-[10px] font-mono text-info font-bold",children:["T+",s,"h"]})]})]})]})]})}function MT({alerts:t,userRole:e,onCreateAlert:n}){const[i,r]=Me.useState(!1),[s,a]=Me.useState("flood"),[o,l]=Me.useState("Emergency"),[u,f]=Me.useState("Bay Area & Coastal Zone 4"),[h,p]=Me.useState("CRITICAL: Atmospheric river cresting riverbank. Move to higher ground immediately."),[g,_]=Me.useState("2 Hours"),y=m=>{m.preventDefault(),n({type:s,severity:o,affected_area:u,message:h,eta:g,status:"active"}),r(!1)};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(H2,{className:"w-5 h-5 text-emergency animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-emergency font-bold uppercase tracking-widest",children:"BROADCAST COMMAND CENTER"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"EMERGENCY ALERT SYSTEM"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Real-time geofenced broadcast warnings categorized by severity: Advisory (blue), Watch (yellow), Warning (orange), Emergency (red)."})]}),(e==="Authority"||e==="First Responder")&&c.jsxs("button",{onClick:()=>r(!0),className:"btn-3d px-4 py-2.5 bg-gradient-to-r from-emergency to-red-600 text-white font-bold text-xs rounded-xl flex items-center space-x-2 shadow-xl border border-emergency/40",children:[c.jsx(nT,{className:"w-4 h-4"}),c.jsx("span",{children:"DISPATCH BROADCAST ALERT"})]})]}),c.jsx("div",{className:"space-y-4",children:t.map(m=>{const d=m.severity==="Emergency",v=m.severity==="Warning",x=m.severity==="Watch",E=d?"border-glow-emergency":v?"border-glow-warning":x?"border-amber-500/40":"border-info/40",L=d?"bg-emergency text-white":v?"bg-warning text-white":x?"bg-alert text-space-deep":"bg-info text-white";return c.jsxs("div",{className:`glass-panel rounded-2xl p-5 border ${E} space-y-3 shadow-xl`,children:[c.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${L}`,children:m.severity}),c.jsxs("h3",{className:"text-base font-bold text-white font-heading uppercase",children:[m.type," DISASTER ALERT"]})]}),c.jsxs("div",{className:"text-xs font-mono text-gray-400 flex items-center gap-2",children:[c.jsx(f0,{className:"w-3.5 h-3.5 text-info"}),c.jsxs("span",{children:["ETA: ",c.jsx("strong",{className:"text-white",children:m.eta})]})]})]}),c.jsxs("div",{className:"text-xs font-mono text-gray-300",children:["AFFECTED AREA: ",c.jsx("strong",{className:"text-white",children:m.affected_area})]}),c.jsx("p",{className:"text-sm text-gray-200 leading-relaxed font-sans",children:m.message}),c.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-gray-400 pt-2 border-t border-white/5",children:[c.jsxs("span",{children:["ISSUED: ",new Date(m.created_at).toLocaleString()]}),c.jsxs("span",{className:"text-safe flex items-center gap-1",children:[c.jsx(Ya,{className:"w-3 h-3"})," VERIFIED BY AEGIS AUTHORITY"]})]})]},m.id)})}),i&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-deep/90 backdrop-blur-md",children:c.jsxs("div",{className:"glass-panel border-glow-emergency rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("h3",{className:"text-base font-bold text-white font-heading flex items-center gap-2",children:[c.jsx(Sf,{className:"w-5 h-5 text-emergency"})," DISPATCH EMERGENCY BROADCAST"]}),c.jsx("button",{onClick:()=>r(!1),className:"text-xs text-gray-400",children:"✕"})]}),c.jsxs("form",{onSubmit:y,className:"space-y-3 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Disaster Category"}),c.jsxs("select",{value:s,onChange:m=>a(m.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white",children:[c.jsx("option",{value:"flood",children:"Flood Inundation"}),c.jsx("option",{value:"earthquake",children:"Seismic Tremor"}),c.jsx("option",{value:"wildfire",children:"Wildfire Propagation"}),c.jsx("option",{value:"cyclone",children:"Cyclone / Storm Surge"}),c.jsx("option",{value:"industrial",children:"Industrial Chemical Event"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Severity Level"}),c.jsxs("select",{value:o,onChange:m=>l(m.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white",children:[c.jsx("option",{value:"Advisory",children:"Advisory (Blue)"}),c.jsx("option",{value:"Watch",children:"Watch (Yellow)"}),c.jsx("option",{value:"Warning",children:"Warning (Orange)"}),c.jsx("option",{value:"Emergency",children:"Emergency (Red)"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Estimated Impact ETA"}),c.jsx("input",{type:"text",value:g,onChange:m=>_(m.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Affected Area / Geofence"}),c.jsx("input",{type:"text",value:u,onChange:m=>f(m.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Emergency Warning Message"}),c.jsx("textarea",{rows:3,value:h,onChange:m=>p(m.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white"})]}),c.jsxs("button",{type:"submit",className:"w-full btn-3d py-3 bg-gradient-to-r from-emergency to-red-600 text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2",children:[c.jsx(fd,{className:"w-4 h-4"}),c.jsx("span",{children:"BROADCAST IMMEDIATELY TO ALL CITIZENS"})]})]})]})})]})}function ET({reports:t,userRole:e,onSubmitReport:n,onConfirmReport:i}){const[r,s]=Me.useState("flood"),[a,o]=Me.useState(4),[l,u]=Me.useState("Rapidly rising floodwaters trapping vehicles near intersection."),[f,h]=Me.useState("Main St & 5th Ave, SF"),[p,g]=Me.useState("https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop"),[_,y]=Me.useState(!1),[m,d]=Me.useState(!1),v=x=>{x.preventDefault(),n({type:r,severity:a,description:l,location:{name:f,lat:37.77,lng:-122.41},photo_url:p}),Jn({particleCount:70,spread:80}),u("")};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Cl,{className:"w-5 h-5 text-emergency animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-emergency font-bold uppercase tracking-widest",children:"CROWD-SOURCED INCIDENT TELEMETRY"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"REALTIME EMERGENCY REPORTING & AR"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Submit verified disaster photos with AR camera spatial overlay, GPS geotagging, and crowd reliability validation."})]}),c.jsxs("div",{className:"glass-card px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-3",children:[c.jsx("div",{className:"text-2xl font-extrabold text-emergency font-mono animate-pulse",children:"1,247"}),c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"ACTIVE GLOBAL REPORTS"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading flex items-center gap-2",children:[c.jsx(Cl,{className:"w-4 h-4 text-info"})," SUBMIT NEW INCIDENT REPORT"]}),c.jsxs("button",{onClick:()=>y(!_),className:"px-3 py-1 bg-ai/20 text-ai border border-ai/40 rounded-xl text-xs font-bold hover:bg-ai/30 flex items-center gap-1",children:[c.jsx(Mf,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:_?"CLOSE AR CAMERA":"OPEN AR CAMERA VIEW"})]})]}),_&&c.jsxs("div",{className:"relative w-full h-56 rounded-2xl overflow-hidden border-2 border-ai shadow-2xl bg-black flex items-center justify-center",children:[c.jsx("img",{src:p,alt:"AR View",className:"w-full h-full object-cover opacity-80"}),c.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-4 flex flex-col justify-between",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-ai font-bold",children:[c.jsx("span",{children:"GPS: 37.7749° N, 122.4194° W"}),c.jsx("span",{className:"animate-ping text-emergency",children:"● RECORDING AR TELEMETRY"})]}),c.jsxs("div",{className:"border border-ai/50 rounded-xl p-2 bg-space-deep/80 text-[10px] font-mono text-white space-y-1",children:[c.jsxs("div",{children:["DISASTER RADAR DETECTED: ",r.toUpperCase()]}),c.jsxs("div",{children:["ESTIMATED SEVERITY SCALE: LEVEL ",a," / 5"]})]}),c.jsx("button",{onClick:()=>{d(!0),y(!1)},className:"w-full py-2 bg-ai text-space-deep font-black text-xs rounded-xl uppercase",children:"CAPTURE AR IMAGE & SNAP GEO-COORDINATES"})]})]}),c.jsxs("form",{onSubmit:v,className:"space-y-4 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Disaster Type"}),c.jsxs("select",{value:r,onChange:x=>s(x.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white",children:[c.jsx("option",{value:"flood",children:"Flood Inundation"}),c.jsx("option",{value:"earthquake",children:"Earthquake Structure Damage"}),c.jsx("option",{value:"wildfire",children:"Wildfire Smoke & Embers"}),c.jsx("option",{value:"cyclone",children:"Cyclone Wind Damage"}),c.jsx("option",{value:"industrial",children:"Industrial Chemical Hazard"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-gray-300 mb-1",children:[c.jsx("span",{children:"Severity Scale (1-5)"}),c.jsxs("span",{className:"text-emergency font-mono font-bold",children:["LVL ",a]})]}),c.jsx("input",{type:"range",min:"1",max:"5",value:a,onChange:x=>o(Number(x.target.value)),className:"w-full accent-emergency cursor-pointer"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Geotagged Location Name"}),c.jsxs("div",{className:"relative",children:[c.jsx(Cr,{className:"w-4 h-4 absolute left-3 top-3 text-info"}),c.jsx("input",{type:"text",value:f,onChange:x=>h(x.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Incident Description"}),c.jsx("textarea",{rows:3,value:l,onChange:x=>u(x.target.value),placeholder:"Describe trapped people, blocked roads, water depth, or immediate dangers...",className:"w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white"})]}),c.jsxs("button",{type:"submit",className:"w-full btn-3d py-3 bg-gradient-to-r from-emergency via-orange-600 to-ai text-white font-extrabold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase",children:[c.jsx(uT,{className:"w-4 h-4"}),c.jsx("span",{children:"TRANSMIT LIVE INCIDENT REPORT TO MAP"})]})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(pd,{className:"w-4 h-4 text-safe"})," ACTIVE REPORTS & CROWD VERIFICATION"]}),c.jsx("div",{className:"space-y-4 max-h-[520px] overflow-y-auto pr-1",children:t.map(x=>{var E;return c.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"px-2 py-0.5 bg-emergency/20 text-emergency border border-emergency/30 rounded font-mono text-[10px] font-bold uppercase",children:["LVL ",x.severity," • ",x.type]}),c.jsx("div",{className:"text-xs font-bold text-white mt-1",children:((E=x.location)==null?void 0:E.name)||"San Francisco"})]}),c.jsxs("div",{className:"text-[10px] font-mono text-ai bg-ai/20 px-2 py-1 rounded-full",children:["RELIABILITY SCORE: ",x.reliability_score||96,"%"]})]}),x.photo_url&&c.jsx("img",{src:x.photo_url,alt:"Incident",className:"w-full h-36 object-cover rounded-xl border border-white/10"}),c.jsx("p",{className:"text-xs text-gray-300",children:x.description}),c.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/5 text-xs",children:[c.jsxs("span",{className:"text-gray-400 font-mono text-[10px]",children:[x.confirmations_count||1," Community Confirmations"]}),c.jsxs("button",{onClick:()=>i(x.id),className:"px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-lg text-xs font-bold hover:bg-safe/30 flex items-center space-x-1",children:[c.jsx(pd,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"I SEE THIS TOO"})]})]})]},x.id)})})]})]})]})}function wT({shelters:t,userRole:e,onPreRegister:n,onUpdateOccupancy:i}){const[r,s]=Me.useState(null),a=o=>{n(o),Jn({particleCount:50,spread:60})};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-safe flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(ql,{className:"w-5 h-5 text-safe animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-safe font-bold uppercase tracking-widest",children:"SMART EVACUATION REFUGE NETWORK"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"SMART SHELTER NETWORK"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Real-time shelter capacity progress rings, AI inflow overflow prediction, facility filters, and instant pre-registration."})]}),c.jsxs("div",{className:"glass-card px-4 py-2 rounded-xl border border-white/10 text-right",children:[c.jsx("div",{className:"text-xs font-mono text-gray-400",children:"TOTAL NETWORK CAPACITY"}),c.jsx("div",{className:"text-xl font-bold text-safe font-mono",children:"850 / 1,200 SPOTS OPEN"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(o=>{var f,h,p,g,_,y;const l=Math.round(o.current_occupancy/o.capacity*100),u=l>=90;return c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4 shadow-xl hover:border-white/30 transition-all",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold text-white font-heading",children:o.name}),c.jsxs("div",{className:"text-xs text-gray-400 flex items-center gap-1 mt-0.5",children:[c.jsx(Cr,{className:"w-3.5 h-3.5 text-info"}),c.jsx("span",{children:o.address})]})]}),c.jsx("span",{className:`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${u?"bg-emergency/20 text-emergency":"bg-safe/20 text-safe"}`,children:u?"FULL":"OPEN"})]}),c.jsxs("div",{className:"space-y-2 bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-gray-300",children:"OCCUPANCY METRICS"}),c.jsxs("span",{className:"font-bold text-white",children:[o.current_occupancy," / ",o.capacity," (",l,"%)"]})]}),c.jsx("div",{className:"w-full bg-space-deep h-3 rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full transition-all duration-500 ${l>80?"bg-emergency":l>50?"bg-warning":"bg-safe"}`,style:{width:`${l}%`}})})]}),c.jsxs("div",{className:"bg-ai/10 border border-ai/30 rounded-xl p-2.5 text-xs text-ai font-mono flex items-center space-x-2",children:[c.jsx(Mf,{className:"w-4 h-4 text-ai flex-shrink-0"}),c.jsxs("span",{children:["AI FORECAST: ",o.ai_prediction||"Optimal capacity available for next 6 hours."]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono",children:[((f=o.facilities)==null?void 0:f.food)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"🍱 FOOD"}),((h=o.facilities)==null?void 0:h.water)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"💧 WATER"}),((p=o.facilities)==null?void 0:p.medical)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"🏥 MEDICAL"}),((g=o.facilities)==null?void 0:g.power)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"⚡ POWER"}),((_=o.facilities)==null?void 0:_.pets)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"🐾 PETS ALLOWED"}),((y=o.facilities)==null?void 0:y.wheelchair)&&c.jsx("span",{className:"px-2 py-0.5 bg-white/10 text-white rounded",children:"♿ ACCESSIBLE"})]}),(e==="Authority"||e==="First Responder")&&c.jsxs("div",{className:"bg-space-deep p-3 rounded-xl border border-white/10 space-y-1",children:[c.jsxs("div",{className:"flex justify-between text-[11px] font-mono text-info",children:[c.jsx("span",{children:"SHELTER MANAGER OVERRIDE SLIDER"}),c.jsxs("span",{children:[o.current_occupancy," Occupants"]})]}),c.jsx("input",{type:"range",min:"0",max:o.capacity,value:o.current_occupancy,onChange:m=>i(o.id,Number(m.target.value)),className:"w-full accent-info cursor-pointer"})]}),c.jsx("div",{className:"flex space-x-3 pt-2",children:c.jsxs("button",{onClick:()=>a(o.id),disabled:u,className:"flex-1 btn-3d py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-lg disabled:opacity-50",children:[c.jsx(Ya,{className:"w-4 h-4"}),c.jsxs("span",{children:["PRE-REGISTER SPOT (",o.pre_registered_count||0," Registered)"]})]})})]},o.id)})})]})}function TT({donations:t,supplyRequests:e,fundraisers:n,onDonateFund:i}){const[r,s]=Me.useState("marketplace"),[a,o]=Me.useState(100),l=u=>{i(u,a,"Emergency Relief Support"),Jn({particleCount:60,spread:70})};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(hd,{className:"w-5 h-5 text-ai animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-ai font-bold uppercase tracking-widest",children:"RESOURCE & VOLUNTEER COORDINATION"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"RELIEF & RESOURCE COMMAND CENTER"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Supply marketplace, AI resource matching, volunteer operations, and transparent crowdfunding telemetry."})]}),c.jsxs("div",{className:"flex bg-space-surface border border-white/10 rounded-xl p-1 space-x-1 text-xs",children:[c.jsx("button",{onClick:()=>s("marketplace"),className:`px-3 py-1.5 rounded-lg font-bold transition-all ${r==="marketplace"?"bg-ai/20 text-ai border border-ai/40":"text-gray-400 hover:text-white"}`,children:"SUPPLY MARKETPLACE"}),c.jsx("button",{onClick:()=>s("volunteers"),className:`px-3 py-1.5 rounded-lg font-bold transition-all ${r==="volunteers"?"bg-info/20 text-info border border-info/40":"text-gray-400 hover:text-white"}`,children:"VOLUNTEER OPS"}),c.jsx("button",{onClick:()=>s("fundraising"),className:`px-3 py-1.5 rounded-lg font-bold transition-all ${r==="fundraising"?"bg-safe/20 text-safe border border-safe/40":"text-gray-400 hover:text-white"}`,children:"CROWDFUNDING"})]})]}),r==="marketplace"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"bg-ai/10 border border-ai/30 rounded-2xl p-4 text-xs text-ai font-mono flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Mf,{className:"w-5 h-5 text-ai animate-spin",style:{animationDuration:"6s"}}),c.jsx("span",{children:"AI AUTO-MATCHER ACTIVE: 14 Supply Donations matched with nearby Urgent Shelter Requests!"})]}),c.jsx("span",{className:"px-3 py-1 bg-ai text-space-deep font-bold rounded-lg text-[10px]",children:"98% MATCH ACCURACY"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(Q2,{className:"w-4 h-4 text-safe"})," AVAILABLE DONATIONS"]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs font-bold text-white",children:[c.jsx("span",{children:"Water Filtration Units & Clean Water"}),c.jsx("span",{className:"text-safe font-mono",children:"AVAILABLE"})]}),c.jsx("div",{className:"text-xs text-gray-300",children:"Quantity: 50 Cases • New Unopened"}),c.jsx("div",{className:"text-[10px] text-gray-400 font-mono",children:"Location: Central Depot Gate B"})]}),c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs font-bold text-white",children:[c.jsx("span",{children:"Emergency Generator (5500W)"}),c.jsx("span",{className:"text-safe font-mono",children:"AVAILABLE"})]}),c.jsx("div",{className:"text-xs text-gray-300",children:"Quantity: 2 Units • Excellent Condition"}),c.jsx("div",{className:"text-[10px] text-gray-400 font-mono",children:"Location: High School Shelter Annex"})]})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(hd,{className:"w-4 h-4 text-emergency"})," URGENT SUPPLY REQUESTS"]}),c.jsx("div",{className:"space-y-3",children:c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs font-bold text-white",children:[c.jsx("span",{children:"Thermal Blankets & First Aid Kits"}),c.jsx("span",{className:"text-emergency font-mono font-bold",children:"CRITICAL URGENCY"})]}),c.jsx("div",{className:"text-xs text-gray-300",children:"Need: 200 Units for Displaced Families"}),c.jsx("div",{className:"text-[10px] text-gray-400 font-mono",children:"Destination: Civic Auditorium Shelter"})]})})]})]})]}),r==="volunteers"&&c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-6",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-4",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-base font-bold text-white font-heading flex items-center gap-2",children:[c.jsx(Ef,{className:"w-5 h-5 text-info"})," VOLUNTEER DISPATCH & SKILLS MATRIX"]}),c.jsx("p",{className:"text-xs text-gray-300",children:"Register your capabilities to receive automated emergency task dispatches."})]}),c.jsx("span",{className:"px-3 py-1 bg-info/20 text-info border border-info/40 rounded-full text-xs font-mono font-bold",children:"3,412 VOLUNTEERS DEPLOYED"})]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:["Water Rescue","Emergency Medical","Mass Cooking","Heavy Driving","Logistics","Psychological First Aid","Radio Comms","Drone Tech"].map(u=>c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs",children:[c.jsx("span",{className:"text-gray-200 font-medium",children:u}),c.jsx(d0,{className:"w-4 h-4 text-safe"})]},u))})]}),r==="fundraising"&&c.jsx("div",{className:"space-y-6",children:n.map(u=>{var h,p;const f=Math.min(100,Math.round(u.raised_amount/u.target_amount*100));return c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-6 shadow-xl",children:[c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-bold text-white font-heading",children:u.title}),c.jsx("span",{className:"px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-full text-xs font-mono font-bold",children:"VERIFIED 501(c)(3)"})]}),c.jsx("p",{className:"text-xs text-gray-300",children:u.description})]}),c.jsxs("div",{className:"space-y-2 bg-white/5 p-4 rounded-xl border border-white/10",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-gray-300",children:"FUNDRAISER PROGRESS"}),c.jsxs("span",{className:"text-safe font-bold",children:["$",(h=u.raised_amount)==null?void 0:h.toLocaleString()," / $",(p=u.target_amount)==null?void 0:p.toLocaleString()," (",f,"%)"]})]}),c.jsx("div",{className:"w-full bg-space-deep h-4 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-safe to-emerald-400 transition-all duration-500",style:{width:`${f}%`}})})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-3 bg-space-surface p-4 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-xs font-bold text-white",children:"DONATE RELIEF FUNDS:"}),[25,50,100,250].map(g=>c.jsxs("button",{onClick:()=>o(g),className:`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${a===g?"bg-safe text-space-deep border-safe font-extrabold":"bg-white/5 text-gray-300 border-white/10"}`,children:["$",g]},g)),c.jsxs("button",{onClick:()=>l(u.id),className:"btn-3d px-5 py-2 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center space-x-1.5 shadow-lg ml-auto",children:[c.jsx($2,{className:"w-4 h-4 fill-current text-space-deep"}),c.jsxs("span",{children:["CONTRIBUTE $",a," NOW"]})]})]})]},u.id)})})]})}function bT(){const[t,e]=Me.useState("Financial District, SF"),[n,i]=Me.useState("High School Gymnasium Shelter"),[r,s]=Me.useState(!1),[a,o]=Me.useState(!1),l=u=>{u.preventDefault(),s(!0),setTimeout(()=>{s(!1),Jn({particleCount:40,spread:50})},1200)};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-info flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Oa,{className:"w-5 h-5 text-info animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-info font-bold uppercase tracking-widest",children:"DYNAMIC HAZARD-AVOIDANCE ROUTING"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"EVACUATION INTELLIGENCE"}),c.jsx("p",{className:"text-xs text-gray-300",children:"AI pathfinding avoiding flooded roads, earthquake collapse zones, and wildfire smoke plumes, ranked by safety index."})]}),c.jsxs("button",{onClick:()=>o(!a),className:`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center space-x-2 ${a?"bg-safe/20 text-safe border-safe/40":"bg-white/10 text-white border-white/20 hover:bg-white/20"}`,children:[c.jsx(h0,{className:"w-4 h-4"}),c.jsx("span",{children:a?"ROUTE SAVED OFFLINE":"CACHE ROUTE FOR OFFLINE USE"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(Oa,{className:"w-4 h-4 text-info"})," EVACUATION PATHFINDER"]}),c.jsxs("form",{onSubmit:l,className:"space-y-4 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Current Origin Location"}),c.jsxs("div",{className:"relative",children:[c.jsx(Cr,{className:"w-4 h-4 absolute left-3 top-3 text-info"}),c.jsx("input",{type:"text",value:t,onChange:u=>e(u.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Target Refuge Shelter"}),c.jsxs("div",{className:"relative",children:[c.jsx(Cr,{className:"w-4 h-4 absolute left-3 top-3 text-safe"}),c.jsx("input",{type:"text",value:n,onChange:u=>i(u.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"})]})]}),c.jsxs("button",{type:"submit",disabled:r,className:"w-full btn-3d py-3 bg-gradient-to-r from-info via-ai to-safe text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase",children:[r?c.jsx(rT,{className:"w-4 h-4 animate-spin"}):c.jsx(aT,{className:"w-4 h-4"}),c.jsx("span",{children:r?"COMPUTING HAZARD PATHWAYS...":"CALCULATE OPTIMAL SAFE ROUTE"})]})]}),c.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border border-white/10 text-[11px] space-y-1.5 text-gray-300",children:[c.jsxs("div",{className:"font-bold text-warning flex items-center gap-1",children:[c.jsx(Ua,{className:"w-3.5 h-3.5"})," DANGER SECTORS AVOIDED:"]}),c.jsx("div",{children:"• Market St Sector 3 (Flooded 3ft water)"}),c.jsx("div",{children:"• 5th Ave Overpass (Structural Crack Warning)"})]})]}),c.jsxs("div",{className:"lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono text-safe font-bold",children:"RECOMMENDED SAFE ROUTE #1"}),c.jsxs("h3",{className:"text-base font-bold text-white font-heading",children:[t," ➔ ",n]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("div",{className:"text-xl font-mono font-extrabold text-safe",children:"96/100"}),c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"SAFETY SCORE"})]})]}),c.jsxs("div",{className:"relative w-full h-64 rounded-2xl bg-black/60 border border-info/40 p-4 flex items-center justify-center overflow-hidden shadow-2xl",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-info/10 via-transparent to-safe/10 pointer-events-none"}),c.jsx("svg",{className:"absolute inset-0 w-full h-full stroke-current text-safe",style:{filter:"drop-shadow(0 0 8px rgba(0,217,163,0.8))"},children:c.jsx("path",{d:"M 50,180 Q 150,50 300,120 T 550,60",fill:"none",strokeWidth:"4",strokeDasharray:"8 4",className:"animate-pulse"})}),c.jsxs("div",{className:"absolute left-10 bottom-10 glass-card p-2 rounded-xl text-[10px] font-mono text-white flex items-center gap-1",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-info animate-ping"})," START: FINANCIAL DISTRICT"]}),c.jsxs("div",{className:"absolute right-10 top-10 glass-card p-2 rounded-xl text-[10px] font-mono text-safe flex items-center gap-1",children:[c.jsx(Ya,{className:"w-3.5 h-3.5 text-safe"})," DEST: REFUGE SHELTER"]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"ESTIMATED TIME"}),c.jsx("div",{className:"text-lg font-mono font-bold text-white",children:"14 MIN"})]}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"TOTAL DISTANCE"}),c.jsx("div",{className:"text-lg font-mono font-bold text-white",children:"4.2 KM"})]}),c.jsxs("div",{className:"bg-white/5 p-3 rounded-xl border border-white/10",children:[c.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:"HAZARD INDEX"}),c.jsx("div",{className:"text-lg font-mono font-bold text-safe",children:"MINIMAL"})]})]})]})]})]})}function AT({missions:t,rescueTeams:e,onUpdateMissionStatus:n}){var a,o;const[i,r]=Me.useState(t[0]||null),s=(l,u)=>{n(l,u),Jn({particleCount:40,spread:50})};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(p0,{className:"w-5 h-5 text-emergency animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-emergency font-bold uppercase tracking-widest",children:"FIRST RESPONDER COMMAND CENTER"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"RESCUE DISPATCH COORDINATION"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Tactical dispatch pipeline, live team tracking, rescue vehicle allocation, and mission thread communications log."})]}),c.jsxs("div",{className:"flex items-center space-x-2 bg-emergency/20 border border-emergency/40 px-4 py-2 rounded-xl text-xs font-mono text-emergency font-bold",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emergency animate-ping"}),c.jsxs("span",{children:[t.length||1," ACTIVE MISSIONS IN PIPELINE"]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(Sf,{className:"w-4 h-4 text-emergency"})," RESCUE MISSION REQUESTS"]}),c.jsx("div",{className:"space-y-3",children:t.map(l=>{var u;return c.jsxs("button",{onClick:()=>r(l),className:`w-full p-4 rounded-xl border text-left transition-all space-y-2 ${(i==null?void 0:i.id)===l.id?"bg-emergency/20 border-emergency text-white shadow-xl":"bg-white/5 border-white/10 text-gray-300 hover:border-white/30"}`,children:[c.jsxs("div",{className:"flex justify-between items-center text-xs",children:[c.jsx("span",{className:"font-bold text-white uppercase",children:l.type}),c.jsx("span",{className:"px-2 py-0.5 bg-emergency text-white rounded font-mono text-[10px] font-bold",children:l.priority})]}),c.jsx("div",{className:"text-xs text-gray-300",children:((u=l.location)==null?void 0:u.address)||"Low-Lying Coastal Sector"}),c.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-gray-400",children:[c.jsxs("span",{children:["Status: ",c.jsx("strong",{className:"text-info",children:l.status})]}),c.jsx("span",{children:new Date(l.created_at).toLocaleTimeString()})]})]},l.id)})})]}),i&&c.jsxs("div",{className:"lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-6",children:[c.jsxs("div",{className:"flex justify-between items-start border-b border-white/10 pb-4",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-xs font-mono text-emergency font-bold",children:["DISPATCH MISSION #",i.id]}),c.jsx("h3",{className:"text-lg font-bold text-white font-heading",children:i.type}),c.jsx("div",{className:"text-xs text-gray-400",children:(a=i.location)==null?void 0:a.address})]}),c.jsxs("span",{className:"px-3 py-1 bg-info/20 text-info border border-info/40 rounded-full text-xs font-mono font-bold",children:["STAGE: ",i.status]})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs font-bold text-white font-mono uppercase",children:"MISSION PIPELINE STATUS"}),c.jsx("div",{className:"grid grid-cols-5 gap-1 text-[10px] font-mono",children:["Assigned","En Route","On Scene","Rescue in Progress","Complete"].map(l=>{const u=i.status===l;return c.jsx("button",{onClick:()=>s(i.id,l),className:`p-2 rounded-lg border text-center transition-all ${u?"bg-emergency text-white font-bold border-emergency shadow-lg":"bg-white/5 border-white/10 text-gray-400 hover:text-white"}`,children:l},l)})})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"text-xs font-bold text-info font-mono flex items-center gap-1.5",children:[c.jsx(Ef,{className:"w-4 h-4"})," ASSIGNED RESCUE TEAM"]}),c.jsx("div",{className:"text-sm font-bold text-white",children:"Alpha Water Rescue Unit"}),c.jsx("div",{className:"text-xs text-gray-300",children:"Members: Elena Rostova, Capt. Mark Miller, Dave Kim"})]}),c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"text-xs font-bold text-safe font-mono flex items-center gap-1.5",children:[c.jsx(Oa,{className:"w-4 h-4"})," DEPLOYED TACTICAL ASSETS"]}),c.jsx("div",{className:"text-xs text-gray-300",children:"• Rigid Evacuation Watercraft"}),c.jsx("div",{className:"text-xs text-gray-300",children:"• Thermal Imaging Drone & Comms"})]})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs font-bold text-white font-mono uppercase",children:"TACTICAL MISSION LOG & COMMS"}),c.jsx("div",{className:"bg-space-deep p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono max-h-40 overflow-y-auto",children:(o=i.mission_log)==null?void 0:o.map((l,u)=>c.jsxs("div",{className:"flex space-x-3 text-gray-300",children:[c.jsx("span",{className:"text-info",children:l.time}),c.jsxs("span",{children:["➔ ",l.entry]})]},u))})]})]})]})]})}function CT({posts:t,userRole:e,onPostMessage:n,onUpvotePost:i}){const[r,s]=Me.useState(""),[a,o]=Me.useState("all"),l=u=>{u.preventDefault(),r.trim()&&(n({event_type:e==="Authority"?"official_announcement":"community_update",content:r,location:"Local Sector",user_id:"usr_001"}),Jn({particleCount:40,spread:50}),s(""))};return c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(m0,{className:"w-5 h-5 text-ai animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-ai font-bold uppercase tracking-widest",children:"THE PULSE • REAL-TIME COMMUNITY INTELLIGENCE STREAM"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"COMMUNITY FEED"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Live updates from citizens, verified authority announcements, shelter updates, and volunteer mission logs."})]})}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(fd,{className:"w-4 h-4 text-ai"})," BROADCAST UPDATE TO COMMUNITY"]}),c.jsxs("form",{onSubmit:l,className:"space-y-3 text-xs",children:[c.jsx("textarea",{rows:4,value:r,onChange:u=>s(u.target.value),placeholder:"Share safe routes, shelter updates, resource availability, or emergency warnings...",className:"w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white focus:border-ai focus:outline-none"}),c.jsxs("button",{type:"submit",className:"w-full btn-3d py-2.5 bg-gradient-to-r from-ai to-info text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2",children:[c.jsx(fd,{className:"w-4 h-4"}),c.jsx("span",{children:"POST UPDATE TO PULSE STREAM"})]})]})]}),c.jsx("div",{className:"lg:col-span-2 space-y-4",children:t.map(u=>{const f=u.event_type==="official_announcement";return c.jsxs("div",{className:`glass-panel rounded-2xl p-5 border space-y-3 shadow-xl ${f?"border-glow-emergency bg-emergency/10":"border-white/10"}`,children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-white/10 pb-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[f?c.jsxs("span",{className:"px-2.5 py-0.5 bg-emergency text-white rounded-full font-mono text-[10px] font-extrabold flex items-center gap-1",children:[c.jsx(Kl,{className:"w-3 h-3"})," OFFICIAL ANNOUNCEMENT"]}):c.jsx("span",{className:"px-2.5 py-0.5 bg-ai/20 text-ai rounded-full font-mono text-[10px] font-bold",children:"COMMUNITY UPDATE"}),c.jsx("span",{className:"text-xs text-gray-400 font-mono",children:u.location})]}),c.jsx("span",{className:"text-[10px] font-mono text-gray-400",children:new Date(u.created_at).toLocaleTimeString()})]}),c.jsx("p",{className:"text-xs md:text-sm text-gray-200 leading-relaxed",children:u.content}),u.photo_url&&c.jsx("img",{src:u.photo_url,alt:"Feed media",className:"w-full h-48 object-cover rounded-xl border border-white/10"}),c.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/5 text-xs",children:[c.jsxs("button",{onClick:()=>i(u.id),className:"flex items-center space-x-1.5 px-3 py-1 bg-white/5 text-gray-300 rounded-lg hover:text-white hover:bg-white/10 transition-all font-mono",children:[c.jsx(pd,{className:"w-3.5 h-3.5 text-safe"}),c.jsxs("span",{children:[u.upvotes||0," Upvotes"]})]}),c.jsxs("button",{className:"flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white text-xs font-mono",children:[c.jsx(sT,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Share"})]})]})]},u.id)})})]})]})}function RT({damageAssessments:t,onSubmitDamage:e}){const[n,i]=Me.useState("Sunset District Sector 4"),[r,s]=Me.useState("Flood Inundation & Structural"),[a,o]=Me.useState(4),[l,u]=Me.useState("$45,000"),f=p=>{p.preventDefault(),e({location:n,damage_type:r,severity:a,estimated_cost:l,status:"pending_review"}),Jn({particleCount:50,spread:60})},h=()=>{const p=JSON.stringify({claim_id:`INS_${Date.now()}`,policy_holder:"Cmdr. Alex Vance",location:n,damageType:r,estimatedCost:l,timestamp:new Date().toISOString()},null,2),g=new Blob([p],{type:"application/json"}),_=URL.createObjectURL(g),y=document.createElement("a");y.href=_,y.download=`Aegis_Insurance_Claim_${Date.now()}.json`,y.click()};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-safe flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(y0,{className:"w-5 h-5 text-safe animate-pulse"}),c.jsx("span",{className:"text-xs font-mono text-safe font-bold uppercase tracking-widest",children:"POST-DISASTER RECOVERY & DAMAGE ESTIMATION"})]}),c.jsx("h2",{className:"text-2xl font-bold text-white font-heading",children:"DAMAGE ASSESSMENT & RECOVERY"}),c.jsx("p",{className:"text-xs text-gray-300",children:"AI structural damage cost estimator, resource gap telemetry, exportable insurance claims, and recovery progress tracking."})]}),c.jsxs("button",{onClick:h,className:"btn-3d px-4 py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center space-x-2 shadow-xl",children:[c.jsx(h0,{className:"w-4 h-4"}),c.jsx("span",{children:"EXPORT STRUCTURED INSURANCE CLAIM"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(W2,{className:"w-4 h-4 text-safe"})," SUBMIT DAMAGE REPORT"]}),c.jsxs("form",{onSubmit:f,className:"space-y-3 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Property Sector / Location"}),c.jsx("input",{type:"text",value:n,onChange:p=>i(p.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Damage Category"}),c.jsx("input",{type:"text",value:r,onChange:p=>s(p.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"AI Estimated Repair Cost"}),c.jsx("input",{type:"text",value:l,onChange:p=>u(p.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]}),c.jsx("button",{type:"submit",className:"w-full btn-3d py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase",children:c.jsx("span",{children:"TRANSMIT DAMAGE ASSESSOR REPORT"})})]})]}),c.jsx("div",{className:"lg:col-span-2 space-y-6",children:c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2",children:[c.jsx(j2,{className:"w-4 h-4 text-info"})," RESOURCE GAP ANALYSIS (REAL-TIME NEED VS DELIVERED)"]}),c.jsx("div",{className:"space-y-3",children:[{item:"Thermal Blankets",needed:500,delivered:120,unit:"Units"},{item:"Emergency Water Rations",needed:2e3,delivered:1600,unit:"Liters"},{item:"Debris Clearance Heavy Trucks",needed:15,delivered:12,unit:"Vehicles"}].map((p,g)=>{const _=Math.round(p.delivered/p.needed*100);return c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[c.jsx("span",{className:"font-bold text-white",children:p.item}),c.jsxs("span",{className:"text-info",children:[p.delivered," / ",p.needed," ",p.unit," (",_,"%)"]})]}),c.jsx("div",{className:"w-full bg-space-deep h-3 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-warning to-safe transition-all duration-500",style:{width:`${_}%`}})})]},g)})})]})})]})]})}function NT({profile:t,userRole:e,setUserRole:n,onSaveProfile:i}){const[r,s]=Me.useState((t==null?void 0:t.full_name)||"Cmdr. Alex Vance"),[a,o]=Me.useState((t==null?void 0:t.phone)||"+1 (555) 019-2834"),[l,u]=Me.useState(!1),f=h=>{h.preventDefault(),i({fullName:r,phone:a}),Jn({particleCount:40,spread:50})};return c.jsxs("div",{className:"space-y-6 max-w-3xl",children:[c.jsxs("div",{className:"glass-panel rounded-2xl p-6 border-l-4 border-ai flex items-center justify-between shadow-xl",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-white font-heading uppercase",children:"SYSTEM & PROFILE SETTINGS"}),c.jsx("p",{className:"text-xs text-gray-300",children:"Manage operational privileges, quiet hours override, and emergency telemetry preferences."})]}),c.jsx(g0,{className:"w-8 h-8 text-ai"})]}),c.jsx("div",{className:"glass-panel rounded-2xl p-6 border border-white/10 space-y-6",children:c.jsxs("form",{onSubmit:f,className:"space-y-4 text-xs",children:[c.jsxs("div",{className:"border-b border-white/10 pb-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2",children:[c.jsx(x0,{className:"w-4 h-4 text-ai"})," COMMAND PROFILE & PRIVILEGE ROLE"]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Full Operator Name"}),c.jsx("input",{type:"text",value:r,onChange:h=>s(h.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-gray-300 block mb-1",children:"Phone Contact"}),c.jsx("input",{type:"text",value:a,onChange:h=>o(h.target.value),className:"w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"})]})]})]}),c.jsxs("div",{className:"border-b border-white/10 pb-4",children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2",children:[c.jsx(Kl,{className:"w-4 h-4 text-safe"})," ACTIVE OPERATIONAL ROLE PRIVILEGE"]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:["Citizen","Volunteer","Authority","First Responder"].map(h=>c.jsx("button",{type:"button",onClick:()=>n(h),className:`p-3 rounded-xl border text-center font-bold text-xs transition-all ${e===h?"bg-safe/20 border-safe text-white shadow-lg":"bg-white/5 border-white/10 text-gray-400"}`,children:h},h))})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2",children:[c.jsx(G2,{className:"w-4 h-4 text-warning"})," QUIET HOURS & OVERRIDE SENSITIVITY"]}),c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-white",children:"Enable Quiet Hours (10 PM - 7 AM)"}),c.jsx("div",{className:"text-[10px] text-gray-400",children:"Critical Emergency (Red) Level Alerts will ALWAYS override quiet hours."})]}),c.jsx("input",{type:"checkbox",checked:l,onChange:h=>u(h.target.checked),className:"w-5 h-5 accent-safe cursor-pointer"})]})]}),c.jsxs("button",{type:"submit",className:"w-full btn-3d py-3 bg-gradient-to-r from-ai to-info text-white font-bold text-xs rounded-xl shadow-xl uppercase flex items-center justify-center space-x-2",children:[c.jsx(Ya,{className:"w-4 h-4"}),c.jsx("span",{children:"SAVE PREFERENCES"})]})]})})]})}const Ft="/api";async function LT(){try{const t=await fetch(`${Ft}/overview`);if(!t.ok)throw new Error("API Error");return await t.json()}catch(t){return console.warn("Backend server offline, returning fallback telemetry:",t),{active_reports:1247,open_shelters:89,deployed_volunteers:3412,active_alerts:3,active_missions:5,total_fundraiser_raised:184500}}}async function PT(){try{const t=await fetch(`${Ft}/alerts`);if(!t.ok)throw new Error("API Error");return await t.json()}catch{return[{id:"alt_001",type:"flood",severity:"Emergency",affected_area:"Bay Area & Coastal Delta",message:"CRITICAL: Rapid atmospheric river cresting riverbanks. High flood risk in next 4 hours.",eta:"4 Hours",status:"active",created_at:new Date().toISOString()},{id:"alt_002",type:"earthquake",severity:"Watch",affected_area:"Hayward Fault Line Sector 4",message:"Seismic activity surge (Mag 4.2). Moderate tremor probability within 24h.",eta:"Immediate",status:"active",created_at:new Date().toISOString()}]}}async function DT(t){try{return await(await fetch(`${Ft}/alerts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch{return{id:`alt_${Date.now()}`,...t,created_at:new Date().toISOString()}}}async function IT(){try{const t=await fetch(`${Ft}/reports`);if(!t.ok)throw new Error("API Error");return await t.json()}catch{return[{id:"rep_101",user_id:"usr_001",type:"flood",location:{lat:37.769,lng:-122.446,name:"Main St & 5th Ave"},severity:4,photo_url:"https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop",description:"Water depth over 3 feet. Cars stranded, storm drain completely blocked.",status:"active",confirmations_count:14,reliability_score:96,created_at:new Date().toISOString()}]}}async function UT(t){try{return await(await fetch(`${Ft}/reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch{return{id:`rep_${Date.now()}`,confirmations_count:1,reliability_score:85,...t}}}async function OT(t,e="usr_001"){try{return await(await fetch(`${Ft}/reports/${t}/confirm`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})})).json()}catch{return{success:!0}}}async function FT(){try{const t=await fetch(`${Ft}/shelters`);if(!t.ok)throw new Error("API Error");return await t.json()}catch{return[{id:"shl_001",name:"Civic Auditorium Safe Haven",address:"99 Grove Street",lat:37.778,lng:-122.417,capacity:500,current_occupancy:342,facilities:{food:!0,water:!0,medical:!0,power:!0,pets:!0,wheelchair:!0},status:"open",pre_registered_count:88,ai_prediction:"Full in 2.5 hours based on current surge rate"},{id:"shl_002",name:"High School Gymnasium Relief Center",address:"1400 Van Ness Ave",lat:37.789,lng:-122.422,capacity:350,current_occupancy:120,facilities:{food:!0,water:!0,medical:!1,power:!0,pets:!1,wheelchair:!0},status:"open",pre_registered_count:35,ai_prediction:"Optimal availability for next 6 hours"}]}}async function kT(t,e="usr_001"){try{return await(await fetch(`${Ft}/shelters/${t}/pre-register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e})})).json()}catch{return{success:!0}}}async function zT(t,e){try{return await(await fetch(`${Ft}/shelters/${t}/capacity`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({current_occupancy:e})})).json()}catch{return{id:t,current_occupancy:e}}}async function BT(){try{return await(await fetch(`${Ft}/rescue-missions`)).json()}catch{return[]}}async function jT(t,e){try{return await(await fetch(`${Ft}/rescue-missions/${t}/status`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e})})).json()}catch{return{id:t,status:e}}}async function HT(){try{return await(await fetch(`${Ft}/community-feed`)).json()}catch{return[]}}async function GT(t){try{return await(await fetch(`${Ft}/community-feed/${t}/upvote`,{method:"POST"})).json()}catch{return{success:!0}}}async function VT(t){try{return await(await fetch(`${Ft}/community-feed`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch{return{id:`feed_${Date.now()}`,upvotes:0,...t}}}async function WT(){try{return await(await fetch(`${Ft}/fundraisers`)).json()}catch{return[]}}async function XT(t,e,n){try{return await(await fetch(`${Ft}/fundraisers/${t}/donate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e,message:n})})).json()}catch{return{success:!0}}}async function YT(t){try{return await(await fetch(`${Ft}/damage-assessments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch{return{id:`dmg_${Date.now()}`,...t}}}function $T(){const[t,e]=Me.useState("dashboard"),[n,i]=Me.useState("earth"),[r,s]=Me.useState("Authority"),[a,o]=Me.useState(!0),[l,u]=Me.useState(!1),[f,h]=Me.useState(null),[p,g]=Me.useState({active_reports:1251,open_shelters:89,deployed_volunteers:3428,active_alerts:2,active_missions:1}),[_,y]=Me.useState([]),[m,d]=Me.useState([]),[v,x]=Me.useState([]),[E,L]=Me.useState([]),[C,A]=Me.useState([]),[I,J]=Me.useState([]),[S,N]=Me.useState(()=>{const $=localStorage.getItem("aegis_user_profile");if($)try{return JSON.parse($)}catch{}return{full_name:"Cmdr. K. Rajesh Sharma",email:"rajesh.sharma@ap.gov.in",phone:"+91 866 247-4999",role:"Authority",locationName:"Vijayawada, Andhra Pradesh, India",emergency_contacts:[{name:"AP State Disaster Helpline (APSDRF)",phone:"1070 / +91 863 2377107",relation:"State Emergency Control"},{name:"Vijayawada Collectorate Control Room",phone:"+91 866 2474999",relation:"District Command"},{name:"Govt General Hospital Vijayawada",phone:"+91 94401 88220",relation:"Emergency Medical"}],safety_score:96}});Me.useEffect(()=>{localStorage.setItem("aegis_user_profile",JSON.stringify(S))},[S]),Me.useEffect(()=>{const $=async()=>{const[k,K,te,se,ae,Ce,_e]=await Promise.all([LT(),PT(),IT(),FT(),BT(),HT(),WT()]);k&&g(k),K&&y(K),te&&d(te),se&&x(se),ae&&L(ae),Ce&&A(Ce),_e&&J(_e)};$();const P=setInterval($,1e4);return()=>clearInterval(P)},[]);const oe=()=>{h({type:n==="earth"?"flood":n,severity:"Emergency",affected_area:"Vijayawada Krishna River Sector & Singh Nagar",message:"CRITICAL EMERGENCY: Prakasam Barrage discharge cresting 4.5 Lakh Cusecs. High flood inundation warning for low-lying areas. Evacuate to Indira Gandhi Municipal Stadium immediately!",eta:"30 Minutes"})},ne=async $=>{const P=await DT($);y(k=>[P,...k])},D=async $=>{const P=await UT($);d(k=>[P,...k]),g(k=>({...k,active_reports:k.active_reports+1}))},Z=async $=>{await OT($),d(P=>P.map(k=>k.id===$?{...k,confirmations_count:(k.confirmations_count||1)+1}:k))},q=async $=>{await kT($),x(P=>P.map(k=>k.id===$?{...k,pre_registered_count:(k.pre_registered_count||0)+1}:k))},ee=async($,P)=>{await zT($,P),x(k=>k.map(K=>K.id===$?{...K,current_occupancy:P}:K))},U=async($,P)=>{await jT($,P),L(k=>k.map(K=>K.id===$?{...K,status:P}:K))},j=async $=>{const P=await VT($);A(k=>[P,...k])},b=async $=>{await GT($),A(P=>P.map(k=>k.id===$?{...k,upvotes:(k.upvotes||0)+1}:k))},T=async($,P,k)=>{await XT($,P,k),J(K=>K.map(te=>te.id===$?{...te,raised_amount:(te.raised_amount||0)+P}:te))},V=async $=>{await YT($)};return c.jsxs("div",{className:"relative min-h-screen bg-[#0A0E27] text-[#F8F9FC] font-sans selection:bg-[#4DA8FF] selection:text-[#0A0E27] overflow-x-hidden",children:[c.jsx(U2,{mode:n}),c.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen pointer-events-none",children:[c.jsx("div",{className:"pointer-events-auto",children:c.jsx(mT,{activeMode:n,setActiveMode:i,userRole:r,setUserRole:s,onTriggerAlert:oe,onOpenLogin:()=>u(!0),metrics:p,audioEnabled:a,setAudioEnabled:o})}),c.jsxs("div",{className:"flex flex-1 pt-16 pb-16 md:pb-6",children:[c.jsx("div",{className:"pointer-events-auto",children:c.jsx(gT,{activeTab:t,setActiveTab:e,userRole:r})}),c.jsxs("main",{className:"flex-1 md:pl-64 p-4 md:p-6 pointer-events-auto max-w-7xl mx-auto w-full",children:[t==="dashboard"&&c.jsx(_T,{profile:S,onNavigate:e,alerts:_,reports:m}),t==="prediction"&&c.jsx(yT,{}),t==="live-map"&&c.jsx(ST,{shelters:v,reports:m,alerts:_}),t==="alerts"&&c.jsx(MT,{alerts:_,userRole:r,onCreateAlert:ne}),t==="report"&&c.jsx(ET,{reports:m,userRole:r,onSubmitReport:D,onConfirmReport:Z}),t==="shelters"&&c.jsx(wT,{shelters:v,userRole:r,onPreRegister:q,onUpdateOccupancy:ee}),t==="relief"&&c.jsx(TT,{donations:[],supplyRequests:[],fundraisers:I,onDonateFund:T}),t==="evacuation"&&c.jsx(bT,{}),t==="rescue"&&c.jsx(AT,{missions:E,rescueTeams:[],onUpdateMissionStatus:U}),t==="community"&&c.jsx(CT,{posts:C,userRole:r,onPostMessage:j,onUpvotePost:b}),t==="recovery"&&c.jsx(RT,{damageAssessments:[],onSubmitDamage:V}),t==="settings"&&c.jsx(NT,{profile:S,userRole:r,setUserRole:s,onSaveProfile:$=>N(P=>({...P,...$}))})]})]})]}),c.jsx(xT,{isOpen:l,onClose:()=>u(!1),currentProfile:S,onSaveProfile:$=>N(P=>({...P,...$}))}),c.jsx(vT,{alert:f,onClose:()=>h(null),onAutoSOS:()=>{console.log("AUTO SOS Triggered")}})]})}ou.createRoot(document.getElementById("root")).render(c.jsx(H0.StrictMode,{children:c.jsx($T,{})}));
