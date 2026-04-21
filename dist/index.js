"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=f(function(M,t){
var E=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-assert-is-infinite/dist'),_=require('@stdlib/number-float64-base-normalize/dist').assign,l=require('@stdlib/number-float64-base-exponent/dist'),m=require('@stdlib/number-float64-base-to-words/dist'),o=require('@stdlib/number-float64-base-from-words/dist'),x=2148532223,A=1071644672,n=[0,0],s=[0,0];function R(r,e,u,i){var a,q;return r===0||E(r)||S(r)?(e[i]=r,e[i+u]=0,e):(_(r,n,1,0),q=l(n[0])+n[1]+1,m.assign(n[0],s,1,0),a=s[0],a&=x,a|=A,r=o(a,s[1]),e[i]=r,e[i+u]=q,e)}t.exports=R
});var c=f(function(O,p){
var W=v();function X(r){return W(r,[0,0],1,0)}p.exports=X
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),h=v();d(g,"assign",h);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
