// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-normalize@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@esm/index.mjs";var m=[0,0],d=[0,0];function o(o,a){var l,j;return 0===a||s(a)||t(a)?(o[0]=a,o[1]=0,o):(e(m,a),j=n(m[0])+m[1]+1,r(d,m[0]),l=d[0],l&=2148532223,a=i(l|=1071644672,d[1]),o[0]=a,o[1]=j,o)}function a(s,t){return 1===arguments.length?o([0,0],s):o(s,t)}export{a as default};
//# sourceMappingURL=index.mjs.map