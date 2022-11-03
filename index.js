// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(t){return t===y||t===p}function d(t,n,r,e){return l(t)||b(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return d(t,[0,0],1,0)}),"assign",d);var v,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,_=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",m=s&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return A.call(t);r=t[w],i=w,n=null!=(o=t)&&_.call(o,i);try{t[w]=void 0}catch(n){return A.call(t)}return e=A.call(t),n?t[w]=r:delete t[w],e}:function(t){return A.call(t)},U="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(U&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,I=v,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;j=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),r=n,t=(O&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var F,T=j,N="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,n,r;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),r=n,t=(N&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P,x=F,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),r=n,t=(L&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var k,Y={uint16:P,uint8:x};(k=new Y.uint16(1))[0]=4660;var C,M,q=52===new Y.uint8(k.buffer)[0],z=!0===q?1:0,B=new T(1),D=new I(B.buffer);function J(t){var n=function(t){return B[0]=t,D[z]}(t);return(n=(2146435072&n)>>>20)-1023|0}!0===q?(C=1,M=0):(C=0,M=1);var K,Q,R={HIGH:C,LOW:M},X=new T(1),Z=new I(X.buffer),$=R.HIGH,tt=R.LOW;function nt(t,n){return X[0]=n,t[0]=Z[$],t[1]=Z[tt],t}!0===q?(K=1,Q=0):(K=0,Q=1);var rt={HIGH:K,LOW:Q},et=new T(1),ot=new I(et.buffer),it=rt.HIGH,ut=rt.LOW,at=[0,0],ft=[0,0];function ct(t,n,r,e){var o,i;return 0===t||l(t)||b(t)?(n[e]=t,n[e+r]=0,n):(d(t,at,1,0),i=J(at[0])+at[1]+1,function(t,n){1===arguments.length?nt([0,0],t):nt(t,n)}(ft,at[0]),o=ft[0],o&=2148532223,t=function(t,n){return ot[it]=t,ot[ut]=n,et[0]}(o|=1071644672,ft[1]),n[e]=t,n[e+r]=i,n)}function lt(t){return ct(t,[0,0],1,0)}return c(lt,"assign",ct),lt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).frexp=n();
//# sourceMappingURL=index.js.map
