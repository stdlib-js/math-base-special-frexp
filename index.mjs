// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.1-esm/index.mjs";import{assign as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-normalize@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.2.1-esm/index.mjs";var d=2148532223,o=1071644672,a=[0,0],l=[0,0];function j(s,j,b,p){var f,h;return 0===s||e(s)||t(s)?(j[p]=s,j[p+b]=0,j):(n(s,a,1,0),h=r(a[0])+a[1]+1,i.assign(a[0],l,1,0),f=l[0],f&=d,s=m(f|=o,l[1]),j[p]=s,j[p+b]=h,j)}function b(s){return j(s,[0,0],1,0)}s(b,"assign",j);export{j as assign,b as default};
//# sourceMappingURL=index.mjs.map
