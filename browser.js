// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var l=r;function y(t){return t!=t}var p,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,v=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";p=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return d.call(t);n=t[_],i=_,r=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(r){return d.call(t)}return e=d.call(t),r?t[_]=n:delete t[_],e}:function(t){return d.call(t)};var A,s=p,m="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(m&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h,j=A,N="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,NaN]),n=r,t=(N&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?S:function(){throw new Error("not implemented")};var E,F=h,T="function"==typeof Uint8Array,I="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var P,x=E,V="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,r,n;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),n=r,t=(V&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,C={uint16:P,uint8:x};(Y=new C.uint16(1))[0]=4660;var M=52===new C.uint8(Y.buffer)[0],q=!0===M?1:0,z=new F(1),B=new j(z.buffer);function D(t){return z[0]=t,B[q]}var H=!0===M?1:0,J=new F(1),K=new j(J.buffer),L=Number.NEGATIVE_INFINITY,Q=.6931471803691238,R=1.9082149292705877e-10,W=1048575;function X(t){var r,n,e,o,i,a,u,f,c,l,p,b;return 0===t?L:y(t)||t<0?NaN:(i=0,(n=D(t))<1048576&&(i-=54,n=D(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-1023|0,i+=(f=614244+(n&=W)&1048576|0)>>20|0,u=(t=function(t,r){return J[0]=t,K[H]=r>>>0,J[0]}(t,n|1072693248^f))-1,(W&2+n)<3?0===u?0===i?0:i*Q+i*R:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*Q-(a-i*R-u)):(f=n-398458|0,c=440401-n|0,o=(p=(b=(l=u/(2+u))*l)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),a=e+o,(f|=c)>0?(r=.5*u*u,0===i?u-(r-l*(r+a)):i*Q-(r-(l*(r+a)+i*R)-u)):0===i?u-l*(u-a):i*Q-(l*(u-a)-i*R-u))))}var Z=Number.POSITIVE_INFINITY;function $(t,r){return y(t)||y(r)||r<0||r===Z?NaN:t<0?L:-t*r+X(r)}function tt(t){return y(t)||t<0||t===Z?(r=NaN,function(){return r}):function(r){return y(r)?NaN:r<0?L:-r*t+X(t)};var r}l($,"factory",{configurable:!1,enumerable:!1,writable:!1,value:tt}),t.default=$,t.factory=tt,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).logpdf={});
//# sourceMappingURL=browser.js.map