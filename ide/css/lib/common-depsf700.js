/*
  Common dependencies
  Version: 1.0.1
*/

/* js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

/* base64.js | https://gist.github.com/chrisveness/e121cffb51481bd1c142 | MIT */
function Base64Encode(r){if(/([^\u0000-\u00ff])/.test(r))throw Error("String must be ASCII");var t,e,n,o,h,a,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[],c="";if((a=r.length%3)>0)for(;a++<3;)c+="=",r+="\0";for(a=0;a<r.length;a+=3)e=(t=r.charCodeAt(a)<<16|r.charCodeAt(a+1)<<8|r.charCodeAt(a+2))>>18&63,n=t>>12&63,o=t>>6&63,h=63&t,f[a/3]=i.charAt(e)+i.charAt(n)+i.charAt(o)+i.charAt(h);return r=(r=f.join("")).slice(0,r.length-c.length)+c}function Base64Decode(r){if(!/^[a-z0-9+/]+={0,2}$/i.test(r)||r.length%4!=0)throw Error("Not base64 string");for(var t,e,n,o,h,a,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[],c=0;c<r.length;c+=4)t=(a=i.indexOf(r.charAt(c))<<18|i.indexOf(r.charAt(c+1))<<12|(o=i.indexOf(r.charAt(c+2)))<<6|(h=i.indexOf(r.charAt(c+3))))>>>16&255,e=a>>>8&255,n=255&a,f[c/4]=String.fromCharCode(t,e,n),64==h&&(f[c/4]=String.fromCharCode(t,e)),64==o&&(f[c/4]=String.fromCharCode(t));return r=f.join("")};

if (typeof window.atob === 'undefined') {
  window.atob = Base64Decode;
}

if (typeof window.btoa === 'undefined') {
  window.btoa = Base64Encode;
}
