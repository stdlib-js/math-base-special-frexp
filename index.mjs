// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import{assign as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-normalize@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.1.1-esm/index.mjs";var d=[0,0],o=[0,0];function a(s,a,l,j){var b,p;return 0===s||e(s)||t(s)?(a[j]=s,a[j+l]=0,a):(n(s,d,1,0),p=r(d[0])+d[1]+1,i.assign(d[0],o,1,0),b=o[0],b&=2148532223,s=m(b|=1071644672,o[1]),a[j]=s,a[j+l]=p,a)}function l(s){return a(s,[0,0],1,0)}s(l,"assign",a);export{a as assign,l as default};
//# sourceMappingURL=index.mjs.map
