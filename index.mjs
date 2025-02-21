// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function d(t,r){return s(t)||s(r)||r<0||r===i?NaN:t<0?e:-t*r+n(r)}function m(t){return s(t)||t<0||t===i?r(NaN):function(i){if(s(i))return NaN;if(i<0)return e;return-i*t+n(t)}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
