// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,v,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function S(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var _=String.fromCharCode,j=isNaN,E=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,o,a,u,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,p=0;p<r.length;p++)if(l(n=r[p]))u+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function O(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function x(r){return"string"==typeof r}function k(r){var t,e,n;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=O(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,R=V.__lookupGetter__,G=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(R.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var Z=I;function W(r){return r!=r}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X,Y=L(),z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";X=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return z.call(r);e=r[B],o=B,t=null!=(i=r)&&M.call(i,o);try{r[B]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[B]=e:delete r[B],n}:function(r){return z.call(r)};var D,H=X,J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,t,e;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(J&&e instanceof Uint32Array||"[object Uint32Array]"===H(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,tr=D,er=L(),nr=Object.prototype.toString,ir=Object.prototype.hasOwnProperty,or="function"==typeof q?q.toStringTag:"";rr=er&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return nr.call(r);e=r[or],o=or,t=null!=(i=r)&&ir.call(i,o);try{r[or]=void 0}catch(t){return nr.call(r)}return n=nr.call(r),t?r[or]=e:delete r[or],n}:function(r){return nr.call(r)};var ar,cr=rr,lr="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,t,e;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),e=t,r=(lr&&e instanceof Float64Array||"[object Float64Array]"===cr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var pr,sr=ar,yr=L(),gr=Object.prototype.toString,dr=Object.prototype.hasOwnProperty,hr="function"==typeof q?q.toStringTag:"";pr=yr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return gr.call(r);e=r[hr],o=hr,t=null!=(i=r)&&dr.call(i,o);try{r[hr]=void 0}catch(t){return gr.call(r)}return n=gr.call(r),t?r[hr]=e:delete r[hr],n}:function(r){return gr.call(r)};var br,vr=pr,wr="function"==typeof Uint8Array,mr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,t,e;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,256,257]),e=t,r=(wr&&e instanceof Uint8Array||"[object Uint8Array]"===vr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Sr,_r=br,jr=L(),Er=Object.prototype.toString,Fr=Object.prototype.hasOwnProperty,Tr="function"==typeof q?q.toStringTag:"";Sr=jr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Er.call(r);e=r[Tr],o=Tr,t=null!=(i=r)&&Fr.call(i,o);try{r[Tr]=void 0}catch(t){return Er.call(r)}return n=Er.call(r),t?r[Tr]=e:delete r[Tr],n}:function(r){return Er.call(r)};var Ur,Nr=Sr,Or="function"==typeof Uint16Array,xr="function"==typeof Uint16Array?Uint16Array:null,kr="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof xr)return!1;try{t=new xr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Or&&e instanceof Uint16Array||"[object Uint16Array]"===Nr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Ir,Vr={uint16:Ur,uint8:_r};(Ir=new Vr.uint16(1))[0]=4660;var Pr=52===new Vr.uint8(Ir.buffer)[0],$r=!0===Pr?1:0,Cr=new sr(1),Rr=new tr(Cr.buffer);function Gr(r){return Cr[0]=r,Rr[$r]}var Zr,Wr=L(),Lr=Object.prototype.toString,Xr=Object.prototype.hasOwnProperty,Yr="function"==typeof q?q.toStringTag:"";Zr=Wr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Lr.call(r);e=r[Yr],o=Yr,t=null!=(i=r)&&Xr.call(i,o);try{r[Yr]=void 0}catch(t){return Lr.call(r)}return n=Lr.call(r),t?r[Yr]=e:delete r[Yr],n}:function(r){return Lr.call(r)};var zr,Mr=Zr,qr="function"==typeof Float64Array,Br="function"==typeof Float64Array?Float64Array:null,Dr="function"==typeof Float64Array?Float64Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),e=t,r=(qr&&e instanceof Float64Array||"[object Float64Array]"===Mr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Hr=!0===Pr?1:0,Jr=new zr(1),Kr=new tr(Jr.buffer),Qr=Number.NEGATIVE_INFINITY,rt=.6931471803691238,tt=1.9082149292705877e-10,et=1048575;function nt(r){var t,e,n,i,o,a,c,l,u,f,p,s;return 0===r?Qr:W(r)||r<0?NaN:(o=0,(e=Gr(r))<1048576&&(o-=54,e=Gr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(l=614244+(e&=et)&1048576|0)>>20|0,c=(r=function(r,t){return Jr[0]=r,Kr[Hr]=t>>>0,Jr[0]}(r,e|1072693248^l))-1,(et&2+e)<3?0===c?0===o?0:o*rt+o*tt:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*rt-(a-o*tt-c)):(l=e-398458|0,u=440401-e|0,i=(p=(s=(f=c/(2+c))*f)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=n+i,(l|=u)>0?(t=.5*c*c,0===o?c-(t-f*(t+a)):o*rt-(t-(f*(t+a)+o*tt)-c)):0===o?c-f*(c-a):o*rt-(f*(c-a)-o*tt-c))))}var it=Number.POSITIVE_INFINITY;function ot(r,t){return W(r)||W(t)||t<0||t===it?NaN:r<0?Qr:-r*t+nt(t)}return Z(ot,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r){return W(r)||r<0||r===it?(t=NaN,function(){return t}):function(t){return W(t)?NaN:t<0?Qr:-t*r+nt(r)};var t}}),ot},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=t();
//# sourceMappingURL=index.js.map
