"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=t(function(j,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-ln/dist'),c=require('@stdlib/constants-float64-ninf/dist'),a=require('@stdlib/constants-float64-pinf/dist');function p(e,r){return u(e)||u(r)||r<0||r===a?NaN:e<0?c:-e*r+N(r)}n.exports=p
});var q=t(function(k,s){
var F=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-ninf/dist'),g=require('@stdlib/constants-float64-pinf/dist');function P(e){if(o(e)||e<0||e===g)return F(NaN);return r;function r(i){return o(i)?NaN:i<0?I:-(i*e)+y(e)}}s.exports=P
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=f(),R=q();O(v,"factory",R);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
