// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,l,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var O,C=Object.prototype,R=C.toString,N=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,G=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var W=O;function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e,r,t){W(e,r,{configurable:!1,enumerable:!1,get:t})}function X(e){return"number"==typeof e}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=U();function B(){return z&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",K=B()?function(e){var r,t,i;if(null==e)return J.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return J.call(e)}return i=J.call(e),r?e[H]=t:delete e[H],i}:function(e){return J.call(e)},Q=Number,ee=Q.prototype.toString,re=B();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ie(e){return X(e)||te(e)}L(ie,"isPrimitive",X),L(ie,"isObject",te);var ne=Number.POSITIVE_INFINITY,ae=Q.NEGATIVE_INFINITY,oe=Math.floor;function ce(e){return e<ne&&e>ae&&oe(r=e)===r;var r}function se(e){return X(e)&&ce(e)}function le(e){return te(e)&&ce(e.valueOf())}function pe(e){return se(e)||le(e)}L(pe,"isPrimitive",se),L(pe,"isObject",le);var ue="function"==typeof Object.defineProperty?Object.defineProperty:null,fe=Object.defineProperty;function ge(e){return"number"==typeof e}function de(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function he(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+de(n):de(n)+e,i&&(e="-"+e)),e}var we=String.prototype.toLowerCase,be=String.prototype.toUpperCase;function ve(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ge(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=he(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=he(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===be.call(e.specifier)?be.call(t):we.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ye(e){return"string"==typeof e}var me=Math.abs,_e=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,Ee=String.prototype.replace,ke=/e\+(\d)$/,xe=/e-(\d)$/,Te=/^(\d+)$/,Ve=/^(\d+)e/,je=/\.0$/,Ie=/\.0*e/,$e=/(\..*[^0])0*e/;function Fe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ge(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":me(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ee.call(t,$e,"$1e"),t=Ee.call(t,Ie,"e"),t=Ee.call(t,je,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ee.call(t,ke,"e+0$1"),t=Ee.call(t,xe,"e-0$1"),e.alternate&&(t=Ee.call(t,Te,"$1."),t=Ee.call(t,Ve,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Se.call(e.specifier)?Se.call(t):_e.call(t)}function Ae(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Oe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ae(i):Ae(i)+e}var Ce=String.fromCharCode,Re=isNaN,Ne=Array.isArray;function Pe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ze(e){var r,t,i,n,a,o,c,s,l;if(!Ne(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ye(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Pe(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Re(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Re(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ve(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Re(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Re(a)?String(i.arg):Ce(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Fe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=he(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Oe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function We(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Le(e){var r,t,i,n;for(t=[],n=0,i=Ge.exec(e);i;)(r=e.slice(n,Ge.lastIndex-i[0].length)).length&&t.push(r),t.push(We(i)),n=Ge.lastIndex,i=Ge.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Me(e){return"string"==typeof e}function Xe(e){var r,t;if(!Me(e))throw new TypeError(Xe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Le(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ze.apply(null,r)}var Ue,ze=Object.prototype,Be=ze.toString,Je=ze.__defineGetter__,Ye=ze.__defineSetter__,qe=ze.__lookupGetter__,De=ze.__lookupSetter__;Ue=function(){try{return ue({},"x",{}),!0}catch(e){return!1}}()?fe:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Be.call(e))throw new TypeError(Xe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Be.call(t))throw new TypeError(Xe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(qe.call(e,r)||De.call(e,r)?(i=e.__proto__,e.__proto__=ze,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Je&&Je.call(e,r,t.get),o&&Ye&&Ye.call(e,r,t.set),e};var He=Ue;function Ke(e,r,t){He(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Qe(e,r,t){He(e,r,{configurable:!1,enumerable:!1,get:t})}function er(e){return"number"==typeof e}var rr=U();function tr(){return rr&&"symbol"==typeof Symbol.toStringTag}var ir=Object.prototype.toString,nr="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof nr?nr.toStringTag:"",or=tr()?function(e){var r,t,i;if(null==e)return ir.call(e);t=e[ar],r=q(e,ar);try{e[ar]=void 0}catch(r){return ir.call(e)}return i=ir.call(e),r?e[ar]=t:delete e[ar],i}:function(e){return ir.call(e)},cr=Number,sr=cr.prototype.toString,lr=tr();function pr(e){return"object"==typeof e&&(e instanceof cr||(lr?function(e){try{return sr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===or(e)))}function ur(e){return er(e)||pr(e)}Ke(ur,"isPrimitive",er),Ke(ur,"isObject",pr);var fr=Number.POSITIVE_INFINITY,gr=cr.NEGATIVE_INFINITY,dr=Math.floor;function hr(e){return e<fr&&e>gr&&dr(r=e)===r;var r}function wr(e){return er(e)&&hr(e)}function br(e){return pr(e)&&hr(e.valueOf())}function vr(e){return wr(e)||br(e)}function yr(e){return wr(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function mr(){var e,r,t,i;if(0===(e=arguments.length)?(r=null,t=null,i=null):1===e?(r=null,t=arguments[0],i=null):2===e?(r=arguments[0],t=arguments[1],i=null):(r=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof mr))return new mr(r,t,i);if(!yr(r))throw new TypeError(Xe("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!yr(t))throw new TypeError(Xe("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!yr(i))throw new TypeError(Xe("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));if(0===i)throw new RangeError(Xe("invalid argument. Third argument cannot be zero. Value: `%s`.",i));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===i?null:i,this}Ke(vr,"isPrimitive",wr),Ke(vr,"isObject",br),Ke(mr,"name","Slice"),Qe(mr.prototype,"start",(function(){return this._start})),Qe(mr.prototype,"stop",(function(){return this._stop})),Qe(mr.prototype,"step",(function(){return this._step})),Ke(mr.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),Ke(mr.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var _r=U(),Sr=Object.prototype.toString,Er="function"==typeof Symbol?Symbol:void 0,kr="function"==typeof Er?Er.toStringTag:"",xr=_r&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return Sr.call(e);t=e[kr],r=q(e,kr);try{e[kr]=void 0}catch(r){return Sr.call(e)}return i=Sr.call(e),r?e[kr]=t:delete e[kr],i}:function(e){return Sr.call(e)},Tr="function"==typeof Object.defineProperty?Object.defineProperty:null,Vr=Object.defineProperty;function jr(e){return"number"==typeof e}function Ir(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function $r(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Ir(n):Ir(n)+e,i&&(e="-"+e)),e}var Fr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function Or(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!jr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=$r(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=$r(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ar.call(e.specifier)?Ar.call(t):Fr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Cr(e){return"string"==typeof e}var Rr=Math.abs,Nr=String.prototype.toLowerCase,Pr=String.prototype.toUpperCase,Zr=String.prototype.replace,Gr=/e\+(\d)$/,Wr=/e-(\d)$/,Lr=/^(\d+)$/,Mr=/^(\d+)e/,Xr=/\.0$/,Ur=/\.0*e/,zr=/(\..*[^0])0*e/;function Br(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!jr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Rr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Zr.call(t,zr,"$1e"),t=Zr.call(t,Ur,"e"),t=Zr.call(t,Xr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Zr.call(t,Gr,"e+0$1"),t=Zr.call(t,Wr,"e-0$1"),e.alternate&&(t=Zr.call(t,Lr,"$1."),t=Zr.call(t,Mr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Pr.call(e.specifier)?Pr.call(t):Nr.call(t)}function Jr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Yr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Jr(i):Jr(i)+e}var qr=String.fromCharCode,Dr=isNaN,Hr=Array.isArray;function Kr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Qr(e){var r,t,i,n,a,o,c,s,l;if(!Hr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Cr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Kr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Dr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Dr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Or(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Dr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Dr(a)?String(i.arg):qr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Br(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=$r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Yr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var et=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function rt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function tt(e){var r,t,i,n;for(t=[],n=0,i=et.exec(e);i;)(r=e.slice(n,et.lastIndex-i[0].length)).length&&t.push(r),t.push(rt(i)),n=et.lastIndex,i=et.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function it(e){return"string"==typeof e}function nt(e){var r,t;if(!it(e))throw new TypeError(nt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[tt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Qr.apply(null,r)}var at,ot=Object.prototype,ct=ot.toString,st=ot.__defineGetter__,lt=ot.__defineSetter__,pt=ot.__lookupGetter__,ut=ot.__lookupSetter__;function ft(){return/^\s*function\s*([^(]*)/i}at=function(){try{return Tr({},"x",{}),!0}catch(e){return!1}}()?Vr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===ct.call(e))throw new TypeError(nt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===ct.call(t))throw new TypeError(nt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(pt.call(e,r)||ut.call(e,r)?(i=e.__proto__,e.__proto__=ot,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&st&&st.call(e,r,t.get),o&&lt&&lt.call(e,r,t.set),e};var gt=/^\s*function\s*([^(]*)/i;at(ft,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:gt});var dt="function"==typeof Object.defineProperty?Object.defineProperty:null,ht=Object.defineProperty;function wt(e){return"number"==typeof e}function bt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function vt(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+bt(n):bt(n)+e,i&&(e="-"+e)),e}var yt=String.prototype.toLowerCase,mt=String.prototype.toUpperCase;function _t(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!wt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=vt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=vt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===mt.call(e.specifier)?mt.call(t):yt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function St(e){return"string"==typeof e}var Et=Math.abs,kt=String.prototype.toLowerCase,xt=String.prototype.toUpperCase,Tt=String.prototype.replace,Vt=/e\+(\d)$/,jt=/e-(\d)$/,It=/^(\d+)$/,$t=/^(\d+)e/,Ft=/\.0$/,At=/\.0*e/,Ot=/(\..*[^0])0*e/;function Ct(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!wt(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Et(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Tt.call(t,Ot,"$1e"),t=Tt.call(t,At,"e"),t=Tt.call(t,Ft,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Tt.call(t,Vt,"e+0$1"),t=Tt.call(t,jt,"e-0$1"),e.alternate&&(t=Tt.call(t,It,"$1."),t=Tt.call(t,$t,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===xt.call(e.specifier)?xt.call(t):kt.call(t)}function Rt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Nt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Rt(i):Rt(i)+e}var Pt=String.fromCharCode,Zt=isNaN,Gt=Array.isArray;function Wt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Lt(e){var r,t,i,n,a,o,c,s,l;if(!Gt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(St(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Wt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Zt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Zt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=_t(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Zt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Zt(a)?String(i.arg):Pt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ct(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=vt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Nt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Mt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ut(e){var r,t,i,n;for(t=[],n=0,i=Mt.exec(e);i;)(r=e.slice(n,Mt.lastIndex-i[0].length)).length&&t.push(r),t.push(Xt(i)),n=Mt.lastIndex,i=Mt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function zt(e){return"string"==typeof e}function Bt(e){var r,t;if(!zt(e))throw new TypeError(Bt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ut(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Lt.apply(null,r)}var Jt,Yt=Object.prototype,qt=Yt.toString,Dt=Yt.__defineGetter__,Ht=Yt.__defineSetter__,Kt=Yt.__lookupGetter__,Qt=Yt.__lookupSetter__;Jt=function(){try{return dt({},"x",{}),!0}catch(e){return!1}}()?ht:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===qt.call(e))throw new TypeError(Bt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===qt.call(t))throw new TypeError(Bt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Kt.call(e,r)||Qt.call(e,r)?(i=e.__proto__,e.__proto__=Yt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Dt&&Dt.call(e,r,t.get),o&&Ht&&Ht.call(e,r,t.set),e};var ei,ri=Jt,ti=U(),ii=Object.prototype.toString,ni="function"==typeof Symbol?Symbol:void 0,ai="function"==typeof ni?ni.toStringTag:"",oi=ti&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return ii.call(e);t=e[ai],r=q(e,ai);try{e[ai]=void 0}catch(r){return ii.call(e)}return i=ii.call(e),r?e[ai]=t:delete e[ai],i}:function(e){return ii.call(e)};ei=Array.isArray?Array.isArray:function(e){return"[object Array]"===oi(e)};var ci=ei;function si(e){return"number"==typeof e}function li(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function pi(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+li(n):li(n)+e,i&&(e="-"+e)),e}var ui=String.prototype.toLowerCase,fi=String.prototype.toUpperCase;function gi(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!si(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=pi(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=pi(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===fi.call(e.specifier)?fi.call(t):ui.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function di(e){return"string"==typeof e}var hi=Math.abs,wi=String.prototype.toLowerCase,bi=String.prototype.toUpperCase,vi=String.prototype.replace,yi=/e\+(\d)$/,mi=/e-(\d)$/,_i=/^(\d+)$/,Si=/^(\d+)e/,Ei=/\.0$/,ki=/\.0*e/,xi=/(\..*[^0])0*e/;function Ti(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!si(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":hi(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=vi.call(t,xi,"$1e"),t=vi.call(t,ki,"e"),t=vi.call(t,Ei,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vi.call(t,yi,"e+0$1"),t=vi.call(t,mi,"e-0$1"),e.alternate&&(t=vi.call(t,_i,"$1."),t=vi.call(t,Si,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===bi.call(e.specifier)?bi.call(t):wi.call(t)}function Vi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ji(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Vi(i):Vi(i)+e}var Ii=String.fromCharCode,$i=isNaN,Fi=Array.isArray;function Ai(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Oi(e){var r,t,i,n,a,o,c,s,l;if(!Fi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(di(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ai(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$i(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$i(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=gi(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$i(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$i(a)?String(i.arg):Ii(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ti(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=pi(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ji(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ci=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ri(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ni(e){var r,t,i,n;for(t=[],n=0,i=Ci.exec(e);i;)(r=e.slice(n,Ci.lastIndex-i[0].length)).length&&t.push(r),t.push(Ri(i)),n=Ci.lastIndex,i=Ci.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Pi(e){return"string"==typeof e}function Zi(e){var r,t;if(!Pi(e))throw new TypeError(Zi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ni(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Oi.apply(null,r)}function Gi(e){return null!==e&&"object"==typeof e}var Wi=function(e){if("function"!=typeof e)throw new TypeError(Zi("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ci(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Gi);function Li(e){var r,t,i;if(("Object"===(t=xr(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=gt.exec(i.toString()))return r[1]}return function(e){return Gi(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(e)?"Buffer":t}function Mi(e){return se(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)||function(e){return e instanceof mr||"Slice"===Li(e)}(e)}function Xi(){var e,r,t,i,n;if(e=arguments.length,!(this instanceof Xi)){if(1===e)return new Xi(arguments[0]);if(2===e)return new Xi(arguments[0],arguments[1]);if(3===e)return new Xi(arguments[0],arguments[1],arguments[2]);if(4===e)return new Xi(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new Xi(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<e;n++)t.push(arguments[n]);return r=Object.create(Xi.prototype),Xi.apply(r,t)}for(this._data=[],n=0;n<e;n++){if(!Mi(i=arguments[n]))throw new TypeError(A("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,String(i)));this._data.push(void 0===i?null:i)}return this}return function(e,r,t){ri(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Gi,"isObjectLikeArray",Wi),L(Xi,"name","MultiSlice"),M(Xi.prototype,"ndims",(function(){return this._data.length})),M(Xi.prototype,"data",(function(){return this._data.slice()})),L(Xi.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),L(Xi.prototype,"toJSON",(function(){var e,r,t,i;for(e=this._data,r={type:"MultiSlice",data:[]},i=0;i<e.length;i++)t=e[i],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),function(e){return e instanceof Xi||"MultiSlice"===Li(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isMultiSlice=r();
//# sourceMappingURL=browser.js.map