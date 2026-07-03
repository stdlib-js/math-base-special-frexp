"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=f(function(M,t){
var E=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-assert-is-infinite/dist'),_=require('@stdlib/number-float64-base-normalize/dist').assign,l=require('@stdlib/number-float64-base-exponent/dist'),m=require('@stdlib/number-float64-base-to-words/dist'),o=require('@stdlib/number-float64-base-from-words/dist'),x=2148532223,A=1071644672,s=[0,0],v=[0,0];function R(e,r,i,a){var n,q;return e===0||E(e)||S(e)?(r[a]=e,r[a+i]=0,r):(_(e,s,1,0),q=l(s[0])+s[1]+1,m.assign(s[0],v,1,0),n=v[0],n&=x,n|=A,e=o(n,v[1]),r[a]=e,r[a+i]=q,r)}t.exports=R
});var c=f(function(O,p){
var W=u();function X(e){return W(e,[0,0],1,0)}p.exports=X
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),h=u();d(g,"assign",h);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
